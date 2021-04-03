import * as React from 'react'
import styled from 'styled-components'
import { mdx } from '@mdx-js/react'
import Masonry from '@ui-pack/react/masonry'
import InfiniteScroll from '@ui-pack/react/infinite-scroll'
import AspectRatio from '@ui-pack/react/aspect-ratio'

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 4px;
`

const Container = styled.div`
  height: 200px;
  padding: 10px;
  overflow: scroll;
  border: 2px solid #243d6f;
  > *{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

const fetch = typeof window !== 'undefined' ? window.fetch : () => Promise.resolve({})

const scope = {
  // libs
  mdx,
  fetch,
  React,
  // styles
  Image,
  Container,
  // components
  AspectRatio,
  InfiniteScroll,
  Masonry,
}

export default scope