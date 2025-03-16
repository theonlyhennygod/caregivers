"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md p-8 bg-card rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-8 text-card-foreground">
          Family Schedule App
        </h1>
        <div className="space-y-4">
          <Link href="/parent" className="block w-full">
            <Button 
              variant="default"
              className="w-full py-6 text-lg rounded-lg"
            >
              Parent Dashboard
            </Button>
          </Link>
          <Link href="/caregiver" className="block w-full">
            <Button 
              variant="default"
              className="w-full py-6 text-lg rounded-lg"
            >
              Caregiver Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
