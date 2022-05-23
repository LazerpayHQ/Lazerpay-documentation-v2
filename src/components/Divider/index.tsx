import classNames from 'classnames';

const Divider = ({ className }: { className?: string })=> (
  <div className={classNames(className, 'h-1 border-t py-2 border-neu-200')} />
);

export default Divider;