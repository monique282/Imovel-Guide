import { useState } from "react";
import { Message } from "../../assets/Styles/Home";
import InputMask from "react-input-mask";
import { validatingCpf, validatingPhone, validatingSubject } from "./FieldValidation";

export default function MessageHome() {
    const [cpf, setCpf] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [cpfError, setCpfError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [subjectError, setSubjectError] = useState<string>("");

    const sendData = () => {
        if (!cpfError && !phoneError && !subjectError) {
            setCpf("");
            setPhone("");
            setSubject("");
        } else {
            alert("Preencha os campos corretamente.");
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
                onChange={(e) => validatingCpf(e, setCpf, setCpfError)}
            />
            {cpfError && <p style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{cpfError}</p>}

            <InputMask
                mask="(99) 99999-9999"
                className="phone-message"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => validatingPhone(e, setPhone, setPhoneError)} 
            />
            {phoneError && <p style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{phoneError}</p>}

            <textarea
                className="subject-message"
                placeholder="Digite o assunto"
                maxLength={200}
                value={subject}
                onChange={(e) => validatingSubject(e, setSubject, setSubjectError)} 
            ></textarea>
            {subjectError && <p style={{ color: 'red', marginTop: -20, marginBottom: 10 }}>{subjectError}</p>}

            <button className="toSend-message" onClick={sendData}>
                Enviar Mensagem
            </button>
        </Message>
    );
}