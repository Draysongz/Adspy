"use client";
import { useChat } from "ai/react";

export function Convo() {
  const { input, handleInputChange, handleSubmit, messages } = useChat();

  console.log(messages);

  return (
    <div>
      {/* text messages */}
      {messages.map((message) => {
        return (
          <div key={message.id}>
            {/*  Name of person talking */}
            {message.role === "assistant" ? (
              <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
            ) : (
              <h3 className="text-lg font-semibold mt-2">User</h3>
            )}

            {/* Formatting the message */}
            {message.content.split("\n").map((currentTextBlock, index) => {
              if (currentTextBlock === "") {
                return <p key={message.id + index}>&nbsp;</p>; // " "
              } else {
                return <p key={message.id + index}>{currentTextBlock}</p>;
              }
            })}
          </div>
        );
      })}

      <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:border md:py-4 mt-6">
        <form className="" onSubmit={handleSubmit}>
          <p>User Message</p>
          <textarea
            className="mt-2 w-full bg-gray-600 text-white p-2"
            placeholder="What is stucco?"
            value={input}
            onChange={handleInputChange}
          ></textarea>
          <button className="rounded-md bg-gray-400 text-gray-800 p-2 mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
