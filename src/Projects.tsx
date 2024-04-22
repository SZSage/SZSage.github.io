import "./Projects.css"

export default function Projects() {
	return (
		<section className="projectSection">
			<h2 className="projectsH2">Projects</h2>
			<div className="projectContainer">
				{/* Project 1 */}
				<div className="project">
					<h3>James Webb Space Telescope Feed</h3>
					<div className="projectDescription">
						<p>The project fetches new images from the James Webb Space Telescope via the MAST database, processes them with scaling algorithms, and adds detailed metadata, all based on a set observation schedule.</p>
						<div className="verticalLine2"></div>
						<p><strong>Tech Stack: </strong>Python, SQLite3, Numpy, Pandas, Matplotlib, HTML, CSS, ReactJS, JavaScript,  BeautifulSoup, AWS</p>
					</div>
				</div>
				{/* Project 2 */}
				<div className="project">
					<h3>EasyA</h3>
					<div className="projectDescription">
						<p>EasyA is a system designed to help University of Oregon students identify courses with high A grades and avoid high D or F grades by analyzing grade data from 2013-2016, aiming to enhance comparison features for faculty performance across similar and varying course levels.</p>
						<div className="verticalLine2"></div>
						<p><strong>Tech Stack:</strong> Python, Tinkter, SQLite3, Pandas, Matplotlib, BeautifulSoup</p>
					</div>
				</div>
				{/* Project 3 */}
				<div className="project">
					<h3>Flagle</h3>
					<div className="projectDescription">
						<p>Flagle is a web-based word guessing game based on country flags, inspired by the word game Wordle.</p>
						<div className="verticalLine2"></div>
						<p><strong>Tech Stack: </strong>Docker, Python, FastAPI, MongoDB, HTML, CSS, JavaScript</p>
					</div>
				</div>
				{/* Project 4 */}
				<div className="project">
					<h3>SusGuard: Adblocker Chrome Extension</h3>
					<div className="projectDescription">
						<p>A Google Chrome extension designed to enhance the online security of users browsing on the internet.</p>
						<div className="verticalLine2"></div>
						<p><strong>Tech Stack: </strong>HTML, CSS, JavaScript, Chrome Extension APIs</p>
					</div>
				</div>
			</div>
		</section>
	)
}
