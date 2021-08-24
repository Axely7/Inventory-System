const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    apellido:{
        type: String,
        required: true,
        trim: true
    },
    empresa:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefono:{
        type: String,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    },
    //Para especificar, definir los clientes que pertenecen a cada vendedor
    vendedor:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    }

});

module.exports = mongoose.model('Cliente', ClientesSchema);