export default function InfoIcon() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_1508_56927)'>
        <circle cx='24' cy='21' r='17' fill='white' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24 31C18.4772 31 14 26.5228 14 21C14 15.4772 18.4772 11 24 11C29.5228 11 34 15.4772 34 21C34 26.5228 29.5228 31 24 31ZM24 13C19.5817 13 16 16.5817 16 21C16 25.4183 19.5817 29 24 29C28.4183 29 32 25.4183 32 21C32 16.5817 28.4183 13 24 13ZM24 19.75C24.6904 19.75 25.25 20.3096 25.25 21V25C25.25 25.6904 24.6904 26.25 24 26.25C23.3096 26.25 22.75 25.6904 22.75 25V21C22.75 20.3096 23.3096 19.75 24 19.75ZM24 16C23.3096 16 22.75 16.5596 22.75 17.25C22.75 17.9404 23.3096 18.5 24 18.5C24.6904 18.5 25.25 17.9404 25.25 17.25C25.25 16.5596 24.6904 16 24 16Z'
          fill='#125BC9'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_1508_56927'
          x='0'
          y='0'
          width='48'
          height='48'
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
            result='effect1_dropShadow_1508_56927'
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
            result='effect1_dropShadow_1508_56927'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1508_56927'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
