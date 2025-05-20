import BONav from "../../common/navbar";
import Logo from '../../assets/img/logos/negen1.png';
import Negen1sc1 from '../../assets/img/screenshots/negen1sc1.png';
import OSGImage from '../../assets/img/screenshots/NEScreenshot.png'
import BOTextEd from "../components/BOTextEd";
import { Link } from "react-router";

function Negen1() {
    return (
        <div className="bg-amber-950/50 min-h-lvh">
            <BONav />
            <main className="m-auto max-w-7xl p-4 pt-5 pb-20">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <h2 className="font-marcellus text-2xl md:text-3xl">Nesta Engine</h2>
                    <img src={Logo} alt="The Nesta Engine Logo" className="h-full" />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="basis-1/2">
                        <p className="text-amber-100 text-justify">
                            In 2020, after learning to use tools like Unity and some C++ with SFML, I became interested
                            in graphics APIs like Vulkan and OpenGL. Wanting to learn more about graphics and make some games,
                            I started using OpenGL to develop a simple engine.
                        </p>
                        <p className="text-amber-100 text-justify">
                            This engine used the following libraries:
                        </p>
                        <ul className="text-amber-100 list-disc ml-5">
                            <li>GLFW</li>
                            <li>GLAD</li>
                            <li>GLM</li>
                            <li>Entt</li>
                            <li>Bullet 3</li>
                            <li>ImGUI</li>
                            <li>Assimp</li>
                        </ul>
                    </div>
                    <img src={Negen1sc1} alt="Negen1 screenshot" className="md:w-1/2 h-full rounded-2xl" />
                </div>

                <h2 className="font-marcellus my-8 text-center text-2xl md:text-3xl">Is it usable?</h2>
                <BOTextEd title="yapping.md">
                    <p className="my-2">
                        To put it simply, not really.
                    </p>
                    <p className="my-2">
                        So, this engine was my first experience with graphics and with big projects. Even
                        though it was not really well designed, it's still my best engine (graphically) to date.
                    </p>
                    <p className="my-2">
                        This engine used PBR and supported Image Based Lighting but didn't support shadow mapping.
                        It was also forward rendered, making multiple lights expensive for my old computer. Even
                        if multiple lights was expensive, more complex lighting models (like PBR instead of Phong)
                        did not make a difference in performance at all, which was surprising for me at the time.
                    </p>
                    <h3 className="text-xl my-4">Made with Nesta Engine</h3>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="basis-1/2">
                            <p className="my-2">
                                So... did this engine get games? The answer would be yes! ...n't.
                                <br />
                                It got demos that never got published. Of course, I started creating the engine because I
                                wanted to make a game (<span className="font-serif text-lg">unk<span className="font-mono text-amber-100 text-md">now</span>n</span>), but
                                I also made other games, like <span className="font-bold">Online Sign Game</span>.
                            </p>
                            <p className="my-2">
                                Online Sign Game was an online game about placing signs. You could write signs and read signs
                                over a small map. You were also able to see other players (who had the appearance of a small
                                wooden dummy figure similar to a pawn from chess) and read their signs, but you weren't
                                able to communicate with a chat. To make this I needed my engine to have support for Online 
                                connectivity, as well as physics and decent 3D graphics. Despite this, things like skeletal
                                animation never got implemented.
                            </p>
                        </div>
                        <img src={OSGImage} alt="Online Sign Game Screenshot" className="rounded-xl h-auto mt-auto md:w-1/2" />
                    </div>
                    <h3 className="text-xl my-4">Then why did you abandon the project?</h3>
                    <p className="my-2">
                        Ever heard of <a href="https://en.wikipedia.org/wiki/Spaghettification" target="_blank" className="text-amber-200">
                        what happens when you enter a black hole</a>? The code was completely unmaintainable. The
                        asset pipeline was not too complex but it was strange and non-standard. The game development
                        process was slow and the compilation times were even slower (Game code was compiled alongside the
                        engine and was made entirely inside header files. Changing a single line of game code meant recompiling
                        the whole game). While this was technically fixable, I wanted to create another engine in order to
                        focus more on other systems from the beginning.
                    </p>
                    <h3 className="text-xl my-4">That's where Black Observer Engine comes in</h3>
                    <Link to="/libraries/negen2" className="text-center block p-4 border border-amber-200 rounded-xl
                        hover:border-amber-400 hover:text-amber-200
                    ">
                        Black Observer Engine
                    </Link>
                </BOTextEd>
            </main>
        </div>
    );
}

export default Negen1;