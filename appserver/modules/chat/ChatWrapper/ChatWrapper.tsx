'use client'

import { useChat } from 'ai/react'
import ChatMessage from '../ChatMessage/ChatMessage'
import { useEffect, useCallback, useRef } from 'react'
import { Button, TextArea } from 'react-element-forge'
export type LlmT = 'openAi' | 'local'
import styles from './ChatWrapper.module.scss'

const ChatWrapper = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const action = useCallback(
    (event: KeyboardEvent) => {
      const textarea = event.target as HTMLTextAreaElement

      // This just creates a new line when shift + enter is pressed,
      if (event.shiftKey && event.key === 'Enter') {
        event.preventDefault()
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        textarea.value =
          textarea.value.substring(0, start) +
          '\n' +
          textarea.value.substring(end)

        textarea.selectionStart = textarea.selectionEnd = start + 1
        return
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        handleSubmit()
      }
    },
    [handleSubmit]
  )

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const chatBox = document.getElementById('chat-box')
    chatBox?.addEventListener('keydown', action)

    return () => {
      chatBox?.removeEventListener('keydown', action)
    }
  }, [action])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={styles.messages_wrapper}>
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <form onSubmit={handleSubmit}>
        <TextArea
          showLabel={false}
          id="chat-box"
          onChange={handleInputChange}
          value={input}
          name="Message"
          placeholder="Type your message here..."
          label="Message Assistant"
          className="mb-12"
        />
        <div className="justify-end mb-12">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </>
  )
}

export default ChatWrapper
