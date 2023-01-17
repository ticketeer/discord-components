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

<style src="@discord-components/core/dist/styles/discord-reactions.scss"></style>
