"use client";
import LinksTable from "@/app/components/LinksTable";
import RainEffect from "@/app/components/RainEffect";
import React, {useEffect, useRef, useState} from "react";
import Sidebar from "@/app/components/Sidebar";
import StarsBackground from "@/app/components/StarsBackground";
import AboutMe from "@/app/components/AboutMe";
import GoalsPage from "@/app/components/GoalsPage";
import {Pages} from "@/app/lib/types/pages";

const getLS = (key: string, def: boolean) => {
    if (typeof window === "undefined") return def;
    const v = localStorage.getItem(key);
    return v === null ? def : v === "true";
};


export default function MePage() {



    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [page, setPage] = useState(Pages.ME);

    // State with localStorage persistence
    const [rainEnabled, setRainEnabled] = useState(() => getLS("rainEnabled", true));
    const [starsEnabled, setStarsEnabled] = useState(() => getLS("starsEnabled", true));
    const [thunderEnabled, setThunderEnabled] = useState(() => getLS("thunderEnabled", true));
    const [isPlaying, setIsPlaying] = useState(() => getLS("isPlaying", true));

    // Load settings from localStorage on mount
    useEffect(() => { localStorage.setItem("rainEnabled", rainEnabled.toString()); }, [rainEnabled]);
    useEffect(() => { localStorage.setItem("starsEnabled", starsEnabled.toString()); }, [starsEnabled]);
    useEffect(() => { localStorage.setItem("thunderEnabled", thunderEnabled.toString()); }, [thunderEnabled]);
    useEffect(() => { localStorage.setItem("isPlaying", isPlaying.toString()); }, [isPlaying]);

    // Toggle audio
    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying && audioRef.current) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current && rainEnabled && isPlaying) {
            audioRef.current.loop = true;
            audioRef.current.volume = 0.1;
            audioRef.current.play();
        }

        else if (audioRef.current) {
            audioRef.current.pause();
        }
    }, [isPlaying, rainEnabled]);

    return (
        <div className="max-w-6xl mx-auto px-2 py-16 text-gray-300 flex flex-col items-center gap-12">
            {page === Pages.ME &&
            <>
                <AboutMe/>
                <LinksTable setPage={setPage}/>
            </>}
            {page == Pages.GOALS && <GoalsPage onBack={() => setPage(Pages.ME)}/>}
            <Sidebar
                rainEnabled={rainEnabled}
                starsEnabled={starsEnabled}
                setThunderEnabled={setThunderEnabled}
                thunderEnabled={thunderEnabled}
                setRainEnabled={setRainEnabled}
                setStarsEnabled={setStarsEnabled}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
            />
            <StarsBackground starsEnabled={starsEnabled}/>
            {rainEnabled && <RainEffect dropsCount={40} thunder={thunderEnabled} audioEnabled={isPlaying}/>}
            <audio ref={audioRef} loop src="./rain.mp3"/>
        </div>

    );
}
