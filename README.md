<div align="center">

<h2> Melting </h2>

<img src=""  alt="서비스대표-이미지" />
<div>처음 만난 사람들과 사용하는 아이스브레이킹 게임</div>

</div>

<h2> ✨ 멜팅 주요 기능 </h2>

<h3> 1️⃣ 얼음 녹이기 </h3>

<img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/63349683/a9c7e15a-0948-4f6c-9784-a0972e9e3a1a"
 alt="기능1-대표이미지" />
<div ><strong> TMI 공개 및 작성자 공개 </strong>   <br/>작성한 TMI를 보고 팀원들이 TMI의 주인이 누구인지 맞힙니다</div>

<h3> 2️⃣ 방 만들기 </h3>
<img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/63349683/fb575241-06ab-4913-ad2b-48ea0e75f9b0"
alt="기능2-대표이미지" />
<div ><strong> 방 만들기 </strong> <br/>방을 만들고 코드를 입력하여 처음 만난 사람들이 이용할 수 있는 아이스브레이킹 게임으로 진입할 수 있도록 합니다</div>

<h3> 3️⃣ TMI 입력하기 </h3>
<img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/63349683/56dc01fe-6cc7-4ace-a09d-39306d33342f"
  alt="기능3-대표이미지" />

<div ><strong> 오늘, 당신의 TMI 는 무엇인가요? </strong>   <br/> 돌아가며 100자 이하의 자신의 TMI를 입력합니다</div>

<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/wrryu09">
              <img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/98469609/e6c7b49b-e3b4-4a62-8ce8-86297484801d" width="200" alt="깃허브계정-프로필사진"/>
              <br />
              <b>wrryu09</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/ijieun">
              <img src="https://avatars.githubusercontent.com/u/99737532?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>ijieun</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/j-nary">
              <img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/83453646/5305a6f0-a079-45ed-9f62-f913840f6c4c" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>j-nary</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/j-nary">
              <img src="https://avatars.githubusercontent.com/u/63349683?s=400&u=a84d37faf374b967d62a87295ecef5cd2cb123c9&v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>(202010927choiminjune)</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            승연 <br/>
      </td>
       <td>
            지은 <br/>
      </td>
       <td>
            진 <br/>
      </td>
       <td>
            민준 <br/>
      </td>
    </tr>
  	<tr align="center">
       <td>
            메인 게임 페이지 <br/>
      </td>
       <td>
            모달 제작 <br/>
      </td>
       <td>
            TMI 생성, 방 개설 및 참여 <br/>
      </td>
       <td>
            랜딩페이지, 방 참여 방법 선택 <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

|  **category**   |          **stack**           |
| :-------------: | :--------------------------: |
|    `Common`     |            `yarn`            |
|   `Language`    |         `JavaScript`         |
|     `Build`     |            `Vite`            |
|   `Framework`   |           `React`            |
|     `Style`     |          `emotion`           |
| `Data Fetching` |           `Axios`            |
| `Collaboration` | `Notion`, `Figma`, `Discord` |

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>

<br/>

## 🖋️ 커밋 컨벤션

| **태그**  |           **설명**            |
| :-------: | :---------------------------: |
|   feat:   |   새로운 기능을 구현한 경우   |
|   fix:    |     버그 수정, 오류 해결      |
| refactor: |     코드 수정 및 리팩토링     |
|  style:   |      스타일 추가 및 수정      |
|   docs:   |     문서 추가, 수정, 삭제     |
|   init:   |      개발 환경 초기 세팅      |
|  chore:   | 그 외 자잘한 수정 (주석 삭제) |

<br />

## 🖋️ 브랜치 전략

Github-flow

<br />

## 📁 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 assets
	|-- 📁 api
	|-- 📁 components
	|      |-- 📁Button
	|          |-- Button.jsx
	|          |-- Button.style.js
	|-- 📁 constants
	|      |-- index.js (상수 데이터 많다면 분리)
	|-- 📁 pages
	|      |--📁APage
	|      |     |-- 📁ApageComponent
    |      |     |    |-- ApageComponent.jsx
	|      |     |    |-- ApageComponent.style.js
	|      |     |-- Apage.jsx
	|      |     |-- Apage.style.js
	|      |--📁BPage
	|      |--📁CPage
	|-- 📁 router
	|-- 📁 styles
	|      |-- 📁 theme
	|      |-- GlobalStyle.js
	|-- 📁 utils
	|-- App.jsx
	|-- main.jsx
|-- .prettierrc
|-- .gitignore
```

<h3>우리조 그라운드 룰</h3>

* 말투 둥글게 둥글게 해피솝커톤 했으면 좋겠어용 !! 즐거운 추억 쌓아가요 - 진이
* 모르는 부분 바로바로 얘기하기!! -승연
* 웃으면서 좋은 결과 내자 !!!! -지은
* 모르는 부분 있으면 바로바로 질문하여 의사소통에 문제가 안생기게 하기 !! 다같이 파이팅합시다~~ -민준

<h2> 새싹 웨비 Before and After</h2>
<h3>Before</h3>
<img src="https://github.com/NOW-SOPT-SOPKATHON-WEB1/CLIENT/assets/98469609/fddeee7c-7ef5-432e-975f-ae671995ebfe" alt="웨비 팀원들 사진 (before)"/>

<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>
