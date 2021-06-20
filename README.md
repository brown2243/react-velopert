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

이번화는 버그가 많네. 그대로 따라해도 버튼의 텍스트가 위에 딱 붙어있다. 중요하지 않으니 pass

## CSS Module

## styled-component

CSS in JS와 CSS in CSS 사이에서 고민이다.
현재 CSS in JS 인데, 거래소는 속도가 생명이니까 퍼포먼스가 많이 떨어진다면 CSS in CSS로 전환을 해야 할지도...
