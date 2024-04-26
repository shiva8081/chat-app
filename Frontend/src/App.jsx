import "./App.css";
import {Login} from "./pages/Login.jsx";

function App() {
    return (
        <div>
            {/*<div className="relative h-full w-full bg-slate-950">*/}
            {/*    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>*/}
            {/*    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>*/}
            {/*</div>*/}



            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>



            {/*<div className="relative h-full w-full bg-neutral-900">*/}
            {/*    <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>*/}
            {/*</div>*/}

            <Login/>
        </div>
    );
}

export default App;
