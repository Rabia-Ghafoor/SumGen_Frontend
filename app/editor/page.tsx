"use client";
import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface Comment {
  id: number;
  text: string;
  selection: {
    index: number;
    length: number;
  };
}

export default function Editor() {
  const { quill, quillRef } = useQuill();
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  useEffect(() => {
    if (quill) {
      quill.on("selection-change", handleSelectionChange);
    }

    return () => {
      if (quill) {
        quill.off("selection-change", handleSelectionChange);
      }
    };
  }, [quill]);

  const handleSelectionChange = (range: any) => {
    if (range && range.length > 0) {
      const selectedText = quill?.getText(range.index, range.length);
      if (selectedText) {
        const confirmComment = confirm(`Add a comment to: "${selectedText}"?`);
        if (confirmComment) {
          const commentText = prompt("Enter your comment:");
          if (commentText) {
            const newComment: Comment = {
              id: Date.now(),
              text: commentText,
              selection: range,
            };
            setComments((prev) => [...prev, newComment]);
          }
        }
      }
    }
  };

  const handleCommentClick = (comment: Comment) => {
    if (quill) {
      quill.setSelection(comment.selection.index, comment.selection.length);
    }
  };

  return (
    <div className="flex">
      <div className="editor-container w-[75%] p-4">
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
