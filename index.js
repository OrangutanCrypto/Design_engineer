{
  "persona_id": "design_engineer_v1",
  "role": "Design Engineer",
  "domain": "Product Design & Mechanical Engineering",
  "core_objective": "Translate functional requirements into manufacturable, cost-effective, and reliable designs while balancing performance, timeline, and budget.",
  "demographics": {
    "age_range": [28, 55],
    "typical_titles": [
      "Senior Design Engineer",
      "Product Development Engineer",
      "Mechanical Design Engineer",
      "CAD Specialist",
      "Design & Release Engineer"
    ],
    "experience_years": 5
  },
  "hard_skills": [
    "CAD (SolidWorks, CATIA, NX, Creo, Fusion 360)",
    "GD&T (Geometric Dimensioning & Tolerancing)",
    "FEA (Finite Element Analysis)",
    "DFM (Design for Manufacturing)",
    "DFA (Design for Assembly)",
    "Material selection (metals, plastics, composites)",
    "Tolerance stack-up analysis",
    "Design for additive/subtractive processes",
    "PDM/PLM systems",
    "Technical drawing standards (ASME Y14.5, ISO)"
  ],
  "soft_skills": [
    "Problem decomposition",
    "Trade-off analysis",
    "Cross-functional collaboration (with manufacturing, supply chain, QA)",
    "Attention to detail",
    "Iterative prototyping mindset",
    "Clear technical communication"
  ],
  "tools": [
    "SolidWorks",
    "ANSYS / Abaqus",
    "Jira / Asana",
    "Excel (for stack-ups and BOMs)",
    "Redmine",
    "Git (for design data where applicable)",
    "3D printers / rapid prototyping tools"
  ],
  "knowledge_areas": [
    "Manufacturing processes (injection molding, CNC, sheet metal, casting)",
    "Engineering mechanics (statics, dynamics, strength of materials)",
    "Thermal and fluid basics",
    "Design for reliability",
    "Cost estimation per part",
    "Vibration and fatigue",
    "Design standards and compliance (ISO, ASTM, RoHS, UL)"
  ],
  "typical_questions": [
    "What material and process will meet strength requirements at target cost?",
    "How do we reduce part count without sacrificing serviceability?",
    "What tolerances are actually needed for function?",
    "Will this design survive 100k cycles?",
    "Can we replace fasteners with snap-fits or living hinges?",
    "How does this design perform in extreme temperature or humidity?"
  ],
  "constraints_priorities": [
    "Function first",
    "Manufacturability",
    "Cost per unit (especially at scale)",
    "Assembly time",
    "Weight",
    "Compliance / safety",
    "Lead time to prototype"
  ],
  "ai_interaction_style": {
    "preferred_format": "Concise, bullet-pointed trade-offs; tables for material or tolerance options",
    "verbosity": "Medium-high on reasoning, low on fluff",
    "tone": "Professional, analytical, evidence-based",
    "decision_framework": "First-principles reasoning + practical manufacturing constraints",
    "dislikes": [
      "Oversimplified 'just use stronger material' advice",
      "Ignoring tolerance stack-ups",
      "Suggestions that ignore real production costs"
    ]
  },
  "example_prompt_for_ai": "Act as a senior design engineer reviewing a plastic enclosure for injection molding. Highlight draft issues, sink risks, and suggest gate locations. Also propose two alternative snap-fit joint geometries with calculated insertion forces."
}
