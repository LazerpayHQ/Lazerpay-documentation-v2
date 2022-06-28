import classNames from "classnames";
import { AlertIcon, ErrorIcon, InfoIcon, SuccessIcon } from "public/icons";

interface IProps {
    content?: string | React.ReactNode,
    status?: 'warning' | 'error' | 'success' | 'info',
    children?: any,
    title?: string,
    className?: string
}

const LzAlert = ({ content, children, status = "info", title, className }: IProps) => {
    const variants = {
        'warning': {
            classNames: 'border-war-800 bg-war-50',
            icon: <AlertIcon />
        },
        'error': {
            classNames: 'border-err-800 bg-err-50',
            icon: <ErrorIcon />
        },
        'success': {
            classNames: 'border-suc-800 bg-suc-50',
            icon: <SuccessIcon />
        },
        'info': {
            classNames: 'border-neu-800 bg-neu-50',
            icon: <InfoIcon />
        }
    };

    return (
        <div className={classNames(
            className,
            "relative text-neu-800 py-4 px-6 md:px-8 rounded-5 border-l-4 paragraph-1", variants[status]['classNames']
        )}>
            <span className="absolute -left-4 -top-5">
                {variants[status]['icon']}
            </span>
            <h4 className="mb-2.5 heading-7-s">{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: (children || content) }} />
        </div>
    )
}

export default LzAlert;