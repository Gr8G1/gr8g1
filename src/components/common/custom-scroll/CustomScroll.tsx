import { useState, createRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { AiFillUpCircle } from 'react-icons/ai';

import './CustomScroll.scss';
interface Props extends ReactProps {
  height: string;
}

function CustomScroll({ height, children }: Props) {
  const scrollbars = createRef<Scrollbars>();
  const [scrollTop, setScrollTop] = useState<number>(0);
  const onUpdateScroll = ({ top }: { top: number }) => setScrollTop(top);
  const onScrollTop = () => scrollbars.current.scrollTop(0);
  const onRenderThumbVertical = ({ style, ...props }) => {
    const thumbStyles = {
      width: 4,
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, .4)'
    };

    return (
      <div style={{ ...style, ...thumbStyles }} {...props} />
    );
  };

  return (
    <Scrollbars
      ref={scrollbars}
      className='customScroll'
      style={{ height }}
      onUpdate={onUpdateScroll}
      renderThumbVertical={onRenderThumbVertical}
    >
      {/* <button type='button' className='goTop' onClick={onScrollTop}>
        <AiFillUpCircle />
      </button> */}
      {children}
    </Scrollbars>
  );
}

export default CustomScroll;
