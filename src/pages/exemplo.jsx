import Cabecalho from "../components/Cabecalho";
import Layout from "../components/layout";

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componente">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Olá amigos"/>
        </Layout>
    )
}