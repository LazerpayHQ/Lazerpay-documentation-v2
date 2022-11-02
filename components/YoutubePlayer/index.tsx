import Style from './youtube.module.scss'

const YoutubePlayer = (props) => {
  const { src, title } = props
  return (
    <div className={Style.iframeContainer}>
      <iframe
        width='560'
        height='315'
        src={src}
        title={title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubePlayer
