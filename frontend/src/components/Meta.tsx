
import {Helmet} from "react-helmet-async";

interface MetaProps {
    title: string;
    description: string;
    keywords: string;
}

export default function Meta(props: MetaProps) {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name={"description"} content={props.description} />
            <meta name={"keywords"} content={props.keywords} />
        </Helmet>
    )
}
Meta.defaultProps = {
    title: "Welcome to Ecommerce shop",
    description: "We sell sustainable products",
    keywords: "Home Essentials, buy furniture"
};