import { Geometry, IsNode, Mesh } from "@lattice-engine/core";
import { BufferGeometry, Mesh as ThreeMesh } from "three";
import { defineSystem, Entity } from "thyseus";

import { RenderStore } from "../RenderStore";

/**
 * Syncs IsMesh components with Three.js Mesh objects.
 */
export const meshBuilder = defineSystem(
  ({ Res, Query, With }) => [
    Res(RenderStore),
    Query([Entity, Mesh], With([IsNode, Geometry])),
  ],
  (store, entities) => {
    const ids: bigint[] = [];

    for (const [{ id }, mesh] of entities) {
      ids.push(id);

      let object = store.meshes.get(id);

      // Create new objects
      if (!object) {
        object = new ThreeMesh();
        store.meshes.set(id, object);
      }

      // Sync object properties
      const materialObject = store.materials.get(mesh.material);
      object.material = materialObject ?? store.defaultMaterial;

      const geometryObject = store.geometries.get(id);
      object.geometry = geometryObject ?? new BufferGeometry();

      const nodeObject = store.nodes.get(id);
      if (nodeObject) nodeObject.add(object);
      else object.removeFromParent();
    }

    // Remove objects that no longer exist
    for (const [id] of store.meshes) {
      if (!ids.includes(id)) {
        const object = store.meshes.get(id);
        object?.removeFromParent();

        store.meshes.delete(id);
      }
    }
  }
);
