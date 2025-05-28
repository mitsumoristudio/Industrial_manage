
import {mockShoppingData, mockData} from "../mockdata/mockShoppingData";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

export default function ImageCarousel() {

    const handleslideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const handleslideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft= slider.scrollLeft + 500;
    }

    return (
        <>
            <div className={"relative flex items-center"}>
                <MdChevronLeft
                    onClick={handleslideLeft}
                    size={40}
                    className={"opacity-60 cursor-pointer hover:opacity-100"}
                />

                <div id={"slider"}
                     key={"slider"}
                     className={"w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"}>
                    {mockShoppingData.map((item) => {
                        return (
                            <div
                                className="h-56 w-full overflow-hidden rounded-md cursor-pointer bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"
                                key={item.id}>
                                <img alt={item.name} src={item.imageSrc}
                                     key={item.id}
                                     className="size-full object-cover"/>
                            </div>
                        )
                    })}
                </div>
                <MdChevronRight
                    onClick={handleslideRight}
                    size={40}
                    className={"opacity-60 cursor-pointer hover:opacity-100"}
                />

            </div>
        </>
    )


}