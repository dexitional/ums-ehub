import React, { useState } from 'react'
import PageTitle from '../../components/dric/PageTitle'
import RoleListView from '../../components/dric/RoleListView'
import Service from '../../utils/dricService'
import { redirect, useLoaderData } from 'react-router'

type Props = {}
export async function action({ params }) {
  await Service.deleteRole(params.roleId);
  return redirect("/hrs/roles");
}

export async function loader() {
  const data = await Service.fetchRoles();
  return { data }
}

function PgHRSRoles({}: Props) {
  const { data }: any = useLoaderData()

  return (
    <div className="md:pl-10 p-4 md:p-6 space-y-4 md:space-y-10">
      <PageTitle title="Roles" createtext="New Role" createlink="create" setView={()=> null} view={''} />
      <div className="">
        <RoleListView data={data} />
      </div>
    </div>
  )
}

export default PgHRSRoles