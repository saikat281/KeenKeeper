import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstallContextTimeline } from '../../context/TimelineContext';

const Stats = () => {
    let cntText = 0;
    let cntCall = 0;
    let cntVideo = 0;
    const { timeline } = useContext(InstallContextTimeline)
    timeline.forEach(data => {
        if (data.status === "text") cntText++;
        else if (data.status === "call") cntCall++;
        else cntVideo++;
    })
    const data = [
        { name: "call", value: cntCall, fill: "#244D3F" },
        { name: "text", value: cntText, fill: "#7F3685" },
        { name: "video", value: cntVideo, fill: "#37A163" },
    ]
    return (
        <div className='container mx-auto mt-24 h-[70vh]'>
            <h1 className='text-4xl font-bold text-center lg:text-start'>Friendship Analysis</h1>
            <div className=' mt-10 bg-blue-50 p-10 rounded-lg'>
                <p className='text-green-800 font-semibold text-[20px] text-center lg:text-start'>By Interaction Type</p>
                <div className='flex flex-col justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </PieChart>
                </div>

            </div>

        </div>
    );
};

export default Stats;