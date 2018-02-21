import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, artist, image, title, url } = album;
  const { imageStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle
  } = styles;
  return (
    //1st cardsection for thumbnail image, album name and artist name,
    //2nd cardsection for album image,
    //3rd cardsection for buy now button with a link

      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image
          style={imageStyle}
          source={{ uri: image }}
          />
        </CardSection>


        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
//you need to specify the size of the image as RN will not render them unlike in web development
  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};

export default AlbumDetail;
