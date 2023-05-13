import { CoreSchedule, World } from "thyseus";

import { corePlugin } from "./plugin";

/**
 * Stores the ECS world and manages the game loop.
 */
export class Engine {
  readonly world: World;

  #animationFrame = 0;
  #fixedInterval = 0;

  /**
   * Creates a new WorldBuilder, with all core components and systems registered.
   */
  static createWorld() {
    const world = World.new();
    corePlugin(world);
    return world;
  }

  /**
   * Should not be called directly. Use `Engine.create` instead.
   */
  constructor(world: World) {
    this.world = world;
  }

  /**
   * Starts the engine.
   */
  async start() {
    this.stop();
    await this.world.runSchedule(CoreSchedule.Startup);

    this.#startMainLoop();
    this.#startFixedLoop();
  }

  #startMainLoop() {
    this.#animationFrame = requestAnimationFrame(this.#mainLoop.bind(this));
  }

  async #mainLoop() {
    await this.world.runSchedule(CoreSchedule.Main);
    this.#animationFrame = requestAnimationFrame(this.#mainLoop.bind(this));
  }

  #startFixedLoop() {
    this.#fixedInterval = setInterval(this.#fixedLoop.bind(this), 1000 / 60);
  }

  async #fixedLoop() {
    await this.world.runSchedule(CoreSchedule.FixedUpdate);
  }

  /**
   * Stops the engine.
   */
  stop() {
    cancelAnimationFrame(this.#animationFrame);
    clearInterval(this.#fixedInterval);
  }
}
