"use client"

import { ArrowUp, Paperclip } from "lucide-react"
import { useRef, useState, type SubmitEvent } from "react"
import TextareaAutosize from "react-textarea-autosize"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group"
import { useCreateMessage } from "@/features/conversations/hooks/use-create-message"

type ConversationMessageInputProps = {
  conversationId: string
}

export function ConversationMessageInput({
  conversationId,
}: ConversationMessageInputProps) {
  const [content, setContent] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { mutate } = useCreateMessage(conversationId)

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!content.trim()) return

    mutate(content)
    setContent("")
    textareaRef.current?.focus()
  }

  return (
    <form className="m-3 mt-0" onSubmit={handleSubmit}>
      <InputGroup
        className="h-auto min-h-0 gap-1 overflow-hidden has-[[data-slot=input-group-control]:focus-visible]:border-input has-[[data-slot=input-group-control]:focus-visible]:ring-0"
        style={{ borderRadius: "20px" }}
      >
        <TextareaAutosize
          ref={textareaRef}
          data-slot="input-group-control"
          aria-label="Message"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !event.shiftKey &&
              !event.nativeEvent.isComposing
            ) {
              event.preventDefault()
              event.currentTarget.form?.requestSubmit()
            }
          }}
          minRows={1}
          maxRows={6}
          placeholder="Type a message"
          className="min-w-0 flex-1 resize-none scrollbar-none rounded-none border-0 bg-transparent py-3 pr-3 pl-1 text-sm leading-5 outline-none placeholder:text-muted-foreground"
        />

        <InputGroupAddon align="inline-start" className="self-end">
          <InputGroupButton size="icon-sm" aria-label="Attach file">
            <Paperclip />
          </InputGroupButton>
        </InputGroupAddon>

        <InputGroupAddon align="inline-end" className="self-end">
          <InputGroupButton
            type="submit"
            size="icon-sm"
            variant="default"
            className="rounded-full"
            aria-label="Send message"
            disabled={!content.trim()}
          >
            <ArrowUp />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}
