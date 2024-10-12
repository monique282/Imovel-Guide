import styled from "styled-components";

export const OnPop = styled.div`
    align-items: flex-start;
    justify-content: space-around; 
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 350px); 
    @media (max-width: 1066px) {
        grid-template-columns: repeat(2, 350px); 
    }
    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 350px);       
    }
`;
export const Broker = styled.div`
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;  
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 5%;
    .image-container{
        position: relative;
        height: 130px;
        width: 130px;
        border-radius: 3%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin-left: 8px;
    }
    .blurred-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(3px);
        transform: scale(1.5); 
        z-index: 1;
    }
    .sharp-image {
        position: relative;
        z-index: 2;
        width: 100%; 
        border-radius: 2%;
        object-fit: cover; 
    }
    .data-container{
        margin-left: 10px;   
    }
    .data-name{
        font-size: 20px;
        color: #1B2653;
    }
    .data-points{
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .data-telephone{
        font-size: 10px;
    }
    .data-seePhone{
        font-size: 10px;
        color: #FE6613;
        text-decoration: underline;
        cursor: pointer;
    }
`;
export const Data = styled.div`
    display: flex;
    align-items: center;
`;
export const Message = styled.div`
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 5%;
   .inputContainer-message{
        height: 85%;
        width: 99%;
    }
    .title-message{
        margin-top: 5px;
        font-size: 30px;
        color: #1B2653;
        margin-bottom: 5px;
    }
    .cpf-message, .phone-message, .subject-message {
        width: 90%;
        padding: 7px;
        margin-bottom: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        font-family: 'roboto';
    }
    .cpf-message::placeholder, 
    .phone-message::placeholder, 
    .subject-message::placeholder {
        color: #999; 
    }
    .subject-message {
        height: 20%;
        font-family: 'roboto';
        resize: none; 
    }
    .toSend-message { 
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 5px;
    }
    .toSend-message:hover {
        background-color: #e65c00;
    }
`;
export const Rule3 = styled.div`
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 5%;
   .title-rule{
        margin-top: 10px;
        font-size: 30px;
        color: #1B2653;
        margin-bottom: 15px;
   }
   .allBox-rule{
        height: 146px;
        width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-bottom: 35px;
   }
   .value-rule{
        width: 30%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        font-family: 'roboto';
   }
   .value-rule::placeholder{
        color: #999; 
   }
   .divider-rule{
        width: 50px;
        height: 0px;
        border: 1px solid #817b7b;
   }
   .firstBox-rule{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
   }
   .secondBox-rule{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
   .result-rule{
        width: 30%;
        height: 18px;
        padding: 10px;
        border: 1px solid #FE6613;
        border-radius: 5px;
        font-size: 16px;
        font-family: 'roboto';
   }
   .calculateToClean-rule{
        display: flex;
        justify-content: space-between;
   }
   .calculate{
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
    .calculate:hover {
        background-color: #e65c00;
    }
`;
export const HomeImage = styled.div`
    width: 100%;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
    .buton-image{
        width: 100%;
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
`;
export const Image = styled.div`
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;  
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 20px;
    .home-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
export const HomeAnimationImageDownload = styled.div`
    width: 100%;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .buton-image{
        width: 100%;
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        @media (max-width: 750px) {
        margin-bottom: 5%;
    }
    }
`;
export const ImageAnimation = styled.div`
    position: relative;
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .home-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    .buton-image {
        position: absolute;
        bottom: 10px;
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
    .guide-image{
        position: absolute;
        bottom: 10px;
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 46px;
        font-size: 16px;
        border-radius: 5px;
    }
`;
export const HomeImage3 = styled.div`
    width: 100%;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
export const ModalZoomImageStyles = styled.img`
    max-width: 100%;  
    max-height: 95%;
    margin-top: 30px;
    background-color: #153ee1;
    animation: zoomOut 10s ease-out forwards;
    @keyframes zoomOut {
        0% {
            transform: scale(3.5);  
        }
        100% {
            transform: scale(1);
        }
    }
`;
