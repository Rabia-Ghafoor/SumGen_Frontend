import React from "react";
import Bubble from "./bubble";

interface Bubble {
  speaker: string;
  message: string;
}

interface BubbleWindowProps {
  bubbles: Bubble[];
}

const BubbleWindow: React.FC<BubbleWindowProps> = ({ bubbles }) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-2">
      {bubbles.map((bubble, index) => (
        <Bubble key={index} speaker={bubble.speaker} message={bubble.message} />
      ))}
    </div>
  );
};

export default BubbleWindow;
