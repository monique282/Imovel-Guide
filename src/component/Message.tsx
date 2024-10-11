import { useState } from "react";
import { Message } from "../assets/Styles/Home";
import InputMask from "react-input-mask";

export default function MessageHome() {

    const [cpf, setCpf] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [subject, setSubject] = useState(""); 

    const sendData= () => {
        setCpf(""); 
        setPhone(""); 
        setSubject(""); 
    };

    return (
        <Message>
            <h1 className="title-message">Mande uma mensagem:</h1>
            <InputMask 
                mask="999.999.999-99" 
                className="cpf-message" 
                placeholder="Digite seu CPF" 
                value={cpf} 
                onChange={(e) => setCpf(e.target.value)} 
            />
            <InputMask 
                mask="(99) 99999-9999" 
                className="phone-message" 
                placeholder="Digite seu telefone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
            />
            <textarea 
                className="subject-message" 
                placeholder="Digite o assunto" 
                maxLength={200} 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
            ></textarea>
            <button className="toSend-message" onClick={sendData}>Enviar Mensagem</button> 
        
        </Message>

    );
}
