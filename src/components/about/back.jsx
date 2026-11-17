import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Back = () => {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#c9ada7" attach="material" distort={0.5} speed={2} />
      </Sphere>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 4, 3]} />
    </>
  );
};

export default Back;
