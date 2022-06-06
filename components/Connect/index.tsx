import LzLink from "components/UI/Link";
import { channels } from "./data";

export default function ConnectCommunity():JSX.Element {
    return (
        <div className="grid items-center content-center max-w-xs grid-cols-1 mx-auto mt-8 space-y-4 lg:max-w-full lg:space-y-0 lg:space-x-6 lg:grid-cols-3 text-neu-800">
            {
                channels.map((c: any) => (
                    <div key={c.title} className="grid items-center content-center justify-center grid-cols-6 gap-8 py-5 -space-x-8 lg:gap-0 lg:grid-cols-3 lg:items-end mx-uto lg:flex lg:p-0 lg:space-x-7">
                        <div className="flex justify-center col-span-3 lg:col-span-1">
                            {c.icon}
                        </div>
                        <div className="col-span-3">
                            <h3 className="heading-5-sm text-neu-900">{c.title}</h3>
                            <div className="flex flex-col max-w-xs mt-5 space-y-2">
                                {c.options.map((o)=> <LzLink className="paragraph-1 text-pri-500" to={o.link} key={o.title}>{o.title}</LzLink>) }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}