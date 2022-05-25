/* eslint-disable react-hooks/rules-of-hooks */
import { chakra } from "@chakra-ui/system"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { FC } from "react"
import LzLink from "./UI/Link"

const components: Record<string, FC<Record<string, any>>> = {
  Admonition(props) {
    return <div {...props} />
  },
  blockquote(props) {
    return <blockquote {...props} />
  },
  h1(props) {
    return (
      <h1
        className="hidden text-pri-500"
        id="skip-nav"
        tabIndex={-1}
        {...props}
      />
    )
  },
  h2(props) {
    return <h2 {...props} />
  },
  h3(props) {
    return <h3 {...props} />
  },
  h4(props) {
    return <h4 {...props} />
  },
  pre(props) {
    return <pre {...props} className={`prose ${props.className}`} />
  },
  li(props) {
    return (
      <li {...props} />
    )
  },
  inlineCode(props) {
    return <code className="prose" {...props} />
  },
  code(props) {
    if (typeof props.children === "string") {
      return <components.inlineCode {...props} />
    }
    return <div className="prose">{props.children}</div>
  },
  a(props) {
    const href = props.href
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
      return (
        <LzLink to={href} passHref {...props}>
          {props.children}
        </LzLink>
      )
    }

    return (
      <chakra.a textStyle="link" target="_blank" rel="noopener" {...props} />
    )
  },
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={components} />
}
