import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [query, setQuery] = useState('')

  function onSearch(e) {
    e.preventDefault()
    console.log('Buscar:', query)
  }

  return (
    <main className="landing">
      <section className="hero-spot">
        <img src={heroImg} alt="Wiki logo" className="hero-image" />
        <h1 className="hero-title">Wiki Schrub</h1>
        <p className="hero-subtitle">Tu enciclopedia colaborativa — crea, edita y comparte conocimiento.</p>

        <form className="search" onSubmit={onSearch} role="search">
          <input
            aria-label="Buscar artículos"
            placeholder="Buscar artículos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>

        <div className="feature-cards">
          <div className="card">
            <h3>Explorar artículos</h3>
            <p>Busca por título, categoría o contenido y descubre páginas útiles.</p>
          </div>
          <div className="card">
            <h3>Crear página</h3>
            <p>Empieza páginas nuevas con plantillas y colabora con la comunidad.</p>
          </div>
          <div className="card">
            <h3>Categorías</h3>
            <p>Navega por categorías bien organizadas y encuentra temas relacionados.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
