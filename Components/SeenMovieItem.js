import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';

import FadeIn from '../Animations/FadeIn';
import { getImageFromApi } from '../API/TMDBApi';

const icFavorite = require('../Images/ic_favorite.png');

class SeenMovieItem extends React.PureComponent {
  state = {
    title: 'xx',
    showTitle: true
  }

  componentDidMount() {
    const { film } = this.props;
    this.setState({ title: film.title });
  }

  displayFavoriteImage = () => {
    const { isFilmFavorite } = this.props;
    if (isFilmFavorite) {
      return (
        <Image
          source={icFavorite}
          style={styles.favorite_image}
        />
      );
    }
    return undefined;
  }

  toggleDisplayReleaseDate = () => {
    const { film } = this.props;
    const { showTitle } = this.state;
    if (showTitle) {
      this.setState({
        title: `Sorti le ${moment(new Date(film.release_date)).format('DD/MM/YYYY')}`,
        showTitle: false,
      });
    } else {
      this.setState({
        title: film.title,
        showTitle: false,
      });
    }
  }

  render() {
    const { film, displayDetailForFilm } = this.props;
    const { title } = this.state;
    return (
      <FadeIn>
        <TouchableOpacity
          onPress={() => displayDetailForFilm(film.id)}
          onLongPress={this.toggleDisplayReleaseDate}
          style={styles.main_container}
        >
          <Image style={styles.image} source={{ uri: getImageFromApi(film.poster_path) }} />
          <View style={styles.content_container}>
            <Text style={styles.title_text}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      </FadeIn>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 80,
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 50,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default SeenMovieItem;
