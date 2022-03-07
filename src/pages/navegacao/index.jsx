import Layout from "../../components/layout"

export default function Navegacao(props){
    return (
        <Layout titulo="Exemplo de Navegação #01">
            <h1>{props.texto}</h1>    
        </Layout>
    )
}