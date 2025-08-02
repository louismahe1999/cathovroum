'use client'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isSignedIn) router.push('/sign-in')
  }, [isSignedIn])

  if (!isSignedIn) return null

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur CathoVroum</h1>
      <p className="mb-8">Covoiturage réservé aux catholiques.</p>
      <div className="space-x-4">
        <a href="/publier" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Publier un trajet</a>
        <a href="/rechercher" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Rechercher un trajet</a>
      </div>
    </main>
  )
}