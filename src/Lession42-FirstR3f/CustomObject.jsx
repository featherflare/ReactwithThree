import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

export default function CustomObject() {
  const geometryRef = useRef()
  const verticicesCount = 10 * 3

  const positions = useMemo(() => {
    const positions = new Float32Array(verticicesCount * 3)

    for (let i = 0; i < verticicesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3
    return positions
  }, [])

  useEffect(() => {
    geometryRef.current.computeVertexNormals()
  }, [])

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach='attributes-position'
          count={verticicesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color='red' side={THREE.DoubleSide} />
    </mesh>
  )
}
