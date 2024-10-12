import { HomeAnimationImageDownload, ImageAnimation } from "../../assets/Styles/Home";

export default function AnimationImageDownload() {
    const listImage = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg";

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = listImage; 
        link.download = 'image-download.jpg'; 
        link.rel = 'noopener noreferrer'; 
        link.click(); 
    };

    return (
        <HomeAnimationImageDownload>
            <ImageAnimation>
                <img className="home-image" src={listImage} alt="House" />
                <button className="buton-image">
                    Imovel guide
                </button>
            </ImageAnimation>
            <button className="buton-image" onClick={handleDownload}>
                Download
            </button>
        </HomeAnimationImageDownload>
    );
}
