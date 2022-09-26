import LzLink from './UI/link'
import { paginate } from 'lib/pagination-utils'
import { useRouter } from 'next/router'
import PaginateLeftIcon from 'public/icons/paginate-left-icon'
import PaginateRightIcon from 'public/icons/paginate-right-icon'

export function usePagination() {
  const { asPath } = useRouter();
  const { prev, next } = paginate({ framework: 'react', current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination() {
  const { prev, next } = usePagination();
  const prevPath = prev?.path ? `/docs/${prev.path}` : "#";
  const nextPath = next?.path ? `/docs/${next.path}` : "#";
  return (
    <div className='flex justify-end sm:justify-between proxima'>
      <div className='space-x-3 hidden sm:flex'>
        {prev && (
          <>
            <LzLink to={prevPath} className='border border-pri-500 rounded-lg p-4 '>
              <PaginateLeftIcon />
            </LzLink>
            <div>
              <p className='text-neu-400 caption-s'>PREVIOUS</p>
              <p className='paragraph-2-s text-pri-900'>{prev?.label ? prev.label : "Quick start"}</p>
            </div>
          </>
        )}
      </div>
      <div className='flex justify-end space-x-3'>
        {next && (
          <>
            <div className='text-right'>
              <p className='text-neu-400 caption-s'>NEXT</p>
              <p className='paragraph-2-s text-pri-900 '>{next?.label ? next.label : "Accept payments"}</p>
            </div>
            <LzLink to={nextPath} className='border border-pri-500 rounded-lg p-4  '>
              <PaginateRightIcon />
            </LzLink>
          </>
        )}
      </div>
    </div>
  )
}
