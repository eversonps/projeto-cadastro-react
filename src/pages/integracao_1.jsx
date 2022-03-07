import { useState } from "react"
import Layout from "../components/layout"

export default function Integracao(){
    const [cliente, setCliente] = useState({})
    const [codigo, setCodigo] = useState(1)


    function obterCliente(){
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
        .then(response=>response.json())
        .then(json =>{
            setCliente(json)
        })
    }

    
    
    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={() => obterCliente()}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}