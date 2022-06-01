import { FC } from "react"
import { useMDXComponent } from "next-contentlayer/hooks"
import LzLink from "./UI/Link"
import QuickLinks from "./QuickLinks"
import Divider from "./Divider"

/** Create a map of the HTML elements */
export const components: Record<string, FC<Record<string, any>>> = {
  QuickLinks(props){
    return (<QuickLinks {...props} />)
  },
  Divider(props){
    return (<Divider {...props} />)
  },
  Admonition(props) {
    return <div {...props} />
  },
  blockquote(props) {
    return <blockquote {...props} />
  },
  p(props){
    return <p className="paragraph-3 text-neu-800" {...props} />
  },
  h1(props) {
    return (
      <h1
        className="heading-3-b"
        id="skip-nav"
        tabIndex={-1}
        {...props}
      />
    )
  },
  h2(props) {
    return <h2 className="heading-5-s" {...props} />
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

    return (
      <LzLink to={href} passHref {...props}>
        {props.children}
      </LzLink>
    )
  },
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={components} />
}
