<template>
  <nav>
    <ul>
      <li @click="setPage(currentPage-1)" :class="currentPage === 1 ?'disable':''">
        <a class="tp-pagination-prev prev page-numbers pointer">
          <svg-paginate-prev />
        </a>
      </li>

      <li v-for="n in totalPages" :key="n" @click="setPage(n)">
        <a :class="`pointer ${currentPage === n ? 'current' : ''}`">{{
          n
        }}</a>
      </li>

      <li @click="setPage(currentPage+1)" :class="currentPage === totalPages ?'disable':''">
        <a class="next page-numbers pointer">
          <svg-paginate-next />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, onMounted,watch } from "vue";
const emit = defineEmits(["handlePaginate"]);
const route = useRoute();

type ItemDataType<T> = {
  data: T[];
  itemsPerPage: number;
};
const props = defineProps<ItemDataType<any>>();
const currentPage = ref<number>(1);

const totalPages = computed(() =>
  Math.ceil(props.data.length / props.itemsPerPage)
);
const startIndex = computed(() => (currentPage.value - 1) * props.itemsPerPage);
const endIndex = computed(() => startIndex.value + props.itemsPerPage);

const setPage = (idx: number) => {
  if (idx <= 0 || idx > totalPages.value) {
    return;
  }
  window.scrollTo(0, 0);
  currentPage.value = idx;
  emit("handlePaginate", props.data, startIndex.value, endIndex.value);
};

onMounted(() => {
  emit("handlePaginate", props.data, startIndex.value, endIndex.value);
});
watch(() => route.query || route.params, (newStatus) => {
  currentPage.value = 1;
});
</script>
