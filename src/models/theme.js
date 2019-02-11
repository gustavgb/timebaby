import PropTypes from 'prop-types'
import { css } from 'styled-components'

export const propModel = PropTypes.shape({

})

const commonTheme = {
  lightTransition: css`
    transition: all 0.5s linear;
  `,
  width: css`
    width: 800px;

    @media (max-width: 800px) {
      width: auto;
    }
  `,
  clearfix: css`
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  `
}

export const stateModels = {
  light: {
    ...commonTheme,
    isDark: false,
    textColor: 'black',
    background: '#ededed',
    foreground: 'white',
    border: '#bbb',
    ctaColors: {
      a: '#00fc50'
    }
  },
  dark: {
    ...commonTheme,
    isDark: true,
    textColor: 'white',
    background: '#333',
    foreground: '#777',
    border: '#555',
    ctaColors: {
      a: '#00c030'
    }
  }
}