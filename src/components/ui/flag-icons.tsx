import type React from 'react'

interface FlagIconProps {
  className?: string
}

export const USFlag: React.FC<FlagIconProps> = ({ className = 'w-6 h-4' }) => (
  <svg
    aria-label='United States flag'
    className={className}
    role='img'
    viewBox='0 0 60 40'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect fill='#B22234' height='40' width='60' />
    <rect fill='white' height='3.08' width='60' y='3.08' />
    <rect fill='white' height='3.08' width='60' y='9.23' />
    <rect fill='white' height='3.08' width='60' y='15.38' />
    <rect fill='white' height='3.08' width='60' y='21.54' />
    <rect fill='white' height='3.08' width='60' y='27.69' />
    <rect fill='white' height='3.08' width='60' y='33.85' />
    <rect fill='#3C3B6E' height='21.54' width='24' />
    <g fill='white'>
      <circle cx='3' cy='3' r='0.5' />
      <circle cx='9' cy='3' r='0.5' />
      <circle cx='15' cy='3' r='0.5' />
      <circle cx='21' cy='3' r='0.5' />
      <circle cx='6' cy='6' r='0.5' />
      <circle cx='12' cy='6' r='0.5' />
      <circle cx='18' cy='6' r='0.5' />
      <circle cx='3' cy='9' r='0.5' />
      <circle cx='9' cy='9' r='0.5' />
      <circle cx='15' cy='9' r='0.5' />
      <circle cx='21' cy='9' r='0.5' />
      <circle cx='6' cy='12' r='0.5' />
      <circle cx='12' cy='12' r='0.5' />
      <circle cx='18' cy='12' r='0.5' />
      <circle cx='3' cy='15' r='0.5' />
      <circle cx='9' cy='15' r='0.5' />
      <circle cx='15' cy='15' r='0.5' />
      <circle cx='21' cy='15' r='0.5' />
      <circle cx='6' cy='18' r='0.5' />
      <circle cx='12' cy='18' r='0.5' />
      <circle cx='18' cy='18' r='0.5' />
    </g>
  </svg>
)

export const BrazilFlag: React.FC<FlagIconProps> = ({
  className = 'w-6 h-4'
}) => (
  <svg
    aria-label='Brazil flag'
    className={className}
    role='img'
    viewBox='0 0 60 40'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect fill='#009739' height='40' width='60' />
    <polygon fill='#FEDD00' points='30,5 55,20 30,35 5,20' />
    <circle cx='30' cy='20' fill='#012169' r='7' />
    <path
      d='M 25 17 Q 30 15 35 17'
      fill='none'
      stroke='white'
      strokeWidth='0.5'
    />
    <text
      fill='white'
      fontFamily='Arial'
      fontSize='2'
      textAnchor='middle'
      x='30'
      y='24'
    >
      ORDEM
    </text>
  </svg>
)
