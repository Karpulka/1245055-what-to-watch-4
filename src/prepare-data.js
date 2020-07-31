export const prepareFilmData = (film) => ({
  id: film.id,
  title: film.name,
  src: film.poster_image,
  background: film.background_image,
  preview: film.preview_image,
  genre: film.genre,
  year: film.released,
  video: film.preview_video_link,
  fullVideo: film.video_link,
  description: film.description,
  rating: film.rating,
  voiceCount: film.scores_count,
  director: film.director,
  actorList: film.starring,
  runtime: film.run_time,
  isFavorite: film.is_favorite
});

export const prepareCommentDataForShow = (comment) => ({
  id: comment.id,
  user: comment.user.name,
  rating: comment.rating,
  comment: comment.comment,
  date: comment.date
});
