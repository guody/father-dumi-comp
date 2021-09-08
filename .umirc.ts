import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'UI组件库',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/c0bfa81a175d66c9ecd5555629e57dc8_121_121.png',
  outputPath: 'docs-dist',
  description: '用于移动端开发的组件库',
  resolve: {
    includes: ['docs', 'src/components']
  }
  // more config: https://d.umijs.org/config
});
