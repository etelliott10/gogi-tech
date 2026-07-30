const discoveryEmail =
  "mailto:hello@gogitech.com?subject=Discovery%20call%20with%20Gogi%20Tech";

const services = [
  {
    number: "01",
    title: "Connect your systems",
    description:
      "Your scheduling, email, CRM, forms, and accounting tools should work together. We connect them so information moves automatically—without duplicate entry.",
    outcome: "One connected workflow",
  },
  {
    number: "02",
    title: "Launch technology faster",
    description:
      "From choosing the right tools to setup, migration, team training, and launch, we help you put new technology to work without a drawn-out implementation.",
    outcome: "From idea to daily use",
  },
  {
    number: "03",
    title: "Automate your sales process",
    description:
      "Capture leads, qualify inquiries, follow up, create quotes, and keep your CRM current—without asking your team to remember every next step.",
    outcome: "More consistent follow-up",
  },
];

const examples = [
  {
    industry: "Construction",
    flow: "Inquiry → estimate → follow-up",
  },
  {
    industry: "Dental & Orthopedics",
    flow: "Intake → scheduling → reminders",
  },
  {
    industry: "Local services",
    flow: "Booking → payment → review request",
  },
  {
    industry: "Owner-led teams",
    flow: "New hire → training → progress",
  },
];

const steps = [
  {
    number: "1",
    title: "Find the friction",
    eyebrow: "Discovery + workflow assessment",
    copy: "We sit down with you and your team, map the work as it happens today, and identify the tasks worth automating first.",
  },
  {
    number: "2",
    title: "Build what helps",
    eyebrow: "Fixed-scope implementation",
    copy: "We connect your tools, build the workflow, or create the internal software your business actually needs.",
  },
  {
    number: "3",
    title: "Keep it working",
    eyebrow: "Ongoing technology partner",
    copy: "Choose continued support, monitoring, training, and improvements as your business and systems evolve.",
  },
];

function SparkMark() {
  return (
    <span className="spark-mark" aria-hidden="true">
      <span />
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gogi Tech home">
          <SparkMark />
          <span>Gogi Tech</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#fit">Who we help</a>
        </nav>
        <a className="button button-small" href={discoveryEmail}>
          Book a call <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Practical automation for real-world businesses
          </p>
          <h1>
            Less busywork.
            <br />
            <em>Better business.</em>
          </h1>
          <p className="hero-intro">
            Gogi Tech helps owner-led companies automate repetitive work,
            connect outdated systems, and build practical AI-powered tools—so
            your team can focus on the work that matters.
          </p>
          <div className="hero-actions">
            <a className="button" href={discoveryEmail}>
              Book a discovery call <Arrow />
            </a>
            <a className="text-link" href="#services">
              See what we can improve <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="reassurance">
            No jargon. No bloated software. Just a clear plan to make the work
            easier.
          </p>
        </div>

        <div className="workflow-card" aria-label="Example automated workflow">
          <div className="workflow-topline">
            <span>WORKFLOW 04</span>
            <span className="live-dot">ACTIVE</span>
          </div>
          <div className="workflow-title">
            <span className="workflow-icon">↳</span>
            <div>
              <strong>New customer inquiry</strong>
              <small>Every lead gets a next step</small>
            </div>
          </div>
          <div className="workflow-path">
            <div className="flow-row">
              <span className="flow-check">✓</span>
              <div>
                <strong>Form received</strong>
                <small>Website · 9:42 AM</small>
              </div>
              <span className="flow-status">DONE</span>
            </div>
            <div className="flow-line" />
            <div className="flow-row">
              <span className="flow-check">✓</span>
              <div>
                <strong>Customer record created</strong>
                <small>Contact details organized</small>
              </div>
              <span className="flow-status">DONE</span>
            </div>
            <div className="flow-line" />
            <div className="flow-row current">
              <span className="flow-check">→</span>
              <div>
                <strong>Personal follow-up sent</strong>
                <small>Owner notified automatically</small>
              </div>
              <span className="flow-status">NOW</span>
            </div>
          </div>
          <div className="workflow-result">
            <span>TIME SAVED</span>
            <strong>45 min / lead</strong>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Common business challenges">
        <div className="signal-track">
          <span>Still copying data between systems?</span>
          <span>Following up by hand?</span>
          <span>Training from the same checklist?</span>
          <span>There&apos;s a better workflow.</span>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we improve</p>
            <h2>Make the tools you have work like a team.</h2>
          </div>
          <p>
            We start with the work slowing you down, then use automation, AI,
            and custom software only where they create a meaningful result.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-outcome">
                <span className="mini-spark">✦</span>
                {service.outcome}
              </div>
            </article>
          ))}
        </div>
        <div className="custom-build">
          <div>
            <span className="custom-tag">WHEN OFF-THE-SHELF ISN&apos;T ENOUGH</span>
            <h3>We can build the missing piece.</h3>
          </div>
          <p>
            Need an internal dashboard, a job-tracking tool, or training
            software built around the way your team works? We can design and
            deliver that too.
          </p>
        </div>
      </section>

      <section className="fit section-shell" id="fit">
        <div className="fit-copy">
          <p className="eyebrow">Built for the work happening off-screen</p>
          <h2>You know your business. We make the technology catch up.</h2>
          <p>
            Gogi Tech works best with hands-on owners and teams who have
            outgrown spreadsheets, disconnected tools, and “the way we&apos;ve
            always done it.”
          </p>
          <ul className="fit-list">
            <li>
              <span>✓</span> You see repetitive work eating into the day
            </li>
            <li>
              <span>✓</span> Your information lives in too many places
            </li>
            <li>
              <span>✓</span> You want practical help—not another software pitch
            </li>
          </ul>
        </div>
        <div className="example-list">
          {examples.map((example) => (
            <div className="example-row" key={example.industry}>
              <span>{example.industry}</span>
              <strong>{example.flow}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-shell">
          <div className="section-heading light">
            <div>
              <p className="eyebrow">One partner, three ways to work</p>
              <h2>Start focused. Build quickly. Improve over time.</h2>
            </div>
            <p>
              Every engagement begins with understanding the work—not selling
              you a predetermined tool.
            </p>
          </div>
          <div className="step-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <p className="step-eyebrow">{step.eyebrow}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
          <div className="deliverables">
            <p>Depending on the project, you walk away with:</p>
            <div>
              <span>Workflow plan</span>
              <span>Connected systems</span>
              <span>Custom automations</span>
              <span>Internal tools</span>
              <span>Team training</span>
              <span>Launch support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-mark">
          <SparkMark />
        </div>
        <p className="eyebrow">Let&apos;s find your first quick win</p>
        <h2>What would your team do with a few hours back every week?</h2>
        <p>
          Tell us what feels slower, harder, or more repetitive than it should.
          We&apos;ll help you see what can be improved.
        </p>
        <div className="contact-actions">
          <a className="button" href={discoveryEmail}>
            Book a discovery call <Arrow />
          </a>
          <a className="text-link" href="mailto:hello@gogitech.com">
            Or email hello@gogitech.com
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to top">
          <SparkMark />
          <span>Gogi Tech</span>
        </a>
        <p>Practical automation for businesses ready to work smarter.</p>
        <span>© {new Date().getFullYear()} Gogi Tech</span>
      </footer>
    </main>
  );
}
