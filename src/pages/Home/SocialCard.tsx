import { SocialCardProps } from "../../types/global"

function SocialCard({ name, link, image }: SocialCardProps) {
  return (
    <a
            href={link}
            rel="noreferrer noopener"
            target="_blank"
        >
            <div className="relative group w-[135px] h-[240px] shadow-lg hover:opacity-90 mb-8">
                <img
                    src={"/src/assets/home/socialBar/" + image}
                    alt={name}
                    className="object-cover w-full h-full drop-shadow-lg hover:drop-shadow-none"
                />
                
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 text-white text-lg font-semibold px-6 py-3 transition-opacity duration-200">
                    {name}
                </button>
            </div>
        </a>
  )
}

export default SocialCard
