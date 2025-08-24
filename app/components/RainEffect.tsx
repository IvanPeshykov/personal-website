import '../ui/rain.css'
import { useEffect } from "react";

interface RainEffectProps {
    dropsCount?: number;
    thunder?: boolean;
    audioEnabled?: boolean;
}

const RainEffect = ({ dropsCount = 20, thunder = true, audioEnabled = true }: RainEffectProps) => {
    useEffect(() => {
        const elements: HTMLElement[] = [];
        const setDropPosition = (el: HTMLElement) => {
            const width = document.documentElement.clientWidth;
            el.style.left = Math.floor(Math.random() * (width + 40) - 40) + "px";
        };

        for (let i = 0; i < dropsCount; i++) {
            const hr = document.createElement("HR");
            if (thunder && i === dropsCount - 1) {
                hr.className = "thunder";
            } else {
                setDropPosition(hr);
                hr.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
                hr.style.animationDelay = Math.random() * 5 + "s";
            }
            document.body.appendChild(hr);
            elements.push(hr);
        }

        const handleResize = () => {
            elements.forEach(el => {
                if (!el.classList.contains("thunder")) setDropPosition(el);
            });
        };
        window.addEventListener("resize", handleResize);

        const interval = setInterval(() => {
            if (audioEnabled) new Audio('./thunder.mp3').play();
        }, 30000)

        return () => {
            elements.forEach(el => document.body.removeChild(el));
            window.removeEventListener("resize", handleResize);
            window.clearInterval(interval);
        };
    }, [dropsCount, thunder, audioEnabled]);

    return null;
};

export default RainEffect;
