let displayLogo = false;
let message = 'Creative Code Budapest';
let hoverCode = true;
let displayFrontImage = true;
let useRandomImages = true;
let imagePath =
	'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_1.0,c_fill,g_west/v1574804898/cc4/creativecode_4_kfila1.jpg';
// let imagePath = "assets/mpy.jpg";
// let imagePath = "https://d30tdn83za1xx1.cloudfront.net/wp-content/uploads/2018/12/14003115/20181108-11062018_00061.jpg";
// let imagePath = "https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_1.0,ar_0.6666666666666666,c_fill,g_west/v1574804898/cc4/creativecode_4_kfila1.jpg";

let images;

let colors;

let p5canvas; // canvas element in html, this is our sketch
let htmlDiv; // A div in html that holds our p5canvas, need this to get it's width and height
let pg; // offscreen pGraphics, to export in a size independent of p5canvas

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

let b1; // draft coded button class, complicated
let button; // html button styled with css, simple

let startingRotationX = 0;
let startingRotationZ = 0;

function setup() {
	// setup html parent div
	htmlDiv = document.getElementById('p5canvasHolder');
	p5canvas = createCanvas(htmlDiv.offsetWidth, htmlDiv.offsetHeight);
	p5canvas.parent('p5canvasHolder');

	// colorMode(HSB, 360, 100, 100, 100);
	colors = [color('#F27979'), color('#F27979'), color('#79E6F2')];
	images = [
		'https://d30tdn83za1xx1.cloudfront.net/wp-content/uploads/2018/12/14003115/20181108-11062018_00061.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1573759276/cc7/CCBP_FB_Group_Cover_8_shogcx.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1573761070/cc6/CCBP_FB_Group_Cover_7b_rfafp7.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1573807326/cc5/creativecode_6_utknbl.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1574806839/commonknowledge/creativecode_commonknowledge_hyclgc.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1574805951/cc2/creativecodemeetup_2_kjxomv.jpg',
		'https://res.cloudinary.com/creativecodebudapest/image/upload/f_auto,w_340,dpr_2.0,c_fill,g_west/v1574804898/cc4/creativecode_4_kfila1.jpg'
	];

	if (useRandomImages) imagePath = images[int(random(images.length - 1))];

	// pg = createGraphics(1920*2,1080*2);
	// pg.colorMode(HSB,360,100,100,100);

	/*
	b1 = new Button("SAVE", 20,300, 200,48);

	button = createButton("Save image");
	button.id("saveButton");
	button.position(19, 19);
	button.mousePressed(changeBG);
	*/

	if (displayLogo)
		logo = loadImage(
			'https://www.iconbolt.com/iconsets/social-media-logos/drink-logo-pepsi-social-social-media.svg',
			logoLoadSuccess
		);
	img = loadImage(imagePath, imgLoadSuccess);

	if (getURLParams().message != undefined) message = getURLParams().message;

	encodeMessage();
}

function windowResized() {
	resizeCanvas(htmlDiv.offsetWidth, htmlDiv.offsetHeight);
	// if (imgLoaded) aspect();
}

function logoLoadSuccess() {
	logoLoaded = true;
}

function imgLoadSuccess() {
	imgAveraged = createImage(columns, rows);
	imgAveraged.copy(img, 0, 0, img.width, img.height, 0, 0, imgAveraged.width, imgAveraged.height);
	imgAveraged.loadPixels();

	imgLoaded = true;
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

function keyTyped() {
	if (key == 'h') {
		displayHUD = !displayHUD;
	}
	return false; // To prevent any default browser behavior
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

function draw() {
	background(0);

	if (rotationX != null && startingRotationX == null) {
		startingRotationX = rotationX;
		startingRotationZ = rotationZ; // this always starts at 260???
	}

	// nx = ((noise(frameCount*.001)*2)-1)*40;
	// ny = ((noise((frameCount+100)*.001)*2)-1)*40;

	nx = startingRotationZ - rotationZ;
	ny = startingRotationX - rotationX;

	imageMode(CENTER);
	if (imgLoaded) {
		// back image FILL
		getAspectFillImage(img, width * 1.2, height * 1.2);
		tx1 = (mouseX - width / 2) * -0.05 - nx;
		ty1 = (mouseY - height / 2) * -0.05 - ny;
		mox1 += (tx1 - mox1) * 0.1;
		moy1 += (ty1 - moy1) * 0.1;
		image(img, width / 2 + mox1, height / 2 + moy1, aspectWidth, aspectHeight);

		// black overlay, alpha on mouseY
		fill(0, 0, 0, map(mouseY, 0, height, 0, 255));
		rect(0, 0, width, height);

		// message code pattern
		drawCodePattern();

		if (displayFrontImage) {
			// front image FIT
			getAspectFitImage(img, width * 0.9, height * 0.9);
			tx = (mouseX - width / 2) * 0.01 + nx;
			ty = (mouseY - height / 2) * 0.01 + ny;
			if (state == 1) ty = height;
			mox += (tx - mox) * 0.1;
			moy += (ty - moy) * 0.1;
			mos += (ts - mos) * 0.1;
			image(img, width / 2 + mox, height / 2 + moy, aspectWidth * mos, aspectHeight * mos);
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
		imageMode(CORNER);

		// tint(0,0,100,100);
		getAspectFitImage(logo, (width * 0.9) / 2, height / 5);
		image(logo, floor(width / 2), round(height / 2 - aspectHeight / 2), aspectWidth, aspectHeight);
	}

	if (hoverCode) drawOneCode(floor(mouseY / (height / rows)), floor(mouseX / (width / columns)));

	HUD();
}

let loadFrameCount = 0;

let hudTextX;
let hudTextY;
let hudTextLineHeight;
function HUD() {
	if (frameCount == 1) textFont('monospace', 12);
	if (displayHUD) {
		hudTextX = 10;
		hudTextY = 10;
		hudTextLineHeight = 15; // lineheight

		push();
		noStroke();
		fill(0, 128);
		rect(0, 0, width / 3, height / 3);

		fill(255);
		newLine('FPS: ' + round(frameRate()));
		newLine('displayDensity: ' + displayDensity());
		newLine('Screen: ' + width + ' x ' + height + ' px');
		newLine('imgLoaded: ' + imgLoaded + ' (' + loadFrameCount + ' frames)');
		newLine('getURL: ' + getURL());
		newLine('getURLParams?message: ' + getURLParams().message);
		if (imgLoaded && loadFrameCount == 0) loadFrameCount = frameCount;
		newLine('message: ' + message + ' (' + messageCodes.length + ' lines)');
		newLine('grid: ' + columns + ' x ' + rows + '   cell: ' + uW + ' x ' + uH);
		if (rotationX != null) {
			newLine('device rotation');
			newLine('x:' + startingRotationX.toFixed(2) + ' z:' + startingRotationZ.toFixed(2));
			newLine('x:' + rotationX.toFixed(2) + ' z:' + rotationZ.toFixed(2));
		}
		// for (let i = 0; i<messageCodes.length; i++) text(i+". "+messageCodes[i]+" ("+messageCodes[i].length+") "+messageCodes[i], x, y+=l);

		// text(b1.y, x, y+=l);
		pop();
	}
}

function newLine(_txt) {
	text(_txt, hudTextX, (hudTextY += hudTextLineHeight));
}

function encodeMessage() {
	/*
	0-9		48-57  => 0 — -9 (negative numbers to differentiate from letters)
	A-Z		65-90  => 1 — 26
	a-z		97-122 => 1 — 26
	*/
	let longestWord = 0;
	message = message.toUpperCase();

	let lines = split(message, getURLParams().message != undefined ? '-' : ' ');
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

let uH;
let uW;
function drawCodePattern() {
	imgAveraged.loadPixels();

	uH = ceil(height / rows);
	uW = ceil(width / columns);

	push();
	noStroke();

	for (i = 0; i < messageCodes.length; i++) {
		for (j = 0; j < messageCodes[i].length; j++) {
			let c = messageCodes[i][j];
			if (c <= 0) {
				c = abs(c); // is a number, negative code, make it positive again
				fill(255);
			} else if (c > 0 && c < 27) {
				// is a letter
				// fill(colors[i]);
				fill(getFaster(j, i));
				// if (mouseX > j*uW && mouseX < j*uW+uW && mouseY > i*uH && mouseY < i*uH+uH) fill(255);
			} else {
				fill(255, 0, 0); // is a not valid character
			}
			// rect(j*uW,i*uH,uW,uH);
			if (c != 0) stripesRect(c, j * uW, i * uH, uW, uH);
		}
	}
	pop();
}

function drawOneCode(_i, _j) {
	if (_i < messageCodes.length && _j < messageCodes[_i].length) {
		let c = messageCodes[_i][_j];
		fill(255);
		noStroke();
		if (c != 0) stripesRect(c, _j * uW, _i * uH, uW, uH);
	}
}

function stripesRect(stripes, x, y, w, h) {
	stripes = stripes * 2 - 1; // comment this line for even lines only

	let stripeHeight = h / stripes;
	for (k = 0; k < stripes; k += 2) {
		rect(x, y + k * stripeHeight, w, stripeHeight);
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

function mousePressed() {
	// ts = 0;
	state++;
	if (state == 2) state = 0;
	// state = 1;
}

function mouseReleased() {
	// ts = 1;
	// state = 0;
}

/*
function mouseMoved() {
	if (mouseX > b1.x && mouseX < b1.x+b1.w && mouseY > b1.y && mouseY < b1.y+b1.h) {
		b1.hover();
	} else {
		b1.released();
	}
}

function mousePressed() {
	if (mouseX > b1.x && mouseX < b1.x+b1.w && mouseY > b1.y && mouseY < b1.y+b1.h) {
		b1.pressed();
	}
}


function mouseReleased() {
	if (mouseX > b1.x && mouseX < b1.x+b1.w && mouseY > b1.y && mouseY < b1.y+b1.h) {
		b1.released();
		print("WORKS");
	}
}


function buttonSaveImage() {
	saveCanvas(pg, "mypg", "png");
}





class Button {
	constructor(_label, _x, _y, _w, _h) {
		this.label = _label;
		this.x = _x;
		this.y = _y;
		this.w = _w;
		this.h = _h;
		this.color = color(0,0,100);
	}

	hover() {
		this.color = color(0,0,90);
	}

	pressed() {
		this.color = color(0,0,50);
	}

	released() {
		this.color = color(0,0,100);
	}

	
	show() {
		noStroke();
		fill(this.color);
		rect(this.x, this.y, this.w, this.h);
		fill(0,0,0);
		textAlign(CENTER, CENTER);
		// text(this.label, this.x, this.y+this.h);
		text(this.label, this.x, this.y+this.h/2, this.w);
	}




}
*/
