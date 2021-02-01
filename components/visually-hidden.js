import styled from 'styled-components'

export default function VisuallyHidden({ as: Component = 'span', children }) {
  const R = styled(Component)`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  `
  return <R>{children}</R>
}