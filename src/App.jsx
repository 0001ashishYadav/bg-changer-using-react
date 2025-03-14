import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <div className="h-screen w-full " style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-3 px-4 py-2 shadow-lg bg-[#ffffffa1] rounded-3xl md:rounded-full">
          <button
            onClick={() => setColor("red")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "red",
            }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "yellow",
            }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "green",
            }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "blue",
            }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "orange",
            }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("skyblue")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "skyblue",
            }}
          >
            Skyblue
          </button>

          <button
            onClick={() => setColor("olive")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "olive",
            }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("aqua")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "aqua",
            }}
          >
            Aqua
          </button>

          <button
            onClick={() => setColor("gray")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "gray",
            }}
          >
            Gray
          </button>

          <button
            onClick={() => setColor("teal")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "teal",
            }}
          >
            Teal
          </button>

          <button
            onClick={() => setColor("magenta")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "magenta",
            }}
          >
            Magenta
          </button>

          <button
            onClick={() => setColor("maroon")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "maroon",
            }}
          >
            Maroon
          </button>

          <button
            onClick={() => setColor("violet")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "violet",
            }}
          >
            Violet
          </button>

          <button
            onClick={() => setColor("indigo")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "indigo",
            }}
          >
            Indigo
          </button>

          <button
            onClick={() => setColor("lime")}
            className="px-5 py-2 rounded-full outline shadow-2xl text-white"
            style={{
              backgroundColor: "lime",
            }}
          >
            Lime
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default App;
