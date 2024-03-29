import "./Projects.css"

export default function Projects() {
	return (
		<section className="projectSection">
			<h2 className="projectsH2">Projects</h2>
			<div className="projectContainer">
				{/* Project 1 */}
				<div className="project">
					<h3>James Webb Space Telescope Feed</h3>
					<p>Delivers newly captured images from the James Webb Space Telescope (JWST), fetched from the Mikulski Agency for Space Telescopes (MAST) database according to a predetermined observation schedule, meticulously processed with scaling algorithms, and detailed with comprehensive metadata for each.</p>
					<p><strong>Tech Stack: </strong>HTML, CSS, ReactJS, Python, SQLite3, Numpy, Pandas, Matplotlib, AWS</p>
				</div>
				{/* Project 2 */}
				<div className="project">
					<h3>EasyA</h3>
					<p>Project description here...</p>
					<p>Tech stack here...</p>
				</div>
				{/* Project 3 */}
				<div className="project">
					<h3>Flagle</h3>
					<p>Project description here...</p>
					<p>Tech stack here...</p>
				</div>
				{/* Project 4 */}
				<div className="project">
					<h3>Adblocker Chrome Extension</h3>
					<p>Project description here...</p>
					<p>Tech stack here...</p>
				</div>
			</div>
		</section>
	)
}
