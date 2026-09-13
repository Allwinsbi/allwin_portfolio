export default function Container({ className = '', children }) {
  return (
    <div className={`max-w-content mx-auto px-5 sm:px-7 ${className}`}>
      {children}
    </div>
  )
}
