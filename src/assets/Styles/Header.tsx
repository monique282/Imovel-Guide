import styled from "styled-components";

export const HeaderContainer = styled.div`
   width: 100%;
   height: 70px;
   background-color: #1B2653;
   display: flex; 
   align-items: center; 
`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex; 
    align-items: center; 
    img {
        width: 20%;
        margin-left: 40px;
        margin-right: 20px;
    }
    h1{
        margin-left: 30px;
        color: white;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
    margin-right: 50px;
    h1{
        margin-left: 30px;
        color: white;
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
`