import React , { Component } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from "../../config";
import HeroImage from "../elements/HeroImage/Heroimage";
import SearchBar from "../elements/SearchBar/Searchbar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThump from "../elements/MovieThumb/MovieThump";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spiner from "../elements/Spinner/Spiner";
import './Home.css';

class Home extends Component {
      state ={
           movies: [],
           heroimage: null,
           loading: false,
           currentpage: 0,
           totalpages: 0,
           searchterm: ''
      }

      componentDidMount() {
          this.setState({ loading: true});
          const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
          this.fetchItems(endpoint);
      }


      searchItems = (searchterm) => {
          let endpoint = '';
          this.setState({
              movies: [],
              loading: true,
              searchterm
          })

          if (searchterm === '') {
              endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
          } else {
              endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchterm}`;
          }

          this.fetchItems(endpoint);
      }

      loadmoreitems = () => {
          let endpoint = '';
          this.setState({ loading: true});

          if(this.state.searchterm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentpage + 1}`;

          } else {
                endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchterm}&page=${this.state.currentpage + 1}`;

          }

          this.fetchItems(endpoint);
      }

      fetchItems = (endpoint) => {
          fetch(endpoint) 
          .then(result => result.json())
          .then(result => {
              this.setState({
                  movies: [...this.state.movies, ...result.results],
                  heroimage: this.state.heroimage || result.results[0],
                  loading: false,
                  currentpage: result.page,
                  totalpages:  result.total_pages
              })
          })
      } 

      render() {
          return (
              <div className="rmdb-home">

                   {this.state.heroimage ?  

              <div>
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroimage.backdrop_path}`}
                        title={this.state.heroimage.original_title}
                        text={this.state.heroimage.overview}
                    />
                    <SearchBar callback={this.searchItems}/>
                  </div>  : null }
                  <div className="rmdb-home-grid">
                        <FourColGrid
                            header={this.state.searchterm ? 'Search Result' : 'Popular Movies'}
                            loading={this.state.loading}
                            >
                            {this.state.movies.map( (element, i) => {
                                  return <MovieThump
                                           key={i}
                                           clickable={true}
                                           image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                           movieId={element.id}
                                           movieName={element.original_title}
                                           />
                                })}
                        </FourColGrid>
                        {this.state.loading ? <Spiner/> : null}
                        {(this.state.currentpage <= this.state.totalpages && !this.state.loading) ?
                        <LoadMoreBtn text="Load More" onClick={this.loadmoreitems}/>
                        : null }
                  </div>
              </div>
          )
      }
}

export default Home;