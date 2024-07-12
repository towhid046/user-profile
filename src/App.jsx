import Navbar from './components/shared/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import UserProfile from './components/UserProfile/UserProfile';
const App = () => {
  return (
    <>
    <header>
      <Navbar/>
      <Hero/>
    </header>
    <main>
      <UserProfile/>
    </main>
    </>
  )
}

export default App