import { OnPop, Below } from "../assets/Styles/Home";
import BrokersProfileHome from "../component/BrokersProfile";
import MessageHome from "../component/Message";
import Rule from "../component/Rule3";

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
