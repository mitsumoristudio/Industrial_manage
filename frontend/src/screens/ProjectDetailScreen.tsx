
import {useNavigate, useParams} from "react-router-dom";
import {useGetProjectQuery} from "../features/projectApiSlice";
import CustomLoader from "../components/CustomLoader";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Meta from "../components/Meta"


export default function ProjectDetailScreen() {
    const {id} = useParams();
    const navigate = useNavigate();
    // @ts-ignore
    const {data: project, isError, isLoading} = useGetProjectQuery(id);

    const onBackHandler = () => {
        navigate("/projects");
    }

    return (
        <main>
            <Meta title={"Project Details"} />
            <div className={"bg-white mx-auto max-w-7xl overflow-hidden sm: px-6 lg: px-8"}>
                {isLoading ? (
                    <div className={"py-6 mb-2"}>
                        <CustomLoader />
                    </div>
                ) : isError ? (
                    <div className={"text-red-600"}>{isError}</div>
                ) : (
                    < div className={"container mx-auto px-6"}>
                        <button className={"my-4"}
                            onClick={() => onBackHandler()}>
                            <FaCircleArrowLeft size={36}/>
                        </button>

                        <div className={"lg:grid lg:grid-cols-5 lg:gap-12"}>
                            <div className={"lg:col-span-3"}>

                            </div>
                        </div>
                    </div>
                )}
            </div>




        </main>
    )
}