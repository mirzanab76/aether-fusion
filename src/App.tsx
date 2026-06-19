import { Suspense } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll, Stars, Environment } from "@react-three/drei"
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"
import { Lights } from "./components/Lights"
import { PlasmaCore } from "./components/PlasmaCore"
import { ScrollProgressDriver } from "./components/ScrollProgressDriver"
import { Sections } from "./components/Sections"
import { Navbar } from "./components/Navbar"

const cameraSettings = {
  position: [0, 0, 7] as [number, number, number],
  fov: 40,
}

const glSettings = {
  antialias: true,
  alpha: false,
}

const PAGES = 7

export default function App() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#04030a] text-white">
      <Navbar />
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" />
      </div>

      <Canvas
        dpr={[1, 2]}
        camera={cameraSettings}
        gl={glSettings}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.1
        }}
      >
        <color attach="background" args={["#04030a"]} />
        <fog attach="fog" args={["#04030a", 9, 28]} />

        <Lights />
        <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        <Suspense fallback={null}>
          <Environment preset="night" />
          <ScrollControls pages={PAGES} damping={0.3}>
            <ScrollProgressDriver />
            <PlasmaCore />
            <Scroll html>
              <Sections />
            </Scroll>
          </ScrollControls>
        </Suspense>

        <EffectComposer>
          <Bloom intensity={1.2} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette offset={0.2} darkness={0.9} />
        </EffectComposer>
      </Canvas>
    </main>
  )
}
