import { useState } from "react";
import { CloseButtonStyles, HomeImage3, ImageAnimation, ModalContentStyles, ModalStyles, ModalZoomImageStyles } from "../../assets/Styles/Home";

export default function ImageOfTheProperty() {
    const [showModal, setShowModal] = useState(false);
    const listImage = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg";

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <HomeImage3>
            <ImageAnimation >
                <img className="home-image" src={listImage} onClick={handleOpenModal} />
            </ImageAnimation>
            {showModal && (
                <ModalStyles className="modal">
                    <ModalContentStyles className="modal-content" >
                        <CloseButtonStyles className="close" onClick={handleCloseModal}>
                            x
                        </CloseButtonStyles>
                        <ModalZoomImageStyles src={listImage} alt="Imagem na animação" />
                    </ModalContentStyles>
                </ModalStyles>
            )}
        </HomeImage3>
    );
}
