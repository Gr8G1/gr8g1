/**
 * 포트폴리오 메인 페이지
 * - 섹션별 데이터 fetch 후 각 섹션에 전달
 */
import { useEffect, useState } from 'react';
import { _getCareer, _getProjects } from '@/api/portfolio';

// TODO: FlowLine 추후 복원 예정
// import FlowLine from '@/components/ui/FlowLine';
import HeroSection from '@/components/sections/HeroSection';
import CareerSection from '@/components/sections/CareerSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

type TCareerItem = {
  company: string;
  team: string;
  position: string;
  date: [string, string];
};

type TProjectItem = {
  company: string;
  url: string;
  name: string;
  description: string;
  language: string[];
};

export default function PortfolioPage() {
  const [careers, setCareers] = useState<TCareerItem[]>([]);
  const [projects, setProjects] = useState<TProjectItem[]>([]);

  useEffect(() => {
    _getCareer().then((res: any) => setCareers(res?.career ?? []));
    _getProjects().then((res: any) => setProjects(res?.projects ?? []));
  }, []);

  return (
    <>
      <HeroSection />
      <CareerSection data={careers} />
      <ProjectsSection data={projects} />
      <ContactSection />
    </>
  );
}
