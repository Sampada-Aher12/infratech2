import './index.css';


function App() {
  return (
    <>  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Infravora Technologies</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  {/* NAVBAR */}
  <nav>
    <div className="logo">Infravora Technologies</div>
    <button className="hamburger" id="hamburger" aria-label="Toggle menu">
      <span />
      <span />
      <span />
    </button>
    <ul id="nav-menu">
      <li>
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="nav-link">
          Services
        </a>
      </li>
      <li>
        <a href="#technologies" className="nav-link">
          Technologies
        </a>
      </li>
      <li>
        <a href="#projects" className="nav-link">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  {/* HERO SECTION */}
  <section className="hero">
    <div>
      <h3 className="tagline">Cloud • Linux • DevOps • Automation</h3>
      <h1>
        Infravora <span>Technologies</span>
      </h1>
      <p>
        Powering Reliable Cloud Infrastructure with Linux, AWS, Kubernetes,
        OpenShift, Networking and DevOps Automation Services for Startups, SMEs
        and Enterprises.
      </p>
      <a href="#contact" className="btn">
        Get Free Consultation
      </a>
    </div>
  </section>
  {/* ABOUT SECTION */}
  <section id="about">
    <h2 className="title">About Us</h2>
    <p className="about">
      Infravora Technologies provides Linux Administration, AWS Cloud Solutions,
      Kubernetes, OpenShift, Networking, DevOps Automation, Infrastructure
      Monitoring and Cloud Migration Services. We help businesses build secure,
      scalable and highly available cloud environments while reducing
      operational complexity and infrastructure costs.
    </p>
    <div className="stats">
      <div className="stat">
        <h3>24/7</h3>
        <p>Support Available</p>
      </div>
      <div className="stat">
        <h3>99.9%</h3>
        <p>Uptime Goal</p>
      </div>
      <div className="stat">
        <h3>50+</h3>
        <p>Servers Managed</p>
      </div>
      <div className="stat">
        <h3>RHCSA</h3>
        <p>Certified Expertise</p>
      </div>
    </div>
  </section>
  {/* SERVICES SECTION */}
  <section id="services">
    <h2 className="title">Our Services</h2>
    <div className="services">
      <div className="card">
        <h3>Linux Administration</h3>
        <p>
          Server Deployment, Security Hardening, Troubleshooting and
          Maintenance.
        </p>
      </div>
      <div className="card">
        <h3>AWS Cloud Solutions</h3>
        <p>EC2, VPC, IAM, RDS, S3, CloudFront and Cost Optimization.</p>
      </div>
      <div className="card">
        <h3>Kubernetes &amp; OpenShift</h3>
        <p>
          Container Deployment, Monitoring, Scaling and Cluster Administration.
        </p>
      </div>
      <div className="card">
        <h3>DevOps Automation</h3>
        <p>Docker, Jenkins, GitHub Actions, CI/CD Pipeline Automation.</p>
      </div>
      <div className="card">
        <h3>Networking</h3>
        <p>VPN, DNS, Firewall Configuration and Load Balancer Setup.</p>
      </div>
      <div className="card">
        <h3>Cloud Migration</h3>
        <p>Migrate On-Premises Infrastructure to Modern Cloud Platforms.</p>
      </div>
    </div>
  </section>
  {/* TECHNOLOGIES SECTION */}
  <section id="technologies">
    <h2 className="title">Technologies</h2>
    <p
      style={{
        textAlign: "center",
        color: "#94a3b8",
        marginBottom: 30,
        fontSize: 15
      }}
    >
      Click on any technology to learn more
    </p>
    <div className="tech">
      <div className="tech-item" data-tech="linux">
        <div className="tech-icon">🐧</div>
        <div className="tech-name">Linux</div>
      </div>
      <div className="tech-item" data-tech="aws">
        <div className="tech-icon">☁️</div>
        <div className="tech-name">AWS</div>
      </div>
      <div className="tech-item" data-tech="ccna">
        <div className="tech-icon">🌐</div>
        <div className="tech-name">CCNA</div>
      </div>
      <div className="tech-item" data-tech="kubernetes">
        <div className="tech-icon">⚙️</div>
        <div className="tech-name">Kubernetes</div>
      </div>
      <div className="tech-item" data-tech="openshift">
        <div className="tech-icon">🔴</div>
        <div className="tech-name">OpenShift</div>
      </div>
      <div className="tech-item" data-tech="ansible">
        <div className="tech-icon">🤖</div>
        <div className="tech-name">Ansible</div>
      </div>
      <div className="tech-item" data-tech="scripting">
        <div className="tech-icon">📜</div>
        <div className="tech-name">Scripting</div>
      </div>
      <div className="tech-item" data-tech="mysql">
        <div className="tech-icon">🗄️</div>
        <div className="tech-name">MySQL</div>
      </div>
      <div className="tech-item" data-tech="github-actions">
        <div className="tech-icon">🔄</div>
        <div className="tech-name">GitHub Actions</div>
      </div>
      <div className="tech-item" data-tech="ubuntu">
        <div className="tech-icon">🟠</div>
        <div className="tech-name">Ubuntu</div>
      </div>
      <div className="tech-item" data-tech="grafana">
        <div className="tech-icon">📊</div>
        <div className="tech-name">Grafana</div>
      </div>
      <div className="tech-item" data-tech="nginx">
        <div className="tech-icon">🟩</div>
        <div className="tech-name">NGINX</div>
      </div>
    </div>
  </section>
  {/* TECH MODAL */}
  <div className="modal-overlay" id="modal-overlay">
    <div className="modal" id="tech-modal">
      <button className="modal-close" id="modal-close">
        ✕
      </button>
      <div className="modal-icon" id="modal-icon" />
      <h2 className="modal-title" id="modal-title" />
      <p className="modal-category" id="modal-category" />
      <p className="modal-desc" id="modal-desc" />
      <div className="modal-tags" id="modal-tags" />
      <div className="modal-use" id="modal-use" />
    </div>
  </div>
  {/* WHY CHOOSE US */}
  <section>
    <h2 className="title">Why Choose Us</h2>
    <div className="services">
      <div className="card">
        <h3>24/7 Monitoring</h3>
        <p>Continuous infrastructure monitoring and rapid incident response.</p>
      </div>
      <div className="card">
        <h3>Cloud Security</h3>
        <p>
          Industry-standard security practices, backup and disaster recovery.
        </p>
      </div>
      <div className="card">
        <h3>Certified Engineers</h3>
        <p>RHCSA, Linux, AWS, Kubernetes and DevOps expertise.</p>
      </div>
      <div className="card">
        <h3>Cost Optimization</h3>
        <p>Reduce cloud expenses while improving performance.</p>
      </div>
    </div>
  </section>
  {/* CERTIFICATIONS */}
  <section id="certifications">
    <h2 className="title">Certifications</h2>
    <div className="certifications">
      <div className="cert">
        <h3>RHCSA Certified</h3>
        <p>Red Hat Certified System Administrator</p>
      </div>
      <div className="cert">
        <h3>AWS Cloud Training</h3>
        <p>Cloud Infrastructure &amp; Architecture</p>
      </div>
      <div className="cert">
        <h3>Linux Administration</h3>
        <p>Enterprise Linux Management</p>
      </div>
      <div className="cert">
        <h3>DevOps Automation</h3>
        <p>CI/CD &amp; Infrastructure Automation</p>
      </div>
    </div>
  </section>
  {/* PROJECTS */}
  <section id="projects">
    <h2 className="title">Projects</h2>
    <div className="projects">
      <div className="project">
        <h3>Serverless Job Portal on AWS</h3>
        <p>
          Built a secure, scalable serverless AWS application using Lambda, API
          Gateway, S3, and IAM for 100+ users.
        </p>
      </div>
      <div className="project">
        <h3>AWS Three-Tier Architecture</h3>
        <p>
          VPC, Load Balancer, EC2 and RDS deployment with high availability.
        </p>
      </div>
      <div className="project">
        <h3>Kubernetes Cluster Setup</h3>
        <p>Production-ready multi-node cluster with monitoring and scaling.</p>
      </div>
      <div className="project">
        <h3>CI/CD Automation Pipeline</h3>
        <p>GitHub, Jenkins and Docker based automated deployment workflow.</p>
      </div>
    </div>
  </section>
  {/* PRICING */}
  <section id="pricing">
    <h2 className="title">Pricing Plans</h2>
    <div className="pricing">
      <div className="price-card">
        <h3>Starter</h3>
        <div className="price">₹5K</div>
        <p>Linux Support &amp; Troubleshooting</p>
      </div>
      <div className="price-card">
        <h3>Growth</h3>
        <div className="price">₹15K</div>
        <p>AWS Management + Monitoring</p>
      </div>
      <div className="price-card">
        <h3>Scale</h3>
        <div className="price">₹30K</div>
        <p>24/7 Cloud &amp; DevOps Support</p>
      </div>
    </div>
  </section>
  {/* CONTACT */}
  <section id="contact">
    <h2 className="title">Contact Us</h2>
    <div className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="text" placeholder="Company Name" />
      <textarea
        rows={6}
        placeholder="Tell us about your project"
        defaultValue={""}
      />
      <button>Send Inquiry</button>
    </div>
    <div className="contact">
      <p>📧 support.infrastack24@gmail.com</p>
      <p>📞 +91 78208 98344</p>
      <p>🌐 Linux • AWS • Kubernetes • OpenShift</p>
    </div>
  </section>
  {/* FOOTER */}
  <footer>
    <h3>Infravora Technologies</h3>
    <p>Cloud • Linux • AWS • Kubernetes • OpenShift</p>
    <br />
    <p>support.infrastack24@gmail.com</p>
    <br />
    <p>© 2026 All Rights Reserved</p>
  </footer>
  {/* WHATSAPP BUTTON */}
  <a href="https://wa.me/917820898344" className="whatsapp" target="_blank">
    💬 Chat With Us
  </a>
</>


    
  );
}

export default App;

