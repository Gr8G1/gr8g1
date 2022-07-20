import { useSelector, useDispatch } from 'react-redux';
import { _modalStatus, _setModalStatus } from '@/redux/slice/modal';

import Wrapper from '@/components/template/Wrapper';
import Syntax from '@/components/template/Syntax';
import Modal from '@/components/common/modal/Modal';

import './TemplatePage.scss';

function TemplatePage() {
  const isModalVisible = useSelector(_modalStatus);
  const dispatch = useDispatch();

  return (
    <div className="template">
      <Wrapper title="Modal">
        <div>
          <button type="button" onClick={() => dispatch(_setModalStatus(!isModalVisible))}>Modal Toggle</button>
          { isModalVisible &&
            <Modal status={isModalVisible} setStatus={() => dispatch(_setModalStatus(!isModalVisible))}>
              <div>
                Modal
              </div>
            </Modal>
          }
        </div>
      </Wrapper>

      <Wrapper title="code-highlight">
        <Syntax code='(num) => num + 1'/>
      </Wrapper>
    </div>
  );
}

export default TemplatePage;
