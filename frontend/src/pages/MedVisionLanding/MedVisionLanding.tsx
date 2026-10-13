
import { Link } from "react-router-dom";
import {
  ScanLine,
  Layers3,
  BrainCircuit,
  ArrowRight,
  FolderOpen,
  Box,
  Workflow,
  ChartNoAxesCombined,
  CheckCircle2,
} from "lucide-react";

import styles from "./MedVisionLanding.module.css";

const workflowStages = [
  {
    number: "01",
    name: "Imaging",
    status: "IN DEVELOPMENT",
    icon: Layers3,
    description:
      "Discover imaging studies, inspect series, and explore medical images in a dedicated viewing workspace.",
    details: [
      "DICOM study discovery",
      "Series selection",
      "Image visualization",
    ],
    action: "Open imaging workspace",
    to: "/medvision/workspace",
    state: "active",
  },
  {
    number: "02",
    name: "Analysis",
    status: "PLANNED",
    icon: ScanLine,
    description:
      "Build toward structured image analysis with segmentation, anatomical measurements, and AI-assisted tools.",
    details: [
      "Image segmentation",
      "Anatomical measurements",
      "AI-assisted analysis",
    ],
    action: "Explore the dashboard",
    to: "/medvision/dashboard",
    state: "planned",
  },
  {
    number: "03",
    name: "Surgical planning",
    status: "PLANNED",
    icon: Box,
    description:
      "Develop a structured workflow for bringing imaging data and analysis into surgical planning.",
    details: [
      "3D model visualization",
      "Planning case organization",
      "Planning reports",
    ],
    action: "Browse planning cases",
    to: "/medvision/cases",
    state: "planned",
  },
];

const capabilities = [
  {
    icon: ScanLine,
    title: "Medical image visualization",
    description:
      "Explore medical imaging studies in a dedicated viewing workspace.",
  },
  {
    icon: Layers3,
    title: "Imaging and segmentation",
    description:
      "Build toward structured image analysis and segmentation workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted planning",
    description:
      "Bring imaging, analysis, and surgical planning into a coherent workflow.",
  },
];

function ImagingPreview() {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.visualHeader}>
        <div className={styles.visualTitle}>
          <span className={styles.liveIndicator} />
          <span>MEDVISION / IMAGING</span>
        </div>
        <span className={styles.visualIndex}>WORKSPACE PREVIEW</span>
      </div>

      <div className={styles.imagingStage}>
        <div className={styles.viewportLabel}>
          <span>AXIAL</span>
          <span>CT · PREVIEW</span>
        </div>

        <svg
          className={styles.anatomy}
          viewBox="0 0 520 360"
          role="img"
          aria-label="Stylized axial medical imaging illustration"
        >
          <defs>
            <radialGradient id="scanGlow">
              <stop offset="0%" stopColor="#8babb5" stopOpacity=".25" />
              <stop offset="75%" stopColor="#668b98" stopOpacity=".08" />
              <stop offset="100%" stopColor="#162c3b" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="tissue">
              <stop offset="0%" stopColor="#b9cbd0" stopOpacity=".22" />
              <stop offset="50%" stopColor="#dce7e9" stopOpacity=".65" />
              <stop offset="100%" stopColor="#91aab4" stopOpacity=".2" />
            </linearGradient>

            <clipPath id="scanClip">
              <ellipse cx="260" cy="176" rx="157" ry="142" />
            </clipPath>
          </defs>

          <ellipse
            cx="260"
            cy="176"
            rx="178"
            ry="160"
            fill="url(#scanGlow)"
          />

          <g
            fill="none"
            stroke="#7f9eaa"
            strokeOpacity=".12"
            strokeWidth="1"
          >
            {Array.from({ length: 9 }, (_, index) => (
              <circle
                key={index}
                cx="260"
                cy="176"
                r={28 + index * 16}
              />
            ))}
          </g>

          <g clipPath="url(#scanClip)">
            <ellipse
              cx="260"
              cy="176"
              rx="157"
              ry="142"
              fill="#9fb8c1"
              fillOpacity=".12"
            />

            <path
              d="M260 73 C220 57 157 82 132 128
                 C110 170 128 231 170 267
                 C197 291 229 292 248 270
                 C264 250 253 225 236 204
                 C216 180 224 148 244 126
                 C259 109 274 91 260 73Z"
              fill="#07141f"
              stroke="#c2d4da"
              strokeOpacity=".55"
              strokeWidth="2"
            />

            <path
              d="M260 73 C300 57 363 82 388 128
                 C410 170 392 231 350 267
                 C323 291 291 292 272 270
                 C256 250 267 225 284 204
                 C304 180 296 148 276 126
                 C261 109 246 91 260 73Z"
              fill="#07141f"
              stroke="#c2d4da"
              strokeOpacity=".55"
              strokeWidth="2"
            />

            <path
              d="M260 92 C242 115 243 143 260 161
                 C277 143 278 115 260 92Z"
              fill="url(#tissue)"
            />

            <path
              d="M252 164 C236 186 239 226 260 246
                 C281 226 284 186 268 164Z"
              fill="#d5e1e4"
              fillOpacity=".45"
              stroke="#d8e6e9"
              strokeOpacity=".65"
            />

            <ellipse
              cx="260"
              cy="263"
              rx="21"
              ry="12"
              fill="#d5e1e4"
              fillOpacity=".35"
            />

            <g
              fill="none"
              stroke="#b7d0d7"
              strokeOpacity=".3"
              strokeWidth="2"
            >
              <path d="M151 134 C178 103 209 102 229 125" />
              <path d="M369 134 C342 103 311 102 291 125" />
              <path d="M143 194 C170 223 194 238 220 240" />
              <path d="M377 194 C350 223 326 238 300 240" />
              <path d="M174 112 C183 143 184 177 173 207" />
              <path d="M346 112 C337 143 336 177 347 207" />
            </g>
          </g>

          <ellipse
            cx="260"
            cy="176"
            rx="157"
            ry="142"
            fill="none"
            stroke="#b5cdd4"
            strokeOpacity=".6"
            strokeWidth="1.5"
          />

          <g fill="none" stroke="#5eead4" strokeWidth="1.5">
            <path d="M260 21 V42 M260 310 V331" />
            <path d="M88 176 H109 M411 176 H432" />
            <path d="M260 45 V307" strokeOpacity=".2" strokeDasharray="3 7" />
            <path d="M108 176 H412" strokeOpacity=".2" strokeDasharray="3 7" />
          </g>

          <g
            fill="#5eead4"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="2"
          >
            <text x="260" y="13" textAnchor="middle">A</text>
            <text x="260" y="348" textAnchor="middle">P</text>
            <text x="72" y="180" textAnchor="middle">R</text>
            <text x="448" y="180" textAnchor="middle">L</text>
          </g>
        </svg>

        <div className={styles.scanScale}>
          <span>IMAGE VIEWPORT</span>
          <span>AXIAL / 01</span>
        </div>
      </div>

      <div className={styles.visualFooter}>
        <div>
          <span className={styles.footerLabel}>PLATFORM</span>
          <strong>Medical imaging</strong>
        </div>

        <div>
          <span className={styles.footerLabel}>WORKFLOW</span>
          <strong>Visualize → Analyze → Plan</strong>
        </div>

        <span className={styles.previewBadge}>CONCEPT PREVIEW</span>
      </div>
    </div>
  );
}

export default function MedVisionLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link to="/medvision" className={styles.brand}>
          <span className={styles.brandIcon}>
            <ScanLine size={23} />
          </span>

          <span>
            <strong>MedVision AI</strong>
            <small>Medical Imaging Platform</small>
          </span>
        </Link>

        <nav className={styles.navigation}>
          <a href="#workflow">Workflow</a>
          <a href="#capabilities">Capabilities</a>
          <Link to="/medvision/cases">Planning Cases</Link>
        </nav>

        <Link to="/medvision/workspace" className={styles.headerAction}>
          Open Workspace <ArrowRight size={16} />
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            MEDICAL IMAGING · VISUALIZATION · PLANNING
          </p>

          <h1>
            From medical images
            <br />
            to clinical insight.
          </h1>

          <p className={styles.intro}>
            A dedicated environment for medical image
            visualization, AI-assisted analysis, and
            surgical planning.
          </p>

          <div className={styles.actions}>
            <Link to="/medvision/workspace" className={styles.primaryAction}>
              Open Imaging Workspace
              <ArrowRight size={17} />
            </Link>

            <Link to="/medvision/cases" className={styles.secondaryAction}>
              <FolderOpen size={17} />
              Browse Planning Cases
            </Link>
          </div>

          <div className={styles.status}>
            <span className={styles.statusDot} />
            Development environment
          </div>
        </div>

        <ImagingPreview />
      </section>

      <section id="workflow" className={styles.workflowSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>THE MEDVISION WORKFLOW</p>
          <h2>One workflow. From image to plan.</h2>
          <p>
            A connected clinical workflow designed to bring
            medical imaging, analysis, and surgical planning
            into one coherent environment.
          </p>
        </div>

        <div className={styles.workflowTrack}>
          {workflowStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.number}
                className={`${styles.workflowCard} ${
                  stage.state === "active" ? styles.workflowCardActive : ""
                }`}
              >
                <div className={styles.workflowCardTop}>
                  <span className={styles.stageNumber}>{stage.number}</span>
                  <span
                    className={`${styles.stageStatus} ${
                      stage.state === "active"
                        ? styles.stageStatusActive
                        : ""
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>

                <div className={styles.stageIcon}>
                  <Icon size={24} strokeWidth={1.7} />
                </div>

                <h3>{stage.name}</h3>
                <p className={styles.stageDescription}>
                  {stage.description}
                </p>

                <ul className={styles.stageDetails}>
                  {stage.details.map((detail) => (
                    <li key={detail}>
                      <CheckCircle2 size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link to={stage.to} className={styles.stageAction}>
                  {stage.action}
                  <ArrowRight size={15} />
                </Link>

                {index < workflowStages.length - 1 && (
                  <div className={styles.workflowConnector} aria-hidden="true">
                    <ArrowRight size={16} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className={styles.workflowNote}>
          <Workflow size={18} />
          <p>
            The workflow represents the intended product direction.
            Feature availability depends on the current implementation.
          </p>
        </div>
      </section>

      <section id="capabilities" className={styles.capabilities}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>PLATFORM CAPABILITIES</p>
          <h2>Built around the imaging workflow.</h2>
          <p>
            A clinical-first interface designed to keep imaging
            and its supporting tools at the centre of the workflow.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className={styles.capability}
              >
                <Icon size={24} strokeWidth={1.7} />
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.workspaceCallout}>
        <div className={styles.calloutIcon}>
          <ChartNoAxesCombined size={24} />
        </div>

        <div className={styles.calloutContent}>
          <p className={styles.eyebrow}>EXPLORE THE PLATFORM</p>
          <h2>Start with the imaging workspace.</h2>
          <p>
            Explore the current application and its medical
            imaging workflow.
          </p>
        </div>

        <Link to="/medvision/workspace" className={styles.primaryAction}>
          Open Workspace <ArrowRight size={17} />
        </Link>
      </section>

      <footer className={styles.footer}>
        <span>MedVision AI</span>
        <span>Medical imaging and surgical planning</span>
      </footer>
    </main>
  );
}
