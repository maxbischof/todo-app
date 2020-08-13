import React from 'react'
import GlobalStyles from '../src/GlobalStyles.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
export const decorators = [(Story) => <React.Fragment>
  <GlobalStyles />
  <Story/>
</React.Fragment>];