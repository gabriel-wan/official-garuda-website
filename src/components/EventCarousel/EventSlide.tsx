import { useMotionValue, useSpring, useMotionTemplate, motion } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "../../types/global";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const EventSlide = ({
    slide,
    slideIndex
}: {
    slide: Slide;
    slideIndex: number;
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    // For navigating to each event
    const navigate = useNavigate();

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleClick = () => {
        console.log(slideIndex);
        navigate(`/events/${slideIndex}`);
    };

    return (
        <div
            onClick={handleClick} 
            className="grid w-full h-full rounded-xl place-content-center text-[#734A27]">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative w-96 h-[288px] rounded-xl bg-gradient-to-br from-[#222529] to-[#734A27]"
            >
                <img
                    src={slide.displayImage}
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-0 m-auto grid place-content-center rounded-xl w-[320px] h-[240px] shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default EventSlide;