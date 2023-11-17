import { RouteObject } from "react-router-dom";
import Chart from "@/pages/home/Chart";
import Home from "@/pages/home/Home";
import GetStarded from "@/pages/GetStarted";
import AboutUs from "@/pages/AboutUs";

const home: RouteObject[] = [
  {
    path: 'home', 
    element: <Home/>,
    children: [
      {
        path: 'chart',
        element: <Chart/>,
      },
      {
        path: 'getStarded',
        element: <GetStarded/>,
      },
      {
        path: 'aboutUs',
        element: <AboutUs/>,
      },
    ]
  }
];

export default home;
