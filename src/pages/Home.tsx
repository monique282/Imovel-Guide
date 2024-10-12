import { HomeProps } from "../Interface/Screens";
import { OnPop, Below } from "../assets/Styles/Home";
import AnimationImageDownload from "../component/Home/AnimationImageDownload";
import BrokersProfileHome from "../component/Home/BrokersProfile";
import ImageOfTheProperty from "../component/Home/ImageOfTheProperty";
import MessageHome from "../component/Home/Message";
import ModalImage from "../component/Home/ModalImage";
import Rule from "../component/Home/Rule3";

export default function Home({isTablet}: HomeProps) {

  return (
    <>
      <OnPop>
        <BrokersProfileHome />
        <MessageHome />
        <Rule />
      </OnPop>
      <Below>
        <ModalImage />
        <AnimationImageDownload />
        <ImageOfTheProperty/>
      </Below>
    </>
  );
}
