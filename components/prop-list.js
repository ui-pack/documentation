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

const humanizeType = type => {
  switch (type) {
    case 'func':
      return 'function'
    case 'bool':
      return 'boolean'
    default:
      return type
  }
}

const getType = typeObject => {
  if(!typeObject.type.name) return humanizeType(typeObject.type)
  const withHumanized = typeObject.type.params.map(it => humanizeType(it))
  return `${typeObject.type.name}: ${withHumanized.join(', ')}`
}

/* TODO
 Turn source to a string that can be parsed
*/
export default function PropList({ source }) {
  if(!source) return null
  const types = Object.keys(source.types)
  return (
    <Stack gap="15px">
      {types.map(propType => (
        <Section key={propType}>
          <Stack gap="12px">
          <h6>{propType}</h6>
          <p>
            <Tag>{getType(source.types[propType])}</Tag>
            <InlineSpacer axis="horizontal" space="10" />
            {source.types[propType].required && <Tag>required</Tag>}
          </p>
          {
            source.types[propType].default && (
              <p><strong>Default:</strong> {source.types[propType].default}</p>
            )
          }
          <p>{source.types[propType].description}</p>
          </Stack>
        </Section>
      ))}
    </Stack>
  )
}