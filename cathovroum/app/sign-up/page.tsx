'use client';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      <SignUp />
    </main>
  );
}