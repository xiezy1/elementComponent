<template>
  <transition>
    <div :class="['message', type]" v-if="state" :style="{ top: top + 'px' }">
      <p>{{ message }}</p>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      state: false,
      margin: 20,
      height: 50,
      top: 0,
    };
  },
  props: {
    message: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 3000,
    },
    type: {
      type: String,
      default: "success",
    },
  },
  methods: {
    setState(state) {
      if (state) this.state = state;
      else {
        return new Promise((resolve) => {
          this.state = state;
          setTimeout(() => resolve("ok"), 300);
        });
      }
    },
    setTop(top) {
      this.top = top;
      console.log(this.top);
    },
  },
};
</script>
<style scoped lang="less">
.message {
  position: absolute;
  left: 50%;
  padding: 13px 20px;
  width: 400px;
  border-radius: 5px;
  margin-left: -200px;
  transition: all 0.3s;
  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  &.success {
    color: #67c23a;
    background-color: #f0f9eb;
    border: 1px solid #e1f3d8;
  }
  &.warning {
    color: #e6a23c;
    background-color: #fdf6ec;
    border: 1px solid #fdf6ec;
  }
  &.error {
    color: #f56c6c;
    background-color: #fef0f0;
    border: 1px solid #fef0f0;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}

.v-leave,
.v-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>