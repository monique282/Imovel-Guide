export function validatingCpf(
    e: React.ChangeEvent<HTMLInputElement>,
    setCpf: React.Dispatch<React.SetStateAction<string>>,
    setCpfError: React.Dispatch<React.SetStateAction<string>>
) {
    const value = e.target.value;
    setCpf(value);
    const cleanedCpf = value.replace(/[^\d]/g, '');
    if (cleanedCpf.length < 11) {
        setCpfError("CPF inválido. Deve ter 11 dígitos.");
        
    } else {
        setCpfError("");
        validateCPF(value,setCpfError);
    }
}

function validateCPF(e: string, setCpfError: React.Dispatch<React.SetStateAction<string>>) {
    let sum = 0;
    let rest: number;
    const cpf = e.replace(/[^\d]/g, ''); 
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        setCpfError("CPF digitado inválido.");
        return;
    }
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
    if (rest !== parseInt(cpf.substring(9, 10))) {
        setCpfError("CPF digitado inválido.");
        return;
    }
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
    if (rest !== parseInt(cpf.substring(10, 11))) {
        setCpfError("CPF digitado inválido.");
        return;
    }
    setCpfError("")
}


export function validatingPhone(
    e: React.ChangeEvent<HTMLInputElement>,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    setPhoneError: React.Dispatch<React.SetStateAction<string>>
) {
    const value = e.target.value;
    setPhone(value);
    const cleanedPhone = value.replace(/\D/g, "");
    if (cleanedPhone.length < 10) {
        setPhoneError("Telefone inválido. Deve ter pelo menos 10 dígitos.");
    } else {
        setPhoneError("");
    }
}

export function validatingSubject(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    setSubject: React.Dispatch<React.SetStateAction<string>>,
    setSubjectError: React.Dispatch<React.SetStateAction<string>>
) {
    const value = e.target.value;
    setSubject(value);
    if (value.length < 5) {
        setSubjectError("Precisa ter um assunto para fazer o envio.");
    } else {
        setSubjectError("");
    }
}
