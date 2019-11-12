import styled, { createGlobalStyle } from "styled-components"
import media from "../utils/media"
import ObjectSansRegular from "../../static/font/ObjectSans-Regular.otf"
import ObjectSansHeavy from "../../static/font/ObjectSans-Heavy.otf"
import ObjectSansSlanted from "../../static/font/ObjectSans-Slanted.otf"
import ObjectSansHeavySlanted from "../../static/font/ObjectSans-HeavySlanted.otf"

const scale = 1.5

export const Root = styled.main`
	--black: #000;
	--lightgray: #e5e5e5;
	--gray: #868686;
	--white: #fff;
	--highlight: #1e00c2;

	${media.xSmallOnly`--m: 16px;`}
	${media.smallOnly`--m: 17px;`}
	${media.mediumOnly`--m: 18px;`}
	${media.largeOnly`--m: 19px;`}
	${media.xLargeOnly`--m: 21px;`}
	--xxs: calc(var(--m) / ${Math.pow(scale, 3)});
	--xs: calc(var(--m) / ${Math.pow(scale, 2)});
	--s: calc(var(--m) / ${scale});
	--l: calc(var(--m) * ${scale});
	--xl: calc(var(--m) * ${Math.pow(scale, 2)});
	--xxl: calc(var(--m) * ${Math.pow(scale, 3)});
	--xxxl: calc(var(--m) * ${Math.pow(scale, 4)});
`

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

	h1, h2, h3, p, ul {
		margin: 0 0 var(--m) 0;
	}

	h1 {
		line-height: var(--xxl);
		font-size: var(--xl);
	}

	h2 {
		line-height: var(--xl);
		font-size: var(--l);
	}

	p,
	h3,
	ul {
		line-height: var(--l);
		font-size: var(--m);
	}

	ul, ol {
		padding-left: calc(24px + var(--xxs));
	}

	li:not(:last-child) {
		margin-bottom: var(--xxs);
	}

	p, li {
		&:last-child {
			margin-bottom: 0;
		}
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
