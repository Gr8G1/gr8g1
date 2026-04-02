import { createContext, useContext, useState } from 'react';

interface HoverContextValue {
  hoveredCompany: string | null;
  setHoveredCompany: (company: string | null) => void;
}

const HoverContext = createContext<HoverContextValue>({
  hoveredCompany: null,
  setHoveredCompany: () => {},
});

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  return (
    <HoverContext.Provider value={{ hoveredCompany, setHoveredCompany }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  return useContext(HoverContext);
}
