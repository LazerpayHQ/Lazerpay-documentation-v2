import { DefaultSeo } from "next-seo"
import "../styles/prism.scss"
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
