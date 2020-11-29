import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import React from 'react'
import { ImgCard } from './CardItem.styles'

const SIZES = ['small', 'medium', 'large', 'x-large']
const COLORS = ['black', 'grey', 'dark-grey', 'light-grey']

const CardItem = ({
  to,
  imgUrl,
  label,
  labelSize,
  labelColor,
  hoverColor,
  ...rest
}) => (
  <Link to={to} {...rest}>
    <ImgCard
      imgUrl={imgUrl}
      hoverColor={hoverColor}
      label={label}
      labelSize={labelSize}
      labelColor={labelColor}
    />
  </Link>
)

CardItem.propTypes = {
  to: PropTypes.string.isRequired,
  labelColor: PropTypes.oneOf(COLORS).isRequired,
  labelSize: PropTypes.oneOf(SIZES).isRequired,
  hoverColor: PropTypes.oneOf(COLORS).isRequired,
  imgUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

CardItem.defaultProps = {
  labelColor: 'grey',
  labelSize: 'small',
  hoverColor: 'black',
}

CardItem.SIZES = SIZES
CardItem.COLORS = COLORS

export default CardItem
