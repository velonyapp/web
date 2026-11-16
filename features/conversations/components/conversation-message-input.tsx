"use client"

import { ArrowUp, Paperclip } from "lucide-react"
import TextareaAutosize from "react-textarea-autosize"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group"

export function ConversationMessageInput() {
  return (
    <div className="m-3 mt-0">
      <InputGroup
        className="h-auto min-h-0 gap-1 overflow-hidden has-[[data-slot=input-group-control]:focus-visible]:border-input has-[[data-slot=input-group-control]:focus-visible]:ring-0"
        style={{ borderRadius: "20px" }}
      >
        <TextareaAutosize
          data-slot="input-group-control"
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
            size="icon-sm"
            variant="default"
            className="rounded-full"
            aria-label="Send message"
          >
            <ArrowUp />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
