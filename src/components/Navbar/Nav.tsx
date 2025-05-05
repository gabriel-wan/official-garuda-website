import { useEffect, useState } from 'react'
import NavButton from './NavbarButtons';

function Nav() {
    const [activeSection, setActiveSection] = useState<string>('about');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.7, // Section must occupy 0.7 of screen before it is considered "in view"
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <NavButton
                    activeSection={activeSection}
                    requiredSection="Prof."
                    label="Residential Fellow"
                />
                <NavButton
                    activeSection={activeSection}
                    requiredSection="Level 9 RA"
                    label="Residential Assistant- Level 9"
                />
                 <NavButton
                    activeSection={activeSection}
                    requiredSection="Level 10 RA"
                    label="Residential Assistant- Level 10"
                />
                <NavButton
                    activeSection={activeSection}
                    requiredSection="Level 11 RA"
                    label="Residential Assistant- Level 11"
                />
            </ul>
        </nav>
    )
}

export default Nav