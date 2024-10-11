import { Message } from "../assets/Styles/Home";
import InputMask from "react-input-mask";

export default function MessageHome() {

    return (
        <Message>
            <h1 className="title-message">Mande uma mensagem:</h1>
            <InputMask mask="999.999.999-99" className="cpf-message" placeholder="Digite seu CPF" />
            <InputMask mask="(99) 99999-9999" className="phone-message" placeholder="Digite seu telefone" />
            <textarea className="subject-message" placeholder="Digite o assunto" maxLength={200}></textarea>
            <button className="toSend-message">Enviar Mensagem</button>
        </Message>

    );
}
