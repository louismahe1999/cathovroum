import './globals.css'

export const metadata = {
  title: 'CathoVroum',
  description: 'Covoiturage entre catholiques',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}