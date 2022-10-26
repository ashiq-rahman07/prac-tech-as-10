import { createBrowserRouter } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import Main from "../Layaout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course-details')
            },
            {
                path: '/course-details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])