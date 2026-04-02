/**
 * Outro 섹션
 * - 감사 인사 중심 구성, 연락처 링크 포함
 * - ScrollTrigger 기반 진입 애니메이션
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import DotGrid from '@/components/ui/DotGrid';
import './ContactSection.scss';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Gr8G1', mono: true },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="contact-section"
      ref={sectionRef}
      aria-label="Outro"
    >
      <DotGrid opacity={0.08} size={32} />

      <div className="contact-inner">
        <div ref={contentRef} style={{ opacity: 0 }}>
          <div className="section-header">
            <span className="section-tag mono">04 — Outro</span>
            <h2 className="section-title">
              Thank you for
              <br />
              <span className="outline">visiting.</span>
            </h2>
          </div>

          <p className="thanks-sub">
            새로운 도전 앞에서,
            <br />
            함께 더 나은 답을 만들어갈 수 있기를 바랍니다.
          </p>

          <div className="contact-info">
            <div className="name-block">
              <span className="label mono">Developer</span>
              <span className="name">HyunJiwon</span>
            </div>

            <ul className="link-list" aria-label="연락처">
              {LINKS.map(({ label, href, mono }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`contact-link ${mono ? 'mono' : ''}`}
                  >
                    {label}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="link-arrow"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L15 5M15 5H7M15 5V13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
