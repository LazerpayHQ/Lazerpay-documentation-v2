
import LzLink from 'components/UI/link'
import LinkIcon from 'public/icons/link-icon'
import ArrowRightIcon from 'public/icons/arrow-right-icon'

interface MyProps {
    desc: string,
    title: string,
    route: string,
}

// card with Icon component
export const LinkedCard = ({ desc, title, route }: MyProps) => {
    return (
        <div key={route}>
            <LzLink className='my-2' to={route}>
                <div
                    key={route}
                    className='bg-white mb-2 p-6 md:pt-9 drop-shadow-xs rounded-8 lg:rounded-8 h-[210px] lg:w-92 z-10'
                >
                    <LinkIcon />
                    <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
                        {title}
                    </h5>
                    <p className='mr-6 paragraph-1'>{desc} </p>
                    <span className='flex justify-end pt-3'>
                        <ArrowRightIcon />
                    </span>
                </div>
            </LzLink>
        </div>
    )
}

// card without Icon component
export const PlainCard = ({ desc, title, route }: MyProps) => {
    return (
        <div key={route}>
            <LzLink className='my-2' to={route}>
                <div
                    key={route}
                    className='z-10 px-5 mb-2 bg-white md:pt-4 drop-shadow-xs rounded-8 lg:rounded-8 sm:w-auto lg:w-92'
                >
                    <h5 className='py-2 text-pri-500 md:py-4 paragraph-2 md:paragraph-3-s'>
                        {title}
                    </h5>
                    <p className='h-12 mr-6 paragraph-1'>{desc} </p>
                    <span className='flex justify-end py-5 pb-5'>
                        <ArrowRightIcon />
                    </span>
                </div>
            </LzLink>
        </div>
    )
}