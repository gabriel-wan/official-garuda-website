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
    
    const heroUrl = `/assets/eventsCarousel/${eventData.hero}`;

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
          <div className="flex items-center"> 
            <label htmlFor="year-select" className="mr-2 text-gray-700 font-medium">
            </label>
            <div className="relative">
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  // Updated classes: appearance-none hides default arrow, padding-right prevents text overlap
                  className="px-4 pr-10 py-2 rounded-full border border-yellow-500 bg-white shadow-md text-gray-800 font-semibold transition duration-150 ease-in-out hover:border-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 appearance-none"
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {/* Custom SVG Arrow to replace the default browser arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
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
