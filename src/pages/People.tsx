import PeopleCardDeck from "./PeopleCardDeck";

function People() {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-40'>
                <div className='basis-1/3 flex-none font-bold text-8xl max-w-xs text-gray-600 mx-8 sticky top-0'>People of Garuda</div>
                <div className='basis-2/3 flex-none'>
                    <PeopleCardDeck />
                </div>
            </div>
        </div>
    )
}

export default People;
