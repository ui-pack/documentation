import styled from 'styled-components'
import Stack from './stack'
import { InlineSpacer  } from './spacer'
import Tag from './tag'

const Section = styled.section`
  h6{
    color: hsl(164deg 86% 33%);
    font-weight: 600;
  }
`

export default function PropList({ types }) {
  return (
    <Stack gap="15px">
      {types.map(prop => (
        <Section key={prop.name}>
          <Stack gap="12px">
          <h6>{prop.name}</h6>
          <p>
            <Tag>{prop.type}</Tag>
            <InlineSpacer axis="horizontal" space="10" />
            {prop.required && <Tag>required</Tag>}
          </p>
          {
            prop.default && (
              <p><strong>Default:</strong> {prop.default}</p>
            )
          }
          <p>{prop.description}</p>
          </Stack>
        </Section>
      ))}
    </Stack>
  )
}