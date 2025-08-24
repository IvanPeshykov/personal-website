// app/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
    rainEnabled: boolean;
    starsEnabled: boolean;
    setRainEnabled: (v: boolean) => void;
    setStarsEnabled: (v: boolean) => void;
    setThunderEnabled: (v: boolean) => void;
    thunderEnabled: boolean;
    isPlaying: boolean;
    togglePlay: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             rainEnabled,
                                             starsEnabled,
                                            setThunderEnabled,
                                            thunderEnabled,
                                             setRainEnabled,
                                             setStarsEnabled,
                                             isPlaying,
                                             togglePlay
                                         }) => (
    <aside className='bg-opacity-70  p-4 rounded-lg text-gray-300 w-48 z-50'>

        <label>
            <input
                type="checkbox"
                checked={rainEnabled}
                onChange={e => setRainEnabled(e.target.checked)}
            />
            Rain
        </label>

        <br/>
        <label>
            <input
                type="checkbox"
                disabled={!rainEnabled}

                checked={thunderEnabled}
                onChange={e => setThunderEnabled(e.target.checked)}
            />
            Thunder
        </label>
        <br/>
        <label>
            <input
                type="checkbox"
                checked={starsEnabled}
                onChange={e => setStarsEnabled(e.target.checked)}
            />
            Background
        </label>
        <br/>
        <label>
            <input
                type="checkbox"
                checked={isPlaying}
                onChange={() => togglePlay()}
            />
            Audio
        </label>
    </aside>
);

export default Sidebar;
