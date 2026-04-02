import './CustomScroll.scss';

interface Props extends ReactProps {
  height: string;
}

function CustomScroll({ height, children }: Props) {
  return (
    <div className='customScroll' style={{ height, overflowY: 'auto' }}>
      {children}
    </div>
  );
}

export default CustomScroll;
