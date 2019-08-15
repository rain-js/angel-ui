<template>
  <button
    class="gl-button"
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
      type ? 'gl-button--' + type : '',
      size ? 'gl-button--size-' + size : '',
      {
        'is-plain': plain,
        'is-disabled': disabled,
        'is-round': round
      }
    ]"
  >
  <i :class="icon" v-if="icon"></i>
  <span><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'GlButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    }
  }
</script>