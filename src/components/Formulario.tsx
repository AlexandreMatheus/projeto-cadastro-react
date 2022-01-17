import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario (props: FormularioProps) {
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (<Entrada somenteLeitura texto="Código" valor={id} className="mb-4"/>) : false}

            <Entrada valor={nome} texto="Nome" valorMudou={setNome} className="mb-4"/>
            <Entrada valor={idade} texto="Idade" tipo="number" valorMudou={setIdade} className="mb-4"/>
            <div className="flex mt-7 justify-end ">
                <Botao cor="green" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}> {id ? 'Alterar' : 'Salvar'} </Botao>
                <Botao cor="gray" onClick={props.cancelado}> Cancelar </Botao>
            </div>
        </div>

        
    )
}