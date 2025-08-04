import PeopleCardProps from "../props/PeopleCardProps";


function PeopleCard(props: PeopleCardProps) {
    return (
        <section id= {props.title}>
            <div className='flex flex-col'>
                <div className='w-fit h-fit bg-transparent hover:bg-gray-100 hover:bg-opacity-50 mb-4 px-8 pt-8 rounded-3xl'>
                    <div className='font-bold text-5xl text-gray-500'>{props.title} {props.name}</div>
                    <div className='mt-4 w-80 h-fit'><img src={props.image} alt={props.name} className="w-full rounded-md" /></div>
                    <div className='mt-4 max-w-xl text-xl text-black mb-16 font-lightbold'>{props.description}</div>

                </div>
            </div>
        </section>
    )
}

export default PeopleCard;
