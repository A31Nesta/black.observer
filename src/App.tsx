import BONav from "./common/navbar"
import Negen1Screenshot from './assets/img/screenshots/NEScreenshot.png';
import CHellScreenshot from './assets/img/screenshots/CHell.png';
import { Link } from "react-router";

function App() {
    return (
        <div className="bg-gradient-to-br from-gray-950 to-fuchsia-950/50 h-lvh">
            <BONav></BONav>
            <main className="m-auto max-w-5xl p-4 pt-5">
                <h2 className="text-center text-4xl text-fuchsia-50 mb-4 font-mono">Graphics</h2>
                <p className="text-center text-violet-300 mb-5">
                    Over the years I've been learning to write decent libraries and some concepts of graphics programming.
                    These are the past and current projects that I've been making to learn graphics:
                </p>
                
                <div className="flex gap-4">
                    {/* Nesta Engines... */}
                    <Link to="/libraries" className="basis-1/2">
                        <div className="border border-green-200/50 p-4 rounded-2xl h-110 flex flex-col
                            transition hover:shadow-2xl hover:shadow-green-200/50 hover:scale-101
                        ">
                            <h3 className="text-3xl text-amber-100">Libraries</h3>
                            <p className="text-green-200 my-5">
                                Experimental game engines built to practice programming concepts and learn graphics.
                                <br />
                                Other libraries are often modules for these engines.
                            </p>
                            <div className="overflow-hidden">
                                <img src={Negen1Screenshot} alt="screenshot of a game made with negen1 (Nesta Engine)" className="rounded-xl w-full mr-auto" />
                            </div>
                        </div>
                    </Link>
                    {/* Cursor Hell, OptiDice */}
                    <Link to="/programs" className="basis-1/2">
                        <div className="border border-red-300/50 p-4 rounded-2xl h-110 flex flex-col
                            transition hover:shadow-2xl hover:shadow-red-200/50 hover:scale-101
                        ">
                            <h3 className="text-right text-3xl text-orange-200">Programs</h3>
                            <p className="text-right text-red-200 my-5">
                                Games or other programs that use graphics would be Cursor Hell, a bullet hell
                                game made with OpenGL, and OptiDice, a 3D dice app for WearOS.
                            </p>
                            <div className="overflow-hidden">
                                <img src={CHellScreenshot} alt="screenshot of a game made with negen1 (Nesta Engine)" className="rounded-xl w-full ml-auto" />
                            </div>
                        </div>
                    </Link>
                </div>

                <h2 className="text-center text-4xl text-fuchsia-50 mt-10 mb-4">Unk<span className="font-mono text-fuchsia-200">now</span>n</h2>
                <p className="text-center text-violet-300 mb-5">
                    Made or will be made by someone for a reason
                </p>
            </main>
        </div>
    )
}

export default App
