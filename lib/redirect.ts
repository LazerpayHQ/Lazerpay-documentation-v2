import { GetServerSidePropsContext } from "next";

export default function redirect(ctx: GetServerSidePropsContext, location: string) {
    if (ctx.res) {
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    }
}