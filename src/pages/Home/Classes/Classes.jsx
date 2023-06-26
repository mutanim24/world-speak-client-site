import ClassCard from "../../../components/ClassCard/ClassCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useData from "../../../hook/useData";

const Classes = () => {
    const [data] = useData()

    return (
        <div className='px-6 md:px-14'>
            <SectionTitle
                title='Popular Classes'
                subtitle='Discover the Most Enrolled Classes at WorldSpeak'
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-6 my-10'>
                {
                    data.slice(0, 6).map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;