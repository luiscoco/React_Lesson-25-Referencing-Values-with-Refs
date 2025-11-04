import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  const running = intervalRef.current !== null

  function start() {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }

  function stop() {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function reset() {
    stop()
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      // Cleanup if component unmounts
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <div className="row" style={{ marginBottom: '0.5rem' }}>
        <span className="stat">Time: <strong>{seconds}s</strong></span>
        <span className="stat">Running: <strong className={running ? 'success' : 'danger'}>{running ? 'Yes' : 'No'}</strong></span>
      </div>
      <div className="row">
        <button onClick={start} disabled={running}>Start</button>
        <button onClick={stop} disabled={!running}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
