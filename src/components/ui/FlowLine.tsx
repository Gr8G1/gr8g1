/**
 * 섹션 1~3을 관통하는 유려한 플로우 라인
 * - position: fixed SVG로 뷰포트 전체에 걸쳐 표시
 * - 스크롤 진행도에 따라 라인이 순차적으로 그려짐
 * - Hero 진입부터 Work 섹션 끝까지 연속적으로 이어짐
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FlowLine.scss';

gsap.registerPlugin(ScrollTrigger);

export default function FlowLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>('.flow-path');
    if (!paths.length) return;

    paths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    });

    const heroEl = document.getElementById('hero');
    const projectsEl = document.getElementById('projects');
    if (!heroEl || !projectsEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        endTrigger: projectsEl,
        end: 'bottom bottom',
        scrub: 2,
      },
    });

    paths.forEach((path, i) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'none',
      }, i * 0.08);
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="flow-line"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* 메인 흐름선 - 뷰포트 왼쪽을 따라 전체 높이를 관통 */}
      <path
        className="flow-path flow-main"
        d="M 8 0 C 8 8, 18 12, 18 20 S 6 28, 6 36 C 6 44, 20 48, 20 56 S 8 64, 8 72 C 8 80, 16 84, 16 92 S 8 96, 8 100"
      />

      {/* 보조선 - 메인 옆에서 평행하게 흐름 */}
      <path
        className="flow-path flow-sub"
        d="M 12 5 C 12 14, 22 16, 22 24 S 10 32, 10 40 C 10 48, 24 52, 24 60 S 12 68, 12 76"
      />

      {/* 분기 곡선들 */}
      <path
        className="flow-path flow-branch"
        d="M 18 20 C 28 20, 38 16, 48 18"
      />
      <path
        className="flow-path flow-branch"
        d="M 6 36 C 16 34, 30 38, 42 36"
      />
      <path
        className="flow-path flow-branch"
        d="M 20 56 C 30 56, 40 52, 52 54"
      />
      <path
        className="flow-path flow-branch"
        d="M 8 72 C 18 70, 28 74, 40 72"
      />

      {/* 미세 액센트 */}
      <path
        className="flow-path flow-accent"
        d="M 18 12 C 22 10, 28 12, 32 14"
      />
      <path
        className="flow-path flow-accent"
        d="M 20 48 C 24 46, 30 48, 34 50"
      />
      <path
        className="flow-path flow-accent"
        d="M 16 84 C 20 82, 26 84, 30 86"
      />
    </svg>
  );
}
