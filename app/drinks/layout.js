const layout = ({children}) => {
  return (
    <div className="max-w-xl">
    <div className = "mockup-code">
        <pre data-prefix="$">
            <code> npx create next-app@latest next.js-tutorial</code>
        </pre>


    </div>
    {children}
</div>
  )
}

export default layout
