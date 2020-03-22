import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1584894059533'); /* IE9 */
    src: url('./iconfont.eot?t=1584894059533#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1584894059533') format('woff'),
    url('./iconfont.ttf?t=1584894059533') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1584894059533#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
