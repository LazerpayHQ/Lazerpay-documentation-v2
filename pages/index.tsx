import FooterWrapper from 'components/Footer'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <FooterWrapper />
    </div>
  )
}

export default Home
