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

	${media.xSmallOnly`--size-s: 12px;`}
	${media.smallOnly`--size-s: 13px;`}
	${media.mediumOnly`--size-s: 14px;`}
	${media.largeOnly`--size-s: 15px;`}
	${media.xLargeOnly`--size-s: 16px;`}
	--size-xxs: calc(var(--size-s) / ${Math.pow(scale, 2)});
	--size-xs: calc(var(--size-s) / ${scale});
	--size-m: calc(var(--size-s) * ${scale});
	--size-l: calc(var(--size-s) * ${Math.pow(scale, 2)});
	--size-xl: calc(var(--size-s) * ${Math.pow(scale, 3)});
	--size-xxl: calc(var(--size-s) * ${Math.pow(scale, 4)});
	--size-xxxl: calc(var(--size-s) * ${Math.pow(scale, 5)});

	h1,
	h2,
	h3 {
		margin: 0;
	}

	h1 {
		line-height: var(--size-xxl);
		font-size: var(--size-xl);
	}

	h2 {
		line-height: var(--size-xl);
		font-size: var(--size-l);
	}

	p,
	h3,
	ul {
		line-height: var(--size-l);
		font-size: var(--size-m);
		margin: 0 0 var(--size-m) 0;
	}

	a {
		color: var(--black);
		font-style: italic;
		&:focus {
			outline-color: var(--black);
			outline-style: dashed;
			outline-width: 2px;
		}
		&:hover,
		&:visited {
			color: var(--gray);
			outline-color: var(--gray);
		}
		&:active {
			outline-color: var(--lightgray);
			color: var(--lightgray);
		}
	}
`

export default GlobalStyle
