import { HomeProps } from '../../Interface/Screens';
import { BaseboarContainer } from '../../assets/Styles/Baseboard';
import LeftSideHeader from './LeftSideHeader';
import RightSideHeader from './RightSideHeader';


export default function Baseboard({ isTablet }: HomeProps) {
    return (
        <>
            {isTablet ? (
                <BaseboarContainer>
                    <RightSideHeader />
                </BaseboarContainer>
            ) : (
                <BaseboarContainer>
                    <LeftSideHeader />
                    <RightSideHeader />
                </BaseboarContainer>
            )}
        </>

    );
}


