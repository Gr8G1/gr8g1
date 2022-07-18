import './SubTitle.scoped.scss';

interface Props extends ReactProps {
  title: string;
  pointColor?: string;
}

function Title({ title, pointColor }: Props) {
  return (
    <div className={`subTitle ${pointColor ? pointColor : 'green'}`}>
      <h3 data-title={title}>{title}</h3>
    </div>
  );
}

export default Title;
