import BookingData from "../mocData/BookingData";

// 1. สร้างฟังก์ชันที่รับค่าห้อง วันเวลาเริ่มต้น และวันเวลาสิ้นสุด และคืนค่าว่าห้องนั้นสามารถจองได้หรือไม่ ห้องนั้นจะสามารถจองได้หากไม่มีการจองอื่นในช่วงเวลาที่ร้องขอ

const checkAvailability = (roomId, startTime, endTime) => {
  const bookings = BookingData;
  const overlappingBookings = bookings.filter(booking => {
    return (
      booking.roomId === roomId &&
      ((startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime))
    );
  });

  return overlappingBookings.length === 0;
};

// 2. สร้างฟังก์ชันที่คืนค่าการจองปัจจุบันทั้งหมดที่เกิดขึ้นใน `วันนี้`, `สัปดาห์นี้` และ `สัปดาห์ถัดไป` สำหรับห้อง
const getBookingsForWeek = (roomId, weekNo) => {
  const bookings = BookingData;
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + (weekNo - 1) * 7);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);

  const bookingsForWeek = bookings.filter(booking => {
    const bookingStartDate = new Date(booking.startTime);
    const bookingEndDate = new Date(booking.endTime);
    return (
      booking.roomId === roomId &&
      bookingStartDate >= startDate &&
      bookingEndDate < endDate
    );
  });

  return bookingsForWeek;
};

function JavascriptTest() {
  const bookdatas = BookingData;
  console.log("bookdatas:", bookdatas);

  const isAvailable = checkAvailability(
    "A101",
    "2019-10-04 14:00:00",
    "2019-10-06 11:00:00"
  );
  // console.log("Is available:", isAvailable);
  alert(
    ` การจองนี้ : ${checkAvailability(
      "A101",
      "2019-10-04 14:00:00",
      "2019-10-06 11:00:00"
    )}`
  );

  const bookingsForWeek = getBookingsForWeek("A101", 1);
  console.log("Bookings for the week:", bookingsForWeek);

  return (
    <div>
      <p>JavascriptTest</p>
    </div>
  );
}

export default JavascriptTest;
