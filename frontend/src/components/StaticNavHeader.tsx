
import {assets} from "../assets/assets"
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../features/authSlice";
import {NavLink, useNavigate} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminLine, RiUser2Fill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import SearchBar from "./SearchBar";
import {useLogoutMutation} from "../features/userApiSlice";


export const StaticNavHeader = () => {
    // @ts-ignore
    const {userInfo} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();
    // @ts-ignore

    const logoutHandler = async () => {
        try {
            // @ts-ignore
            await logoutApiCall().unwrap()
            // @ts-ignore
            dispatch(logout())
            navigate("/login")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <header className={"fixed left-0 right-0 z-50 bg-black bg-opacity-70 py-4"}>
            <div className={"flex items-center justify-between text-lg px-2 border-b border-b-gray-700"}>
                <div className={"flex items-center justify-center px-1 mx-2 gap-2"}>
                    <img
                    onClick={() => navigate("/")}
                    src={assets.crane_icon}
                    alt={"header-logo"}
                    className={"hidden md:flex size-12 cursor-pointer justify-center mx-2 mb-1"}/>
                </div>

                {/* Home, About Nav bar section */}
                <ul className={"flex justify-center items-center gap-4 hidden md:flex"}>
                    <NavLink to={"/"}>
                        <li
                        className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                        "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                            Home
                        </li>
                    </NavLink>

                    <NavLink to={"/projects"}>
                        <li
                            className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                                "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                            Projects
                        </li>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <li
                            className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                                "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                            Contact
                        </li>
                    </NavLink>

                    <NavLink to={"/about"}>
                        <li
                            className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                                "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                            About
                        </li>
                    </NavLink>
                </ul>

                {/* Search Bar, User Profile, My Profile, My Contacts dropdown */}
                <section>
                    <div className={"flex items-center gap-6 px-4"}>
                        <SearchBar/>

                        <div className={"flex items-center gap-3 cursor-pointer group relative"}>

                            {userInfo ? (
                                <div className={"flex items-center gap-3 cursor-pointer group relative"}>
                                    <RiUser2Fill size={26}/>
                                    <p className={"text-xs font-medium italic text-gray-800"}>{}</p>
                                    <div
                                        className={"absolute top-0 right-0 pt-16 text-base font-medium text-gray-800 z-20 hidden group-hover:block"}>
                                        <div className={"min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-3"}>
                                            <NavLink className={"hover:text-blue-500"} to={"/profile"}>
                                                User Profile
                                            </NavLink>

                                            <NavLink className={"hover:text-blue-500"} to={"/myContacts"}>
                                                My Contacts
                                            </NavLink>

                                            <NavLink className={"hover:text-blue-500"} to={"/myProjects"}>
                                                My Projects
                                            </NavLink>

                                            <NavLink
                                                className={"hover:text-blue-500"}
                                                to={"/logout"}
                                                onClick={logoutHandler}>
                                                <GrUserWorker size={26}/>
                                                Logout
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <NavLink
                                    className={"hover:text-blue-500"}
                                    to={"/login"}>
                                    <FaUserCircle size={26}/>
                                </NavLink>
                            )}
                        </div>
                        {/* User Login */}
                        {userInfo && (
                            <div className={"flex items-center gap-3 cursor-pointer group relative"}>
                                <RiAdminLine size={26}/>
                                <div
                                    className={"absolute top-0 right-0 pt-16 text-base font-medium text-gray-800 z-20 hidden group-hover:block"}>
                                    <div className={"min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-3"}>
                                        <p className={"hover:text-blue-500 cursor-pointer"}
                                        >
                                            <NavLink to={"/admin/contactTable"}>
                                                Contacts
                                            </NavLink>

                                        </p>
                                        <p className={"hover:text-blue-500  cursor-pointer"}
                                        >
                                            <NavLink to={"/admin/projectTable"}>
                                                Projects
                                            </NavLink>
                                        </p>
                                        <p className={"hover:text-blue-500  cursor-pointer"}
                                        >
                                            <NavLink to={"/admin/usertable"}>
                                                Users
                                            </NavLink>

                                        </p>
                                    </div>
                                </div>

                            </div>
                        )}


                    </div>

                </section>

            </div>


        </header>
        </>
    )
}

export default StaticNavHeader;


