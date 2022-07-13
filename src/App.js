import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/resetCSS.js';
import Home from "./Pages/Home.js";
import React from 'react'

export default function App (){
	return (
		<BrowserRouter>
			<ResetCSS/>
			<Routes>
				<Route path="/" element={<Home />}/>
			</Routes> 
		</BrowserRouter>
	);
};