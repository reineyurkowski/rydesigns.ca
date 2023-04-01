import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import "./style.css"

//components
import Header from './header'
import Home from './home'
import Footer from './footer'
import Welcome from './welcome'
import Home2 from './home2'
import MouseShadow from './mouseShadow'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home2 />,
  },
  {
    path: '/home',
    element: <Home2 />,
  },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  {
    path: '/test',
    element: <div><div>you are on /test</div><Home2 /></div>,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
    {/* <MouseShadow /> */}
  </React.StrictMode>,
)

// function MyComponent() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* your component content */}
//     </div>
//   );
// }