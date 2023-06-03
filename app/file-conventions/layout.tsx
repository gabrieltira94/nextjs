export default function Page({ children }: { children: React.ReactNode; }) {

  return <div style={{ backgroundColor: 'goldenrod', color: 'brown', padding: '2rem' }}>
    <h2>Layout in file-convention.tsx component</h2>
    <p>I wrap everything in <em>file-conventions route in a dashed red border.</em></p>

    <div style={{ border: '2px dashed red', padding: '1rem' }}>
      {children}
    </div>
  </div>;
}