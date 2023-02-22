import React from 'react';
import { useRouter } from "next/router";
import InvoiceCard from './InvoiceCard';
import InvoiceProjectForm from './InvoiceProjectForm';

const InvoiceDisplay = ({invoice,project}) => {
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