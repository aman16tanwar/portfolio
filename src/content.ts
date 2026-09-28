/**
 * ALL website text lives here. Edit this file to update the site —
 * you shouldn't need to touch any other file.
 *
 * Lines marked TODO are placeholders: replace them with your real details.
 *
 * Privacy rule of thumb: describe skills and outcomes, never client names,
 * account/container/property IDs, or screenshots from real client work.
 */

export const site = {
  name: "Aman Tanwar",
  role: "AI & Data Engineer",
  url: "https://amantanwar.dev",
  location: "Canada", // TODO: city if you want, e.g. "Vancouver, Canada"

  // One sentence a non-technical person can understand.
  headline: "I turn messy data into clear answers — and build AI tools that do real work.",
  intro:
    "I design data pipelines, warehouses, and AI assistants that help teams make decisions faster. I care about systems that are simple, reliable, and easy for other people to use.",

  // Set `open: false` to hide the "available" badge.
  availability: { open: true, text: "Open to new opportunities" },
};

export const links = {
  github: "https://github.com/aman16tanwar",
  linkedin: "https://www.linkedin.com/in/TODO", // TODO: your LinkedIn URL
};

export const about = [
  "I'm an AI & Data Engineer at a digital marketing agency, where I build the data systems behind reporting and decision-making — from collecting data out of many platforms, to cleaning and modelling it, to putting it in front of people in a way they can actually use.",
  "Lately I've focused on AI: building assistants and agents on top of company data so people can ask questions in plain English instead of waiting on a report.",
  "Outside of work I build my own products, like OneTripDocs (below).", // TODO: adjust tone/details
];

// Keep each group short. Recruiters skim this in seconds.
export const skills = [
  {
    group: "AI & LLMs",
    items: ["LLM apps (Claude, OpenAI)", "RAG", "AI agents & tool use", "Prompt design", "Evaluations"],
  },
  {
    group: "Data Engineering",
    items: ["Python", "SQL", "BigQuery", "dbt", "Airflow", "ETL / ELT pipelines"],
  },
  {
    group: "Cloud & Tools",
    items: ["Google Cloud", "Docker", "FastAPI", "Git & CI/CD", "Cloudflare"],
  },
];

// Each project answers three simple questions: problem → what I built → result.
export const projects = [
  {
    title: "OneTripDocs",
    tag: "AI product · In progress",
    problem:
      "People applying for an OCI card often get turned away or charged extra at the counter because of small mistakes in their documents.",
    built:
      "A tool that reads your documents with AI, checks them against the official rules, and explains any problems in plain language before you go.",
    result: "Goal: one trip to the counter, no surprise fees.",
    stack: ["Next.js", "FastAPI", "LLM document extraction", "Python"],
    link: { label: "onetripdocs.com", href: "https://onetripdocs.com" },
  },
  {
    // TODO: replace with a real (sanitized) project — no client names or IDs.
    title: "Marketing Data Warehouse",
    tag: "Data engineering",
    problem:
      "Performance data was spread across many ad and analytics platforms, so building a single report took hours of manual work.",
    built:
      "Automated pipelines that pull data from each platform daily into BigQuery, then clean and combine it with dbt into one trusted set of tables.",
    result: "Reports that used to take hours now refresh automatically every morning.", // TODO: real numbers
    stack: ["Python", "BigQuery", "dbt", "Airflow"],
  },
  {
    // TODO: replace with a real (sanitized) project.
    title: "Ask-Your-Data AI Assistant",
    tag: "AI agent",
    problem:
      "Non-technical teammates had questions about the data but had to wait for someone to write SQL.",
    built:
      "An AI assistant that turns plain-English questions into safe, read-only SQL, runs it, and explains the answer with a chart.",
    result: "Common questions answered in seconds instead of days.", // TODO: real numbers
    stack: ["Claude API", "Tool use", "BigQuery", "Python"],
  },
];

export const experience = [
  {
    role: "AI & Data Engineer",
    org: "Digital marketing agency",
    period: "2024 — Present", // TODO: your real dates
    points: [
      "Build and maintain data pipelines and a cloud data warehouse used for client reporting.",
      "Develop AI assistants and agents that answer questions from company data.",
      "Work with non-technical teams to turn their questions into reliable, automated reports.",
    ],
  },
  // TODO: add earlier roles or education, e.g.
  // { role: "Data Analyst", org: "…", period: "2021 — 2024", points: ["…"] },
];

export const contact = {
  title: "Let's talk",
  text: "Hiring, a project idea, or just want to connect? Send me a message and I'll reply within a couple of days.",
};
