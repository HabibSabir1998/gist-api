
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from './components/GistList';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper className="App" data-testid="app">
      <Header setSearch={setSearch}/>
      <GistList search={search}/>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
