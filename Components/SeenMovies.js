import React from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';
import SeenMovieItem from './SeenMovieItem';

class SeenMovies extends React.Component {
  displayDetailForFilm = (idFilm) => {
    const { navigation } = this.props;
    navigation.navigate('FilmDetail', { idFilm });
  }

  render() {
    const { seenMovies, favoritesFilm } = this.props;
    return (
      <FlatList
        style={styles.list}
        data={seenMovies}
        extraData={favoritesFilm}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({ item }) => (
            <SeenMovieItem
              film={item}
              isFilmFavorite={(favoritesFilm.findIndex(film => film.id === item.id) !== -1)}
              displayDetailForFilm={this.displayDetailForFilm}
            />
          )
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  const { favoritesFilm } = state.toggleFavorite;
  const { seenMovies } = state.toggleSeenMovies;
  return {
    favoritesFilm,
    seenMovies
  };
};

export default connect(mapStateToProps)(SeenMovies);
