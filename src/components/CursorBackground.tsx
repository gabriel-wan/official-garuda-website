import { useEffect, useState } from 'react';

const CursorBackground = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showEffect, setShowEffect] = useState<boolean>(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setShowEffect(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!showEffect) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [showEffect]);

    if (!showEffect) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition duration-300"
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(204, 157, 63, 0.15), transparent 80%)`,
            }}
        />
    );
};

export default CursorBackground;
