import React from 'react'

export const ToggleIcon = () => {
  return (
    <>
      <svg
        width='47'
        height='25'
        viewBox='0 0 47 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='47' height='25' fill='#E5E5E5' />
        <g clipPath='url(#clip0_2133_70898)'>
          <rect
            width='1440'
            height='8106'
            transform='translate(-1009 -4208)'
            fill='white'
          />
          <rect
            width='1016'
            height='8024'
            transform='translate(-625 -4208)'
            fill='white'
          />
          <g filter='url(#filter0_dd_2133_70898)'>
            <g clipPath='url(#clip1_2133_70898)'>
              <path
                d='M-625 -4.99999C-625 -9.41827 -621.418 -13 -617 -13H63C67.4183 -13 71 -9.41828 71 -5V346H-625V-4.99999Z'
                fill='#334155'
              />
              <path
                d='M-625 -5C-625 -9.41828 -621.418 -13 -617 -13H69C73.4183 -13 77 -9.41828 77 -5V34H-625V-5Z'
                fill='#F8FAFC'
              />
              <rect y='0.5' width='45' height='20' rx='10' fill='#37C978' />
              <g filter='url(#filter1_d_2133_70898)'>
                <circle cx='35' cy='10.5' r='8' fill='white' />
              </g>
              <path
                d='M32 10.5L34.25 12.5L38 8.5'
                stroke='#37C978'
                strokeWidth='1.28571'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_dd_2133_70898'
            x='-632'
            y='-17'
            width='710'
            height='393'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feMorphology
              radius='1'
              operator='erode'
              in='SourceAlpha'
              result='effect1_dropShadow_2133_70898'
            />
            <feOffset dy='3' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.278431 0 0 0 0.05 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_2133_70898'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='0.5' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.0470588 0 0 0 0 0.101961 0 0 0 0 0.294118 0 0 0 0.24 0'
            />
            <feBlend
              mode='normal'
              in2='effect1_dropShadow_2133_70898'
              result='effect2_dropShadow_2133_70898'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect2_dropShadow_2133_70898'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_d_2133_70898'
            x='23.9524'
            y='2.5'
            width='22.0952'
            height='22.0952'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='3.04762' />
            <feGaussianBlur stdDeviation='1.52381' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0.183261 0 0 0 0 0.18113 0 0 0 0.15 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_2133_70898'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_2133_70898'
              result='shape'
            />
          </filter>
          <clipPath id='clip0_2133_70898'>
            <rect
              width='1440'
              height='8106'
              fill='white'
              transform='translate(-1009 -4208)'
            />
          </clipPath>
          <clipPath id='clip1_2133_70898'>
            <path
              d='M-625 -4.99999C-625 -9.41827 -621.418 -13 -617 -13H63C67.4183 -13 71 -9.41828 71 -5V346H-625V-4.99999Z'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
