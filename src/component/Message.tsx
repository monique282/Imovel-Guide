import { useState } from "react";
import { Message } from "../assets/Styles/Home";
import InputMask from "react-input-mask";

export default function MessageHome() {
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");

    const [cpfError, setCpfError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [subjectError, setSubjectError] = useState("");

    const validatingCpf = (e) => {
        const value = e.target.value;
        setCpf(value);
        const cleanedCpf = value.replace(/\D/g, "");
        if (cleanedCpf.length < 11) {
            setCpfError("CPF inválido. Deve ter 11 dígitos.");
        } else {
            setCpfError("");
        }
    };

    const validatingPhone = (e) => {
        const value = e.target.value;
        setPhone(value);
        const cleanedPhone = value.replace(/\D/g, "");
        if (cleanedPhone.length < 10) {
            setPhoneError("Telefone inválido. Deve ter pelo menos 10 dígitos.");
        } else {
            setPhoneError("");
        }
    };
    const validatingSubject = (e) => {
        const value = e.target.value;
        setSubject(value);
        if (subject.length < 5) {
            setSubjectError("Precisa ter um assunto para fazer o envio.");
        } else {
            setSubjectError("");
        }
    };

    const sendData = () => {
        if (!cpfError && !phoneError && !subjectError) {
            setCpf("");
            setPhone("");
            setSubject("");
        } else {
            alert("Preencha o campo do assunto.");
        }
    };

    return (
        <Message>
            <h1 className="title-message">Mande uma mensagem:</h1>

            <InputMask
                mask="999.999.999-99"
                className="cpf-message"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={validatingCpf}
            />
            {cpfError && <p style={{ color: 'red',marginTop: -20, marginBottom: 10 }}>{cpfError}</p>}

            <InputMask
                mask="(99) 99999-9999"
                className="phone-message"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={validatingPhone}
            />
            {phoneError && <p style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{phoneError}</p>}

            <textarea
                className="subject-message"
                placeholder="Digite o assunto"
                maxLength={200}
                value={subject}
                onChange={validatingSubject}
            ></textarea>
            {subjectError && <p style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{subjectError}</p>}

            <button className="toSend-message" onClick={sendData}>
                Enviar Mensagem
            </button>
        </Message>
    );
}
