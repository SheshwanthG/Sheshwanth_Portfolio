import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["About", "Experience", "Projects", "Skills", "Education", "Certifications"];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 shadow bg-white sticky top-0 z-50">
        <a href="#" className="text-xl font-bold text-blue-600">Sheshwanth G. Reddy</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden md:flex gap-6 font-medium">
          {sections.map((sec) => (
            <li key={sec}>
              <a href={`#${sec}`} className="hover:text-blue-600">{sec}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-6 py-4 bg-white shadow">
          {sections.map((sec) => (
            <li key={sec} className="py-2 border-b last:border-0">
              <a href={`#${sec}`} className="block" onClick={() => setOpen(false)}>{sec}</a>
            </li>
          ))}
        </ul>
      )}

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-10 gap-10 bg-gray-50">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-56 h-56 rounded-full shadow-lg object-cover"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm Sheshwanth 👋</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Full Stack Java Developer with 5+ years building scalable cloud-native apps.
            Deep in Java, Spring Boot, React, and AWS with a focus on microservices, clean code,
            and observability. I also use GitHub Copilot & Gemini to move faster.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="mailto:sheshwanth018@gmail.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Contact Me</a>
            <a href="https://www.linkedin.com/in/sheshwanth-reddy" target="_blank" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">LinkedIn</a>
            <a href="/Sheshwanth_Gundeti_Resume.pdf" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">Download Resume</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="About" className="p-10 bg-white shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">About Me</h3>
        <p className="max-w-3xl">
          I specialize in designing and delivering enterprise-grade applications across finance and healthcare.
          Experienced in Java, Spring Boot, React, AWS, and microservices with a strong focus on CI/CD and TDD.
          I enjoy mentoring and driving quality through observability, automation, and clean architecture.
        </p>
      </section>

      {/* Experience */}
      <section id="Experience" className="p-10">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Professional Experience</h3>
        <ul className="space-y-6">
          <li>
            <h4 className="font-semibold">Capital Group – Full Stack Java Developer</h4>
            <p className="text-sm text-gray-600">Nov 2022 – Present • San Antonio, TX</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Refactored a monolith into 12 microservices, cutting deployment time by 80%.</li>
              <li>Raised unit test coverage to 92% with TDD and Jenkins dashboards.</li>
              <li>Implemented ELK + CloudWatch, reducing incident investigation time by 40%.</li>
              <li>Built CI/CD (GitHub Actions/Jenkins) to enable daily releases.</li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold">Optum Technologies – Java Developer</h4>
            <p className="text-sm text-gray-600">Aug 2021 – Jun 2022 • Hyderabad, India</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Claims pipeline: 50k+ claims/day with &lt;1% failure rate.</li>
              <li>Redis caching improved endpoints by ~300ms.</li>
              <li>Automated 60% of regression tests with Postman + CI.</li>
            </ul>
          </li>
          <li>
            <h4 className="font-semibold">Cyient – Software Engineer</h4>
            <p className="text-sm text-gray-600">Jun 2020 – Jul 2021 • Hyderabad, India</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Migrated 8 modules from JSP to Spring Boot microservices.</li>
              <li>Fixed a production memory leak, reducing crashes by 80%.</li>
              <li>Built a React admin dashboard improving internal efficiency by 20%.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section id="Projects" className="p-10 bg-white shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="p-5 rounded-xl border shadow-sm">
            <h4 className="font-semibold">Microservices Refactor @ Capital Group</h4>
            <p className="text-sm text-gray-600 mt-1">Java • Spring Boot • Kafka • AWS • EKS</p>
            <p className="mt-2 text-gray-700">Split monolith into 12 services, added Resilience4j, centralized logging, and automated CI/CD.</p>
          </article>
          <article className="p-5 rounded-xl border shadow-sm">
            <h4 className="font-semibold">Healthcare Claims Pipeline</h4>
            <p className="text-sm text-gray-600 mt-1">Spring Boot • Redis • Jenkins • Postman</p>
            <p className="mt-2 text-gray-700">High-throughput claim validation with caching and automated testing.</p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="Skills" className="p-10">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-800">
          <div>
            <p><strong>Languages:</strong> Java, JavaScript, TypeScript, SQL, Python</p>
            <p><strong>Frontend:</strong> React, Next.js, Angular, HTML, CSS</p>
            <p><strong>Backend:</strong> Spring Boot, Hibernate, JPA, REST APIs, Microservices</p>
            <p><strong>Databases:</strong> MySQL, PostgreSQL, Oracle, MongoDB, Redis</p>
          </div>
          <div>
            <p><strong>Cloud/DevOps:</strong> AWS (EC2, S3, RDS, Lambda, API Gateway), Docker, Kubernetes, Jenkins, Terraform</p>
            <p><strong>Messaging:</strong> Kafka, RabbitMQ</p>
            <p><strong>Testing:</strong> JUnit, Mockito, Postman</p>
            <p><strong>Monitoring:</strong> ELK, Prometheus, Grafana, CloudWatch</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="Education" className="p-10 bg-white shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Education</h3>
        <ul className="list-disc ml-6">
          <li><strong>MS, Computer Science</strong> — University of Central Missouri (2024)</li>
          <li><strong>B.Tech, Computer Science</strong> — (2020)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="Certifications" className="p-10">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Certifications</h3>
        <ul className="list-disc ml-6">
          <li>AWS Certified Developer – Associate</li>
          <li>Azure Developer Associate (Microsoft)</li>
          <li>Certified Kubernetes Application Developer (CKAD)</li>
          <li>Java SE 17 Certified Developer</li>
          <li>OCI Architect Associate (In Progress)</li>
          <li>OpenAI – ChatGPT Prompt Engineering</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-600">
        © {new Date().getFullYear()} Sheshwanth G. Reddy • Built with React + Tailwind + Vite
      </footer>
    </div>
  );
}
