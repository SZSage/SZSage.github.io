import "./Skills.css"

export default function Skills() {
	return (
		<div className="skillSection">
			<h2>Tools & Technologies</h2>
			<div className="languagesSection">
				<h3>Programming Languages</h3>
				<div className="languages">
					<div className="languageItem">
						<img className="pythonImg" src="./src/assets/python-5.svg" width="50" height="50" />
						<p>Python</p>
					</div>
					<div className="languageItem">
						<img className="luaImg" src="./src/assets/lua-5.svg" width="50" height="50" />
						<p>Lua</p>
					</div>
					<div className="languageItem">
						<img className="jsImg" src="./src/assets/logo-javascript.svg" width="50" height="50" />
						<p>JavaScript/Typescript</p>
					</div>
					<div className="languageItem">
						<img className="cImg" src="./src/assets/c-1.svg" width="50" height="50" />
						<p>C</p>
					</div>
				</div>
			</div>
			<div className="databaseSection">
				<h3>Databases & Data Science</h3>
				<div className="databases">
					<div className="databaseItem">
						<img className="sqlImg" src="./src/assets/sql-database-generic.svg" width="50" height="50" />
						<p>SQL</p>
						<p>(MySQL, SQLite)</p>
					</div>
					<div className="databaseItem">
						<img className="mongoImg" src="./src/assets/mongodb-icon-1.svg" width="50" height="50" />
						<p>MongoDB</p>
					</div>
					<div className="databaseItem">
						<img className="numpyImg" src="./src/assets/numpy-1.svg" width="50" height="50" />
						<p>Numpy</p>
					</div>
					<div className="databaseItem">
						<img className="pandasImg" src="./src/assets/pandas.svg" width="50" height="50" />
						<p>Pandas</p>
					</div>
					<div className="databaseItem">
						<img className="matplotImg" src="./src/assets/matplotlib-1.svg" width="50" height="50" />
						<p>Matplotlib</p>
					</div>
				</div>
			</div>
			<div className="frameworksSection">
				<h3>Frameworks</h3>
				<div className="frameworks">
					<div className="frameworksItem">
						<img className="fastImg" src="./src/assets/fastapi-1.svg" width="50" height="50" />
						<p>FastAPI</p>
					</div>
					<div className="frameworksItem">
						<img className="reactImg" src="./src/assets/react-2.svg" width="50" height="50" />
						<p>ReactJs</p>
					</div>
					<div className="frameworksItem">
						<img className="flaskImg" src="./src/assets/flask.svg" width="50" height="50" />
						<p>Flask</p>
					</div>
					<div className="frameworksItem">
						<img className="sklearnImg" src="./src/assets/scikit-learn.svg" width="50" height="50" />
						<p>Scikit Learn</p>
					</div>
				</div>
			</div>
			<div className="devopsToolSection">
				<h3>DevOps & Tools</h3>
				<div className="devopsTool">
					<div className="devopsToolItem">
						<img className="gitImg" src="./src/assets/git-bash.svg" width="50" height="50" />
						<p>Git</p>
					</div>

					<div className="devopsToolItem">
						<img className="dockerImg" src="./src/assets/docker-4.svg" width="50" height="50" />
						<p>Docker</p>
					</div>
					<div className="devopsToolItem">
						<img className="terminalImg" src="./src/assets/terminal-1.svg" width="50" height="50" />
						<p>Terminal</p>
					</div>
					<div className="devopsToolItem">
						<img className="vimImg" src="./src/assets/Neovim-mark.svg" width="50" height="50" />
						<p>Vim/Neovim</p>
					</div>
					<div className="devopsToolItem">
						<img className="cloudImg" src="./src/assets/google-cloud-1.svg" width="50" height="50" />
						<p>Google Cloud</p>
					</div>
					<div className="devopsToolItem">
						<img className="linuxImg" src="./src/assets/linux-tux.svg" width="50" height="50" />
						<p>Unix/Linux</p>
					</div>
				</div>
			</div>
		</div>
	)
}
