import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

interface CustomAlertProps {
  title: string;
  description: string;
  variant?: "default" | "destructive";
}
export function CustomAlert({ title, description, variant = "default" }: CustomAlertProps) {
  return (
    <Alert variant={variant} >
      <Terminal />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
</Alert>)
}