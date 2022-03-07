import Layout from "../components/layout"
import Navegador from "../components/Navegador"

export default function Inicio(){
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
        <Navegador destino="/estiloso" texto="estiloso"/>
        <Navegador destino="/exemplo" texto="exemplo" cor="#9400d3"/>
        <Navegador destino="/jsx" texto="jsx" cor="crimson" />
    </div>
  )
}

