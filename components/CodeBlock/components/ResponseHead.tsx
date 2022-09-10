import { LzCodeSelect } from "components";
import { ItemType } from "../types";

export type ResponseProp = {
  title: string;
  item: ItemType;
  onChange: (i: number) => void;
}

const ResponseHead = (props: ResponseProp) => {
  const { title, item, onChange } = props;
  const { name } = item as ItemType;
  console.log(props)
  return (
    <div className='bg-neu-50'>
      <div className='px-8 py-2.5 flex justify-between border-b border-neu-200'>
        <div className='flex items-center'>
          <h4 className='text-sm font-proxima font-semibold text-neu-600'>{title || 'Response'}</h4>
        </div>
        <div className='flex items-center'>
          {item.name.length > 1 ? <LzCodeSelect onChange={onChange} items={name} /> : null}
        </div>
      </div>
    </div>
  )
}

export default ResponseHead