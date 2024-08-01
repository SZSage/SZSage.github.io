import { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="skillsContainer">
      <h2 className="skillsHeader">Skills</h2>
      <div className="skillSection">
        <div className="combinedSection">
          <div className="languagesSection">
            <h3>Languages</h3>
            <div className="languages">
              <div className="languageItem">
                <img className="pythonImg" src="/assets/python-5.svg" width="26" height="26" alt="Python" />
                <p>Python</p>
              </div>
              <div className="languageItem">
                <img className="luaImg" src="/assets/lua-5.svg" width="26" height="26" alt="Lua" />
                <p>Lua</p>
              </div>
              <div className="languageItem">
                <img className="jsImg" src="/assets/logo-javascript.svg" width="26" height="26" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="languageItem">
                <img className="cImg" src="/assets/c-1.svg" width="26" height="26" alt="C" />
                <p>C</p>
              </div>
            </div>
          </div>
          <div className="verticalLine2"></div>
          <div className="databaseSection">
            <h3>Data Tools</h3>
            <div className="databases">
              <div className="databaseItem">
                <img className="sqlImg" src="/assets/sql-database-generic.svg" width="26" height="26" alt="SQL" />
                <p>SQL</p>
              </div>
              <div className="databaseItem">
                <img className="mongoImg" src="/assets/mongodb-icon-1.svg" width="26" height="26" alt="MongoDB" />
                <p>MongoDB</p>
              </div>
              <div className="databaseItem">
                <img className="numpyImg" src="/assets/numpy-1.svg" width="26" height="26" alt="Numpy" />
                <p>NumPy</p>
              </div>
              <div className="databaseItem">
                <img className="pandasImg" src="/assets/pandas.svg" width="26" height="26" alt="Pandas" />
                <p>Pandas</p>
              </div>
              <div className="databaseItem">
                <img className="matplotImg" src="/assets/matplotlib-1.svg" width="26" height="26" alt="Matplotlib" />
                <p>Matplotlib</p>
              </div>
            </div>
          </div>
        </div>
        <div className="combinedSection">
          <div className="frameworksSection">
            <h3>Frameworks</h3>
            <div className="frameworks">
              <div className="frameworksItem">
                <img className="fastImg" src="/assets/fastapi-1.svg" width="26" height="26" alt="FastAPI" />
                <p>FastAPI</p>
              </div>
              <div className="frameworksItem">
                <img className="reactImg" src="/assets/react-2.svg" width="26" height="26" alt="ReactJs" />
                <p>ReactJs</p>
              </div>
              <div className="frameworksItem">
                <img className="flaskImg" src="/assets/flask.svg" width="26" height="26" alt="Flask" />
                <p>Flask</p>
              </div>
              <div className="frameworksItem">
                <img className="sklearnImg" src="/assets/scikit-learn.svg" width="26" height="26" alt="Scikit Learn" />
                <p>Scikit Learn</p>
              </div>
            </div>
          </div>
          <div className="verticalLine2"></div>
          <div className="toolsSection">
            <h3>Tools</h3>
            <div className="tools">
              <div className="toolItem">
                <img className="gitImg" src="/assets/git-bash.svg" width="26" height="26" alt="Git" />
                <p>Git</p>
              </div>
              <div className="toolItem">
                <img className="dockerImg" src="/assets/docker-4.svg" width="26" height="26" alt="Docker" />
                <p>Docker</p>
              </div>
              <div className="toolItem">
                <img className="terminalImg" src="/assets/terminal-1.svg" width="26" height="26" alt="Terminal" />
                <p>Terminal</p>
              </div>
              <div className="toolItem">
                <img className="vimImg" src="/assets/Neovim-mark.svg" width="26" height="26" alt="Vim/Neovim" />
                <p>Vim/Neovim</p>
              </div>
              <div className="toolItem">
                <img className="cloudImg" src="/assets/google-cloud-1.svg" width="26" height="26" alt="Google Cloud" />
                <p>Google Cloud</p>
              </div>
              <div className="toolItem">
                <img className="linuxImg" src="/assets/linux-icon.svg" width="26" height="26" alt="Unix/Linux" />
                <p>Unix/Linux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
