import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DotGrid from '@/components/ui/DotGrid';
import HeroScene from '@/components/canvas/HeroScene';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import './HeroSection.scss';

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      gsap.set([badgeRef.current, headingRef.current, subRef.current], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3 }
    )
    .fromTo(headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.0 },
      '-=0.3'
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    );

    return () => { tl.kill(); };
  }, [reducedMotion]);

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <DotGrid opacity={0.12} size={28} />

      {!reducedMotion && <HeroScene />}

      <div className="hero-content">
        <div ref={badgeRef} className="hero-badge">
          <span className="badge-dot" />
          Available for work
        </div>

        <h1 ref={headingRef} className="hero-title">
          <span className="title-line">Front-end</span>
          <span className="title-line accent">Developer</span>
        </h1>

        <p ref={subRef} className="hero-sub">
          <span className="mono">HyunJiwon</span>
          &nbsp;—&nbsp;
          Crafting interactive experiences<br />with modern web technologies.
        </p>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-label">scroll</span>
      </div>
    </section>
  );
}
