'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
    position: [number, number, number];
    scale: number;
    rotationSpeed: number;
    color: string;
}

function FloatingObject({
    position,
    scale,
    rotationSpeed,
    color,
}: FloatingObjectProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x =
                Math.sin(clock.getElapsedTime() * rotationSpeed) * 0.2;
            meshRef.current.rotation.y =
                Math.cos(clock.getElapsedTime() * rotationSpeed) * 0.2;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Box
                ref={meshRef}
                args={[1, 1.4, 0.1]}
                scale={scale}
                position={position}
            >
                <MeshDistortMaterial
                    color={color}
                    attach='material'
                    distort={0.2}
                    speed={1}
                    roughness={0.4}
                    metalness={0.8}
                />
            </Box>
        </Float>
    );
}

function ConnectionRing() {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (ringRef.current) {
            ringRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            ringRef.current.rotation.z = clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Torus
            ref={ringRef}
            args={[4, 0.1, 16, 100]}
            rotation={[Math.PI / 2, 0, 0]}
        >
            <meshStandardMaterial
                color='#60A5FA'
                transparent
                opacity={0.3}
                metalness={0.8}
                roughness={0.2}
            />
        </Torus>
    );
}

export default function Background3D() {
    const fileObjects: FloatingObjectProps[] = [
        {
            position: [-2, 1, 0],
            scale: 0.4,
            rotationSpeed: 0.5,
            color: '#3B82F6',
        },
        {
            position: [2, -1, 1],
            scale: 0.5,
            rotationSpeed: 0.6,
            color: '#60A5FA',
        },
        {
            position: [-1, -2, 0.5],
            scale: 0.3,
            rotationSpeed: 0.4,
            color: '#93C5FD',
        },
        {
            position: [1.5, 2, -0.5],
            scale: 0.45,
            rotationSpeed: 0.55,
            color: '#2563EB',
        },
        {
            position: [-2.5, -0.5, 1],
            scale: 0.35,
            rotationSpeed: 0.45,
            color: '#1D4ED8',
        },
    ];

    return (
        <div className='absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 to-blue-900'>
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <ConnectionRing />
                {fileObjects.map((obj, index) => (
                    <FloatingObject key={index} {...obj} />
                ))}
                <fog attach='fog' args={['#1e1e1e', 8, 25]} />
            </Canvas>
        </div>
    );
}
