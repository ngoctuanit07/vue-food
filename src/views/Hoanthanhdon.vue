<template>
  <div>
    <div class="thongtingiaohang-pc ">
      <div class="container">
        <div class="main-thongtingiaohang dathang row">
          <div class="formthongtin col-8">


            <div class="main-ttgh">
              <div class="btn-back">
                <a @click="chuyenthucdon()"><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
              </div>
            </div>
            <div class="content-dathang">
              <h1>ĐẶT HÀNG THÀNH CÔNG</h1>
              <p>Mã đơn hàng: 1254884</p>
              <p>Cảm ơn bạn đã tin tương lựa chọn <br>
                <span> VFOOD.PH </span>
                Vui lòng chờ ít phút, nhân viên sẽ liên hệ <br>
                xác nhận đơn hàng trước khi giao!</p>
            </div>
            <div class="btn-dathang">
              <a href="/" >VỀ TRANG CHỦ</a>
              <a  @click="chuyenthucdon()">THỰC ĐƠN</a>
            </div>
          </div>
          <div class="monan col-4">
            <div class="list-main">
              <div class="list-tiem">
                <div class="img-nb">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
                  <div class="nb-cart">
                    <p>2</p>
                  </div>
                </div>


              </div>
              <div class="list-item">
                <p>Phở bò đặt biệt</p>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="list-item center">
                <span>P300</span>
              </div>
            </div>
            <div class="list-main">
              <div class="list-tiem">
                <div class="img-nb">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
                  <div class="nb-cart">
                    <p>2</p>
                  </div>
                </div>


              </div>
              <div class="list-item">
                <p>Phở bò đặt biệt</p>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="list-item center">
                <span>P300</span>
              </div>
            </div>
            <div class="list-main kk">
              <div class="list-tiem">
                <div class="img-nb">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
                  <div class="nb-cart">
                    <p>2</p>
                  </div>
                </div>


              </div>
              <div class="list-item">
                <p>Phở bò đặt biệt</p>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="list-item center">
                <span>P300</span>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
    <div class="thongtingiaohang-mobile">
      <div class="header imp">
        <div class="logo imps"><a href="index.html">VFOOD.COM</a></div>
        <div class="btn-mobile">
          <a href="#modal" class="btn-thucdon-mobile">THỰC ĐƠN</a>
          <a href=""><img src="@/assets/ngon-ngu-mobile.png" alt="" width="80%"></a>
          <button href="" onclick=open_nav()><img src="@/assets/menu-mobile.png" alt="" width="80%"></button>
        </div>
      </div>
      <div class="menu ">
        <div class="menu-silbar-h" id="nav">
          <ul>
<!--            <li><a href="/"  class="tracuu">Trang chủ</a></li>-->
<!--            <li><a @click="tracuudon()"  class="tracuu">Tra cứu đơn hàng</a></li>-->
<!--            <li>Về Chúng Tôi</li>-->
<!--            <li>Chính Sách VFOOD.PH</li>-->
<!--            <li>Chính sách và phí giao hàng</li>-->
<!--            <li>Blog</li>-->
            <li v-for="(item,i) in menuFooter" :key="i">{{item.name}}</li>
          </ul>
          <div class="icon-close" onclick=close_nav()>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="formthongtin formthongtin-mobile ">


        <div class="main-ttgh">
          <div class="btn-back">
            <a href=""><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
          </div>
        </div>
        <div class="content-dathang">
          <h1>ĐẶT HÀNG THÀNH CÔNG</h1>
          <p>Mã đơn hàng: 1254884</p>
          <p>Cảm ơn bạn đã tin tương lựa chọn <br>
            <span> VFOOD.PH </span>
            Vui lòng chờ ít phút, nhân viên sẽ liên hệ <br>
            xác nhận đơn hàng trước khi giao!</p>
        </div>

      </div>
      <div class="monan ">
        <div class="list-main">
          <div class="list-tiem">
            <div class="img-nb">
              <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
              <div class="nb-cart">
                <p>2</p>
              </div>
            </div>


          </div>
          <div class="list-item">
            <p>Phở bò đặt biệt</p>
            <p>Phở bò phúc đặc biệt</p>
            <p>Khăn lạnh</p>
            <p>Bò viên</p>
          </div>
          <div class="list-item center">
            <span>P300</span>
          </div>
        </div>
        <div class="list-main">
          <div class="list-tiem">
            <div class="img-nb">
              <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
              <div class="nb-cart">
                <p>2</p>
              </div>
            </div>


          </div>
          <div class="list-item">
            <p>Phở bò đặt biệt</p>
            <p>Phở bò phúc đặc biệt</p>
            <p>Khăn lạnh</p>
            <p>Bò viên</p>
          </div>
          <div class="list-item center">
            <span>P300</span>
          </div>
        </div>
        <div class="list-main kk">
          <div class="list-tiem">
            <div class="img-nb">
              <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="">
              <div class="nb-cart">
                <p>2</p>
              </div>
            </div>


          </div>
          <div class="list-item">
            <p>Phở bò đặt biệt</p>
            <p>Phở bò phúc đặc biệt</p>
            <p>Khăn lạnh</p>
            <p>Bò viên</p>
          </div>
          <div class="list-item center">
            <span>P300</span>
          </div>
        </div>

      </div>
      <div class="  btn-dathang btn-dathang-mobile">
        <a href="/" >VỀ TRANG CHỦ</a>
        <a @click="chuyenthucdon()">THỰC ĐƠN</a>
      </div>

    </div>
  </div>
</template>

<script>
import actionFood from "@/actions/food";

export default {
  name:"Thucdon",
  data(){
    return{
      menuFooter:[]
    }
  },
  mounted() {
    this.getMenuFooter();
  },
  methods:{
    chuyenhome(){
      this.$router.push('Home')
    },
    chuyenthucdon(){
      this.$router.push('Thucdon')
    },
    tracuudon(){
      this.$router.push('Tracuudon')
    },
    getMenuFooter() {
      let vm = this;
      actionFood.getMenuFooter().then(function (res) {
        vm.menuFooter = res.data;
      })

    },
  }
}

</script>
<style scoped>
a:not([href]):not([tabindex]) {
  color: #487025;
  text-decoration: none;
}
</style>
