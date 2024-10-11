import { OnPop, Below } from "../assets/Styles/Home";
import BrokersProfileHome from "../component/Home/BrokersProfile";
import MessageHome from "../component/Home/Message";
import Rule from "../component/Home/Rule3";

export default function Home() {


  return (
    <>
      <OnPop>
        <BrokersProfileHome />
        <MessageHome />
        <Rule/> 
      </OnPop>
      <Below>

      </Below>
    </>
  );
}
