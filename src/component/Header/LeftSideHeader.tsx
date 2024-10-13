import { LeftSide } from '../../assets/Styles/Header';
import slogan from '../../assets/images/slogan.png';
import { HomeProps } from '../../Interface/Screens';

export default function LeftSideHeader({isTablet}: HomeProps) {
    return (
        <LeftSide>
            {isTablet ? ( 
            <img src={slogan} alt="Slogan Imovel Guide" />
            ) : (
                <>
                    <img src={slogan} alt="Slogan Imovel Guide" />
                    <h1>Condomínio</h1>
                    <h1>Fórum</h1>
                    <h1>Guia</h1>
                    <h1>Artigos</h1>
                    <h1>Ferramentas</h1>
                </>
            )}
        </LeftSide>
    );
}
