import classNames from 'classnames';
import React from 'react';

const LzDivider = React.forwardRef(({ className }: { className?: string | undefined }, ref:any)=> (
    <div ref={ref} className={classNames('border-t border-neu-200 h-1', className)} />
))

export default LzDivider;