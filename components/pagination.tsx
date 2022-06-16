import { paginate } from 'lib/pagination-utils'
import { useRouter } from 'next/router'
import PaginateLeftIcon from 'public/icons/paginate-left-icon'
import PaginateRightIcon from 'public/icons/paginate-right-icon'
import LzButton from './UI/Button'

export function usePagination() {
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework: 'react', current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination(props: any) {
  const { prev, next } = usePagination()
  return (
    <div className='flex justify-end sm:justify-between proxima'>
      <div className='space-x-3 hidden sm:flex'>
        <button className='border border-pri-500 rounded-lg p-4 '>
          <PaginateLeftIcon />
        </button>
        <div>
          <p className='text-neu-400'>PREVIOUS</p>
          <p className='font-bold text-pri-900'>Quick start</p>
        </div>
      </div>
      <div className='flex justify-end space-x-3 text-sm'>
        <div className='text-right'>
          <p className='text-neu-400'>NEXT</p>
          <p className='font-bold text-pri-900 '>Accept payments</p>
        </div>
        <button className='border border-pri-500 rounded-lg p-4  '>
          <PaginateRightIcon />
        </button>
      </div>
    </div>
  )
}
