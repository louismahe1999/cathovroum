'use client'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Connexion à CathoVroum</h1>
      <SignIn />
    </main>
  )
}