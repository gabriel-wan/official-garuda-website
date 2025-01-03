import { motion } from "motion/react";
import imgs from "./ImageSource";
import SPRING_OPTIONS from "./SpringOptions";

const Images = ({ imgIndex }: { imgIndex: number }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === idx ? 1 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-full shrink-0 drop-shadow-lg bg-neutral-800 object-cover"
                    />
                );
            })}
        </>
    )
}
export default Images