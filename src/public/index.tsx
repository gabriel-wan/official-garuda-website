import anh from '../assets/people/anh.jpeg'
import marcus from '../assets/people/marcus.jpeg'
import moon from '../assets/people/moon.jpeg'
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
      name: "Moon",
      image: <img src={moon}/>,
      description:"Moon is the creative spark of Level 9. She’s always encouraging residents to let their imaginations run wild—no idea is too zany for her. With her friendly banter and upbeat energy, she keeps everyone feeling inspired and included. Whenever you hear joyful laughter echoing down the hall, chances are Moon is at the center of it all.",
    },

    {
      title: "Level 10 RA",
      name: "Marcus",
      image: <img src={marcus}/>,
      description:"Marcus rules Level 10 with an easygoing smile and a stash of snacks you’ll want to raid. He’s famous for turning study sessions into social hangouts, complete with laughter and late-night pizza. If you have a problem, Marcus is the go-to guy—he’s got a knack for resolving conflicts with grace and humor. People say he’s basically a big brother figure, always ready to lend a hand (or a slice of pizza) to anyone who needs it.",
    },

    {
      title: "Level 11 RA",
      name: "Anh",
      image: <img src={anh}/>,
      description:"Up on Level 11, Anh brings pure sunshine with her bright smile and boundless enthusiasm. She’s the first to invite you to a dance party, a movie marathon, or a weekend brunch adventure. Anh has an uncanny way of making everyone feel at home—her door is always open for a chat. If you’re ever feeling down, spending five minutes with Anh will remind you why this place is so special.",
    },
  ];
  
  
  
  export {people};