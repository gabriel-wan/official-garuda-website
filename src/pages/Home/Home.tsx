import EventsBanner from "./EventsBanner"
import HomeHeader from "./HomeHeader"
import PeopleBanner from "./PeopleBanner"
import SocialBar from "./SocialBar"

function Home() {
    return (
        <div>
            <div className="leading-relaxed text-[#504C41] antialiased mx-auto min-h-screen max-w-screen px-6 py-6 font-sans lg:px-0 lg:py-0">
                <PeopleBanner />
                <HomeHeader />
                <EventsBanner />
                <SocialBar />
            </div>
        </div>
    )
}

export default Home
