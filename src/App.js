import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
  <h1>Meghana Chelamalla</h1>
  <p className="title">Senior Software Engineer • Java • Spring Boot • React</p>

  <div className="contact">
    <a href="mailto:meghanach258@gmail.com">meghanach258@gmail.com</a>
    <a href="https://github.com/meghana1991-c" target="_blank" rel="noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/chelamalla-meghana" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</header>


      {/* Summary */}
      <section className="section">
        <p className="summary">
          Senior Software Engineer with 11+ years of experience designing,
          building, and operating enterprise-scale platforms across manufacturing,
          healthcare, and HCM domains. Strong expertise in modernizing legacy
          systems, building cloud-native microservices, and delivering
          data-driven React applications backed by scalable, reliable backend
          architectures.
        </p>
      </section>

      {/* Links */}
      <section className="section links">
        <a
          href="https://github.com/meghana1991-c"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chelamalla-meghana"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Core Skills</h2>
        <ul>
          <li>
            <strong>Backend:</strong> Java (6–17), Spring Boot, Spring MVC,
            Spring Security, Spring WebFlux, Hibernate, JPA
          </li>
          <li>
            <strong>Frontend:</strong> React, Redux, TypeScript, JavaScript,
            HTML, CSS
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> AWS, Azure, GCP, Docker, Kubernetes
            (EKS), Terraform, CI/CD
          </li>
          <li>
            <strong>Messaging & Data:</strong> Apache Kafka, RabbitMQ, Redis,
            PostgreSQL, MongoDB, Oracle, Redshift
          </li>
        </ul>
      </section>

      {/* Experience Highlights */}
      <section className="section">
        <h2>Experience Highlights</h2>
        <ul>
          <li>
            Modernized large-scale Java 8 systems to Java 17 using Spring Boot 3.x
            and microservices architecture.
          </li>
          <li>
            Designed event-driven platforms using Apache Kafka to decouple
            services and handle high-throughput data ingestion.
          </li>
          <li>
            Built real-time dashboards and analytics UIs in React consuming REST
            and reactive APIs.
          </li>
          <li>
            Operated production systems with focus on performance, reliability,
            observability, and zero-downtime deployments.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <strong>Manufacturing Data Platform:</strong> Kafka-based event
            processing with AWS, Redis caching, and real-time dashboards.
          </li>
          <li>
            <strong>Healthcare Claims Platform:</strong> Secure Spring Boot
            microservices with OAuth2, RBAC, and Azure cloud integrations.
          </li>
          <li>
            <strong>Enterprise React Dashboards:</strong> Data-intensive UIs
            with optimized state management and API integration.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Meghana Chelamalla</p>
      </footer>
    </div>
  );
}

export default App;
