import React, { ReactElement } from 'react'
import { PropsWithSlot } from '../util'
import '@discord-components/core/dist/styles/discord-buttons.scss'

export default function DiscordButtons({ children }: PropsWithSlot): ReactElement {
  return <div className="discord-buttons">{children}</div>
}
