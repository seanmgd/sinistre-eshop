import { files, select, text } from '@storybook/addon-knobs'
import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components'

export default {
  title: 'Data display/Card',
  component: CardItem,
}

const Container = styled.div`
  width: 30%;
`
export const ToStorybook = () => (
  <Container>
    <CardItem
      to="/"
      label={text('label', 'Demo label')}
      labelSize={select(
        'labelSize',
        CardItem.SIZES,
        CardItem.defaultProps.labelSize,
      )}
      labelColor={select(
        'labelColor',
        CardItem.COLORS,
        CardItem.defaultProps.labelColor,
      )}
      hoverColor={select(
        'hoverColor',
        CardItem.COLORS,
        CardItem.defaultProps.hoverColor,
      )}
      imgUrl={files('imgUrl', '.jpg, .png, .jpeg', '')}
    />
  </Container>
)

ToStorybook.story = {
  name: 'CardItem',
}
