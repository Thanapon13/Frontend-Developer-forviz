import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/Homepage";
import JavascriptTest from "../test-frontend-forviz/TestJavascript02";
import TsstVenueBookingSystem03 from "../test-frontend-forviz/TsstVenueBookingSystem03";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/JavascriptTest",
    element: <JavascriptTest />
  },
  {
    path: "/TsstVenueBookingSystem",
    element: <TsstVenueBookingSystem03 />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
