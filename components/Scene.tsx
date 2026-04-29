"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei/core/ContactShadows";
import { Edges } from "@react-three/drei/core/Edges";
import { Environment } from "@react-three/drei/core/Environment";
import { Float } from "@react-three/drei/core/Float";
import { MeshTransmissionMaterial } from "@react-three/drei/core/MeshTransmissionMaterial";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

type SceneProps = {
  onReady?: () => void;
};

type CoreRefs = {
  scrollRef: RefObject<THREE.Group | null>;
  hoverRef: RefObject<THREE.Group | null>;
};

function seededUnit(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export default function Scene({ onReady }: SceneProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ fov: 42, near: 0.1, far: 70, position: [0, 0.35, 6.2] }}
        dpr={[1, 1.45]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#05070A", 0);
          onReady?.();
        }}
      >
        <Suspense fallback={null}>
          <color args={["#05070A"]} attach="background" />
          <fog args={["#05070A", 8, 22]} attach="fog" />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

function SceneContent() {
  const scrollRef = useRef<THREE.Group | null>(null);
  const hoverRef = useRef<THREE.Group | null>(null);

  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight color="#F5F7FA" intensity={1.6} position={[4, 5, 5]} />
      <pointLight color="#00D9FF" intensity={42} position={[-3.6, 1.4, 3.8]} />
      <pointLight color="#7C5CFF" intensity={24} position={[3.8, -1.7, 2.4]} />
      <spotLight
        angle={0.42}
        color="#8FD8FF"
        intensity={34}
        penumbra={0.72}
        position={[0, 4, 4.8]}
      />

      <ParticleField />
      <CoreObject hoverRef={hoverRef} scrollRef={scrollRef} />
      <ContactShadows
        blur={2.8}
        color="#00D9FF"
        far={6}
        opacity={0.28}
        position={[0, -2.05, 0]}
        resolution={512}
        scale={8}
      />
      <Environment preset="night" />
      <ScrollRig hoverRef={hoverRef} scrollRef={scrollRef} />
    </>
  );
}

function CoreObject({ scrollRef, hoverRef }: CoreRefs) {
  const traces = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        const radius = index % 2 === 0 ? 1.34 : 1.58;
        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(angle * 1.7) * 0.18,
            Math.sin(angle) * radius,
          ] as [number, number, number],
          rotation: [0, -angle, 0] as [number, number, number],
          scale: index % 3 === 0 ? 0.18 : 0.12,
        };
      }),
    [],
  );

  return (
    <Float floatIntensity={0.56} rotationIntensity={0.22} speed={1.15}>
      <group ref={scrollRef}>
        <group ref={hoverRef}>
          <RoundedBox args={[1.26, 1.26, 1.26]} radius={0.13} smoothness={6}>
            <meshStandardMaterial
              color="#08111F"
              emissive="#001826"
              emissiveIntensity={0.7}
              metalness={0.82}
              roughness={0.22}
            />
            <Edges color="#8FD8FF" scale={1.01} threshold={16} />
          </RoundedBox>

          <mesh rotation={[0.7, 0.36, 0.2]} scale={1.23}>
            <icosahedronGeometry args={[1.1, 1]} />
            <MeshTransmissionMaterial
              anisotropy={0.12}
              chromaticAberration={0.045}
              color="#8FD8FF"
              distortion={0.2}
              distortionScale={0.18}
              ior={1.22}
              opacity={0.72}
              roughness={0.14}
              temporalDistortion={0.05}
              thickness={0.46}
              transparent
              transmission={0.74}
            />
          </mesh>

          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.62, 0.012, 16, 120]} />
            <meshBasicMaterial
              blending={THREE.AdditiveBlending}
              color="#00D9FF"
              opacity={0.66}
              transparent
            />
          </mesh>
          <mesh rotation={[0.52, Math.PI / 2, 0.36]}>
            <torusGeometry args={[1.82, 0.009, 16, 120]} />
            <meshBasicMaterial
              blending={THREE.AdditiveBlending}
              color="#7C5CFF"
              opacity={0.46}
              transparent
            />
          </mesh>

          {traces.map((trace, index) => (
            <mesh
              key={index}
              position={trace.position}
              rotation={trace.rotation}
              scale={[trace.scale, 0.018, 0.018]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={index % 2 === 0 ? "#00D9FF" : "#8FD8FF"}
                emissive={index % 2 === 0 ? "#00D9FF" : "#8FD8FF"}
                emissiveIntensity={1.8}
                metalness={0.2}
                roughness={0.34}
              />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points | null>(null);
  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth < 768,
    [],
  );

  const geometry = useMemo(() => {
    const count = isMobile ? 82 : 168;
    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 4 + seededUnit(index, 1) * 8;
      const theta = seededUnit(index, 2) * Math.PI * 2;
      const phi = Math.acos(2 * seededUnit(index, 3) - 1);

      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.56;
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return bufferGeometry;
  }, [isMobile]);

  useFrame((state, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.018;
    pointsRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.025;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        color="#8FD8FF"
        depthWrite={false}
        opacity={0.68}
        size={isMobile ? 0.02 : 0.025}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function ScrollRig({ scrollRef, hoverRef }: CoreRefs) {
  const { camera } = useThree();
  const cameraTarget = useRef({ x: 0, y: 0.35, z: 6.2 });
  const vector = useMemo(() => new THREE.Vector3(), []);
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    if (prefersReducedMotion || !scrollRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#story",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
        },
      });

      timeline
        .to(cameraTarget.current, { x: -1.12, y: 0.62, z: 5.2, duration: 1 }, 0)
        .to(scrollRef.current!.rotation, { x: 0.42, y: 1.35, z: -0.18, duration: 1 }, 0)
        .to(scrollRef.current!.scale, { x: 1.08, y: 1.08, z: 1.08, duration: 1 }, 0.08)
        .to(cameraTarget.current, { x: 1.16, y: -0.08, z: 4.86, duration: 1 }, 0.28)
        .to(scrollRef.current!.rotation, { x: 1.12, y: 2.62, z: 0.36, duration: 1 }, 0.28)
        .to(scrollRef.current!.position, { x: -0.28, y: 0.2, z: 0.18, duration: 1 }, 0.44)
        .to(cameraTarget.current, { x: -0.72, y: 0.28, z: 5.56, duration: 1 }, 0.58)
        .to(scrollRef.current!.rotation, { x: 1.88, y: 4.28, z: -0.42, duration: 1 }, 0.58)
        .to(scrollRef.current!.scale, { x: 0.82, y: 0.82, z: 0.82, duration: 1 }, 0.72)
        .to(cameraTarget.current, { x: 0, y: 0.52, z: 6.45, duration: 1 }, 0.82)
        .to(scrollRef.current!.position, { x: 0, y: -0.1, z: 0, duration: 1 }, 0.82);
    }, document.body);

    return () => context.revert();
  }, [camera, cameraTarget, prefersReducedMotion, scrollRef]);

  useFrame((state) => {
    const pointer = state.pointer;
    vector.set(
      cameraTarget.current.x + pointer.x * 0.22,
      cameraTarget.current.y + pointer.y * 0.16,
      cameraTarget.current.z,
    );
    camera.position.lerp(vector, 0.055);
    camera.lookAt(0, 0, 0);

    if (hoverRef.current) {
      hoverRef.current.rotation.x = THREE.MathUtils.lerp(
        hoverRef.current.rotation.x,
        pointer.y * 0.18,
        0.06,
      );
      hoverRef.current.rotation.y += 0.0028;
      hoverRef.current.rotation.z = THREE.MathUtils.lerp(
        hoverRef.current.rotation.z,
        -pointer.x * 0.12,
        0.06,
      );
    }
  });

  return null;
}
