import styled from "styled-components";

export const OnPop = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`;

export const Broker = styled.div`
    height: 300px;
    width: 350px;
    border-radius: 5px;
    border: 1px solid black;  
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
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
        cursor: pointer
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

export const Below = styled.div`
    width: 100%;
    display: flex; 
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 30px;
`;
export const HomeImage = styled.div`
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
    }
`
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
    }
`
export const HomeAnimationImageDownload = styled.div`
    width: 100%;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .buton-image{
        width: 50%;
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
`
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
`
export const HomeImage3 = styled.div`
    width: 100%;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`