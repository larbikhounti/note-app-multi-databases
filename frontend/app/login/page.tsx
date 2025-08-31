"use client"

import { LoginForm } from "@/components/ui/login-form"
import { LoginFormData } from "@/types/login.type";
import { poster } from "@/utils/axios";
import { useState } from "react";




export default function Page() {
    const [error, setError] = useState<string | null>(null);

     const handleSubmit = async (data: LoginFormData) => {
      setError(null);

      let response = await poster(`/login`, data);
      console.log(response);
      console.log(response);
      console.log(response.status);

      if (response.status !== 201) {
        console.log(response.error);
        setError(response.data.error);
        return
      }
      //setCompanyName(response.data.name);
  }


  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
