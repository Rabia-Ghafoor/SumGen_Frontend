import React from "react";

interface BubbleProps {
  speaker: string;
  message: string;
}

const Bubble: React.FC<BubbleProps> = ({ speaker, message }) => {
  return (
    <div
      className={`flex ${
        speaker === "Customer" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-xs p-3 mb-2 rounded-lg bg-gray-100 shadow-sm">
        <strong>{speaker}:</strong>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Bubble;
