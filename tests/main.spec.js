import { expect } from 'chai';

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main';

describe('Spotify Wrapper', () => {
  describe('Smoke Tests', () => {
    it('Should exists the search method', () => {
      expect(search).to.exist;
    });

    it('Should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('Should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('Should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('Should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      const artists = search();
      console.log(artists);
    });
  });
});
