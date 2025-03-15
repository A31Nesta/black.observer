import BONav from "../common/navbar";
import BOListElement from "./components/BOListElement";

import Negen1Screenshot from '../assets/img/screenshots/NEScreenshot.png';
import Negen2Screenshot from '../assets/img/screenshots/BOScreenshot.png';
import Negen3Screenshot from '../assets/img/screenshots/PnmbrScreenshot.png';
import Negen4Screenshot from '../assets/img/screenshots/OScreenshot.png';

function BOLibraries() {
    return (
        <>
            <BONav></BONav>
            <main className="m-auto max-w-5xl p-4 pt-5">
                <h2 className="text-center text-4xl text-fuchsia-50 mb-5 font-mono">REcLibs</h2>

                <BOListElement link="/reclibs" title="REcLibs" img={Negen4Screenshot}>
                A collection of libraries created for my main game engine project (Obstruction)
                but usable in other contexts.
                </BOListElement>

                <h2 className="text-center text-2xl text-fuchsia-50 mt-10 mb-5 font-mono">How did we get here?</h2>

                <BOListElement link="/libraries/negen1" title="Nesta Engine" img={Negen1Screenshot}>
                    Nesta Engine (negen1) is the first engine I've ever made. It was a cross-platform engine made
                    with OpenGL in 2020 designed to work well in low-end computers.
                    <br className="block mt-4" style={{content: "close-quote"}} />
                    In this engine I focused too much on the graphics and physics so it became unmaintainable
                    rather quickly.
                </BOListElement>

                <BOListElement link="/libraries/negen2" title="Black Observer Engine" img={Negen2Screenshot}>
                    Black Observer Engine (negen2) was my second engine. It was a lot more modular and also targeted
                    low-end computers running Windows or Linux. Like its predecesor it was made with C++ and OpenGL.
                    <br className="block mt-4" style={{content: "close-quote"}} />
                    Instead of focusing on the graphics, I focused on modularity and the ability to configure everything.
                </BOListElement>

                <BOListElement link="/libraries/negen3" title="Occlusion" img={Negen3Screenshot}>
                    Occlusion (negen3) is the most modular engine, it used C++ for scripting via Dynamic Libraries and
                    used a custom renderer that supported BGFX and WebGPU.
                </BOListElement>
            </main>
        </>
    );
}

export default BOLibraries;