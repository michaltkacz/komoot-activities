import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useFetch } from '../utils/useFetch';

import { NavigationBar } from './NavigationBar.js';
import { Map } from './Map.js';
import { ToursList } from './ToursList.js';
import { UserInput } from './UserInput.js';

const Panel = styled.div`
  background: ${(props) => props.theme.lightGray};
  height: 100%;
  float: left;
  padding: 0;
  margin: 0;
`;

const LeftPanel = styled(Panel)`
  width: 20%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const RightPanel = styled(Panel)`
  width: 80%;
`;

export const PageContent = () => {
  const [url, setUrl] = useState(null);
  const fetchResult = useFetch(url);

  const fetchData = (e, id) => {
    e.preventDefault();
    //setUrl(`/api/user/${id}/tours`);
    setUrl(`/dev/fulldb`);
  };

  return (
    <>
      <LeftPanel>
        <NavigationBar />
        <UserInput fetchData={fetchData} />
        <ToursList fetchResult={fetchResult} />
      </LeftPanel>
      <RightPanel>
        <Map fetchResult={fetchResult} />
      </RightPanel>
    </>
  );
};
