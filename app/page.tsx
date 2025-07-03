import Link from "next/link";
import {FaGithub, FaLinkedin, FaCode, FaInstagram, FaUser} from "react-icons/fa";
import {SiFiverr} from "react-icons/si";

export default function Home() {
    return (
        <div className="container max-w-6xl mx-auto md:px-6 text-center">
            <h1 className="text-4xl font-bold mb-8 text-center ">Hey, I’m Ivan 👋</h1>
            <p className="text-lg mb-6">
                A passionate software developer with over <strong>4 years of experience</strong> crafting,
                optimizing, and automating applications and systems.
            </p>
            <p className="mb-4">
                What started as a hobby quickly turned into my profession. Since then, I’ve built a variety
                of <Link className='underline' href={'/projects'}>projects</Link> — from desktop tools and mobile apps to web platforms, automation bots, and
                games.
            </p>
            <p className="mb-4">
                I specialize in <strong>scripting, backend development</strong>, and <strong>system
                design</strong>, with strong skills in <strong>Python</strong>, <strong>C++</strong>, and
                modern web technologies. I’m committed to clean, efficient code and delivering reliable,
                scalable solutions.
            </p>
            <p className="mb-8">
                Beyond development, I enjoy working on projects involving system architecture, data
                processing, and cloud deployments using Docker, AWS, and Azure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Tech Stack & Skills:</h2>
            <ul className="list-disc list-inside mb-8 space-y-1 ">
                <li>💻 <strong>Languages:</strong> Python, C++, TypeScript, JavaScript, C#</li>
                <li>🌐 <strong>Backend:</strong> FastAPI, Django, Node.js</li>
                <li>🤖 <strong>Automation:</strong> Telegram & Discord bots, Browser Automation Studio</li>
                <li>🔍 <strong>Web Scraping:</strong> Scrapy, Selenium, BeautifulSoup4</li>
                <li>🗄️ <strong>Databases:</strong> PostgreSQL, SQLite, Redis</li>
                <li>🎨 <strong>Frontend (Basics):</strong> React, Next.js, HTML, CSS</li>
                <li>🛠️ <strong>Tools:</strong> Git, Docker, Pytest, Jest</li>
                <li>📐 <strong>Concepts:</strong> OOP, TDD, SOLID, clean code, system design</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">Useful Links:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-sm sm:max-w-xl mx-auto">
                <a
                    href="https://github.com/IvanPeshykov"
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-600 max-h-10 text-gray-100 hover:bg-gray-700 hover:text-white transition"
                >
                    <FaGithub size={24}/>
                    <span>GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/ivanpeshykov"
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 max-h-10 text-gray-100 hover:bg-blue-700 hover:text-white transition"
                >
                    <FaLinkedin size={24}/>
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://leetcode.com/your_username"
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-yellow-500 max-h-10 text-gray-100 hover:bg-yellow-600 hover:text-white  transition"
                >
                    <FaCode size={24}/>
                    <span>LeetCode</span>
                </a>

                <a
                    href="https://www.instagram.com/your_username"
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-pink-500 max-h-10 text-gray-100 hover:bg-pink-600 hover:text-white transition"
                >
                    <FaInstagram size={24}/>
                    <span>Instagram</span>
                </a>
                <a
                    href="https://www.fiverr.com/ivan00000"
                    target="_blank"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600 max-h-10 text-gray-100 hover:bg-green-700 hover:text-white transition"
                >
                    <SiFiverr size={30}/>
                    <span>Fiverr</span>
                </a>
                <Link
                    href="/me"
                    className="flex items-center space-x-2 px-4 py-2 bg-lime-500 text-gray-100 rounded-lg max-h-10 hover:bg-lime-600 hover:text-white transition"
                >
                    <FaUser size={20}/>
                    <span>About Me</span>
                </Link>
            </div>
        </div>
    );
}
