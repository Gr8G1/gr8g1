/**
 * Work 섹션
 * - 심플 보더 프로젝트 카드 그리드
 * - 카드 hover 시 마우스 위치로 몰핑 블롭이 이동하며 해당 카드 강조
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from '@/components/ui/DotGrid';
import './ProjectsSection.scss';

type TProjectItem = {
  company: string;
  url: string;
  name: string;
  description: string;
  language: string[];
};

type Props = {
  data: TProjectItem[];
};

export default function ProjectsSection({ data }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!data.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      );

      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards?.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!blobRef.current || !sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(blobRef.current, {
      x: x - 250,
      y: y - 250,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, []);

  const handleOpen = (url: string) => window.open(url, '_blank', 'noopener noreferrer');

  return (
    <section
      id="projects"
      className="projects-section"
      ref={sectionRef}
      aria-label="Projects"
      onMouseMove={handleMouseMove}
    >
      <DotGrid opacity={0.08} size={32} />

      <div
        ref={blobRef}
        className={`morph-blob ${isHovered ? 'visible' : ''}`}
        aria-hidden="true"
      >
        <div className="blob-inner" />
        <div className="blob-ring" />
      </div>

      <div className="projects-inner">
        <div ref={titleRef} className="section-header" style={{ opacity: 0 }}>
          <h2 className="section-tag mono">03 — Work</h2>
        </div>

        <div ref={gridRef} className="projects-grid">
          {data.map((item, i) => (
            <article
              key={i}
              className="project-card"
              style={{ opacity: 0 }}
              onClick={() => handleOpen(item.url)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpen(item.url)}
              aria-label={`${item.name} 열기`}
            >
              <div className="card-head">
                <span className="card-index mono">{String(i + 1).padStart(2, '0')}</span>
                <svg className="arrow-icon" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="name">{item.name.replace('\n', ' ')}</h3>
              <span className="company mono">{item.company}</span>
              <p className="description">{item.description}</p>
              <ul className="tags" aria-label="기술 스택">
                {item.language.map((lang) => (
                  <li key={lang} className="tag mono">{lang}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
