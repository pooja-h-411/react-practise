import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const reactElement = <h1>Hello There!!!</h1>;
createRoot(document.getElementById("root")).render(reactElement);
