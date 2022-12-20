<template>
  <div>
    <div class="thongtingiaohang-pc ">
      <div class="container">
        <div class="main-thongtingiaohang  row">
          <div class="formthongtin max col-8">


            <div class="main-ttgh">
              <div class="btn-back">
                <a @click="chuyenthucdon()"><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
              </div>
              <div class="thongtin">
                <h1>THÔNG TIN GIAO HÀNG</h1>
              </div>
              <form action="" class="form-thongtin">
                <h5>*Thông tin người nhận</h5>
                <input type="text" name="" id="" placeholder="Nhập tên"> <br>
                <input type="text" name="" id="sđt" placeholder="Nhập số điện thoại">
                <input type="text" name="" id="email" placeholder="Nhập email(không ép)"> <br>
                <select name="cars" id="cars">
                  <option value="volvo">Chọn khu vực nhận hàng</option>
                  <option value="saab">Saab</option>
                </select>
                <input type="text" name="" id="" placeholder="Địa chỉ nhận hàng"> <br>
                <input type="text" name="" id="" placeholder="Ghi chú"> <br>
                <h5 class="second">*Thông tin đơn hàng</h5>
                <select name="cars" id="cars">
                  <option value="volvo">Tiền mặt(COD)</option>
                  <option value="saab">Saab</option>
                </select>
                <h5 class="second">*Thời gian nhận</h5>
                <select name="cars" id="cars">
                  <option value="volvo">Ngày nhận</option>
                  <option value="saab">7h-8h</option>
                  <option value="saab">8h-9h</option>
                  <option value="saab">9h-10h</option>
                  <option value="saab">10h-11h</option>
                  <option value="saab">11h-12h</option>
                  <option value="saab">12h-13h</option>
                  <option value="saab">13h-14h</option>
                  <option value="saab">14h-15h</option>
                  <option value="saab">15h-16h</option>
                  <option value="saab">16h-17h</option>

                </select> <br>
                <select name="cars" id="cars">
                  <option value="volvo">Giờ nhận</option>
                  <option value="saab">7h-8h</option>
                  <option value="saab">8h-9h</option>
                  <option value="saab">9h-10h</option>
                  <option value="saab">10h-11h</option>
                  <option value="saab">11h-12h</option>
                  <option value="saab">12h-13h</option>
                  <option value="saab">13h-14h</option>
                  <option value="saab">14h-15h</option>
                  <option value="saab">15h-16h</option>
                  <option value="saab">16h-17h</option>

                </select> <br>
                <input type="checkbox" class="checkbox-out" id="vehicle1" name="vehicle1" value="Bike">
                <label class="dongy" for="vehicle1">Đồng ý với điểu khoản đặt hàng của VFOOD.PH <br> <a href=""><span>xem chi tiết các điều khoản tại đây >> </span></a>
                </label><br>

              </form>
            </div>

          </div>
          <div class="monan max col-4">
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
            <div class="giamgia">
              <input type="text" name="" id="" placeholder="Mã giảm giá(nếu có)">
              <button>Áp dụng</button>

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
              <div class="btn-tongtien">
                <a @click="chuyenhoanthanhdon()">Hoàn Thành</a>
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
            <li><a href="/"  class="tracuu">Trang chủ</a></li>
            <li><a @click="tracuudon()"  class="tracuu">Tra cứu đơn hàng</a></li>
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
      <div class="btn-backs">
        <a @click="chuyenthucdon()"><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
      </div>


      <label class="show-list" for="check" id="lable">Ẩn/Hiện thông tin đơn hàng</label>
      <input type="checkbox" id="check">


      <div class="monan " id="showdonhang">
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
        <div class="giamgia giamgia-mobile">
          <input type="text" name="" id="" placeholder="Mã giảm giá(nếu có)">
          <button>Áp dụng</button>

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
      <div class="formthongtin  ">
        <div class="main-ttgh main-mobile">
          <div class="btn-back">
            <a @click="chuyenthucdon()"><i class="fa fa-arrow-left" aria-hidden="true">Quay lại</i></a>
          </div>
          <div class="thongtin">
            <h1>THÔNG TIN GIAO HÀNG</h1>
          </div>
          <form action="" class="form-thongtin ff">
            <h5>*Thông tin người nhận</h5>
            <input type="text" name="" id="" placeholder="Nhập tên"> <br>
            <input type="text" name="" id="sđt " placeholder="Nhập số điện thoại">
            <input type="text" name="" id="email " placeholder="Nhập email(không ép)"> <br>
            <select name="cars" id="cars">
              <option value="volvo">Chọn khu vực nhận hàng</option>
              <option value="saab">Saab</option>
            </select>
            <input type="text" name="" id="" placeholder="Địa chỉ nhận hàng"> <br>
            <input type="text" name="" id="" placeholder="Ghi chú"> <br>
            <h5 class="second">*Thông tin đơn hàng</h5>
            <select name="cars" id="cars">
              <option value="volvo">Tiền mặt(COD)</option>
              <option value="saab">Saab</option>
            </select>
            <h5 class="second">*Thời gian nhận</h5>
            <select name="cars" id="cars">
              <option value="volvo">Giờ Nhận</option>
              <option value="saab">7h-8h</option>
              <option value="saab">8h-9h</option>
              <option value="saab">9h-10h</option>
              <option value="saab">10h-11h</option>
              <option value="saab">11h-12h</option>
              <option value="saab">12h-13h</option>
              <option value="saab">13h-14h</option>
              <option value="saab">14h-15h</option>
              <option value="saab">15h-16h</option>
              <option value="saab">16h-17h</option>
            </select> <br>
            <select name="cars" id="cars">
              <option value="volvo">Ngày nhận</option>
              <option value="saab">Saab</option>
            </select>
            <input type="checkbox" class="checkbox-out" id="vehicle1" name="vehicle1" value="Bike">
            <label class="dongy" for="vehicle1">Đồng ý với điểu khoản đặt hàng của VFOOD.PH <br> <a href=""><span>xem chi tiết các điều khoản tại đây >> </span></a>
            </label><br>
            <div class="btn-hoanthanh">
              <a @click="chuyenhoanthanhdon()">Hoàn Thành</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
a:not([href]):not([tabindex]) {
  color: #487025;
  text-decoration: none;
}
</style>
<script>
export default {
  name: "Thongtindon",
  data() {
    return {}
  },
  methods: {
    chuyenhoanthanhdon() {
      this.$router.push('Hoanthanhdon')
    },
    chuyenthucdon() {
      this.$router.push('Thucdon')
    }
  }
}
</script>
