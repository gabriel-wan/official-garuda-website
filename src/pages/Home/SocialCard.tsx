import { SocialCardProps } from "../../types/global";

function SocialCard({ name, link, image }: SocialCardProps) {
  return (
    <a href={link} rel="noreferrer noopener" target="_blank">
      <div className="relative group w-[12.5rem] sm:w-[15.625rem] md:w-[18.75rem] lg:w-[21.875rem] aspect-[9/16] shadow-lg hover:opacity-90 mb-8">
        <img
          src={`/src/assets/home/socialBar/${image}`}
          alt={name}
          className="object-cover w-full h-full drop-shadow-lg hover:drop-shadow-none"
        />
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 text-white text-lg font-semibold px-6 py-3 transition-opacity duration-200">
          {name}
        </button>
      </div>
    </a>
  );
}

export default SocialCard;
