import Pfp from "../../assets/img/pfp.png"

function A31Pres(props: {className?: string}) {
    return (
        <div className={props.className??""}>
            <div className="flex flex-row items-center gap-5 border p-4 rounded-2xl border-fuchsia-200">
                <div className="basis-1/3">
                    <img src={Pfp} alt="A31Nesta's Profile Picture" className="rounded-full h-auto" />
                </div>
                <div>
                    <h2 className="text-2xl text-fuchsia-100">A31Nesta</h2>
                    <p>
                        Web developer and hobbyist graphics programmer.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default A31Pres