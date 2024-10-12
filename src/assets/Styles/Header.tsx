
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #112157; 
    @media (max-width: 1100px) { 
        align-items: center;
        justify-content: space-evenly;
    }
`;
export const LeftSide = styled.div`
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
    @media (max-width:  1100px) { 
        flex-direction: column;
        h1 {
        margin-left: 0;
        font-size: 16px; 
        }
    }
`;
export const RightSide = styled.div`
    display: flex;
    align-items: center;
    h1 {
        margin-right: 20px;
        font-size: 18px;
        color: white;
    }
    @media (max-width:  1100px) { 
        flex-direction: column;
        h1 {
        margin-right: 0;
        font-size: 16px;
        }
    }
`;
export const Register = styled.div`
        width: 150px;
        height: 30px;
        margin-left: 70px;
        color: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        border: 2px solid white;
    @media (max-width:  1100px) { 
        width: 100%;
        text-align: center;
        padding: 8px 0;
    }
`;
