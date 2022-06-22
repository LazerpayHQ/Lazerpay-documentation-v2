import redirect from "lib/redirect";
import { GetServerSidePropsContext } from "next";

export default function Home() {
    return null
}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
    redirect(ctx, '/docs/quick-start')
    return {
        props: {}
    }
}