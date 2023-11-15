import data from './data.json'

export async function GET() {
  // Simulate a slow network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return Response.json(data.products)
}
