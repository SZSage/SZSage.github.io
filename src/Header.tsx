import "./Header.css"

export default function Header() {
	return (
		<div className="header">
			<div className="centerContainer">
				<div className="headerElements">
					<div className="myName">Simon Zhao</div>
					<ul className="headerListSections">
						<li className="section">About me</li>
						<li className="section">Projects</li>
						<li className="section">Tools & Tech</li>
						<li className="section">Relevant Courses</li>
						<li className="section">Resume</li>
						<div className="verticalLine"></div>
						<img className="headerImg1" src="src/assets/github-mark-white.svg" width="34" height="34"></img>
						<img className="headerImg" src="src/assets/icons8-linkedin.svg" width="48" height="48"></img>
					</ul>
				</div>
			</div>
		</div>
	)
}
