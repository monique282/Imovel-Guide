import styled from "styled-components";

export const OnPop = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
`;

export const Broker = styled.div`
    height: 371px;
    width: 379px;
    border-radius: 5px;
    border: 1px solid black;  
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    .image-container{
        position: relative;
        height: 168px;
        width: 168px;
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
    height: 371px;
    width: 379px;
    border-radius: 5px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 15px;
    .title-message{
        margin-top: 10px;
        font-size: 30px;
        color: #1B2653;
        margin-bottom: 15px;
    }
    .cpf-message, .phone-message, .subject-message {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
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
    height: 371px;
    width: 379px;
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
        height: 200px;
        width: 350px;
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
        width: 70px;
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
   .calculate{
        background-color: #FE6613;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 5px;
    }
    .calculate:hover {
        background-color: #e65c00;
    
    }
`;

export const Below = styled.div`
    width: 100%;
  // background-color: blue;
`;

