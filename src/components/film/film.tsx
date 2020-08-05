import * as React from "react";
import VideoPlayer from "../video-player/video-palyer";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import {Link} from "react-router-dom";
import {Film} from "../../types";

interface Props {
  film: Film,
  onFilmHover: (film: Film) => void,
  onFilmBlur: () => void,
  onFilmClick: (id: number) => void,
  isStartPlaying?: boolean
}

const Film: React.FunctionComponent<Props> = (props: Props) => {
  const {film, onFilmHover, isStartPlaying, onFilmBlur, onFilmClick} = props;
  const {id, title, video, preview} = film;
  const VideoPlayerComponent = withVideoPlayer(VideoPlayer);

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmHover(film)} onMouseLeave={() => onFilmBlur()}>
    <div className="small-movie-card__image" onClick={() => onFilmClick(id)}>
      <VideoPlayerComponent src={video} poster={preview} width="280" height="175" isMuted={true} isStartPlaying={isStartPlaying} wasHover={!isStartPlaying}/>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

export default Film;
