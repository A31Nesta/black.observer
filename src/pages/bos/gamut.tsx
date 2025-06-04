import BONav from "../../common/navbar";
import Logo from "../../assets/img/logos/gamut-full.png";
import { Link } from "react-router";

function Gamut() {
    return (
        <div className="bg-gradient-to-bl from-blue-950 via-black to-lime-500/30 min-h-lvh">
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <img src={Logo} alt="The Black Engine Logo" className="h-full" />
                </div>

                <p className="p-4 border rounded-2xl border-red-200 bg-red-500/10 my-4">
                    Modding framework using <Link to={"../oro-fs"} className="text-violet-200">ORO Filesystem</Link>.
                </p>
            </main>
        </div>
    );
}

export default Gamut