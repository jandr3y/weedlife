// app/api/login/route.ts
import { exportJwtPayload } from '@/app/layout';
import { API_URL } from '@/config';
import axios from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, { email, password })

    const res = NextResponse.json({ 
      message: 'Login successful',
      user: exportJwtPayload(data.access_token)
    });

    res.cookies.set('token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    });
    
    return res;
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Login failed' }, { status: 401 });
  }
}