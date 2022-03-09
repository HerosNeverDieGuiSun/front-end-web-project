// 数据
const data = [
  {
    name: '前端',
    list: [
      {
        title: '前端工程师',
        company: '北京xxxx有限公司',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '网站前端页面设计',
        company: '上海xxxx有限公司 ',
        position: '前端页面',
        recruitingNumbers: '5人',
        workingLocation: '上海',
        workExperience: '不限',
        education: '大专',
        wage: '7000',
        addDate: '2017-5-14',
      },
      {
        title: '高级web前端工程师',
        company: '广州xxxx公司 ',
        position: '前端页面',
        recruitingNumbers: '12人',
        workingLocation: '广州',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: 'HTML5前端工程师',
        company: '杭州xxxx有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '朝阳',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '前端工程师',
        company: '北京xxxx科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '网站前端设计',
        company: '上海xxxx有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '上海',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '诚招web前端开发工程师',
        company: '北京xxxx文化发展中心 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: 'web前端DIV+CSS',
        company: '深圳xxxx科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '深圳',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '前端设计',
        company: '上海xxxx科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '3人',
        workingLocation: '上海',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '招聘 前端页面工作者',
        company: '深圳xxxx教育科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '深圳',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '页面前端工程师',
        company: '杭州xxxx管理有限公司 ',
        position: '前端页面',
        recruitingNumbers: '4人',
        workingLocation: '杭州',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '高级web前端工程师',
        company: '南京xxxx公司 ',
        position: '前端页面',
        recruitingNumbers: '12人',
        workingLocation: '南京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: 'HTML5前端工程师',
        company: '北京xxxx科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '前端工程师',
        company: '深圳xxxx科技有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '深圳',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '网站前端设计',
        company: '北京xxxx有限公司 ',
        position: '前端页面',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
    ],
  },

  {
    name: '后端',
    list: [
      {
        title: 'PHP工程师',
        company: '杭州xxxx有限公司 ',
        position: 'PHP后台',
        recruitingNumbers: '2人',
        workingLocation: '杭州',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '诚招java开发工程师',
        company: '广州xxxx中心 ',
        position: 'java开发',
        recruitingNumbers: '2人',
        workingLocation: '广州',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: 'java工程师',
        company: '深圳xxxx科技有限公司 ',
        position: 'java后台',
        recruitingNumbers: '2人',
        workingLocation: '深圳',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '.net工程师',
        company: '北京xxxx网络科技有限公司 ',
        position: '.net程序员',
        recruitingNumbers: '3人',
        workingLocation: '通州',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: '招聘php程序员',
        company: 'xxxx教育科技有限公司 ',
        position: 'php程序员',
        recruitingNumbers: '2人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
      {
        title: 'PHP高级工程师',
        company: '北京xxxx管理有限公司 ',
        position: 'PHP高级工程师',
        recruitingNumbers: '4人',
        workingLocation: '北京',
        workExperience: '不限',
        education: '不限',
        wage: '面议',
        addDate: '2017-5-14',
      },
    ],
  },
];

window.onload = function () {
  const header = document.getElementById('header');
  const list_content = document.getElementById('list_content');
  const container = document.getElementById('container');
  const tips = document.getElementById('tips')
  for (let i = 0; i < data.length; i++) {
    header.innerHTML += `<li>${data[i].name}</li>`;
  }
  const header_li = header.getElementsByTagName('li');
  header_li[0].className = 'sec';

  for (let i = 0; i < header_li.length; i++) {
    header_li[i].index = i;
    header_li[i].onclick = function () {
      for (let j = 0; j < header_li.length; j++) {
        header_li[j].className = '';
        list_content.innerHTML = '';
        tips.innerHTML = '';
      }
      this.className = 'sec';
      fun(data[i])
    };
  }
  fun(data[0]);
  function fun(da) {
    for (let i = 0; i < da.list.length; i++) {
      const info_ul = document.createElement('ul');
      const info_li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = da.list[i].title;
      a.href = '';
      info_li.appendChild(a);
      info_ul.appendChild(info_li);
      list_content.appendChild(info_ul);
      a.index = i

      const h4 =document.createElement('h4');
      const lis1 = document.createElement('li');
      const lis2 = document.createElement('li');
      const lis3 = document.createElement('li');
      const lis4 = document.createElement('li');
      const lis5 = document.createElement('li');
      const lis6 = document.createElement('li');
      lis1.className = 'col';
      lis2.className = 'col';
      lis3.className = 'col';
      lis4.className = 'col';
      lis5.className = 'col';
      lis6.className = 'col';

      a.onmouseover = function (){

        tips.style.display = 'block';
        tips.style.left = `${container.offsetLeft + this.offsetWidth + 10}px`;
        tips.style.top = `${this.offsetTop + this.scrollTop}px`;
        h4.innerHTML = da.list[this.index].company;
        lis1.innerHTML = da.list[this.index].recruitingNumbers;
        lis2.innerHTML = da.list[this.index].workExperience;
        lis3.innerHTML = da.list[this.index].education;
        lis4.innerHTML = da.list[this.index].wage;
        lis5.innerHTML = da.list[this.index].addDate;
        tips.appendChild(h4);
        tips.appendChild(lis1);
        tips.appendChild(lis2);
        tips.appendChild(lis3);
        tips.appendChild(lis4);
        tips.appendChild(lis5);
      }
      info_li.onmouseout= function(){
        tips.style.display = 'none';
        tips.innerHTML = '';
      }
    }
  }
};
