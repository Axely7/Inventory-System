const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});

const crearToken = (usuario, secreta, expiresIn) => {
    //console.log(usuario);
    const {id, email, nombre, apellido} = usuario;

    return jwt.sign({id, email, nombre, apellido,}, secreta, {expiresIn})
}


// Resolvers
const resolvers={
    Query:{
            obtenerCurso: () => "Algo"
    },
    Mutation:{
        nuevoUsuario: async (_, { input }) => {

            const {email, password} = input;

            //Revisar si el usuario ya esta registrado
            const existeUsuario = await Usuario.findOne({email});
            console.log(existeUsuario);
            if(existeUsuario){
                throw new Error('El usuario ya está registrado');
            }
            //Hashear su password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            
            try{
                //Guardarlo en la base de datos
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;

            }catch(error){
                console.log(error);
            }
        },
        autenticarUsuario:async (_, {input}) =>{
            
            const {email, password} = input;

            //Si el usuario existe
            const existeUsuario = await Usuario.findOne({email});
            if(!existeUsuario){
                throw new Error('El usuario no existe');
            }

            //Revisar si el password es correcto
            const passwordCorrecto = await bcryptjs.compare(password, existeUsuario.password);
            if(!passwordCorrecto){
                throw new Error('El password es incorrecto');
            }

            //Crear el token
            return{
                token: crearToken(existeUsuario, process.env.SECRETA, '24h') /*Al día siguiente tendrían que iniciar sesión*/
            }
        }
    }
        
}

module.exports  = resolvers;