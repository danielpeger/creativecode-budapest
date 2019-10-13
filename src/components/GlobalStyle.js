import styled, { createGlobalStyle } from "styled-components"
import media from "../utils/media"

const scale = 1.33
const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: Object Sans;
		font-weight: normal;
		src: url("../../static/font/ObjectSans-Regular.otf") format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-weight: bold;
		src: url("../../static/font/ObjectSans-Heavy.otf") format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-style: italic;
		src: url("../../static/font/ObjectSans-Slanted") format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-weight: bold;
		font-style: italic;
		src: url("../../static/font/ObjectSans-HeavySlanted") format("opentype");
	}
	
  body {
		margin: 0;
		padding: 0;
		font-family: Object Sans;
		background-color: #000;
		color: #FFF;
	}
	
	::selection {
		background: #1e00c2;
	}
`

export const Root = styled.main`
	--black: #000;
	--lightgray: #e5e5e5;
	--gray: #868686;
	--white: #fff;
	--highlight: #1e00c2;

	${media.xSmallOnly`--size-s: 8px;`}
	${media.smallOnly`--size-s: 9px;`}
	${media.mediumOnly`--size-s: 10px;`}
	${media.largeOnly`--size-s: 11px;`}
	${media.xLargeOnly`--size-s: 12px;`}
	--size-xxs: calc(var(--size-s) / ${Math.pow(scale, 2)});
	--size-xs: calc(var(--size-s) / ${scale});
	--size-m: calc(var(--size-s) * ${scale});
	--size-l: calc(var(--size-s) * ${Math.pow(scale, 2)});
	--size-xl: calc(var(--size-s) * ${Math.pow(scale, 3)});
	--size-xxl: calc(var(--size-s) * ${Math.pow(scale, 4)});
	--size-xxxl: calc(var(--size-s) * ${Math.pow(scale, 5)});
`

export default GlobalStyle
