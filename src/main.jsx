import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Users from './Component/Users/Users.jsx';
import UserDetails from './Component/UserDetails/UserDetails.jsx';
import Posts from './Component/Posts/Posts.jsx';
import PostDetails from './Component/PostDetails/PostDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
{
path : '/',
element : 
<Home></Home>
,
errorElement:
<ErrorPage></ErrorPage>
,
children:[
{
path:'/About',
element:
<About></About>
},
{
path: '/Contact',
element : 
<Contact></Contact>
},
{
path: '/Users',
loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
element :
<Users></Users>
},
{
path:'/User/:UserId',
loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
element : 
<UserDetails></UserDetails>
},
{
path: '/Posts',
loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
element:
<Posts></Posts>
},
{
path:'/Post/:PostId',
loader:({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.PostId}`),
element:
<PostDetails></PostDetails>
}
]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
</React.StrictMode>
,
)