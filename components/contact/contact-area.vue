<template>
  <!-- breadcrumb area start -->
  <section class="breadcrumb__area include-bg text-center pt-95 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <h3 class="breadcrumb__title">Keep In Touch with Us</h3>
            <div class="breadcrumb__list">
              <span><nuxt-link href="/">Home</nuxt-link></span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb area end -->

  <!-- contact area start -->
  <section class="tp-contact-area pb-100">
    <div class="container">
      <div class="tp-contact-inner">
        <div class="row">
          <div class="col-xl-9 col-lg-8">
            <div class="tp-contact-wrapper">
              <h3 class="tp-contact-title">Sent A Message</h3>

              <div class="tp-contact-form">
                <!-- form start -->
                <forms-contact-form />
                <!-- form end -->
                <p class="ajax-response"></p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4">
            <div class="tp-contact-info-wrapper">
              <div class="tp-contact-info-item">
                <div class="tp-contact-info-icon">
                  <span>
                    <img src="/images/contact/contact-icon-1.png" alt="" />
                  </span>
                </div>
                <div class="tp-contact-info-content">
                  <p data-info="mail">
                    <a href="mailto:freshbytes2024@gmail.com"
                      >freshbytes2024@gmail.com</a
                    >
                  </p>
                  <p data-info="phone">
                    <a href="tel:670-413-90-762">+63 976 016 7821</a>
                  </p>
                </div>
              </div>
              <div class="tp-contact-info-item">
                <div class="tp-contact-info-icon">
                  <span>
                    <img src="/images/contact/contact-icon-2.png" alt="" />
                  </span>
                </div>
                <div class="tp-contact-info-content">
                  <p>
                    <a
                      href="https://www.google.com/maps/place/USM+R%26D+Display+Center/@7.1121581,124.8294899,18.61z/data=!4m15!1m8!3m7!1s0x32f88d6d5dc14d77:0xf585e053e9bc8549!2sBai+Matabay+Plang+Ave,+Kabacan,+Cotabato!3b1!8m2!3d7.1091323!4d124.8296941!16s%2Fg%2F11bykzh0bq!3m5!1s0x32f88df874425659:0x2a9f60e09bd61645!8m2!3d7.1124535!4d124.8302879!16s%2Fg%2F11mb3v14q8?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                      target="_blank"
                    >
                      Bai Matabay Plang Avenue <br />
                      Kabacan, Cotabato 9407
                    </a>
                  </p>
                </div>
              </div>
              <div class="tp-contact-info-item">
                <div class="tp-contact-info-icon">
                  <span>
                    <img src="/images/contact/contact-icon-3.png" alt="" />
                  </span>
                </div>
                <div class="tp-contact-info-content">
                  <div class="tp-contact-social-wrapper mt-5">
                    <h4 class="tp-contact-social-title">
                      Find us on social media
                    </h4>

                    <div class="tp-contact-social-icon">
                      <a href="https://www.facebook.com/FreshBytes.UCC"
                        ><i class="fa-brands fa-facebook-f"></i
                      ></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- contact area end -->

  <!-- map area start -->
  <section class="tp-map-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-map-wrapper">
            <div class="tp-map-hotspot">
              <span class="tp-hotspot tp-pulse-border">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="#821F40" />
                </svg>
              </span>
            </div>
            <div class="tp-map-iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1979.5597055838266!2d124.8294899!3d7.1121581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f88df874425659%3A0x2a9f60e09bd61645!2sUSM%20R%26D%20Display%20Center!5e0!3m2!1sen!2sph!4v1745207319424!5m2!1sen!2sph"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- map area end -->
</template>

<script setup lang="ts"></script>
