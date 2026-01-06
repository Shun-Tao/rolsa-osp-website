import Navbar from '../components/Navbar.jsx';
import './Home.css';

import { useEffect, useRef } from "react";

export default function HorizontalScroll() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const onWheel = (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };

        container.addEventListener("wheel", onWheel, { passive: false });

        return() => {
            container.removeEventListener("wheel", onWheel);
        };
    }, []);

    return (
        <div ref={containerRef} className="horizontal">
            <section className="panel">Panel 1</section>
            <section className="panel">Panel 2</section>
            <section className="panel">Panel 3</section>
            <section className="panel">Panel 4</section>
        </div>
    );
}
