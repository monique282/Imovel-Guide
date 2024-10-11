export function calculateResult(first: number, second: number, third: number, setResult: React.Dispatch<React.SetStateAction<number | null>>) {
    if (first && second && third && !isNaN(Number(first)) && !isNaN(Number(second)) && !isNaN(Number(third))) {
        const res = (Number(second) * Number(third)) / Number(first);
        setResult(res);
    } else {
        alert("Por favor, preencha todos os campos");
    }
}

export function toClean(
    setFirst: React.Dispatch<React.SetStateAction<string>>,
    setSecond: React.Dispatch<React.SetStateAction<string>>,
    setThird: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<number | null>>
) {
    setFirst('')
    setSecond('')
    setThird('')
    setResult(null)
}