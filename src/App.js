import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Phase 1: AWS Cloud Practitioner",
    duration: "Months 1–3",
    color: "#00C2FF",
    accent: "#003A4D",
    icon: "☁️",
    overlap: "Pairs directly with your PAAS Project & Data Centre Essentials",
    cert: "AWS Cloud Practitioner (~$120 AUD)",
    weeks: [
      { week: "Week 1–2", task: "Set up A Cloud Guru free account. Watch: 'Cloud Computing Fundamentals' module (≈1 hr total).", resource: "acloudguru.com", tag: "Setup" },
      { week: "Week 3–4", task: "AWS Global Infrastructure + Core Services (EC2, S3, RDS). 30 min/session. Take notes in your own words.", resource: "A Cloud Guru", tag: "Learn" },
      { week: "Week 5–6", task: "IAM, Security & Compliance — connects directly to your Cyber Security diploma!", resource: "A Cloud Guru", tag: "Overlap ✅" },
      { week: "Week 7–8", task: "Networking on AWS (VPCs, subnets) — maps perfectly to your Advanced Networking TAFE units.", resource: "A Cloud Guru", tag: "Overlap ✅" },
      { week: "Week 9–10", task: "Pricing, Billing & Support models. Do 2 practice exams on Examtopics (free).", resource: "examtopics.com", tag: "Practice" },
      { week: "Week 11–12", task: "Final revision. Book your exam. Sit AWS Cloud Practitioner. 🎉", resource: "aws.amazon.com/certification", tag: "Milestone 🏆" },
    ]
  },
  {
    id: 2,
    title: "Phase 2: Git & GitHub",
    duration: "Months 3–6",
    color: "#F97316",
    accent: "#3D1A00",
    icon: "🌿",
    overlap: "Start using Git for TAFE assignments — double the value from zero extra time",
    cert: "No cert needed — GitHub profile IS the proof",
    weeks: [
      { week: "Week 13–14", task: "Create GitHub account. Complete 'Introduction to Git' on learngitbranching.js.org (first 4 levels, ~1 hr).", resource: "learngitbranching.js.org", tag: "Setup" },
      { week: "Week 15–16", task: "Learn: clone, add, commit, push. Push your first repo — even TAFE notes count!", resource: "GitHub Docs", tag: "Hands-on" },
      { week: "Week 17–18", task: "Branching, merging, pull requests. Complete the branching section on learngitbranching.js.org.", resource: "learngitbranching.js.org", tag: "Learn" },
      { week: "Week 19–20", task: "CI/CD concepts: Read 'What is CI/CD?' on Atlassian (free). No tools yet — just the concept.", resource: "atlassian.com/continuous-delivery", tag: "Theory" },
      { week: "Week 21–22", task: "Set up a simple GitHub Actions workflow on a practice repo. Watch 1 YouTube tutorial.", resource: "YouTube: TechWorld with Nana", tag: "Hands-on" },
      { week: "Week 23–24", task: "Review your GitHub. You should have 10+ commits by now. That's real CI/CD exposure! 🎉", resource: "github.com", tag: "Milestone 🏆" },
    ]
  },
  {
    id: 3,
    title: "Phase 3: Docker & Containers",
    duration: "Months 6–12",
    color: "#A78BFA",
    accent: "#1E0A3C",
    icon: "🐳",
    overlap: "Container networking maps to your Advanced Networking diploma units",
    cert: "Optional: Docker Certified Associate (after hands-on comfort)",
    weeks: [
      { week: "Week 25–27", task: "Read 'What is a container?' on Docker docs. Watch TechWorld with Nana 'Docker Tutorial' (first 2 parts).", resource: "docs.docker.com", tag: "Theory" },
      { week: "Week 28–30", task: "Install Docker Desktop (free). Run your first container: 'docker run hello-world'. Pull a Nginx image.", resource: "Docker Desktop", tag: "Hands-on" },
      { week: "Week 31–33", task: "Write your first Dockerfile. Build and run a simple app container. Use Docker Hub for storage.", resource: "hub.docker.com", tag: "Build" },
      { week: "Week 34–36", task: "Docker Compose basics — run a multi-container app (e.g., app + database). Connects to your DB exposure goal.", resource: "docs.docker.com/compose", tag: "Overlap ✅" },
      { week: "Week 37–40", task: "Intro to Kubernetes: read 'Kubernetes Basics' tutorial on kubernetes.io. Theory only for now — no install needed.", resource: "kubernetes.io/docs/tutorials", tag: "Theory" },
      { week: "Week 41–44", task: "Minikube (local K8s): deploy a simple pod. Push everything to GitHub as proof of work. 🎉", resource: "minikube.sigs.k8s.io", tag: "Milestone 🏆" },
      { week: "Week 45–48", task: "Review & polish your GitHub, update your resume. You're now genuinely competitive for this role!", resource: "linkedin.com", tag: "Apply 🚀" },
    ]
  },
  {
    id: 4,
    title: "Phase 4: Open Source Contributions",
    duration: "Months 1–12 (ongoing)",
    color: "#34D399",
    accent: "#052e16",
    icon: "🌍",
    overlap: "OWASP aligns with Cyber Security diploma. Kubernetes & Docker docs align with Phases 2–3",
    cert: "No cert — merged PRs on GitHub ARE the proof",
    weeks: [
      { week: "Month 1", task: "Go to firstcontributions.github.io — complete the practice contribution workflow. This is a zero-pressure sandbox just for beginners.", resource: "firstcontributions.github.io", tag: "Setup" },
      { week: "Month 2", task: "Browse goodfirstissue.dev. Filter by 'documentation'. Find 1 issue that looks readable. Comment: 'I'd like to work on this.'", resource: "goodfirstissue.dev", tag: "First PR 🌱" },
      { week: "Month 3", task: "Fix a docs typo or unclear README in any AWS, cloud, or networking project. Open your first real Pull Request. Even tiny fixes count!", resource: "github.com", tag: "First PR 🌱" },
      { week: "Month 4–5", task: "Browse OWASP projects (owasp.org) — contribute to a security checklist or guide. This directly overlaps your Cyber Security diploma.", resource: "owasp.org/projects", tag: "Overlap ✅" },
      { week: "Month 6", task: "Aim for 3 merged PRs by now. Even documentation ones. Add 'Open Source Contributor' to your GitHub profile bio.", resource: "github.com", tag: "Milestone 🏆" },
      { week: "Month 7–8", task: "Explore Kubernetes or Docker docs repos. Fix an outdated command example or broken link. These are high-visibility projects recruiters recognise.", resource: "github.com/kubernetes/website", tag: "Visibility 🔥" },
      { week: "Month 9–10", task: "Try up-for-grabs.net — filter by 'DevOps' or 'cloud'. Attempt a small code contribution if you're comfortable. Bug reports count too!", resource: "up-for-grabs.net", tag: "Level Up" },
      { week: "Month 11", task: "Write a short README or guide for something you learned in your TAFE course. Publish it as a public GitHub repo. Original content = portfolio gold.", resource: "github.com", tag: "Build" },
      { week: "Month 12", task: "Count your contributions: aim for 5–10 merged PRs total. Screenshot your GitHub contribution graph. This goes on your resume and impresses CGI. 🎉", resource: "github.com", tag: "Apply 🚀" },
    ]
  }
];

const tagColors = {
  "Setup": "#1e3a4c",
  "Learn": "#1a3a1a",
  "Overlap ✅": "#1a2e3a",
  "Practice": "#2e2a1a",
  "Milestone 🏆": "#2e1a2e",
  "Theory": "#1e1e3a",
  "Hands-on": "#1a2e20",
  "Build": "#3a1e1e",
  "Apply 🚀": "#2e1a0e",
  "First PR 🌱": "#052e16",
  "Visibility 🔥": "#2e1a00",
  "Level Up": "#1a1a3a",
};

const tagBorderColors = {
  "Setup": "#00C2FF",
  "Learn": "#4ade80",
  "Overlap ✅": "#00C2FF",
  "Practice": "#fbbf24",
  "Milestone 🏆": "#a78bfa",
  "Theory": "#818cf8",
  "Hands-on": "#34d399",
  "Build": "#f87171",
  "Apply 🚀": "#f97316",
  "First PR 🌱": "#34d399",
  "Visibility 🔥": "#fb923c",
  "Level Up": "#818cf8",
};

export default function Roadmap() {
  const [completed, setCompleted] = useState({});
  const [expanded, setExpanded] = useState({ 1: true, 2: false, 3: false, 4: false });

  const toggle = (phaseId, weekIdx) => {
    const key = `${phaseId}-${weekIdx}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePhase = (phaseId) => {
    setExpanded(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  };

  const totalWeeks = phases.reduce((sum, p) => sum + p.weeks.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = Math.round((completedCount / totalWeeks) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e17",
      fontFamily: "'Courier New', monospace",
      color: "#e2e8f0",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ borderLeft: "3px solid #00C2FF", paddingLeft: 16, marginBottom: 8 }}>
          <div style={{ fontSize: 11, color: "#00C2FF", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>
            12-Month Learning Roadmap
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#fff", lineHeight: 1.3 }}>
            Junior Cloud Engineer
          </h1>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
            CGI · Greater Sydney · 1–3 hrs/week strategy
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          background: "#111827", border: "1px solid #1e293b", borderRadius: 8,
          padding: "14px 16px", marginTop: 20, marginBottom: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12 }}>
            <span style={{ color: "#94a3b8" }}>Overall Progress</span>
            <span style={{ color: "#00C2FF", fontWeight: 700 }}>{completedCount}/{totalWeeks} tasks · {progress}%</span>
          </div>
          <div style={{ background: "#1e293b", borderRadius: 99, height: 6, overflow: "hidden" }}>
            <div style={{
              width: `${progress}%`, height: "100%",
              background: "linear-gradient(90deg, #00C2FF, #34D399, #a78bfa)",
              borderRadius: 99, transition: "width 0.4s ease"
            }} />
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
          {[
            { label: "AWS Cert", icon: "☁️", color: "#00C2FF" },
            { label: "Git/CI-CD", icon: "🌿", color: "#F97316" },
            { label: "Containers", icon: "🐳", color: "#A78BFA" },
            { label: "Open Source", icon: "🌍", color: "#34D399" },
          ].map((s, i) => {
            const phase = phases[i];
            const done = phase.weeks.filter((_, j) => completed[`${phase.id}-${j}`]).length;
            return (
              <div key={i} onClick={() => togglePhase(phase.id)} style={{
                background: "#0d1117", border: `1px solid ${s.color}33`,
                borderRadius: 8, padding: "10px 8px", textAlign: "center", cursor: "pointer"
              }}>
                <div style={{ fontSize: 18 }}>{s.icon}</div>
                <div style={{ fontSize: 10, color: s.color, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{done}/{phase.weeks.length}</div>
              </div>
            );
          })}
        </div>

        {/* Open Source Banner */}
        <div style={{
          background: "#052e16", border: "1px solid #34D39944", borderRadius: 8,
          padding: "12px 16px", marginBottom: 20, fontSize: 12, color: "#94a3b8", lineHeight: 1.6
        }}>
          <span style={{ color: "#34D399", fontWeight: 700 }}>🌍 New: Open Source Track — </span>
          Runs across all 12 months in parallel. Start in Month 1 with zero code required. 5–10 merged PRs by Month 12 = a resume that stands out at CGI.
        </div>

        {/* Overlap Banner */}
        <div style={{
          background: "#0f1f2e", border: "1px solid #00C2FF33", borderRadius: 8,
          padding: "12px 16px", marginBottom: 28, fontSize: 12, color: "#94a3b8", lineHeight: 1.6
        }}>
          <span style={{ color: "#00C2FF", fontWeight: 700 }}>⚡ Smart Overlap: </span>
          Your TAFE Networking + Cyber Security diploma already covers ~60% of this role. This plan fills only the genuine gaps.
        </div>

        {/* Phases */}
        {phases.map(phase => {
          const phaseCompleted = phase.weeks.filter((_, i) => completed[`${phase.id}-${i}`]).length;
          const isOpen = expanded[phase.id];

          return (
            <div key={phase.id} style={{
              background: "#0d1117", border: `1px solid ${phase.color}33`,
              borderRadius: 10, marginBottom: 16, overflow: "hidden"
            }}>
              <button
                onClick={() => togglePhase(phase.id)}
                style={{
                  width: "100%", background: `linear-gradient(135deg, ${phase.accent}88, #0d1117)`,
                  border: "none", borderBottom: isOpen ? `1px solid ${phase.color}22` : "none",
                  padding: "16px", cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "center", gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{phase.title}</div>
                  <div style={{ fontSize: 11, color: phase.color, marginTop: 2 }}>
                    {phase.duration} · {phaseCompleted}/{phase.weeks.length} complete
                  </div>
                </div>
                <div style={{ width: 48, height: 4, background: "#1e293b", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{
                    width: `${(phaseCompleted / phase.weeks.length) * 100}%`,
                    height: "100%", background: phase.color, borderRadius: 99
                  }} />
                </div>
                <span style={{ color: phase.color, fontSize: 14, marginLeft: 4 }}>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div style={{ padding: "4px 0 8px" }}>
                  <div style={{
                    margin: "8px 16px", padding: "8px 12px",
                    background: "#0f1f1a", borderLeft: `3px solid ${phase.color}`,
                    borderRadius: "0 6px 6px 0", fontSize: 11, color: "#94a3b8"
                  }}>
                    <span style={{ color: phase.color }}>↗ Overlap: </span>{phase.overlap}
                  </div>
                  <div style={{
                    margin: "4px 16px 12px", padding: "6px 12px",
                    background: "#111827", borderRadius: 6, fontSize: 11, color: "#64748b"
                  }}>
                    🎯 Target: <span style={{ color: "#e2e8f0" }}>{phase.cert}</span>
                  </div>

                  {phase.weeks.map((w, i) => {
                    const key = `${phase.id}-${i}`;
                    const done = completed[key];
                    return (
                      <div
                        key={i}
                        onClick={() => toggle(phase.id, i)}
                        style={{
                          margin: "4px 16px", padding: "12px 14px",
                          background: done ? "#0f1f0f" : "#111827",
                          border: `1px solid ${done ? "#4ade8044" : "#1e293b"}`,
                          borderRadius: 7, cursor: "pointer", transition: "all 0.2s",
                          display: "flex", gap: 12, alignItems: "flex-start",
                        }}
                      >
                        <div style={{
                          width: 18, height: 18, borderRadius: 4,
                          border: `2px solid ${done ? "#4ade80" : "#334155"}`,
                          background: done ? "#4ade8022" : "transparent",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, marginTop: 1, fontSize: 11, color: "#4ade80"
                        }}>
                          {done ? "✓" : ""}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 11, color: phase.color, fontWeight: 700 }}>{w.week}</span>
                            <span style={{
                              fontSize: 10, padding: "1px 7px", borderRadius: 99,
                              background: tagColors[w.tag] || "#1e293b",
                              border: `1px solid ${tagBorderColors[w.tag] || "#334155"}`,
                              color: tagBorderColors[w.tag] || "#94a3b8"
                            }}>
                              {w.tag}
                            </span>
                          </div>
                          <div style={{
                            fontSize: 12, color: done ? "#64748b" : "#cbd5e1",
                            lineHeight: 1.5, textDecoration: done ? "line-through" : "none"
                          }}>
                            {w.task}
                          </div>
                          <div style={{ fontSize: 11, color: "#475569", marginTop: 4 }}>📎 {w.resource}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer */}
        <div style={{
          marginTop: 20, padding: "14px 16px", background: "#0d1117",
          border: "1px solid #1e293b", borderRadius: 8, fontSize: 11, color: "#64748b", lineHeight: 1.7
        }}>
          <span style={{ color: "#34D399" }}>🌍 Open source tip: </span>
          Your very first PR can be fixing a single typo in docs. Maintainers love helpful beginners. One merged PR beats a hundred unsubmitted ones.
        </div>
      </div>
    </div>
  );
}