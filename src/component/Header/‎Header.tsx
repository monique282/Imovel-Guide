import { HeaderContainer } from '../../assets/Styles/Header';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';


export default function Header() {
    return (
        <HeaderContainer>
            <LeftSideHeader />
            <RightSideHeader />
        </HeaderContainer>
    );
}


