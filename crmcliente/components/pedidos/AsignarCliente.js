import React, {useState, useEffect} from 'react';
import Select from 'react-select';
const clientes = [
    { id: 1, nombre: 'Axel' },
    { id: 2, nombre: 'Jimenez' },
    { id: 3, nombre: 'Axel J' }
]

const AsignarCliente = () => {
    const [cliente, setCliente] = useState([]);

    useEffect(() =>{
        console.log(cliente);
    }, [cliente]);

    const seleccionarCliente = clientes =>{
        setCliente(clientes)
    }

    return (
        <>
            <p>1.- Asigna un Cliente al pedido</p>
            <Select options={clientes}
                isMulti={true}
                onChange={opcion => seleccionarCliente(opcion)}
                getOptionValue = {(opciones) => opciones.id}
                getOptionLabel = {(opciones) => opciones.nombre}
                placeholder = "Busque o Seleccione el Cliente"
                noOptionsMessage = {() => "No hay resultados"}
            />
        </>
    );
}

export default AsignarCliente; 