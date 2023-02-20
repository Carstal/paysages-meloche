import React from 'react';
import { useRouter } from "next/router";
import VisitCard from './VisitCard';

const VisitCardView = ({visits}) => {
    return (
    <div id="visitContainer">
        {visits.map((visit) => (
            <VisitCard visit={visit}/>
        ))}
    </div>
    )}

export default VisitCardView;