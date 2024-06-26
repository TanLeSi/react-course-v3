import React from 'react'
import Color from './Color'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {
        colors.map((color) => {
          const colorParams = { ...color, hex: color.hex };
          return (
            <Color {...colorParams} key={nanoid()}></Color>
          )
        })
      }
    </section >
  )
}

export default ColorList
