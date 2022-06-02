import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory, useEffect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createMydictionary, addMydictionaryFB } from '../redux/modules/mydictionary';

const Writing = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const word = useRef();
  const mean = useRef();
  const example = useRef();

  const addMyList = () => {
    if (word.current.value && mean.current.value && example.current.value !== '') {
      const wordV = word.current.value;
      const meanV = mean.current.value;
      const exampleV = example.current.value;

      // const dict = {
      //   word: wordV,
      //   mean: meanV,
      //   example: exampleV,
      // };

      // dispatch(createMydictionary(dict));
      // console.log(wordV, meanV, exampleV);
      dispatch(addMydictionaryFB({ word: wordV, mean: meanV, example: exampleV }));
      history.push('/');
    } else {
      alert('빈칸을 모두 입력해주세요!');
    }
  };

  // React.useEffect(() => {
  //   console.log(word.current.value);
  // });

  return (
    <Wrap>
      <h3 style={{ fontFamily: 'GmarketSansMedium' }}>단어 추가하기</h3>
      <WriteBox>
        <InputBox>
          <p>단어</p>
          <input type='text' placeholder='단어명을 입력해주세요.' ref={word} />
        </InputBox>
        <InputBox>
          <p>뜻</p>
          <input type='text' placeholder='단어의 뜻을 입력해주세요.' ref={mean} />
        </InputBox>
        <InputBox>
          <p>예문</p>
          <input type='text' placeholder='예문을 입력해주세요.' ref={example} />
        </InputBox>
      </WriteBox>
      <AddBtn onClick={addMyList}>추가하기</AddBtn>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const WriteBox = styled.div`
  width: 40vw;
  min-width: 300px;
  height: 300px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: 1px solid #fbe7ff;
`;

const InputBox = styled.div`
  margin-bottom: 20px;
  font-family: GmarketSansMedium;

  & p {
    font-size: 16px;
    margin: 5px 0px;
  }

  & input {
    width: 95%;
    height: 25px;

    border: none;
    outline: none;

    border-bottom: 1px solid #b665c7;
  }
`;

const AddBtn = styled.button`
  font-family: GmarketSansMedium;

  width: 320px;
  height: 50px;

  margin: 20px 0px;

  background-color: #8b399b;
  border: none;
  border-radius: 5px;

  font-size: 17px;
  color: #fff;

  box-shadow: 0px 1px 10px 1px rgba(139, 57, 155, 0.5);

  &:hover {
    background-color: #a849bc;
  }
`;

export default Writing;
