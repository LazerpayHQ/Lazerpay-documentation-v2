import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface IProps {
    to?: string;
    passHref?: boolean;
    anchor?: boolean;
    children?: React.ReactNode;
    className?: string
};

const LzLink = React.forwardRef(({ to="#", passHref= false, anchor, children, className, ...rest }: IProps, ref: any)=> {
    const { pathname } = useRouter();
    const isActive = to.includes(pathname);
    const isExternalLink = to.includes('http') ? {target: '_blank'} : {};

    return (
        <Link 
            passHref={passHref} 
            href={to} 
            {...rest} 
            {...isExternalLink}>
            <a ref={ref} className={classNames('hover:text-pri-500 !no-underline relative group w-fit transition duration-200 text-nue-800', className,{
                'text-nue-900': isActive,
                'flex items-center space-x-2': anchor
            })}>
                {children}
                {anchor && (
                    <span className='absolute hidden text-xl text-neu-500 -right-8 group-hover:block'>
                        #
                    </span>
                )}
            </a>
        </Link>
    )
})

LzLink.displayName = 'LzLink'
export default LzLink;