# `@sds/colors`

SDS의 컬러는 현재 `@sds/colors/salda`와 `@sds/colors/saldaPro`로 나뉜다.

## Development

### 폴더 구조

각각의 컬러는 다음과 같은 폴더 구조를 가진다.

```sh
src/
├─ scss/
│  ├─ _base.scss # Base 컬러 SCSS 변수를 정의
│  ├─ _functions.scss # 컬러 사용을 위한 SCSS 함수를 정의
│  ├─ _variables.scss # Base컬러를 기반으로 한 Semantic 컬러를 정의
├─ ts/
│  ├─ base.ts # Base 컬러 JS 변수를 정의
│  ├─ color.ts # Base컬러를 기반으로 한 Semantic 컬러 객체를 정의
index.ts
_index.scss
```


### 시맨틱 컬러 추가하기 (또는 수정하기)

시맨틱 컬러를 추가해야 하는 경우`scss`와 `ts` 폴더를 각각 수정해야 한다.

- scss에 컬러 추가하기

  1. `_variables.scss`에 SCSS의 Maps타입 변수를 추가한다. 
  2. 컬러가 바뀐 경우아 아니라 새로운 Semantic 컬러를 추가한 경우, `_functions.scss`에 들어가 새로운 Semantic 컬러를 추가한다.

- ts에 컬러 추가하기

  1. `color.ts`에 들어가 추가할 시맨특 컬러 객체에 컬러를 추가한다.


## Usage

- scss 사용하기
  
    ```scss
    @use "@sds/colors/salda" as *;

    .success {
      color: state-color("success", "main");
    }
    ```

- ts 사용하기

  ```ts
  const Success = styled.h1`
    background: ${stateColor.success.main};
  `
  ```