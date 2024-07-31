'use client'

import styles from './ChatMessage.module.scss'
import { CopyButton } from 'react-element-forge'
import { MessageT } from 'types'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

type MessageBubblePropsT = {
  message: string
  type: 'incomming' | 'out_going'
  hasActions?: boolean
  onInject?: Function
}
const MessageBubble = ({
  message,
  type,
  hasActions,
  onInject,
}: MessageBubblePropsT) => {
  console.log('rendering message bubble')
  return (
    <div className={styles[`${type}_wrapper`]}>
      <div className={styles.container}>
        <div className={styles.message}>
          <div className="body-sm">
            <Markdown
              children={message}
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <>
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        PreTag="div"
                        style={darcula}
                      />
                      <div className="justify-end">
                        <CopyButton
                          className={styles.copy_button}
                          value={children as string}
                        />
                      </div>
                    </>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </div>
        </div>
        {hasActions && (
          <div className={styles.actions}>
            <CopyButton value={message} className="mr-12" />
          </div>
        )}
      </div>
    </div>
  )
}

type ChatMessagePropsT = {
  message: MessageT
}
const ChatMessage = ({ message }: ChatMessagePropsT) => {
  return (
    <div>
      {message.role === 'assistant' && (
        <MessageBubble
          message={message.content}
          type="incomming"
          hasActions={true}
        />
      )}
      {message.role === 'user' && (
        <MessageBubble message={message.content} type="out_going" />
      )}
    </div>
  )
}

export default ChatMessage
