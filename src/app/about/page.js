import Link from 'next/link'

export const metadata = {
  title: 'About · My Movie Library',
}

export default function AboutPage() {
  return (
    <main>
      <p>
        <Link href="/">Home</Link>
      </p>

      <h1>About</h1>
      <p>This app was created with React and Next.js.</p>
    </main>
  )
}
