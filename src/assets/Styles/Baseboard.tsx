import styled from "styled-components";

export const BaseboarContainer = styled.div`
   width: 100%;
   height: 70px;
   background-color: #1B2653;
   display: flex; 
   align-items: center; 
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
        margin-right: 30px;
    }
`;
export const ModalStyles = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
  export const ModalContentStyles = styled.div`
    width: 50%;
    height: 50%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    text-align: center;
`;
  export const CloseButtonStyles = styled.span`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #FE6613;
    font-family: Roboto;
    top: 10px;
    right: 0px;
    padding-right: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    font-size: 30px;
    cursor: pointer;
`;
  export const ModalImageStyles = styled.img`
    max-width: 100%;  
    max-height: 95%;
    margin-top: 30px;
    background-color: #153ee1;
`;
  
  