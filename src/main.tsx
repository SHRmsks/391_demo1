import { createRoot } from "react-dom/client"; // CSR
import "./index.css";
import App from "./App.tsx"; // component based

createRoot(document.getElementById("root")!).render(<App />);
// this root is the entry that is injected from your <App/>, we are also calling this as host Root (the real DOM element). But in the react, it will be abstracted as host fiber root node!
