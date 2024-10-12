import { Register, RightSide } from '../../assets/Styles/Header';
import { HomeProps } from '../../Interface/Screens';
import MenuIcon from '@mui/icons-material/Menu';

export default function RightSideHeader({ isTablet }: HomeProps) {
    
    return (
        <RightSide >
            {isTablet ? (
                <MenuIcon style={{ fontSize: '40px', color: '#fff',  width: '150px' , height: '100px' }} />
            ) : (
                <>
                    <h1>Cotar Imovél</h1>
                    <h1>Planos</h1>
                    <h1>Entrar</h1>
                    <Register>
                        <p>CADASTRA-SE</p>
                    </Register>
                </>
            )}
        </RightSide>
    );
}


