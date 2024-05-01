function setup() {
  createCanvas(windowWidth, windowHeight);

  cookieButton = createImg('cookie.png', 'cookie');
  cookieButton.position(((width - 300) / 2) - 112.5, (height / 2) - 108.5);
  cookieButton.mousePressed(cookieClicked);

  

}
