const costoYMargenRepository = require('../repositories/CostoYMargenRepository');
const precioBuenosAiresRepository = require('../repositories/PrecioBuenosAiresRepository');
const precioMayoristaRepository = require('../repositories/PrecioMayoristaRepository');
const precioMinoristaRepository = require('../repositories/PrecioMinoristaRepository');
const precioSobremesaRepository = require('../repositories/PrecioSobremesaRepository');
const precioDistribucionRepository = require('../repositories/PrecioDistribucionRepository')
const productoRepository = require('../repositories/ProductoRepository')
const precioMercadoLibreRepository = require('../repositories/PrecioMercadoLibreRepository.js');
const parametrosMeLiRepository = require('../repositories/ParametrosMeLiRepository.js');

class CostoYMargenService {

    // Método que calcula los precios minoristas, mayoristas, para Buenos Aires y para Distribución
    calcularPrecio(costoConIva, descuento, descuentoPp, acciones1, acciones2, margen, unidades) {
        const descuentoDecimal = descuento / 100;
        const margenDecimal = margen / 100;
        const descuentoPpDecimal = descuentoPp === 0 ? 0 : descuentoPp / 100

        const precioUnidad = Math.round(costoConIva *
            (1 - descuentoDecimal) *
            (1 - descuentoPpDecimal) *
            (acciones1 / (acciones1 + acciones2)) *
            (1 + margenDecimal));

        const precioCaja = Math.round(precioUnidad * unidades);

        return {
            precioUnidad,
            precioCaja,
        };
    }

    // Método que calcula los precios para Sobremesa
    calcularPrecioSobremesa(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenSobremesa) {

        const descuentoDecimal = descuento / 100;
        const descuentoPpDecimal = descuentoPp / 100;
        const margenSobremesaDecimal = margenSobremesa / 100;

        const precio = Math.round(costoConIva *
            (1 - descuentoDecimal) *
            (1 - descuentoPpDecimal) *
            (acciones1 / (acciones1 + acciones2)) *
            (1 + margenSobremesaDecimal));

        const precioPorCopa = Math.round(precio / 6);

        return {
            precio,
            precioPorCopa,
        };
    }

    //Métodos que calcula los precios para Mercado Libre
    calcularPrecioMercadoLibre(
        costoConIva, unidades, margenMeLi, margenLimite,
        precioLimite1, precioLimite2, cf1, cf2, costoEnvio,
        tasa3, tasa6, tasa12
    ) {
        const totalCosto = costoConIva * unidades;
        const limite1 = precioLimite1 / 1.8;
        const limite2 = precioLimite2 / 1.8;
        const margenMeliDecimal = margenMeLi / 100;
        const margenLimiteDecimal = margenLimite / 100;

        const tasa3Decimal = tasa3 / 100;
        const tasa6Decimal = tasa6 / 100;
        const tasa12Decimal = tasa12 / 100;

        let precioMeLiCaja;
        let precioMeLiIndividual;

        // Cálculos para Precio en Caja
        if (totalCosto < limite1) {
            precioMeLiCaja = (margenMeliDecimal > margenLimiteDecimal)
                ? totalCosto * (1 + margenMeliDecimal) + cf1
                : totalCosto * (1 + margenMeliDecimal) + cf1;
        } else if (totalCosto < limite2) {
            precioMeLiCaja = (margenMeliDecimal > margenLimiteDecimal)
                ? totalCosto * (1 + margenMeliDecimal) + cf2
                : totalCosto * (1 + margenMeliDecimal) + cf2;
        } else {
            precioMeLiCaja = (margenMeliDecimal > margenLimiteDecimal)
                ? totalCosto * (1 + margenMeliDecimal)
                : totalCosto * (1 + margenMeliDecimal) + costoEnvio;
        }

        precioMeLiCaja = Math.round(precioMeLiCaja);

        // Cálculos para Precio por Unidad
        if (costoConIva < limite1) {
            precioMeLiIndividual = (margenMeliDecimal > margenLimiteDecimal)
                ? costoConIva * (1 + margenMeliDecimal) + cf1
                : costoConIva * (1 + margenMeliDecimal) + cf1;
        } else if (costoConIva < limite2) {
            precioMeLiIndividual = (margenMeliDecimal > margenLimiteDecimal)
                ? costoConIva * (1 + margenMeliDecimal) + cf2
                : costoConIva * (1 + margenMeliDecimal) + cf2;
        } else {
            precioMeLiIndividual = (margenMeliDecimal > margenLimiteDecimal)
                ? costoConIva * (1 + margenMeliDecimal)
                : costoConIva * (1 + margenMeliDecimal) + costoEnvio;
        }

        precioMeLiIndividual = Math.round(precioMeLiIndividual);

        // Cálculo para precios con cuotas
        const preciosCuotas = {
            precioCuotas3Caja: Math.round(precioMeLiCaja * (1 + tasa3Decimal)),
            precioCuotas6Caja: Math.round(precioMeLiCaja * (1 + tasa6Decimal)),
            precioCuotas12Caja: Math.round(precioMeLiCaja * (1 + tasa12Decimal)),
            precioCuotas3Individual: Math.round(precioMeLiIndividual * (1 + tasa3Decimal)),
            precioCuotas6Individual: Math.round(precioMeLiIndividual * (1 + tasa6Decimal)),
            precioCuotas12Individual: Math.round(precioMeLiIndividual * (1 + tasa12Decimal)),
        };

        return {
            precioMeLiCaja,
            precioMeLiIndividual,
            ...preciosCuotas,
        };
    }



    async completarTablasPrecios(productoId, costosYMargenes) {

        //Extrae las propiedades necesarias para el cálculo de los precios
        const { costoConIva, descuento, descuentoPp, acciones1, acciones2, margenMay, margenMin, margenBsAs, margenSobremesa, margenDistri, margenMeLi } = costosYMargenes;

        console.log('ESTE ES EL DESCUENTO PP QUE LLEGA ACÁ: \n\n\n', descuentoPp);

        //Busca el producto al que se le están actualizando los precios para obtener sus unidades
        const producto = await productoRepository.findById(productoId);

        console.log('ESTE ES EL PRODUCTO DEL QUE SE TIENE QUE OBTENER EL ID', producto)

        const unidades = producto.unidades;

        // Calcular precios
        const preciosMayoristas = this.calcularPrecio(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenMay, unidades);
        const preciosMinoristas = this.calcularPrecio(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenMin, unidades);
        const preciosBsAs = this.calcularPrecio(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenBsAs, unidades);
        const precioSobremesa = this.calcularPrecioSobremesa(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenSobremesa, unidades)
        const precioDistribucion = this.calcularPrecio(costoConIva, descuento, descuentoPp, acciones1, acciones2, margenDistri, unidades);

        await precioMayoristaRepository.updateByProductoId(productoId, {
            precioUnidad: preciosMayoristas.precioUnidad,
            precioCaja: preciosMayoristas.precioCaja,
        });

        await precioMinoristaRepository.updateByProductoId(productoId, {
            precioUnidad: preciosMinoristas.precioUnidad,
            precioCaja: preciosMinoristas.precioCaja,
        })

        await precioBuenosAiresRepository.updateByProductoId(productoId, {
            precioUnidad: preciosBsAs.precioUnidad,
            precioCaja: preciosBsAs.precioCaja,
        })

        await precioSobremesaRepository.updateByProductoId(productoId, {
            precio: precioSobremesa.precio,
            precioPorCopa: precioSobremesa.precioPorCopa,
        })

        await precioDistribucionRepository.updateByProductoId(productoId, {
            precioMayUnidad: precioDistribucion.precioUnidad,
            precioMayCaja: precioDistribucion.precioCaja
        })

        const parametrosMeLi = await parametrosMeLiRepository.findById(1);

        if (parametrosMeLi) {
            await this.completarTablaMercadoLibre(parametrosMeLi);
        }

    }

    async completarTablaMercadoLibre(parametrosMeLi) {
        try {
            console.log('Y ACÁ SE ESTÁ EJECUTANDO???', parametrosMeLi);

            const costosYMargenes = await costoYMargenRepository.findAll();
            const { margenLimite, precioLimite1, precioLimite2, costoEnvio, cf1, cf2, tasa3, tasa6, tasa12 } = parametrosMeLi;

            let actualizacionesRealizadas = false; // Variable para rastrear si se realizaron actualizaciones

            for (const costo of costosYMargenes) {
                try {
                    console.log('QUE TIENE ESTE COSTO???', costo);
                    const producto = await productoRepository.findById(costo.productoId);

                    console.log('PARAMETROS MELI: ', parametrosMeLi);
                    console.log('UNIDADES', producto.unidades);

                    const preciosMercadoLibre = this.calcularPrecioMercadoLibre(
                        costo.costoConIva,
                        producto.unidades,
                        costo.margenMeLi,
                        margenLimite,
                        precioLimite1,
                        precioLimite2,
                        cf1,
                        cf2,
                        costoEnvio,
                        tasa3,
                        tasa6,
                        tasa12
                    );

                    console.log('CREÓ LOS PRECIOS DE MERCADO LIBRE???', producto.id, preciosMercadoLibre);

                    // Actualización en la base de datos
                    await precioMercadoLibreRepository.updateByProductoId(producto.id, {
                        precioMLIndividual: preciosMercadoLibre.precioMeLiIndividual,
                        precioMLCaja: preciosMercadoLibre.precioMeLiCaja,
                        precioCuotas3Individual: preciosMercadoLibre.precioCuotas3Individual,
                        precioCuotas6Individual: preciosMercadoLibre.precioCuotas6Individual,
                        precioCuotas12Individual: preciosMercadoLibre.precioCuotas12Individual,
                        precioCuotas3Caja: preciosMercadoLibre.precioCuotas3Caja,
                        precioCuotas6Caja: preciosMercadoLibre.precioCuotas6Caja,
                        precioCuotas12Caja: preciosMercadoLibre.precioCuotas12Caja,
                    });

                    actualizacionesRealizadas = true; // Indica que se realizó al menos una actualización
                } catch (error) {
                    console.error('Error al actualizar precios para producto:', costo.productoId, error);
                }
            }

            return actualizacionesRealizadas; // Retorna si se realizaron actualizaciones
        } catch (error) {
            console.error('Error al completar la tabla de Mercado Libre:', error);
            return false; // Retorna false en caso de error
        }
    }


    async createCostoYMargen(data) {
        // Eliminar campos innecesarios
        const { cantidadMinVentaDistri, cantidadMinVentaMayorista, costo, ...filteredData } = data;
    
        // Recorremos las claves del objeto `filteredData` y convertimos los valores vacíos a 0,
        // y aplicamos `parseFloat` a los campos numéricos.
        const cleanedData = Object.fromEntries(
            Object.entries(filteredData).map(([key, value]) => {
                // Si el valor es una cadena vacía, lo convertimos a 0
                if (value === '') return [key, 0];
    
                // Si el valor es booleano y es NaN, lo convertimos a 0 o 1
                if (key === 'iva') {
                    return [key, (value === true || value === 'true') ? 1 : 0];
                }
    
                // Si el valor es numérico (y no es nulo o indefinido), lo convertimos a float
                if (!isNaN(value) && value !== null && value !== undefined) {
                    return [key, parseFloat(value)];
                }
    
                // Para todos los otros valores, los dejamos tal cual
                return [key, value];
            })
        );
    
        console.log(cleanedData);
    
        // Crear el registro con los valores modificados
        const costoYMargen = await costoYMargenRepository.create(cleanedData);
    
        // Completar las tablas de precios con la lógica correspondiente
        await this.completarTablasPrecios(data.productoId, costoYMargen);
    
        return costoYMargen;
    }
    


    async updateCostoYMargen(id, data) {

        if (data.costoConIva) {
            data.costoSinIva = Math.round(data.costoConIva / 1.21);
        }

        const updatedCostoYMargen = await costoYMargenRepository.update(id, data);

        // Completar las tablas de precios después de actualizar los costos y márgenes
        await this.completarTablasPrecios(data.productoId, data);

        return updatedCostoYMargen;
    }

    async updateCostosYMargenesMultiples(costosYMargenesArray) {
        try {
            // Asegúrate de que `costosYMargenesArray` es un array
            if (!Array.isArray(costosYMargenesArray)) {
                throw new Error('El parámetro debe ser un array de costos y márgenes');
            }

            // Itera sobre el array de costos y márgenes
            for (const costosYMargenes of costosYMargenesArray) {
                // Actualiza cada costo y margen individualmente
                const { id, productoId } = costosYMargenes;
                if (!id || !productoId) {
                    throw new Error('Cada objeto de costos y márgenes debe tener un id y un productoId');
                }

                console.log('ESTE ES EL ID DEL PRODUCTO QUE TIENE ESTE COSTO', productoId)

                // Actualiza el costo y margen en la base de datos
                await this.updateCostoYMargen(productoId, costosYMargenes)
            }

            return { message: 'Costos y márgenes actualizados correctamente' };

        } catch (error) {
            console.error('Error en updateCostosYMargenes:', error.message);
            throw error; // Lanza el error para que sea manejado en otro lugar
        }
    }


    async getCostoYMargenById(id) {
        return await costoYMargenRepository.findById(id);
    }

    async deleteCostoYMargen(id) {
        return await costoYMargenRepository.delete(id);
    }

    async getAllCostoYMargens() {
        return await costoYMargenRepository.findAll();
    }
}

module.exports = new CostoYMargenService();
