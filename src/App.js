import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header header-center">
        <h1>Meghana Chelamalla</h1>
        <p className="title">
          Senior Software Engineer • Java • Spring Boot • Microservices • React
        </p>
      </header>

      {/* ABOUT ME */}
      <section className="section">
        <h2>About Me</h2>
        <p className="intro">
          Senior Software Engineer with 11+ years of experience designing,
          building, and operating enterprise-grade platforms across
          manufacturing, healthcare, and HCM domains. I specialize in
          modernizing legacy Java systems, building cloud-native microservices,
          and delivering data-driven React applications with a strong focus on
          scalability, reliability, and production stability.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
  <h2>Technical Skills</h2>
  <table className="skills-table">
    <tbody>
      <tr>
        <th>Backend</th>
        <td>
          Java (6–17), Spring Boot, Spring MVC, Spring Security, Spring WebFlux,
          Hibernate, JPA, Python, Flask, FastAPI, Node.js, Express.js
        </td>
      </tr>

      <tr>
        <th>Frontend</th>
        <td>
          React, Redux, TypeScript, JavaScript (ES6+), HTML5, CSS3
        </td>
      </tr>

      <tr>
        <th>JavaScript Runtime</th>
        <td>
          Node.js, npm, yarn, Event Loop, Async/Await, Promises, REST APIs
        </td>
      </tr>

      <tr>
        <th>Cloud & DevOps</th>
        <td>
          AWS, Azure, GCP, Docker, Kubernetes (EKS), Terraform,
          CI/CD (GitHub Actions, Jenkins, Azure DevOps)
        </td>
      </tr>

      <tr>
        <th>Databases</th>
        <td>
          PostgreSQL, MySQL, Oracle, MongoDB, DynamoDB, Cassandra,
          Redis, Amazon Redshift
        </td>
      </tr>

      <tr>
        <th>Messaging & Streaming</th>
        <td>
          Apache Kafka, Kafka Streams, RabbitMQ, ActiveMQ, AWS SQS,
          Azure Service Bus
        </td>
      </tr>

      <tr>
        <th>Security</th>
        <td>
          OAuth 2.0, JWT, RBAC, API Gateway Security,
          Token Lifecycle Management
        </td>
      </tr>

      <tr>
        <th>Testing & Observability</th>
        <td>
          JUnit, Mockito, Testcontainers, Jest, Cypress,
          Prometheus, Grafana, Splunk, AWS CloudWatch
        </td>
      </tr>

      <tr>
        <th>Architecture & Practices</th>
        <td>
          Microservices, Event-Driven Architecture, REST,
          Reactive Programming, Distributed Systems,
          System Design, Agile/Scrum
        </td>
      </tr>
    </tbody>
  </table>
</section>


      {/* DOMAINS */}
      <section className="section">
        <h2>Domain Expertise</h2>
        <div className="domains">
          <div className="domain-card">
            <h3>Manufacturing Systems</h3>
            <p>
              Real-time data ingestion, event-driven architectures, plant-level
              analytics, and high-throughput Kafka pipelines.
            </p>
          </div>

          <div className="domain-card">
            <h3>Healthcare & Insurance</h3>
            <p>
              Secure, compliant microservices handling claims processing,
              ingestion workflows, and analytics with strict access controls.
            </p>
          </div>

          <div className="domain-card">
            <h3>HCM & Enterprise Platforms</h3>
            <p>
              Transaction-heavy HR systems with strong data integrity,
              batch processing, and legacy integrations.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section">
        <h2>Contact Me</h2>
        <p>Email: <strong>meghanach258@gmail.com</strong></p>
        <p>Phone: <strong>+1 972-454-0806</strong></p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/meghana1991-c"
            target="_blank"
            rel="noreferrer"
          >
            github.com/meghana1991-c
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Meghana Chelamalla
      </footer>
    </div>
  );
}

export default App;
