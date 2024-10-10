import slogan from "../assets/images/slogan.png";
import styled from "styled-components";


export default function Header() {
    return (
        <HeaderContainer>
            <img src={slogan} alt="" />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
   width: 100%;
   height: 60px;
   background-color: #1B2653;
   align-items: center; /* Centraliza o conteúdo verticalmente */
   padding: 0; /* Remove qualquer padding que possa estar aplicado */
   margin:-10; /* Remove qualquer margem que possa estar aplicada */
   
   img {
       margin: 0; /* Remove a margem padrão da imagem */
       padding: 0; /* Remove o padding da imagem */
   }
`;