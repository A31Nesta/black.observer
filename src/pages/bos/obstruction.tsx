import BONav from "../../common/navbar";
import Logo from "../../assets/img/logos/obstruction-w.svg";

function Obstruction() {
    return (
        <div className="bg-gradient-to-bl from-red-950 via-emerald-950 to-purple-950 min-h-lvh">
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <img src={Logo} alt="The Black Engine Logo" className="h-full" />
                </div>

                <p className="p-4 border rounded-2xl border-purple-300 bg-purple-950/50 my-4">
                    Extremely moddable game engine for low-end hardware.
                </p>
            </main>
        </div>
    );
}

export default Obstruction