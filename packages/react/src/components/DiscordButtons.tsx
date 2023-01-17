import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'

export default function DiscordButtons({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-buttons">{children}</div>
}
