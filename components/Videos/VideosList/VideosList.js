import PropTypes from "prop-types"
import VideoItem from "./VideoItem/VideoItem"

import SectionTitle from "components/Ui/SectionTitle/SectionTitle"

export default function VideosList({ videos }) {
  return (
    <>
      <SectionTitle title="Últimos vídeos" />
      {videos.map((video) => (
        <VideoItem video={video} key={video.slug} />
      ))}
    </>
  )
}

VideosList.propTypes = {
  videos: PropTypes.array.isRequired,
}
