window.onload = function () {
  const photo_grid = document.getElementById('photo_grid');
  // photo_grid.style.backgroundColor = 'black';
  photo_grid.style.gridTemplateRows = '1px';

  for (let i = 1; i < 11; i++) {
    const img = new Image();
    const d = document.createElement('div');
    img.src = `./images/${i}.jpg`;
    img.style.width = '350px';
    d.className = 'photo_item';
    d.appendChild(img);
    photo_grid.appendChild(d);
    // 加载完成执行
    img.onload = function () {
      d.style.marginBottom = "10px";
      // d.style.height = `${img.height + 10}px`;
      d.style.gridRow = `auto / span ${img.height}`;
    };
  }
};
