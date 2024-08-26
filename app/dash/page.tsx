"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const documents = [
  {
    id: 1,
    title: "Document 1",
    description: "This is a brief description of Document 1.",
  },
  {
    id: 2,
    title: "Document 2",
    description: "This is a brief description of Document 2.",
  },
  {
    id: 3,
    title: "Document 3",
    description: "This is a brief description of Document 3.",
  },
];
export default function Dashboard() {
  const router = useRouter();
  async function fetchTranscripts() {
    try {
      const response = await fetch(
        "http://localhost:3000/api/GetAllTranscripts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Extracting JSON

      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
  useEffect(() => {
    fetchTranscripts();
  }, []);
  const handleDocumentClick = (id: number) => {
    router.push(`/docu/${id}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 p-4">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Create New Document</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4">
        <Tabs defaultValue="tab-documents">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="tab-documents">Documents</TabsTrigger>
              <TabsTrigger value="tab-archived">Archived</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="tab-documents" className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <Card
                  key={doc.id}
                  className="cursor-pointer"
                  onClick={() => handleDocumentClick(doc.id)}
                >
                  <CardHeader>
                    <CardTitle>{doc.title}</CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default">View Document</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tab-archived">
            <p className="text-gray-500">No archived documents.</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
