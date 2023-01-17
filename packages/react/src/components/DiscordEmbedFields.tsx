import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import '@discord-components/core/dist/styles/discord-embed-fields.scss'

export default function DiscordEmbedFields({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-embed-fields">{children}</div>
}
