const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioService = require('../services/UsuarioService');

class AuthController {
    async login(req, res) {
        try {
            const { nombreUsuario, clave } = req.body;

            // Buscar el usuario por nombre
            const usuario = await usuarioService.getUsuarioByNombreUsuario(nombreUsuario);

            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            // Verificar la contraseña usando bcrypt
            const isPasswordValid = await bcrypt.compare(clave, usuario.clave);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            // Generar el token JWT
            const token = jwt.sign(
                {
                    id: usuario.id,
                    nombreUsuario: usuario.nombreUsuario,
                    esAdmin: usuario.esAdmin,
                    permisos: {
                        vistaPrecioMay: usuario.vistaPrecioMay,
                        vistaPrecioMin: usuario.vistaPrecioMin,
                        vistaPrecioMeLi: usuario.vistaPrecioMeLi,
                        vistaPrecioDistri: usuario.vistaPrecioDistri,
                        vistaPrecioDepo: usuario.vistaPrecioDepo,
                        vistaPrecioBsAs: usuario.vistaPrecioBsAs,
                        vistaPrecioSobremesa: usuario.vistaPrecioSobremesa
                    }
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            // Devolver el token
            return res.status(200).json({ token });
        } catch (error) {
            console.error('Error en el login:', error.message);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

module.exports = new AuthController();
