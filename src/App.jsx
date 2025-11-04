import React from 'react'
import Stopwatch from './components/Stopwatch.jsx'
import DomRefFocus from './components/DomRefFocus.jsx'
import PersistentValues from './components/PersistentValues.jsx'
import StateVsRef from './components/StateVsRef.jsx'

export default function App() {
  return (
    <div className="container">
      <h1>🔍 React Refs Playground</h1>
      <p className="muted">A compact lab for mastering <code>useRef</code>: DOM refs, timers, persistent values, and state vs ref behavior.</p>

      <div className="grid">
        <section className="card half">
          <h2>1) Stopwatch (useRef + useState)</h2>
          <Stopwatch />
        </section>

        <section className="card half">
          <h2>2) DOM Access (input focus)</h2>
          <DomRefFocus />
        </section>

        <section className="card half">
          <h2>3) Persistent Values (no re-render)</h2>
          <PersistentValues />
        </section>

        <section className="card half">
          <h2>4) State vs Ref</h2>
          <StateVsRef />
        </section>
      </div>
    </div>
  )
}
