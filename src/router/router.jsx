import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Thali from "../components/Thali";
import CheckOut from "../components/CheckOut";


const router =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
             path:"/thali",
             element:<Thali/>
            },
            {
             path:"/checkout",
             element:<CheckOut/>
            }
          ],
    }
])
export default router;