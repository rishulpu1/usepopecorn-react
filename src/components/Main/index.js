import BoxList from "./BoxList";
import WatchedList from "./WatchedList";

export default function Main({
  tempMovieData,
  movies,
  tempWatchedData,
  watched,
}) {
  return (
    <main className="main">
      <BoxList movies={movies} />
      <WatchedList watched={watched} />
    </main>
  );
}
