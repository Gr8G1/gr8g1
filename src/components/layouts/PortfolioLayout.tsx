/**
 * 포트폴리오 레이아웃
 * - Lenis 스무스 스크롤 초기화
 * - 섹션 네비게이션, 페이지 진입 트랜지션
 * - 하단 고정 푸터 포함
 */
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { initLenis, destroyLenis, scrollToSection } from '@/lib/lenis';
import './PortfolioLayout.scss';

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'career', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Outro' },
];

type Props = {
  children: React.ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  const handleSectionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollToSection(el);
  };

  return (
    <motion.div
      id="portfolio-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <nav className="portfolio-nav">
        <div className="nav-sections">
          {SECTIONS.map(({ id, label }) => (
            <button key={id} type="button" onClick={() => handleSectionClick(id)}>
              {label}
            </button>
          ))}
        </div>
      </nav>
      <main id="portfolio-main">
        {children}
      </main>
      <footer className="portfolio-footer">
        <span className="mono">&copy; {new Date().getFullYear()} Gr8G1. All rights reserved.</span>
      </footer>
    </motion.div>
  );
}
