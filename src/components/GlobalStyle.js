import styled, { createGlobalStyle } from "styled-components"
import media from "../utils/media"
import ObjectSansRegular from "../../static/font/ObjectSans-Regular.otf"
import ObjectSansHeavy from "../../static/font/ObjectSans-Heavy.otf"
import ObjectSansSlanted from "../../static/font/ObjectSans-Slanted.otf"
import ObjectSansHeavySlanted from "../../static/font/ObjectSans-HeavySlanted.otf"

const scale = 1.2

export const Root = styled.main`
	--black: #000;
	--lightgray: #e5e5e5;
	--gray: #868686;
	--white: #fff;
	--highlight: #1e00c2;

	${media.xSmallOnly`--m: 16px;`}
	${media.smallOnly`--m: 17px;`}
	${media.mediumOnly`--m: 17px;`}
	${media.largeOnly`--m: 18px;`}
	${media.xLargeOnly`--m: 19px;`}
	--10xs: calc(var(--m) / ${Math.pow(scale, 11)});
	--7xs: calc(var(--m) / ${Math.pow(scale, 8)});
	--5xs: calc(var(--m) / ${Math.pow(scale, 6)});
	--3xs: calc(var(--m) / ${Math.pow(scale, 4)});
	--xxs: calc(var(--m) / ${Math.pow(scale, 3)});
	--xs: calc(var(--m) / ${Math.pow(scale, 2)});
	--s: calc(var(--m) / ${scale});
	--l: calc(var(--m) * ${scale});
	--xl: calc(var(--m) * ${Math.pow(scale, 2)});
	--xxl: calc(var(--m) * ${Math.pow(scale, 3)});
	--3xl: calc(var(--m) * ${Math.pow(scale, 4)});
	--5xl: calc(var(--m) * ${Math.pow(scale, 6)});
	--8xl: calc(var(--m) * ${Math.pow(scale, 9)});
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

	h1, h2, h3, h4, p, ul {
		margin: 0 0 var(--xs) 0;
	}

	h1 {
		line-height: var(--5xl);
		font-size: var(--3xl);
	}

	h2 {
		line-height: var(--4xl);
		font-size: var(--xxl);
	}

	h3 {
		line-height: var(--2xl);
		font-size: var(--l);
	}

	p,
	ul {
		line-height: var(--xl);
		font-size: var(--m);
	}

	small {
		line-height: var(--l);
		font-size: var(--s);
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

export const Label = styled.h4`
	font-weight: 400;
  text-transform: uppercase;
	line-height: var(--l);
	font-size: var(--s);
`

export default GlobalStyle
