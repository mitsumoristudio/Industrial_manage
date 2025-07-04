
import {Helmet} from "react-helmet"
import {assets} from "../assets/assets";
import Footer from "../components/Footer";

export default function AboutUsScreen() {

    return (
        <>
            <Helmet>
                <title>About Us</title>
                <meta name="description" content="About Us" />
            </Helmet>
            {/* Featured section absolute for offsetting the hero section */}
            <section
                aria-labelledby="social-impact-heading"
                className="mx-auto max-w-8xl absoluteinset-x-0 min-h-full px-4 pt-24 sm:px-4 sm:pt-32 lg:px-6 "
            >
                <div className="relative overflow-hidden rounded-xl max-h-full bottom-20  ">
                    <div className="absolute inset-0 ">
                        <img
                            alt=""
                            src={assets.aerial_city}
                            className="size-full object-cover place-items-center"
                        />
                    </div>
                    <div className="relative bg-gray-700/45 px-6 py-20 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                            <h2 id="social-impact-heading"
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block sm:inline">ALL FOR ONE </span>
                            </h2>

                            <p className="mt-3 text-xl text-white">
                                Our clients trust us to deliver their most important work. Our people have no limit to
                                what we can build together.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className={"underline text-4xl text-center text-gray-800 font-bold"}>About Industrials</h2>
            </section>

            <div className={'flex flex-col my-10 md:flex-row gap-12 px-6 items-center'}>
                <img className={'w-full md: max-w-[480px] rounded-xl shadow-lg'} src={assets.construction_about} alt={''}/>

                <div className={"lg:col-span-2 lg:mt-0 sm: min-w-280 border rounded-xl"}>
                    <div className={"bg-gray-50 p-6 rounded-lg shadow-md sticky top-20"}>
                        <h2 className={"text-2xl font-bold text-gray-800 mb-4"}>Our Story</h2>
                        <div className={'flex flex-col py-2   text-gray-600 '}>
                            <p>Since 2020, we have built our reputation for excellence by exceeding our clients expectation.
                            We value relationships established on a promise and cultivated by trust and valuable work.
                                We are locally operated and work out of Nashville, TN. Our team works across different sectors
                                and markets to deliver on high quality at expected value. We have consistent results for our clients
                                on challenging projects.
                            </p>
                            <p>Do the kind of work that makes our clents want us to trust for their next project.</p>
                            <b className={'text-gray-800 text-2xl py-2 '}>Our Vision </b>
                            <p>Serving our communities one step at time.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call to Action Section */}
            <section className="bg-blue-500 opacity-90 text-white py-6 px-6 md:px-12 rounded-t-xl shadow-lg">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together!</h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Contact us today for a free consultation and let's build something great as a team.
                    </p>
                    <a
                        href="/contactus"
                        className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </section>

            <Footer/>
        </>
    )
}