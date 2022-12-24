<template>
  <div>
    <div class="thongtingiaohang-pc ">
      <div class="container">
        <div class="main-thongtingiaohang  row">
          <div class="formthongtin col-8">


            <div class="main-ttgh">
              <div class="btn-back">
                <a href="index.html"><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
              </div>
              <div class="thongtin">
                <h1>TRA CỨU ĐƠN HÀNG</h1>
              </div>
              <form action="" class="tracuu">
                <input type="text" placeholder="Nhập mã đơn hàng"> <br>
                <input type="text" placeholder="Số điện thoại đặt hàng"> <br>
                <div class="btn-tracuu">
                  <button>Tra cứu ngay</button>
                </div>

              </form>
            </div>

          </div>
          <div class="monan col-4">
            <div class="trangthai">
              <p>Mã đơn hàng: 1254884</p>
              <p>Trạng thái: Đang giao</p>
              <p>Ngày đặt hàng: 15/01/2022</p>
              <p>Giờ đặt: 8h:25</p>
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

            <div class="box-tongtien">
              <div class="tongtien">
                <div class="item-tongtien">
                  <p>Tạm tính</p>
                </div>
                <div class="item-tongtien">
                  <p>P300</p>
                </div>
              </div>
              <div class="tongtien">
                <div class="item-tongtien">
                  <p>Phí ship</p>
                </div>
                <div class="item-tongtien">
                  <p>P0</p>
                </div>
              </div>
              <div class="tongtien">
                <div class="item-tongtien">
                  <p>Khuyến mãi</p>
                </div>
                <div class="item-tongtien">
                  <p>P30</p>
                </div>
              </div>
              <div class="tongtien final">
                <div class="item-tongtien final-item">
                  <p>Tổng đơn</p>
                </div>
                <div class="item-tongtien final-item">
                  <p>P270</p>
                </div>
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


        <div class="main-ttgh main-mobile">
          <div class="btn-back">
            <a href=""><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
          </div>
          <div class="thongtin">
            <h1>TRA CỨU ĐƠN HÀNG</h1>
          </div>
          <form action="" class="tracuu">
            <input type="text" placeholder="Nhập mã đơn hàng"> <br>
            <input type="text" placeholder="Số điện thoại đặt hàng"> <br>
            <div class="btn-tracuu">
              <button>Tra cứu ngay</button>
            </div>

          </form>
        </div>

      </div>
      <div class="monan ">
        <div class="trangthai">
          <p>Mã đơn hàng: 1254884</p>
          <p>Trạng thái: Đang giao</p>
          <p>Ngày đặt hàng: 15/01/2022</p>
          <p>Giờ đặt: 8h:25</p>
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

        <div class="box-tongtien">
          <div class="tongtien">
            <div class="item-tongtien">
              <p>Tạm tính</p>
            </div>
            <div class="item-tongtien">
              <p>P300</p>
            </div>
          </div>
          <div class="tongtien">
            <div class="item-tongtien">
              <p>Phí ship</p>
            </div>
            <div class="item-tongtien">
              <p>P0</p>
            </div>
          </div>
          <div class="tongtien">
            <div class="item-tongtien">
              <p>Khuyến mãi</p>
            </div>
            <div class="item-tongtien">
              <p>P30</p>
            </div>
          </div>
          <div class="tongtien final">
            <div class="item-tongtien final-item">
              <p>Tổng đơn</p>
            </div>
            <div class="item-tongtien final-item">
              <p>P270</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import actionFood from "@/actions/food";

export default {
  name: "Tracuudon",
  data(){
    return{
      menuFooter:[]

    }
  },
  mounted() {
    this.getMenuFooter()
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
