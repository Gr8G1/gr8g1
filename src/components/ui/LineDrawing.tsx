/**
 * 스크롤 연동 라인 드로잉 애니메이션 컴포넌트
 * - 유려한 곡선 라인이 자연스럽게 그려지는 효과
 * - ScrollTrigger scrub 기반 stroke-dashoffset 애니메이션
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LineDrawing.scss';

gsap.registerPlugin(ScrollTrigger);

/**
 * 섹션 왼쪽~중앙에 걸쳐 유기적 곡선이 흘러내리는 SVG 애니메이션
 * - 베지어 곡선으로 유려한 흐름 표현
 * - 스크롤 진행에 따라 순차적으로 드로잉
 */
export default function LineDrawing() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>('.draw-line');
    if (!paths.length) return;

    paths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 90%',
        end: 'bottom 20%',
        scrub: 1.5,
      },
    });

    paths.forEach((path, i) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'none',
      }, i * 0.12);
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="line-drawing"
      viewBox="0 0 500 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* 메인 흐름선 - 왼쪽에서 시작, 부드러운 S자 곡선으로 아래로 */}
      <path
        className="draw-line line-main"
        d="M 60 0 C 60 120, 180 160, 180 280 S 60 400, 60 500 C 60 600, 200 640, 200 760 S 60 880, 60 1000"
      />

      {/* 보조 흐름선 - 메인과 평행하되 약간 오프셋 */}
      <path
        className="draw-line line-secondary"
        d="M 100 50 C 100 180, 220 200, 220 320 S 100 440, 100 540"
      />

      {/* 분기 곡선 1 */}
      <path
        className="draw-line line-branch"
        d="M 180 280 C 240 280, 300 240, 360 260"
      />

      {/* 분기 곡선 2 */}
      <path
        className="draw-line line-branch"
        d="M 60 500 C 120 500, 180 460, 280 480 S 380 520, 420 500"
      />

      {/* 분기 곡선 3 */}
      <path
        className="draw-line line-branch"
        d="M 200 760 C 260 760, 320 720, 380 740"
      />

      {/* 가는 보조선 - 아래쪽 */}
      <path
        className="draw-line line-thin"
        d="M 120 600 C 120 680, 240 700, 240 780 S 140 860, 140 940"
      />

      {/* 짧은 액센트 곡선들 */}
      <path
        className="draw-line line-accent"
        d="M 180 160 C 200 140, 240 150, 260 170"
      />
      <path
        className="draw-line line-accent"
        d="M 60 400 C 80 380, 120 390, 140 410"
      />
      <path
        className="draw-line line-accent"
        d="M 200 640 C 220 620, 260 630, 280 650"
      />
    </svg>
  );
}
