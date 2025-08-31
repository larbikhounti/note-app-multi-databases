"use client"

import { DataTable, Note } from "@/components/ui/data-table"
import { fetcher } from "@/utils/axios"
import useSWR from "swr"

export default function Notes() {
    const { data, error } = useSWR<Note[]>("/notes", fetcher)
    if (error) return <div>Failed to load notes</div>
    if (!data) return <div>Loading...</div>
    
  return (
     <div className="container mx-auto py-10">
      <DataTable  data={data} />
    </div>
  )

}

