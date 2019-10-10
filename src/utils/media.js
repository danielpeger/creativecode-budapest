import { css } from 'styled-components';

const small = 600; //mobile
const medium = 900; //tablet
const large = 1200;	//laptop
const xLarge = 1800; //desktop

export const breakpoints = {
	xSmallMax: small - 1,
	smallMin: small,
	smallMax: medium - 1,
	mediumMin: medium,
	mediumMax: large - 1,
	largeMin: large,
	largeMax: xLarge - 1,
	xLargeMin: xLarge
};

export default {
	xSmallOnly: (...args) => css`
		@media only screen and (max-width: ${breakpoints.xSmallMax}px) {
			${css(...args)}
		}
	`, 
	smallOnly: (...args) => css`
		@media only screen and (min-width: ${breakpoints.smallMin}px) and (max-width: ${breakpoints.smallMax}px) {
			${css(...args)}
		}
	`,
	smallDown: (...args) => css`
		@media only screen and (max-width: ${breakpoints.smallMax}px) {
			${css(...args)}
		}
	`,
	smallUp: (...args) => css`
		@media only screen and (min-width: ${breakpoints.smallMin}px) {
			${css(...args)}
		}
	`,
	mediumOnly: (...args) => css`
		@media only screen and (min-width: ${breakpoints.mediumMin}px) and (max-width: ${breakpoints.mediumMax}px) {
			${css(...args)}
		}
	`,
	mediumDown: (...args) => css`
		@media only screen and (max-width: ${breakpoints.mediumMax}px) {
			${css(...args)}
		}
	`,
	mediumUp: (...args) => css`
		@media only screen and (min-width: ${breakpoints.mediumMin}px) {
			${css(...args)}
		}
	`,
	largeOnly: (...args) => css`
		@media only screen and (min-width: ${breakpoints.largeMin}px) and (max-width: ${breakpoints.largeMax}px) {
			${css(...args)}
		}
	`,
	largeDown: (...args) => css`
		@media only screen and (max-width: ${breakpoints.largeMax}px) {
			${css(...args)}
		}
	`,
	largeUp: (...args) => css`
		@media only screen and (min-width: ${breakpoints.largeMin}px) {
			${css(...args)}
		}
	`,
	xlargeOnly: (...args) => css`
		@media only screen and (min-width: ${breakpoints.xLargeMin}px) {
			${css(...args)}
		}
	`,
};