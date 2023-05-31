import { Entity, EntityCommands, initStruct, struct } from "thyseus";

@struct
export class Velocity {
  @struct.f32 declare x: number;
  @struct.f32 declare y: number;
  @struct.f32 declare z: number;

  constructor(x = 0, y = 0, z = 0) {
    initStruct(this);

    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

@struct
export class BoxCollider {
  @struct.array({ length: 3, type: "f32" }) declare size: [
    number,
    number,
    number
  ];

  constructor(size: Readonly<[number, number, number]> = [1, 1, 1]) {
    initStruct(this);

    this.size[0] = size[0];
    this.size[1] = size[1];
    this.size[2] = size[2];
  }
}

@struct
export class SphereCollider {
  @struct.f32 declare radius: number;

  constructor(radius = 0.5) {
    initStruct(this);

    this.radius = radius;
  }
}

@struct
export class CapsuleCollider {
  @struct.f32 declare radius: number;
  @struct.f32 declare height: number;

  constructor(radius = 0.5, height = 1) {
    initStruct(this);

    this.radius = radius;
    this.height = height;
  }
}

@struct
export class CylinderCollider {
  @struct.f32 declare radius: number;
  @struct.f32 declare height: number;

  constructor(radius = 0.5, height = 1) {
    initStruct(this);

    this.radius = radius;
    this.height = height;
  }
}

@struct
export class HullCollider {
  @struct.u64 declare meshId: bigint;

  constructor(mesh?: Entity | EntityCommands) {
    initStruct(this);

    if (mesh) this.meshId = mesh.id;
  }
}

@struct
export class MeshCollider {
  @struct.u64 declare meshId: bigint;

  constructor(mesh?: Entity | EntityCommands) {
    initStruct(this);

    if (mesh) this.meshId = mesh.id;
  }
}

@struct
export class StaticBody {}

@struct
export class KinematicBody {}

@struct
export class DynamicBody {}

@struct
export class CharacterController {
  @struct.f32 declare offset: number;

  @struct.f32 declare maxSlopeClimbAngle: number;
  @struct.f32 declare minSlopeSlideAngle: number;

  @struct.bool declare enableAutostep: boolean;
  @struct.f32 declare maxStepHeight: number;
  @struct.f32 declare minStepWidth: number;
  @struct.bool declare stepOnDynamicBodies: boolean;

  @struct.bool declare enableSnapToGround: boolean;
  @struct.f32 declare snapToGroundDistance: number;

  @struct.bool declare applyImpulsesToDynamicBodies: boolean;

  @struct.bool declare isGrounded: boolean;

  constructor(offset = 0.01) {
    initStruct(this);

    this.offset = offset;

    this.maxSlopeClimbAngle = (45 * Math.PI) / 180;
    this.minSlopeSlideAngle = (30 * Math.PI) / 180;

    this.enableAutostep = true;
    this.maxStepHeight = 0.5;
    this.minStepWidth = 0.2;
    this.stepOnDynamicBodies = false;

    this.enableSnapToGround = true;
    this.snapToGroundDistance = 0.1;

    this.applyImpulsesToDynamicBodies = true;
  }
}

/**
 * @see https://rapier.rs/docs/user_guides/javascript/scene_queries/#ray-casting
 */
@struct
export class Raycast {
  @struct.array({ length: 3, type: "f32" }) declare origin: [
    number,
    number,
    number
  ];
  @struct.array({ length: 3, type: "f32" }) declare direction: [
    number,
    number,
    number
  ];
  @struct.f32 declare maxToi: number;
  @struct.bool declare solid: boolean;

  /**
   * Entity ID of a rigid body that should be excluded from the ray cast.
   */
  @struct.u64 declare excludeRigidBodyId: bigint;

  @struct.bool declare hit: boolean;
  @struct.f32 declare hitToi: number;

  constructor(
    origin: Readonly<[number, number, number]> = [0, 0, 0],
    direction: Readonly<[number, number, number]> = [0, 0, 0],
    maxToi = 1000,
    solid = false
  ) {
    initStruct(this);

    this.origin[0] = origin[0];
    this.origin[1] = origin[1];
    this.origin[2] = origin[2];

    this.direction[0] = direction[0];
    this.direction[1] = direction[1];
    this.direction[2] = direction[2];

    this.maxToi = maxToi;
    this.solid = solid;
  }
}
