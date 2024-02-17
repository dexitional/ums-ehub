import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../utils/authService';
import AMSPLayout from '../components/amsp/AMSPLayout';
import AMSPPager from '../components/amsp/AMSPPager';
import PgAMSPDash from '../pages/amsp/PgAMSPDash';
import AMSPSwitcher from '../components/amsp/AMSPSwitcher';
import PgStepProfile, { loader as stepProfileLoader, action as stepProfileAction } from '../pages/amsp/PgStepProfile';
import PgStepConfigure, { loader as stepConfigureLoader,action as stepConfigureAction     } from '../pages/amsp/PgStepConfigure';

const user = useUserStore.getState().user
// const dricRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric')

const AMSPRoute:any =  { 
    path: "amsp",
   element: <AMSPLayout />,
   //action: chosenAction,
   children: [
    //   {  
    //     element: <AMSPPager />,
    //     children: [
    //       {  
    //         path:'dash',
    //         element: <PgAMSPDash />, 
    //         loader: null,
    //       }
    //     ] 
    //   },
      { 
        path:'apply',
        element: <AMSPSwitcher />,
        children: [
          {  
             index:true,
             //path:'configure',
             element: <PgStepConfigure />, 
             loader: stepConfigureLoader,
             action: stepConfigureAction,
             
          },
          {  
            path:'profile',
            element: <PgStepProfile />, 
            loader: stepProfileLoader,
            action: stepProfileAction,
          },
          {  
            path:'guardian',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'education',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'result',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'referee',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'document',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'choice',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'employment',
            element: <PgAMSPDash />, 
            loader: null,
          },
          {  
            path:'review',
            element: <PgAMSPDash />, 
            loader: null,
          }
        ] 
      },
      
      // Preview
    //   {  path:'preview', 
    //      element: <PgAISPProfile />,
    //      loader: aispProfileLoader,
    //      index:true
    //   },
    //   { 
    //      path:'profile/:profileId/edit', 
    //      element: <PgAISPProfileForm />, 
    //      loader: aispProfileFormLoader,
    //      action: aispProfileAction
    //   },

    //   // Notices
    //   {  path:'notices', 
    //      element: <PgAISPNotices />,
    //      loader: nssNoticesLoader,
    //   },
    //   { 
    //      path:'notices/:noticeId', 
    //      element: <PgAISPNotice />,
    //      loader: nssNoticeLoader
    //   },
      
    //   // Fees & Charges
    //   {  path:'fees', 
    //      element: <PgAISPFees />,
    //      loader: aispFeesLoader,
    //   },
    //   { 
    //      path:'fees/:noticeId', 
    //      element: <PgAISPNotice />,
    //      loader: nssNoticeLoader
    //   },

    //   // Results
    //   {  path:'results', 
    //      element: <PgAISPResults />,
    //      loader: aispResultsLoader,
    //   },
    //   // { 
    //   //    path:'results/:resultsId', 
    //   //    element: <PgAISPNotice />,
    //   //    loader: aispResultLoader
    //   // },
    //    // Results
    //   {  path:'registration', 
    //      element: <PgAISPRegistrations />,
    //      loader: aispRegistrationsLoader,
    //   },


    //   // Services
    //   {  path:'services', 
    //      element: <PgAISPServices />,
    //      loader: nssServicesLoader,
    //   },
    //   { 
    //      path:'services/:serviceId', 
    //      element: <PgAISPService />,
    //      loader: nssServiceLoader
    //   },
    //   { 
    //      path:'services/create', 
    //      element: <PgAISPServiceForm />,
    //      loader: nssServiceFormLoader,
    //      action: nssServiceFormAction
    //   },
    //   { 
    //      path:'services/:serviceId/edit/', 
    //      element: <PgAISPServiceForm />, 
    //      loader: nssServiceFormLoader,
    //      action: nssServiceFormAction
    //   },
    //   { 
    //      path:'services/:serviceId/destroy', 
    //      //action: lasRolesDestroy,
    //   },

    //   // Password Change
    //   {  path:'changepwd', 
    //      element: <PgAISPPasswordForm />,
    //      action: nssPasswordFormAction
    //   },
      

   ]
}

export default AMSPRoute