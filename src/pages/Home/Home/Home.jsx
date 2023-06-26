import CallToAction from "../CallToAction/CallToAction";
import Classes from "../Classes/Classes";
import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";
import SubBanner from "../SubBanner/SubBanner";

const Home = () => {
    return (
        <div>
           <Slider></Slider> 
           <Facilities></Facilities>
           <Classes></Classes>
           <SubBanner></SubBanner>
           <Instructors></Instructors>
           <CallToAction></CallToAction>
        </div>
    );
};

export default Home;