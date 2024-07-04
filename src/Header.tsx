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
						<img className="headerImg1" src="./github-mark.svg" width="50" height="50"></img>
						<img className="headerImg" src="./src/assets/linkedin-icon-2.svg" width="50" height="50"></img>
					</ul>
				</div>
			</div>
		</div>
	)
}
