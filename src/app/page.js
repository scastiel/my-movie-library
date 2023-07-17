import { NavMenu } from '../components/nav-menu'

export const metadata = {
  title: 'My Movie Library',
  description: 'An app created with React and Next.js',
}

export default function HomePage() {
  return (
    <main>
      <NavMenu />
      <h1>My Movie Library</h1>

      <p>Welcome!</p>
    </main>
  )
}
