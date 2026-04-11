export type ServiceSlug = 'ai-agents' | 'automation' | 'robotics' | 'web-development';

export interface ServiceEntry {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  longDescription: string;
  approach: string[];
  deliverables: string[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
  caseStudyIds: string[];
}

export interface CaseStudyEntry {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  serviceTypes: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  testimonial?: { quote: string; name: string; title: string };
  techUsed: string[];
}

export const services: ServiceEntry[] = [
  {
    slug: 'ai-agents',
    title: 'AI Agents',
    shortDescription: 'Custom intelligent agents that automate decisions and execution.',
    longDescription:
      'We design and deploy role-specific AI agents that understand your workflows, integrate with your stack, and operate with controlled autonomy.',
    approach: ['Discovery and workflow mapping', 'Agent architecture and guardrails', 'Integrations and model orchestration', 'Monitoring and continuous optimization'],
    deliverables: ['Agent specification and prompts', 'Integrated tooling and APIs', 'Admin dashboard for oversight', 'Operational playbook and handoff'],
    techStack: ['OpenAI', 'LangChain', 'PostgreSQL', 'Vercel'],
    faqs: [
      { question: 'How fast can we launch?', answer: 'Most pilot agents launch in 2-4 weeks depending on integration complexity.' },
      { question: 'Do agents replace employees?', answer: 'No. They remove repetitive work so your team can focus on higher-leverage tasks.' }
    ],
    caseStudyIds: ['acme-ai']
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription: 'End-to-end workflow automation across your existing systems.',
    longDescription:
      'From lead routing to invoicing to operations workflows, we orchestrate reliable automation pipelines that eliminate bottlenecks.',
    approach: ['Process audit', 'Automation blueprint', 'No-code + code implementation', 'QA, observability, and failover design'],
    deliverables: ['Workflow maps', 'Automated workflows', 'Error alerts and retries', 'Team training'],
    techStack: ['n8n', 'Make', 'Zapier', 'Custom Node services'],
    faqs: [
      { question: 'Can this work with legacy software?', answer: 'Yes. We combine direct APIs with middleware and browser-based automation when needed.' },
      { question: 'Do you maintain automations?', answer: 'Yes. We offer managed support and monthly optimization retainers.' }
    ],
    caseStudyIds: ['ops-flow']
  },
  {
    slug: 'robotics',
    title: 'Robotics',
    shortDescription: 'Physical automation integration for modern operations.',
    longDescription:
      'We integrate robotics systems with software operations for safer, faster, and more consistent physical workflows.',
    approach: ['On-site process analysis', 'Hardware and software integration', 'Control and safety design', 'Deployment and operator enablement'],
    deliverables: ['Systems architecture', 'Control integrations', 'Safety and fail-safe plans', 'Operator training'],
    techStack: ['ROS', 'Python', 'MQTT', 'PLC integrations'],
    faqs: [
      { question: 'Do you sell robots directly?', answer: 'We are implementation-first and can source and integrate best-fit hardware vendors.' },
      { question: 'Can you start with one station?', answer: 'Yes. We recommend piloting one high-impact process first.' }
    ],
    caseStudyIds: ['line-robotics']
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'High-performance websites engineered to convert.',
    longDescription:
      'We build conversion-focused websites and web apps with premium UX, strong technical SEO, and measurable business outcomes.',
    approach: ['Messaging and conversion planning', 'Design and prototype', 'Build and performance optimization', 'Analytics and testing'],
    deliverables: ['Design system', 'Production website', 'CMS or content workflows', 'Analytics dashboard'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostHog'],
    faqs: [
      { question: 'Can you migrate our existing site?', answer: 'Yes. We handle staged migration and redirect strategies for SEO continuity.' },
      { question: 'Do you do CRO testing?', answer: 'Yes. We run iterative A/B tests and funnel optimization experiments.' }
    ],
    caseStudyIds: ['site-convert']
  }
];

export const caseStudies: CaseStudyEntry[] = [
  {
    id: 'acme-ai',
    slug: 'acme-ai-support-agent',
    clientName: 'Acme Logistics',
    industry: 'Logistics',
    serviceTypes: ['AI Agents', 'Automation'],
    challenge: 'High ticket volumes and delayed operations escalations were reducing CSAT and overloading support.',
    solution:
      'Gogi Tech built a triage + execution agent that classified requests, resolved routine tasks, and escalated edge cases with full context.',
    results: [
      { label: 'Ticket Resolution Speed', value: '3.2x faster' },
      { label: 'Support Cost Reduction', value: '41%' },
      { label: 'Client Retention', value: '100%' }
    ],
    testimonial: {
      quote: 'Gogi delivered practical AI that worked in our ops stack from day one.',
      name: 'Alicia Park',
      title: 'COO, Acme Logistics'
    },
    techUsed: ['OpenAI', 'PostgreSQL', 'n8n', 'Slack']
  },
  {
    id: 'ops-flow',
    slug: 'ops-flow-automation-overhaul',
    clientName: 'Northline Supply',
    industry: 'Manufacturing',
    serviceTypes: ['Automation'],
    challenge: 'Manual order entry and disconnected systems caused delays and frequent fulfillment errors.',
    solution: 'Implemented event-driven workflow automation across CRM, ERP, and warehouse operations.',
    results: [
      { label: 'Order Processing Time', value: '67% lower' },
      { label: 'Error Rate', value: '52% lower' },
      { label: 'Team Productivity', value: '+38%' }
    ],
    techUsed: ['Make', 'ERP API', 'Webhook Bus']
  },
  {
    id: 'site-convert',
    slug: 'saas-site-conversion-rebuild',
    clientName: 'PulseOps',
    industry: 'B2B SaaS',
    serviceTypes: ['Web Development'],
    challenge: 'Website traffic was healthy but demo conversion rates were weak across key funnels.',
    solution: 'Rebuilt site architecture, messaging, and booking funnel with strong CRO instrumentation.',
    results: [
      { label: 'Demo Conversion Rate', value: '+84%' },
      { label: 'Page Speed Score', value: '97/100' },
      { label: 'Sales Qualified Leads', value: '+46%' }
    ],
    techUsed: ['Next.js', 'TypeScript', 'PostHog']
  }
];

export const testimonials = [
  {
    quote: 'Their AI agent rollout saved our team hundreds of hours in one quarter.',
    name: 'Jordan Ellis',
    title: 'Head of Operations',
    company: 'Vertex Dynamics'
  },
  {
    quote: 'Gogi Tech moved fast and executed with precision. Real engineering depth.',
    name: 'Priya Nair',
    title: 'CTO',
    company: 'Nova Freight'
  },
  {
    quote: 'Our new booking funnel instantly increased qualified calls without extra ad spend.',
    name: 'Marcus Hale',
    title: 'Growth Lead',
    company: 'Liftline'
  }
];
