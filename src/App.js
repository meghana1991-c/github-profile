import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Meghana Chelamalla</h1>
      <p className="title">
        Senior Software Engineer | Java • Spring Boot • React
      </p>

      <p className="summary">
        I build scalable backend systems and clean, data-driven frontends.
        Experienced across Java (6–17), Spring ecosystem, cloud platforms, and
        modern React applications.
      </p>

      <div className="links">
        <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>
      </div>

      <h2>Skills</h2>
      <ul>
        <li>Java, Spring Boot, Microservices</li>
        <li>React, Redux, TypeScript</li>
        <li>AWS, Azure, Kafka, Docker</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>Manufacturing Data Platform (Kafka + AWS)</li>
        <li>Healthcare Claims Microservices</li>
        <li>React Dashboards & Analytics UI</li>
      </ul>
    </div>
  );
}

export default App;