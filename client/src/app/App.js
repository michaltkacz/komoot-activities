import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageContent } from './PageContent';
import { theme } from '../styled/theme';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <PageContent />
      </Page>
    </ThemeProvider>
  );
}
