// esm -> es module 浏览器环境
// cjs -> nodejs 环境（测试|ssr）
// umd -> 通过浏览器 script 引入的方式
// 默认 esm: 'rollup' 打包在一起，无法实现按需加载

export default {
  entry: 'src/index.js',
  esm: {
    type: 'babel',
    minify: false,
    importLibToEs: true
  },
  cjs: 'babel',
  umd: {
    name: 'myLib',
    file: './dist/yxp-design.js',
  },
  lessInBabelMode: true, // babel 模式下做 less 编译
  extractCSS: true,
  runtimeHelpers: true,
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  }
};