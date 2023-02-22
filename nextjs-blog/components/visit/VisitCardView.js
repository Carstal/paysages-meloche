import React from 'react';
import { useRouter } from "next/router";
import VisitCard from './VisitCard';
import MiniVisitCard from './MiniVisitCard';

const VisitCardView = ({visits}) => {
    return (
    <div id="visitContainer">
        {visits.map((visit) => (
            <VisitCard visit={visit}/>
            // <MiniVisitCard visit={visit}/>
        ))}
    </div>
    )}

export default VisitCardView;