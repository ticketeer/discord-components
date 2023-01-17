import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'

export default function DiscordReactions({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-reactions">{children}</div>
}
