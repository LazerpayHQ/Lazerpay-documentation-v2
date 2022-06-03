import classNames from "classnames";
import CodeBlock from "components/CodeBlock";
import LzButton from "components/UI/Button";
import Styles from './index.module.scss';

export default function AcceptPayments():JSX.Element {

    return (
        <section className={classNames(Styles.AcceptPayments, "flex w-full space-x-6")}>
            <div className="flex flex-col justify-between px-4 pb-4 pt-14 rounded-8 w-96">
                <div className="!pr-8">
                    <h3 className="heading-6-s">To get started</h3>
                    <p className="mt-5 paragraph-1">Authenticate all Lazerpay API calls using your secret keys.</p>
                </div>
                <LzButton className="w-full paragraph-1" size="md" rightIcon={'chevron'}>
                    Let's go
                </LzButton>
            </div>
            <div className="w-4/6 bg-pri-50">
                <CodeBlock id="api" />
            </div>
        </section>
    )
}