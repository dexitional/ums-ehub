import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useUserStore } from './utils/authService';
import AISPPager from './components/aisp/AISPPager';
import AISPLayout from './components/aisp/AISPLayout';
import PgAISPProfile,{ loader as aispProfileLoader} from './pages/aisp/PgAISPProfile';
import PgAISPProfileForm, {  loader as aispProfileFormLoader, action as aispProfileAction } from './pages/aisp/PgAISPProfileForm';
import PgAISPNotices, { loader as nssNoticesLoader } from './pages/aisp/PgAISPNotices';
import PgAISPNotice, { loader as nssNoticeLoader } from './pages/aisp/PgAISPNotice';
import PgAISPServices, { loader as nssServicesLoader } from './pages/aisp/PgAISPServices';
import PgAISPService, { loader as nssServiceLoader } from './pages/aisp/PgAISPService';
import PgAISPServiceForm, { loader as nssServiceFormLoader, action as nssServiceFormAction } from './pages/aisp/PgAISPServiceForm';
import PgAISPPasswordForm, { action as nssPasswordFormAction } from './pages/aisp/PgAISPPasswordForm';
import PgAISPDash, { loader as nssDashLoader } from './pages/aisp/PgAISPDash';
import PgAISPFees,{ loader as aispFeesLoader } from './pages/aisp/PgAISPFees';
import PgAISPRegistrations,{ loader as aispRegistrationsLoader } from './pages/aisp/PgAISPRegistrations';


import AISLayout from './components/ais/AISLayout';
import PgAISDash from './pages/ais/PgAISDash';
import PgAISRoles from './pages/ais/PgAISRoles';
import PgAISReport from './pages/ais/PgAISReport';
import PgAISStudents, { loader as studentsLoader } from './pages/ais/PgAISStudents';
import PgAISStudentForm, { loader as aisStudentFormLoader, action as aisStudentFormAction } from './pages/ais/PgAISStudentForm';
import PgAISStudent, { loader as studentLoader } from './pages/ais/PgAISStudent';
import PgAISStudentProfile from './pages/ais/PgAISStudentProfile';
import PgAISStudentTranscript, { loader as aisStudentTranscriptLoader } from './pages/ais/PgAISStudentTranscript';
import PgAISStudentFinance, { loader as aisStudentFinanceLoader } from './pages/ais/PgAISStudentFinance';
import PgAISStudentActivity from './pages/ais/PgAISStudentActivity';
import PgAISPResults, { loader as aispResultsLoader } from './pages/aisp/PgAISPResults';
import PgAISCourses, { action as aisCourseDestroy, loader as coursesLoader } from './pages/ais/PgAISCourses';
import PgAISCourseForm, { loader as aisCourseFormLoader, action as aisCourseFormAction } from './pages/ais/PgAISCourseForm';
import PgAISProgramForm, { action as aisProgramFormAction, loader as aisProgramFormLoader} from './pages/ais/PgAISProgramForm';
import PgAISPrograms, { action as aisProgramDestroy,loader as aisProgramsLoader } from './pages/ais/PgAISPrograms';
import PgAISProgram, { loader as aisProgramLoader } from './pages/ais/PgAISProgram';
import PgAISProgramStructure, { loader as aisProgramStructureLoader } from './pages/ais/PgAISProgramStructure';
import PgAISProgramStudent, { loader as aisProgramStudentLoader } from './pages/ais/PgAISProgramStudent';
import PgAISProgramStatistics, { loader as aisProgramStatisticsLoader } from './pages/ais/PgAISProgramStatistics';
import PgAISDepartments, { loader as departmentsLoader } from './pages/ais/PgAISDepartments';
import PgAISFaculties, { loader as facultiesLoader } from './pages/ais/PgAISFaculties';
import PgAISStructures, { action as aisCurriculumDestroy, loader as curriculumsLoader } from './pages/ais/PgAISStructures';
import PgAISStructureForm, { action as aisCurriculumFormAction, loader as aisCurriculumFormLoader } from './pages/ais/PgAISStructureForm';
import PgAISSchemes, { action as aisSchemeDestroy, loader as schemesLoader } from './pages/ais/PgAISSchemes';
import PgAISSchemeForm, { action as aisSchemeFormAction, loader as aisSchemeFormLoader } from './pages/ais/PgAISSchemeForm';
import PgAISScheme, { loader as aisSchemeLoader } from './pages/ais/PgAISScheme';
import PgAISRegistrations, { action as aisRegistrationDestroy, loader as registrationsLoader} from './pages/ais/PgAISRegistrations';
import PgAISRegsitration, { loader as aisRegistrationLoader } from './pages/ais/PgAISRegsitration';


const { REACT_APP_GOOGLE_CLIENT_ID } = import.meta.env;

function App() {
  
  const { isAuthenticated, user } = useUserStore(state => state)
  const aisRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'ais')
  const fmsRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'fms')
  const amsRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'ams')
  
  const router = createBrowserRouter([
    // Public Routes
    { path: "/", element: <Navigate to={{ pathname: isAuthenticated() ? '/dash' : '/login' }} replace />,  },
    { path: "/login", element: isAuthenticated() ? user.user.group_id == 1 ? <Navigate to={{ pathname:'/aisp/dash'}} replace /> : user?.user?.group_id == 3 ? <Navigate to={{ pathname:'/amsp/dash' }} replace /> : <Navigate to={{ pathname:'/dash'}} replace /> : <Login /> },
    // Protected Routes
    { 
      element: isAuthenticated() ? <Outlet/> : <Navigate to={{ pathname:'/login'}} replace />,
      children:[
         { path: "dash", element: user?.user?.group_id == 1 ? <Navigate to={{ pathname:'/aisp/dash'}} replace /> : user?.user?.group_id == 3 ? <Navigate to={{ pathname:'/amsp/dash' }} replace /> : <Home /> },
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
                        loader: studentLoader,
                        index: true,
                     }
                  ] 
               },
               
               // Profile
               {  path:'profile', 
                  element: <PgAISPProfile />,
                  loader: aispProfileLoader,
               },
               { 
                  path:'profile/:pin/edit', 
                  element: <PgAISPProfileForm />, 
                  loader: aispProfileFormLoader,
                  action: aispProfileAction
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
                  loader: aispFeesLoader,
               },
               { 
                  path:'fees/:noticeId', 
                  element: <PgAISPNotice />,
                  loader: nssNoticeLoader
               },

               // Results
               {  path:'results', 
                  element: <PgAISPResults />,
                  loader: aispResultsLoader,
               },
               // { 
               //    path:'results/:resultsId', 
               //    element: <PgAISPNotice />,
               //    loader: aispResultLoader
               // },
                // Results
               {  path:'registration', 
                  element: <PgAISPRegistrations />,
                  loader: aispRegistrationsLoader,
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

          /* ACADEMIC SYSTEM ROUTE */
         {
            path: "ais",
            element: <AISLayout />,
            // action: chosenAction,
            children: [
               {  element: <PgAISDash />},
               {  path:'roles', 
                  element: <PgAISRoles />,
               },
               {  path:'reports', 
                  element: <PgAISReport />,
                  //loader: lasRoleLoader,
                  index:true
               },

               
               /* Student Module */
               { 
                  path:'students', 
                  element: <PgAISStudents />,
                  loader: studentsLoader,
               },
               { 
                  path:'students/create', 
                  element: <PgAISStudentForm />,
                  loader: aisStudentFormLoader,
                  action: aisStudentFormAction
               },
               { 
                  path:'students/:studentId', 
                  element: <PgAISStudent />,
                  loader: studentLoader,
                  children: [
                     {
                        path:'profile', 
                        element: <PgAISStudentProfile />,
                        loader: studentLoader,
                        index: true
                     },
                     {
                        path:'finance', 
                        element: <PgAISStudentFinance />,
                        loader: aisStudentFinanceLoader,
                     },
                     {
                        path:'transcript', 
                        element: <PgAISStudentTranscript />,
                        loader: aisStudentTranscriptLoader,
                     },
                     {
                        path:'activity', 
                        element: <PgAISStudentActivity />,
                        loader: studentLoader,
                     },
                     {
                        path:'idcard', 
                        element: <PgAISStudentProfile />,
                        loader: studentLoader,
                     }
                  ]
               },
               { 
                  path:'students/:studentId/destroy', 
                  // action: nssMainDestroy,
               },
               { 
                  path:'students/:studentId/edit', 
                  element: <PgAISStudentForm />, 
                  loader: aisStudentFormLoader,
                  action: aisStudentFormAction
               },

               /* Course Module */
               { 
                  path:'courses', 
                  element: <PgAISCourses />,
                  loader: coursesLoader,
               },
               { 
                  path:'courses/create', 
                  element: <PgAISCourseForm />,
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },
               { 
                  path:'courses/:courseId/destroy', 
                  action: aisCourseDestroy,
               },
               { 
                  path:'courses/:courseId/edit', 
                  element: <PgAISCourseForm />, 
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },

               /* Program Module */
               { 
                  path:'programs', 
                  element: <PgAISPrograms />,
                  loader: aisProgramsLoader,
               },
               { 
                  path:'programs/create', 
                  element: <PgAISProgramForm />,
                  loader: aisProgramFormLoader,
                  action: aisProgramFormAction
               },
               { 
                  path:'programs/:programId', 
                  element: <PgAISProgram />,
                  loader: aisProgramLoader,
                  children: [
                     {
                        index: true,
                        path:'curriculum', 
                        element: <PgAISProgramStructure />,
                        loader: aisProgramStructureLoader,
                     },
                     {
                        path:'students', 
                        element: <PgAISProgramStudent />,
                        loader: aisProgramStudentLoader,
                     },
                     {
                        path:'statistics', 
                        element: <PgAISProgramStatistics />,
                        loader: aisProgramStatisticsLoader,
                     }
                  ]
               },
               { 
                  path:'programs/:programId/destroy', 
                  action: aisProgramDestroy,
               },
               { 
                  path:'programs/:programId/edit', 
                  element: <PgAISProgramForm />, 
                  loader: aisProgramFormLoader,
                  action: aisProgramFormAction
               },

                /* Faculty Module */
                { 
                  path:'faculties', 
                  element: <PgAISFaculties />,
                  loader: facultiesLoader,
               },
               { 
                  path:'departments/create', 
                  element: <PgAISCourseForm />,
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },
               { 
                  path:'departments/:departmentId/destroy', 
                  action: aisCourseDestroy,
               },
               { 
                  path:'departments/:departmentId/edit', 
                  element: <PgAISCourseForm />, 
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },

               /* Department Module */
               { 
                  path:'departments', 
                  element: <PgAISDepartments />,
                  loader: departmentsLoader,
               },
               { 
                  path:'departments/create', 
                  element: <PgAISCourseForm />,
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },
               { 
                  path:'departments/:departmentId/destroy', 
                  action: aisCourseDestroy,
               },
               { 
                  path:'departments/:departmentId/edit', 
                  element: <PgAISCourseForm />, 
                  loader: aisCourseFormLoader,
                  action: aisCourseFormAction
               },

               /* Curriculum & Structure Module */
               { 
                  path:'curriculums', 
                  element: <PgAISStructures />,
                  loader: curriculumsLoader,
               },
               { 
                  path:'curriculums/create', 
                  element: <PgAISStructureForm />,
                  loader: aisCurriculumFormLoader,
                  action: aisCurriculumFormAction
               },
               { 
                  path:'curriculums/:curriculumId/destroy', 
                  action: aisCurriculumDestroy,
               },
               { 
                  path:'curriculums/:curriculumId/edit', 
                  element: <PgAISStructureForm />, 
                  loader: aisCurriculumFormLoader,
                  action: aisCurriculumFormAction
               },

               /* Scheme Module */
               { 
                  path:'schemes', 
                  element: <PgAISSchemes />,
                  loader: schemesLoader,
               },
               { 
                  path:'schemes/create', 
                  element: <PgAISSchemeForm />,
                  loader: aisSchemeFormLoader,
                  action: aisSchemeFormAction
               },
               { 
                  path:'schemes/:schemeId', 
                  element: <PgAISScheme />,
                  loader: aisSchemeLoader,
               },
               { 
                  path:'schemes/:schemeId/destroy', 
                  action: aisSchemeDestroy,
               },
               { 
                  path:'schemes/:schemeId/edit', 
                  element: <PgAISSchemeForm />, 
                  loader: aisSchemeFormLoader,
                  action: aisSchemeFormAction
               },


               /* Registrations Module */
               { 
                  path:'registrations', 
                  element: <PgAISRegistrations />,
                  loader: registrationsLoader,
               },
               { 
                  path:'registrations/create', 
                  element: <PgAISSchemeForm />,
                  loader: aisSchemeFormLoader,
                  action: aisSchemeFormAction
               },
               { 
                  path:'registrations/:registrationId', 
                  element: <PgAISRegsitration />,
                  loader: aisRegistrationLoader,
               },
               { 
                  path:'registrations/:registrationId/destroy', 
                  action: aisRegistrationDestroy,
               },
               { 
                  path:'registrations/:registrationId/edit', 
                  element: <PgAISSchemeForm />, 
                  loader: aisSchemeFormLoader,
                  action: aisSchemeFormAction
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