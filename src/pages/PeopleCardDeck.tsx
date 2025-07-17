import {people} from '../data/index';
import PeopleCard from "../components/PeopleCard";


function PeopleCardDeck (){
   return(
       <ul className="flex flex-col">
       {people.map((people, index) => (
           <PeopleCard
               key={index}
               title={people.title}
               name={people.name}
               description={people.description}
               image={people.image}
           />
       ))}
   </ul>
   )
}


export default PeopleCardDeck;