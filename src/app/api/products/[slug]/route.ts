import { z } from 'zod'
import data from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  // Simulate a slow network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // ? O parse lança exceção se o valor não for válido
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json(
      {
        error: {
          message: `Product with slug "${slug}" not found`,
        },
      },
      {
        status: 404,
      },
    )
  }

  return Response.json(product)
}
