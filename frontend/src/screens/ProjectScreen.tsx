
import CustomLoader from "../components/CustomLoader";
import Footer from "../components/Footer";
import {useGetAllProjectsQuery} from "../features/projectApiSlice";
import {useParams} from "react-router-dom";

import ImageCarousel from "../components/ImageCarousel";
import {useNavigate} from "react-router-dom";
import {ReactTitle} from "react-meta-tags"



export default function ProjectScreen() {
    const {keyword} = useParams();
    const {data: projects, isLoading, isError} = useGetAllProjectsQuery({keyword});
    const navigate = useNavigate();

    return (
        <>
            <ReactTitle title="Project Page" />
            <div className={"bg-white mx-auto py-4"}>
                <div className={"mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 xl:px-10"}>
                    {isLoading ? (
                        <div className={"py-6 mb-2"}>
                            <CustomLoader />
                        </div>
                    ) : isError ? (
                        <div className={"py-6 mb-2 text-red-700"}>
                            {isError}
                        </div>
                    ) : (
                        // Project Card
                        <section className={"mx-auto"}>
                            <div className={"-mx-px max-h-fit grid grid-cols-2 cursor-pointer border-spacing-1 max-h-100 py-2 gap-2 " +
                                "border-gray-200 sm: mx-0 md: grid-cols-3 lg: grid-cols-4 lg:max-h-fit "}
                                            >
                                {projects?.data.map((project, index) => {
                                    return (

                                            <div key={`${project}-${index}`}
                                                 onClick={() => navigate(`/projects/${project.id}`)}
                                                className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-400 hover:-translate-y-1 flex flex-col">
                                                <div className="relative">
                                                    <img src={project.image} alt={project.title}
                                                         className="w-full h-56 object-cover"/>
                                                    <div
                                                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
                                                    <span
                                                        className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                                                        {project.jobnumber}</span>
                                                </div>
                                                <div className="p-6 flex-grow flex flex-col">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                        <a href={`/projects/${project.id}`} key={project.id}>
                                                        </a>
                                                        {project.name}</h3>
                                                    <p className="text-gray-600 flex-grow">{project.description}</p>
                                                </div>
                                            </div>
                                    )
                                })}

                            </div>
                        </section>
                    )}

                </div>

            </div>
            <ImageCarousel />
            <Footer />

        </>
    )
}