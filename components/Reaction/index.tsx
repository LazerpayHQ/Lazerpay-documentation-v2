import { LzButton } from 'components'
import { ThumbsDownIcon, ThumbsUpIcon } from 'public/icons'
import useSetReaction from 'lib/use-set-reaction'
import { LzLoader } from 'components'
import { toast } from 'react-toastify'

const Reaction = (): JSX.Element => {
  const showToast = (type, message) => {
    toast[type](message)
  }

  const { showReaction, saveReaction, loading } = useSetReaction(showToast)

  if (!showReaction) return null

  return (
    <div className='flex items-center justify-between p-5 space-x-3 md:px-10 md:py-5 bg-pri-50 rounded-5 relative'>
      {loading && (
        <div className='absolute top-0 right-0 w-full h-full bg-white/75 flex justify-center items-center'>
          <LzLoader />
        </div>
      )}
      <p className='paragraph-1-s md:paragraph-2-s'>
        Did you find this page useful?
      </p>
      <div className='flex items-center space-x-4'>
        <LzButton
          className='caption md:paragraph-1'
          size='md'
          leftIcon={<ThumbsUpIcon />}
          onClick={() => saveReaction(true)}
        >
          Yes
        </LzButton>
        <LzButton
          className='caption md:paragraph-1'
          size='md'
          leftIcon={<ThumbsDownIcon />}
          onClick={() => saveReaction(false)}
        >
          No
        </LzButton>
      </div>
    </div>
  )
}

export default Reaction
