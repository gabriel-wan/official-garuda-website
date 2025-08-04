import ritvik from '../assets/people/ritvik.jpeg'
import shashank from '../assets/people/Shashank.jpeg'
import marcella from '../assets/people/Marcella.jpeg'
import misty from '../assets/people/misty.jpeg'

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const people = [
    {
      title: "Prof.",
      name: "Misty Cook",
      image: <img src={misty}/>,
      description:"Professor Misty is our beloved Residential Fellow, always ready with a warm smile and a listening ear. Her calm demeanor keeps the atmosphere mellow, even on the most stressful days. From late-night philosophical chats to cheerful house socials, she brings a steady presence that everyone admires. It’s no wonder she’s so well respected—her kindness and wisdom light up the entire college house.",
    },

    {
      title: "Level 9 RA",
      name: "Marcella",
      image: <img src={marcella}/>,
      description:"Marcella is the creative spark of Level 9. She’s always encouraging residents to let their imaginations run wild—no idea is too zany for her. With her friendly banter and upbeat energy, she keeps everyone feeling inspired and included. Whenever you hear joyful laughter echoing down the hall, chances are Marcella is at the center of it all.",
    },

    {
      title: "Level 10 RA",
      name: "Shashank",
      image: <img src={shashank}/>,
      description:"Shashank rules Level 10 with an easygoing smile and a cheeky personality. He’s famous for turning study sessions into social hangouts, complete with laughter and good vibes. If you have a problem, Shashank is the go-to guy—he’s got a knack for resolving conflicts with grace and humor. People say he’s basically a big brother figure, always ready to lend a hand to anyone who needs it.",
    },

    {
      title: "Level 11 RA",
      name: "Ritvik",
      image: <img src={ritvik}/>,
      description:"Up on Level 11, Ritvik brings pure sunshine with his bright smile and boundless enthusiasm. A former greenhorn who has grown his yellow wings, Ritvik's the first to invite you to a dance party, a movie marathon, or a weekend brunch adventure. Ritvik has an uncanny way of making everyone feel at home—his door is always open for a chat. If you’re ever feeling down, spending five minutes with Ritvik will remind you why this place is so special.",
    },
  ];
  
  
  
  export {people};