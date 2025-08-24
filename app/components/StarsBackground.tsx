"use client";
import React, {useEffect} from 'react';
import '../ui/stars.css';

interface IProps {
    starsEnabled?: boolean;
}

const StarsBackground = ({starsEnabled} : IProps) => {

    useEffect(() => {
        document.body.classList.add("stars");

        return () => {
            document.body.classList.remove("stars");
        };
    }, []);

    return starsEnabled ? <div className="galaxy">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
    </div> : <></>
};

export default StarsBackground;
