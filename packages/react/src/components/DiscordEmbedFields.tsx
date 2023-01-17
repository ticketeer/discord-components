import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'

export default function DiscordEmbedFields({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-embed-fields">{children}</div>
}
