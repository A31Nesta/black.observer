import BONav from "./common/navbar"
import Negen1Screenshot from './assets/img/screenshots/NEScreenshot.png';
import CHellScreenshot from './assets/img/screenshots/CHell.png';
import UnknownForNow from './assets/img/logos/unknown_w.svg'
import { Link } from "react-router";

function App() {
    return (
        <div className="bg-gradient-to-br from-gray-950 to-fuchsia-950/50 min-h-lvh">
            <BONav></BONav>
            <main className="m-auto max-w-5xl p-4 pt-5">
            <h2 className="text-center text-4xl text-fuchsia-50 mt-8 mb-4 font-mono">The Black Observer</h2>
                <p className="text-center text-violet-300 mb-5">
                    Welcome to The Black Observer! This messy and poorly designed website is
                    where I show off any project worth showing off.
                </p>
                <h2 className="text-center text-4xl text-fuchsia-50 mt-15 mb-4 font-mono">Projects</h2>
                
                <div className="flex gap-4 flex-col md:flex-row">
                    {/* Nesta Engines... */}
                    <Link to="/libraries" className="basis-1/2">
                        <div className="border border-green-200/50 p-4 rounded-2xl h-full flex flex-col justify-between
                            transition hover:shadow-2xl hover:shadow-green-200/50 hover:scale-101
                        ">
                            <div>
                                <h3 className="text-3xl text-amber-100">Libraries</h3>
                                <p className="text-green-200 my-5">
                                    Experimental game engines and other (mostly useless) more-or-less-interesting libraries.
                                    <br />
                                    Other libraries are often modules for these engines.
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <img src={Negen1Screenshot} alt="screenshot of a game made with negen1 (Nesta Engine)" className="rounded-xl w-full mr-auto" />
                            </div>
                        </div>
                    </Link>
                    {/* Cursor Hell, OptiDice */}
                    <Link to="/programs" className="basis-1/2">
                        <div className="border border-red-300/50 p-4 rounded-2xl h-full flex flex-col justify-between
                            transition hover:shadow-2xl hover:shadow-red-200/50 hover:scale-101
                        ">
                            <div>
                                <h3 className="text-right text-3xl text-orange-200">Programs</h3>
                                <p className="text-right text-red-200 my-5">
                                    Programs, websites or games like Cursor Hell, a bullet hell
                                    game made with OpenGL, or OptiDice, a 3D dice app for WearOS.
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <img src={CHellScreenshot} alt="screenshot of Cursor Hell" className="rounded-xl w-full ml-auto" />
                            </div>
                        </div>
                    </Link>
                </div>

                <img src={UnknownForNow} alt="unk[now]n" className="h-14 m-auto mt-15 mb-4" />
                <p className="text-center text-violet-300 mb-5">
                    Made or will be made by someone for a reason
                </p>
            </main>
        </div>
    )
}

export default App
