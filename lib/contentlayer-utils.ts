import { allDocs } from "contentlayer/generated"
import { Framework, isFramework } from "./framework-utils"

export function extractParams(slug: string[]) {
  const [first] = slug
  let result: Framework = "react"
  if (isFramework(first)) {
    result = first
    slug.shift()
  }
  return { framework: result, slug: slug.join("/") }
}

export function getDocPaths() {
  return allDocs.map((doc) => `/docs/${doc.slug}`)
}

export function getDoc(_slug: string | string[], nested: string | null | string[] = null) {
  return allDocs.find(
    (post) => post._raw.sourceFileDir === (nested ? `docs/${_slug}/${nested}` : `docs/${_slug}`),
  )
}