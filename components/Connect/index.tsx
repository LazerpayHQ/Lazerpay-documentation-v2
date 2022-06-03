import LzLink from "components/UI/Link";
import { channels } from "./data";

export default function ConnectCommunity():JSX.Element {
    return (
        <div className="flex justify-between mt-8 space-x-6 text-neu-800">
            {
                channels.map(c => (
                    <div key={c.title} className="flex items-end space-x-7">
                        <div>
                            {c.icon()}
                        </div>
                        <div>
                            <h3 className="heading-5-sm text-neu-900">{c.title}</h3>
                            <div className="flex flex-col mt-5 space-y-2">
                                {c.options.map((o)=> <LzLink className="paragraph-1 text-pri-500" to={o.link} key={o.title}>{o.title}</LzLink>) }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}