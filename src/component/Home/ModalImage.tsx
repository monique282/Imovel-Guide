import React, { useState } from "react";
import { HomeImage, Image } from "../../assets/Styles/Home";
import { CloseButtonStyles, ModalContentStyles, ModalImageStyles, ModalStyles } from "../../assets/Styles/Baseboard";

export default function ModalImage() {
  const [showModal, setShowModal] = useState(false);
  const listImage = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg";

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <HomeImage>
      <Image>
        <img className="home-image" src={listImage} alt="Casa" />
      </Image>
      <button className="buton-image" onClick={handleOpenModal}>
        ABRIR IMAGEM NO MODAL
      </button>
      {showModal && (
        <ModalStyles className="modal">
          <ModalContentStyles className="modal-content" >
            <CloseButtonStyles className="close" onClick={handleCloseModal}>
              x
            </CloseButtonStyles>
            <ModalImageStyles src={listImage} alt="Imagem no Modal" />
          </ModalContentStyles>
        </ModalStyles>
      )}
    </HomeImage>
  );
}

