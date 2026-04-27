import { getCategory } from "@/lib/dataFetch";
import { Button } from "@heroui/react";

const LeftSideBar = async({ category }) => {
    const categories = await getCategory();

    return (
        <div>
            
        </div>
    );
};

export default LeftSideBar;