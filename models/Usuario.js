const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    //Esto es lo que se creará en la base de datos.
    nombre:{
        type: String,
        required: true,
        trim: true //Elimina los espacios por error que se podrían 
        //incluir en el formulario
    },
    apellido:{
        type: String,
        required: true,
        trim: true

    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    }
    //Más adelante podemos agregar más campos.

});

module.exports = mongoose.model('Usuario', UsuariosSchema);