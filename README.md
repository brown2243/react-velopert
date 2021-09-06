# chap.7_redux_middleware

7장. 리덕스 미들웨어

1. 리덕스 프로젝트 준비하기

- 프로젝트 셋팅

2. 미들웨어 만들어보고 이해하기

리덕스 미들웨어의 템플릿

```
const middleware = store => next => action => {
  // 하고 싶은 작업...
}
첫번째 store는 리덕스 스토어 인스턴스입니다. 이 안에 dispatch, getState, subscribe 내장함수들이 들어있죠.

두번째 next 는 액션을 다음 미들웨어에게 전달하는 함수입니다. next(action) 이런 형태로 사용합니다. 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달해줍니다. 만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않습니다.

세번째 action 은 현재 처리하고 있는 액션 객체입니다.
```

3. redux-logger 사용 및 미들웨어와 DevTools 함께 사용하기

이번에는 redux-logger 를 설치해서 적용을 해보고, 또 Redux DevTools 와 리덕스 미들웨어를 함께 사용해야 할 때에는 어떻게 해야하는지 배워보겠습니다.
`yarn add redux-logger`

```
const store = createStore(rootReducer, applyMiddleware(logger));
```

Redux DevTools 사용하기

```
yarn add redux-devtools-extension

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

4. redux-thunk

5. redux-thunk로 프로미스 다루기

6. API 재로딩 문제 해결하기

7. thunk에서 라우터 연동하기

8. json-server

9. CORS 와 Webpack DevServer Proxy

10. redux-saga

11. redux-saga 로 프로미스 다루기

12. saga에서 라우터 연동하기

정리
