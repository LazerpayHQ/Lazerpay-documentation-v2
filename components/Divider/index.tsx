import classNames from 'classnames';

const Divider = ({ className }: { className?: string })=> (
  <div className={classNames('h-1 border-t py-2 border-neu-200', className)} />
);

export default Divider;