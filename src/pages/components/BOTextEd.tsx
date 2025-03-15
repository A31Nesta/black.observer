import { ReactNode } from "react";

type BOTEProps = {
    title: string,
    children: ReactNode,
    className?: string
};

function BOTextEd(props: BOTEProps) {
    return (
        <div className={`${props.className??'m-auto max-w-4xl'}`}>
            {/* File name (title) */}
            <div className="inline-block border border-b-0 border-gray-300/50 p-2 font-mono text-sm rounded-t-md z-10">
                {props.title}
            </div>
            {/* Contents */}
            <div className="border border-gray-300/50 p-4 rounded-md rounded-tl-none">
                {props.children}
            </div>
        </div>
    );
}

export default BOTextEd;