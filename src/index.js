import React from "react";
import ReactDOM from "react-dom";
import MovieCard from "./MovieItem";
import AddMovieModal from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

let rate = [0, 1, 2, 3, 4];
let movies = [
  {
    rate: "★★★★★",
    filmName: "titanic",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
  },
  {
    rate: "★★★",
    filmName: "the wolf of wall street",
    picture:
      "https://media.takealot.com/covers_tsins/31270907/31270907-1-zoom.JPG"
  },
  {
    rate: "★★★",
    filmName: "how to train your dragon",
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/81pj4tb6LEL._SY445_.jpg"
  },
  {
    rate: "★★★★★",
    filmName: "american pie 2",
    picture:
      "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/1d/bb/bf/1dbbbfac-8198-71d6-c36c-7ba7b91739a1/source/1200x630bb.jpg"
  },
  {
    rate: "★★★★",
    filmName: "la la land",
    picture:
      "https://images-na.ssl-images-amazon.com/images/I/91PaWpDPwkL._SY445_.jpg"
  },
  {
    rate: "★★★",
    filmName: "zootopia",
    picture:
      "https://is5-ssl.mzstatic.com/image/thumb/Video128/v4/63/19/1c/63191c4a-de4a-f1d5-444f-3ab6b6aa7cb5/source/1200x630bb.jpg"
  },
  {
    rate: "★★★",
    filmName: "captain tunisia",
    picture:
      "https://pre00.deviantart.net/add2/th/pre/i/2015/123/e/6/captain_tunisia_fanart_by_liloufranchise-d8rzacc.jpg"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      rate: -1,
      movies: movies
    };
  }

  onChange = value => {
    this.setState({
      search: value
    });
  };
  getIndex = value => {
    this.setState({
      rate: value
    });
  };

  onAddMovie = value => {
    this.setState({
      movies: this.state.movies.concat(value)
    });
  };

  render() {
    const filtredMovies = this.state.movies.filter(
      e =>
        e.filmName.indexOf(this.state.search) !== -1 &&
        e.rate.length > this.state.rate
    );

    return (
      <div className="App">
        <div className="header">
          <img
            className="logo-img"
            src="http://biotafilms.com/en/img/logo_only.png"
          />
          <form class="example" action="action_page.php">
            <input
              className="searchingbar"
              type="text"
              placeholder="Search.."
              name="search"
              onChange={e => this.onChange(e.target.value)}
            />
          </form>
          <div className="header-film-rating">
            <p>minimum rating</p>
            {rate.map((e, i) => (
              <span
                onClick={() => this.getIndex(i)}
                style={{ color: this.state.rate >= i ? "yellow" : "" }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="film-container">
          {filtredMovies.map((el, i) => <MovieCard key={i} movie={el} />)}
          <div className="movie-frame">
            <a href="#" className="add-movie">
              <AddMovieModal
                addMovieFunction={value => this.onAddMovie(value)}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
