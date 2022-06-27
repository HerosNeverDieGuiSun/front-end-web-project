function getScrollTop() {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

function getScrollHeight() {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

function getWindowHeight() {
  let windowHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

const add_photo = (photo_grid, infolist) => {
  for (let i = 0; i < infolist.length; i++) {
    const img = new Image();
    const d = document.createElement('div');
    const d2 = document.createElement('div');
    const decription = document.createElement('p');
    const date = document.createElement('p');
    img.src = infolist[i].photo;
    img.style.width = '350px';
    d.className = 'photo_item';
    d2.className = 'text';
    d2.style.width = '270px';
    decription.innerText = infolist[i].decription;
    decription.className = 'decription';
    date.className = 'date';
    date.innerText = infolist[i].date;
    d2.appendChild(decription);
    d2.appendChild(date);
    d.appendChild(img);
    d.appendChild(d2);
    
    photo_grid.appendChild(d);
    // 加载完成执行
    img.onload = function () {
      d.style.marginBottom = '10px';
      d.style.height = `${img.height}px`;
      d2.style.height = `${img.height - 80}px`;
      d.style.gridRow = `auto / span ${img.height}`;

    };
  }
};

window.onload = function () {
  const photo_grid = document.getElementById('photo_grid');
  // photo_grid.style.backgroundColor = 'black';
  photo_grid.style.gridTemplateRows = '1px';

  fetch('https://mock.apifox.cn/m1/868772-0-default/photo', {
    method: 'POST',
    headers: {},
    body: '',
  })
    .then((response) => response.json())
    .then((data) => {
      // const photo_url_list = new Array(data.infolist.length);
      // for (let i = 0; i < data.infolist.length; i++) {
      //   const item = data.infolist[i];
      //   photo_url_list[i] = item.photo;
      // }
      add_photo(photo_grid, data.infolist);
    });
};
window.onscroll = function () {
  if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
    const photo_grid = document.getElementById('photo_grid');
    // photo_grid.style.backgroundColor = 'black';
    photo_grid.style.gridTemplateRows = '1px';

    fetch('https://mock.apifox.cn/m1/868772-0-default/photo', {
      method: 'POST',
      headers: {},
      body: '',
    })
      .then((response) => response.json())
      .then((data) => {
        // const photo_url_list = new Array(data.infolist.length);
        // for (let i = 0; i < data.infolist.length; i++) {
        //   const item = data.infolist[i];
        //   photo_url_list[i] = item.photo;
        // }
        add_photo(photo_grid, data.infolist);
      });
    // alert('已经到最底部了！!');
  }
};
