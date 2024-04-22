import "./App.css"
import Header from "./Header"
import Home from "./Home"
import Projects from "./Projects"
import Skills from "./Skills"
import Courses from "./Courses"
import Contact from "./Contact"

export default function App() {
	return (
		<div className="webpageContainer">
			<Header/>
			<Home/>
			<Projects/>
			<Skills/>
			<Courses/>
			<Contact/>
		</div>
	)
}

