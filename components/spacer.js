import styled from 'styled-components';

function getHeight({ axis, space }) {
  return axis === 'horizontal' ? 1 : space;
}

function getWidth({ axis, space }) {
  return axis === 'vertical' ? 1 : space;
}

export const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

export const InlineSpacer = styled(Spacer)`
  display: inline-block;
`