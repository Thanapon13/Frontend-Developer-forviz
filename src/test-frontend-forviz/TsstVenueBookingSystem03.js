import { useState } from "react";
import BookingData from "../mocData/BookingData";

export default function TsstVenueBookingSystem03() {
  const bookingData = BookingData;
  // console.log("bookingData", bookingData);

  const [wholeMonth, setWholeMonth] = useState(0);
  const [roomId, setRoomId] = useState("");

  // console.log("input:", input);

  // Filter bookings of Monday
  const mondayDate = new Date("2019-09-28");
  const bookingDataFiltered = bookingData.filter(booking => {
    const startDate = new Date(booking.startTime);

    return (
      startDate.getFullYear() === mondayDate.getFullYear() &&
      startDate.getMonth() === mondayDate.getMonth() &&
      startDate.getDate() === mondayDate.getDate()
    );
  });
  // console.log("bookingDataFiltered:", bookingDataFiltered);

  // Filter bookings for Tuesday
  const tuesdayDate = new Date("2019-09-29");
  const bookingDataFilteredNest = bookingData.filter(booking => {
    const startTime = new Date(booking.startTime);

    return (
      startTime.getFullYear() === tuesdayDate.getFullYear() &&
      startTime.getMonth() === tuesdayDate.getMonth() &&
      startTime.getDate() === tuesdayDate.getDate()
    );
  });

  // หาวันที่ของสัปดาห์ถัดไป
  const nextWeekDate = new Date(
    tuesdayDate.getTime() + 7 * 24 * 60 * 60 * 1000
  );
  // console.log(tuesdayDate);

  // หาวันที่ของสัปดาห์ถัดไป
  const bookingDataFilteredNext = bookingData.filter(booking => {
    const startTime = new Date(booking.startTime);

    return startTime >= tuesdayDate && startTime < nextWeekDate;
  });

  const formatTime = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const startTimeString = start.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const endTimeString = end.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit"
    });

    return `${startTimeString} - ${endTimeString}`;
  };

  let filteredData = [];
  if (wholeMonth === 0) {
    filteredData = bookingDataFiltered.filter(
      booking => booking.roomId === roomId
    );
  } else if (wholeMonth === 2) {
    filteredData = bookingDataFilteredNest.filter(
      booking => booking.roomId === roomId
    );
  } else if (wholeMonth === 3) {
    filteredData = bookingData.filter(booking => booking.roomId === roomId);
  } else if (wholeMonth === 4) {
    filteredData = bookingDataFilteredNext.filter(
      booking => booking.roomId === roomId
    );
  }

  // const show = searchRoomId(roomId);

  return (
    <div className="flex justify-center bg-gradient-to-r from-[#BCBFC8] via-[#B9BDC8] to-[#91A2C6] p-10">
      {/* Container All */}
      <div className=" flex w-[1479px] h-[1004px] border-2">
        {/*Container left */}
        <div className="w-[585px] h-full bg-[#46529D]">
          {/* box top */}
          <div className="w-full flex flex-col h-[620px]">
            {/* Header */}
            <div className="w-[495px] h-[135px] flex justify-start items-center bg-blue-500 shadow-md ml-[90px]">
              <input
                type="text"
                onChange={e => setRoomId(e.target.value)}
                className="font-bold text-[40px] leading-none text-back bg-blue-500  px-10 outline-none"
                placeholder="กรุณาใส่ roomId:A101"
              />
            </div>

            {/* Content */}
            {bookingData.slice(0, 1).map(booking => (
              <div className="w-[495px] h-[406px] mt-20  flex flex-col justify-between items-start ml-[90px] p-2">
                <div>
                  <p className="leading-normal text-[18px] text-[#FFFFFF]">
                    Upcoming
                  </p>
                </div>
                <div>
                  <h1 className="text-[64px] leading-normal text-[#FFFFFF] opacity-50">
                    {new Date(booking.startTime)
                      .toLocaleDateString("en-US", {
                        weekday: "long",
                        timeZone: "UTC"
                      })
                      .replace("Saturday", "Monday")}
                  </h1>
                  <h1 className="font-light text-[64px] leading-none text-white">
                    {new Date(booking.startTime).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short"
                    })}
                  </h1>
                </div>
                <div>
                  <p className="font-normal text-base leading-normal text-[#FFFFFF] opacity-50">
                    {formatTime(booking.startTime, booking.endTime)}
                  </p>
                  <p className="font-normal text-base leading-normal text-[#FFFFFF]">
                    {booking.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* bot bottom */}
          <div className="w-full h-[375px] bg-[#4D59A1] flex flex-col justify-start">
            {filteredData.slice(1).map((el, idx) => (
              <div
                className="w-[495px] flex flex-col gap-4 ml-[90px] p-2"
                key={idx}
              >
                <div>
                  <p className="font-normal text-base leading-normal text-[#FFFFFF] opacity-50">
                    {formatTime(el.startTime, el.endTime)}
                  </p>
                  <p className="font-normal text-base leading-normal text-[#FFFFFF]">
                    {el.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Container right */}
        <div className="flex flex-col">
          {/* Header */}
          <nav className="w-full h-[135px] bg-[#EFEEEC] shadow-md flex items-end">
            <ul className="w-[70%] p-10 flex justify-between">
              <button onClick={() => setWholeMonth(0)}>
                <li
                  className={`text-[24px] cursor-pointer ${
                    wholeMonth === 0
                      ? "text-back  border-b-4 border-b-sky-500"
                      : "text-back opacity-50"
                  }`}
                >
                  THIS WEEK
                </li>
              </button>

              <button onClick={() => setWholeMonth(4)}>
                <li
                  className={`text-[24px] cursor-pointer ${
                    wholeMonth === 4
                      ? "text-back border-b-4 border-b-sky-500"
                      : "text-back opacity-50"
                  }`}
                >
                  NEXT WEEK
                </li>
              </button>

              <button onClick={() => setWholeMonth(3)}>
                <li
                  className={`text-[24px] cursor-pointer ${
                    wholeMonth === 3
                      ? "text-back  border-b-4 border-b-sky-500"
                      : "text-back opacity-50"
                  }`}
                >
                  WHOLE MONTH
                </li>
              </button>
            </ul>
          </nav>

          {/* Content */}
          <div className="w-[893px] h-[869px] bg-white shadow-md">
            {/* TOP */}

            <div className="h-[557px] py-[78px] flex flex-col gap-4">
              <ol class=" relative border-l border-gray-200 dark:border-gray-700 ml-10 ">
                <div className="bg-gray-200 border border-gray-300">
                  <p className="text-[18px] text-[#787878] h-[47px] flex items-center">
                    {wholeMonth === 0
                      ? "Today (Mon, 28 Sep)"
                      : wholeMonth === 2
                      ? "This Week"
                      : wholeMonth === 3
                      ? "WHOLE MONTH"
                      : "NEXT WEEK"}
                  </p>
                </div>

                <div className="flex flex-col justify-center">
                  {filteredData.map((el, idx) => (
                    <li
                      className="mt-4 ml-6 text-[16px] flex flex-col"
                      key={idx}
                    >
                      <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-[#3DC7D2] rounded-full -left-1.5"></span>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {formatTime(el.startTime, el.endTime)}
                      </time>
                      <p>{el.title}</p>
                      {roomId && (
                        <p className="text-xs text-gray-500">
                          Room ID: {roomId}
                        </p>
                      )}
                    </li>
                  ))}
                </div>
              </ol>
            </div>

            {roomId && wholeMonth === 0 && (
              <ol className=" relative border-l border-gray-200 dark:border-gray-700 ml-10">
                <div className="bg-gray-200 border border-gray-300">
                  <p className="text-[18px] text-[#787878] h-[47px] flex items-center">
                    Tomorrow (Tue, 29 Sep)
                  </p>
                </div>

                <div className="flex flex-col justify-center">
                  {bookingDataFilteredNest.map((el, idx) => (
                    <li
                      className="mt-4 ml-6 text-[16px] flex flex-col"
                      key={idx}
                    >
                      <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-[#3DC7D2] rounded-full -left-1.5"></span>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {formatTime(el.startTime, el.endTime)}
                      </time>
                      <p>{el.title}</p>
                    </li>
                  ))}
                </div>
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
