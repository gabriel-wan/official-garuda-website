import PeopleCardProps from "../props/PeopleCardProps";


function PeopleCard(props: PeopleCardProps) {
    return (
        <div className='flex flex-col'>
            <div className='w-fit h-fit bg-transparent hover:bg-gray-100 hover:bg-opacity-50 mb-4 px-8 pt-8 rounded-3xl'>
                <div className='font-bold text-3xl text-gray-500'>{props.title} {props.name}</div>
                <div className='mt-4 w-64 h-fit'>{props.image}</div>
                <div className='mt-4 max-w-xl text-base text-gray-600 mb-16'>{props.description}</div>

            </div>
        </div>
    )
}

export default PeopleCard;
