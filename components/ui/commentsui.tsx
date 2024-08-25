"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
  children: Comment[];
}

interface CommentsProps {
  commentsData: Comment[];
}

export default function Comments({ commentsData }: CommentsProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [commentInput, setCommentInput] = useState<string>("");
  const [currentCommentId, setCurrentCommentId] = useState<number | null>(null);

  const openEdit = (comment: Comment) => {
    setCommentInput(comment.text);
    setCurrentCommentId(comment.id);
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
    setCurrentCommentId(null);
    setCommentInput("");
  };

  async function editComment() {
    if (currentCommentId === null) return;
    // PATCH data to the database
    // Fetch new Data from DB and refresh UI
    console.log(
      `Edited comment ${currentCommentId} with new value: ${commentInput}`
    );

    closeEdit();
  }

  async function deleteComment(commentId: number) {
    // DELETE the data in the database
    // Fetch new Data from DB and refresh UI
    console.log(`Deleted comment ${commentId}`);
    setCommentInput("");
  }

  return (
    <ul className="">
      {commentsData.map((comment) => (
        <li
          key={comment.id}
          className="pl-2 mb-4 cursor-pointer bg-[#EDF2FA] rounded-lg"
        >
          <div className="comment-header inline-flex mt-2">
            <div className="author-profile flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="author-details ml-4">
              <span className="font-semibold">{comment.user}:</span>
              <br />
              <span className=" text-gray-600 text-sm">
                {comment.date} {comment.time}
              </span>
            </div>
          </div>
          <p className="mt-1">{comment.text}</p>
          <div className="crud-btns w-[40%] inline-flex justify-between text-sm">
            {/* Future REPLY */}
            {/* EDIT */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="font-bold"
                  variant="ghost"
                  size={"sm"}
                  onClick={() => openEdit(comment)}
                >
                  Edit
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Changed your mind?</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="grid gap-4 py-4">
                      <Textarea
                        className="h-[20vh] text-black"
                        placeholder="Share your thoughts here"
                        maxLength={270}
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                      />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Nevermind</AlertDialogCancel>
                  <AlertDialogAction onClick={editComment}>
                    Submit
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* DELETE */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="font-bold" variant="ghost" size={"sm"}>
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your comment.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </li>
      ))}
    </ul>
  );
}
