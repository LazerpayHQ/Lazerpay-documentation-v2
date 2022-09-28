import cn from 'classnames'
import LzToggle from 'components/UI/toggle'
import LzCodeSelect from 'components/UI/codeSelect'
import { RequestData, RequestType } from '../types'

const RequestHead = (props: RequestData) => {
  const {
    method = undefined,
    requestData,
    showResponse,
    onChange,
    toggleResponse,
  } = props
  const { name } = requestData as RequestType
  const options = {
    POST: 'bg-suc-100',
    GET: 'bg-pri-500 text-neu-50',
    PUT: 'bg-sec-700 text-neu-50',
  }
  return (
    <div className='bg-neu-50'>
      <div className='px-8 py-2.5 flex justify-between'>
        <div className='flex items-center font-proxima'>
          {method && (
            <span
              className={cn(
                'uppercase caption-s rounded-8 px-2.5 py-1 paragraph-1-s h-fit mr-4',
                options[method],
              )}
            >
              {method}
            </span>
          )}
          {name.length > 1 && <LzCodeSelect onChange={onChange} items={name} />}
        </div>
        <div className='flex items-center'>
          <span className='leading-5 paragraph-1-s mr-3.5'>
            {showResponse ? 'Hide Response' : 'Show Response'}
          </span>
          <LzToggle state={showResponse} onChange={toggleResponse} />
        </div>
      </div>
    </div>
  )
}

export default RequestHead
