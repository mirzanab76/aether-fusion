export function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#6f8bff" distance={14} />
      <pointLight position={[4, 3, 5]} intensity={1.2} color="#b14bff" />
      <pointLight position={[-5, -3, 4]} intensity={1.0} color="#21d4fd" />
      <directionalLight position={[5, 6, 5]} intensity={0.5} />
    </>
  )
}
