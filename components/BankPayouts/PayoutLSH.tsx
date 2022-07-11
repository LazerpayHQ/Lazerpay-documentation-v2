import LzInput from '../UI/input'
import LzButton from 'components/UI/button'

export const PayoutLHS = ({ title, desc, label, type }) => {
    return (
        <>
            <h1 className='heading-3-b lg:heading-2-b'>{title}</h1>
            <p className='paragraph-2' dangerouslySetInnerHTML={{ __html: desc }} />
            <form className='flex flex-col space-y-6'>
                <LzInput type={type} label={label} className='w-[335px] lg:w-[412px]' placeholder='Please enter your email' />
                <LzButton
                    size='lg'
                    variant='pri'
                    rightIcon='chevron'
                    className='w-[335px] lg:w-[412px]'
                >
                    Notify me
                </LzButton>
            </form>
        </>
    )
}