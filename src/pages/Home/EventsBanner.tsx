import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import imgs from "../../components/EventsBanner/ImageSource";
import SPRING_OPTIONS from "../../components/EventsBanner/SpringOptions";
import Images from "../../components/EventsBanner/Images";
import Dots from "../../components/EventsBanner/Dots";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const EventsBanner = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <a
            href="/events"
            //rel="noreferrer noopener"
            //target="_blank"
        >
            <div className="relative overflow-hidden group hover:opacity-90 mb-8 md:mb-12">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex cursor-grab items-center active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>

                <div className="hidden z-30 md:absolute md:flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
                    <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
                </div>

                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 text-white text-lg font-semibold px-6 py-3 transition-opacity duration-200">
                    What We Do?
                </button>
            </div>
        </a>
    )
}

export default EventsBanner
