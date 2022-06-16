import './Wrapper.scoped.scss';

interface Props extends ReactProps {
  title: string;
}

export default ({ title, children }: Props) => {
  return (
    <div className="wrapper">
      <h3>{title}</h3>
      <div className="inner">
        {children}
      </div>
    </div>
  );
};
