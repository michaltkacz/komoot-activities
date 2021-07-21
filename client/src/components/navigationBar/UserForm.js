import React, { useState } from 'react';
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { useUser } from '../../contexts/UserContext';
import { useTours } from '../../contexts/TourContext';
import { BsInfoCircle } from 'react-icons/bs';

const UserForm = () => {
  const { setUserId } = useUser();
  const [inputValue, setInputValue] = useState('');
  const { runShallowSync, runDeepSync } = useTours();

  return (
    <div className='user-form'>
      <OverlayTrigger
        placement='bottom-start'
        delay={{ show: 0, hide: 100 }}
        overlay={
          <Tooltip id='info-tooltip'>
            "Deep Sync" syncs with Komoot database (takes more time and transfer
            data, but provides up-to-date data). "Sync" syncs with locally saved
            data from the latest deep sync (takes less time, but saved data
            might be out-of-date).
          </Tooltip>
        }
        trigger={['hover', 'focus', 'click']}
      >
        <BsInfoCircle className='info-icon' />
      </OverlayTrigger>
      <Form inline className='form-container'>
        <InputGroup size='sm'>
          <FormControl
            type='number'
            placeholder='UserID'
            aria-label="User's ID"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setUserId(e.target.value);
            }}
          />
          <InputGroup.Append>
            <ButtonGroup size='sm'>
              <Button
                variant='outline-primary'
                onClick={() => {
                  setUserId(inputValue);
                  runShallowSync();
                }}
              >
                Sync
              </Button>
              <DropdownButton
                as={ButtonGroup}
                title=''
                size='sm'
                variant='outline-primary'
                menuAlign='right'
              >
                <Dropdown.Item
                  onClick={() => {
                    setUserId(inputValue);
                    runDeepSync();
                  }}
                >
                  Deep Sync
                </Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

export default UserForm;
