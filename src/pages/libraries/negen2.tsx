import BONav from "../../common/navbar";
import Logo from '../../assets/img/logos/negen2.svg';
import BOTextEd from "../components/BOTextEd";
import { Link } from "react-router";

function Negen2() {
    return (
        <div className="bg-black min-h-lvh">
            <BONav />
            <main className="m-auto max-w-7xl p-4 pb-20">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <img src={Logo} alt="The Black Engine Logo" className="h-full" />
                    <h2 className="font-marcellus text-2xl md:text-3xl">Black Observer Engine</h2>
                </div>

                <p className="md:mr-auto md:w-1/2 p-4 border border-gray-300/50 rounded-2xl">
                    This engine was created because of the spaghetti monster I created with Nesta Engine
                    and ended up in the same way.
                    <br />
                    I separated the game code and the engine code this time and configuration (including key
                    bindings and controller mapping) was made really easy, but the way I structured the engine
                    made several systems dependent of each other, which made it unmaintainable in the end.
                </p>

                <h2 className="font-marcellus my-8 text-right text-2xl md:text-3xl">What did I learn?</h2>

                <BOTextEd title="yapping.md" className="ml-auto max-w-4xl">
                    <p className="my-2">
                        I learned that I should make the engine truly modular.
                        <br />
                        BlackOE had 2 "renderers", one for 3D and other for 2D. The 3D one was made first and was
                        the default. This default 3D renderer also created the window.
                        <br />
                        The 2D renderer was intended to be only for the UI, but ended up being complex enough to
                        be usable for small 2D games.
                        <br />
                        This doesn't sound so bad at first, but the big problem comes when you want to make a 2D game
                        with 0 3D. In this case you had to tell the scene file that you want to use the 2D renderer and
                        then in the UI "scene" file you defined your scene. You would also be using the 3D renderer in
                        the background, since it's the one that creates the scene.
                    </p>
                    <p className="my-2">
                        If this still doesn't sound too bad, there was another dependency between systems. The input
                        depended on the window (and renderer).
                        <br />
                        Basically, any modification to the window's code, any of the renderer's code or the input system
                        meant refactoring other systems to make them compatible. This became an issue pretty quickly, so
                        I took the L and moved on, this time with a better idea of how to structure the systems.
                    </p>
                    <h3 className="text-xl my-4">Occlusion, the truly modular engine</h3>
                    <Link to="/libraries/negen3" className="text-center block p-4 border border-gray-400 text-gray-300 rounded-xl
                        hover:border-white hover:text-white
                    ">
                        Occlusion
                    </Link>
                </BOTextEd>
            </main>
        </div>
    );
}

export default Negen2