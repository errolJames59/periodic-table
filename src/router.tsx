import { createBrowserRouter, } from 'react-router-dom'
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import ErrorPage from './pages/Error';
import ByGroup from './pages/ByGroup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "group",
                element: <ByGroup />
            }
        ]
    }
])

export default router;
