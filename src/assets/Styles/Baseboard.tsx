import styled from "styled-components";

export const BaseboarContainer = styled.div`
   width: 100%;
   height: 70px;
   background-color: #1B2653;
   display: flex; 
   align-items: center; 
   justify-content: center;
`;
export const RightSide = styled.div`
    width: 60%;
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
    margin-right: 10px;
    h1{
        margin-left: 30px;
        color: white;
        margin-right: 30px;
    }
    img {
        height: 70px; 
    }
    @media(max-width: 1066px){
        width: 100%;
        align-items: center; 
        justify-content: center;
        margin-right: 0px;
        h1{
            margin-left: 10px;
            font-size: 12px;
            margin-right: 10px;
        } 
        img {
            height: 40px; 
        }
    }
`;
export const LeftSide = styled.div`
    width: 30%;
    display: flex; 
    align-items: center; 
    justify-content: flex-start;
    margin-right: 10px;
    h1 {
        margin-left: 20px;
        font-size: 18px; 
        color: white;
    }
`;

  
  