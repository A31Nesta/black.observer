import { FormEvent, useEffect, useState } from "react";
import BONav from "../../common/navbar";
import initSync, { compile, GrandEx } from "../../grand/grand";

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

    function setExpressionAndScroll(expr: string) {
        setExpression(expr);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

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
                gex = compile(expression.toString());

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
            let res = gex.generate();
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
                <h1 className="text-2xl md:text-3xl text-center font-marcellus mb-5">Glorified <span className="font-mono">rand();</span></h1>

                <p className="p-4 border rounded-2xl border-blue-300 bg-violet-400/10 my-4">
                    JIT-compiled regex-like language for constraint-based random number generation.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="p-4 border border-fuchsia-300 rounded-2xl md:w-full">
                        <h2 className="text-xl mb-4">Expression</h2>
                        <form onSubmit={generate}>
                            <div className="flex flex-row gap-2">
                                <input type="text" value={expression} onChange={(e)=>{setExpression(e.target.value)}} className="p-2 bg-violet-300 font-mono text-fuchsia-950 rounded-xl grow" />
                                <button type="submit" className="p-2 bg-violet-900 rounded-xl hover:cursor-pointer">Run</button>
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

                <h2 className="text-2xl mt-16 mb-4 text-fuchsia-200">/ The Language</h2>
                <p>
                    The language is designed to be intuitive and easy to learn;
                    here is everything you need to know:
                </p>
                <h3 className="text-xl my-4 text-violet-200">// Ranges</h3>
                <p className="mb-2 max-w-2/3">
                    Ranges are the core of Grand; they generate a number between two numbers.
                </p>
                <p className="mb-2 max-w-2/3">
                    Ranges can be open, closed or mixed. The following buttons are example
                    expressions for each type of range labeled with what they do.
                </p>
                <p className="max-w-2/3">
                    <span className="font-bold">Ignore the pipe (|) and everything
                    after it for now.</span> Just know that it forces the generated numbers to be integers.
                </p>
                {/* BUTTONS */}
                <div className="mt-4 flex flex-col md:flex-row gap-4 flex-wrap">
                    <button onClick={() => setExpressionAndScroll("0..10|*1")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Between 0 inclusive and 10 inclusive
                    </button>
                    <button onClick={() => setExpressionAndScroll("0,,10|*1")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Between 0 and 10, never reaching 0 or 10
                    </button>
                    <button onClick={() => setExpressionAndScroll("0,.10|*1")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Between 0 and 10 inclusive, never reaching 0
                    </button>
                    <button onClick={() => setExpressionAndScroll("0.,10|*1")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Between 0 inclusive and 10, never reaching 10
                    </button>
                </div>
                <p className="mt-4 mb-2 max-w-2/3">
                    You can input negative numbers and decimals.
                    <br />
                    As a matter of fact, you can leave one or both sides of the range empty to indicate
                    that you want any number:
                </p>
                <div className="mt-4 flex flex-col md:flex-row gap-4 flex-wrap">
                    <button onClick={() => setExpressionAndScroll("-10.5.,0|*0.5")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        From -10.5 to (but never reaching) 0
                    </button>
                    <button onClick={() => setExpressionAndScroll("0..")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Any positive number
                    </button>
                    <button onClick={() => setExpressionAndScroll("..0")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Any negative number
                    </button>
                    <button onClick={() => setExpressionAndScroll("..")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Any number
                    </button>
                </div>
                <h4 className="text-lg my-4 text-violet-300">/// Constraints</h4>
                <p className="mb-2 max-w-2/3">
                    In the previous examples there was a pipe (|). That indicates a constraint.
                    <br />
                    Right now there is only one type of constraint: <span className="font-bold">Is Multiple Of</span>.
                </p>
                <p className="mb-2 max-w-2/3">
                    This constraint is indicated with an asterisk (*) and can also be negated (!*).
                </p>
                <p className="mb-2 max-w-2/3">
                    After the constraint, you enter a list of numbers. The generated number will be a multiple of all
                    the specified numbers. If the constraint is negated, the generated number will not be a multiple
                    of any of the specified numbers.
                </p>
                <div className="mt-4 flex flex-col md:flex-row gap-4 flex-wrap">
                    <button onClick={() => setExpressionAndScroll("0..10|*2")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Multiple of 2 (even) from 0 to 10
                    </button>
                    <button onClick={() => setExpressionAndScroll("0..10|*1|!*2")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Not multiple of 2 (odd) from 0 to 10
                    </button>
                    <button onClick={() => setExpressionAndScroll("0..100|*0.5|!*1")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        From 0 to 100, ending in .5 and not .0
                    </button>
                    <button onClick={() => setExpressionAndScroll("0..10000|*2,3,5|!*7,11")} className="p-2 border border-fuchsia-300/50 text-violet-50 basis-1/3 grow rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                        Multiple of 2, 3 and 5, but not 7 or 11.
                    </button>
                </div>
                <h3 className="text-xl my-4 text-violet-200">// Selections</h3>
                <p className="mb-2 max-w-2/3">
                    This one is the easy one, between brackets, enter a comma separated list of numbers.
                    One of them will be randomly selected
                </p>
                <button onClick={() => setExpressionAndScroll("[1,2,3,5,7,11]")} className="p-2 mb-16 border border-fuchsia-300/50 text-violet-50 w-full rounded-lg hover:bg-fuchsia-950/25 hover:cursor-pointer">
                    Select from primes from 1 to 11
                </button>
            </main>
        </>
    );
}

export default GRandWebsite