import styled from 'styled-components';
import MyList from './component/MyList';
import AddIcon from '@mui/icons-material/Add';
import Writing from './component/Writing';
import './mystyle.css';

import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { db } from './firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { createMydictionary, loadMydictionaryFB } from './redux/modules/mydictionary';
import { useDispatch } from 'react-redux';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMydictionaryFB());
  }, []);

  return (
    <Container className='App'>
      <Header>
        <h2
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer', fontFamily: 'Cafe24Ssurround' }}
        >
          나의 단어장
        </h2>
      </Header>
      <Route path='/' exact>
        <div>
          <MyList />
        </div>
        {/* 플로팅 버튼 */}
        <WriteBtn onClick={() => history.push('/write')}>
          <AddIcon style={{ fontSize: '33px', color: '#fff' }} />
        </WriteBtn>
      </Route>
      <Route path='/write'>
        <Writing />
      </Route>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

  background-color: white;

  display: flex;
  align-items: center; //세로 정렬
  justify-content: center; //가로 정렬

  position: fixed;
  top: 0;

  // margin-bottom: 50px;
`;

const WriteBtn = styled.button`
  width: 60px;
  height: 60px;

  border-radius: 40px;
  border: none;

  background-color: #8b399b;
  box-shadow: 0px 1px 10px 1px rgba(139, 57, 155, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: calc(100vh - 100px);
  left: calc(100vw - 100px);

  &:hover {
    background-color: #a849bc;
    width: 65px;
    height: 65px;
    transition: 0.1s;
  }
`;

export default App;
