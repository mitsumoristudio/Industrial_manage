

export const StaticHeader = () => {
    return (
        <header className={"fixed left-0 right-0 z-50 bg-black bg-opacity-50 py-4"}>

            <nav className={"flex justify-center items-center gap-4"}>
                <a href="/" className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                    "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                    Home
                </a>
                <a href="/" className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                    "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                    Service
                </a>
                <a href="/" className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                    "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                    Contact
                </a>
                <a href="/" className={"uppercase font-semibold text-lg text-white text-center px-5 py-1 " +
                    "transition-all ease-linear hover:bg-blue-400 rounded-lg hover: shadow-md"}>
                    About
                </a>
            </nav>

        </header>
    )
}
export default StaticHeader;