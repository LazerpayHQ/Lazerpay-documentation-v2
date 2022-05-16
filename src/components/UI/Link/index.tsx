import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import classNames from 'classnames';
import React from 'react';

interface IProps {
    to: string;
    passHref?: boolean;
    anchor?: boolean;
    children?: React.ReactNode;
    className?: string
};

const LzLink = React.forwardRef(({ to="#", passHref= false, anchor, children, className, ...rest }: IProps, ref: any)=> {
    const { pathname } = useLocation();
    const isActive = to.includes(pathname);
    const isExternalLink = to.includes('http') ? {target: '_blank'} : {};

    return (
        <Link to={to}>
            <a ref={ref} {...rest} {...isExternalLink} className={classNames('hover:text-pri-500 relative group w-fit transition duration-200 text-nue-800', className,{
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

export default LzLink;