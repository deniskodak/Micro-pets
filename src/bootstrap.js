import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './styles/variables.css'

// import pagesConfig from '@pages/pages.json'
// import * as pages from '@pages/index'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         loader: <h1>loading....</h1>,
//         // children: pagesConfig.map(({ url: path, key }) => ({
//         // path,
//         // page: pages[key],
//         // loader: <h1>loading....</h1>,
//         // })),
//         children: [],
//         errorElement: <h1>oops</h1>,
//     },
// ])

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // <RouterProvider router={router} />
)
