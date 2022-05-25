/* eslint-disable react-hooks/rules-of-hooks */
import { chakra } from "@chakra-ui/system"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { FC } from "react"

const components: Record<string, FC<Record<string, any>>> = {
  Admonition(props) {
    return <div {...props} />
  },
  blockquote(props) {
    return <chakra.blockquote layerStyle="blockquote" {...props} />
  },
  h1(props) {
    return (
      <chakra.h1
        id="skip-nav"
        textStyle="display.lg"
        mb="5"
        maxW="85ch"
        tabIndex={-1}
        {...props}
      />
    )
  },
  h2(props) {
    return <chakra.h2 textStyle="display.md" mt="12" mb="3" {...props} />
  },
  h3(props) {
    return <chakra.h3 textStyle="display.sm" mt="6" mb="4" {...props} />
  },
  h4(props) {
    return <chakra.h4 textStyle="display.xs" mt="6" mb="2" {...props} />
  },
  pre(props) {
    return <chakra.pre {...props} className={`prose ${props.className}`} />
  },
  li(props) {
    return (
      <chakra.li
        sx={{
          "&::marker": {
            color: "cyan.default",
          },
        }}
        {...props}
      />
    )
  },
  inlineCode(props) {
    return <chakra.code className="prose" layerStyle="inlineCode" {...props} />
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
        <Link href={href} passHref>
          <chakra.a textStyle="link" {...props}>
            {props.children}
          </chakra.a>
        </Link>
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
