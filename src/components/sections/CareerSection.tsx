/**
 * Experience 섹션
 * - 심플 보더 경력 카드 그리드
 * - FlowLine이 페이지 단위로 관통 (PortfolioPage에서 관리)
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from '@/components/ui/DotGrid';
import './CareerSection.scss';

type TCareerItem = {
  company: string;
  team: string;
  position: string;
  date: [string, string];
};

type Props = {
  data: TCareerItem[];
};

export default function CareerSection({ data }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.career-card');
      if (cards?.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section id="career" className="career-section" ref={sectionRef} aria-label="Career">
      <DotGrid opacity={0.08} size={32} />

      <div className="career-inner">
        <div ref={titleRef} className="section-header" style={{ opacity: 0 }}>
          <h2 className="section-tag mono">02 — Experience</h2>
        </div>

        <div ref={cardsRef} className="career-grid">
          {data.map((item, i) => (
            <article key={i} className="career-card" style={{ opacity: 0 }}>
              <span className="card-index mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="company">{item.company}</h3>
              <span className="date mono">{item.date[0]} — {item.date[1]}</span>
              <p className="position">{item.position}</p>
              <span className="team">{item.team}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
