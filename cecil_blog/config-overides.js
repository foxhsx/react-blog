const {
  override,
  addDecoratorsLegacy,
  addBundleVisualizer,
  addWebpackAlias,
  addWebpackResolve,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    Component: path.resolve(__dirname, "src/components/"),
  }),

  addWebpackResolve({
    extensions: [".jsx", ".js"],
  })
);
