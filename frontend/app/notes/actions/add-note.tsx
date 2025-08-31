"use client"

import { Button } from "@/components/ui/button"

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
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { poster } from "@/utils/axios"
import { useState } from "react"
import { mutate } from "swr"

export function AddNote() {
  const [content, setContent] = useState<string>("");


  async function handleSubmit() {


    const response = await poster("/notes", {
      method: "POST",
      content: content
    });
    if (response.status !== 201) {
      alert("Failed to create note");
    }
    mutate("/notes");
  }


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default">create note</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">content</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" onChange={(event) => setContent(event.target.value)} />
              </div>
            </div>
          </AlertDialogDescription>

        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


  )
}
