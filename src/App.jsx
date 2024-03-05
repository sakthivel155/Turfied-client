import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './Components/NavBar/Navbar'

import Home from './Pages/HomePage/Home';
import Signup from "./Pages/Authentication/Signup";
import Login from "./Pages/Authentication/Login";



function App() {

  return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				
			</Routes>
		</BrowserRouter>
  );
}

export default App
