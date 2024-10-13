
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #112157; 
    @media (max-width: 1066px) { 
        align-items: center;
        justify-content: center;
        padding: 0px;
    }
`;
export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;    
    img {
        width: 150px; 
    }
    h1 {
        margin-left: 20px;
        font-size: 18px; 
        color: white;
    }
    @media (max-width: 1066px) { 
        align-items: center;
        justify-content: center;
        padding: 0px;
    }
`;
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    h1 {
        margin-right: 5%;
        font-size: 18px;
        color: white;
    }
    @media (max-width: 1066px) { 
        align-items: center;
        justify-content: center;
        padding: 0px;
    }
`;
export const Register = styled.div`
        width: 150px;
        height: 30px;
        margin-left: 6%;
        color: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        border: 2px solid white;
`;
