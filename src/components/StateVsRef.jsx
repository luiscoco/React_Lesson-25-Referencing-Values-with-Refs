import React, { useRef, useState } from 'react'

export default function StateVsRef() {
  const [stateCount, setStateCount] = useState(0)
  const refCount = useRef(0)

  return (
    <div>
      <div className="row" style={{ marginBottom: '0.5rem' }}>
        <span className="stat">State: <strong>{stateCount}</strong></span>
        <span className="stat">Ref: <strong>{refCount.current}</strong></span>
      </div>
      <div className="row">
        <button onClick={() => setStateCount(c => c + 1)}>Increment State (re-renders)</button>
        <button onClick={() => { refCount.current += 1 }}>Increment Ref (no re-render)</button>
        <button onClick={() => { refCount.current = 0; setStateCount(0) }}>Reset Both</button>
      </div>
      <p className="muted" style={{ marginTop: '0.5rem' }}>
        Updating <code>state</code> triggers a re-render; updating <code>ref.current</code> does not.
        Click "Increment Ref" repeatedly and notice the UI value won't change until some other re-render happens.
      </p>
    </div>
  )
}
