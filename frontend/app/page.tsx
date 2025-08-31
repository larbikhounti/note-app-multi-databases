"use client"

import { GalleryVerticalEnd } from "lucide-react"
import { CompanyForm} from "./components/ui/company-form";
import { poster } from "./utils/axios";
import { AxiosResponse } from "axios";
import { CustomAlert } from "./components/ui/custom-alert";
import { CreateCompany } from "./types/company-response.type";
import { CreateCompanyResponse, ErrorCreatingCompanyResponse } from "./types/create-company.type";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  let [error, setError] = useState<string | null>(null);
  let [companyName, setCompanyName] = useState<string | null>(null);

  const handleSubmit = async (data: CreateCompany) => {
      setError(null);
      
      let response = await poster('/companies', data);
      console.log(response);
      console.log(response);
      console.log(response.status);

      if (response.status !== 201) {
        console.log(response.error);
        setError(response.data.error);
        return
      }
      setCompanyName(response.data.name);
  }
  useEffect(() => {
    if (companyName) {
      const targetUrl = `http://${companyName}.localhost:3000/signin`;
      router.push(targetUrl);
    }
  }, [companyName]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            my Test
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {error && <CustomAlert title="Error" description={error} variant="destructive" />}
            <CompanyForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
