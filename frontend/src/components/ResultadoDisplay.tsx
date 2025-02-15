interface Props {
    converted: string | null;
  }
  
  export default function ResultDisplay({ converted }: Props) {
    return (
      <>
        {converted && (
          <p className="converted-text">
            💸 Valor Convertido: {converted}
          </p>
        )}
      </>
    );
  }
  