let movieTitle = document.querySelectorAll("#movie-title a");
let slides = document.querySelector("#movie-slider");
let slide = document.querySelectorAll("#movie-list");

// console.log("slide : ", slide);

movieTitle.forEach(menu => menu.addEventListener(
    "click", () => {
        movieTitle.forEach((menu) => menu.classList.remove('active'));
        menu.classList.add('active');
    }));

slides.addEventListener("mousedown", ()=>{
    slide.forEach((list) => list.addEventListener("mousemove", onDrag(list)));
});
document.addEventListener("mouseup", ()=>{
    slide.forEach((list) => list.removeEventListener("mousemove", onDrag(list)));
});

const makeMovieList = () => {
    let movieListHTML = "";
    let movieTitle = ["침묵", "신세계", "마스터", "마약왕", "그녀", "괴물", "꼭두각시", "겟 아웃", "문라이트"]
    for (i = 1; i < 10; i++){
        movieListHTML += `
        <div id="movie-list">
            <div id="movie-wrapper">
              <img src="mega-image/poster0${i}.jpg">
              <div id="movie-rank">
                <span class="rank-style">${i}</span>
              </div>
              <div id="mx" class="icon"></div>
              <div id="information">
                <div id="information-top">
                  <div id="film-rating" class="icon rating-icon${(i - 1)%4 + 1}"></div>
                  <strong id="movie-name">침묵</strong>
                </div>
                <div id="information-bottom">
                  <button type="button">상세정보</button>
                  <button type="button">예매하기</button>
                </div>
              </div>
            </div>
        </div>
        `
        document.querySelector("#movie-slider").innerHTML = movieListHTML;
    }
}

function onDrag({list, movementX}){
    console.log(list)
    let getStyle = window.getComputedStyle(list);
    let left = parseInt(getStyle.left);
    list.style.left = `${left + movementX}px`
    console.log("mousedown", movementX);
}

// function slider(slide){
//     let slideCount = slide.length,
//         slideWidth = slide[0].ClientWidth,
//         slidePadding = 10,
//         currentIdx = 0,
//         randerSlide = [];

//     forEach(slide => 
//         d
//         );
// }

makeMovieList();