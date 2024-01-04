import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useUserStore } from './utils/authService';
import AISPPager from './components/aisp/AISPPager';
import AISPLayout from './components/aisp/AISPLayout';
import PgAISPProfile,{ loader as nssProfileLoader} from './pages/aisp/PgAISPProfile';
import PgAISPProfileForm, {  action as nssProfileAction } from './pages/aisp/PgAISPProfileForm';
import PgAISPNotices, { loader as nssNoticesLoader } from './pages/aisp/PgAISPNotices';
import PgAISPNotice, { loader as nssNoticeLoader } from './pages/aisp/PgAISPNotice';
import PgAISPServices, { loader as nssServicesLoader } from './pages/aisp/PgAISPServices';
import PgAISPService, { loader as nssServiceLoader } from './pages/aisp/PgAISPService';
import PgAISPServiceForm, { loader as nssServiceFormLoader, action as nssServiceFormAction } from './pages/aisp/PgAISPServiceForm';
import PgAISPPasswordForm, { action as nssPasswordFormAction } from './pages/aisp/PgAISPPasswordForm';
import PgAISPDash, { loader as nssDashLoader } from './pages/aisp/PgAISPDash';
import PgAISPFees from './pages/aisp/PgAISPFees';

import AISLayout from './components/ais/AISLayout';
import PgAISDash from './pages/ais/PgAISDash';
import PgAISRoles from './pages/ais/PgAISRoles';
import PgAISReport from './pages/ais/PgAISReport';
import PgAISStudents, { loader as studentsLoader } from './pages/ais/PgAISStudents';
import PgAISStudentForm, { loader as studentFormLoader } from './pages/ais/PgAISStudentForm';
import PgAISStudent, { loader as studentLoader } from './pages/ais/PgAISStudent';

const { REACT_APP_GOOGLE_CLIENT_ID } = import.meta.env;

function App() {
  
  const { isAuthenticated, user } = useUserStore(state => state)
  const dricRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric')
  
  const router = createBrowserRouter([
    // Public Routes
    { path: "/", element: <Navigate to={{ pathname: isAuthenticated() ? '/dash' : '/login' }} replace />,  },
    { path: "/login", element: isAuthenticated() ? <Navigate to={{ pathname:'/dash'}} replace /> : <Login /> },
    { path: "dash", element: <Home /> },
    // Protected Routes
    { 
      //element: isAuthenticated() ? <Outlet/> : <Navigate to={{ pathname:'/login'}} replace />,
      element: <Outlet/> ,
      children:[
         { path: "dash", element: <Home /> },
         // { path: "evs", element: <EVSPage /> },
         // { path: "evsmain", element: <EVSDashPage /> },
         // { path: "service/:module", element: <Home /> },
         
        
         /* STUDENT PORTAL SYSTEM ROUTE */
         {
            path: "aisp",
            element: <AISPLayout />,
            //action: chosenAction,
            children: [
               {  element: <AISPPager />,
                  children: [
                     {  
                        path:'dash',
                        element: <PgAISPDash />, 
                        loader: nssDashLoader,
                        index: true,
                     },
                     {  path:'profile', 
                        element: <PgAISPProfile />,
                        loader: nssProfileLoader,
                     },
                     { 
                        path:'profile/create', 
                        element: <PgAISPProfileForm />,
                        loader: nssProfileLoader,
                        action: nssProfileAction
                     },
                     { 
                        path:'profile/:pin/edit', 
                        element: <PgAISPProfileForm />, 
                        loader: nssProfileLoader,
                        action: nssProfileAction
                     },
                  ] 
               },
               // Notices
               {  path:'notices', 
                  element: <PgAISPNotices />,
                  loader: nssNoticesLoader,
               },
               { 
                  path:'notices/:noticeId', 
                  element: <PgAISPNotice />,
                  loader: nssNoticeLoader
               },
               
               // Fees & Charges
               {  path:'fees', 
                  element: <PgAISPFees />,
                  loader: nssNoticesLoader,
               },
               { 
                  path:'fees/:noticeId', 
                  element: <PgAISPNotice />,
                  loader: nssNoticeLoader
               },



               // Services
               {  path:'services', 
                  element: <PgAISPServices />,
                  loader: nssServicesLoader,
               },
               { 
                  path:'services/:serviceId', 
                  element: <PgAISPService />,
                  loader: nssServiceLoader
               },
               { 
                  path:'services/create', 
                  element: <PgAISPServiceForm />,
                  loader: nssServiceFormLoader,
                  action: nssServiceFormAction
               },
               { 
                  path:'services/:serviceId/edit/', 
                  element: <PgAISPServiceForm />, 
                  loader: nssServiceFormLoader,
                  action: nssServiceFormAction
               },
               { 
                  path:'services/:serviceId/destroy', 
                  //action: lasRolesDestroy,
               },

               // Password Change
               {  path:'changepwd', 
                  element: <PgAISPPasswordForm />,
                  action: nssPasswordFormAction
               },
               

            ]
         },

         {
            path: "ais",
            element: <AISLayout />,
            // action: chosenAction,
            children: [
               {  element: <PgAISDash />,
                  // children: [
                  //    {  
                  //       path:'dash',
                  //       element: <LASByGroup />, 
                  //    }
                  // ] 
               },
               {  path:'roles', 
                  element: <PgAISRoles />,
               },
               {  path:'reports', 
                  element: <PgAISReport />,
                  //loader: lasRoleLoader,
                  index:true
               },

               // Student Module 
               { 
                  path:'students', 
                  element: <PgAISStudents />,
                  loader: studentsLoader,
               },
               { 
                  path:'students/create', 
                  element: <PgAISStudentForm />,
                  loader: studentFormLoader,
                  // action: nssMainFormAction
               },
               { 
                  path:'students/:studentId', 
                  element: <PgAISStudent />,
                  loader: studentLoader
               },
               { 
                  path:'students/:studentId/destroy', 
                  // action: nssMainDestroy,
               },
               { 
                  path:'students/:studentId/edit', 
                  element: <PgAISStudentForm />, 
                  // loader: nssMainFormLoader,
                  // action: nssMainFormAction
               },
            ]
         },


         
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

// export default withCookies(App);
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