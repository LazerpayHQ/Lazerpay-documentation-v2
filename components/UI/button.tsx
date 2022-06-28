import classNames from 'classnames';
import { BsArrowRight, BsChevronRight } from 'react-icons/bs';
import React, { useRef } from 'react';
import LzLink from './link';

interface IProps {
  leftIcon?: any;
  rightIcon?: any;
  isDisabled?: boolean;
  ghost?: boolean;
  asLink?: string;
  children: React.ReactNode;
  variant?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
}

const LzButton = ({
  leftIcon,
  isDisabled,
  rightIcon,
  ghost,
  asLink,
  children,
  variant = 'pri',
  size = 'sm',
  className, ...rest }: IProps) => {
  const linkRef = useRef<HTMLElement>(null);

  const variants: any = {
    pri: 'lz-btn-pri',
    sec: 'lz-btn-sec',
    gho: 'lz-btn-gho',
  };
  const sizes: any = {
    sm: 'lz-btn-sm',
    md: 'lz-btn-md',
    lg: 'lz-btn-lg',
  };

  interface IconProp {
    [index: string]: React.ReactNode
  }

  const icon: IconProp = {
    arrow: <BsArrowRight className="text-current" />,
    chevron: <BsChevronRight className="text-current" />
  };

  const handleClick = () => {
    rest?.onClick?.();
    if (asLink) linkRef.current?.click();
  };

  if (ghost) {
    return (
      <div tabIndex={0} role="button" className="flex items-center space-x-2 group" {...rest} onClick={handleClick}>
        <span className="whitespace-pre paragraph-1-s xl:paragraph-3-s text-neu-700">{children}</span>
        {
          rightIcon && (
            rightIcon === 'chevron' ?
              <BsChevronRight fill="text-neu-700" className="duration-200 transform group-hover:translate-x-1" />
              : rightIcon === 'arrow' ?
                <BsArrowRight fill="text-neu-700" className="duration-200 transform group-hover:translate-x-1" />
                : null
          )
        }
        {asLink && <LzLink ref={linkRef} to={asLink} className='m-0 sr-only' />}
      </div>
    );
  }

  return (
    <>
      <button
        disabled={isDisabled}
        {...rest}
        onClick={handleClick}
        className={classNames('lz-btn group whitespace-pre', sizes[size], className, variants[variant])}>
        {
          leftIcon && (
            <span>
              {leftIcon && icon[leftIcon] || leftIcon}
            </span>
          )
        }

        <span className={classNames('block', { 'ml-2': leftIcon, 'mr-2': rightIcon })}>
          {children}
        </span>

        {
          rightIcon && (
            <span>
              {rightIcon && icon[rightIcon] || rightIcon}
            </span>
          )
        }
      </button>
      {asLink && <LzLink ref={linkRef} to={asLink} className='!m-0 sr-only' />}
    </>
  );
};

export default LzButton;
