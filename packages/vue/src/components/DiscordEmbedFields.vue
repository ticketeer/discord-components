<template>
  <div class="discord-embed-fields">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'DiscordEmbedFields',
  })
</script>

