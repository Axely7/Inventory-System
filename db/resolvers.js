const Usuario = require('../models/Usuario')

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

            
            try{
                //Guardarlo en la base de datos
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;

            }catch(error){
                console.log(error);
            }
        }
    }
        
}

module.exports  = resolvers;