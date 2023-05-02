import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Register from '../components/Register'
import {Dashboard} from "../components/post/Dashboard";
import Comments from "../components/comments/Comments";
import Profile from "../components/Profile";
import Users from "../components/Users";


// export const ROOT = '/';
export const LOGIN = '/';
export const REGISTER = '/register';
export const PROTECTED = '/protected';
export const DASHBOARD = '/protected/dashboard';
export const USERS = '/protected/users';
export const PROFILE='/protected/profile/:id'
export const COMMENTS='/protected/comments/:id'

export const router = createBrowserRouter([
    // { path: ROOT, element: 'Public' },
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
   
    {
        path: PROTECTED, element: <Layout />, children: [
            { path: DASHBOARD, element: <Dashboard/> },
            { path: USERS, element: <Users/> },
            { path: PROFILE, element: <Profile/> },
            { path: COMMENTS, element: <Comments/> },

        ]
    }
]

)