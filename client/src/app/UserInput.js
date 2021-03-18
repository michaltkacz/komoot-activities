import React, { useState } from 'react';
import styled from 'styled-components';

const UserInputContainer = styled.div`
  background: ${(props) => props.theme.darkGreen};
  width: auto;
  height: auto;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
`;

const Form = styled.form`
  width: 100%;
  padding: 0.5rem;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.25rem;
  margin: 0.25rem auto 0.25rem;
  text-align: center;
  font-weight: 600;
  outline: none;
  border: 1px solid ${(props) => props.theme.darkGray};
  border-radius: 5px;
  background: ${(props) => props.theme.lightGray};
  color: ${(props) => props.theme.darkGray};
`;

const Button = styled.button`
  color: white;
  background: transparent;
  font-weight: 900;
  width: auto;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem auto 0.25rem;
  border: none;
  outline: none;

  &:hover {
    color: ${(props) => props.theme.darkGray};
    cursor: pointer;
  }
`;

export const UserInput = (props) => {
  const [userId, setUserId] = useState(null);
  const { fetchData } = props;

  return (
    <UserInputContainer>
      <Form>
        <Input
          type='text'
          name='userId'
          id='userId'
          placeholder='Your UserID'
          value={userId}
          required
          onChange={(e) => setUserId(e.target.value)}
        />
        <ButtonsContainer>
          <Button type='submit' onClick={(e) => fetchData(e, userId)}>
            get tours
          </Button>
          <Button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            sync tours
          </Button>
        </ButtonsContainer>
      </Form>
    </UserInputContainer>
  );
};
