import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";


export default function Inicio () {
  const {selecionarCliente, excluirCliente, cliente, novoCliente, salvarCliente, clientes, tableVisivel, exibirTable } = useClientes()

  return (
    <div className= {`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { tableVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
        </>
        ) :
        (<Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => exibirTable()}/> )}
      </Layout>
    </div>
  )
}

