import { allOverviews } from "contentlayer/generated"
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

/* -----------------------------------------------------------------------------
 * Overview
 * -----------------------------------------------------------------------------*/

export function getOverviewPaths() {
  return allOverviews.map((doc) => `/overview/${doc.slug}`)
}

export function getOverviewDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allOverviews.find(
    (post) => post.frontmatter.slug === `/overview/${slug}`,
  )
}