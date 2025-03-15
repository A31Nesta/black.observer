import BONav from "../common/navbar";
import BOListElement from "./components/BOListElement";
import Negen4Screenshot from '../assets/img/screenshots/OScreenshot.png';

function Reclibs() {
    return (
        <>
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <h1 className="text-2xl md:text-3xl text-center font-marcellus mb-5">REcLibs</h1>

                <p className="p-4 border rounded-2xl border-amber-100">
                    This project is a collection of libraries that are used in Obstruction,
                    my custom game engine.
                </p>

                <p className="p-4 border rounded-2xl border-red-300 bg-red-400/10 my-4">
                    Everything here can change at any moment; everything in this page is 
                    in early development, so consider all of this to be documentation or news.
                </p>

                <BOListElement link="obstruction" title="Obstruction" img={Negen4Screenshot}>
                    Modular, performant, cross-platform and moddable game engine for [Unknown for now].
                </BOListElement>
            </main>
        </>
    );
}

export default Reclibs