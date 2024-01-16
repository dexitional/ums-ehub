import React, { useState } from 'react'
import PageTitle from '../../components/las/PageTitle'
import Service from '../../utils/aisService'
import { useLoaderData } from 'react-router'
import { useUserStore } from '../../utils/authService'
import RegistrationListView from '../../components/aisp/RegistrationListView'
import RegistrationSlipView from '../../components/aisp/RegistrationSlipView'

type Props = {}

export async function loader() {
  const user = useUserStore.getState().user;
  const data = await Service.fetchRegistrationMount(user?.user?.tag);
  const slip = await Service.fetchRegistration(user?.user?.tag);
  return { data,slip }
}

function PgAISPRegistrations({}: Props) {
  const { data,slip } :any = useLoaderData();
  return (
    <div className="md:pl-10 p-4 md:p-6 space-y-4 md:space-y-10">
      <div className="space-y-6">
        <PageTitle title="Registration" createtext="" createlink="" setView={()=> null} view={''} />
        { !slip.length 
          ? <RegistrationListView title={"SEMESTER REGISTRATION PROCEDURE !!"} data={data}  />
          : <RegistrationSlipView  title={"SEMESTER REGISTRATION SLIP"} data={slip}  />
          
        }
      </div>  
    </div>
  )
}

export default PgAISPRegistrations