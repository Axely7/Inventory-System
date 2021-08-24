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


module.exports = mongoose.model('Producto', ProductosSchema);