# chap.2_styling

## Scss(Sass)

이미 알긴하는데 복습가즈아!

```
// 이런식으로 사용 함
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

react에서 scss를 사용하려면 eject 후 설정을 변경해야 하는데, 그냥 scss를 css로 변환 시켜주는 라이브러리 설치(나도 예전에 scss 컴파일러로 css 변환 후 사용했었음)
`yarn add node-sass`

```
./src/components/Button.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/react-scripts/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/Button.scss)
Node Sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0.
```

에러 발생했는데, node-sass 버전이 바뀌면서 뭐가 변경됐나보다.
스택보니까, sass-loader 설치하고 webpack.config에서 loader 추가해주는데 그냥 scss 컴파일러 vscode extension으로 다운받아 진행

```
{
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    compileType: 'module',
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'sass-loader'  // 이거 추가해줌
              ),
            },
```

scss 에서는 $blue: #228be6; 이런 식으로 스타일 파일에서 사용 할 수 있는 변수를 선언 할 수도 있고 lighten() 또는 darken() 과 같이 색상을 더 밝게하거나 어둡게 해주는 함수도 사용 할 수 있습니다.

이번화는 버그가 많네. 그대로 따라해도 버튼의 텍스트가 위에 딱 붙어있다.

```
justify-content: center;
align-items: center;
```

조건부로 CSS 클래스를 넣어주고 싶을때 이렇게 문자열을 직접 조합해주는 것 보다 classnames 라는 라이브러리를 사용하는 것이 훨씬 편합니다.
classNames 를 사용하면 다음과 같이 조건부 스타일링을 할 때 함수의 인자에 문자열, 배열, 객체 등을 전달하여 손쉽게 문자열을 조합 할 수 있습니다.

```
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(['foo', 'bar']); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있습니다.
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// false, null, 0, undefined 는 무시됩니다.
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

반복이 되는 코드는 Sass 의 mixin 이라는 기능을 사용하여 쉽게 재사용 할 수 있습니다. 한번, button-color라는 mixin 을 만들어서 사용해보겠습니다.

```
  &.blue {
    background: $blue;
    &:hover {
      background: lighten($blue, 10%);
    }

    &:active {
      background: darken($blue, 10%);
    }
  }

  &.gray {
    background: $gray;
    &:hover {
      background: lighten($gray, 10%);
    }

    &:active {
      background: darken($gray, 10%);
    }
  }

  &.pink {
    background: $pink;
    &:hover {
      background: lighten($pink, 10%);
    }

    &:active {
      background: darken($pink, 10%);
    }
  }

@mixin button-color($color) {
  background: $color;
  &:hover {
    background: lighten($color, 10%);
  }
  &:active {
    background: darken($color, 10%);
  }
}
  // 색상 관리
  &.blue {
    @include button-color($blue);
  }

  &.gray {
    @include button-color($gray);
  }

  &.pink {
    @include button-color($pink);
  }

```

...rest props 전달하기

spread 와 rest 입니다. 이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용하는데, 컴포넌트에서도 사용 할 수 있답니다.

이렇게 컴포넌트가 어떤 props 를 받을 지 확실치는 않지만 그대로 다른 컴포넌트 또는 HTML 태그에 전달을 해주어야 하는 상황에는 이렇게 ...rest 문법을 활용하시면 됩니다!

## CSS Module

CSS Module 이라는 기술을 사용하면, CSS 클래스가 중첩되는 것을 완벽히 방지할 수 있습니다.

CRA 로 만든 프로젝트에서 CSS Module 를 사용 할 때에는, CSS 파일의 확장자를 .module.css 로 하면 되는데요, 예를 들어서 다음과 같이 Box.module.css 라는 파일을 만들게 된다면

## styled-component

CSS in JS와 CSS in CSS 사이에서 고민이다.
현재 CSS in JS 인데, 거래소는 속도가 생명이니까 퍼포먼스가 많이 떨어진다면 CSS in CSS로 전환을 해야 할지도...
