import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import DricLayout from './components/dric/DricLayout';
import PgDricDash, { loader as dashboardLoader } from './pages/dric/PgDricDash';
import PgDricReport from './pages/dric/PgDricReport';

import PgDricFunders, { loader as fundersLoader, action as fundersDestroy } from './pages/dric/PgDricFunders';
import PgDricFunder,{ loader as funderLoader } from './pages/dric/PgDricFunder';
import PgDricFunderForm, { loader as funderFormLoader, action as funderFormAction } from './pages/dric/PgDricFunderForm';
import PgDricProjects, { loader as projectsLoader, action as projectsDestroy } from './pages/dric/PgDricProjects';
import PgDricProject,{ loader as projectLoader, action as phaseDestroy } from './pages/dric/PgDricProject';
import PgDricProjectForm, { loader as projectFormLoader, action as projectFormAction } from './pages/dric/PgDricProjectForm';
import PgDricPhase,{ loader as phaseLoader, action as activitiesDestroy } from './pages/dric/PgDricPhase';
import PgDricPhaseForm, { loader as phaseFormLoader, action as phaseFormAction } from './pages/dric/PgDricPhaseForm';
import PgDricActivity from './pages/dric/PgDricActivity';
import PgDricActivityForm, { loader as activityFormLoader, action as activityFormAction } from './pages/dric/PgDricActivityForm';
import PgDricInvestigators, { loader as investigatorsLoader, action as investigatorsDestroy } from './pages/dric/PgDricInvestigators';
import PgDricInvestigator, { loader as investigatorLoader } from './pages/dric/PgDricInvestigator';
import PgDricInvestigatorForm, { loader as investigatorFormLoader, action as investigatorFormAction } from './pages/dric/PgDricInvestigatorForm';
import PgDricPersonnels, { loader as personelsLoader, action as personelsDestroy } from './pages/dric/PgDricPersonnels';
import PgDricPersonnel, { loader as personelLoader } from './pages/dric/PgDricPersonnel';
import PgDricPersonnelForm, { loader as personelFormLoader, action as personelFormAction } from './pages/dric/PgDricPersonnelForm';
import PgDricRoles, { loader as rolesLoader, action as rolesDestroy } from './pages/dric/PgDricRoles';
import PgDricRoleForm, { loader as roleFormLoader, action as roleFormAction } from './pages/dric/PgDricRoleForm';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useUserStore } from './utils/authService';
import LASLayout from './components/las/LASLayout';
import PgLASDash, { action as chosenAction } from './pages/las/PgLASDash';
import LASByCollegeList, { loader as collegeLoader } from './components/las/LASByCollegeList';
import LASByFacultyList, { loader as facultyLoader } from './components/las/LASByFacultyList';
import LASByDepartmentList, { loader as departmentLoader } from './components/las/LASByDepartmentList';
import LASCandidates, { loader as candidateLoader } from './components/las/LASCandidates';
import LASByGroup from './components/las/LASByGroup';
import PgLASResult, { loader as lasResultLoader } from './pages/las/PgLASResult';
import PgLASRoles, { loader as lasRoleLoader, action as lasRolesDestroy } from './pages/las/PgLASRoles';
import PgLASRoleForm, { loader as lasRoleFormLoader, action as lasRoleFormAction } from './pages/las/PgLASRoleForm';
import PgLASSettingForm from './pages/las/PgLASSettingForm';


import HRSLayout from './components/hrs/HRSLayout';
import PgHRSRoles from './pages/hrs/PgHRSRoles';
import PgHRSReport from './pages/hrs/PgHRSReport';
import PgDricPayments, { loader as paymentsLoader, action as paymentsDestroy } from './pages/dric/PgDricPayments';
import PgDricPaymentForm, { loader as paymentFormLoader, action as paymentFormAction } from './pages/dric/PgDricPaymentForm';
import PgDricPayment, { loader as paymentLoader } from './pages/dric/PgDricPayment';
import PgDricClaims, { loader as claimsLoader, action as claimsDestroy } from './pages/dric/PgDricClaims';
import PgDricClaimForm, { loader as claimFormLoader, action as claimFormAction } from './pages/dric/PgDricClaimForm';
import PgDricClaim, { loader as claimLoader } from './pages/dric/PgDricPayment';
import PgLASSettings from './pages/las/PgLASSettings';
import NSSLayout from './components/nss/NSSLayout';
import PgNSSDash, { loader as nssDashLoader } from './pages/nss/PgNSSDash';
import PgNSSProfile, { loader as nssProfileLoader } from './pages/nss/PgNSSProfile';
import NSSPager from './components/nss/NSSPager';
import PgNSSProfileForm, {  action as nssProfileAction } from './pages/nss/PgNSSProfileForm';
import NSSSiteLayout from './components/nss/NSSSiteLayout';
import PgNSSRegisterForm, { loader as nssFormLoader, action as nssFormAction } from './pages/nss/PgNSSRegisterForm';
import PgNSSRegisterDone, { loader as nssRegisterLoader } from './pages/nss/PgNSSRegisterDone';
import PgNSSNotice, { loader as nssNoticeLoader } from './pages/nss/PgNSSNotice';
import PgNSSNotices, { loader as nssNoticesLoader } from './pages/nss/PgNSSNotices';
import PgNSSServices, { loader as nssServicesLoader }  from './pages/nss/PgNSSServices';
import PgNSSService, { loader as nssServiceLoader }  from './pages/nss/PgNSSService';
import PgNSSServiceForm, { loader as nssServiceFormLoader, action as nssServiceFormAction } from './pages/nss/PgNSSServiceForm';
import PgNSSPasswordForm, { action as nssPasswordFormAction } from './pages/nss/PgNSSPasswordForm';
import PgHRSNSSPeople, { loader as nssMainLoader, action as nssMainDestroy} from './pages/hrs/PgHRSNSSPeople';
import PgHRSNSSForm, { loader as nssMainFormLoader, action as nssMainFormAction } from './pages/hrs/PgHRSNSSForm';
import PgHRSNSSPerson, { loader as nssMainPersonLoader } from './pages/hrs/PgHRSNSSPerson';

const { REACT_APP_GOOGLE_CLIENT_ID } = import.meta.env;

function App() {
  
  const { isAuthenticated, user } = useUserStore(state => state)
  const dricRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric')
  
  const router = createBrowserRouter([
    // Public Routes
    { path: "/", element: <Navigate to={{ pathname: isAuthenticated() ? '/dash' : '/login' }} replace />,  },
    { path: "/login", element: isAuthenticated() ? <Navigate to={{ pathname:'/dash'}} replace /> : <Login /> },
    { 
      path:'/register/nss',
      element: <NSSSiteLayout />,
      children: [
         {
            element: <PgNSSRegisterForm />,
            loader: nssFormLoader,
            action: nssFormAction,
            index: true 
         },
         {  path:':pin', 
            element: <PgNSSRegisterDone />, 
            loader: nssRegisterLoader,
         },
      ]
   },
    // Protected Routes
    { 
      element: isAuthenticated() ? <Outlet/> : <Navigate to={{ pathname:'/login'}} replace />,
      children:[
         { path: "dash", element: <Home /> },
         // { path: "evs", element: <EVSPage /> },
         // { path: "evsmain", element: <EVSDashPage /> },
         // { path: "service/:module", element: <Home /> },
         
         /* DRIC PROJECT ROUTE */
         { 
            path: "dric",
            element: <DricLayout />,
            children: [
               {  path:'dash', 
                  element: <PgDricDash />, 
                  loader: dashboardLoader,
                  index: true 
               },

               // Payments 
               { 
                  path:'payments', 
                  element: <PgDricPayments />,
                  loader: paymentsLoader,
               },
               { 
                  path:'payments/create', 
                  element: <PgDricPaymentForm />,
                  loader: paymentFormLoader,
                  action: paymentFormAction
               },
               { 
                  path:'payments/:claimId', 
                  element: <PgDricPayment />,
                  loader: paymentLoader
               },
               { 
                  path:'payments/:paymentId/destroy', 
                  action: paymentsDestroy,
               },
               { 
                  path:'payments/:paymentId/edit', 
                  element: <PgDricPaymentForm />, 
                  loader: paymentFormLoader,
                  action: paymentFormAction
               },


                // Payments 
                { 
                  path:'claims', 
                  element: <PgDricClaims />,
                  loader: claimsLoader,
               },
               { 
                  path:'claims/create', 
                  element: <PgDricClaimForm />,
                  loader: claimFormLoader,
                  action: claimFormAction
               },
               { 
                  path:'claims/:claimId', 
                  element: <PgDricClaim />,
                  loader: claimLoader
               },
               { 
                  path:'claims/:claimId/destroy', 
                  action: claimsDestroy,
               },
               { 
                  path:'claims/:claimId/edit', 
                  element: <PgDricClaimForm />, 
                  loader: claimFormLoader,
                  action: claimFormAction
               },
               
            
               // Funders 
               { 
                  path:'funders', 
                  element: <PgDricFunders />,
                  loader: fundersLoader,
               },
               { 
                  path:'funders/create', 
                  element: <PgDricFunderForm />,
                  loader: funderFormLoader,
                  action: funderFormAction
               },
               { 
                  path:'funders/:funderId', 
                  element: <PgDricFunder />,
                  loader: funderLoader
               },
               { 
                  path:'funders/:funderId/destroy', 
                  action: fundersDestroy,
               },
               { 
                  path:'funders/:funderId/edit', 
                  element: <PgDricFunderForm />, 
                  loader: funderFormLoader,
                  action: funderFormAction
               },
               
               
               // Projects 
               { 
                  path:'projects', 
                  element: <PgDricProjects />, 
                  loader: projectsLoader,
               },
               { 
                  path:'projects/create', 
                  element: <PgDricProjectForm />,
                  loader: projectFormLoader,
                  action: projectFormAction
               },
               { 
                  path:'projects/:projectId', 
                  element: <PgDricProject /> ,
                  loader: projectLoader
               },
               { 
                  path:'projects/:projectId/destroy', 
                  action: projectsDestroy,
               },
               { 
                  path:'projects/:projectId/edit', 
                  element: <PgDricProjectForm />, 
                  loader: projectFormLoader,
                  action: projectFormAction
               },

               // Phase 
               { 
                  path:'projects/:projectId/phases/create', 
                  element: <PgDricPhaseForm />,
                  loader: phaseFormLoader,
                  action: phaseFormAction
               },
               { 
                  path:'projects/:projectId/phases/:phaseId', 
                  element: <PgDricPhase /> ,
                  loader: phaseLoader,
                  
               },
               {  
                  path:'projects/:projectId/phases/:phaseId/edit', 
                  element: <PgDricPhaseForm />,
                  loader: phaseFormLoader,
                  action: phaseFormAction
               },
               { 
                  path:'projects/:projectId/phases/:phaseId/destroy', 
                  action: phaseDestroy,
               },

               // Activity 
               { 
                  path:'projects/:projectId/phases/:phaseId/activities/create', 
                  element: <PgDricActivityForm />,
                  loader: activityFormLoader,
                  action: activityFormAction
               },
               { 
                  path:'projects/:projectId/phases/:phaseId/activities/:activityId', 
                  element: <PgDricActivity />,
                  loader: activityFormLoader,
               },
               { 
                  path:'projects/:projectId/phases/:phaseId/activities/:activityId/destroy', 
                  action: activitiesDestroy,
               },
               { 
                  path:'projects/:projectId/phases/:phaseId/activities/:activityId/edit', 
                  element: <PgDricActivityForm />,
                  loader: activityFormLoader,
                  action: activityFormAction 
               },

               // Investigators
               { 
                  path:'investigators', 
                  element: <PgDricInvestigators /> ,
                  loader: investigatorsLoader,
               },
               { 
                  path:'investigators/create', 
                  element: <PgDricInvestigatorForm />,
                  loader: investigatorFormLoader,
                  action: investigatorFormAction
               },
               { 
                  path:'investigators/:investigatorId', 
                  element: <PgDricInvestigator /> ,
                  loader: investigatorLoader
               },
               { 
                  path:'investigators/:investigatorId/destroy', 
                  action: investigatorsDestroy,
               },
               { 
                  path:'investigators/:investigatorId/edit', 
                  element: <PgDricInvestigatorForm />, 
                  loader: investigatorFormLoader,
                  action: investigatorFormAction
               },

               // Personnel
               { 
                  path:'personels', 
                  element: <PgDricPersonnels />,
                  loader: personelsLoader, 
               },
               { 
                  path:'personels/create', 
                  element: <PgDricPersonnelForm />,
                  loader: personelFormLoader,
                  action: personelFormAction
               },
               { 
                  path:'personels/:personelId', 
                  element: <PgDricPersonnel />,
                  loader: personelLoader 
               },
               { 
                  path:'personels/:personelId/destroy', 
                  action: personelsDestroy,
               },
               { 
                  path:'personels/:personelId/edit', 
                  element: <PgDricPersonnelForm />, 
                  loader: personelFormLoader,
                  action: personelFormAction
               },

               // Roles
               { 
                  path:'roles', 
                  element:  ['dric techlead','dric admin'].includes(dricRole?.role_name?.toLowerCase()) ? <PgDricRoles /> : <Navigate to={{ pathname:'/dric/dash'}} replace />,
                  loader: rolesLoader, 
               },
               { 
                  path:'roles/create', 
                  element: <PgDricRoleForm />,
                  loader: roleFormLoader,
                  action: roleFormAction
               },
               { 
                  path:'roles/:roleId/edit/', 
                  element: <PgDricRoleForm />, 
                  loader: roleFormLoader,
                  action: roleFormAction
               },
               { 
                  path:'roles/:roleId/destroy', 
                  action: rolesDestroy,
               },

               // Reports
               { 
                  path:'reports', 
                  element: <PgDricReport /> 
               },
            ]
         },

         
         /* BEXLECTURER SYSTEM ROUTE */
         {
            path: "las",
            element: <LASLayout />,
            action: chosenAction,
            children: [
               {  element: <PgLASDash />,
                  children: [
                     {  
                        path:'dash',
                        element: <LASByGroup />, 
                        index: true,
                     },
                     {  
                        path:'dash/colleges',
                        element: <LASByCollegeList />, 
                        loader: collegeLoader
                     },
                     {
                        path:'dash/colleges/:collegeId/faculties',
                        element: <LASByFacultyList />,
                        loader: facultyLoader 
                     },
                     {
                        path:'dash/colleges/:collegeId/faculties/:facultyId/departments',
                        element: <LASByDepartmentList />,
                        loader: departmentLoader 
                     },
                     {
                        path:'dash/colleges/:collegeId/faculties/:facultyId/departments/:deptId/candidates',
                        element: <LASCandidates />, 
                        loader: candidateLoader
                     }
                     
                  ] 
               },

               // Results
               {  path:'results', 
                  element: <PgLASResult />,
                  loader: lasResultLoader,
               },

               // Settings
               {  path:'settings', 
                  element: <PgLASSettings />,
                  loader: lasResultLoader,
               },
               { 
                  path:'settings/create', 
                  element: <PgLASSettingForm />,
                  loader: lasRoleFormLoader,
                  action: lasRoleFormAction
               },
               { 
                  path:'settings/:settingId/edit/', 
                  element: <PgLASSettingForm />, 
                  loader: lasRoleFormLoader,
                  action: lasRoleFormAction
               },
               { 
                  path:'settings/:settingId/destroy', 
                  action: lasRolesDestroy,
               },

               // Roles
               {  path:'roles', 
                  element: <PgLASRoles/>,
                  loader: lasRoleLoader,
               },
               { 
                  path:'roles/create', 
                  element: <PgLASRoleForm />,
                  loader: lasRoleFormLoader,
                  action: lasRoleFormAction
               },
               { 
                  path:'roles/:roleId/edit/', 
                  element: <PgLASRoleForm />, 
                  loader: lasRoleFormLoader,
                  action: lasRoleFormAction
               },
               { 
                  path:'roles/:roleId/destroy', 
                  action: lasRolesDestroy,
               },

              
            
              
            ]
         },

         /* HRMS ADMIN SYSTEM ROUTE */
         {
            path: "hrs",
            element: <HRSLayout />,
            action: chosenAction,
            children: [
               {  element: <PgLASDash />,
                  children: [
                     {  
                        path:'dash',
                        element: <LASByGroup />, 
                     }
                  ] 
               },
               {  path:'roles', 
                  element: <PgHRSRoles />,
               },
               {  path:'reports', 
                  element: <PgHRSReport />,
                  loader: lasRoleLoader,
                  index:true
               },

               // NSS Module 
               { 
                  path:'nss', 
                  element: <PgHRSNSSPeople />,
                  loader: nssMainLoader,
               },
               { 
                  path:'nss/create', 
                  element: <PgHRSNSSForm />,
                  loader: nssMainFormLoader,
                  action: nssMainFormAction
               },
               { 
                  path:'nss/:nssId', 
                  element: <PgHRSNSSPerson />,
                  loader: nssMainPersonLoader
               },
               { 
                  path:'nss/:nssId/destroy', 
                  action: nssMainDestroy,
               },
               { 
                  path:'nss/:nssId/edit', 
                  element: <PgHRSNSSForm />, 
                  loader: nssMainFormLoader,
                  action: nssMainFormAction
               },
            ]
         },

         /* NSS PORTAL SYSTEM ROUTE */
         {
            path: "nss",
            element: <NSSLayout />,
            action: chosenAction,
            children: [
               {  element: <NSSPager />,
                  children: [
                     {  
                        path:'dash',
                        element: <PgNSSDash />, 
                        loader: nssDashLoader,
                        index: true,
                     },
                     {  path:'profile', 
                        element: <PgNSSProfile />,
                        loader: nssProfileLoader,
                     },
                     { 
                        path:'profile/create', 
                        element: <PgNSSProfileForm />,
                        loader: nssProfileLoader,
                        action: nssProfileAction
                     },
                     { 
                        path:'profile/:pin/edit', 
                        element: <PgNSSProfileForm />, 
                        loader: nssProfileLoader,
                        action: nssProfileAction
                     },
                  ] 
               },
               // Disciplinary
               {  path:'disciplinary', 
                  element: <PgLASSettings />,
                  loader: lasResultLoader,
               },
               // Notices
               {  path:'notices', 
                  element: <PgNSSNotices />,
                  loader: nssNoticesLoader,
               },
               { 
                  path:'notices/:noticeId', 
                  element: <PgNSSNotice />,
                  loader: nssNoticeLoader
               },

               // Services
               {  path:'services', 
                  element: <PgNSSServices />,
                  loader: nssServicesLoader,
               },
               { 
                  path:'services/:serviceId', 
                  element: <PgNSSService />,
                  loader: nssServiceLoader
               },
               { 
                  path:'services/create', 
                  element: <PgNSSServiceForm />,
                  loader: nssServiceFormLoader,
                  action: nssServiceFormAction
               },
               { 
                  path:'services/:serviceId/edit/', 
                  element: <PgNSSServiceForm />, 
                  loader: nssServiceFormLoader,
                  action: nssServiceFormAction
               },
               { 
                  path:'services/:serviceId/destroy', 
                  action: lasRolesDestroy,
               },

               // Password Change
               {  path:'changepwd', 
                  element: <PgNSSPasswordForm />,
                  action: nssPasswordFormAction
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