import { FormEvent, useEffect, useState } from "react";
import BONav from "../../common/navbar";
import initSync, { expr, GrandEx } from "../../grand/grand";

function GRandWebsite() {
    const [resultOk, setResultOk] = useState(true);
    const [result, setResult] = useState("Enter an expression, the result will be here");
    const [wasmReady, setWasmReady] = useState(false);
    const [expression, setExpression] = useState("");

    const [compiledGrandEx, setCompiledGrandEx] = useState<GrandEx | null>(null);
    const [compiledStringEx, setCompiledStringEx] = useState("");

    useEffect(()=>{
        initSync()
            .then(()=>{
                setWasmReady(true);
            })
            .catch((_)=>{
                setResult("Couldn't load Grand");
                setResultOk(false);
            })
    });

    function generate(event: FormEvent) {
        event.preventDefault();
        // If we're still waiting for WASM we show an error message and return
        if (!wasmReady) {
            setResult("Grand is not loaded");
            setResultOk(false);
            return;
        }

        // Show result
        let gex: GrandEx;
        if (expression != compiledStringEx) {
            try {
                gex = expr(expression.toString());

                // Free previous GrandExpr
                if (compiledGrandEx) {
                    compiledGrandEx.free()
                }
                // Set new GrandExpr
                setCompiledGrandEx(gex);
                setCompiledStringEx(expression);
            } catch (_) {
                setResult("Compilation error from Gex. Error reporting is still a work in progress");
                setResultOk(false);
                return;
            }
        } else if (compiledGrandEx) {
            gex = compiledGrandEx;
        } else {
            setResult("Logically impossible error. Enjoy this goofy ahh message!");
            setResultOk(false);
            return;
        }

        try {
            let res = gex.eval();
            setResult(res.toString());
            setResultOk(true);
        } catch (_) {
            setResult("Runtime error from Gex Error reporting is still a work in progress");
            setResultOk(false);
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
                        <form onSubmit={generate}>
                            <div className="flex flex-row gap-2">
                                <input type="text" value={expression} onChange={(e)=>{setExpression(e.target.value)}} className="p-2 bg-violet-300 font-mono text-fuchsia-950 rounded-xl grow" />
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