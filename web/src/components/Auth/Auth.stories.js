// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Auth {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Auth from './Auth'

export const generated = () => {
  return <Auth />
}

export default {
  title: 'Components/Auth',
  component: Auth,
}
