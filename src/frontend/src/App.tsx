import AppRoutes from "./routes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className="w-auto h-auto">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
