import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef(new THREE.Vector2());
  const target = useRef(new THREE.Vector2());
  const windowHalf = useRef(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2));

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(22, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Adjust the camera position along the z-axis
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 50, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a torus geometry
    const geometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xaa00aa });
    const torus = new THREE.Mesh(geometry, material);

    // Add the torus to the scene
    scene.add(torus);

    // Set up animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the torus
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      // Update camera position based on mouse movement
      camera.position.x += (target.current.x - camera.position.x) * 0.05;
      camera.position.y += (-target.current.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Event listeners for mouse interactions
    const onMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      target.current = mouse.current.clone();
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      target.current = mouse.current.clone();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth - 50, window.innerHeight);
      windowHalf.current.set(window.innerWidth / 2, window.innerHeight / 2);
    };

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchmove', onTouchMove, false);
    window.addEventListener('resize', onWindowResize, false);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      containerRef.current!.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;