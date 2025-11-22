const Dialog = ({ open, onClose, children }) => {
  
  return (
    <dialog open={open}>
      {children}
      <br />
      <button onClick={onClose}>Close Modal</button>
    </dialog>
  )
}

export default Dialog