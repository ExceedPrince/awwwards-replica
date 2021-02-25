function _load() {

  let root = document.getElementById("root");
  
  root.insertAdjacentHTML("beforebegin", `
    <div class="pointer"><div class="pointer1"></div></div>
  `);
  let musicOn = true;
  const cursor = document.querySelector(".pointer");

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 14)+"px; left: "+(e.pageX - 14)+"px;");
  });

function steinaLoad() {
    //root.innerHTML = "<div id= 'steinaLogo'>STEiNA</div>";
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin",`<img id='steinaLogo' src='./src/logo.svg'>`);

    document.getElementById("steinaLogo").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("steinaLogo").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });
  }
  
  steinaLoad();

  function giffyLoad() {
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `
    <div id="firstContainer">
      <div id="gif">
        <img src="./src/loading.gif">
      </div>
      <div id="coupleWedding"><p>Steiner & Angela's Wedding</p></div>
      <div id="loadingLine">
        <div id="line1">
          <div id="line2"></div>
        </div>
        <div id="measure">
          <span id="loadingNumber"></span>%
      </div>
      </div>
    </div>
    `)
    let loadLine = document.getElementById("line2");
    let loadNo = document.getElementById("loadingNumber");
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const stretchLine = async () => {
      for (let w = 0; w < 101; w++) {
        await sleep(50);
        loadLine.style.width = w + "%";
        loadNo.innerHTML = w;
      }
    }

    stretchLine();

    document.getElementById("firstContainer").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("firstContainer").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });
  }

  setTimeout(function () { giffyLoad() }, 4100);

  function musicLoad() {
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `
    <div id="secondContainer">
      <div id="sound">
        <img src="./src/music_on_v2.png">
      </div>
      <div id="question"><p>OPEN MUSIC?</p></div>
      <div id="Btns">
        <div id="choice1" class="chooseBtn">
          <span id="yesBtn">YES</span>
          <div Id="edges1" class="edges">
            <div id="up-left">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="up-right">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="down-right">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="down-left">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
          </div>
        </div>
        <div id="choice2" class="chooseBtn">
          <span id="noBtn">NO</span>
          <div Id="edges2">
            <div id="up-left">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="up-right">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="down-right">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
            <div id="down-left">
              <div class="horizontal"></div>
              <div class="vertical"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="okContainer">  
        <span id="ok">
          <div id="lines">
            <div class="whiteLine" id="line-up"></div>
            <div class="whiteLine" id="line-right"></div>
            <div class="whiteLine" id="line-down"></div>
            <div class="whiteLine" id="line-left"></div>
          </div>
        </span>
      </div>
    </div>
    `);

    document.getElementById("secondContainer").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("secondContainer").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    let yesBtn = document.getElementById("choice1");
    let noBtn = document.getElementById("choice2");
    let okBtn = document.getElementById("lines");
    
    yesBtn.classList.add('btnActive');

    function disappear() {
      document.getElementById("question").classList.add('disappear');
      yesBtn.classList.add('disappear');
      noBtn.classList.add('disappear');
      document.getElementById("okContainer").classList.add('disappear');
      setTimeout(function () { mainLoad() }, 1500);
    
    };

    function soundUp () {
      document.getElementById("secondContainer").classList.add('soundUp');
    };

    function chooseYes(){
      noBtn.classList.remove('btnActive');
      yesBtn.classList.add('btnActive');
      musicOn = true;
    }
    
    function chooseNo(){
      yesBtn.classList.remove('btnActive');
      noBtn.classList.add('btnActive');
      musicOn = false;
    }

    document.getElementById("lines").style.width = "60px";
    document.getElementById("lines").style.height = "40px";
    document.getElementById("lines").style.opacity = "0%";
    document.getElementById("lines").style.transition = "0.3s";
    
    okBtn.addEventListener("mouseover", function (){
      cursor.classList.add("hovered");
      document.getElementById("lines").style.width = "50px";
      document.getElementById("lines").style.height = "25px";
      document.getElementById("lines").style.opacity = "100%";
      document.getElementById("lines").style.transition = "0.3s";
    });
    okBtn.addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered");
      document.getElementById("lines").style.width = "60px";
      document.getElementById("lines").style.height = "40px";
      document.getElementById("lines").style.opacity = "0%";
      document.getElementById("lines").style.transition = "0.3s";
    });
    okBtn.addEventListener("mousedown", function (){
      cursor.classList.add("bigger");
    });
    okBtn.addEventListener("mouseup", function (){
      cursor.classList.remove("bigger");
    });
    okBtn.addEventListener("click", disappear);
    okBtn.addEventListener("click", soundUp);

    yesBtn.addEventListener("click", chooseYes);
    yesBtn.addEventListener("click", function () {
      document.getElementById("edges1").classList.add("edges");
      document.getElementById("edges2").classList.remove("edges");
    });
    yesBtn.addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    yesBtn.addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    yesBtn.addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    yesBtn.addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    noBtn.addEventListener("click", chooseNo);
    noBtn.addEventListener("click", function(){
      document.getElementById("edges1").classList.remove("edges");
      document.getElementById("edges2").classList.add("edges");
    })
    noBtn.addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    noBtn.addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    noBtn.addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    noBtn.addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });
      
  }

  setTimeout(function () { musicLoad() }, 12100);
  
  function mainLoad() {
    root.innerHTML = "";
    root.insertAdjacentHTML("afterbegin", `
    <audio id="audio" src="./src/Orbit - Corbyn Kites.mp3"></audio>
    <div id="thirdContainer">
      <img class ='backImage' id='skyBg' src='./src/bg.png'>
      <img class ='backImage' id='treeA' src='./src/treeA.png'>
      <img class ='backImage' id='treeB' src='./src/treeB.png'>
      <img class ='backImage' id='treeC' src='./src/treeC.png'>
      <img class ='backImage' id='treeD' src='./src/treeD.png'>
      <img class ='backImage' id='treeMain' src='./src/treeMain.png'>
      <img class ='backImage' id='static' src='./src/static.png'>
      <img class ='backImage' id='gress' src='./src/gress.png'>
      <div id="navContainer">
        <img id='steinaLogo3' src='./src/logo.svg'>
        <span id="signIn">SIGN IN</span>
        <button id="languageBtn">
        <span><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg></span>
        <span id="asianMark2">中文</span>
        </button>
        </div>
      <div id="midContainer">
        <div id="verticals">
          <span id="gallery">RSVP</span>
          <span id="board">BOARD</span>
          <span id="rsvp">GALLERY</span>
        </div>
        <div id="logoNstart">
          <img id='steinaLogo2' src='./src/logo.svg'>
          <div id="start">
            PRESS TO START
          </div>
        </div>
      </div>
      <div id="bottomContainer">
        <div id="soundBtn">
          <img src='./src/music_on.png'>
        </div>
        <div id="footer">
          <span id="wedding">STEINER & ANGELA'S WEDDING</span>
          <span id="date">2021/01/16 9:30 A.M. in SHULIN CATHOLIC</span>
          <span id="thanks">SPECIAL THANKS</span>
        </div>
      </div>
    </div>
    `);

    let langMark = document.getElementById("languageBtn");
    let krixkrax = true;
    langMark.addEventListener("click", function() {
      if (krixkrax) {
        document.getElementById("asianMark2").innerHTML = "English";
        krixkrax = false;
      } else {
        document.getElementById("asianMark2").innerHTML = "中文";
        krixkrax = true;
      }
    });

    // Zene lejátszása
    let soundButton = document.getElementById("soundBtn").firstElementChild;
    let audio = document.getElementById("audio");
    
    if(musicOn) {
      audio.play();
      soundButton.src= "./src/music_on.png";
    }
    else {
      soundButton.src= "./src/music_off.png";
    }
    
    soundButton.addEventListener("click", function() {
      //if(soundButton.src === "./src/music_off.png"){ // az első esetben a . az a szerver címe ezért nem működött
        if(musicOn){
        audio.pause();
        soundButton.src = "./src/music_off.png";
        musicOn = false;
      }
      else {
        audio.play();
        soundButton.src = "./src/music_on.png";
        musicOn = true;
      }  
    }); 

    document.getElementById("steinaLogo3").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("steinaLogo3").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("steinaLogo3").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("steinaLogo3").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });
    document.getElementById("steinaLogo3").addEventListener("mouseup", function (){
      mainLoad()
    });

    document.getElementById("signIn").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("signIn").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("signIn").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("signIn").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    document.getElementById("languageBtn").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("languageBtn").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("languageBtn").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("languageBtn").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    document.getElementById("steinaLogo2").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("steinaLogo2").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });
    
    document.getElementById("start").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("start").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("start").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("start").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    document.getElementById("soundBtn").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("soundBtn").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("soundBtn").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("soundBtn").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

    document.getElementById("thanks").addEventListener("mouseover", function (){
      cursor.classList.add("hovered")
    });
    document.getElementById("thanks").addEventListener("mouseleave", function (){
      cursor.classList.remove("hovered")
    });
    document.getElementById("thanks").addEventListener("mousedown", function (){
      cursor.classList.add("bigger")
    });
    document.getElementById("thanks").addEventListener("mouseup", function (){
      cursor.classList.remove("bigger")
    });

  }
}

window.addEventListener("load", _load);

