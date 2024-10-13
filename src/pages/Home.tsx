import { OnPop } from "../assets/Styles/Home";
import AnimationImageDownload from "../component/Home/AnimationImageDownload";
import BrokersProfileHome from "../component/Home/BrokersProfile";
import ImageOfTheProperty from "../component/Home/ImageOfTheProperty";
import MessageHome from "../component/Home/Message";
import ModalImage from "../component/Home/ModalImage";
import Rule from "../component/Home/Rule3";

export default function Home() {

  return (
          <OnPop>
            <BrokersProfileHome />
            <MessageHome />
            <Rule />
            <ModalImage />
            <AnimationImageDownload />
            <ImageOfTheProperty />
          </OnPop>
  );
}


