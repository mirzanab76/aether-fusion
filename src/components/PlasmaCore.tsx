import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const lerp = THREE.MathUtils.lerp

export function PlasmaCore() {
  const group = useRef<THREE.Group>(null!)
  const rings = useRef<THREE.Group>(null!)
  const mat = useRef<any>(null)
  const scroll = useScroll()

  useFrame((state, delta) => {
    if (!group.current || !rings.current) return

    const o = scroll.offset
    const damp = 1 - Math.pow(0.0015, delta)
    const wave = Math.sin(o * Math.PI)

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03
    const target = lerp(1.0, 1.4, wave) * pulse
    const s = lerp(group.current.scale.x, target, damp)
    group.current.scale.set(s, s, s)

    const targetX = Math.sin(o * Math.PI * 2) * 1.5
    group.current.position.x = lerp(group.current.position.x, targetX, damp * 0.35)

    group.current.rotation.y += delta * 0.12
    group.current.rotation.x = lerp(group.current.rotation.x, state.pointer.y * 0.3, damp * 0.5)

    rings.current.rotation.z += delta * 0.25
    rings.current.rotation.x -= delta * 0.1

    if (mat.current) {
      mat.current.distort = lerp(0.25, 0.55, wave)
    }
  })

  return (
    <group ref={group}>
      <Sparkles count={20} scale={5} size={2} speed={0.4} color="#7cf6ff" />

      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          ref={mat}
          color="#5b8cff"
          emissive="#3b1d8f"
          emissiveIntensity={1.4}
          roughness={0.15}
          metalness={0.2}
          distort={0.35}
          speed={2}
        />
      </mesh>

      <mesh scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#cfe9ff" />
      </mesh>

      <mesh scale={1.35}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6f8bff" wireframe transparent opacity={0.18} />
      </mesh>

      <group ref={rings}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.9, 0.018, 16, 160]} />
          <meshStandardMaterial color="#8ab4ff" emissive="#4f7cff" emissiveIntensity={2.2} roughness={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.3, 0.012, 16, 160]} />
          <meshStandardMaterial color="#d8a8ff" emissive="#b14bff" emissiveIntensity={1.8} roughness={0.3} />
        </mesh>
        <mesh rotation={[0, Math.PI / 6, Math.PI / 3]}>
          <torusGeometry args={[2.7, 0.01, 16, 160]} />
          <meshStandardMaterial color="#7cf6ff" emissive="#21d4fd" emissiveIntensity={1.5} roughness={0.3} />
        </mesh>
      </group>
    </group>
  )
}
