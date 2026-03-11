import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Security Platforms",
    subcategories: [
      {
        label: "SAST",
        skills: [
          "Snyk",
          "Checkmarx",
          "Fortify",
          "GitHub Advanced Security",
          "CodeQL",
        ],
      },
      {
        label: "DAST",
        skills: ["Probely", "OWASP ZAP", "Data Theorem"],
      },
      {
        label: "SCA",
        skills: [
          "Snyk",
          "Nexus IQ",
          "GitHub Advanced Security",
          "Wiz",
          "Dependency-Track",
          "CycloneDX",
        ],
      },
      {
        label: "Container Security",
        skills: ["Twistlock / Prisma Cloud", "Wiz", "Clair", "Syft"],
      },
      {
        label: "CSPM",
        skills: ["Wiz", "Lacework"],
      },
      {
        label: "Other",
        skills: ["PlexTrac", "Gitleaks"],
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    subcategories: [
      {
        label: "AWS",
        skills: [
          "EC2",
          "ECS",
          "ECR",
          "EKS",
          "S3",
          "Lambda",
          "IAM",
          "VPC",
          "Route 53",
          "API Gateway",
          "RDS",
          "DynamoDB",
          "Elastic Beanstalk",
          "Secrets Manager",
          "Rekognition",
          "Athena",
          "CloudTrail",
          "CloudFront",
          "ALB",
        ],
      },
      {
        label: "Other Cloud",
        skills: [
          "Cloudflare (WAF, API Shield, Zero Trust, CDN)",
          "Azure",
          "GCP",
        ],
      },
      {
        label: "IaC & CI/CD",
        skills: [
          "Terraform",
          "Docker",
          "Docker-Compose",
          "Kubernetes",
          "GitHub Actions",
          "CircleCI",
          "Jenkins",
        ],
      },
    ],
  },
  {
    title: "Identity & Secrets",
    subcategories: [
      {
        label: "",
        skills: ["Okta", "Auth0", "Teleport", "Doppler", "SSO / SAML"],
      },
    ],
  },
  {
    title: "AI & Automation",
    subcategories: [
      {
        label: "",
        skills: [
          "Claude API",
          "Azure OpenAI",
          "Cloudflare AI Gateway",
          "LangChain / LangGraph",
          "Tray.io",
          "LogicGate",
        ],
      },
    ],
  },
  {
    title: "Compliance & Governance",
    subcategories: [
      {
        label: "",
        skills: [
          "SOC 2 Type II",
          "HIPAA",
          "NIST",
          "GDPR",
          "PCI DSS",
          "STRIDE / OWASP Threat Dragon",
          "Pentest Program Management",
          "Bug Bounty Management",
        ],
      },
    ],
  },
  {
    title: "Engineering",
    subcategories: [
      {
        label: "Languages",
        skills: [
          "Python",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Java",
          "Bash",
        ],
      },
      {
        label: "Frameworks",
        skills: [
          "Django",
          "Flask",
          "React",
          "Relay",
          "AngularJS",
          "Spring",
          "openCV",
        ],
      },
      {
        label: "Data & APIs",
        skills: ["GraphQL", "PostgreSQL", "MySQL", "MariaDB", "MongoDB"],
      },
      {
        label: "Observability",
        skills: ["Sumo Logic", "ELK Stack (SIEM)"],
      },
      {
        label: "Artifact Management",
        skills: [
          "Nexus Repo",
          "Artifactory",
          "Elastic Container Registry",
        ],
      },
    ],
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            EXPERTISE
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tooling and practices I rely on to
            <br className="hidden sm:block" /> automate security at scale.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-base font-semibold text-white">
                {category.title}
              </h3>
              <div className="mt-4 space-y-3">
                {category.subcategories.map((sub) => (
                  <div key={sub.label || "default"}>
                    {sub.label && (
                      <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {sub.label}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {sub.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
