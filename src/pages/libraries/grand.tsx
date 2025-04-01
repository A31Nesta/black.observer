import { useState } from "react";
import BONav from "../../common/navbar";

function GRandWebsite() {
    const [resultOk, setResultOk] = useState(true);
    const [result, setResult] = useState("Enter an expression, the result will be here");

    function generate(formData: FormData) {
        const expression = formData.get("expression");
        if (expression) {
            setResult(expression.toString());
            setResultOk(!resultOk);
        }
    }

    return (
        <>
            <BONav />
            <main className="max-w-5xl m-auto p-4 pt-5">
                <h1 className="text-2xl md:text-3xl text-center font-marcellus mb-5">Glorified Rand</h1>

                <p className="p-4 border rounded-2xl border-blue-300 bg-violet-400/10 my-4">
                    Constraint-based JIT-compiled regex-like language for random number generation.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="p-4 border border-fuchsia-300 rounded-2xl md:w-full">
                        <h2 className="text-xl mb-4">Expression</h2>
                        <form action={generate}>
                            <div className="flex flex-row gap-2">
                                <input type="text" name="expression" className="p-2 bg-violet-300 font-mono text-fuchsia-950 rounded-xl grow" />
                                <button type="submit" className="p-2 bg-violet-900 rounded-xl">Run</button>
                            </div>
                        </form>
                    </div>
                    <div className="p-4 border border-fuchsia-300 rounded-2xl md:w-full">
                        <h2 className="text-xl mb-4">Result</h2>
                        <div className={"p-4 border rounded-xl text-center " + (
                            resultOk ?
                            "border-green-200 bg-green-400/10 text-emerald-50" :
                            "border-red-200 bg-red-400/10 text-orange-100"
                        )}>
                            {result}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default GRandWebsite