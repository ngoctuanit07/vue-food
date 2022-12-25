<template>
  <div>
    <div class="modal" id="modal-chitiet">
      <div class="modal__dialog">
        <section class="modal__content modal-chitiet">
          <div class="img-popup">
            <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="20%">
          </div>
          <h1>RAU MUỐNG XÀO TỎI</h1>
          <p>Thành phần</p>
          <p>Rau muống tỏi</p>
          <a href="#" class="modal__close modal-chitiet-close">&times;</a>
          <div class="main-pop">


            <div class="checkbox">
              <div class="title-checkbox">Thêm</div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Trứng chiên</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Chả lụa</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
            </div>
            <div class="ghichu">
              <h5>Ghi chú</h5>
              <input type="text">
            </div>
          </div>

          <div class=" btn-cart-checkout item-btn checkout ">
            <a href="">-</a>
            <p>2</p>
            <a href="">+</a>
          </div>

          <div class="footer-popup">

            <p>TỔNG: P600</p>
            <div class="tong">
              <a href="">Thêm vào giỏ </a>
            </div>


          </div>
        </section>

      </div>
    </div>
    <div class="modal" id="modal-chinhsua">
      <div class="modal__dialog">
        <section class="modal__content modal-chitiet">
          <div class="img-popup">
            <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="20%">
          </div>
          <h1>RAU MUỐNG XÀO TỎI</h1>
          <p>Thành phần</p>
          <p>Rau muống tỏi</p>
          <a href="#" class="modal__close modal-chitiet-close">&times;</a>
          <div class="main-pop">
            <div class="checkbox">
              <div class="item-checkbox">
                <h5>Thêm</h5>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle1"> Trứng chiên</label> <br>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle1"> Chả lụa</label>
              </div>
              <div class="btn-sum">
                <div class="btn-check-box  ">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="btn-check-box  ">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
              </div>
              <div class="p">
                <p>P300</p>
                <p>P300</p>
              </div>
            </div>
            <div class="ghichu">
              <h5>Ghi chú</h5>
              <input type="text">
            </div>
          </div>

          <div class=" btn-cart-checkout item-btn checkout ">
            <a href="">-</a>
            <p>2</p>
            <a href="">+</a>
          </div>
          <div class="footer-popup">

            <p>TỔNG: P600</p>
            <div class="tong">
              <a href="">Chỉnh sửa </a>
            </div>


          </div>
        </section>

      </div>
    </div>
    <div class="main-thucdon-pc row">
      <div class="silbar-thucdon col-2">
        <div class="mini-silbar  col-2 position-fixed">
          <div class="title-silbar">
            <a href="/"><h1>VFOOD.PH</h1></a>
          </div>
          <div class="list-thucdon">
            <ul>
              <li v-for="(item,i) in categories" :key="i"><a>{{ item.name }}</a></li>
            </ul>
          </div>
          <div class="footer-thucdon">
            <div class="content-footer row">
              <div class="btn-chat col-12">
                <button>Chat</button>
              </div>
              <div class="contact-footer col-10">
                <div class="img-contact">
                  <img src="@/assets/oclock.png" alt="">
                  <p>8h sáng - 10h tối</p>
                </div>
                <div class="img-contact">
                  <img src="@/assets/phone.png" alt="">
                  <p>090 2202 000</p>
                </div>
                <div class="img-contact">
                  <img src="@/assets/facebook.png" alt="">
                  <p>VFOOD.PH</p>
                </div>
              </div>
            </div>
            <div class="img-footer-thucdon">
              <img src="@/assets/img-footer-thucdon.png" alt="" width="100%">
            </div>
          </div>
        </div>

      </div>
      <div class="thucdon col-8 row">
        <div v-for="(item,i) in listProducts" :key="i" class="products nowrap ">
          <div   class="box-product">
            <div class="price">
              <h2>{{item.name}}</h2>
              <h1>P{{item.price}}</h1>
              <p>Thành phần:</p>
              <p v-html="item.description"></p>
              <div class="btn-datngay">
                <a href="#modal-chitiet">ĐẶT MÓN</a>
              </div>
            </div>
            <div class="img-product">
              <img src="@/assets/sanpham.png" alt="">
            </div>
          </div>


        </div>

        <div class="footer-thucdon-main row">
          <div class="item-footer-thucdon col-4">
            <span>VFOOD.PH</span>
            <p>Luôn mang đến những món <br> ngon phục vụ quý khách ngon <br> nhất</p>
          </div>
          <div class="item-footer-thucdon col-4">
            <h2>HOTLINE</h2>
            <h1>090 2252 000</h1>
            <div class="contact-thucdon">
              <img src="@/assets/fb.png" alt="" width="40%">
              <img src="@/assets/tele.png" alt="" width="40%">
            </div>
          </div>
          <div class="item-footer-thucdon final-ft col-4">
            <ul>
              <li>Về chúng tôi</li>
              <li>Chính sách VFOOD.PH</li>
              <li>Chính sách giao hàng</li>
              <li>Phí giao hàng</li>
            </ul>
          </div>
        </div>
        <div class="ft">
          <p>Copyright © 2022 VFOOD.PH VIETNAM | LTD | All rights reserved.</p>
        </div>
      </div>
      <div class="silbar-thucdon col-2  silbar-giohang ">
        <div class="mini-bar col-2 position-fixed">
          <div class="title-silbar">
            <img src="@/assets/ngongu.png" alt="" width="35%">
            <div class="input-search">
              <input type="text" placeholder="Bạn tìm món gì">
              <div class="search">
                <a href=""><img src="@/assets/search.png" alt=""></a>
              </div>
            </div>

          </div>
          <div class="giohang">
            <div class="giohang-title">
              <h2>GIỎ HÀNG</h2>
              <div class="number-cart">
                <p>3</p>
              </div>
            </div>
            <div class="item-giohang">
              <div class="item-cart">
                <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                <span>Phở bò đặc biệt</span>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="item-btn">
                <a href="">-</a>
                <p>2</p>
                <a href="">+</a>
              </div>
              <div class="edit">
                <p>P300</p>
                <a href="#modal-chinhsua"><img src="@/assets/edit.png" alt=""></a>
                <p><a href=""> Xóa</a></p>
              </div>
            </div>
            <div class="item-giohang">
              <div class="item-cart">
                <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                <span>Phở bò đặc biệt</span>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="item-btn">
                <a href="">-</a>
                <p>2</p>
                <a href="">+</a>
              </div>
              <div class="edit">
                <p>P300</p>
                <a href="#modal-chinhsua"><img src="@/assets/edit.png" alt=""></a>
                <p><a href=""> Xóa</a></p>
              </div>
            </div>
            <div class="item-giohang">
              <div class="item-cart">
                <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                <span>Phở bò đặc biệt</span>
                <p>Phở bò phúc đặc biệt</p>
                <p>Khăn lạnh</p>
                <p>Bò viên</p>
              </div>
              <div class="item-btn">
                <a href="">-</a>
                <p>2</p>
                <a href="">+</a>
              </div>
              <div class="edit">
                <p>P300</p>
                <a href="#modal-chinhsua"><img src="@/assets/edit.png" alt=""></a>
                <p><a href=""> Xóa</a></p>
              </div>
            </div>
          </div>
          <div class="thanhtoan">
            <p>Tạm tính</p>
            <p>P300</p>
            <button @click="thanhtoanDon()" class="btn btn-primary">Thanh toán</button>
          </div>
        </div>

      </div>
    </div>
    <div class="thucdon-mobile ">
      <div class="header ">
        <div class="logo"><a href="/">VFOOD.COM</a></div>
        <div class="btn-mobile">
          <a href="#modal" class="btn-thucdon-mobile">THỰC ĐƠN</a>
          <a href=""><img src="@/assets/ngon-ngu-mobile.png" alt="" width="80%"></a>
          <button href="" onclick=open_nav()><img src="@/assets/menu-mobile.png" alt="" width="80%"></button>
        </div>
      </div>
      <div class="menu ">
        <div class="menu-silbar-h menu-thucdon" id="nav">
          <ul>
            <li><a href="/" class="tracuu">Trang chủ</a></li>
            <li><a href="/" c class="tracuu">Tra cứu đơn hàng</a></li>
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
      <div class="main-thucdon-mobile">
        <div class="m " id="myHeader">
          <nav class="mobile-category  ">
            <ul class="mobile-category-list ">
              <li v-for="(item,i) in categories" :key="i" class="mobile-category-item">
                <a href="" class="mobile-category-link">{{ item.name }}</a>
              </li>
            </ul>
            <div class="search-btn" onclick="open_search_mobile()">
              <img src="@/assets/search.png" alt="">
            </div>
            <div class="cancle-btn" id="cancle-btn" onclick="close_search_mobile()">
              <img src="@/assets/cancle.png" alt="">
            </div>
            <div class="btn-input-search" id="search-mobile">
              <input type="text" placeholder="Bạn cần tìm gì">
            </div>
          </nav>
        </div>
        <img src="@/assets/img-footer-thucdon.png" alt="" width="100%">
        <div class="title-comvanphong">
          <p>
            CƠM VĂN PHÒNG
          </p>
          <hr class="hr">
          <hr class="hr2">
        </div>


        <div class="products">
          <div  v-for="(item,i) in listProducts" :key="i" class="box-product product-mobile">
            <div class="price price-mobile">
              <h2>{{item.name}}</h2>
              <h1>{{item.price}}</h1>
              <p>Thành phần: <br>
                {{item.detail}}
              </p>
              <div class="btn-datngay btn-datngay-mobile">
                <a href="#modal-chitiet-mobile">ĐẶT MÓN</a>
              </div>
            </div>
            <div class="img-product img-product-mobile">
              <img src="@/assets/sanpham.png" alt="">
            </div>
          </div>


        </div>
      </div>
      <div class="xemgiohang">
        <div class="item">
          <p>Giao hàng:2 món</p>
        </div>
        <div class="item">
          <p>P300</p>
        </div>
        <div class="item">
          <a href="#modal-giohangmobile">Xem giỏ </a>
        </div>
      </div>
    </div>


    <div class="modal" id="modal-chitiet-mobile">
      <div class="modal__dialog">
        <section class="modal__content modal-chitiet modal-chitiet-mobile">
          <div class="img-popup">
            <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="50%">
          </div>
          <h1>RAU MUỐNG XÀO TỎI</h1>
          <p>Thành phần</p>
          <p>Rau muống tỏi</p>
          <a href="#" class="modal__close modal-chitiet-close">&times;</a>
          <div class="main-pop main-pop-mobile">
            <div class="checkbox">
              <div class="title-checkbox">Thêm</div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Trứng chiên</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Chả lụa</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
            </div>
            <div class="ghichu ghichu-mobile">
              <h5>Ghi chú</h5>
              <input type="text">
            </div>
          </div>

          <div class=" btn-cart-checkout item-btn checkout btn-check-out-mobile ">
            <a href="">-</a>
            <p>2</p>
            <a href="">+</a>
          </div>
          <div class="footer-popup footer-popup-mobile">

            <p>TỔNG: P600</p>
            <div class="tong">
              <a href="">Thêm vào giỏ </a>
            </div>


          </div>
        </section>

      </div>
    </div>


    <div class="modal" id="modal-chinhsua-mobile">
      <div class="modal__dialog">
        <section class="modal__content modal-chitiet modal-chitiet-mobile">
          <div class="img-popup">
            <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="50%">
          </div>
          <h1>RAU MUỐNG XÀO TỎI</h1>
          <p>Thành phần</p>
          <p>Rau muống tỏi</p>
          <a href="#" class="modal__close modal-chitiet-close">&times;</a>
          <div class="main-pop main-pop-mobile">
            <div class="checkbox">
              <div class="title-checkbox">Thêm</div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Trứng chiên</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
              <div class="item-checkbox row">
                <div class="checkbox-cart col-5">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle1"> Chả lụa</label> <br>
                </div>
                <div class="btn-check-box  col-4">
                  <a href="#0" class="tru">-</a>
                  <p>2</p>
                  <a href="#0" class="cong">+</a>
                </div>
                <div class="p col-3">
                  <p>P300</p>

                </div>
              </div>
            </div>
            <div class="ghichu ghichu-mobile">
              <h5>Ghi chú</h5>
              <input type="text">
            </div>
          </div>

          <div class=" btn-cart-checkout item-btn checkout btn-check-out-mobile ">
            <a href="">-</a>
            <p>2</p>
            <a href="">+</a>
          </div>
          <div class="footer-popup footer-popup-mobile">

            <p>TỔNG: P600</p>
            <div class="tong">
              <a href="">Chỉnh sửa </a>
            </div>


          </div>
        </section>

      </div>
    </div>


    <div class="modal" id="modal-giohangmobile">
      <div class="modal__dialog">
        <section class="modal__content modal-chitiet giohang-mobile">

          <div class="giohang">
            <div class="giohang-title">
              <h2>GIỎ HÀNG</h2>
              <div class="number-cart">
                <p>3</p>
              </div>
            </div>
            <div class="scroll-giohang">
              <div class="item-giohang">
                <div class="item-cart">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                  <span>Phở bò đặc biệt</span>
                  <p>Phở bò phúc đặc biệt</p>
                  <p>Khăn lạnh</p>
                  <p>Bò viên</p>
                </div>
                <div class="item-btn">
                  <a href="">-</a>
                  <p>2</p>
                  <a href="">+</a>
                </div>
                <div class="edit edit-mobile">
                  <p>P300</p>
                  <a href="#modal-chinhsua-mobile"><img src="@/assets/edit.png" alt=""></a>
                  <p><a href=""> Xóa</a></p>
                </div>
              </div>
              <div class="item-giohang">
                <div class="item-cart">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                  <span>Phở bò đặc biệt</span>
                  <p>Phở bò phúc đặc biệt</p>
                  <p>Khăn lạnh</p>
                  <p>Bò viên</p>
                </div>
                <div class="item-btn">
                  <a href="">-</a>
                  <p>2</p>
                  <a href="">+</a>
                </div>
                <div class="edit edit-mobile">
                  <p>P300</p>
                  <a href="#modal-chinhsua-mobile"><img src="@/assets/edit.png" alt=""></a>
                  <p><a href=""> Xóa</a></p>
                </div>
              </div>
              <div class="item-giohang">
                <div class="item-cart">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                  <span>Phở bò đặc biệt</span>
                  <p>Phở bò phúc đặc biệt</p>
                  <p>Khăn lạnh</p>
                  <p>Bò viên</p>
                </div>
                <div class="item-btn">
                  <a href="">-</a>
                  <p>2</p>
                  <a href="">+</a>
                </div>
                <div class="edit edit-mobile">
                  <p>P300</p>
                  <a href="#modal-chinhsua-mobile"><img src="@/assets/edit.png" alt=""></a>
                  <p><a href=""> Xóa</a></p>
                </div>
              </div>
              <div class="item-giohang">
                <div class="item-cart">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                  <span>Phở bò đặc biệt</span>
                  <p>Phở bò phúc đặc biệt</p>
                  <p>Khăn lạnh</p>
                  <p>Bò viên</p>
                </div>
                <div class="item-btn">
                  <a href="">-</a>
                  <p>2</p>
                  <a href="">+</a>
                </div>
                <div class="edit edit-mobile">
                  <p>P300</p>
                  <a href="#modal-chinhsua-mobile"><img src="@/assets/edit.png" alt=""></a>
                  <p><a href=""> Xóa</a></p>
                </div>
              </div>
              <div class="item-giohang">
                <div class="item-cart">
                  <img src="@/assets/sp-giohang2-removebg-preview.png" alt="" width="60%">
                  <span>Phở bò đặc biệt</span>
                  <p>Phở bò phúc đặc biệt</p>
                  <p>Khăn lạnh</p>
                  <p>Bò viên</p>
                </div>
                <div class="item-btn">
                  <a href="">-</a>
                  <p>2</p>
                  <a href="">+</a>
                </div>
                <div class="edit edit-mobile">
                  <p>P300</p>
                  <a href="#modal-chinhsua-mobile"><img src="@/assets/edit.png" alt=""></a>
                  <p><a href=""> Xóa</a></p>
                </div>
              </div>
            </div>

          </div>
          <div class="thanhtoan thanhtoan-mobile">
            <p>Giỏ hàng: 2 món</p>
            <p>P300</p>
            <a @click="thanhtoanDon()">Thanh toán</a>
          </div>
          <a href="#" class="modal__close modal-chitiet-close">&times;</a>

        </section>

      </div>
    </div>
  </div>
</template>
<style scoped>
.products {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 25%;
}
.footer-thucdon-main {
  margin: 0px;
  text-align: center;
  background-color: #487025;
  width: 100%;
}
.ft {
  display: flex;
  justify-content: center;
  background-color: #082A07;
  align-items: center;
  text-align: center;
  width: 100%;
}
.checkout {
  display: flex;
  justify-content: center !important;
  padding-top: 10px;
  padding-bottom: 90px;
}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {

  /* CSS */

}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {

  /* CSS */

}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {

  /* CSS */

}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  /* CSS */

}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

  /* CSS */

}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .btn-datngay-mobile a {
    padding: 5% !important;
    text-align: center !important;
  }
  .products{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
  }

  /* CSS */
  .mobile-category-item {
    width: 18%;
  }

  .mobile-category-link {
    text-align: center;
    text-decoration: none;
    color: #487025;
    font-size: 12px;
    line-height: var(--line-height);
    width: 100px;
    height: calc(var(--line-height) * 2);
    border-radius: 4px;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

}

a:not([href]):not([tabindex]) {
  color: #487025;
  text-decoration: none;
}
</style>

<script>
import actionFood from "@/actions/food";

export default {
  name: "Thucdon",
  data() {
    return {
      categories: [],
      menuFooter:[],
      listProducts:[
        {
          name:"Rau muống xào cải",
          price:"p150",
          description:"Rau muống , tỏi"
        }
      ]

    }

  },
  mounted() {
    this.getCategory();
    this.getMenuFooter();
    this.getproductlist();
  },
  methods: {
    getCategory() {
      let vm = this;
      actionFood.getCategory().then(function (res) {
        vm.categories = res.data;
      })

    },
    getMenuFooter() {
      let vm = this;
      actionFood.getCategory().then(function (res) {
        vm.menuFooter = res.data;
      })

    },
    getproductlist() {
      let vm = this;
      actionFood.getproductlist().then(function (res) {
        vm.listProducts = res.data;
      })

    },
    thanhtoanDon() {
      this.$router.push('Thongtindon')
    }

  }
}

</script>
