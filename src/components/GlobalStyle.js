import styled, { createGlobalStyle } from "styled-components"
import media from "../utils/media"
import ObjectSansRegular from "../../static/font/ObjectSans-Regular.otf"
import ObjectSansHeavy from "../../static/font/ObjectSans-Heavy.otf"
import ObjectSansSlanted from "../../static/font/ObjectSans-Slanted.otf"
import ObjectSansHeavySlanted from "../../static/font/ObjectSans-HeavySlanted.otf"

const scale = 1.45

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: Object Sans;
		font-weight: normal;
		src: url(${ObjectSansRegular}) format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-weight: bold;
		src: url(${ObjectSansHeavy}) format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-style: italic;
		src: url(${ObjectSansSlanted}) format("opentype");
	}

	@font-face {
		font-family: Object Sans;
		font-weight: bold;
		font-style: italic;
		src: url(${ObjectSansHeavySlanted}) format("opentype");
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

	${media.xSmallOnly`--size-m: 15px;`}
	${media.smallOnly`--size-m: 15px;`}
	${media.mediumOnly`--size-m: 16px;`}
	${media.largeOnly`--size-m: 18px;`}
	${media.xLargeOnly`--size-m: 20px;`}
	--size-xxs: calc(var(--size-m) / ${Math.pow(scale, 3)});
	--size-xs: calc(var(--size-m) / ${Math.pow(scale, 2)});
	--size-s: calc(var(--size-m) / ${scale});
	--size-l: calc(var(--size-m) * ${scale});
	--size-xl: calc(var(--size-m) * ${Math.pow(scale, 2)});
	--size-xxl: calc(var(--size-m) * ${Math.pow(scale, 3)});
	--size-xxxl: calc(var(--size-m) * ${Math.pow(scale, 4)});

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
    color: var(--white);
    &:focus {
      outline-color: var(--white);
    }
    &:hover {
      color: var(--lightgray);
      outline-color: var(--lightgray);
    }
    &:active,
    &:visited {
      color: var(--gray);
      outline-color: var(--gray);
    }
  }
`

export default GlobalStyle
