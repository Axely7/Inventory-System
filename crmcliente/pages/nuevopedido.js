import React, {useContext} from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente'
import AsignarProductos from '../components/pedidos/AsignarProductos'
// Context de pedidos
import PedidoContext from '../context/pedidos/PedidoContext'

const NuevoPedido = () =>{

    // Utilizar context y extraer sus funciones y valores
    const pedidoContext = useContext(PedidoContext);
    const {holaMundoEnUseReducer} = pedidoContext;


    return(
        <Layout>
            <h1 className="text-2xl text-gray-80 font-light">Crear Nuevo Pedido</h1>
            <AsignarCliente></AsignarCliente>
            <AsignarProductos></AsignarProductos>
        </Layout>
        
        
    );
}

export default NuevoPedido;