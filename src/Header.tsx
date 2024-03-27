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
				</ul>
			</div>
		</div>
	)
}
