import React, { useContext, useState } from 'react';
import { InstallContextTimeline } from '../../context/TimelineContext';
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import callImg from '../../assets/call.png'
import { IoIosArrowDown } from 'react-icons/io';
const Timeline = () => {
    const { timeline } = useContext(InstallContextTimeline)
    console.log(timeline);
    const handleImage = (status) => {
        if (status === "text") return textImg;
        else if (status === "video") return videoImg;
        else return callImg
    }
    const [filter, setFilter] = useState("all");
    const filterData =
        filter === "all" ? timeline : timeline.filter(data => data.status === filter)

    return (
        <div className='container mx-auto mt-16'>
            <h1 className='text-3xl font-bold mb-3'>Timeline </h1>

            <details className="dropdown">
                <summary className="btn m-1 text-gray-600">Filter Timeline <IoIosArrowDown /></summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setFilter("call")}><a>call</a></li>
                    <li onClick={() => setFilter("text")}><a>text</a></li>
                    <li onClick={() => setFilter("video")}><a>video</a></li>
                </ul>
            </details>

            <div className='space-y-6 mt-30'>
                {
                    filterData.map((data, idx) => {
                        return (
                            <div key={idx} className='bg-blue-100 flex items-center p-4 rounded-lg gap-2 shadow'>
                                <div>
                                    <img src={handleImage(data.status)} alt="" />
                                </div>
                                <div>
                                    <p className='text-green-800 font-bold'>{`${data.status} with`} <span className='text-gray-500'>{data.name}</span></p>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Timeline;