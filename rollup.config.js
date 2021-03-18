import commonjs from "@rollup/plugin-commonjs";
export default [
  {
    input: "./node_modules/axios/dist/axios.js",
    output: {
      file: "./index.js",
      format: "es",
    },
    plugins: [commonjs()],
  },
];
