# `@sds/typography`

SDS의 타이포그래피는 현재 `@sds/typography/salda`와 `@sds/typography/saldaPro`로 나뉜다.

## Development

### 폴더 구조

각각의 타이포그래피는 다음과 같은 폴더 구조를 가진다.

```sh
src/
├─ scss/
│  ├─ _typography.scss # 타이포그래피 SCSS 변수와 mixin을 정의
├─ ts/
│  ├─ type.ts # 타이포그래피 스타일 속성과 이름의 타입을 정의
│  ├─ typography.ts # 타이포그래피 사용과 관련된 함수를 정의
│  ├─ variable.ts # 타이포그래피 변수를 정의
index.ts
_index.scss
```


### 타이포그래피 추가하기 (또는 수정하기)

타이포그래피를 추가해야 하는 경우`scss`와 `ts` 폴더를 각각 수정해야 한다.

- scss에 타이포그래피 추가하기

  `_typography.scss`에 SCSS의 Maps타입 변수를 추가한다.

- ts에 타이포그래피 추가하기

  1. `type.ts`에 들어가 `TypographyName`에 타이포그래피 이름을 추가한다.
  2. `variable.ts`에 들어가 스타일 속성을 담은 타이포그래피 변수를 추가한다.
  3. `typography.ts`에 들어가 `getTypoObject`에 새로 만든 타이포그래피를 추가한다.


## Usage

- scss 사용하기
  
    ```scss
    @use "@sds/typography/salda" as *;

    .title {
      @include typography($heading1);
    }
    ```

- ts 사용하기

  ```ts
  // styled-components를 사용하는 경우
  const Title = styled.h1`
    ${styledTypography("Heading1")}
  `

  // style 속성을 사용하는 경우
  <div style={heading1}></div>
  // 또는
  <div style={getTypoObject("Heading1")}></div>
  ```