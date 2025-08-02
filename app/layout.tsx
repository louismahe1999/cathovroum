export const metadata = {
  title: 'CathoVroum',
  description: 'Plateforme de covoiturage catholique',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}