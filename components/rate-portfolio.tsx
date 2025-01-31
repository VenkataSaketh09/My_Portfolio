"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function RatePortfolio() {
  const [name, setName] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, rating, comment }),
      })

      if (response.ok) {
        toast({
          title: "Thank you!",
          description: "Your rating has been submitted successfully.",
        })
        setName("")
        setRating(0)
        setComment("")
      } else {
        throw new Error("Failed to submit rating")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Rate My Portfolio</CardTitle>
        <CardDescription>Your feedback is valuable to me!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`cursor-pointer ${star <= rating ? "fill-yellow-400" : "fill-gray-200"}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <div>
            <Textarea
              placeholder="Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting || rating === 0}>
            {isSubmitting ? "Submitting..." : "Submit Rating"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

