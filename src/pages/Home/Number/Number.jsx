import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { BsFillPeopleFill, BsFillBoxFill, BsFillClockFill } from 'react-icons/bs';
import { MdEmojiPeople, MdCleaningServices } from 'react-icons/md';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Number = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="bg-cyan-600 py-10">
            <SectionTitle
                title='Strength in Numbers'
                subtitle='A Statistical Snapshot of Achievements and Impact'
                textColor="text-white"
            ></SectionTitle>
            <div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 m-7 bg-transparent">
                        <div className=" text-white p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                            
                            <h1 className="text-5xl font-bold text-center">
                                {counterOn && <CountUp start={0} end={420} duration={2} delay={0}></CountUp>}+
                            </h1>
                            <h4 className="text-xl text-center">Learners & counting</h4>
                        </div>
                        <div className=" text-white p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                           
                            <h1 className="text-5xl font-bold text-center">
                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>}+
                            </h1>
                            <h4 className="text-xl text-center">Total courses</h4>
                        </div>
                        <div className=" text-white p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                            
                            <h1 className="text-5xl font-bold text-center">
                                {counterOn && <CountUp start={0} end={20} duration={2} delay={0}></CountUp>}+
                            </h1>
                            <h4 className="text-xl text-center">Languages</h4>
                        </div>
                        <div className=" text-white p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                            
                            <h1 className="text-5xl font-bold text-center">
                                {counterOn && <CountUp start={0} end={800} duration={2} delay={0}></CountUp>}+
                            </h1>
                            <h4 className="text-xl text-center">Successful students</h4>
                        </div>


                    </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Number;