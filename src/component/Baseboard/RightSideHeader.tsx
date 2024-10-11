import { RightSide } from '../../assets/Styles/Baseboard';
import slogan from '../../assets/images/slogan.png';

export default function RightSideHeader() {
    return (
        <RightSide >
            <h1>@ Copyright 2022. Todos os direitos reservados</h1>
            <img src={slogan} alt="Slogan Imovel Guide" />
        </RightSide>
    );
}


