<template>
  <div class="discord-messages" :class="{ 'discord-compact-mode': layout.compact, 'discord-light-theme': layout.light }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, provide, toRefs } from 'vue'
  import { resolveOptions } from '../options'

  export default defineComponent({
    name: 'DiscordMessages',
    props: {
      compactMode: {
        type: Boolean,
        default: null,
      },
      lightTheme: {
        type: Boolean,
        default: null,
      },
    },
    setup(props) {
      const options = resolveOptions()
      const { compactMode, lightTheme } = toRefs(props)

      const layout = {
        compact: compactMode?.value === true || (options.defaultMode === 'compact' && compactMode?.value !== false),
        light: lightTheme?.value === true || (options.defaultTheme === 'light' && lightTheme?.value !== false),
      }

      provide('compactMode', layout.compact)

      return {
        layout,
      }
    },
  })
</script>
