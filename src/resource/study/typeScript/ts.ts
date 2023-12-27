/*

  # 타입스크립트
    
  타입스크립트 설정 방법
  
  
  1. 타입스크립트 설치
  
  이 패키지는 ts를 js로 변경하는 컴파일러를 제공한다.

  npm install typescript
  
  
  
  2. ts-node 설치
  
  ts 파일을 js로 컴파일해서 node에서 실행해준다.
  즉, 타입스크립트를 바로 실행할 수 있게 해주는 것이다.

  npm install -D ts-node
  
  
  
  3. 아래 명령어를 통해 tsconfig.json 파일을 생성하여 컴파일 세부 옵션을 설정해준다.
  
  npx tsc --init
  
  부가 옵션들
  
  strict: 타입 검사를 엄격하게 한다. false로 하면 타입스크립트를 사용하는 의미가 없다.
  include: ts 파일을 js로 컴파일할 폴더 지정
  exclude: js 컴파일 제외 폴더 지정
  target: 컴파일 js 버전. 보통 es5를 기준으로 한다.
  lib: 컴파일할 때 포함될 라이브러리 목록
  module: js 파일 간에 import 시 어떤 문법을 사용할지 지정한다. (commonjs는 require 문법, es2015와 esnext는 import 문법)
  outDir: 컴파일된 js가 생성되는 경로
  roodDir: 시작 경로
  allowJs: ts 파일을 컴파일할 때 js 파일도 포함할지 설정. 기존 자바스크립트 프로젝트에서 타입스크립트로 적용할 때 유용하다.
  esModuleInterop: export default가 없는 라이브러리도 * as 없이 불러올 수 있다.

*/ 

/*
  자바스크립트는 변수에 따로 데이터 타입을 지정하지 않아도 숫자, 문자열, 불린 등 여러 타입을 가질 수 있다.
  자바나 C#보단 비교적 유연하게 개발 할 수 있는 환경을 제공한다. 하지만 런타임 환경에서 쉽게 에러가 발생할 수 있다는 단점도 가지고 있다.  
  타입스크립트는 자바스크립트의 이런 단점을 보완한 언어로 대부분의 에러를 컴파일 환경에서 코드를 입력하는 동안 체크할 수 있다.
*/

//참고: https://yeomkyeorae.github.io/typesciprt/basic_typescript/#%EB%AC%B8%EC%9E%90%EC%97%B4
//https://joshua1988.github.io/ts/intro.html

//1.기본 TS 타입 선언
//let str: string = 'hello'; 변수명 뒤에 데이터 타입을 입력한다.


//문자열
let str: string = 'hello';

//숫자
let num: number = 100;

//배열 
let arr: Array<number> = [10, 20, 30];
let arr2: number[] = [10, 20, 30];
let arr3: Array<string> = ["lion", "tiger"];
//투플
//투플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미.
let arrTuple: [string, number] = ['hi', 10];


//객체 (object타입은 인터페이스와 클래스의 상위 타입이다.)

/*
  object 타입으로 선언된 변수는 number, boolean, string 타입의 값을 가질 수는 없지만, 다음처럼 속성 이름이 다른 객체를 모두 자유롭게 담을 수 있다.
*/

//일반 객체 타입
//타입을 object로 정의하면, any 타입처럼 모든 타입의 값을 할당할 수 있다. 하지만 타입스크립트의 사용 목적의 본질을 흐림
let info: object = { name: "yeom", age: 29 };


//객체의 타입을 명확하게 정의하기 위해 인터페이스를 정의 후 객체의 타입을 정의한 인터페이스로 지정해준다.
interface User {
  name: string,
  age: number
}

let obj: User = { name: "yeom", age: 29 };
let obj2: User = { name: "park", age: 29 };
//obj에 name과 age속성이 모두 들어가있지 않거나 name과 age를 제외한 다른 속성을 넣으면 오류가 발생한다.

let person: { name: string , age: number };



//불린
let isAvaliable: boolean = true;

console.log({
  str,
  num,
  arr,
  arr2,
  arr3,
  arrTuple,
  obj,
  isAvaliable,
});

//Enum 
//특정 값(상수)들의 집합을 의미한다. 이 안에 item은 멤버라고 부른다.

enum squad {
  Hero1 = 2,
  Hero2 = 3,
  Hero3 = 4
}

console.log(squad[0]); //undefined
//0을 할당한 멤버가 없으니 undefined

enum squad1 {
  Hero1,
  Hero2,
  Hero3
}
console.log(squad1[0]); //Hero1
/*
  멤버에 따로 값이 할당 되지 않았다면 
  순차적으로 0 부터 자동 할당된다고 보면 됨.
*/


//인덱스 값으로도 접근 가능

enum week {
  Sun = 3,
  Mon = 4,
  Tue = 5,
  Wed = 6,
  Thu = 7,
  Fri = 8,
  Sat = 9 
}

console.log(week.Wed); // 3
console.log(week['Wed']); // 3
console.log(week[2]); // 'Tue'





//2.함수 선언
function sum(a: number, b: number): number {
  console.log(a + b);
  return a + b
}

sum(1, 2);






