import { Engine } from "lattice-engine/core";
import { GltfSchedules } from "lattice-engine/gltf";
import { buttonGroup, useControls } from "leva";
import { useCallback, useEffect, useState } from "react";
import { World } from "thyseus";

import { exportConfig } from "./handleExport";

export function useEngine(world: World | null) {
  const [engine, setEngine] = useState<Engine | null>(null);

  useEffect(() => {
    if (!world) return;

    const newEngine = new Engine(world);
    setEngine(newEngine);

    newEngine.start();

    return () => {
      setEngine(null);
      newEngine.destroy();
    };
  }, [world]);

  const exportScene = useCallback(() => {
    if (!engine) return;
    exportConfig.mode = "download";
    engine.queueSchedule(GltfSchedules.Export);
  }, [engine]);

  const testExport = useCallback(() => {
    if (!engine) return;
    exportConfig.mode = "test";
    engine.queueSchedule(GltfSchedules.Export);
  }, [engine]);

  useControls(
    {
      export: buttonGroup({
        glb: exportScene,
        test: testExport,
      }),
    },
    [exportScene]
  );

  return engine;
}
