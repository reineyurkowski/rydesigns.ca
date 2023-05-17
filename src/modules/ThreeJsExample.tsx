import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef(new THREE.Vector2());
  const target = useRef(new THREE.Vector2());
  const windowHalf = useRef(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2));
  const isDragging = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(22, window.innerWidth / (window.innerHeight/2), 0.1, 1000);
    camera.position.z = 5; // Adjust the camera position along the z-axis
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 50, window.innerHeight/2);
    containerRef.current.appendChild(renderer.domElement);

    // Create a torus geometry
    const geometry = new THREE.TorusGeometry(0.6, 0.2, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xa566d9 });
    const torus = new THREE.Mesh(geometry, material);

    // Add the torus to the scene
    scene.add(torus);

    // Set up animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the torus if not dragging
      if (!isDragging.current) {
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.02;
      }

      // Update camera position based on mouse movement
      camera.position.x += (target.current.x - camera.position.x) * 0.05;
      camera.position.y += (-target.current.y - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Event listeners for mouse interactions
    const onPointerDown = () => {
      isDragging.current = true;
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    const onPointerMove = (event: THREE.Event) => {
      event.preventDefault();

      if (isDragging.current) {
        mouse.current.x = (event.clientX / window.innerWidth) * 10;
        mouse.current.y = -(event.clientY / window.innerHeight) * 10;
        target.current = mouse.current.clone();
      }
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth - 50, window.innerHeight);
      windowHalf.current.set(window.innerWidth / 2, window.innerHeight / 2);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown, false);
    renderer.domElement.addEventListener('pointerup', onPointerUp, false);
    renderer.domElement.addEventListener('pointermove', onPointerMove, false);
    window.addEventListener('resize', onWindowResize, false);

    // Clean up on component unmount
    return () => {
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      containerRef.current!.removeChild(renderer.domElement);
    };
    }, []);
    
    return <div ref={containerRef} />;
    };
    
    export default ThreeScene;
