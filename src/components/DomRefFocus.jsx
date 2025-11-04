import React, { useRef } from 'react'

export default function DomRefFocus() {
  const inputRef = useRef(null)
  const latestValueRef = useRef('')

  function focusInput() {
    inputRef.current?.focus()
  }

  function handleChange(e) {
    latestValueRef.current = e.target.value // doesn't cause re-render
  }

  return (
    <div>
      <div className="row" style={{ marginBottom: '0.5rem' }}>
        <input ref={inputRef} placeholder="Type something…" onChange={handleChange} />
        <button onClick={focusInput}>Focus</button>
      </div>
      <p className="muted">
        Latest Input (stored in ref): <code>{latestValueRef.current}</code> (won't update until another render happens)
      </p>
      <p className="muted">
        Tip: open DevTools and inspect how changing the input doesn't re-render this component.
      </p>
    </div>
  )
}
