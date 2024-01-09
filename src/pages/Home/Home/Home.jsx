import CallToAction from "../CallToAction/CallToAction";
import Classes from "../Classes/Classes";
import Facilities from "../Facilities/Facilities";
import Instructors from "../Instructors/Instructors";
import Number from "../Number/Number";
import Quote from "../Quote/Quote";
import Slider from "../Slider/Slider";
import SubBanner from "../SubBanner/SubBanner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
           <Slider></Slider> 
           <Facilities></Facilities>
           <Classes></Classes>
           <SubBanner></SubBanner>
           <Instructors></Instructors>
           <Number></Number>
           <Quote></Quote>
           <Testimonial></Testimonial>
           <CallToAction></CallToAction>
        </div>
    );
};

export default Home;