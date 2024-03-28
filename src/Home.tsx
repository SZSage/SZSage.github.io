import "./Home.css"

export default function Home() {
	return (
		<>
			<div className="homeContent">
				<p className="intro">Hello, my name is</p>
				<h1>Simon Zhao</h1>
				<h2>Software Developer</h2>
				<p>I'm a dedicated software developer specializing in <strong style={{ color: "#84AE84"}}>backend systems</strong>, <strong style={{ color: "#84AE84"}}>database management/processing</strong>, and <strong style={{ color: "#84AE84"}}>data science</strong>. My passion lies in building robust software solutions that efficiently process, analyze, and manage information. I believe data is the key to solving complex problems and I'm constantly learning and evolving to stay at the forefront of technological advancements. My goal is to contribute to a team that's making a real difference in the world with data-driven solutions.</p>
			</div>
			<div className="contactMe">
				<button type="button" className="contactMeButton">Contact Me</button>
			</div>
		</>
	);
}
