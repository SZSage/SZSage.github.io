import "./Courses.css"

export default function Courses() {
	return (
		<div className="relevantCourses">
			<h2>Relevant Courses</h2>
			<div className="coursesContainer">
				<div className="courses">
					<h3>CS 313</h3>
					<p>Intermediate Data Structures</p>
				</div>
				<div className="courses">
					<h3>CS 315</h3>
					<p>Advanced Algorithms</p>
				</div>
				<div className="courses">
					<h3>CS 322</h3>
					<p>Software Engineering</p>
				</div>
				<div className="courses">
					<h3>MTH 341</h3>
					<p>Linear Algebra</p>
				</div>
				<div className="courses">
					<h3>CS 433</h3>
					<p>Computer & Network Security</p>
				</div>
				<div className="courses">
					<h3>CS 451</h3>
					<p>Database Processing</p>
				</div>
				<div className="courses">
					<h3>CS 471</h3>
					<p>Machine Learning</p>
				</div>
			</div>
		</div>
	)
}
