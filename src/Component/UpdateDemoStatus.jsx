import React from 'react'
import Dashboard, { DashboardCarousel } from "./DashboardNavBar";
import PageHeader from "../../components/PageHeader";
import UpdateDemoStatusForm from "./UpdateDemoStatusForm";
import  PeopleOutlineTwoToneIcon  from "@material-ui/icons/PeopleOutlineTwoTone";

export default function UpdateDemo() {
    return (
        <>
            <PageHeader
                title="Demo Status"
                subtitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <updatedemoForm />
        </>
    )
}