import React, { useState } from 'react';
import { InstallContextTimeline } from './TimelineContext';

const TimelineContextProvider = ({children}) => {
    const [timeline,setTimeline] = useState([])
    const data = {
        timeline,setTimeline
    }
    return (
        <InstallContextTimeline.Provider value={data}>
            {children}
        </InstallContextTimeline.Provider>
    );
};

export default TimelineContextProvider;