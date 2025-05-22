import BONav from "../../common/navbar";

import Logo from "../../assets/img/logos/orofilesystem.svg";
import { Link } from "react-router";

function OroFilesystem() {
    return (
        <div className="bg-gradient-to-bl from-red-950 via-black to-yellow-500/30 min-h-lvh">
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <div className="flex gap-4 justify-center h-20 md:h-30 items-center mb-8">
                    <img src={Logo} alt="The Black Engine Logo" className="h-full" />
                </div>

                <p className="p-4 border rounded-2xl border-amber-200 bg-red-500/10 my-4">
                    Read-Only filesystem types for <Link to={"../obstruction"} className="text-yellow-200">Obstruction</Link>.
                </p>
            </main>
        </div>
    );
}

export default OroFilesystem