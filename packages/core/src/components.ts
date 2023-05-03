import { component, Entity, field, Type } from "@lastolivegames/becsy";

const vec3 = Type.vector(Type.float32, 3);
const vec4 = Type.vector(Type.float32, 4);

@component
export class Parent {
  @field.ref declare value: Entity;
}

@component
export class CanvasTarget {
  @field.object declare canvas: HTMLCanvasElement;

  static options = {
    capacity: 1,
  };
}

@component
export class RenderView {
  @field.ref declare scene: Entity;
  @field.ref declare camera: Entity;
}

@component
export class Scene {
  @field.ref declare root: Entity;
}

@component
export class PerspectiveCamera {
  @field({ defaultValue: 75, type: Type.float32 }) declare fov: number;
  @field({ defaultValue: 1, type: Type.float32 }) declare aspect: number;
  @field({ defaultValue: 0.1, type: Type.float32 }) declare near: number;
  @field({ defaultValue: 1000, type: Type.float32 }) declare far: number;
}

@component
export class Node {
  @field({ defaultValue: [0, 0, 0], type: vec3 }) declare position: number[];
  @field({ defaultValue: [0, 0, 0, 1], type: vec4 }) declare rotation: number[];
  @field({ defaultValue: [1, 1, 1], type: vec3 }) declare scale: number[];
}

@component
export class Mesh {}

@component
export class Geometry {}

@component
export class Material {
  @field.float32.vector(4) declare color: number[];
}

@component
export class SceneObject {
  @field.object declare object: THREE.Scene;
}

@component
export class PerspectiveCameraObject {
  @field.object declare object: THREE.PerspectiveCamera;
}

@component
export class NodeObject {
  @field.object declare object: THREE.Object3D;
}

@component
export class MeshObject {
  @field.object declare object: THREE.Mesh;
}

@component
export class MaterialObject {
  @field.object declare object: THREE.Material;
}
