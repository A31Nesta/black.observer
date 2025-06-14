import BONav from "../common/navbar";
import BOListElement from "./components/BOListElement";
import Negen4Screenshot from '../assets/img/screenshots/OScreenshot.png';

function Bos() {
    return (
        <>
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <h1 className="text-2xl md:text-3xl text-center font-marcellus mb-5">Project Generator</h1>

                <p className="p-4 border rounded-2xl border-amber-100">
                    The [Unknown for Now] project and every part of it.
                </p>

                <p className="p-4 border rounded-2xl border-red-300 bg-red-400/10 my-4">
                    Everything here can change at any moment; everything in this page is 
                    in early development, so consider all of this to be documentation or news.
                </p>

                <BOListElement link="obstruction" title="Obstruction" img={Negen4Screenshot}>
                    Moddable, simple and fast game engine inspired by older
                    engines like Source and modern aesthetics.
                    <br />
                    Designed for older hardware, made for a reason.
                </BOListElement>

                <BOListElement link="penumbra" title="Penumbra" img={Negen4Screenshot}>
                    Obstruction's renderer.
                </BOListElement>

                <BOListElement link="selui" title="SelUI" img={Negen4Screenshot}>
                    Simple Layout and UI. A basic UI composed of a base UI system,
                    Simple UI (SUI) and an optional layout system, Simple Layout (SEL).
                    <br />
                    <pre>/[Ss]e[lr]/ UI</pre>
                </BOListElement>

                <BOListElement link="oro-fs" title="ORO Filesystem" img={Negen4Screenshot}>
                    Obstruction Read-Only Filesystem. A simple API for reading data
                    from Obstruction Asset Packages or the Filesystem seamlessly.
                    <br />
                    Designed to make developing and modding Obstruction games easy.
                </BOListElement>

                <BOListElement link="gamut" title="Gamut" img={Negen4Screenshot}>
                    Game Mutability: modding framework using ORO Filesystem to provide
                    plug-and-play first-class modding support.
                </BOListElement>
            </main>
        </>
    );
}

export default Bos