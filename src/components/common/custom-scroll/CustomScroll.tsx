import { Scrollbars } from 'react-custom-scrollbars';

interface Props extends ReactProps {
  height: string;
}

function CustomScroll({ height, children }: Props) {
  return (
    <Scrollbars className='customScroll'
      style={{ height }}
      renderTrackVertical={(style, ...props) => (
        <div {...props} style={{ ...style, position: 'absolute', right: 4, top: 4, bottom: 4, width: 4, borderRadius: 4 }} />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div {...props} style={{ ...style, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, .4)' }} />
      )}
      // renderTrackHorizontal={(style, ...props) => (
      //   <div {...props} style={{ ...style, position: 'absolute', right: 4, left: 4, bottom: 4, height: 4, borderRadius: 4 }} />
      // )}
      // renderThumbHorizontal={({ style, ...props }) => (
      //   <div {...props} style={{ ...style, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, .4)' }} />
      // )}
    >
      {children}
    </Scrollbars>
  );
}

export default CustomScroll;
