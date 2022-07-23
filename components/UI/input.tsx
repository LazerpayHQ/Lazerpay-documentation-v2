import classNames from "classnames";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface IProps {
    size?: 'lg' | 'md' | 'sm'
    textarea?: boolean
    errors?: string
    rightIcon?: string
    leftIcon?: string
    label?: string
    name?: string
    type?: string
    placeholder?: string
    className?: string
}
const LzInput = React.forwardRef(({
    size = 'lg',
    textarea,
    errors,
    rightIcon,
    leftIcon,
    label,
    className,
    ...rest }: IProps, ref: React.RefObject<HTMLInputElement | any>) => {
    const sizes = {
        'sm': 'lz-input lz-input-sm',
        'md': 'lz-input lz-input-md',
        'lg': 'lz-input lz-input-lg',
    }

    const icons: any = {
        'search': <BsSearch />
    }

    if (textarea) {
        return (
            <div className="w-full text-left">
                {label && <label htmlFor={rest?.name} className="lz-input-label">{label}</label>}
                <div className="relative w-full">
                    <span className="absolute -translate-y-1/2 text-neu-400 text-md lz-input-icon-left top-1/2 left-5">
                        {leftIcon && icons[leftIcon]}
                    </span>
                    <textarea
                        ref={ref}
                        id={rest.name}
                        className={
                            classNames(
                                sizes[size],
                                'lz-input-textarea',
                                { 'pl-12': icons[leftIcon] }
                            )}
                        {...rest} />
                    {errors && <span className="block mt-2 paragraph-1 text-err-500">{errors}</span>}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full text-left">
            {label && <label htmlFor={rest?.name} className="lz-input-label capitalize">{label}</label>}
            <div className="relative w-full">
                <span className="absolute -translate-y-1/2 text-neu-400 text-md lz-input-icon-left top-1/2 left-5">
                    {leftIcon && icons[leftIcon]}
                </span>
                <input
                    ref={ref}
                    id={rest.name}
                    className={
                        classNames(
                            sizes[size],
                            { 'pl-12': icons[leftIcon] },
                            { 'pr-12': icons[rightIcon] },
                            className
                        )}
                    {...rest} />
                <span className="absolute -translate-y-1/2 text-neu-400 text-md lz-input-icon-right top-1/2 right-5">
                    {rightIcon && icons[rightIcon]}
                </span>
            </div>
            {errors && <span className="block mt-2 paragraph-1 text-err-500">{errors}</span>}
        </div>
    )
})

export default LzInput;
