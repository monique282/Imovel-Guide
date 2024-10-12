import styled from "styled-components";

export const BaseboarContainer = styled.div`
   width: 100%;
   height: 70px;
   background-color: #1B2653;
   display: flex; 
   align-items: center; 
   justify-content: space-around;
`;
export const RightSide = styled.div`
    width: 50%;
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
        width: 10%; 
    }
`;
export const LeftSide = styled.div`
    width: 50%;
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

  
  