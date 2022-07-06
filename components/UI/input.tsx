import Styles from '../BankPayouts/index.module.scss'
import classNames from 'classnames'

interface MyProps {
    id?: string
    type?: string
    label: string
    placeholder?: string
    onChange?: () => void
}

const LzInput = ({ label, id, type, placeholder, onChange }: MyProps) => {
    return (
        <>
            <div className='flex flex-col space-y-4'>
                {' '}
                <label className='font-proxima capitalize paragraph-1-s'>
                    {label}
                </label>
                <input
                    id={id}
                    type={type ? type : 'text'}
                    onChange={onChange ? onChange : () => { }}
                    className={classNames(
                        Styles.input,
                        'placeholder:px-5 px-2  placeholder:font-proxima',
                    )}
                    placeholder={placeholder ? placeholder : 'Enter your email address'}
                />
            </div>
        </>
    )
}

export default LzInput
