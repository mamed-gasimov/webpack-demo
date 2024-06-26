import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // for router to work
    historyApiFallback: true,
    hot: true,
  };
}
