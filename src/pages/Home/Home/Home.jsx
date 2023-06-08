import CallToAction from "../CallToAction/CallToAction";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider> 
           <Classes></Classes>
           <Instructors></Instructors>
           <CallToAction></CallToAction>
        </div>
    );
};

export default Home;