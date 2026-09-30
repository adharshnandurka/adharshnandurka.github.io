import React, { useState } from 'react';

export default function PortfolioSections() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nandurkaadharsh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="portfolio-content-flow">
      {/* ====================================================================
          ABOUT
          ==================================================================== */}
      <section id="about" className="portfolio-section section-about-black">
        <div className="section-container">
          <div className="section-header-tag">
            <span className="section-name">ABOUT</span>
          </div>

          <h2 className="section-main-title">About Me</h2>

          <div className="about-grid">
            <div className="about-main-card">
              <h3 className="card-subheading">Cloud &amp; Infrastructure Engineer</h3>

              <div className="about-highlights-row">
                <span className="about-highlight-chip accent">
                  <span>✦</span> Infolob Solutions
                </span>
                <span className="about-highlight-chip">
                  <span>☁</span> Azure Cloud &amp; AWS
                </span>
                <span className="about-highlight-chip">
                  <span>🎓</span> MCA Graduate (2025)
                </span>
                <span className="about-highlight-chip">
                  <span>⚙</span> DevOps &amp; IaC
                </span>
              </div>

              <p className="about-bio-lead">
                I am a Cloud &amp; Infrastructure Engineer and MCA graduate (2025) from Nizam College, Osmania University, currently working in the Technical Department at <strong>Infolob Solutions India Pvt. Ltd.</strong> Over the past three months, I have been undergoing intensive enterprise training in Microsoft Azure Cloud administration, actively preparing for the <strong>Azure Administrator Associate (AZ-104)</strong> credential with hands-on expertise in configuring secure Virtual Networks (VNets), Network Security Groups, Application Gateways, Load Balancers, Virtual Machines, resilient Storage Accounts, and Azure App Services.
              </p>

              <p className="about-bio-body">
                My technical proficiency extends to multi-cloud architecture and modern DevOps engineering, having architected resilient 3-tier deployments on Amazon Web Services (AWS) alongside Infrastructure as Code using <strong>Terraform</strong>, container orchestration with <strong>Docker</strong> and <strong>Kubernetes</strong>, and automated CI/CD pipelines via <strong>Jenkins</strong> and <strong>Git</strong>. Backed by solid scripting in Python, SQL query optimization, and enterprise Linux administration, I am continuously broadening my expertise toward the <strong>Azure Developer Associate (AZ-204)</strong> and <strong>Azure Solutions Architect Expert (AZ-305)</strong> certifications.
              </p>
            </div>

            <div className="about-skills-card">
              <h3 className="card-subheading">Technical Skillset</h3>
              
              <div className="skill-group">
                <span className="skill-group-title">Cloud Platforms</span>
                <div className="skill-tags">
                  <span className="tag-item highlight">Amazon Web Services (AWS)</span>
                  <span className="tag-item highlight">Microsoft Azure</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-group-title">DevOps &amp; Automation</span>
                <div className="skill-tags">
                  <span className="tag-item highlight">Kubernetes</span>
                  <span className="tag-item highlight">Terraform</span>
                  <span className="tag-item">Docker</span>
                  <span className="tag-item">Jenkins</span>
                  <span className="tag-item">Git</span>
                  <span className="tag-item">Maven</span>
                  <span className="tag-item">CI/CD Pipelines</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-group-title">Programming &amp; Databases</span>
                <div className="skill-tags">
                  <span className="tag-item">Python</span>
                  <span className="tag-item">SQL / MySQL</span>
                </div>
              </div>

              <div className="skill-group">
                <span className="skill-group-title">Operating Systems</span>
                <div className="skill-tags">
                  <span className="tag-item">Linux (Ubuntu/CentOS)</span>
                  <span className="tag-item">Bash Shell</span>
                </div>
              </div>

              <div className="certifications-block">
                <span className="skill-group-title">Verified Certifications</span>
                <ul className="cert-list">
                  <li>
                    <strong>Python for Data Science</strong> — IBM (Cognitive Class) • <em>Mar 06, 2026</em>
                  </li>
                  <li>
                    <strong>DevOps Fundamentals</strong> — Great Learning • <em>2026</em>
                  </li>
                  <li>
                    <strong>AWS For Beginners</strong> — Great Learning • <em>Mar 25, 2026</em>
                  </li>
                </ul>
              </div>

              <div className="certifications-block">
                <span className="skill-group-title">Academic Recognition &amp; Honors</span>
                <ul className="cert-list">
                  <li>
                    <strong>Jignasa Student Study Project</strong> — State-Level Participant in Graduation (Govt. of Telangana)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          EXPERIENCE
          ==================================================================== */}
      <section id="experience" className="portfolio-section section-experience-red">
        <div className="section-container">
          <div className="section-header-tag">
            <span className="section-name">EXPERIENCE</span>
          </div>

          <h2 className="section-main-title">Experience</h2>

          <div className="experience-showcase">
            <div className="infolob-experience-card">
              <div className="exp-card-header">
                <div className="exp-company-group">
                  <span className="exp-company-badge">CURRENT EMPLOYMENT</span>
                  <h3 className="exp-company-title">Infolob Solutions India Pvt. Ltd.</h3>
                  <div className="exp-role-title">Graduate Engineer Trainee</div>
                </div>
                <div className="exp-tenure-badge">
                  <span>Present • 3 Months</span>
                </div>
              </div>

              {/* Trainee Profile Attributes Grid */}
              <div className="exp-meta-grid">
                <div className="exp-meta-item">
                  <span className="meta-label">DESIGNATION</span>
                  <span className="meta-val">Graduate Engineer Trainee</span>
                </div>
                <div className="exp-meta-item">
                  <span className="meta-label">LEVEL</span>
                  <span className="meta-val highlight-val">L1</span>
                </div>
                <div className="exp-meta-item">
                  <span className="meta-label">GRADE</span>
                  <span className="meta-val highlight-val">Grade A</span>
                </div>
                <div className="exp-meta-item">
                  <span className="meta-label">DEPARTMENT</span>
                  <span className="meta-val">Technical</span>
                </div>
                <div className="exp-meta-item full-span">
                  <span className="meta-label">CLOUD DOMAIN</span>
                  <span className="meta-val highlight-val">Azure Cloud Architecture</span>
                </div>
              </div>

              {/* Training Focus & Azure Services */}
              <div className="exp-training-block">
                <h4 className="training-title">Current Training &amp; Specialization</h4>
                <p className="training-lead">
                  Presently training on <strong>Azure Administrator Associate</strong> and learning key enterprise services:
                </p>

                <div className="azure-services-grid">
                  <div className="azure-service-item">
                    <div className="service-bullet">✦</div>
                    <div className="service-content">
                      <strong className="service-name">Azure VNet</strong>
                      <p>Virtual Network topology, subnets, peering, routing, and Network Security Groups (NSGs).</p>
                    </div>
                  </div>

                  <div className="azure-service-item">
                    <div className="service-bullet">✦</div>
                    <div className="service-content">
                      <strong className="service-name">Application Gateway &amp; Load Balancer</strong>
                      <p>High-availability traffic distribution, URL-based routing, health probes, and SSL termination.</p>
                    </div>
                  </div>

                  <div className="azure-service-item">
                    <div className="service-bullet">✦</div>
                    <div className="service-content">
                      <strong className="service-name">Storage Services</strong>
                      <p>Azure Blob, File Shares, Disk Storage, access control, tiering, and data redundancy.</p>
                    </div>
                  </div>

                  <div className="azure-service-item">
                    <div className="service-bullet">✦</div>
                    <div className="service-content">
                      <strong className="service-name">Virtual Machines (VM)</strong>
                      <p>Compute provisioning, VM sizing, OS configuration, availability sets, and disk management.</p>
                    </div>
                  </div>

                  <div className="azure-service-item">
                    <div className="service-bullet">✦</div>
                    <div className="service-content">
                      <strong className="service-name">App Services</strong>
                      <p>Fully managed PaaS hosting, continuous deployment slots, custom domains, and auto-scaling.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Pills */}
              <div className="card-tags">
                <span className="tag-pill">Infolob Solutions</span>
                <span className="tag-pill">Azure Cloud</span>
                <span className="tag-pill">Azure Administrator Associate</span>
                <span className="tag-pill">Azure VNet</span>
                <span className="tag-pill">Application Gateway</span>
                <span className="tag-pill">Load Balancer</span>
                <span className="tag-pill">Storage Services</span>
                <span className="tag-pill">Virtual Machines</span>
                <span className="tag-pill">App Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          EDUCATION
          ==================================================================== */}
      <section id="education" className="portfolio-section section-education-dark">
        <div className="section-container">
          <div className="section-header-tag">
            <span className="section-name">EDUCATION</span>
          </div>

          <h2 className="section-main-title">Academic Background</h2>

          <div className="education-grid">
            {/* Education 1 */}
            <div className="education-card highlight-card">
              <div className="edu-year-badge">2023 — 2025</div>
              <h3 className="edu-degree">Master's in Computer Applications (MCA)</h3>
              <h4 className="edu-institution">Nizam College (Autonomous)</h4>
              <p className="edu-details">
                Affiliated with Osmania University, Hyderabad. Rigorous curriculum focusing on advanced computing, software engineering, cloud computing architectures, database management, and distributed systems.
              </p>
              <div className="edu-location">📍 Hyderabad, Telangana, India</div>
            </div>

            {/* Education 2 */}
            <div className="education-card">
              <div className="edu-year-badge">2019 — 2021</div>
              <h3 className="edu-degree">Bachelor of Science (B.Sc - MPCS)</h3>
              <h4 className="edu-institution">Kakatiya Government Degree College</h4>
              <p className="edu-details">
                Mathematics, Physics, and Computer Science. Built foundational mastery in algorithm design, object-oriented programming, data structures, and mathematical computation.
              </p>
              <div className="edu-location">📍 Warangal, Telangana, India</div>
            </div>

            {/* Education 3 */}
            <div className="education-card">
              <div className="edu-year-badge">2017 — 2019</div>
              <h3 className="edu-degree">Intermediate (MPC)</h3>
              <h4 className="edu-institution">Deeksha Junior College</h4>
              <p className="edu-details">
                Mathematics, Physics, and Chemistry. Developed strong analytical reasoning and quantitative problem-solving foundations.
              </p>
              <div className="edu-location">📍 Telangana, India</div>
            </div>

            {/* Education 4 */}
            <div className="education-card">
              <div className="edu-year-badge">2016 — 2017</div>
              <h3 className="edu-degree">Secondary School Certificate (SSC)</h3>
              <h4 className="edu-institution">Slate The School (Slate High School)</h4>
              <p className="edu-details">
                Comprehensive secondary education under the SSC Board with distinction in mathematics and natural sciences.
              </p>
              <div className="edu-location">📍 Telangana, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROJECTS
          ==================================================================== */}
      <section id="projects" className="portfolio-section section-projects-dark">
        <div className="section-container">
          <div className="section-header-tag">
            <span className="section-name">PROJECTS</span>
          </div>

          <h2 className="section-main-title">Featured Projects</h2>

          <div className="projects-showcase-grid">
            {/* Project 1: AWS Three Tier App */}
            <article className="project-detail-card featured">
              <div className="project-status-tag">CLOUD ARCHITECTURE • AWS</div>
              <h3 className="project-card-title">AWS Three-Tier Scalable Application Deployment</h3>
              
              <div className="project-architecture-breakdown">
                <div className="arch-tier-item">
                  <div className="arch-badge">01. Presentation Layer</div>
                  <p>Deployed web servers on Amazon EC2 instances situated behind an Elastic Load Balancer (ELB) to evenly distribute incoming traffic with zero downtime.</p>
                </div>
                <div className="arch-tier-item">
                  <div className="arch-badge">02. Application Layer</div>
                  <p>Managed core business logic using Auto-Scaling EC2 instances that dynamically scale compute capacity up or down based on real-time traffic demand.</p>
                </div>
                <div className="arch-tier-item">
                  <div className="arch-badge">03. Database Layer</div>
                  <p>Implemented Amazon RDS for resilient, multi-AZ relational data storage with encrypted connections, automated backups, and private subnet isolation.</p>
                </div>
              </div>

              <div className="project-tech-pills">
                <span>AWS EC2</span>
                <span>Elastic Load Balancer (ELB)</span>
                <span>Auto-Scaling Groups</span>
                <span>Amazon RDS</span>
                <span>Amazon VPC</span>
                <span>CloudWatch</span>
                <span>Linux</span>
              </div>
            </article>

            {/* Project 2: Automated CI/CD Pipeline */}
            <article className="project-detail-card">
              <div className="project-status-tag">DEVOPS &amp; AUTOMATION</div>
              <h3 className="project-card-title">Continuous Integration &amp; Deployment Pipeline</h3>
              <p className="project-card-description">
                Built an automated CI/CD pipeline from code commit to container deployment. Configured Jenkins webhooks with Git for automated testing, Maven build triggers, Docker image creation, and automated artifact push.
              </p>
              <div className="project-tech-pills">
                <span>Docker</span>
                <span>Jenkins</span>
                <span>Git</span>
                <span>Maven</span>
                <span>CI/CD</span>
                <span>Linux Bash</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT
          ==================================================================== */}
      <section id="contact" className="portfolio-section section-contact-red">
        <div className="section-container">
          <div className="section-header-tag">
            <span className="section-name">CONTACT</span>
          </div>

          <h2 className="section-main-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Open to full-time opportunities, software engineering roles, and innovative cloud projects.
          </p>

          <div className="contact-sections-wrapper">
            {/* Category 1: Direct Reach & Resume */}
            <div className="contact-group-block">
              <span className="contact-group-title">DIRECT REACH &amp; CREDENTIALS</span>
              <div className="contact-cards-cluster">
                {/* Email Card */}
                <div className="contact-card">
                  <div className="contact-icon social-icon email-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-label">EMAIL DIRECTLY</span>
                    <a href="mailto:nandurkaadharsh@gmail.com" className="contact-value link">
                      nandurkaadharsh@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy email to clipboard"
                  >
                    {copied ? '✓ COPIED' : 'COPY'}
                  </button>
                </div>

                {/* Location Card */}
                <div className="contact-card">
                  <div className="contact-icon social-icon location-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-label">LOCATION</span>
                    <span className="contact-value">Hyderabad, Telangana, India</span>
                  </div>
                </div>

                {/* Resume Card */}
                <div className="contact-card resume-download-card">
                  <div className="contact-icon social-icon resume-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-label">RESUME</span>
                    <span className="contact-value">Adharsh Nandurka — MCA (2025)</span>
                  </div>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-pill-btn"
                  >
                    Download PDF ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Category 2: Professional & Developer Profiles */}
            <div className="contact-group-block">
              <span className="contact-group-title">PROFESSIONAL &amp; CODE PROFILES</span>
              <div className="contact-cards-cluster two-col">
                {/* LinkedIn Card */}
                <div className="contact-card social-card">
                  <div className="contact-icon social-icon linkedin-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-label">LINKEDIN PROFILE</span>
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value link"
                    >
                      linkedin.com/in/your-profile
                    </a>
                  </div>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill-btn"
                  >
                    Connect ↗
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="contact-card social-card">
                  <div className="contact-icon social-icon github-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="contact-meta">
                    <span className="contact-label">GITHUB PROFILE</span>
                    <a
                      href="https://github.com/adharshnandurka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value link"
                    >
                      github.com/adharshnandurka
                    </a>
                  </div>
                  <a
                    href="https://github.com/adharshnandurka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill-btn"
                  >
                    Follow ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Footer Bar */}
          <div className="skeleton-footer-bar">
            <span>© {new Date().getFullYear()} NANDURKA ADHARSH. ALL RIGHTS RESERVED.</span>
            <span>HYDERABAD, INDIA • MCA GRADUATE 2025</span>
            <a href="#hero" className="back-top-link">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
