import React from 'react';
import { useRouter } from "next/router";
import InvoiceCard from './InvoiceCard';
import InvoiceProjectForm from './InvoiceProjectForm';

const InvoiceDisplay = ({invoice,project}) => {
    if(project.quote_id == 0){
        return null
    }
    if(invoice != null){
        return (
            <InvoiceCard invoice={invoice}/>
        )
    }
    else{
        return(
            <InvoiceProjectForm project={project}/>
        )
    }
}

export default InvoiceDisplay;