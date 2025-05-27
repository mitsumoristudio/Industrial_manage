


import Footer from '../components/Footer'
import {NavLink} from "react-router-dom";
import Meta from "../components/Meta";
import ImageSlider from "../components/ImageSlider";
import HomeScreenProductCard from "../components/HomeScreenProductCard";
import ShippingFooter from "../components/ShippingFooter";

export default function HomeScreen() {

    return (
        <>
            <Meta title={"Home"} />
            <section>

                <div className={"bg-white opacity-95 "}>
                    <ImageSlider/>
                </div>

                <div className={"container mx-auto"}>
                    <div className={"flex flex-col items-center justify-center mx-auto text-center"}>
                        <h1 className={"uppercase text-gray-600 font-semibold text-4xl "}>
                            2025 Summer Sale
                        </h1>
                        <p className={"lead text-center text-xl"}>
                            Refurnished equipment at steep discount.</p>
                    </div>
                </div>
                <div className={"bg-white"}>
                    <div className={"mx-auto sm: px-6 sm: py-6 lg: max-w-6xl lg: px-8"}>
                        <div className={"md: flex md: items-center md: justify-between"}>
                            <h2 className={"text-2xl font-bold tracking-tight text-gray-800"}>Trending Products</h2>
                            <NavLink to={"/products"}
                                     className={"hidden text-lg font-medium text-indigo-700 hover:text-blue-600 md:block"}>Shop
                                the Selection
                                <span aria-hidden={"true"}>&rarr;</span></NavLink>
                        </div>
                    </div>
                    <HomeScreenProductCard/>
                </div>

                <div className={"text-center font-bold text-3xl pt-10 text-gray-900"}>
                    <p>About our store</p>
                </div>

                <div className={'flex flex-col my-10 md:flex-row gap-2 px-4'}>
                    <div className={'flex flex-col mx-2 justify-center gap-4 md: w-2/4 text-lg text-gray-800 '}>
                        <p>Visit us or order online and pick up at our Nashville location</p>
                        <p>Our store has everything you need for your next job or home improvement project</p>
                        <b className={'text-gray-800'}>We offer a wide range of products at great price</b>
                        <p>If you have any questions or need our help, our friendly and knowledgeable staff will guide you
                           around our store</p>
                    </div>
                </div>
                <ShippingFooter/>

                <div className={"mt-1"}>
                    <Footer/>
                </div>

            </section>

        </>
    )
}
