/*
  webpack
  
  웹팩은 모듈 번들러이다. js, css, image파일 등을 묶어서 하나의 번들로 만들어 주는 것이다.
  웹팩을 사용하는 이유는 HTTP의 요청을 효율적으로 사용하기 위함이다.
  프로젝트가 커질수록 많은 모듈들이 있을것이고 많은 모듈은 곧 웹페이지가 로딩 될 때 HTTP 요청을 여러번 하게 되는것이다
  이렇게 많은 모듈을 여러번 호출하면 로딩이 느려지는 등 비효율적이므로 여러개의 모듈들을 하나로 묶어주는 webpack을 사용하는것이다.
  
  
  
  webpack 설치방법
  
  프로젝트 폴더 루트에
  npm init -y
  
  npm i -D webpack webpack-cli
  
  루트 폴더에 webpack.config.js 생성
  
  
  
  
  
  
*/


//webpack 번들링 되기전 루트 js 파일(여기에 import해서 번들링 할 예정) 



import hello from "./webpack_test.js";
import webpack from "./webpack_test2.js";

hello();
webpack();