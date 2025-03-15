import { ReactNode } from "react";
import { Link } from "react-router";

type BOLEProps = {
    link: string,
    img?: string
    title: string,
    children: ReactNode
}

function BOListElement(props: BOLEProps) {
    return (
        <Link to={props.link} className="block w-full my-4 p-4 border border-violet-300/50 rounded-2xl transition
            hover:border-violet-300 hover:bg-fuchsia-950/10 hover:scale-101 hover:shadow-2xl hover:shadow-fuchsia-300/50
        ">
            <h3 className="text-3xl mb-2 text-fuchsia-200">{props.title}</h3>
            <div className="flex justify-between gap-4 flex-col md:flex-row">
                <div>
                    {props.children}
                </div>
                {props.img &&
                    <img src={props.img} alt={props.title} className="rounded-xl w-100" />
                }
            </div>
        </Link>
    );
}

export default BOListElement;