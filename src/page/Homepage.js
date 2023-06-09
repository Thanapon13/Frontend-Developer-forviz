import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-200 to-lime-200 ">
      <div className="w-full h-full flex flex-col justify-center gap-10 items-center m-auto">
        {/* Header */}
        <h1 className="text-2xl">Test ตำแหน่ง Frontend Developer forviz</h1>

        {/* Button */}
        <div className="flex">
          <Link to={"/JavascriptTest"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Test 2. Venue Booking System (Javascript Test)
            </button>
          </Link>

          <Link to={"/TsstVenueBookingSystem"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Test 3.Venue Booking System (Front-end Test)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
