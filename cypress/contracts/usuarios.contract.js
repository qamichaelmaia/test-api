const Joi = require('joi')

const usuariosSchema = Joi.objects({
    quantidade: Joi.number(),
    usuarios: Joi.array().items({
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrador: Joi.boolean(),
        _id: Joi.string()
    })
});

export default usuariosSchema;