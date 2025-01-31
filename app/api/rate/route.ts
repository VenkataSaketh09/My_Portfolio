import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)

export async function POST(req: Request) {
  try {
    const { name, rating, comment } = await req.json()

    await client.connect()
    const database = client.db("PortfolioData")
    const ratings = database.collection("ratings")

    const result = await ratings.insertOne({
      name,
      rating,
      comment,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: "Rating submitted successfully", id: result.insertedId })
  } catch (error) {
    console.error("Error submitting rating:", error)
    return NextResponse.json({ error: "Failed to submit rating" }, { status: 500 })
  } finally {
    await client.close()
  }
}

