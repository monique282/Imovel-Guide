import styled from "styled-components";

export const OnPop = styled.div`
    width: 100%;
    background-color: red;
    display: flex; 
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
`;

export const Broker = styled.div`
    height: 371px;
    width: 379px;
    border-radius: 5px;
    border: 2px solid black;  
    background-color: aqua;
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
`;

export const Data = styled.div`
    display: flex;
    align-items: center;
`;

export const Message = styled.div`
    height: 371px;
    width: 379px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: #15ff00;

`;

export const Rule3 = styled.div`
    height: 371px;
    width: 379px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: blue;
`;

export const Below = styled.div`
    width: 100%;
    background-color: blue;
`;

