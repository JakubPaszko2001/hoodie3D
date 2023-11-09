import React, { useRef } from "react";
import { Suspense } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const gltf = useLoader(GLTFLoader, "./models/hoodie2/untitled.gltf");
  const modelScale = [7, 7, 7];

  const directionalLight1Ref = useRef();
  const directionalLight2Ref = useRef();
  const directionalLight4Ref = useRef();

  //   useHelper(directionalLight1Ref, DirectionalLightHelper, 1, "white");
  //   useHelper(directionalLight2Ref, DirectionalLightHelper, 1, "red");
  //   useHelper(directionalLight4Ref, DirectionalLightHelper, 1, "red");

  const modelRef = useRef();

  useFrame((state, delta) => {
    // Rotate the model in the render loop
    modelRef.current.rotation.y += 0.005; // You can adjust the rotation speed
  });

  return (
    <>
      {/* <directionalLight
        ref={directionalLight1Ref}
        position={[0, 2, 5]}
        intensity={0.5}
        color={"#ff0000"}
      /> */}
      <directionalLight
        ref={directionalLight2Ref}
        position={[0, 2, 5]}
        intensity={3}
        // color={"#ff0000"}
      />
      {/* <directionalLight
        ref={directionalLight4Ref}
        position={[0, 5, 0]}
        intensity={0.5}
      /> */}
      <Suspense fallback={null}>
        <primitive
          ref={modelRef}
          object={gltf.scene}
          scale={modelScale}
          position={[0, 0, 0]}
        />
      </Suspense>
    </>
  );
};

export default Experience;
