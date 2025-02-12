import socials from "../../assets/home/socialBar/socials.json";
import SocialCard from "./SocialCard";

function SocialBar() {
  return (
    <div>
      <p className="items-center justify-center flex mb-6 font-bold italic">
        Find out more here
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-24 place-items-center justify-center">
        {socials.map((social, index) => (
          <SocialCard
            key={index}
            name={social.name || "Social Media"}
            link={social.link}
            image={social.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialBar;
