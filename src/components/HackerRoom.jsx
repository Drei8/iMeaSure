import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

export function HackerRoom({ colorIntensity = 0.04, ...props }) {
  // Load 3D model data
  const { nodes } = useGLTF('/models/male_body.glb')

  // Materials
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    flatShading: true,
    transparent: true,
    opacity: 0.5,
  })

  // Adjust edge color intensity (0 to 1)
  const edgeColor = useMemo(() => {
    const intensity = THREE.MathUtils.clamp(colorIntensity, 0, 1)
    const colorValue = new THREE.Color(intensity, intensity, intensity) // Scale to a shade of gray
    return colorValue
  }, [colorIntensity])

  const edgeMaterial = new THREE.LineBasicMaterial({
    color: edgeColor,
  })

  // Create edges geometry
  const edgesGeometry = new THREE.EdgesGeometry(nodes.Low_Poly_Male_bodyGroup2_lambert1_0.geometry)

  return (
    <group {...props} dispose={null}>
      {/* Mesh with wireframe material */}
      <mesh  geometry={nodes.Low_Poly_Male_bodyGroup2_lambert1_0.geometry} materials={wireframeMaterial} />

      {/* Line segments for black edges with adjustable intensity */}
      <lineSegments geometry={edgesGeometry} material={edgeMaterial} />
    </group>
  )
}

// Preload GLTF model
useGLTF.preload('/models/male_body.glb')
