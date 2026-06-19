import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"

export function ScrollProgressDriver() {
  const scroll = useScroll()
  useFrame(() => {
    document.documentElement.style.setProperty("--scroll", scroll.offset.toFixed(4))
  })
  return null
}
