import peopleImg from "../../assets/home/peopleBanner.jpg";

function PeopleBanner() {
    return (
        <a
            href="/people"
            //rel="noreferrer noopener"
            //target="_blank"
        >
            <div className="relative group hover:opacity-90 mb-8">
                <img
                    src={peopleImg}
                    alt="Group photo"
                    className="drop-shadow-lg hover:drop-shadow-none"
                />

                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 text-white text-lg font-semibold px-6 py-3 transition-opacity duration-200">
                    Who Are We?
                </button>
            </div>
        </a>
    );
}

export default PeopleBanner