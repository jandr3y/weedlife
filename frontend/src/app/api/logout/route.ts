// app/api/login/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookiesManager = await cookies()
  cookiesManager.delete('token')
  return NextResponse.json({ message: 'Logout successful' });
}