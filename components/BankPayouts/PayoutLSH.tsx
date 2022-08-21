import LzInput from '../UI/input'
import LzButton from 'components/UI/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFields {
    email: string
}

const schema = yup
    .object({
        email: yup.string().email("Please input a valid email").required('Email is required'),
    })
    .required()

export const PayoutLHS = ({ title, desc, label, type }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFields>({
        resolver: yupResolver(schema),
    })

    const onSubmit = (values: IFields) => null

    return (
        <>
            <h1 className='heading-3-b lg:heading-2-b'>{title}</h1>
            <p className='paragraph-2' dangerouslySetInnerHTML={{ __html: desc }} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-6'
            >
                <LzInput
                    type={type}
                    label={label}
                    {...register('email')}
                    errors={errors.email?.message}
                    className='w-[335px] lg:w-[412px]'
                    placeholder='Please enter your email'
                />

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
