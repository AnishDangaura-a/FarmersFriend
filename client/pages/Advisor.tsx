import React, { useState } from "react";
import { PhoneFrame } from "@/components/layout/PhoneFrame";
import { Send } from "lucide-react";

export default function Advisor() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a farm advisor response. For soil quality improvement, consider crop rotation with legumes, add organic compost, and maintain proper pH levels for your crops.",
        },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-gradient-to-br from-forest via-forest-100 to-forest-200 px-5 py-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-leaf-light to-leaf flex items-center justify-center text-2xl shadow-md">
            🤖
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              AI Farm Advisor
            </h2>
            <p className="text-xs text-white/65 font-medium">
              Expert advice tailored to Nepal's farming conditions
            </p>
          </div>
        </div>

        {/* Quick Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {[
            { emoji: "🌱", text: "Soil quality" },
            { emoji: "🍅", text: "Tomato timing" },
            { emoji: "🐛", text: "Pest control" },
            { emoji: "🌾", text: "Wheat fertilizer" },
          ].map((chip, i) => (
            <button
              key={i}
              onClick={() =>
                setInput(chip.text + " question for Nepal farming?")
              }
              className="bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-600 flex-shrink-0 hover:bg-leaf-glow hover:border-leaf-light transition-colors active:scale-95"
            >
              {chip.emoji} {chip.text}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <div className="text-4xl mb-2">💬</div>
            <p className="text-sm font-medium">Ask about your farm</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2.5 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-leaf text-white rounded-br-none"
                    : "bg-gray-100 text-gray-700 rounded-bl-none"
                } text-sm font-medium`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}

        {loading && (
          <div className="flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 bg-leaf-light rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-leaf-light rounded-full animate-bounce delay-100" />
            <span className="w-1.5 h-1.5 bg-leaf-light rounded-full animate-bounce delay-200" />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="sticky bottom-0 px-4 py-3 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask anything about your farm…"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-leaf focus:outline-none focus:ring-4 focus:ring-leaf-glow transition-all bg-gray-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="w-11 h-11 bg-gradient-to-br from-leaf to-forest-200 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow active:scale-95 disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
