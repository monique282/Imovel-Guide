import { HomeProps } from '../../Interface/Screens';
import { HeaderContainer } from '../../assets/Styles/Header';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';


export default function Header({isTablet}: HomeProps) {
    return (
        <HeaderContainer>
            <LeftSideHeader isTablet={isTablet} />
            <RightSideHeader isTablet={isTablet} />
        </HeaderContainer>
    );
}


