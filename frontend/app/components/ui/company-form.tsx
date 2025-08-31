"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { CreateCompany } from "@/types/company-response.type"

export function CompanyForm({
  className,
  onSubmit
}: {  className?: string; onSubmit: (data: CreateCompany) => void }) {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, name });
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a new company</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to create a new company
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="name">company name</Label>
          </div>
          <Input id="name" type="name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full">
          Create Company
        </Button>

      </div>

    </form>
  )
}
