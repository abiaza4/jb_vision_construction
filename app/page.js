import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Map (no SSR)
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Deng", grade: "A" },
    { id: 2, name: "Mary Lado", grade: "B" },
  ]);

  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const addStudent = () => {
    if (!name || !grade) return;
    setStudents([...students, { id: students.length + 1, name, grade }]);
    setName("");
    setGrade("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>📚 School Management System</h1>

      <h2>Students</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - Grade: {s.grade}
          </li>
        ))}
      </ul>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addStudent}>Add Student</button>

      <h2 style={{ marginTop: "30px" }}>
        🌍 School Location - Juba, South Sudan
      </h2>
      <Map />
    </div>
  );
}
