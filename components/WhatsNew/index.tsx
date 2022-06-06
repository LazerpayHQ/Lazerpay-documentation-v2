import classNames from "classnames";
import { relativeDate } from "lib/format";
import { timelines } from "./data";
import Styles from './index.module.scss';

const Label = ({ label }):JSX.Element => {
    const options = {
        'PAYMENTS': 'bg-suc-50 text-suc-500',
        'USE CASES': 'bg-pri-50 text-pri-500'
    }

    return (
        <div className={classNames(options[label], 'uppercase paragraph-1 w-max rounded-4 px-2.5 py-1')}>{label}</div>
    )
};

export default function WhatsNew():JSX.Element{

    return (
        <div className={classNames(Styles.WhatsNew, 'text-neu-800 mt-5')}>
            <div className="space-y-8 lg:space-y-0 md:pl-10">
                {timelines.map((t)=> (
                    <div key={t.title} className={classNames(Styles.Timeline, 'flex flex-col md:grid grid-cols-12')}>
                        <span className="col-span-1 mb-5 whitespace-pre paragraph-1">{relativeDate(t.date)}</span>
                        <div className={classNames(Styles.Content, 'md:!pl-28 md:col-span-11')}>
                            <h4 className="heading-5-s-sm text-neu-800">{t.title}</h4>
                            <p className="mt-1.5 mb-3 paragraph-1 text-neu-500">by {t.author}</p>
                            <div className="mb-4 paragraph-1">{t.desc}</div>
                            <Label label={t.label} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}