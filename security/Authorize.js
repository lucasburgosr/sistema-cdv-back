const authorize = (requiredPerm) => {
    return (req, res, next) => {
        const { permisos } = req.user;

        if (!permisos || !permisos[requiredPerm]) {
            return res.status(403).json({ message: 'No tienes permiso para ver este contenido' });
        }

        next();
    };
};

module.exports = authorize;
