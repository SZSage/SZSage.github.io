import { useEffect, useRef, useState } from "react";
import "./Courses.css";

export default function Courses() {
  const coursesRef = useRef(null);
  const [coursesVisible, setCoursesVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCoursesVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (coursesRef.current) {
      observer.observe(coursesRef.current);
    }

    return () => {
      if (coursesRef.current) {
        observer.unobserve(coursesRef.current);
      }
    };
  }, []);

  return (
    <section id="courses" ref={coursesRef} className={`relevantCourses ${coursesVisible ? "visible" : ""}`}>
      <h2 className="coursesHeader">Relevant Courses</h2>
      <div className="coursesContainer">
        <div className="coursesContent">
          <div className="courseCategory">
            <h3>Intermediate Data Structures</h3>
            <p>CS 313</p>
          </div>
          <div className="courseCategory">
            <h3>Advanced Algorithms</h3>
            <p>CS 315</p>
          </div>
          <div className="courseCategory">
            <h3>Intro to Software Engineering</h3>
            <p>CS 322</p>
          </div>
          <div className="courseCategory">
            <h3>Linear Algebra</h3>
            <p>MTH 341</p>
          </div>
          <div className="courseCategory">
            <h3>Computer & Network Security</h3>
            <p>CS 433</p>
          </div>
          <div className="courseCategory">
            <h3>Software Methodologies</h3>
            <p>CS 425</p>
          </div>
          <div className="courseCategory">
            <h3>Database Processing</h3>
            <p>CS 451</p>
          </div>
          <div className="courseCategory">
            <h3>Machine Learning</h3>
            <p>CS 471</p>
          </div>
        </div>
      </div>
    </section>
  );
}
