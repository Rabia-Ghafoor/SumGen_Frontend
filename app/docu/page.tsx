"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  Home,
  LineChart,
  Search,
  Settings,
  Users2,
  LogOut,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import defaultImage from "../../public/placeholder-user.webp";
import { auth, onAuthStateChanged } from "../../firebaseConfig";
import { User } from "firebase/auth";
import BubbleWindow from "@/components/ui/bubblewindow";
import CommentsUI from "@/components/ui/commentsui";

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

interface Bubble {
  speaker: string;
  message: string;
}

const defaultTranscript = `Salesperson: Hi there! Welcome to our dealership. My name is Jordan. How can I assist you today?

Customer: Hi, Jordan. I'm looking for a new car, something reliable but also stylish. I've heard good things about the new sedans you have.

Salesperson: Great choice! Our latest sedan models are not only reliable but also come with some fantastic features. Are you looking for something specific, like fuel efficiency, technology features, or maybe performance?

Customer: Fuel efficiency is important to me, but I also want something with advanced safety features.

Salesperson: Perfect! We have the new 2024 EcoDrive Sedan, which gets up to 35 miles per gallon. It also comes with a suite of safety features like lane-keeping assist, adaptive cruise control, and a 5-star safety rating. Would you like to take it for a test drive?

Customer: That sounds good. Can we do that?

Salesperson: Absolutely! Let me grab the keys, and we'll get started. While I do that, would you like some water or coffee?

Customer: Water would be great, thanks.

Salesperson: (Returns with keys) Here you go! The car is right outside. I'll guide you through the features while we drive.

Customer: Sounds good!

(After test drive)

Salesperson: How did it feel?

Customer: I really liked it. It's smooth, and the features are impressive.

Salesperson: I'm glad to hear that! If you're interested, we can go over the pricing and see what options work best for you.

Customer: Sure, let's do that.

Salesperson: Great! Let's head inside, and we can discuss financing options as well. We have some excellent deals going on right now.

Customer: Awesome, let's get started.`;

const defaultSummary = `The customer visits the dealership looking for a new car that is both reliable and stylish, with a particular interest in fuel efficiency and advanced safety features.
The salesperson recommends the 2024 EcoDrive Sedan, highlighting its impressive fuel economy and comprehensive safety suite.
The customer is interested and agrees to take the car for a test drive. After the test drive, the customer expresses satisfaction with the car's performance and features.
The conversation concludes with the salesperson offering to discuss pricing and financing options, which the customer is eager to explore.`;

export default function Editor() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 2,
      text: "Customer seems interested in the sedans. Focus on fuel efficiency.",
      selection: { index: 110, length: 90 },
      user: "Sebastian Jimenez",
      date: "08/24/2024",
      time: "10:17 AM",
      children: [],
    },
    {
      id: 1,
      text: "Jordan is very welcoming and attentive. Great start!",
      selection: { index: 0, length: 50 },
      user: "Mara Dimofte",
      date: "08/24/2024",
      time: "10:15 AM",
      children: [],
    },
    {
      id: 4,
      text: "Customer is ready to discuss pricing. Close the deal!",
      selection: { index: 610, length: 70 },
      user: "Christopher Martin",
      date: "08/24/2024",
      time: "10:30 AM",
      children: [],
    },
    {
      id: 3,
      text: "Great pitch on the EcoDrive Sedan. Highlight safety features more.",
      selection: { index: 320, length: 110 },
      user: "Yashvi Jaju",
      date: "08/24/2024",
      time: "10:20 AM",
      children: [],
    },
  ]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.push("/signin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  function parseTranscriptToBubbles(transcript: string): Bubble[] {
    const lines = transcript.split("\n").filter((line) => line.trim() !== "");
    const bubbles: Bubble[] = lines.map((line) => {
      const [speaker, ...messageParts] = line.split(":");
      const message = messageParts.join(":").trim();
      return { speaker: speaker.trim(), message: message };
    });
    return bubbles;
  }

  const chatBubbles = parseTranscriptToBubbles(defaultTranscript);

  async function addComment() {
    //API call to send the data to the backend Get response
    // Fetch new Data from DB and refresh UI
    setCommentInput("");
  }

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="http://localhost:3000/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Transcript</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="relative ml-auto flex-1 md:grow-0"></div>

          {/* User profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src={user.photoURL || defaultImage}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {user.displayName || user.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="tab-transcript">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="tab-transcript" className="hidden sm:flex">
                  Transcript
                </TabsTrigger>
                <TabsTrigger value="tab-summary">AI Summary</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="tab-transcript" className="inline-flex w-full">
              <Card x-chunk="transcript" className="w-[70%]">
                <CardHeader>
                  <CardTitle>Transcript title</CardTitle>
                  <CardDescription>Created 08/24/2024</CardDescription>
                </CardHeader>
                <CardContent className="">
                  <div className="w-[100%]">
                    <BubbleWindow bubbles={chatBubbles} />
                  </div>
                </CardContent>
              </Card>
              <Card x-chunk="comments" className="w-[30%] ml-4 custom-card">
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                  <CardDescription className="flex justify-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="default" className="bg-black">
                          <MessageSquare color="white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white">
                        <DialogHeader>
                          <DialogTitle>Comment</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Textarea
                            className="h-[20vh]"
                            placeholder="Share your thoughts here"
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit" onSubmit={addComment}>
                            Submit
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-black text-md whitespace-pre-line">
                    <CommentsUI commentsData={comments} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab-summary">
              <Card x-chunk="summary">
                <CardHeader>
                  <CardTitle>Transcript title</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-black text-md whitespace-pre-line">
                    {defaultSummary}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
