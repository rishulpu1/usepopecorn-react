import BoxList from "./BoxList";
import WatchedList from "./WatchedList";

export default function Main({ movies, watched }) {
  return (
    <main className="main">
      <BoxList movies={movies} />
      <WatchedList watched={watched} />
    </main>
  );
}
