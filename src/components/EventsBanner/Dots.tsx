import { Dispatch, SetStateAction } from "react";
import imgs from "./ImageSource";

const Dots = ({
    imgIndex,
    setImgIndex,
}: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="flex w-full justify-center gap-2 rounded-full px-3 py-2 bg-[#734A27]">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-2 w-2 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"}`}
                    />
                );
            })}
        </div>
    )
}

export default Dots