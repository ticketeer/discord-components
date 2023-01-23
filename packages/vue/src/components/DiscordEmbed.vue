<template>
  <div class="discord-embed">
    <div class="discord-embed-left-border" :style="{ 'background-color': borderColor }"></div>
    <div class="discord-embed-container">
      <div class="discord-embed-content">
        <div>
          <div v-if="authorName" class="discord-embed-author">
            <img v-if="authorIcon" class="discord-embed-author-icon" :src="authorIcon" alt="" />
            <a v-if="authorUrl" :href="authorUrl" target="_blank" rel="noopener noreferrer">
              {{ authorName }}
            </a>
            <span v-else>
              {{ authorName }}
            </span>
          </div>
          <div v-if="embedTitle" class="discord-embed-title">
            <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
              {{ embedTitle }}
            </a>
            <span v-else>
              {{ embedTitle }}
            </span>
          </div>
          <div class="discord-embed-description">
            <slot></slot>
          </div>
          <slot name="fields"></slot>
          <img v-if="image" class="discord-embed-image" :src="image" alt="" />
        </div>
        <img v-if="thumbnail" class="discord-embed-thumbnail" :src="thumbnail" alt="" />
      </div>
      <div v-if="$slots.footer || timestamp" class="discord-embed-footer">
        <img v-if="$slots.footer && footerIcon" class="discord-embed-footer-icon" :src="footerIcon" alt="" />
        <span>
          <slot name="footer"></slot>
          <span v-if="$slots.footer && timestamp" class="discord-embed-footer-separator">&bull;</span>
          <span v-if="timestamp">
            {{ parseTimestamp({ timestamp }) }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { util } from '@discord-components/core'

  export default defineComponent({
    name: 'DiscordEmbed',
    props: {
      authorIcon: String,
      authorName: String,
      authorUrl: String,
      borderColor: String,
      embedTitle: String,
      footerIcon: String,
      image: String,
      thumbnail: String,
      timestamp: [Date, String],
      url: String,
    },
    setup(props, { slots }) {
      return {
        parseTimestamp: util.parseTimestamp,
      }
    },
  })
</script>

