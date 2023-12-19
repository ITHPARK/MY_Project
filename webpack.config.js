/*
  ※ webpack (정적 모듈 번들러)
  
  웹팩은 모듈 번들러이다. js, css, image파일 등을 묶어서 하나의 번들로 만들어 주는 것이다.
  웹팩을 사용하는 이유는 HTTP의 요청을 효율적으로 사용하기 위함이다.
  프로젝트가 커질수록 많은 모듈들이 있을것이고 많은 모듈은 곧 웹페이지가 로딩 될 때 HTTP 요청을 여러번 하게 되는것이다
  이렇게 많은 모듈을 여러번 호출하면 로딩이 느려지는 등 비효율적이므로 여러개의 모듈들을 하나로 묶어주는 webpack을 사용하는것이다.
  
  
  ※ webpack 설치방법

  프로젝트 폴더 루트에
  npm init -y
  
  npm i -D webpack webpack-cli
  
  
  ※ webpack.config.js
  
  루트 폴더에 webpack.config.js 생성
  
  webpack.config.js 파일에서 웹팩 옵션들을 설정할 수 있는 파일이다.'
  
  
  # 아래는 웹팩의 설정 코드
*/

//webpack 번들링 되기전 루트 js 파일(여기에 import해서 번들링 할 예정) 

const path = require('path') // node 모듈을 import 해오는 기본방법 
const HtmlPlugin = require('html-webpack-plugin') // webpack plugin 모듈 가져오기 
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  mode: "development",
  entry: "./src/resource/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리방식 등 다양한 플러그인 사용을 위한 구성요소 추가 
  plugins: [ 
    new HtmlPlugin({ // 생성자를 이용한 플러그인 생성 
      template: './src/resource/html/webpack_test.html' // 템플릿 연결 
    }),
    new CopyPlugin ({
      patterns: [
        { from: 'static' } // static 폴더 안의 내용이 dist로 복사되어 들어가도록 한다. 
      ]
    })
  ],

  devServer: {
    host:'localhost'
  }
};

/*

  entry: 웹팩이 디펜던시 그래프를 그리릴 때 시작점을 가르킨다. 다른 모듈들이나 라이브러리들을 엔트리 포인트가 의존하고 있는 것들을 찾는다.
  
  output: 웹팩이 만드는 번들을 어디에 만들고 이름을 무엇으로 할 것 인지 정한다. 현재는 build 디렉토리에 bundle.js로 설정 되어 있음.
  
  loader: 웹팩은 원래 javascript와 json 파일들만 이해할 수 있는데. loader을 사용하면 웹팩이 다른 파일들을 처리할 수 있게 해주고. 파일을 변형하는 역할을 한다.
          loader는 test와 use 두가지 속성을 가지고 있으며 test는 파일의 대상을 설정하며 use는 어떤 loader가 사용될 것인지 선택한다.
          
          const path = require('path');

          module.exports = {
            output: {
              filename: 'my-first-webpack.bundle.js'
            },
            module: {
              rules: [
                {
                  test: /\.css$/, 
                  use: [
                    'style-loader',
                    'css-loader'
                  ]
                }
              ]
            }
          };
  
  plugins:로더는 특정 유형의 모듈을 변환하는 데 사용되지만 플러그인을 사용하면 번들 최적화, 관리 및 환경 변수 주입 등과 같은 광범위한 작업을 수행 가능하다.
          플러그인을 사용하기 위해서  require()로 import 하고 plugins 배열에 추가한다.
          플러그인을 여러 번 사용할 수 있으므로 new로 새로운 인스턴스를 생성하여 추가한다.
          
          const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
          const webpack = require('webpack'); //to access built-in plugins

          module.exports = {
            module: {
              rules: [
                { test: /\.txt$/, use: 'raw-loader' }
              ]
            },
            plugins: [
              new HtmlWebpackPlugin({template: './src/index.html'})
            ]
          };
  
  mode: mode값을 변경함으로써 개발물과 실제 배포용코드를 만들 수 있다.
        기본값은 production이다.
        
        module.exports = {
          mode: 'production'
        };
  
*/

/*

  웹팩을 모두 작성하였으면 npx webpack으로 실행시켜볼 수 있다.
  
*/