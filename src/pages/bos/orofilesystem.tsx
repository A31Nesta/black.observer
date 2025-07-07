import BONav from "../../common/navbar";

import Logo from "../../assets/img/logos/orofilesystem.svg";
import { Link } from "react-router";
import BOTextEd from "../components/BOTextEd";

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

                <h2 className="font-marcellus mt-8 text-center text-2xl md:text-3xl">What is ORO Filesystem?</h2>

                <BOTextEd title="idea.md">
                    <pre className="whitespace-pre-line">
                        <span className="text-yellow-100"># ORO Filesystem</span>
                        {`
                            
                            Obstruction Read-Only Filesystem (ORO Filesystem) is a library that makes accessing
                            different types of filesystems very easy through a unified API.

                            The supported types of filesystem are:

                            - The native Filesystem
                            - Obstruction Asset Packages
                            - Web (HTTP) resources

                        `}
                        <span className="text-yellow-200">## What is an Obstruction Asset Package?</span>
                        {`
                            
                            Not Compression.
                            Obstruction Asset Packages are a simple way to store files inside one big file one after another.
                            To read files from the package, you need indices. The indices are stored in a JSON file (that is also used to map the web resources, by the way. This allows you to treat packaged files and web files as one single Virtual Filesystem).
                        `}
                    </pre>
                </BOTextEd>
            </main>
        </div>
    );
}

export default OroFilesystem