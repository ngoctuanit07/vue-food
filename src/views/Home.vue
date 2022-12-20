<template>
  <div>
    <div class="modal" id="modal">
      <div class="modal__dialog">
        <section class="modal__content">
          <div class="border-p">
            <header class="modal__header">
              <h1>KHU VỰC ĐẶT HÀNG</h1>
              <h5>Bạn ơi! khu vực bạn nhận hàng ở đâu</h5>
              <a href="#" class="modal__close">&times;</a>
            </header>
            <div class="modal__body">
              <form action="/action_page.php" class="form-home">

                <select name="cars" id="carst" class="option">
                  <option value="volvo">Chọn khu vực</option>
                  <option value="saab">Saab</option>
                </select> <br>
                <select name="cars" id="carst" class="option">
                  <option value="volvo">Chọn cửa hàng</option>
                  <option value="saab">Saab</option>
                </select>
                <br>
                <div class="btn-xacnhan">
                  <a @click="chuyenthucdon()">Xác nhận</a>
                </div>

              </form>
            </div>
          </div>

        </section>
      </div>
    </div>
    <div class="home row">
      <div class="img-home col-12 col-sm-5">
        <img src="@/assets/flat-lay-tray-with-vientamese-food.png" alt="" height="100%">
        <div class="logo-name">
          <h3>VFOOD.COM</h3>
        </div>
      </div>


      <div class="content-main col-sm-7">
        <div class="content-left-head">
          <div class="btn-home">
            <a href="#modal" class="btn-thucdon ">THỰC ĐƠN</a>
            <a href="/tracuudon" class="btn-tracuu">TRA CỨU ĐƠN HÀNG</a>
            <a href="" class="ngonngu"><img src="@/assets/Group 37.png" alt="" width="70%"></a>
          </div>
          <div class="content-info">
            <h1>VFOOD.PH <br>
              <span>ẨM THỰC VIỆT <br> HƯƠNG VỊ VIỆT</span>
            </h1>
            <p> Chào mừng bạn đến với VFOOD.PH, NƠI CUNG CẤP CÁC MÓN ĂN VIỆT <br>
              NAM Niêu đất không là chỉ dấu ấn của văn hóa ẩm thực Việt mà còn là bí <br>
              quyết để tạo nên món ăn ngon độc đáo. Cơm Niêu Sài Gòn giữ trọn hương <br> vị truyền thông, góp một phần
              nhỏ của mình giữ vững làng nghề làm niêu <br>
              đất. </p>
          </div>
          <div class="list row">
            <div class="list-item col-4">
              <ul>
                <li class="title-list">MIỄN PHÍ SHIP</li>
                <li class="content-list">Hóa đơn trên 500K</li>
                <li class="content-list">Miễn phí ship</li>
              </ul>
            </div>
            <div class="list-item col-4">
              <ul>
                <li class="title-list">QUÀ TẶNG ĐI CÙNG</li>
                <li class="content-list">Hóa đơn trên 500K</li>
                <li class="content-list">Miễn phí ship</li>
              </ul>
            </div>
            <div class="list-item col-4">
              <ul>
                <li class="title-list">NHIỀU KHUYẾN MÃI THÀNH VIÊN</li>
                <li class="content-list">Hóa đơn trên 500K</li>
                <li class="content-list">Miễn phí ship</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-main row">
            <div class="footer-main-item col-4">
              <h1 class="title-footer-main">VFOOD.VH</h1>
              <p>Luôn đem đến những món <br> ngon phục vụ quý khách tốt <br> nhất</p>
            </div>
            <div class="footer-main-item col-4">
              <h1 class="title-footer-hotline">HOTLINE</h1>
              <h2>090 2252 000</h2>
              <div class="info-contact">
                <img src="@/assets/fb.png" alt="" width="50%">
                <img src="@/assets/tele.png" alt="" width="50%">
              </div>
            </div>
            <div class="footer-main-item col-4">
              <ul>
                <li>Về chúng tôi</li>
                <li>Chính sách VFOOD.PH</li>
                <li>Chính sách và phí giao hàng</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div class="footer-child">
            <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- home-mobile -->
    <div class="home-mobile">
      <div class="header">
        <div class="logo">VFOOD.COM</div>
        <div class="btn-mobile">
          <a href="#modal" class="btn-thucdon-mobile">THỰC ĐƠN</a>
          <a href=""><img src="@/assets/ngon-ngu-mobile.png" alt="" width="80%"></a>
          <button href="" onclick=open_nav()><img src="@/assets/menu-mobile.png" alt="" width="80%"></button>
        </div>
      </div>
      <div class="menu">
        <div class="menu-silbar-h" id="nav">
          <ul>
            <li><a href="/"  class="tracuu">Trang chủ</a></li>
            <li><a @click="chuyentracuudonhang()" class="tracuu">Tra cứu đơn hàng</a></li>
            <li>Về Chúng Tôi</li>
            <li>Chính Sách VFOOD.PH</li>
            <li>Chính sách và phí giao hàng</li>
            <li>Blog</li>
          </ul>
          <div class="icon-close" onclick=close_nav()>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>


        </div>
      </div>

      <div class="bg-home-mobile">
        <img src="@/assets/flat-lay-tray-with-vientamese-food.png" alt="" width="100%">
        <div class="content-home-mobile">
          <h1>VFOOD.PH <br>
            ẨM THỰC VIỆT <br>
            HƯƠNG VỊ VIỆT</h1>
          <p> Chào mừng bạn đến với VFOOD.PH, NƠI CUNG CẤP CÁC MÓN ĂN VIỆT NAM Niêu đất không là chỉ dấu ấn của văn hóa
            ẩm thực Việt mà còn là bí quyết để tạo nên món ăn ngon độc đáo. Cơm
            Niêu Sài Gòn giữ trọn hương vị truyền thông,
            góp một phần nhỏ của mình giữ vững làng nghề làm niêu đất. </p>
        </div>

        <div class="list-uudai-mobile">
          <div class="list-item-mobile">
            <ul>
              <li>MIỄN PHÍ SHIP</li>
              <li>Hóa đơn trên 500K</li>
              <li>Miễn phí ship</li>
            </ul>
          </div>
          <div class="list-item-mobile">
            <ul>
              <li>QUÀ TẶNG ĐI KÈM</li>
              <li>Hóa đơn trên 500K</li>
              <li>Miễn phí ship</li>
            </ul>
          </div>
          <div class="list-item-mobile">
            <ul>
              <li>NHIỀU KHUYẾN MÃI THÀNH VIÊN</li>
              <li>Hóa đơn trên 500K</li>
              <li>Miễn phí ship</li>
            </ul>
          </div>
        </div>

      </div>
      <div class="footer-mobile">
        <h1>HOTLINE</h1>
        <h1>090 2252 0000</h1>
        <div class="info-contact-mobile">
          <img src="@/assets/fb.png" alt="">
          <img src="@/assets/tele.png" alt="">
        </div>
      </div>
      <div class="footer2-mobile">
        <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return{

    }
  },
  methods:{
    chuyenthucdon(){
      this.$router.push('Thucdon')
    },
    chuyenhomepage(){
      this.$router.push('Home')
    },
    chuyentracuudonhang(){
      this.$router.push('Tracuudon')
    }

  }
}

</script>
<style scoped>
a:not([href]):not([tabindex]) {
  color: #487025;
  text-decoration: none;
}
</style>
