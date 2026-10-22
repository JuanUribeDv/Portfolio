import { useState, useEffect } from "react"
import { curatedProjects } from "./Proyectos_info.js"
import { getTagColor } from "./languageColors.js"

const GITHUB_USER = "JuanUribeDv"
const API_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed&direction=desc`
const EXCLUDED_REPOS = ["Portfolio", "JuanUribeDv"]
const MAX_TOPIC_TAGS = 5

const localImages = Object.fromEntries(
  Object.entries(
    import.meta.glob("../Assets/*_muestra.png", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ).map(([path, url]) => {
    const filename = path.split("/").pop()
    const key = filename.replace(/_muestra\.png$/, "").toLowerCase()
    return [key, url]
  })
)

function normalizeName(name) {
  return name.toLowerCase().replace(/-/g, "_")
}

function openGraphUrl(repoName) {
  return `https://opengraph.githubassets.com/1/${GITHUB_USER}/${repoName}`
}

function mapRepo(repo) {
  const topics = Array.isArray(repo.topics) ? repo.topics : []

  const tags = []
  if (repo.language) {
    tags.push({
      label: repo.language,
      color: getTagColor(repo.language),
    })
  }
  topics
    .filter((topic) => topic !== "portfolio" && topic !== "featured")
    .slice(0, MAX_TOPIC_TAGS)
    .forEach((topic) => {
      tags.push({ label: topic, color: getTagColor(topic) })
    })

  const demoUrl =
    typeof repo.homepage === "string" && repo.homepage.startsWith("http")
      ? repo.homepage
      : ""

  return {
    id: repo.id,
    title: repo.name,
    image: localImages[normalizeName(repo.name)] ?? openGraphUrl(repo.name),
    featured: topics.includes("featured"),
    description: repo.description || "Sin descripción.",
    codeUrl: repo.html_url,
    demoUrl,
    tags,
  }
}

function buildCuratedProject(item, apiRepo) {
  const { repo, ...overrides } = item

  let base
  if (apiRepo) {
    base = mapRepo(apiRepo)
  } else if (repo) {
    base = {
      id: repo,
      title: repo,
      image: localImages[normalizeName(repo)] ?? openGraphUrl(repo),
      featured: false,
      description: "Sin descripción.",
      codeUrl: "",
      demoUrl: "",
      tags: [],
    }
  } else {
    base = {
      id: overrides.title,
      title: "",
      image: "",
      featured: false,
      description: "",
      codeUrl: "",
      demoUrl: "",
      tags: [],
    }
  }

  const tags = [...base.tags, ...(overrides.tags ?? [])].filter(
    (tag, index, allTags) =>
      allTags.findIndex((candidate) => candidate.label === tag.label) === index
  )

  return { ...base, ...overrides, tags }
}

export function useProjects() {
  const [projects, setProjects] = useState(() =>
    curatedProjects.map((item) => buildCuratedProject(item, null))
  )

  useEffect(() => {
    let cancelled = false

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`)
        return res.json()
      })
      .then((repos) => {
        if (cancelled || !Array.isArray(repos)) return
        const filtered = repos.filter(
          (repo) =>
            !repo.fork && !repo.archived && !EXCLUDED_REPOS.includes(repo.name)
        )
        const byName = new Map(filtered.map((repo) => [repo.name, repo]))
        const curated = curatedProjects.map((item) =>
          buildCuratedProject(item, item.repo ? byName.get(item.repo) : null)
        )
        const curatedNames = new Set(
          curatedProjects.map((item) => item.repo).filter(Boolean)
        )
        const rest = filtered
          .filter((repo) => !curatedNames.has(repo.name))
          .map(mapRepo)
        setProjects([...curated, ...rest])
      })
      .catch(() => {
        //Silencioso: se conservan los proyectos curados de fallback
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { projects }
}
