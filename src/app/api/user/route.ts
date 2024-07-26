import { NextRequest, NextResponse } from "next/server"

/**
 * POST /api/user 
 * 
 * @param request
 * Mandatory request params:
 * @param username - unique string
 * @param email - unique string
 * @param password - encrypted string
 */
export async function POST(request: NextRequest){
  const { username, email, password } = await request.json()

  return NextResponse.json({ username, email })
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams.get("username")

  return NextResponse.json({ searchParams })
}