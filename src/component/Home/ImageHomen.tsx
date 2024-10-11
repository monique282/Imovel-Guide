import { HomeImage3, ImageAnimation, } from "../../assets/Styles/Home";


export default function ImageHomen() {
    const listImage = "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_640.jpg"
    return (
        <HomeImage3>
            <ImageAnimation >
                <img className="home-image" src={listImage} />
            </ImageAnimation>
        </HomeImage3>
    );
}
