import classNames from 'classnames'
import Styles from './index.module.scss'
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

// 1 Start integrating
export default function GetStarted(): JSX.Element {
    return (
        <section
            className={classNames(
                Styles.GetStarted,
                'grid md:grid-cols-2 items-center lg:flex-row w-full lg:space-y-1 w-full md:space-x-6',
            )}
        >
            <LinkedCard title='Crypto Transfers'
                desc='Withdraw and send crypto to an external wallet using our APIs.'
                route='transfers/crypto-transfers' />



            <LinkedCard title='Bank Transfers'
                desc='Send stable coins directly from your wallet to your local bank account.'
                route='transfers/bank-transfers' />

        </section>
    )
}

