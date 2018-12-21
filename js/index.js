window.onload = function () {
  const directItems = document.querySelectorAll('footer .guide-item')
  const sections = document.querySelectorAll('#content section')
  //底部跳转功能
  directItems.forEach(function (item,index) {
    item.onclick = function () {
    //  初始化
      directItems.forEach(function (item,index) {
        item.className = 'guide-item'
        sections[index].className = ''
      })
    //  为this设置active
      this.className = 'guide-item active'
      sections[index].className = 'on'
    }
  })
  //swiper组件
  var mySwiper = new Swiper ('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

  })
  //获取星星的样式
  let grades = ['5','2.5','3.1','5','5']
  setStar(grades)
  function setStar(graders){
    var j =0;
    var num = 0;
    //遍历数组，三次外循环，每次外循环设置五个星星，计数器+5,下次设置五个星星的index+计数器
    graders.forEach((gradeItem,index) => {
  let stars = document.querySelectorAll('.stars .star')
  console.log(stars);
  document.querySelectorAll('.grade')[index].innerText = gradeItem
  grade = gradeItem * 1
  const onNum = Math.floor(grade)
  const halfNum = Math.round( grade - onNum )
  console.log(onNum);
  console.log(halfNum);
  for ( i = 0 ; i < 5; i++) {
    j = i + num;
    if(i < onNum){
      stars[j].className = 'star on'
    }else if(i < onNum + halfNum){
      stars[j].className = 'star half'
    }else {
      stars[j].className = 'star off'
    }
  }
  num += 5
  console.log(i);
})
  }

  //短信密码登录切换
  const loginTypeBtns = document.querySelectorAll('.login_header_title a')
  const forms = document.querySelectorAll('form div')
  const goBackNode = document.querySelector('.go_back')
  const loginPage = document.querySelector('#app div.on')
  const waimaiLoginNode = document.querySelector('.header-login')
  const myLoginNode = document.querySelector('.login-wrap')

  console.log(loginPage);
  console.log(loginTypeBtns);
  loginTypeBtns.forEach((btn,index) => {
    btn.onclick = function () {
      loginTypeBtns.forEach( btn => btn.className = '')
      forms[0].className = ''
      forms[1].className = ''
      this.className = 'active'
      console.log(index);
      forms[index].className = 'active'
    }
  })
  goBackNode.onclick = function () {
    loginPage.className = 'off'
  }
  /*waimaiLoginNode.onclick = function () {
    loginPage.className = 'on'
  }
  myLoginNode.onclick = function () {
    loginPage.className = 'on'
  }*/
  const arr = [waimaiLoginNode,myLoginNode]
  arr.forEach(item => {
    item.onclick = function () {
      loginPage.className = 'on'
    }
  })
}