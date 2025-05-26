import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Javier Suárez Fernández - Front End Developer</title>
        <meta name="description" content="Front End Developer with experience in MERN stack and cloud services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.profile}>
            <h1>Javier Suárez Fernández</h1>
            <h2>Front End Developer</h2>
            <p>📍 Barcelona</p>
            <div className={styles.contactLinks}>
              <a href="mailto:abaqua@duck.com" className={styles.contactLink}>📧 Email</a>
              <a href="https://www.linkedin.com/in/javsf/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>💼 LinkedIn</a>
              <a href="https://github.com/Onpointiscake" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>👨‍💻 GitHub</a>
            </div>
          </div>
        </section>

        <section className={styles.summary}>
          <h2>Profile</h2>
          <p>
            Developer experienced in the MERN stack and with backend serverless services in the cloud.
          </p>
        </section>

        <section className={styles.experience}>
          <h2>Work Experience</h2>
          <div className={styles.experienceItem}>
            <h3>SEIDOR OpenTrends</h3>
            <p className={styles.date}>📍 Barcelona — Jan 2022 – Oct 2024</p>
            <ul>
              <li>Redesigned legacy pages using HTML, CSS, and Bootstrap to create modern, responsive components.</li>
              <li>Experience in banking environments developing interfaces with React (React Hooks).</li>
              <li>Created high-level technical documentation for large-scale projects.</li>
              <li>Worked in Agile environments (Jira, Confluence) and used Salesforce CMS.</li>
            </ul>
          </div>
        </section>

        <section className={styles.education}>
          <h2>Education</h2>
          <div className={styles.educationItem}>
            <h3>Arol.dev DevOps Bootcamp</h3>
            <p>2024</p>
          </div>
          <div className={styles.educationItem}>
            <h3>AWS Solutions Architect Associate</h3>
            <p>2023</p>
          </div>
          <div className={styles.educationItem}>
            <h3>Open Bootcamp – Full Stack Developer</h3>
            <p>2021</p>
          </div>
          <div className={styles.educationItem}>
            <h3>Fundación Telefónica – JAVA JEE & J2EE Bootcamp</h3>
            <p>2019</p>
          </div>
        </section>

        <section className={styles.skills}>
          <h2>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Languages</h3>
              <p>JavaScript, TypeScript, HTML, CSS, Java</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <p>React, Angular, Bootstrap</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <p>Node.js, Express, REST APIs</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Databases</h3>
              <p>MongoDB, DynamoDB, DocumentDB</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Cloud</h3>
              <p>AWS (Lambda, S3, Cognito, API Gateway), GCP (Functions, Scheduler, SQS)</p>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools</h3>
              <p>Git, Jira, Confluence, Cursor</p>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Top Projects</h2>
          <div className={styles.projectItem}>
            <h3>💡 RemindMeApp (2024)</h3>
            <a href="https://github.com/Onpointiscake/remindme" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              @https://github.com/Onpointiscake/remindme
            </a>
            <p>Developed an app that sends scheduled task reminders via email on specific dates.</p>
            <p className={styles.stack}>Stack: React 18, Cloud Functions, Cloud Scheduler (cron), SQS, DocumentDB (GCP)</p>
          </div>

          <div className={styles.projectItem}>
            <h3>💡 MapItSiteIt (2020)</h3>
            <a href="https://github.com/Onpointiscake/mapit_siteit" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              @https://github.com/Onpointiscake/mapit_siteit
            </a>
            <p>Service for creating geolocated photo albums.</p>
            <p className={styles.stack}>Stack: React, AWS (Lambda, API Gateway, DynamoDB, Cognito, S3)</p>
          </div>

          <div className={styles.projectItem}>
            <h3>💡 Todo Shareable (2019)</h3>
            <a href="https://github.com/Onpointiscake/shareable-todo" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              @https://github.com/Onpointiscake/shareable-todo
            </a>
            <p>Built a collaborative task management app (Trello-style) with real-time editing capabilities.</p>
            <p className={styles.stack}>Stack: React, Node.js, Express, MongoDB, Mongoose</p>
          </div>
        </section>
      </main>
    </div>
  );
}
