import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { readCollection, writeCollection } from './store';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'dr-microbiology-secret-key-2024-change-in-production');

export interface AdminUser {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createToken(userId: string, role: string): Promise<string> {
  return new SignJWT({ userId, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<{ userId: string; role: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return { userId: payload.userId as string, role: payload.role as string };
  } catch {
    return null;
  }
}

export async function getAuthUser(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  if (!token) return null;
  
  const decoded = await verifyToken(token);
  if (!decoded) return null;
  
  const users = readCollection<AdminUser>('admin_users');
  return users.find(u => u.id === decoded.userId) || null;
}

export async function initializeAdmin(): Promise<void> {
  const users = readCollection<AdminUser>('admin_users');
  if (users.length === 0) {
    const hashedPassword = await hashPassword('admin123');
    const adminUser: AdminUser = {
      id: '1',
      username: 'admin',
      password: hashedPassword,
      name: 'مدير الموقع',
      email: 'admin@drmicrobiology.com',
      role: 'admin',
      createdAt: new Date().toISOString(),
    };
    writeCollection('admin_users', [adminUser]);
  }
}
