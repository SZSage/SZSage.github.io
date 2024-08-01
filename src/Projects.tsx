import { useEffect, useRef } from "react";
import "./Projects.css";

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="projectSection">
      <h2 className="projectsH2">Projects</h2>
      <div className="projectContainer">
        {/* Project 1 */}
        <div id="project1" className="project">
          <h3>NebulaNet</h3>
          <div className="projectDescription">
            <div className="textSection">
              <p>
                Developed a backend system to automate retrieval and processing
                of raw astronomical images from the James Webb Space Telescope
                (JWST), providing up-to-date space exploration insights.
              </p>
              <div className="techStack">
                <span>Python</span>
                <span>SQLite3</span>
                <span>Numpy</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>ReactJS</span>
                <span>BeautifulSoup</span>
                <span>AWS</span>
              </div>
            </div>
            <div className="verticalLine2"></div>
            <img
              className="projectImg"
              src="assets/Nebulanet.jpeg"
              width="400"
              height="400"
              alt="NebulaNet"
            />
          </div>
        </div>
        {/* Project 2 */}
        <div id="project2" className="project">
          <h3>EasyA</h3>
          <div className="projectDescription">
            <div className="textSection">
              <p>
                EasyA is a system designed to help University of Oregon students
                identify courses with high A grades and avoid high D or F grades
                by analyzing grade data from 2013-2016, aiming to enhance
                comparison features for faculty performance across similar and
                varying course levels.
              </p>
              <div className="techStack">
                <span>Python</span>
                <span>Tkinter</span>
                <span>SQLite3</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>BeautifulSoup</span>
              </div>
            </div>
            <div className="verticalLine2"></div>
            <img
              className="projectImg"
              src="assets/easyA.png"
              width="400"
              height="400"
              alt="EasyA"
            />
          </div>
        </div>
        {/* Project 3 */}
        <div id="project3" className="project">
          <h3>Flagle</h3>
          <div className="projectDescription">
            <div className="textSection">
              <p>
                Flagle is a web-based word guessing game based on country flags,
                inspired by the word game Wordle.
              </p>
              <div className="techStack">
                <span>Python</span>
                <span>FastAPI</span>
                <span>Docker</span>
                <span>MongoDB</span>
                <span>Google Cloud</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="verticalLine2"></div>
            <img
              className="projectImg"
              src="assets/flagle.png"
              width="400"
              height="400"
              alt="Flagle"
            />
          </div>
        </div>
        {/* Project 4 */}
        <div id="project4" className="project">
          <h3>SusGuard: Adblocker Chrome Extension</h3>
          <div className="projectDescription">
            <p>
              A Google Chrome extension designed to enhance the online security
              of users browsing on the internet.
            </p>
            <div className="verticalLine2"></div>
            <p>
              <strong>Tech Stack: </strong>HTML, CSS, JavaScript, Chrome
              Extension APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
