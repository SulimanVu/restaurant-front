import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

const Restaraunts = () => {

    const cafes = useSelector((state: RootState) => state.cafeSlice.cafe)
console.debug(cafes);

    return (
        <div>

        </div>
    );
};

export default Restaraunts;