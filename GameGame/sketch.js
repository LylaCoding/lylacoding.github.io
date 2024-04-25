function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let contactButton = createImg('ContactButton.png', 'Contact Button');
  contactButton.position((windowWidth/2)-windowWidth*0.35, (windowHeight/2)-windowHeight*0.35)
 contactButton.size(contactButton.width/3, contactButton.height/3)
  
    let messageButton = createImg('MessageButton.png', 'Message Button');
  messageButton.position((windowWidth/2)+windowWidth*0.35, (windowHeight/2)-windowHeight*0.35)
 messageButton.size(messageButton.width/3, messageButton.height/3)
  
  
}

function draw() {
  background(245, 169, 184);
}