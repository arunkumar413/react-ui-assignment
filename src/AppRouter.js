import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import { RolePage } from "./pages/RolePage";
import { UserPage } from "./pages/user";



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Home</h1>
                <Link to="user">User</Link>
            </div>
        ),
    },
    {
        path: 'user',
        element: <UserPage />
    },
    {
        path: "role",
        element: <RolePage />,
    },

]);