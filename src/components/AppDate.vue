<template>
  <span class="post-date text-faded" :title="exactDate(timeStamp)">
    {{ diffTime(timeStamp) }}
  </span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
export default {
  props: {
    timeStamp: {
      type: Number,
      required: true,
    },
  },
  methods: {
    diffTime(timeStamp) {
      return dayjs.unix(timeStamp).fromNow();
    },
    exactDate(timeStamp) {
      return dayjs.unix(timeStamp).format("llll");
    },
  },
};
</script>

<style lang="scss" scoped></style>
