import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useUserStore } from './utils/authService';
import AISPRoute from './routes/AISPRoute'
import AISRoute from './routes/AISRoute'
import AMSRoute from './routes/AMSRoute'
import AMSPRoute from './routes/AMSPRoute'
import PrintRoute from './routes/PrintRoute'

const { REACT_APP_GOOGLE_CLIENT_ID } = import.meta.env;

function App() {
  
  const { isAuthenticated, user } = useUserStore(state => state)
  
  const router = createBrowserRouter([
         
    // Public Routes
    { path: "/", element: <Navigate to={{ pathname: isAuthenticated() ? '/dash' : '/login' }} replace />,  },
    { path: "/login", element: isAuthenticated() ? user.user.group_id == 1 ? <Navigate to={{ pathname:'/aisp/registration'}} replace /> : user?.user?.group_id == 3 ? <Navigate to={{ pathname:'/amsp/dash' }} replace /> : <Navigate to={{ pathname:'/dash'}} replace /> : <Login /> },
    // Protected Routes
    { 
      element: isAuthenticated() ? <Outlet/> : <Navigate to={{ pathname:'/login'}} replace />,
      children:[
         { path: "dash", element: user?.user?.group_id == 1 ? <Navigate to={{ pathname:'/aisp/registration'}} replace /> : user?.user?.group_id == 3 ? <Navigate to={{ pathname:'/amsp/dash' }} replace /> : <Home /> },
         // { path: "evs", element: <EVSPage /> },
         // { path: "evsmain", element: <EVSDashPage /> },
         // { path: "service/:module", element: <Home /> },
         
         
         /* ADMISSION PORTAL ROUTE */
         {...AMSPRoute },
    
         /* STUDENT PORTAL ROUTE */
         {...AISPRoute },
         /* ADMISSION SYSTEM ROUTE */
         {...AMSRoute },
         /* ACADEMIC SYSTEM ROUTE */
         {...AISRoute },
         /* PRINT LAYOUT & ROUTE */
         {...PrintRoute },
      ]
    },
    
    { path: "*", element: isAuthenticated() ? <Navigate to={{ pathname:'/dash'}} replace /> : <Navigate to={{ pathname:'/login'}} replace /> },
  ]);

  
  return (
     <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
        <Toaster />
        <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;


/**
 

 <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" element={<Home />} />
          <Route path="/evs" element={<EVSPage />} />
          <Route path="/evsmain" element={<EVSDashPage />} />
         <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> 
          </Routes>
 */