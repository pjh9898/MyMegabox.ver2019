*웹 퍼블리싱 연습용 작업폴더입니다.
*퍼블리싱 연습용 무료디자인파일을 찾다가 유튜버 Webstoryboy님의 디자인psd파일과, 해당 강의영상의 image파일을 기반으로 작업을 시작하였습니다.
*강의영상을 보고 같은구조로 코드를 짜는것이 아닌, 디자인 시안을보고 구조를 짠 뒤, font-size, color등의 디자인적 요소만 예시를 참고하여 작업하였습니다.
*psd파일은 용량이 커서 모바일버전만 올렸고, pdf파일로 변환하여 데스크탑, 테블릿, 모바일 세 가지 디자인시안을 올려놓았습니다.

작업 기술 : HTML, CSS, Javascript

<commit form>
      
  commit n
  보완할 점 수정사항
  업데이트 내역
  보완할 점
  보완 방법
  비고
      
</form>

commit 1
  
보완할 점 수정사항 : X

업데이트 내역 : header파트 완료 + banner파트 carousel작업중

보완할 점
1. carousel의 <img>태그에 들어가는 이미지가 width가 줄어들시 오른쪽부터 잘리게 됨 => 예시 웹 에서는 왼쪽, 오른쪽이 같은비율로 잘림. 예시와 같이 만들것

보완 방법
1-1 같은 비율로 줄어드는 속성을 찾는다(?)
1-2 <img>태그 대신 background-image로 만들어 해당속성을 찾는다(?)


commit 2

보완할 점 수정사항
1. commit 1-1 : <img>태그에 object-fit: cover를 적용함
  
업데이트 내역 : banner파트 carousel image부분 작업완료, banner-menu부분 작업중

보완할 점
1. menu와 헤더의 오른쪽 col의 오른쪽 끝부분이 1260px~1280px구간에서 맞지 않는 구간오류 발생
2. 768px 이하로 변하는 과정에 banner에 transtition이 무슨짓을 해도 적용되지 않는데, 이거 적용시키기

보완 방법
1-1 padding과 margin이 너무 난잡하게 들어가있어서 둘이 안맞는듯. 둘 중 한개에만 적용되어있는 속성을 제거한다
1-2 media쿼리로 눈속임한다
1-3 한번 더 안맞는만큼 padding 붙인다(코드가 더러워지니 왠만하면 하지말자)
1-4 애초에 구조가 너무 난잡하다. header파트부터 틀을 바꾼다
2. button에는 transtition이 적용이 안되나? MDN가서 이것저것 확인해보자


commit 3

보완할 점 수정사항
1. commit 2-1 : 결국 전체적으로 구조를 손봤다. padding과 margin 대부분을 정리하고, flexbox를 이용하여 재정비함. 덕분에 froggy 다 풀고왔다.
2. commit 2-2 : button id속성으로 해놓고 .button으로 하고있었다....... 자꾸 헷갈리는 부분인데 볼때마다 화가난다.

업데이트 내역 : banner파트 작업완료

비고
1. id는 고유한것에 class는 여러곳에 쓰이는것에 붙인다고 배워서 그대로 사용중이다. 그러다보니 나는 id의 비율이 더 많은데 다른 코드를 보면 class의 비율이 압도적으로 많다.
정말 중요한 or 큰 범위의 태그(header, banner등)에만 id를 사용하는것이 좋을까? 관련 자료를 찾아보며 고민해봐야겠다.
2. 작업중에 부족한걸 알면서 잠시 보류하고 다른것을 작업하는 것이 너무싫다. 그러다보니 오늘 해결한 button이슈처럼 쉬운걸 못찾고 3~4시간씩 정체하다가
결국 다음날 다시보면 10분만에 해결되는일이 자주 있다. 뒤에 작업에 영향을 주는 이슈가 아니라면, 멘탈과 시간효율을 위해 조금 리프레쉬 후 다시 보는것도 고려해보자.

commit 4

업데이트 내역 : movie파트 구조짜기 완료

비고
1. java script로 movie-title에 action유지되게 할 것
2. java script로 movie-slider에 silde 기능 추가할 것

commit 5

업데이트 내역 : movie파트 movie-title에 action유지기능 추가, movie-slider에 slide기능 작성중

비고
1. slide기능 제대로 작동되게 만들 것

commit 6

업데이트 내역 : movie-slider에 slide기능 임시완료

보완 할점 :
1. slider 양쪽 끝부분 slider되는 한계선 추가
2. slider 사이즈 재조정
3. slider 기능 부드럽게 만들기

보완 방법 :
1. 한계선 스타일 추가
2. 하단 잘리는것 수정
3. how to draggable slider smoothly검색해보기(?)
