<template>
  <span class="post-date text-faded" :title="exactDate(timeStamp)">
    {{ diffTime(timeStamp) }}
  </span>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

defineProps<{ timeStamp: number }>();

const diffTime = (timeStamp: number) => {
  return dayjs.unix(timeStamp).fromNow();
};
const exactDate = (timeStamp: number) => {
  return dayjs.unix(timeStamp).format("llll");
};
</script>

<style lang="scss" scoped></style>
