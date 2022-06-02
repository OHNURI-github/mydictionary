// mydictionary.js
import { db } from '../../firebase';
import { collection, doc, getDocs, addDoc, getDoc } from 'firebase/firestore';

// Actions
// 액션의 타입을 정해주는 부분!
const LOAD = 'mydictionary/LOAD';
const CREATE = 'mydictionary/CREATE';

const initialState = {
  list: [
    // { word: 'hi', mean: '안녕', example: 'hi~ Nuri' },
    // { word: '안녕', mean: '안녕2', example: '안녕3' },
  ],
};

// 미들웨어!
export const loadMydictionaryFB = () => {
  return async function (dispatch) {
    // 파이어스토어에서 가지고 온 데이터 담을 변수 생성
    // getDocs는 콜렉션에 있는 모든 데이터를 가지고 올 수 있음
    const mydictionary_data = await getDocs(collection(db, 'mydictionary'));
    // console.log(mydictionary_data);

    let mydictionary_list = [];

    mydictionary_data.forEach((mydictionary) => {
      // console.log(mydictionary.data());
      mydictionary_list.push({ id: mydictionary.id, ...mydictionary.data().mydictionary });
    });
    console.log(mydictionary_list);

    dispatch(loadMydictionary(mydictionary_list));
  };
};

export const addMydictionaryFB = (mydictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'mydictionary'), { mydictionary });
    const _mydictionary = await getDoc(docRef);
    const mydictionary_data = { ..._mydictionary.data().mydictionary };

    // console.log(mydictionary_data);
    // console.log((await getDoc(docRef)).data().mydictionary);

    dispatch(createMydictionary(mydictionary_data));
  };
};

// Action Creators
// 여기는 액션 생성 함수!
export function loadMydictionary(mydictionary_list) {
  return { type: LOAD, mydictionary_list };
}

export function createMydictionary(mydictionary) {
  return { type: CREATE, mydictionary };
}

// Reducer
// 리듀서는 순수함수로 이루어져 있음!
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'mydictionary/LOAD': {
      return { list: action.mydictionary_list };
    }

    case 'mydictionary/CREATE': {
      const new_mydictionary = [...state.list, action.mydictionary];
      return { list: new_mydictionary };
    }
    default:
      return state;
  }
}
