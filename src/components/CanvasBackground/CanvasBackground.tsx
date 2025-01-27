import { useEffect, useRef } from "react";
import * as React from "react";

const CanvasBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const color = "236,240,241"; // Canvas background color
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        canvas.style.cssText = "position:fixed;top:0;left:0;opacity:0.5;pointer-events:none;z-index:-1;";

        const particles: { x: number; y: number; xa: number; ya: number; max: number }[] = [];
        const mouse = { x: null as number | null, y: null as number | null, max: 20000 };

        // Resize canvas
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);

        // Mouse move event
        window.addEventListener("mousemove", (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        window.addEventListener("mouseout", () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Generate particles
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                xa: 2 * Math.random() - 1,
                ya: 2 * Math.random() - 1,
                max: 6000,
            });
        }

        const allParticles = [...particles, mouse];

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, idx) => {
                p.x += p.xa;
                p.y += p.ya;

                if (p.x > width || p.x < 0) p.xa *= -1;
                if (p.y > height || p.y < 0) p.ya *= -1;

                ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);

                for (let j = idx + 1; j < allParticles.length; j++) {
                    const p2 = allParticles[j];
                    if (!p2.x || !p2.y) continue;

                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = dx * dx + dy * dy;

                    if (dist < p2.max) {
                        if (p2 === mouse && dist >= p2.max / 2) {
                            p.x -= 0.03 * dx;
                            p.y -= 0.03 * dy;
                        }

                        const opacity = (p2.max - dist) / p2.max;
                        ctx.beginPath();
                        ctx.lineWidth = opacity / 2;
                        ctx.strokeStyle = `rgba(${color},${opacity + 0.6})`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        setTimeout(animate, 100);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", () => {});
            window.removeEventListener("mouseout", () => {});
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default CanvasBackground;
