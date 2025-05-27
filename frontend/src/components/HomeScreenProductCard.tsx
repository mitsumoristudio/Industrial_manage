
import CustomLoader from "./CustomLoader";

const mockHomeProduct = [
    {
        id: 1,
        name: "Modern Equipment For Floor Finish",
        price: "800.00",
        imageSrc: "../images/modern-equipment.jpg"
    },
    {
        id: 2,
        name: "Heavy Equipment Loader",
        price: "1,000,000",
        imageSrc: "../images/heavy-construction-loader.jpg"
    },
    {
        id: 3,
        name: "Vertical Shot",
        price: "1200.00",
        imageSrc: "../images/vertical-shot.jpg"
    },
    {
        id: 4,
        name: "Bicycle Sprocket",
        price: "100.00",
        imageSrc: "../images/bicycle-parts.jpg"
    },


]

export default function HomeScreenProductCard() {
    return (
                <>
                    <div
                        className="mt-3 grid grid-cols-2 px-4 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
                        key={"mockHomeProduct.name"}>
                        {mockHomeProduct?.map((product) => (
                            <div key={product.id}
                                 className="group relative cursor-pointer my-2 hover:translate-y-[-10px] transition-all duration-500">
                                <div
                                    className="h-56 w-full overflow-hidden rounded-md cursor-pointer bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"
                                    key={product.id}>
                                    <img alt={product.name} src={product.imageSrc}
                                         key={product.id}
                                         className="size-full object-cover"/>
                                </div>
                                <h3 className="mt-4 text-lg text-gray-700">
                                    <a href={"/products"}>
                                        <span className="absolute inset-0" key={product.id}/>
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            )
}