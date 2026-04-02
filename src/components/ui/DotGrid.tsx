import './DotGrid.scss';

interface Props {
  opacity?: number;
  size?: number;
}

export default function DotGrid({ opacity = 0.15, size = 28 }: Props) {
  return (
    <div
      className="dot-grid"
      style={{
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}
