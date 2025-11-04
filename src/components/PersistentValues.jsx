import React, { useEffect, useRef, useState } from 'react'

export default function PersistentValues() {
  const renderCount = useRef(0)
  const lastRenderAt = useRef(null)

  const [tick, setTick] = useState(0)

  useEffect(() => {
    renderCount.current += 1
    lastRenderAt.current = new Date().toLocaleTimeString()
  })

  return (
    <div>
      <div className="row" style={{ marginBottom: '0.5rem' }}>
        <span className="stat">Render Count: <strong>{renderCount.current}</strong></span>
        <span className="stat">Last Render: <strong>{lastRenderAt.current || '—'}</strong></span>
      </div>
      <div className="row">
        <button onClick={() => setTick(t => t + 1)}>Trigger State Update</button>
        <span className="muted">State value: {tick}</span>
      </div>
      <p className="muted" style={{ marginTop: '0.5rem' }}>
        These values are stored in <code>useRef</code> and persist across renders without causing re-renders on their own.
      </p>
    </div>
  )
}
