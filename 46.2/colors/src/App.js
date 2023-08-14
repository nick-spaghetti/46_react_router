// import logo from "./logo.svg";
import "./App.css";
import ColorRoutes from "./props/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ColorRoutes />
			</BrowserRouter>
		</div>
	);
}

export default App;
