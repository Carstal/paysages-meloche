import React from 'react';
import { useRouter } from "next/router";
import VisitCard from './VisitCard';
import MiniVisitCard from './MiniVisitCard';

const MiniVisitCardView = ({visits}) => {
    return (
    <div id="visitContainer">
        {visits.map((visit) => (
            // <VisitCard visit={visit}/>
            <MiniVisitCard visit={visit}/>
        ))}
        <style jsx>{`
        #visitContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            overflow-x: auto;
        }

    `}</style>
    </div>
    )}

export default MiniVisitCardView;