"use client";
import React, { useEffect, useState } from "react";
//QUILL.JS
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
interface Comment {
  id: number;
  text: string;
  selection: {
    index: number;
    length: number;
  };
  user: string;
  date: string;
  time: string;
}

// This is the bare bones version with the editor
export default function Temp() {
  const { quill, quillRef } = useQuill();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 2,
      text: "Customer seems interested in the sedans. Focus on fuel efficiency.",
      selection: { index: 110, length: 90 }, // Points to "Customer: Hi, Jordan. I'm looking for a new car, something reliable but also stylish."
      user: "Sebastian Jimenez",
      date: "08/24/2024",
      time: "10:17 AM",
    },
    {
      id: 1,
      text: "Jordan is very welcoming and attentive. Great start!",
      selection: { index: 0, length: 50 }, // Points to "Salesperson: Hi there! Welcome to our dealership. My name is Jordan."
      user: "Mara Dimofte",
      date: "08/24/2024",
      time: "10:15 AM",
    },
    {
      id: 4,
      text: "Customer is ready to discuss pricing. Close the deal!",
      selection: { index: 610, length: 70 }, // Points to "Customer: Sure, let’s do that."
      user: "Christopher Martin",
      date: "08/24/2024",
      time: "10:30 AM",
    },
    {
      id: 3,
      text: "Great pitch on the EcoDrive Sedan. Highlight safety features more.",
      selection: { index: 320, length: 110 }, // Points to "Salesperson: Perfect! We have the new 2024 EcoDrive Sedan..."
      user: "Yashvi Jaju",
      date: "08/24/2024",
      time: "10:20 AM",
    },
  ]);
  const [commentInput, setCommentInput] = useState<string>("");

  useEffect(() => {
    if (quill) {
      const handleSelectionChange = (range: any) => {
        if (range && range.length > 0) {
          const selectedText = quill?.getText(range.index, range.length);
          if (selectedText) {
            const confirmComment = confirm(
              `Add a comment to: "${selectedText}"?`
            );
            if (confirmComment) {
              const commentText = prompt("Enter your comment:");
              if (commentText) {
                const newComment: Comment = {
                  id: Date.now(),
                  text: commentText,
                  selection: range,
                  user: "User", // Update with dynamic user data later
                  date: new Date().toLocaleDateString(),
                  time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                };
                setComments((prev) => [...prev, newComment]);
              }
            }
          }
        }
      };

      quill.on("selection-change", handleSelectionChange);
      return () => {
        quill.off("selection-change", handleSelectionChange);
      };
    }
  }, [quill]);

  const handleCommentClick = (comment: Comment) => {
    if (quill) {
      quill.setSelection(comment.selection.index, comment.selection.length);
    }
  };
  return (
    <div className="flex w-screen bg-white">
      <div className="editor-container w-[75%] h-screen p-4">
        <div ref={quillRef} className="editor" />
      </div>
      <div className="comments-container w-[25%] p-4 bg-gray-100 border-l text-black">
        <h2 className="text-lg font-semibold">Comments</h2>
        <ul className="mt-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="mb-2 cursor-pointer"
              onClick={() => handleCommentClick(comment)}
            >
              <strong>Comment {comment.id}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
