<template>
  <div class="discord-reactions">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'DiscordReactions',
  })
</script>
