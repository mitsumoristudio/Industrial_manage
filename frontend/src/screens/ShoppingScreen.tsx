
import CustomLoader from "../components/CustomLoader";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import {useGetAllProductsQuery} from "../features/productApiSlice";
import {useParams} from "react-router-dom";
import {StarIcon} from "@heroicons/react/20/solid";
import ImageCarousel from "../components/ImageCarousel";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ShoppingScreen() {
    const {keyword} = useParams();
    const {data: products, isLoading, isError} = useGetAllProductsQuery({keyword});

    return (
        <>
            <Meta title={"Shopping"} />
            <section>

                <div className={"bg-white"}>

                    <div className={"mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"}>

                        {isLoading ? (
                            <div className={"py-6 mb-2"}>
                                <CustomLoader/>
                            </div>

                        ) : isError ? (
                            <div className="text-red-600">
                                {isError}
                            </div>
                        ) : (
                            <>
                                <div
                                    className="-mx-px grid grid-cols-2 border-spacing-1 border-gray-200 sm: mx-0 md: grid-cols-3 lg: grid-cols-4">
                                    {products?.data.map((product) => (
                                        <div key={product.id}
                                             className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                                className={"aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-80"}
                                            />

                                            <div className={"pt-10 text-center"}>
                                                <h3 className={"text-sm font-medium text-gray-800"}>
                                                    <a href={`/products/${product.id}`} key={product.id}>
                                                        <span aria-hidden={"true"} className="absolute inset-0"/>
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <h2 className={"font-medium text-gray-600"} key={product._id}>
                                                    {product.brand}
                                                </h2>
                                                <div className={"flex justify-center mb-2 "}>
                                                    <p className={"sr-only"}>{product.rating} out of 5 starts</p>

                                                    {/*<Ratings value={product.rating} text={`${product.numReviews} reviews`} />*/}
                                                </div>
                                                <div className="flex items-center justify-center mb-1">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                                'size-5 shrink-0',
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <p className={"font-light"}
                                                   key={product._id}>{product.numReviews} review</p>

                                                <p className={"mt-4 text-base font-medium text-gray-800"}>${product.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        <div className={"container mx-auto py-3"}>
                            <div className={"flex flex-col items-center justify-center mx-auto text-center"}>
                                <h1 className={"uppercase text-gray-900 font-semibold text-4xl "}>
                                    Made for heavy duty
                                </h1>

                            </div>
                        </div>

                        <div className={"py-2 mx-auto"}>
                            <ImageCarousel/>
                        </div>


                    </div>
                </div>
                <div className={"mt-1"}>
                    <Footer/>
                </div>
            </section>
        </>
    )
}