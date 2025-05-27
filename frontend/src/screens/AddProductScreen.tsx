
import {ChangeEvent, useState} from "react";
import {toast} from "react-toastify";
import {Link, useNavigate,} from "react-router-dom";
import {Field, Label, Textarea} from "@headlessui/react";
import {useSelector} from "react-redux";
import {useCreateProductMutation, useUploadProductImageMutation} from "../features/productApiSlice";

export const AddProductScreen = () => {

    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [brand, setBrand] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [countInStock, setCountInStock] = useState<number>();
    const [category, setCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [createProduct] = useCreateProductMutation();
    const [uploadProductImage] = useUploadProductImageMutation();

    const {userInfo} = useSelector((state : any) => state.auth);
    const usersID = userInfo?.user || "22";

    const uploadImageHandler = async (e: any) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        try {
            const res = await uploadProductImage(formData).unwrap()

            setImage(res.image)
            toast.success("Image uploaded successfully.");
        } catch (error) {
            toast.error("Error uploading image.");
        }
    }

    const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const parsedValue = newValue === "" ? "" : parseFloat(newValue)

        if (!isNaN(parsedValue as number) || newValue === "") {
            // @ts-ignore
            setPrice(parsedValue)
        }
    }

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            await createProduct( {
                user_id: usersID,
                name: name,
                price: price,
                brand: brand,
                image: image,
                category: category,
                description: description,
                count_in_stock: countInStock,
                rating: 0,
                num_reviews: Number(0),
            }).unwrap();

            toast.success("Product Added Successfully.");

            navigate("/")
        } catch (error) {
            toast.error("Error adding Product")
        }
    }



    return (
        <>
            <form className={'min-h-[80vh] flex items-center p-2 '}
                  onSubmit={onSubmitHandler}
            >
                <div
                    className={"flex flex-col gap-2 m-auto items-start rounded-lg p-5 min-w-[460px] sm: min-w-280 border rounded-xl" +
                        "text-zinc-700 text-sm shadow-lg "}
                >
                    <h1 className={"text-2xl font-semibold text-center text-gray-800"}
                        data-cy={"addProduct-title"}
                    >Add new product
                    </h1>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}
                           data-cy={"product-headline"}
                        >Product Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter product name"}
                               type={name}
                               value={name}
                               required={true}
                               data-cx={"input-product"}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}
                           data-cy={"price-headline"}
                        >Price $</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter price"}
                               type={"price"}
                               value={price}
                               required={true}
                               data-cx={"input-price"}
                               onChange={handleNumChange}
                               // onChange={(e: any) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}
                           data-cy={"brand-headline"}
                        >Brand Name</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter brand name"}
                               type={brand}
                               value={brand}
                               required={true}
                               data-cx={"input-brand_name"}
                               onChange={(e : ChangeEvent<HTMLInputElement>) => setBrand(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}
                           data-cy={"count-headline"}
                        >Count In Stock</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Count In Stock"}
                               type={'countInStock'}
                               value={countInStock}
                               required={true}
                               data-cx={"input-count_in_stock"}
                               onChange={(e : any) => setCountInStock(e.target.value)}/>
                    </div>

                    <div className={'w-full '}>
                        <p className={"mb-1 text-lg font-semibold"}
                           data-cy={"category-headline"}
                        >Category</p>
                        <input className={'border border-zinc-700 rounded-lg w-full p-2 pt-1'}
                               placeholder={"Enter Category"}
                               type={category}
                               value={category}
                               required={true}
                               data-cx={"input-category"}
                               onChange={(e) => setCategory(e.target.value)}/>
                    </div>

                    <div className="col-span-full h-80 border-b-gray-700">
                        <label htmlFor="cover-photo" className="block text-md font-medium text-gray-900">
                            Add photo
                        </label>

                        <label
                            className={"cursor-pointer flex items-center justify-center w-full h-32  border-dashed border-gray-400 rounded-lg" +
                                "hover:border-blue-600 transition"}
                            htmlFor={"image-upload"}
                        >
                            {image ? (
                                <img src={image} alt={"Preview"} className={"h-full object-contain"}/>
                            ) : (
                                <span className={"text-gray-800"}>Click to upload an image</span>
                            )}
                        </label>
                        <input
                            id={"image-upload"}
                            type="file"
                            accept={"image/*"}
                            className={"hidden"}
                            onChange={uploadImageHandler}
                        />

                        <Field onChange={(e : any) => setDescription(e.target.value)}>
                            <Label className={"font-semibold text-lg "}
                                   data-cy={"description"}
                                    >Description</Label>
                            <div className={"max-w-full flex flex-col mx-auto mt-3 my-2 "}>
                                <Textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={"p-2 text-lg border border-gray-500 focus:ring-2 ring-offset-blue-600 rounded-lg items-center h-20 w-96 justify-center"}
                                    name={"Description"}
                                    data-cx={"input-description"}
                                    value={description}/>
                            </div>
                        </Field>

                    </div>
                    <div className={"flex flex-row mx-auto gap-6 "}>
                        <button
                            type="submit"
                            data-cy={"submit"}
                            className="flex max-w-xs  flex-1 items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                        >
                            Submit
                        </button>

                        <Link to={"/admin/producttable"}>
                            <button
                                data-cy={"cancel"}
                                className="flex max-w-xs   flex-1 items-center justify-center rounded-lg border border-transparent bg-red-300 px-8 py-2 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                            > Cancel
                            </button>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}