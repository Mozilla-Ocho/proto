import ChatWrapper from '@Modules/chat/ChatWrapper/ChatWrapper'

export default async function Page() {
  return (
    <div className="page_wrapper">
      <h1 className="heading-lg mb-24">Sandbox Chat</h1>
      <ChatWrapper />
    </div>
  )
}
