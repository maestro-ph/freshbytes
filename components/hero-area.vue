<template>
  <section class="tp-slider-area p-relative z-index-1 fix">
    <div class="tp-slider-active-5s swiper-containers">
      <div class="swiper-wrappers">
        <div
          class="tp-slider-item-5 scene tp-slider-height-5 swiper-slide d-flex align-items-center"
          data-bg-color="#F3F3F3"
          style="background-color: rgba(0, 0, 0, 0)"
        >
          <div class="tp-slider-shape-5">
            <div class="tp-slider-shape-5-1">
              <img
                class="layer"
                data-depth=".2"
                src="/images/slider/5/shape/shape-1.png"
                alt="shape"
              />
            </div>
            <div class="tp-slider-shape-5-2">
              <img
                class="layer"
                data-depth=".2"
                src="/images/slider/5/shape/shape-2.png"
                alt="shape"
              />
            </div>
            <div class="tp-slider-shape-5-3">
              <img
                class="layer"
                data-depth=".2"
                src="/images/slider/5/shape/shape-3.png"
                alt="shape"
              />
            </div>
            <div class="tp-slider-shape-5-4">
              <img
                class="layer"
                data-depth=".2"
                src="/images/slider/5/shape/shape-4.png"
                alt="shape"
              />
            </div>
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xxl-7 col-xl-7 col-lg-6">
                <div class="tp-slider-content-5 p-relative z-index-1">
                  <!-- <div class="tp-slider-subtitle-img">
                    <img src="/images/slider/5/subtitle.png" alt="" />
                  </div> -->
                  <h3 class="heading-hero text-uppercase">
                    Where Freshness <br />Is Guaranteed
                  </h3>
                  <p class="h3 text-white my-4">
                    Bring fresh, local produce to your doorstep!
                  </p>

                  <div class="tp-slider-btn-5">
                    <nuxt-link href="/shop" class="tp-btn-green"
                      >Shop Now</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-6">
                <div class="tp-slider-thumb-wrapper-5 p-relative">
                  <div class="tp-slider-thumb-shape-5 one d-none d-sm-block">
                    <!-- <img
                      data-depth="0.1"
                      class="layer offer"
                      src="/images/slider/5/shape/offer.png"
                      alt=""
                    /> -->
                  </div>
                  <div class="tp-slider-thumb-5 main-img">
                    <img
                      data-depth="0.2"
                      class="layer"
                      src="/images/slider/5/hero-pics.svg"
                      alt=""
                      style="width: 1300px;height: auto;position: absolute;top: -500px;"
                    />
                    <!-- <span class="tp-slider-thumb-5-gradient"></span> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
