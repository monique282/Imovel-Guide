import { BaseboarContainer } from '../../assets/Styles/Baseboard';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';


export default function Baseboard() {
    return (
        <BaseboarContainer>
            <LeftSideHeader />
            <RightSideHeader />
        </BaseboarContainer>
    );
}


