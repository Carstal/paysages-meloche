import React from 'react';
import { useRouter } from "next/router";
import QuoteCard from './QuoteCard';
import QuoteProjectForm from './QuoteProjectForm';

const QuoteDisplay = ({quote,project}) => {
    if(quote != null){
        return (
            <QuoteCard quote={quote}/>
        )
    }
    else{
        return(
            <QuoteProjectForm project={project}/>
        )
    }
}

export default QuoteDisplay;