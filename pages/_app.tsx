import { DefaultSeo } from "next-seo"
import "../styles/prism.css"
import "../styles/globals.scss"
import siteConfig from "site.config"

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...siteConfig.seo} />
      <Component {...pageProps} />
    </>
  )
}
