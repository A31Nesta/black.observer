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
                <h2 className="text-center text-4xl text-fuchsia-50 mb-5 font-mono">Game Engines</h2>

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
                    <br className="block mt-4" style={{content: "close-quote"}} />
                    Wanting to fully move to WebGPU, I opted to develop the renderer with Rust instead, which also prompted
                    me to simply rewrite the engine in Rust to simplify cross-compilation and dependency management.
                </BOListElement>

                <BOListElement link="/libraries/negen4" title="Obstruction" img={Negen4Screenshot}>
                    Obstruction (negen4) is my current engine project. It makes use of several smaller libraries to make
                    the engine as modular and simple as possible.
                    <br className="block mt-4" style={{content: "close-quote"}} />
                    While raw performance in low-end hardware is still a priority, this engine is also being made with
                    compatibility with web environments in mind, which is why I moved to WebGPU and Rust in the first place.
                </BOListElement>
            </main>
        </>
    );
}

export default BOLibraries;