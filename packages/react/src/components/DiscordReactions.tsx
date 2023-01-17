import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import '@discord-components/core/dist/styles/discord-reactions.scss'

export default function DiscordReactions({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-reactions">{children}</div>
}
