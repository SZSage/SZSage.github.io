import "./Header.css"

export default function Header() {
	return (
		<div className="header">
			<div className="headerElements">
				<div className="myName">Simon Zhao</div>
				<ul className="headerListSections">
					<li className="section">About me</li>
					<li className="section">Projects</li>
					<li className="section">Tools & Tech</li>
					<li className="section">Resume</li>
					<img className="headerImg" src="src/assets/github-mark-white.svg" width="30" height="30"></img>
					<img className="headerImg" src="src/assets/icons8-linkedin.svg" width="48" height="48"></img>
				</ul>
			</div>
		</div>
	)
}
