import React from 'react';
import styled from 'styled-components';
import '../mystyle.css';
import { useSelector } from 'react-redux';
import { db } from '../firebase';

const MyList = () => {
  const data = useSelector((state) => state.mydictionary.list);
  console.log(data);

  return (
    <div className='wrap'>
      {data.map((list, idx) => {
        return (
          <ListBox key={idx}>
            <h3>{list.word}</h3>
            <p>{list.mean}</p>
            <span>{list.example}</span>
          </ListBox>
        );
      })}
    </div>
  );
};

// const Wrap = styled.div`
//   max-width: 100vw;
//   width: 90%;
//   margin: 80px auto 0px auto;

//   // display: flex;
//   // flex-direction: column;
//   // justify-content: center;
//   // align-items: center;
// `;

const ListBox = styled.div`
  // width: 50vw;
  // min-width: 300px;
  // height: 150px;

  // margin-bottom: 13px;

  padding: 20px;

  // display: flex;
  // flex-direction: column;
  // justify-content: center;

  background-color: #fff;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  border: 1px solid #fbe7ff;

  & h3 {
    font-size: 25px;
    margin: -5px 0px;
    font-family: GmarketSansBold;
  }

  & p {
    color: #3e3e3e;
    font-family: GmarketSansMedium;
  }

  & span {
    font-size: 15px;
    color: #6464ff;
    font-family: GmarketSansLight;
  }
`;

export default MyList;
