import classNames from "classnames";
import Divider from "components/Divider";
import LzLink from "components/UI/Link";
import { BsGithub } from "react-icons/bs";
import { demos } from "./data";
import Styles from './index.module.scss';

export default function ExploreDemo():JSX.Element {
    
    return(
        <div className={classNames(Styles.Demos, "flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-4")}>
            {
                demos.map((data)=> (
                    <div key={data.title} className={classNames(Styles.Demo, "flex-1 p-8 rounded-8")}>
                        <span>{data.icon}</span>
                        <div>
                            <p className="py-3.5 paragraph-2-s text-neu-900">{data.title}</p>
                            <div className="flex items-center space-x-2 text-neu-800">
                                <span className="text-neu-500">
                                    <BsGithub />
                                </span>
                                <LzLink className="paragraph-1-s text-pri-500">{data.repo.title}</LzLink>
                            </div>
                            <Divider className="w-20 mt-5" />
                            <div className="space-y-2">
                                <h4 className="caption-s text-neu-600">API USED</h4>
                                {data.apiUsed.map((d)=> (
                                    <LzLink key={d.title} className="block paragraph-1-s text-neu-700" to={d.link}>
                                        {d.title}
                                    </LzLink>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}