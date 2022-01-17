import { useEffect, useState } from "react"
import ClienteRepositorio from "../backend/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import useTableOrForm from "./useTableOrForm"

export default function useClientes() {
    const {formVisivel, tableVisivel, exibirForm, exibirTable} = useTableOrForm()
    
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [clientes, setClientes] = useState<Cliente[]>([]) 
    const [cliente, setCliente] = useState<Cliente>(Cliente.void()) 

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {setClientes(clientes); exibirTable()})
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.void())
        exibirForm()
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        tableVisivel,
        formVisivel,
        exibirForm,
        exibirTable
    }
}