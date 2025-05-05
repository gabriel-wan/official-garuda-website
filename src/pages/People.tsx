import PeopleCardDeck from "./PeopleCardDeck";
import Nav from "../components/Navbar/Nav";

function People() {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-72'>
                <header>
                <div className='basis-1/3 flex-none font-bold text-8xl max-w-xs text-gray-600 mx-8 sticky top-0'>People of Garuda 
                <Nav />
                </div>

                </header>
                <main>

                <div className='basis-2/3 flex-none'>
                    <PeopleCardDeck />
                </div>
                </main>
            </div>
        </div>
    )
}

export default People;
