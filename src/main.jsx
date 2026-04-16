import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout.jsx'
import Home from './pages/home/Home.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Stats from './pages/stats/Stats.jsx'
import FriendDetails from './pages/friendDetails/FriendDetails.jsx'
import TimelineContextProvider from './context/TimelineContextProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      }
      , {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/stats",
        Component: Stats,
      },
      {
        path: "friends/:id",
        Component: FriendDetails,
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <TimelineContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </TimelineContextProvider>

)
