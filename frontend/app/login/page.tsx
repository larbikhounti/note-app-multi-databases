"use client"

import { LoginForm } from "@/components/ui/login-form"
import { LoginFormData } from "@/types/login.type";
import { poster } from "@/utils/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function LoginPage() {
  const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

     const handleSubmit = async (data: LoginFormData) => {
      setError(null);

      let response = await poster(`/login`, data);
      console.log(response);
      console.log(response);
      console.log(response.status);

      if (response.status !== 200) {
        console.log(response.error);
        setError(response.data.error);
        return
      }
      setToken(response.data.token);

  }

    useEffect(() => {
      if (token) {
        console.log("Setting token in local storage: " + token);
        localStorage.setItem('token', token);
        const storageToken = localStorage.getItem('token')
        if (storageToken) {
          router.push("/notes");
        }

      }
    }, [token]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
