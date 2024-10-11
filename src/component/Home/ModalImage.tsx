import { HomeImage, Image } from "../../assets/Styles/Home";


export default function ModalImage() {
  const listImage = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg"
  return (
    <HomeImage>
      <Image >
        <img className="home-image" src={listImage} />
      </Image>
      <button className="buton-image"
      >
        ABRIR IMAGEM NO MODAL
      </button>
    </HomeImage>
  );
}
