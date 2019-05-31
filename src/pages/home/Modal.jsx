import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function Modal({children}) {
  const [container, setContainer] = useState(null)
  useEffect(() => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    setContainer(container)
    return () => {
      document.body.removeChild(container)
      setContainer(null)
    }
  }, [])

  return container && ReactDOM.createPortal(children, container)
}

export default Modal