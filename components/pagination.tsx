import { paginate } from 'lib/pagination-utils'
import { useRouter } from 'next/router'
import PaginateLeftIcon from 'public/icons/paginate-left-icon'
import PaginateRightIcon from 'public/icons/paginate-right-icon'


interface IProps {
  nextName?: string
  prevName?: string
  children?: React.ReactNode,
}

export function usePagination() {
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework: 'react', current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination({ nextName, prevName }: IProps) {
  const { prev, next } = usePagination();

  console.log(prev, next)
  return (
    <div className='flex justify-end sm:justify-between proxima'>
      <div className='space-x-3 hidden sm:flex'>
        <button className='border border-pri-500 rounded-lg p-4 '>
          <PaginateLeftIcon />
        </button>
        <div>
          <p className='text-neu-400 caption-s'>PREVIOUS</p>
          <p className='paragraph-2-s text-pri-900'>{prevName ? prevName : "Quick start"}</p>
        </div>
      </div>
      <div className='flex justify-end space-x-3'>
        <div className='text-right'>
          <p className='text-neu-400 caption-s'>NEXT</p>
          <p className='paragraph-2-s text-pri-900 '>{nextName ? nextName : "Accept payments"}</p>
        </div>
        <button className='border border-pri-500 rounded-lg p-4  '>
          <PaginateRightIcon />
        </button>
      </div>
    </div>
  )
}
