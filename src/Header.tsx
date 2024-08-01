import "./Header.css";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const sections = [
    { id: "about-me", title: "About me" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "courses", title: "Courses" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="header">
      <div className="centerContainer">
        <div className="headerElements">
          <div className="myName">Simon Zhao</div>
          <ul className="headerListSections">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`section ${
                  activeSection === section.id ? "active" : ""
                }`}
              >
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
            <div className="verticalLine"></div>
            <a
              href="https://github.com/SZSage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="headerImg1"
                src="assets/GitHub.svg"
                width="50"
                height="50"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-zhao-sz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="headerImg"
                src="assets/linkedin-icon-2.svg"
                width="40"
                height="40"
                alt="LinkedIn"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
