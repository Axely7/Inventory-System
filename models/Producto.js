const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },

    existencia:{
        type: Number, /*Abarca float e Int, cualquir tipo de número*/
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});


ProductosSchema.index({nombre: 'text'}); //Para realizar busqueda por producto

module.exports = mongoose.model('Producto', ProductosSchema);