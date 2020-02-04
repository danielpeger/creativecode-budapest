export default function HeroSketch(backgroundImage){
  return function(p){
    let displayLogo = true;
    let message = 'Creative Code Budapest';
    let hoverCode = true;
    let displayFrontImage = true;
    let displayHUD = false; // [H] toggles display debug hud
    let messageCodes = []; // array to hold codes for message lines and characters
    let rows; // words im the message
    let columns; // character count of longest word
    let logo;
    let logoLoaded = false;
    let img; // image loaded
    let imgAveraged; // resized image for average color areas
    let imgLoaded = false;
    let aspectWidth;
    let aspectHeight;
    let startingRotationX = 0;
    let startingRotationZ = 0;

    p.setup = function () {
      let imagePath = backgroundImage.replace(
        `upload/t_breakthumbnails/`,
        `upload/f_auto,w_1000,dpr_${Math.floor(window.devicePixelRatio)}.0/`
      )
      let htmlContainer = document.getElementById('HeroSketchContainer');
      p.createCanvas(htmlContainer.offsetWidth, window.innerHeight * 0.80);
      // p.createCanvas(canvasWidth, canvasHeight, p.WEBGL);

      if (displayLogo)
        logo = p.loadImage(
          'logo/logo-white.png',
          logoLoadSuccess
        );
      img = p.loadImage(imagePath, imgLoadSuccess);

      if (p.getURLParams().message !== undefined) message = p.getURLParams().message;

      encodeMessage();
    };

    p.windowResized = function() {
      let htmlContainer = document.getElementById('HeroSketchContainer');
      p.resizeCanvas(htmlContainer.offsetWidth, htmlContainer.offsetHeight);
    }

    function logoLoadSuccess() {
      logoLoaded = true;
    }

    function imgLoadSuccess() {
      imgAveraged = p.createImage(columns, rows);
      imgAveraged.copy(img, 0, 0, img.width, img.height, 0, 0, imgAveraged.width, imgAveraged.height);
      imgAveraged.loadPixels();

      imgLoaded = true;
    }

    function encodeMessage() {
      /*
      0-9		48-57  => 0 — -9 (negative numbers to differentiate from letters)
      A-Z		65-90  => 1 — 26
      a-z		97-122 => 1 — 26
      */
      let longestWord = 0;
      message = message.toUpperCase();

      let lines = p.split(message, p.getURLParams().message !== undefined ? '-' : ' ');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > longestWord) longestWord = lines[i].length;
        messageCodes[i] = [];
        for (let j = 0; j < lines[i].length; j++) {
          let c = charToCode(lines[i].charCodeAt(j));
          messageCodes[i].push(c);
        }
      }

      rows = messageCodes.length;
      columns = longestWord;
    }

    function charToCode(c) {
      if (c > 47 && c < 58) return (c - 48) * -1; // numbers (negative numbers from 0)
      if (c > 64 && c < 91) return c - 64; // letters (positive numbers 1-26)
      return c;
    }

    function getAspectFillImage(_img, w, h) {
      let imgRatio = _img.height / _img.width;

      if (h / w < imgRatio) {
        aspectWidth = w;
        aspectHeight = w * imgRatio;
      } else {
        aspectWidth = h / imgRatio;
        aspectHeight = h;
      }
    }

    function getAspectFitImage(_img, w, h) {
      let imgRatio = _img.height / _img.width;

      if (h / w < imgRatio) {
        aspectWidth = h / imgRatio;
        aspectHeight = h;
      } else {
        aspectWidth = w;
        aspectHeight = w * imgRatio;
      }
    }

    p.keyTyped = function (key) {
      if (key === 'h') {
        displayHUD = !displayHUD;
      }
      return false; // To prevent any default browser behavior
    }

    let uH;
    let uW;
    function drawCodePattern() {
      imgAveraged.loadPixels();

      uH = p.ceil(p.height / rows);
      uW = p.ceil(p.width / columns);

      p.push();
      p.noStroke();

      for (let i = 0; i < messageCodes.length; i++) {
        for (let j = 0; j < messageCodes[i].length; j++) {
          let c = messageCodes[i][j];
          if (c <= 0) {
            c = p.abs(c); // is a number, negative code, make it positive again
            p.fill(255);
          } else if (c > 0 && c < 27) {
            // is a letter
            p.fill(getFaster(j, i));
            // if (mouseX > j*uW && mouseX < j*uW+uW && mouseY > i*uH && mouseY < i*uH+uH) fill(255);
          } else {
            p.fill(255, 0, 0); // is a not valid character
          }
          // rect(j*uW,i*uH,uW,uH);
          if (c !== 0) stripesRect(c, j * uW, i * uH, uW, uH);
        }
      }
      p.pop();
    }

    function drawOneCode(_i, _j) {
      if (_i < messageCodes.length && _j < messageCodes[_i].length) {
        let c = messageCodes[_i][_j];
        p.fill(255);
        p.noStroke();
        if (c !== 0) stripesRect(c, _j * uW, _i * uH, uW, uH);
      }
    }

    function getFaster(x, y) {
      let d = 1;
      let off = (y * imgAveraged.width + x) * d * 4;
      let components = [
        imgAveraged.pixels[off],
        imgAveraged.pixels[off + 1],
        imgAveraged.pixels[off + 2],
        imgAveraged.pixels[off + 3]
      ];
      return components;
    }

    function stripesRect(stripes, x, y, w, h) {
      stripes = stripes * 2 - 1; // comment this line for even lines only
      let stripeHeight = h / stripes;
      for (let k = 0; k < stripes; k += 2) {
        p.rect(x, y + k * stripeHeight, w, stripeHeight);
      }
    }

    // todo: merge mox1/tx1 to 0..1 and use that where needed
    let mox1 = 0; // easing back image
    let moy1 = 0;
    let tx1;
    let ty1;
    let mox = 0; // easing fron imgage
    let moy = 0;
    let tx;
    let ty;
    let mos = 1; // easing scale
    let ts = 1;
    let nx; // noise for self animating the images
    let ny;
    let state = 0;

    p.draw = function () {
      p.background(0);

      if (p.rotationX != null && startingRotationX == null) {
        startingRotationX = p.rotationX;
        startingRotationZ = p.rotationZ; // this always starts at 260???
      }

      // nx = ((noise(frameCount*.001)*2)-1)*40;
      // ny = ((noise((frameCount+100)*.001)*2)-1)*40;

      nx = startingRotationZ - p.rotationZ;
      ny = startingRotationX - p.rotationX;

      p.imageMode(p.CENTER);
      if (imgLoaded) {
        // back image FILL
        getAspectFillImage(img, p.width * 1.2, p.height * 1.2);
        tx1 = (p.mouseX - p.width / 2) * -0.05 - nx;
        ty1 = (p.mouseY - p.height / 2) * -0.05 - ny;
        mox1 += (tx1 - mox1) * 0.1;
        moy1 += (ty1 - moy1) * 0.1;
        p.image(img, p.width / 2 + mox1, p.height / 2 + moy1, aspectWidth, aspectHeight);

        // black overlay, alpha on mouseY
        p.fill(0, 0, 0, p.map(p.mouseY, 0, p.height, 0, 255));
        p.rect(0, 0, p.width, p.height);

        // message code pattern
        drawCodePattern();

        if (displayFrontImage) {
          // front image FIT
          getAspectFitImage(img, p.width * 0.9, p.height * 0.9);
          tx = (p.mouseX - p.width / 2) * 0.01 + nx;
          ty = (p.mouseY - p.height / 2) * 0.01 + ny;
          if (state === 1) ty = p.height;
          mox += (tx - mox) * 0.1;
          moy += (ty - moy) * 0.1;
          mos += (ts - mos) * 0.1;
          p.image(img, p.width / 2 + mox, p.height / 2 + moy, aspectWidth * mos, aspectHeight * mos);
        }
      }

      /*
      image(img, 0, 0, width, height);

      fill(0,0,0,80);
      rect(0,0, width, 150);

      */
      /*
      b1.show();
      //rect(20,300,200,48);
      */

      if (displayLogo && logoLoaded) {
        p.imageMode(p.CORNER);

        // tint(0,0,100,100);
        getAspectFitImage(logo, (p.width * 0.9) / 2, p.height / 5);
        p.image(logo, p.floor(p.width / 2), p.round(p.height / 2 - aspectHeight / 2), aspectWidth, aspectHeight);
      }

      if (hoverCode) drawOneCode(p.floor(p.mouseY / (p.height / rows)), p.floor(p.mouseX / (p.width / columns)));
    };
  };
}