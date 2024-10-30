import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './routers/Posts';
import NewPost, { action as newPostAction } from './routers/NewPost';
import PostDetails, { loader as PostDetailsLoader } from './routers/PostDetails';
import RootLayout from './routers/RootLayout';
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
    { 
      path: '/',
      element: <Posts />,
      loader: postsLoader,
      children: [
      { path: '/create-post', element: <NewPost />, action: newPostAction },
      { path: '/:postId', element: <PostDetails />, loader: PostDetailsLoader }
      ],
     },
    ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
