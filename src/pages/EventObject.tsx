import { useParams } from "react-router-dom"
import { useState } from "react"
import slides from "../assets/eventsCarousel/EventsCarousel.json"

function EventObject() {
    const { eventId } = useParams()
    const id = Number(eventId);

    // Error handling
    const baseEvent = slides[id];
    if (!baseEvent || !baseEvent.years) return <div>Event not found</div>;

    //get the available years
    const availableYears = Object.keys(baseEvent.years).sort((a, b) => b.localeCompare(a));
    const [selectedYear, setSelectedYear] = useState(availableYears[0]);

    const eventData = baseEvent.years[selectedYear];

    //error handling
    if (!eventData) return <div>No data for year {selectedYear}</div>;
    
    const heroUrl = `/assets/eventsCarousel/${eventData.displayImage}`;

    const gallery = eventData.images.map(
        (fn) => `/assets/eventsCarousel/${fn}`
    );
    const span = [
            "md:col-span-1 md:row-span-2",
            "md:col-span-1 md:row-span-1",
            "md:col-span-1 md:row-span-2",
            "md:col-span-1 md:row-span-1",

    ];
    return (
    <div className="min-h-screen bg-yellow-100 py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* --- Header + Year Dropdown */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            {eventData.title}
          </h1>

          {/* Dropdown */}
          <div>
            <label htmlFor="year-select" className="mr-2 text-gray-700 font-medium">
              Select Year:
            </label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* --- 1) Header text */}
        <h1 className="text-4xl font-bold text-gray-800">
          {eventData.title}
        </h1>

        {/* --- 2) Mosaic gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {gallery.slice(0, 4).map((url, i) => {
            
            return (
              <img
                key={i}
                src={url}
                alt={`${eventData.title} #${i + 1}`}
                className={`w-full max-w-[852px] h-full object-cover rounded-lg shadow-lg ${span[i]}`}
              />
            );
          })}
        </div>
        {/* --- 2.5) Highlights Section --- */}
        {eventData.highlights && eventData.highlights.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventData.highlights.map((hl, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
                  <div className="relative mb-3">
                    <img
                      src={`/assets/eventsCarousel/${hl.image}`}
                      alt={hl.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <span className="absolute top-2 right-2 bg-white bg-opacity-80 text-gray-800 text-xs font-semibold px-3 py-1 rounded">{hl.title}</span>
                  </div>
                  <div className="text-gray-800 text-base">{hl.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}  

 
        {/* --- 3) Description */}
        <p className="text-lg leading-relaxed text-gray-700">
          {eventData.description}
        </p>

        {/* --- 4) Hero image at the very end */}
        <img
          src={heroUrl}
          alt={eventData.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
    

export default EventObject
