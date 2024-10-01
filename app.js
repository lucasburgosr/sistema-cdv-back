const express = require('express');
const sequelize = require('./utils/database.js');
require('./utils/relaciones.js')
const productoRoutes = require('./routes/ProductoRoutes.js')
const bodegaRoutes = require('./routes/BodegaRoutes.js')
const precioSobremesaRoutes = require('./routes/PrecioSobremesaRoutes.js')
const precioMercadoLibreRoutes = require('./routes/PrecioMercadoLibreRoutes.js')
const precioMinoristaRoutes = require('./routes/PrecioMinoristaRoutes.js')
const precioMayoristaRoutes = require('./routes/PrecioMayoristaRoutes.js')
const precioDistribucionRoutes = require('./routes/PrecioDistribucionRoutes.js')
const precioBuenosAiresRoutes = require('./routes/PrecioBuenosAiresRoutes.js')
const costoYMargenRoutes = require('./routes/CostoYMargenRoutes.js')
const categoriaRoutes = require('./routes/CategoriaRoutes.js')
const varietalRoutes = require('./routes/VarietalRoutes.js')
const parametrosMeLiRoutes = require('./routes/ParametrosMeLiRoutes.js')
const usuariosRoutes = require('./routes/UsuarioRoutes.js')
const promocionRoutes = require('./routes/PromocionRoutes.js')
const authRoutes = require('./routes/AuthRoutes.js')
const usuarioService = require('./services/UsuarioService.js')
const cors = require('cors');
const app = express();
const port = 3000;

// Configuración de CORS
const corsOptions = {
    origin: 'https://sistema-cdv-front.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.use('/api', productoRoutes);
app.use('/api', bodegaRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', varietalRoutes);
app.use('/api', precioSobremesaRoutes);
app.use('/api', precioMercadoLibreRoutes);
app.use('/api', precioMinoristaRoutes);
app.use('/api', precioMayoristaRoutes);
app.use('/api', precioDistribucionRoutes);
app.use('/api', precioBuenosAiresRoutes);
app.use('/api', costoYMargenRoutes);
app.use('/api', parametrosMeLiRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', promocionRoutes);
app.use('/api', authRoutes);

/* const crearUsuario = async () => {
    try {
        const nuevoUsuario = {
            id: 1,
            nombreUsuario: "Usuario de prueba",
            clave: "usuario123",
            esAdmin: true,
            vistaPrecioMay: true,
            vistaPrecioMin: true,
            vistaPrecioMeLi: true,
            vistaPrecioDistri: true,
            vistaPrecioDepo: true,
            vistaPrecioBsAs: true, // Cambia vistaPreciosBsAs por vistaPrecioBsAs
            vistaPrecioSobremesa: true,
        };

        const usuarioCreado = await usuarioService.createUsuario(nuevoUsuario);
        console.log('Usuario creado:', usuarioCreado);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
    }
};

crearUsuario(); */

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch((error) => {
        console.error('Error creating database & tables:', error);
    });