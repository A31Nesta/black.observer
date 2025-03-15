import BONav from "../../common/navbar";
import Logo from "../../assets/img/logos/occlusion.svg"
import BOTextEd from "../components/BOTextEd";
import { Link } from "react-router";

function Negen3() {
    return (
        <div className="bg-gradient-to-bl from-zinc-950 to-purple-950 min-h-lvh">
            <BONav />
            <main className="m-auto max-w-7xl p-4 pb-20">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <img src={Logo} alt="The Black Engine Logo" className="h-full" />
                </div>

                <div className="flex gap-4">
                    <div className="border border-green-300 rounded-2xl p-4">
                        <h2 className="text-2xl mb-4">Truly Modular</h2>
                        <p>
                            The engine itself is small and just ties all systems together.
                            <br />
                            The systems (completed at the time) were:
                        </p>
                        <ul className="mt-4 list-disc ml-5">
                            <li>Penumbra: The 2D and 3D renderer</li>
                            <li>ECLang: Compilable JSON-like scene definition language</li>
                        </ul>
                    </div>

                    <div className="border border-red-400 rounded-2xl p-4">
                        <h2 className="text-2xl mb-4">Scriptable</h2>
                        <p>
                            Dynamically linked C++ Shared Objects were used for scripting.
                            <br />
                            This also made scripts hot-reloadable during development.
                        </p>
                    </div>

                    <div className="border border-blue-400 rounded-2xl p-4">
                        <h2 className="text-2xl mb-4">OOP-based</h2>
                        <p>
                            Enough for simple games, scalable with Scripts.
                        </p>
                    </div>
                </div>

                <h2 className="font-marcellus my-8 text-left text-2xl md:text-3xl">What did I learn?</h2>

                <BOTextEd title="yapping.md" className="mr-auto max-w-4xl">
                    <p className="my-2">
                        Not much. This time I believe I was moving in the right direction.
                        <br />
                        I do believe that using OOP was not the best idea and I should have stuck with ECS,
                        though it was not a bad system either.
                    </p>
                    <p className="my-2">
                        While I was developing this engine, I started having issues with making my engine compilable
                        in other computers and operating systems. This is where the issues began.
                        <br />
                        I moved from CMake to Meson because I couldn't really learn CMake (this is just skill issue).
                        This allowed me to easily get all libraries from their repositories and just build... until I
                        had to build WGPU-Native.
                    </p>
                    <p className="my-2">
                        While I originally used BGFX, I really didn't enjoy using it, so I implemented WebGPU in my renderer.
                        <br />
                        The problem? While they do have their own pre-built executables, I wanted to automate the building
                        process, so I wanted to build it myself. Building it made my renderer crash at some point.
                        <br />
                        Using the prebuilt "release" library also crashed. After days of investigating I assumed that there was
                        a problem with the library itself (which may or may not be true, it's probably my fault but I double
                        and triple-checked everything and couldn't find any issues).
                    </p>
                    <h3 className="text-xl my-4">Move to Dawn?</h3>
                    <p className="my-2">
                        Yeeeahh, I could do that... but then I would have to move from Meson back to CMake and actually
                        fix my CMakeLists.txt...
                        <br />
                        If you think about it it was the best option, but seeing how most of the Native WebGPU community
                        was on Rust I also wanted to check it out, especially after seeing that the build system and package
                        management was better.
                    </p>
                    <h3 className="text-xl my-4">Back to the present day</h3>
                    <Link to="/reclibs/obstruction" className="text-center block p-4 border border-gray-400 text-gray-300 rounded-xl
                        hover:border-white hover:text-white
                    ">
                        Obstruction
                    </Link>
                </BOTextEd>

            </main>
        </div>
    );
}

export default Negen3