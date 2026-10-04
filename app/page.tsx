'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Loader2,
  Mail,
  Menu,
  Network,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'

const services = [
  { number: '01', title: 'Full-Stack\nApplications', icon: Code2, text: 'Business-ready products with thoughtful interfaces, dependable APIs, and data foundations built to last.', tags: ['Django', 'FastAPI', 'PostgreSQL'] },
  { number: '02', title: 'AI-Integrated\nApplications', icon: Sparkles, text: 'Useful AI experiences that connect models to real workflows, human context, and measurable business value.', tags: ['LLM APIs', 'Conversational AI', 'Python'] },
  { number: '03', title: 'Automations', icon: Workflow, text: 'The repetitive work between your tools, orchestrated into reliable systems your team can trust.', tags: ['n8n', 'APIs', 'Google Workspace'] },
  { number: '04', title: 'Business\nApplications', icon: Network, text: 'Purpose-built systems for operations, scheduling, customer communication, and growth.', tags: ['FastAPI', 'Supabase', 'Telegram'] },
  { number: '05', title: 'Zoho\nDevelopment', icon: Database, text: 'Connected Zoho ecosystems that bring customer, finance, and operations data into focus.', tags: ['Zoho CRM', 'Zoho Books', 'Integrations'] },
]

const projectNavs = [
  { id: 'all', label: 'All Projects' },
  { id: 'academic', label: 'Academic Projects' },
  { id: 'automation', label: 'Automation Projects' },
  { id: 'zoho', label: 'Zoho Projects' },
  { id: 'business', label: 'Business Applications' },
]

const projects = [
  {
    title: 'Restaurant Management System',
    type: 'academic',
    category: 'Academic Project',
    description: 'A complete food ordering platform with role-based auth (Customers, Vendors, Admins), cart checkout, and PostgreSQL backend.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Cloudinary'],
    accent: 'cream',
    link: 'https://github.com/Habibnidal/Restaurant_management_system_using_Django',
    linkText: 'View on GitHub',
    isExternal: true,
  },
  {
    title: 'Veloria – Emotional AI Assistant',
    type: 'academic',
    category: 'Academic Project',
    description: 'Multilingual wellness & emotion-aware assistant generating empathetic responses in English and Malayalam with real-time voice output.',
    tags: ['Python', 'FastAPI', 'LLM APIs', 'gTTS'],
    accent: 'teal',
    link: 'https://github.com/Habibnidal/life_backend',
    linkText: 'View on GitHub',
    isExternal: true,
  },
  {
    title: 'n8n Workflow Automations',
    type: 'automation',
    category: 'Automation Project',
    description: 'Resilient event-driven automation pipelines connecting APIs, webhooks, Google Workspace, and notification channels with error handling.',
    tags: ['n8n', 'APIs', 'Webhooks', 'Workflow Design'],
    accent: 'gold',
    link: '#contact',
    linkText: 'Discuss System',
    isExternal: false,
  },
  {
    title: 'Bill Automation Project',
    type: 'automation',
    category: 'Automation Project',
    description: 'End-to-end invoice automation system with n8n, SHA-256 duplicate checking, AI extraction, and direct draft bill creation in Zoho Books.',
    tags: ['n8n', 'Zoho Books API', 'OpenRouter AI', 'SHA-256'],
    accent: 'teal',
    link: '#contact',
    linkText: 'View Case Study',
    isExternal: false,
  },
  {
    title: 'GST Reconciliation Project',
    type: 'automation',
    category: 'Automation Project',
    description: 'Automated tax ledger reconciliation engine that cross-verifies government GST portal data with purchase registers and highlights discrepancies.',
    tags: ['Python', 'n8n', 'Tax Data Matching', 'Excel / CSV'],
    accent: 'cream',
    link: '#contact',
    linkText: 'View Architecture',
    isExternal: false,
  },
  {
    title: 'Zoho Bigin Logistics CRM & Pipeline',
    type: 'zoho',
    category: 'Zoho Project',
    description: 'Complete CRM migration from Google Sheets to Zoho Bigin for a freight and logistics company. Configured a 6-stage sales pipeline, custom rate-card tracking, Facebook Lead Ads & webform sync, and automated follow-up tasks.',
    tags: ['Zoho Bigin', 'Sales Pipeline', 'Facebook Lead Ads', 'Workflows'],
    accent: 'gold',
    link: '#contact',
    linkText: 'View Case Study',
    isExternal: false,
  },
  {
    title: 'Zoho Bigin Industrial Equipment CRM',
    type: 'zoho',
    category: 'Zoho Project',
    description: 'End-to-end sales CRM in Zoho Bigin Premier for an industrial energy equipment manufacturer. Structured an 8-stage engineered sales pipeline from inbound Email-In to PO, with custom multi-line turbine specs, power output formulas, and stage-transition guards.',
    tags: ['Zoho Bigin Premier', 'Engineered Pipeline', 'Product Line Specs', 'Email-In Sync'],
    accent: 'cream',
    link: '#contact',
    linkText: 'View Implementation',
    isExternal: false,
  },
  {
    title: 'Zoho CRM Enterprise Freight & Books Platform',
    type: 'zoho',
    category: 'Zoho Project',
    description: 'Enterprise-scale Zoho CRM architecture and Bigin migration for a multi-branch freight forwarding and courier firm. Implemented role-gated Blueprints (Sales, Operations, Accounting), automated bidirectional Zoho Books financial sync via custom Deluge functions, and strict GSTIN/E.164 normalization.',
    tags: ['Zoho CRM Enterprise', 'Deluge Functions', 'Zoho Books Sync', 'Blueprint Process'],
    accent: 'teal',
    link: '#contact',
    linkText: 'View Architecture',
    isExternal: false,
  },
  {
    title: 'AI Receptionist',
    type: 'business',
    category: 'Business Application',
    description: 'Voice-enabled AI receptionist and automated appointment scheduler for medical clinics, handling 24/7 calendar reservations and patient inquiries.',
    tags: ['Retell AI', 'FastAPI', 'Supabase', 'Python'],
    accent: 'gold',
    link: '#contact',
    linkText: 'View Case Study',
    isExternal: false,
  },
]

const skillNavs = [
  { id: 'all', label: 'All Tools' },
  { id: 'automation', label: 'Automation Tools' },
  { id: 'development', label: 'Development Tools' },
  { id: 'devops', label: 'DevOps Tools' },
  { id: 'zoho', label: 'Zoho Ecosystem' },
  { id: 'ai-data', label: 'AI & Data Tools' },
]

const skillsData = [
  // Automation Tools
  { name: 'n8n', category: 'automation', role: 'Workflow Orchestration' },
  { name: 'Webhooks', category: 'automation', role: 'Real-Time Triggers' },
  { name: 'API Integrations', category: 'automation', role: 'Cross-System Bridges' },
  { name: 'Process Automation', category: 'automation', role: 'End-to-End Workflows' },
  { name: 'Google Workspace', category: 'automation', role: 'Sheets, Drive, Gmail' },

  // Development Tools
  { name: 'Python', category: 'development', role: 'Core Backend Language' },
  { name: 'FastAPI', category: 'development', role: 'High-Performance APIs' },
  { name: 'Django', category: 'development', role: 'Full-Stack Apps & ORM' },
  { name: 'JavaScript', category: 'development', role: 'Modern Web & UI' },
  { name: 'TypeScript', category: 'development', role: 'Type-Safe Architecture' },
  { name: 'PostgreSQL', category: 'development', role: 'Relational Database' },
  { name: 'REST APIs', category: 'development', role: 'API Design & Contracts' },
  { name: 'SQL', category: 'development', role: 'Queries & Data Schemas' },

  // DevOps Tools
  { name: 'Docker', category: 'devops', role: 'Containerization & Envs' },
  { name: 'GitHub Actions', category: 'devops', role: 'CI / CD Pipelines' },
  { name: 'Vercel', category: 'devops', role: 'Frontend & Edge Hosting' },
  { name: 'Render', category: 'devops', role: 'Cloud Service Deployment' },
  { name: 'Cloudflare', category: 'devops', role: 'DNS, SSL & Edge' },
  { name: 'Git & GitHub', category: 'devops', role: 'Version Control' },

  // Zoho Ecosystem
  { name: 'Zoho CRM', category: 'zoho', role: 'Enterprise Data Architecture' },
  { name: 'Zoho Bigin', category: 'zoho', role: 'Sales Pipeline Velocity' },
  { name: 'Zoho Books', category: 'zoho', role: 'Financial & Invoice APIs' },
  { name: 'Deluge', category: 'zoho', role: 'Zoho Automation Scripts' },

  // AI & Data Tools
  { name: 'AI / LLMs', category: 'ai-data', role: 'Model Orchestration' },
  { name: 'Power BI', category: 'ai-data', role: 'Interactive Dashboards' },
  { name: 'Pandas & NumPy', category: 'ai-data', role: 'Data Analysis & ETL' },
  { name: 'Prompt Engineering', category: 'ai-data', role: 'Context Optimization' },
  { name: 'gTTS / Speech AI', category: 'ai-data', role: 'Voice & Conversational AI' },
]

const skills = ['Python', 'FastAPI', 'Django', 'JavaScript', 'TypeScript', 'PostgreSQL', 'n8n', 'AI / LLMs', 'REST APIs', 'Webhooks', 'Zoho CRM', 'Docker', 'Cloudflare', 'GitHub Actions', 'Vercel']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [motionOn, setMotionOn] = useState(true)
  const [projectCategory, setProjectCategory] = useState('all')
  const [skillCategory, setSkillCategory] = useState('all')

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.service) {
      setSubmitStatus('error')
      setStatusMessage('Please fill in your name, email, and what you need.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const scriptUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL?.trim() ||
      'https://script.google.com/macros/s/AKfycbzAjslOUdRu-PdTkcGEEk8l_3l1yH4FIxRcb7-Igza7gCmV-sWIpOT36kHxz75dNbNgVQ/exec'

    try {
      // Maps directly to Google Sheet headers:
      // NAME, EMAIL, WHAT DO YOU NEED ?, BRIEF DESCRIPTION
      const payload = new URLSearchParams()
      payload.append('NAME', formData.name.trim())
      payload.append('EMAIL', formData.email.trim())
      payload.append('WHAT DO YOU NEED ?', formData.service)
      payload.append('BRIEF DESCRIPTION', formData.description.trim())

      // Also include lowercase aliases for safety
      payload.append('name', formData.name.trim())
      payload.append('email', formData.email.trim())
      payload.append('service', formData.service)
      payload.append('description', formData.description.trim())

      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: payload.toString(),
        })
      } else {
        // Fallback delay if web app URL is not yet added to .env.local
        await new Promise((r) => setTimeout(r, 800))
      }

      setSubmitStatus('success')
      setStatusMessage("Thank you! Your message has been sent. I'll get back to you shortly.")
      setFormData({ name: '', email: '', service: '', description: '' })
    } catch (err) {
      console.error('Contact submission error:', err)
      setSubmitStatus('error')
      setStatusMessage('Could not send message. Please reach out directly via WhatsApp or Email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectSliderRef = useRef<HTMLDivElement>(null)

  const handleSelectProjectCategory = (id: string) => {
    setProjectCategory(id)
    if (projectSliderRef.current) {
      projectSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const filteredProjects = projectCategory === 'all'
    ? projects
    : projects.filter((p) => p.type === projectCategory)

  const filteredSkills = skillCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === skillCategory)

  return (
    <main className={motionOn ? 'site-shell' : 'site-shell reduced-motion'}>
      <div className="grain" aria-hidden="true" />
      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="Habib Nidal home"><span>HN</span><strong>Habib Nidal</strong></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Services', 'Projects', 'Experience', 'Skills'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a Project <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="status-dot" />Available for Projects &amp; Opportunities</div>
          <p className="kicker">Software Developer <i>/</i> AI &amp; Automation</p>
          <h1>I build software solutions that turn <em>business ideas</em> and problems into practical digital products.</h1>
          <p className="hero-description">Building software, AI solutions &amp; business automation for teams ready to work smarter.</p>
          <div className="hero-actions"><a href="#contact" className="button button-gold">Start a Project <ArrowUpRight size={17} /></a><a href="#projects" className="button button-ghost">View My Work <span>↘</span></a></div>
          <div className="hero-foot"><span>Based in Kerala, India</span><span className="line" /><span>Working globally</span></div>
        </div>
        <div className="hero-visual reveal delay-2" aria-label="Habib Nidal portrait workspace">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-card">
            <div className="portrait-glow" />
            <Image
              src="/profile.png"
              alt="Habib Nidal working on software"
              fill
              priority
              className="portrait-image"
              sizes="(max-width: 800px) 72vw, 345px"
            />
            <div className="portrait-overlay" />
            <div className="portrait-label">HN <span>01 / 06</span></div>
          </div>
          {/* Floating Pill Badges around Profile Photo */}
          <div className="code-float hero-pill pill-systems">
            <span className="code-dot" />
            <span>systems</span>
            <b>that work.</b>
          </div>

          <a href="#services" className="hero-pill pill-ai" onClick={() => setActiveService(1)} title="Explore AI-Integrated Applications">
            <Sparkles size={12} className="pill-icon" />
            <span>AI-Integrated Applications</span>
          </a>

          <a href="#services" className="hero-pill pill-automation" onClick={() => setActiveService(2)} title="Explore Automations">
            <Workflow size={12} className="pill-icon" />
            <span>Automations</span>
          </a>

          <a href="#services" className="hero-pill pill-fullstack" onClick={() => setActiveService(0)} title="Explore Full-Stack Applications">
            <Code2 size={12} className="pill-icon" />
            <span>Full-Stack Applications</span>
          </a>

          <a href="#services" className="hero-pill pill-business" onClick={() => setActiveService(3)} title="Explore Business Applications">
            <Network size={12} className="pill-icon" />
            <span>Business Applications</span>
          </a>

          <a href="#services" className="hero-pill pill-zoho" onClick={() => setActiveService(4)} title="Explore Zoho Development">
            <Database size={12} className="pill-icon" />
            <span>Zoho Development</span>
          </a>

          <div className="visual-caption"><span>01</span><span>Practical by design</span></div>
        </div>
      </section>

      <section className="tech-strip" aria-label="Technology stack">{['Python', 'FastAPI', 'Django', 'JavaScript', 'PostgreSQL', 'n8n', 'Zoho', 'AI'].map((tech) => <span key={tech}>{tech}<i>↗</i></span>)}</section>

      <section className="section about" id="about"><div className="section-intro reveal"><p className="section-label">02 / About</p><h2>Good software starts with <em>understanding.</em></h2></div><div className="about-grid"><div className="about-statement reveal"><p>I work at the intersection of software, AI, and business operations. My job is to make complex things feel simple for the people using them and the businesses depending on them.</p><a href="#experience" className="text-link">More about my journey <ArrowUpRight size={16} /></a></div><div className="principles reveal delay-1"><div><span>01</span><h3>Listen first</h3><p>Every strong solution begins with the right questions.</p></div><div><span>02</span><h3>Build with intent</h3><p>Technology should solve a real problem, not add another layer.</p></div><div><span>03</span><h3>Leave it better</h3><p>Clean systems, clear handoffs, and room to grow.</p></div></div></div></section>

      <section className="dark-section services" id="services"><div className="section-intro light reveal"><p className="section-label">03 / Services</p><h2>From business problems<br />to <em>working solutions.</em></h2></div><div className="service-layout"><div className="service-list">{services.map((service, index) => { const Icon = service.icon; return <button key={service.number} className={activeService === index ? 'service-row active' : 'service-row'} onClick={() => setActiveService(index)}><span>{service.number}</span><span className="service-title">{service.title.split('\n').map((line) => <span key={line}>{line}</span>)}</span><Icon /><ChevronDown className="service-chevron" /></button> })}</div><div className="service-detail"><span className="detail-mark">0{activeService + 1}</span><h3>{services[activeService].title.split('\n').map((line) => <span key={line}>{line} </span>)}</h3><p>{services[activeService].text}</p><div className="tag-list">{services[activeService].tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="text-link light-link">Discuss this service <ArrowUpRight size={16} /></a></div></div></section>

      <section className="section projects" id="projects">
        <div className="section-intro split reveal">
          <div>
            <p className="section-label">04 / Selected work</p>
            <h2>Built for the <em>real world.</em></h2>
          </div>
          <a href="#contact" className="text-link">Start a Project <ArrowUpRight size={16} /></a>
        </div>

        {/* Project Navigation Tabs */}
        <div className="project-nav-bar reveal delay-1">
          <div className="project-nav-wrap" role="tablist" aria-label="Project categories">
            {projectNavs.map((nav) => {
              const count = nav.id === 'all'
                ? projects.length
                : projects.filter((p) => p.type === nav.id).length
              const isActive = projectCategory === nav.id
              return (
                <button
                  key={nav.id}
                  role="tab"
                  aria-selected={isActive}
                  className={isActive ? 'project-nav-btn active' : 'project-nav-btn'}
                  onClick={() => handleSelectProjectCategory(nav.id)}
                >
                  {isActive && <span className="nav-pill-dot" />}
                  <span>{nav.label}</span>
                  <span className="project-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Fully Horizontal Project Slider */}
        <div className="project-slider-wrapper reveal delay-2">
          <div
            className="project-slider"
            ref={projectSliderRef}
            tabIndex={0}
            role="region"
            aria-label="Horizontal projects list"
          >
            {filteredProjects.map((project, index) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-card-header">
                  <span className="project-badge">{project.category}</span>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <b key={tag}>{tag}</b>)}
                  </div>
                  <div className="project-footer">
                    <a
                      href={project.link}
                      target={project.isExternal ? '_blank' : undefined}
                      rel={project.isExternal ? 'noreferrer' : undefined}
                      aria-label={`View ${project.title}`}
                    >
                      <span>{project.linkText}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Hint */}
        <div className="slider-hint">
          <span className="slider-hint-text">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
          <span className="slider-hint-drag">← Swipe or scroll horizontally to explore →</span>
        </div>
      </section>

      <section className="dark-section experience" id="experience"><div className="experience-head reveal"><p className="section-label">05 / Experience</p><h2>A career in <em>building.</em></h2><p>Working across product development, automation, and AI to help businesses move forward.</p></div><div className="timeline"><div className="timeline-line" /><div className="timeline-item reveal"><span className="timeline-year">2026 - Now</span><div><span className="role">System Engineer</span><h3>HyprFlow Business Solutions</h3><p>Building business applications, intelligent automations, and connected systems that turn operational friction into momentum.</p><small>Kannur, Kerala</small></div></div><div className="timeline-item reveal delay-1"><span className="timeline-year">2025 - 2026</span><div><span className="role">Full Stack Developer</span><h3>Uptrail Ltd</h3><p>Developing full-stack products and automation workflows with a focus on practical user experiences and reliable delivery.</p><small>London, UK</small></div></div></div></section>

      <section className="section skills" id="skills">
        <div className="section-intro reveal">
          <p className="section-label">06 / Toolkit</p>
          <h2>The tools behind<br /><em>the work.</em></h2>
        </div>

        {/* Toolkit Navigation Tabs */}
        <div className="project-nav-wrap reveal delay-1" role="tablist" aria-label="Tool categories">
          {skillNavs.map((nav) => {
            const count = nav.id === 'all'
              ? skillsData.length
              : skillsData.filter((s) => s.category === nav.id).length
            const isActive = skillCategory === nav.id
            return (
              <button
                key={nav.id}
                role="tab"
                aria-selected={isActive}
                className={isActive ? 'project-nav-btn active' : 'project-nav-btn'}
                onClick={() => setSkillCategory(nav.id)}
              >
                {isActive && <span className="nav-pill-dot" />}
                <span>{nav.label}</span>
                <span className="project-count">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="skills-layout">
          <p className="skills-note reveal">A considered toolkit shaped by the problems I solve from first API call to final deployment.</p>
          <div className="skill-cloud reveal delay-1">
            {filteredSkills.map((skill) => (
              <span key={skill.name} className="skill-chip">
                <strong>{skill.name}</strong>
                <small>{skill.role}</small>
                <i>↗</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-copy reveal"><p className="section-label">07 / Contact</p><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><p>Tell me what you&apos;re trying to build, automate, or improve. I&apos;ll help turn the idea into a practical digital solution.</p><div className="contact-links"><a href="mailto:habibnidal2003@gmail.com"><Mail size={16} />habibnidal2003@gmail.com</a><a href="https://www.linkedin.com/in/habibnidal" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span>LinkedIn</a><a href="https://github.com/habibnidal" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span>GitHub</a><a href="https://wa.me/917306020083" target="_blank" rel="noreferrer"><span aria-hidden="true">↗</span>WhatsApp</a></div></div><form className="contact-form reveal delay-1" onSubmit={handleContactSubmit}><label>Name<input required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={isSubmitting} /></label><label>Email<input required type="email" placeholder="you@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={isSubmitting} /></label><label>What do you need?<select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} disabled={isSubmitting}><option value="" disabled>Select a service</option><option value="AI Application">AI Application</option><option value="Automation">Automation</option><option value="Full-Stack Application">Full-Stack Application</option><option value="Business Application">Business Application</option><option value="Zoho Development">Zoho Development</option></select></label><label>Brief description<textarea rows={4} placeholder="Tell me a little about the problem..." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} disabled={isSubmitting} /></label>{submitStatus === 'success' && (<div className="form-status-msg success"><CheckCircle2 size={18} className="status-icon" /><span>{statusMessage}</span></div>)}{submitStatus === 'error' && (<div className="form-status-msg error"><AlertCircle size={18} className="status-icon" /><span>{statusMessage}</span></div>)}<button className="button button-gold" type="submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>{isSubmitting ? (<>Sending... <Loader2 size={16} className="animate-spin" /></>) : (<>Submit Inquiry <ArrowUpRight size={17} /></>)}</button></form></section>

      <footer><div className="footer-brand"><span>HN</span><div><strong>Habib Nidal</strong><small>Software Developer / AI &amp; Automation</small></div></div><div className="footer-meta"><span>© 2026 Habib Nidal</span><span>Built with clarity &amp; intent</span><button onClick={() => setMotionOn(!motionOn)}>Motion: {motionOn ? 'On' : 'Reduced'}</button></div></footer>
    </main>
  )
}
