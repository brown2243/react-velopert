# 1장 리액트 입문

## 1.1 리액트는 어쩌다 만들어 졌을까?

- 만약에 인터랙션이 자주 발생하고, 이에 따라 동적으로 UI 를 표현해야된다면, 이러한 규칙이 정말 다양해질것이고, 그러면 관리하기도 힘들어질것입니다. 숙련된 JavaScript 개발자라면, 코드를 최대한 깔끔하게 정리하여 쉽게 유지보수를 할 수도 있겠지만, 대부분의 경우 웹 애플리케이션의 규모가 커지면, DOM 을 직접 건드리면서 작업을 하면 코드가 난잡해지기 쉽습니다.

- 처리해야 할 이벤트도 다양해지고, 관리해야 할 상태값도 다양해지고, DOM 도 다양해지게 된다면, 이에 따라 업데이트를 하는 규칙도 많이 복잡해지기 때문에, 조금 과장을 많이 하자면 코드가 다음과 같은 형태가 됩니다.

- 리액트는 어떠한 상태가 바뀌었을때, 그 상태에 따라 DOM 을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라, 아예 다 날려버리고 처음부터 모든걸 새로 만들어서 보여준다면 어떨까? 라는 아이디어에서 개발이 시작되었습니다.

- 하지만, 정말로 동적인 UI 를 보여주기 위해서 모든걸 다 날려버리고 모든걸 새로 만들게 된다면, 속도가 굉장히 느릴 것입니다. 작은 웹애플리케이션이라면 상관없겠지만 규모가 큰 웹애플리케이션이라면 상상도 할 수 없는 일이죠. **하지만, 리액트에서는 Virtual DOM 이라는 것을 사용해서 이를 가능케 했습니다.**

Virtual DOM 은 가상의 DOM 인데요, 브라우저에 실제로 보여지는 DOM 이 아니라 그냥 메모리에 가상으로 존재하는 DOM 으로서 그냥 JavaScript 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM 을 보여주는 것 보다 속도가 훨씬 빠릅니다. 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI 를 Virtual DOM 을 통해서 렌더링합니다. 그리고 나서 리액트 개발팀이 만든 매우 효율적인 비교 알고리즘을 통하여 실제 브라우저에 보여지고 있는 DOM 과 비교를 한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM 에 패치시켜줍니다. 이를 통하여, "업데이트를 어떻게 할 지" 에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 되었습니다.

## 1.2 작업환경 준비

앞으로 계속해서 튜토리얼을 진행하기 전에, 다음 항목들을 설치해주어야 합니다.

- Node.js: Webpack 과 Babel 같은 도구들이 자바스크립트 런타임인 Node.js 를 기반으로 만들어져있습니다. 그렇기에 해당 도구들을 사용하기 위해서 Node.js 를 설치합니다.
- Yarn: Yarn 은 조금 개선된 버전의 npm 이라고 생각하시면 됩니다. npm 은 Node.js 를 설치하게 될 때 같이 딸려오는 패키지 매니저 도구입니다. 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용하죠. 우리가 Yarn 을 사용하는 이유는, 더 나은 속도, 더 나은 캐싱 시스템을 사용하기 위함입니다.
- 코드 에디터: 그리고, 코드 에디터를 준비하세요. 여러분이 좋아하는 에디터가 있다면, 따로 새로 설치하지 않고 기존에 사용하시던걸 사용하셔도 됩니다. 저는 주로 VSCode 를 사용합니다. 이 외에도, Atom, WebStorm, Sublime 같은 훌륭한 선택지가 있습니다.
- Git bash: 윈도우의 경우, Git for Windows 를 설치해서 앞으로 터미널에 무엇을 입력하라는 내용이 있으면 함께 설치되는 Git Bash 를 사용하세요. 윈도우가 아니라면 설치하지 않으셔도 상관없습니다. 설치는 기본 옵션으로 진행하시면 됩니다.

Webpack, Babel 은 무슨 용도인가요?

리액트 프로젝트를 만들게 되면서, 컴포넌트 를 여러가지 파일로 분리해서 저장 할 것이고, 또 이 컴포넌트는 일반 자바스크립트가 아닌 JSX 라는 문법으로 작성하게 됩니다. 여러가지의 파일을 한개로 결합하기 위해서 우리는 Webpack 이라는 도구를 사용하고, JSX 를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해서 우리는 Babel 이라는 도구를 사용합니다.

## 1.3 첫번째 리액트 컴포넌트

```
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

여기서 ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미합니다. id 가 root 인 DOM 을 선택하고 있는데, 이 DOM 이 어디있는지 볼까요?

// public/index.html 을 열어보시면 내부에서 이걸을 찾아보실 수 있습니다.
<div id="root"></div>
```

결국, 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것 입니다.

## 1.4 JSX의 기본 규칙 알아보기

리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줍니다.

Babel 은 자바스크립트의 문법을 확장해주는 도구입니다. 아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로서 구형 브라우저같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 합니다.

JSX 가 JavaScript 로 제대로 변환이 되려면 지켜주어야 하는 몇가지 규칙이 있습니다. 다음 문법들을 준수해주시면 앞으로 리액트 컴포넌트를 개발함에 있어서 큰 어려움이 없을 것입니다!

- 꼭 닫혀야 하는 태그
- 꼭 감싸져야하는 태그
- JSX 안에 자바스크립트 값 사용하기 // JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여줍니다.
- style 과 className

## 1.5 props를 통해 컴포넌트에게 값 전달하기

**props 는 properties 의 줄임말입니다.**

### defaultProps 로 기본값 설정

props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정하면 됩니다.

```
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}
Hello.defaultProps = {
  name: '이름없음'
}
export default Hello;
```

### props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, `props.children` 을 조회하면 됩니다.
이번에, `props.children` 을 사용하는 새로운 컴포넌트를 만들어보겠습니다.

## 1.6 조건부 렌더링

### 삼항연산자

보통 삼항연산자를 사용한 조건부 렌더링을 주로 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용합니다.

```
{ isSpecial ? <b>*</b> : null }
```

### `&&`연산자

지금은 내용이 달라지는게 아니라, 단순히 특정 조건이 true 이면 보여주고, 그렇지 않다면 숨겨주고 있는데요, 이러한 상황에서는 && 연산자를 사용해서 처리하는 것이 더 간편합니다.

```
 {isSpecial && <b>*</b>}
```

### props 값 설정을 생략하면 ={true}

`<Hello name="react" color="red" isSpecial /> // isSpecial === true`

## 1.7 useState 를 통해 컴포넌트에서 바뀌는 값 관리하기

동적인 값 끼얹기, 컴포넌트에서 동적인 값을 상태(state)라고 부릅니다.

### 함수형 업데이트

```
  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }
```

## 1.8 input 상태 관리하기

input 의 onChange 라는 이벤트를 사용하는데요, 이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다.
이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.

```
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
```

## 1.9 여러개의 input 상태 관리하기

input 의 개수가 여러개가 됐을때는, 단순히 useState 를 여러번 사용하고 onChange 도 여러개 만들어서 구현 할 수 있습니다.
하지만 그 방법은 가장 좋은 방법은 아닙니다. **더 좋은 방법은, input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것입니다.**
그리고, useState 에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 합니다.

```
function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

```

### 리액트 상태에서 객체를 수정해야 할 때에는, 이런식으로 직접 수정하면 안됩니다.

```
inputs[name] = value; // X

setInputs({
  ...inputs,
  [name]: value
}); // O
```

**이러한 작업을, "불변성을 지킨다" 라고 부릅니다.** 불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다. 만약에 inputs[name] = value 이런식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않습니다.

추가적으로, 리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있습니다. 컴포넌트 최적화에 대해서는 나중에 더 자세히 알아보도록 하겠습니다.

지금은 이것만 기억하세요. **리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.**

## 1.10 useRef 로 특정 DOM 선택하기

리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다. 예를 들어서 특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 또는 포커스를 설정해줘야된다던지 등 정말 다양한 상황이 있겠죠. 추가적으로 Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생 할 수 있습니다.

**그럴 땐, 리액트에서 ref 라는 것을 사용합니다.**

함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다.
`useRef()` 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다. 그러면, Ref 객체의 `.current` 값은 우리가 원하는 DOM 을 가르키게 됩니다.

### 변경은 관리해야 하지만 리렌더링을 발생 시키지 않아도 되는 값을 다룰 때 사용하기

**`useRef`는 값이 변경되어도 re-rendering을 요청하지 않습니다.**
함수 컴포넌트는 부모로 부터 전달 받는 props가 변경되거나 자신의 state가 변경되면 re-rendering 이 발생하는데, 이 때 내부에서 const 로 선언된 변수는 재선언되고 재할당 된다.
즉 컴포넌트의 생애주기를 통해 유지되지 않고 렌더링 마다 값이 초기화된다. `useState()` hook 으로 만든 변수는 컴포넌트의 생애주기를 통해 유지되지만 상태값이 변경될 때마다 컴포넌트 리렌더링을 발생시킨다.
`useRef()` hook 으로 만든 변수는 컴포넌트의 생애주기를 통해 유지되지만 .current 프로퍼티의 값이 변경되도 컴포넌트 리렌더링을 발생 시키지 않는다. 예시를 통해 살펴보자
**이러한 특성으로 useRef() 로 생성한 ref.current 에 HTMLElement 뿐만 아니라 숫자, 문자열, 배열 등의 값을 할당 할 수 있으며, 컴포넌트 내부에서 변경을 관리해야 하지만 굳이 리렌더링을 발생 시킬 필요는 없을 때 활용할 수 있다.**

### callback ref

.current 프로퍼티값을 변경해도 리렌더링이 일어나지 않는다는 것은 이제 잘 알 것이다.
이 말은 DOM 노드에 <div ref={containerRef}></div> 처럼 useRef() 를 통해 생성한 ref 를 붙이거나 떼어도 컴포넌트는 인지하지 못한다는 것을 의미한다.
공식 문서에서 설명하는 것처럼 DOM Node에 ref가 attact 되거나 detach 될 때 어떤 코드를 실행하고 싶다면 callback ref 방법을 쓸 수 있다.
ref 에 useRef로 반환된 값을 넘기는게 아니라 함수를 넘기는 것 이다.

```
export default function App() {
  const [height, setHeight] = useState(0);
  const callbackRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <p> 내 키는 : {height}px 이야</p>
      <div ref={callbackRef}>
        <Cat />
      </div>
    </div>
  );
}

export default function App() {
  const [height, setHeight] = useState(0);
  const catContaierRef = useRef();
  useEffect(() => {
      setHeight(catContaierRef.current.getBoundingClientRect().height);
      // mount 되고 난 뒤의 시점이니까 catContainerRef.current의 값이 업데이트 된 상태
  }, [])
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <p> 내 키는 : {height}px 이야</p>
      <div ref={catContaierRef}>
        <Cat />
      </div>
    </div>
  );
}

```

### forwardRef

상위 컴포넌트에서 하위 컴포넌트에게 props를 통해 데이터를 전달할 수 있듯이, ref도 하위 컴포넌트에게 전달할 수 있다.
다만 일반적인 데이터처럼 props 객체의 프로퍼티로 ref 가 들어가지는 않고, ref 를 넘겨 받는 하위 컴포넌트에서 forwardRef로 함수를 감싸주는 처리를 해줘야 한다.

개인적으로 우리가 state를 하위 컴포넌트에게 넘기는 이유는 그 상태값을 상위 컴포넌트에서 관리해야 하기 때문인데, 비슷한 맥락으로 접근했을 때 forwardRef 를 통해 ref를 하위 컴포넌트에게 넘겼을 때 상위 컴포넌트에서 인지하지도 못한다면 굳이 넘겨야 할 필요가 있을까 하는 생각이 든다. (상위 컴포넌트에서 하위 컴포넌트를 div 로 감싸고 그 div에 ref 를 걸거나, 그냥 하위 컴포넌트 내에서 useRef() 로 생성하는 방식으로 대부분 해결할 수 있지 않을까 하는…) 아직 forwardRef 가 확실히 필요한 상황을 마주하지 못했을 수도 있기에, 관련한 배움이 생겨 해당 글을 업데이트 할 수 있으면 좋겠다.

https://leehwarang.github.io/docs/tech/2020-11-29-ref.html

## 1.11 배열 렌더링하기

리액트에서 동적인 배열을 렌더링해야 할 때는 이 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됩니다.
리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우엔 id 가 고유 값이지요.
만약에 배열을 렌더링 할 때 key 설정을 하지 않게된다면 기본적으로 배열의 index 값을 key 로 사용하게 되고, 아까 봤었던 경고메시지가 뜨게 됩니다. 이렇게 경고 메시지가 뜨는 이유는, 각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문입니다.

## 1.12 useRef로 컴포넌트 안의 변수 만들기

useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데요, 바로, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것 입니다.

useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않습니다. 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있습니다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있습니다.

- setTimeout, setInterval 을 통해서 만들어진 id
- 외부 라이브러리를 사용하여 생성된 인스턴스
- scroll 위치

## 1.13 배열에 항목 추가하기

## 1.14 배열에 항목 제거하기

## 1.15 배열에 항목 수정하기

## 1.16 useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기

useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. 만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다.

그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.

주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.

- props 로 받은 값을 컴포넌트의 로컬 상태로 설정
- 외부 API 요청 (REST API 등)
- 라이브러리 사용 (D3, Video.js 등...)
- setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.

- setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
- 라이브러리 인스턴스 제거

### deps 에 특정 값 넣기

이번에는 deps 에 특정 값을 넣어보도록 하겠습니다. deps 에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 됩니다. 그리고, deps 안에 특정 값이 있다면 언마운트시에도 호출이되고, 값이 바뀌기 직전에도 호출이 됩니다.

### deps 파라미터를 생략하기

deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이 됩니다.

참고로 리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링이 됩니다. 바뀐 내용이 없다 할지라도요.

물론, 실제 DOM 에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당합니다. 하지만, Virtual DOM 에는 모든걸 다 렌더링하고 있다는 겁니다.

나중에는, 컴포넌트를 최적화 하는 과정에서 기존의 내용을 그대로 사용하면서 Virtual DOM 에 렌더링 하는 리소스를 아낄 수도 있습니다. 이것은 다음번에 알아볼게요.

## 1.17 useMemo 를 사용하여 연산한 값 재사용하기

**성능 최적화를 위하여 연산된 값을 useMemo라는 Hook 을 사용하여 재사용하는 방법**을 알아보도록 하겠습니다.
코드 작업함

## 1.18 useCallback 을 사용하여 함수 재사용하기

`useMemo` 는 특정 결과값을 재사용 할 때 사용하는 반면, **`useCallback` 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때** 사용합니다.

함수들은 컴포넌트가 리렌더링 될 때 마다 새로 만들어집니다. 함수를 선언하는 것 자체는 사실 메모리도, CPU 도 리소스를 많이 차지 하는 작업은 아니기 때문에 함수를 새로 선언한다고 해서 그 자체 만으로 큰 부하가 생길일은 없지만, 한번 만든 함수를 필요할때만 새로 만들고 재사용하는 것은 여전히 중요합니다.

그 이유는, 우리가 나중에 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 할건데요, 이 작업을 하려면, 함수를 재사용하는것이 필수입니다.

**주의 하실 점은, 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것 입니다.** 만약에 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없습니다. props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어주어야 해요.

사실, useCallback 은 useMemo 를 기반으로 만들어졌습니다. 다만, 함수를 위해서 사용 할 때 더욱 편하게 해준 것 뿐이지요.

useCallback 을 사용 함으로써, 바로 이뤄낼수 있는 눈에 띄는 최적화는 없습니다. 다음 영상에서, 컴포넌트 렌더링 최적화 작업을 해주어야만 성능이 최적화되는데요, 그 전에, 어떤 컴포넌트가 렌더링되고 있는지 확인하기 위해서 React DevTools 라는 것을 소개드리겠습니다.

## 1.19 React.memo 를 사용한 컴포넌트 리렌더링 방지

**컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는 React.memo 라는 함수에 대해서 알아보겠습니다.**

이 함수를 사용한다면, 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄수있어요.

사용법은 굉장히 쉽습니다.

그냥, 감싸주시면 돼요.

코드에서, 그런데, User 중 하나라도 수정하면 모든 User 들이 리렌더링되고, CreateUser 도 리렌더링이 됩니다.
이유는 간단합니다. users 배열이 바뀔때마다 onCreate 도 새로 만들어지고, onToggle,onRemove 도 새로 만들어지기 때문입니다.

deps 에 users 가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어지는건, 당연합니다.

그렇다면! 이걸 최적화하고 싶다면 어떻게해야 할까요?

바로 deps 에서 users 를 지우고, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 하는것입니다. 그건 또 어떻게 할까요? 힌트는, useState 를 배울때 다뤘던 내용이에요.

정답은 바로, 함수형 업데이트입니다.

함수형 업데이트를 하게 되면, setUsers 에 등록하는 콜백함수의 파라미터에서 최신 users 를 참조 할 수 있기 때문에 deps 에 users 를 넣지 않아도 된답니다.

그럼 각 함수들을 업데이트 해주세요 (onChange 의 경우엔 함수형 업데이트를 해도 영향은 가지 않지만, 연습삼아 해주겠습니다).

**리액트 개발을 하실 때, useCallback, useMemo, React.memo 는 컴포넌트의 성능을 실제로 개선할수있는 상황에서만 하세요.**

예를 들어서, User 컴포넌트에 b 와 button 에 onClick 으로 설정해준 함수들은, 해당 함수들을 useCallback 으로 재사용한다고 해서 리렌더링을 막을 수 있는것은 아니므로, 굳이 그렇게 할 필요 없습니다.

추가적으로, 렌더링 최적화 하지 않을 컴포넌트에 React.memo 를 사용하는것은, 불필요한 props 비교만 하는 것이기 때문에 실제로 렌더링을 방지할수있는 상황이 있는 경우에만 사용하시길바랍니다.

추가적으로, React.memo 에서 두번째 파라미터에 propsAreEqual 이라는 함수를 사용하여 특정 값들만 비교를 하는 것도 가능합니다.

```
export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
```

하지만, 이걸 잘못사용한다면 오히려 의도치 않은 버그들이 발생하기 쉽습니다. 예를 들어서, 함수형 업데이트로 전환을 안했는데 이렇게 users 만 비교를 하게 된다면, onToggle 과 onRemove 에서 최신 users 배열을 참조하지 않으므로 심각한 오류가 발생 할 수 있습니다.

## 1.20 useReducer 를 사용하여 상태 업데이트 로직 분리하기

## 1.21 커스텀 Hooks 만들기

커스텀 Hooks 를 만들 때에는 보통 이렇게 use 라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성합니다.
커스텀 Hooks 를 만드는 방법은 굉장히 간단합니다. 그냥, 그 안에서 useState, useEffect, useReducer, useCallback 등 Hooks 를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환해주면 됩니다.

## 1.27 리액트 개발 할 때, 사용하면 편리한 도구들 - Prettier, ESLint, ESLint

### Prettier

이 도구는 자바스크립트 뿐만 아니라, HTML, CSS 코드의 코드 스타일을 관리 할 수도 있고, React, Angular, Vue 등의 라이브러리도 지원 해주고 플러그인을 통하여 다른 언어도 관리해줄 수 있습니다.

가장 기본적인 사용 방법은 명령어를 사용하여 쓰는 것이고, Git을 통해 commit 할 때마다 자동으로 실행되도록 설정을 해줄 수도 있습니다.

제가 권장드리는 방법은 에디터와 연동해서 사용하는 것 입니다 (정말 편합니다!).
.prettierrc

```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

### ESLint

ESLint 는 자바스크립트의 문법을 확인해주는 도구입니다. CRA 로 만든 프로젝트에는 이미 적용이 되어있어서 만약에 우리가 자바스크립트 실수를 하게 되면 터미널에 오류 또는 경고가 나타나게 되죠.

ESLint 에 airbnb / standard / google 같은 설정을 적용하게 되면 굉장히 까다롭기 때문에, 여럿이서 협업하는 프로젝트가 아니라면, 저는 개인적으로 Prettier 와 ESLint 의 기본 설정만 적용하고 개발을 진행하는 것을 추천드립니다.

### Snippet

https://react.vlpt.us/basic/27-useful-tools.html
