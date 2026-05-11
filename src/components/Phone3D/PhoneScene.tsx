'use client'

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./PhoneModel"
import { Suspense, useEffect, useState } from "react"
import { Environment, OrthographicCamera } from "@react-three/drei"

/**
 * Responsive orthographic camera — calculates zoom from the actual canvas size
 * so the iPhone always fits regardless of viewport dimensions.
 *
 * The iPhone GLB is roughly 5 world units tall. We want it to fit in ~70% of
 * the canvas height to leave breathing room for notch + bottom bezel.
 */
function ResponsiveOrthoCamera() {
  const { size } = useThree()
  // Target: phone takes 70% of canvas height (5 world units / 0.7 = ~7.14 units visible)
  const targetWorldHeight = 7.2
  const zoom = size.height / targetWorldHeight

  return (
    <OrthographicCamera
      makeDefault
      position={[0, 0, 10]}
      zoom={zoom}
      near={0.1}
      far={1000}
    />
  )
}

export type PhoneScreen = 'lock' | 'agents' | 'slack' | 'apps' | 'device' | 'build'

interface PhoneSceneProps {
  activeScreen?: PhoneScreen
}

export default function PhoneScene({ activeScreen = 'lock' }: PhoneSceneProps) {
  const [isIntro, setisIntro] = useState(true)

  useEffect(() => {
    console.log('[PhoneScene] mounted')
    return () => console.log('[PhoneScene] UNMOUNTED')
  }, [])

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      onCreated={(state) => {
        state.gl.domElement.addEventListener('webglcontextlost', (e) => {
          console.error('[Canvas] WebGL CONTEXT LOST', e)
        })
      }}
    >
      <ResponsiveOrthoCamera />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -2, 3]} intensity={0.4} />

      <Environment preset="sunset" />

      <Suspense fallback={null}>
        <Model isintro={isIntro} setisintro={setisIntro} activeScreen={activeScreen} />
      </Suspense>
    </Canvas>
  )
}
