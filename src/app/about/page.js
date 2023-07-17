import { NavMenu } from '../../components/nav-menu'

export const metadata = {
  title: 'About · My Movie Library',
}

export default function AboutPage() {
  return (
    <main>
      <NavMenu />
      <h1>About</h1>

      <p>This app was created with React and Next.js.</p>
    </main>
  )
}
