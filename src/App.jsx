import { Canvas } from "@react-three/fiber";
import "./App.css";
// import Experience from "./components/Experience";
// import Experience2 from "./components/Experience2";
import Experience3 from "./components/Experience3";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <color attach="background" args={["#000000"]} />
        {/* <Experience /> */}
        {/* <Experience2 /> */}
        <Experience3 />
      </Canvas>
    </div>
  );
}

export default App;
