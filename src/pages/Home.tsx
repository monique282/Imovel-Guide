import { OnPop, Rule3, Below } from "../assets/Styles/Home";
import BrokersProfileHome from "../component/BrokersProfile";
import MessageHome from "../component/Message";

export default function Home() {

  return (
    <>
      <OnPop>
        <BrokersProfileHome />
        <MessageHome/>
        <Rule3>

        </Rule3>
      </OnPop>
      <Below>

      </Below>
    </>
  );
}
