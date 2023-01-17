import React, { Children, ReactElement, ReactNode } from 'react'
import { util } from '@discord-components/core'
import '@discord-components/core/dist/styles/discord-markdown.scss'

export default function DiscordMarkdown({ children }: { children?: ReactNode }): ReactElement {
  const parsedContent = Children.map(
    children as ReactElement[],
    (child: ReactNode): ReactNode => {
      if (typeof child !== 'string' || !child.length) return child
      return <span className="discord-markdown-content" dangerouslySetInnerHTML={{ __html: util.markdownParser.toHTML(child) }}></span>
    },
  )

  return <span className="discord-markdown">{parsedContent}</span>
}
