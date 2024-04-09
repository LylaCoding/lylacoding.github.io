(function() {

    var c = document.getElementById("c"),
      ctx = c.getContext("2d");
  
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  
    var lines = [],
      maxSpeed = 1,
      spacing = 5,
      xSpacing = 0,
      n = Math.floor(c.width / spacing),
      colors = ["#6A0DAD", "#9E38C1", "#C56EC4", "#E99EE1"],
      i;
  
    for (i = 0; i < n; i++) {
      xSpacing += spacing;
      lines.push({
        x: xSpacing,
        y: Math.round(Math.random() * c.height),
        width: 3.5,
        height: Math.round(Math.random() * (c.height / 10)),
        speed: Math.random() * maxSpeed + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  
  
    function draw() {
      var i;
      ctx.clearRect(0, 0, c.width, c.height);
  
      for (i = 0; i < n; i++) {
        ctx.fillStyle = lines[i].color;
        ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
        lines[i].y += lines[i].speed;
  
        if (lines[i].y > c.height)
          lines[i].y = 0 - lines[i].height;
      }
  
      requestAnimationFrame(draw);
    }
  
    draw();
  
  }());
  