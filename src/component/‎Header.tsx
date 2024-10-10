import { HeaderContainer } from '../assets/Styles/Header';
import slogan from '../assets/images/slogan.png';


export default function Header() {
    return (
        <HeaderContainer>
            <img src={slogan} alt="" />
        </HeaderContainer>
    );
}

;