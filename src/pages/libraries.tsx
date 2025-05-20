import BONav from "../common/navbar";
import BOListElement from "./components/BOListElement";

import UnknownForNow from '../assets/img/logos/unknown_w.svg'

import Negen1Screenshot from '../assets/img/screenshots/NEScreenshot.png';
import Negen2Screenshot from '../assets/img/screenshots/BOScreenshot.png';
import Negen3Screenshot from '../assets/img/screenshots/PnmbrScreenshot.png';
import Negen4Screenshot from '../assets/img/screenshots/OScreenshot.png';

import MGScreenshot from '../assets/img/screenshots/mg-background.png';

function BOLibraries() {
    return (
        <>
            <BONav></BONav>
            <main className="m-auto max-w-5xl p-4 pt-5">
                <h2 className="text-center text-4xl text-fuchsia-50 mb-5 font-mono">Main Projects</h2>

                <BOListElement link="/bos" title="Project Generator" img={Negen4Screenshot}>
                    conputer prorgams.
                    <img src={UnknownForNow} alt="unk[now]n" className="h-10 mt-4" />
                </BOListElement>

                <h2 className="text-center text-4xl text-fuchsia-50 mt-10 mb-5 font-mono">Languages</h2>

                <BOListElement link="/libraries/grand" title="GRand" img={MGScreenshot}>
                    An expression language for creating constraint-based random number generators.
                    <br className="block mt-4" style={{content: "close-quote"}} />
                    Image somewhat related.
                </BOListElement>

                <h2 className="text-center text-4xl text-fuchsia-50 mt-10 mb-5 font-mono">Previous Engines</h2>

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

                <BOListElement link="/libraries/negen3" title="EcLibs" img={Negen3Screenshot}>
                    Occlusion (negen3), a truly modular library using C++ for scripting via Dynamic Libraries and
                    Penumbra, a custom renderer that supported BGFX and WebGPU.
                </BOListElement>
            </main>
        </>
    );
}

export default BOLibraries;