import { useParams } from "react-router-dom"
import slides from "../assets/eventsCarousel/EventsCarousel.json"

function EventObject() {
    const { eventId } = useParams()
    const eventData = slides[Number(eventId)];

    // Error handling
    if (!eventData) {
        return <div>Event not found</div>;
    }

    return (
        <div className="leading-relaxed text-[#504C41] antialiased mx-auto min-h-screen max-w-screen px-6 py-6 font-sans lg:px-12 lg:py-12">
            <h1 className="text-3xl font-bold mb-4 mt-4 lg:mb-6 lg:mt-6">{eventData.title}</h1>
            <p>{eventData.description}</p>
        </div>
    )
}

export default EventObject
