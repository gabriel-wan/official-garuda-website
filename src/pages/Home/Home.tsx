import EventsBanner from "./EventsBanner"
import PeopleBanner from "./PeopleBanner"

function Home() {
    return (
        <div>
            <div className="leading-relaxed text-[#504C41] antialiased mx-auto min-h-screen max-w-screen px-6 py-6 font-sans lg:px-0 lg:py-0">
                <PeopleBanner />
                <header className="text-center">
                    <h1 className="[text-shadow:_0_1.3px_0_rgb(0_0_0_/20%)] text-4xl font-bold uppercase mb-4">Garuda</h1>
                    <h2 className="[text-shadow:_0_1.2px_0_rgb(0_0_0_/_30%)] text-2xl italic mb-4">Garudians of the Galaxy</h2>
                    <p className="[text-shadow:_0_1.1px_0_rgb(0_0_0_/_30%)] text-sm mb-8">"The best yellow house in CAPT" - Prof Misty or something</p>
                </header>
                <EventsBanner />
            </div>
        </div>
    )
}

export default Home
