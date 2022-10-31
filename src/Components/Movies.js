import Movie from "./Movie";

export default function Movies(props){
    const {movies = []} = props;

    return(
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )): (
                <div>
                    <h1>404 Error</h1>
                    <h5>Nothing Found</h5>
                </div>
            )}
        </div>
    )
}