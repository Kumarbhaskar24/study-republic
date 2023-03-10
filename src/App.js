import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import LoginForm from './pages';
import SignInForm from './pages/signin';
import SignUpForm from './pages/signup';


function App() {
return (
	<Router>

		<Navbar/>
		
	<Routes>
		<Route exact path='/home' element={<Home/>} />
		<Route path='/about' element={<About/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/annual' element={<AnnualReport/>} />
		<Route path='/team' element={<Teams/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/index' element={<LoginForm/>} />
		<Route path='/signin' element={<SignInForm/>} />
		<Route path='/signup' element={<SignUpForm/>} />
	</Routes>
	
	</Router>
);
}

export default App;
