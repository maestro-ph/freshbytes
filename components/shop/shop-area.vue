<template>
  <section class="tp-shop-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <!-- shop sidebar start -->
          <shop-sidebar />
          <!-- shop sidebar end -->
        </div>
        <div class="col-xl-9 col-lg-8">
          <div class="tp-shop-main-wrapper">
            <div class="tp-shop-top mb-45">
              <div class="row">
                <div class="col-xl-6">
                  <div class="tp-shop-top-left d-flex align-items-center">
                    <div class="tp-shop-top-tab tp-tab">
                      <ul class="nav nav-tabs" id="productTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link ${active_tab === 'grid' ? 'active' : ''}`"
                            @click="handleActiveTab('grid')"
                          >
                            <svg-grid />
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link ${active_tab === 'list' ? 'active' : ''}`"
                            @click="handleActiveTab('list')"
                          >
                            <svg-list />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="tp-shop-top-result">
                      <p>
                        Showing 1–{{ store.filteredProducts?.slice(startIndex,endIndex).length }} of
                        {{ product_data.length }} results
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <shop-sidebar-filter-select
                    @handle-select-filter="store.handleSelectFilter"
                  />
                </div>
              </div>
            </div>
            <div class="tp-shop-items-wrapper tp-shop-item-primary">
              <div v-if="active_tab === 'grid'">
                <div class="row infinite-container">
                  <div
                    v-for="item in store.filteredProducts?.slice(startIndex,endIndex)"
                    :key="item.id"
                    class="col-xl-4 col-md-6 col-sm-6 infinite-item"
                  >
                    <product-single
                      :product="item"
                    />
                  </div>
                </div>
              </div>

              <div v-if="active_tab === 'list'">
                <div class="row">
                  <div class="col-xl-12">
                    <product-list-item
                      v-for="item in store.filteredProducts?.slice(startIndex,endIndex)"
                      :key="item.id"
                      :item="item"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="tp-shop-pagination mt-20">
              <div
                v-if="store.filteredProducts && store.filteredProducts.length > 9"
                class="tp-pagination"
              >
                <ui-pagination
                  :items-per-page="9"
                  :data="store.filteredProducts || []"
                  @handle-paginate="handlePagination"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import product_data from "@/data/product-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";
import { type IProduct } from "@/types/product-d-t";

const route = useRoute();
const props = defineProps<{
  list_style?: boolean;
}>();

const active_tab = ref<string>(props.list_style ? "list" : "grid");
const store = useProductFilterStore();

let filteredProductsItems = ref<IProduct[]>(store.filteredProducts!);
let startIndex = ref<number>(0);
let endIndex = ref<number>(store.filteredProducts?.length!);

const handlePagination = (data: IProduct[], start: number, end: number) => {
  filteredProductsItems.value = data;
  startIndex.value = start;
  endIndex.value = end;
};

function handleActiveTab(tab: string) {
  active_tab.value = tab;
}
watch(
  () => route.query || route.params,
  (newStatus) => {
    startIndex.value = 0;
    endIndex.value =
      store.filteredProducts && store.filteredProducts.length > 9 ? 9 : store.filteredProducts?.length!;
  }
);
</script>
