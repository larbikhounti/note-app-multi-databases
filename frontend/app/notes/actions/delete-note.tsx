"use client"

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
import { Button } from "@/components/ui/button"
import { deleter } from "@/utils/axios"


export function DeleteNote({ noteId }: { noteId: number }) {
  const handleDelete = async () => {
    const response = await deleter(`/notes/${noteId}`)
    console.log(response);
    if (response.status !== 200) {
      // Handle error
      alert("Failed to delete note")
      return
    }

    // Handle successful deletion
    alert("Note deleted successfully")
  }

  return (
  <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">delete note</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            are you sure you want to delete this one million dollar note? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}