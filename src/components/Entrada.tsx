interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    valorMudou?: (valor: any) => void
    somenteLeitura?: boolean
    className: string
}

export default function Entrada (props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">{props.texto}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-10 px-4 py-2 ${props.somenteLeitura? '' : 'focus:bg-white'}`}
            />
        </div>
    )
}