import DegreeProgress from './DegreeProgress';

export default function Academic() {
  const semesters = [
    {
      name: "Year 1 Semester 1",
      gpa: "2.85",
      subjects: [
        { name: "Data Communication Networks", grade: "B-" },
        { name: "Introduction to Programming", grade: "B-" },
        { name: "Mathematics for Computing", grade: "B-" },
        { name: "Fundamentals of Computing", grade: "B+" },
      ],
    },
    {
      name: "Year 1 Semester 2",
      gpa: "3.00",
      subjects: [
        { name: "Technical Writing", grade: "B+" },
        { name: "Discrete Mathematics", grade: "B" },
        { name: "Data Structures and Algorithms", grade: "B-" },
        { name: "Object Oriented Programming", grade: "B"},
      ],
    },
    {
      name: "Year 2 Semester 1",
      gpa: "3.08",
      subjects: [
        { name: "AI & ML", grade: "B+" },
        { name: "Probability and Statistics", grade: "B-" },
        { name: "Database Design and Development", grade: "B" },
        { name: "Software Engineering", grade: "B+" },
      ],
    },
    {
      name: "Year 2 Semester 2 (Unofficial results published in official website)",
      gpa: "3.25",
      subjects: [
        { name: "Operating Systems and System Administration", grade: "B+" },
        { name: "Professional Skills", grade: "A-" },
        { name: "AIML Project Module", grade: "A-" },
        { name: "Web and Mobile Technologies", grade: "C+" },
      ],
    },
    {
      name: "Year 3 Semester 1 - Ongoing...",
      gpa: "",
      subjects: [
        { name: "Statistical Modeling", grade: "" },
        { name: "Machine Learning", grade: "" },
        { name: "Data Warehousing and Business Intelligence", grade: "" },
        { name: "Modern Enterprise Management", grade: ""},
      ],
    },

  ];

  return (
  <section id="academic" className="academic">
    <h2 className="section-title">Academic Records</h2>

    <div className="academic-layout">
      <DegreeProgress totalSemesters={8} completed={4} ongoing={1} />

      <div className="academic-content">
        <div className="gpa-cards">
          <div className="gpa-card">
            <p className="gpa-label">CGPA</p>
            <p className="gpa-value">3.05</p>
          </div>

          {/* wgpa card not available yet, so commented out for now
          <div className="gpa-card">
            <p className="gpa-label">WGPA</p>
            <p className="gpa-value">0.00</p>
          </div>
          */}

        </div>

        <div className="semester-list">
          {semesters.map((sem, i) => (
            <details key={i} className="semester-item">
              <summary>
                <span>{sem.name}</span>
                <span className="sem-gpa">GPA: {sem.gpa}</span>
              </summary>
              <table className="semester-table">
                <thead>
                  <tr><th>Subject</th><th>Grade</th></tr>
                </thead>
                <tbody>
                  {sem.subjects.map((sub, j) => (
                    <tr key={j}><td>{sub.name}</td><td>{sub.grade}</td></tr>
                  ))}
                </tbody>
              </table>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}