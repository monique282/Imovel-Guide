import {LeftSide}  from '../assets/Styles/Header';
import slogan from '../assets/images/slogan.png';

export default function LeftSideHeader() {
    return (
            <LeftSide>
                <img src={slogan} alt="" />
                <h1>Condomínio</h1>
                <h1>Fórum</h1>
                <h1>Guia</h1>
                <h1>Artigos</h1>
                <h1>Feramentas</h1>
            </LeftSide>
           
    );
}


