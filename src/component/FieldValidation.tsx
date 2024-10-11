export function validatingCpf(
    e: React.ChangeEvent<HTMLInputElement>,
    setCpf: React.Dispatch<React.SetStateAction<string>>,
    setCpfError: React.Dispatch<React.SetStateAction<string>>
) {
    const value = e.target.value;
    setCpf(value);
    const cleanedCpf = value.replace(/\D/g, "");
    if (cleanedCpf.length < 11) {
        setCpfError("CPF inválido. Deve ter 11 dígitos.");
    } else {
        setCpfError("");
    }
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
