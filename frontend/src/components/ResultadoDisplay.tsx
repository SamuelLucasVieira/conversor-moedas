interface Props {
    converted: string | null;
}

export default function ResultDisplay({ converted }: Props) {
    console.log("Valor convertido recebido:", converted); // Teste para depuração

    return (
        <>
            {converted && <p className="text-green-500">Valor Convertido: {converted}</p>}
        </>
    );
}
