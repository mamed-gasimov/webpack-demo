import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import type { Configuration as _DevServerConfiguration } from "webpack-dev-server";

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const mode = env.mode ?? "development";
  const isDev = mode === "development";

  const config: webpack.Configuration = {
    mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
