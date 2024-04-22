import "./Skills.css"

export default function Skills() {
	return (
		<div className="skillSection">
			<h2>Tools & Technologies</h2>
			<div className="languagesSection">
				<h3>Programming Languages</h3>
				<div className="languages">
					<p>Python</p>
					<p>JavaScript/Typescript</p>
					<p>Lua</p>
					<p>C</p>
				</div>
			</div>
			<div className="databaseSection">
			<h3>Databases</h3>
				<div className="databases">
					<p>SQL (MySQL, SQLite)</p>
					<p>MongoDB</p>
				</div>
			</div>
			<div className="frameworksSection">
			<h3>Frameworks</h3>
				<div className="frameworks">
					<p>FastAPI</p>
					<p>ReactJs</p>
					<p>Flask</p>
					<p>Pytorch</p>
				</div>
			</div>
			<div className="datascienceSection">
				<h3>Data Science</h3>
				<div className="datascience">
					<p>Numpy</p>
					<p>Pandas</p>
					<p>Matplotlib</p>
				</div>
			</div>
			<div className="versioncontrolSection">
				<h3>Version Control</h3>
				<div className="versioncontrol">
					<p>Git</p>
				</div>
			</div>
			<div className="cloudplatformsSection">
				<h3>Cloud Platforms</h3>
				<div className="cloudplatforms">
					<p>Google Cloud (Kubernetes Engine)</p>
				</div>
			<div className="otherSection">
				<h3>Other</h3>
				<div className="other">
					<p>Unit/Linux</p>
					<p>Docker</p>
					<p>Terminal</p>
					<p>Vim/Neovim</p>
					<p>Scripting</p>
				</div>
			</div>
		</div>
	</div>
	)
}
