import { NextResponse } from 'next/server'

export async function POST(req) {
  const formData = await req.json()
  return NextResponse.json({ success: true, formData })
}
