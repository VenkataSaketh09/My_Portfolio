import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)

export async function GET() {
  try {
    await client.connect()
    const database = client.db("PortfolioData")
    const ratings = database.collection("ratings")

    const result = await ratings.find().sort({ createdAt: -1 }).limit(5).toArray()

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching ratings:", error)
    return NextResponse.json({ error: "Failed to fetch ratings" }, { status: 500 })
  } finally {
    await client.close()
  }
}

