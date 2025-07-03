"use client";
import LinksTable from "@/app/components/LinksTable";

export default function MePage() {

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 text-gray-300 flex flex-col items-center gap-12">
            <div className="lg:w-2/3">
                <h1 className="text-4xl font-bold mb-6">About me</h1>

                <p className="text-lg leading-relaxed mb-6">
                    I was born in June 2007 in eastern Ukraine, into a typical working-class family. My early childhood
                    was simple but happy - filled with summer trips to the seaside, weekends at our family's garden
                    plot, and endless hours playing video games with my cousin who was more like a brother to me.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    When conflict came to our region in 2014, our family had to relocate. This began a series of moves
                    that would become a recurring theme in my life. The hardest moment came in 2018 when I lost my
                    father, which made me retreat into myself and find comfort in computers and technology.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    I started teaching myself programming around 2021, first just dabbling in Python before exploring
                    different areas of tech. While I'm not some coding prodigy, I've come to genuinely enjoy working on
                    projects, even if progress sometimes feels slow.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    The full-scale war in 2022 forced another relocation, this time closer to the capital.
                    I am now 18 and studying abroad while all my family is far away from me.
                    I like to play video games, program different things, read, play guitar,
                    ride my bike and just walk around thinking about life.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                    My biggest dreams are to become a famous YouTuber,
                    create my own popular indie game (I even used to make <a
                    className='text-blue-400 underline hover:text-blue-300 transition-colors'
                    href='https://ukraineee.itch.io/'>some</a>), and retire my parents.
                </p>

            </div>
            <LinksTable/>
        </div>

    );
}
