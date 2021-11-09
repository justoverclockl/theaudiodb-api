/*
  __ _                              _ _
 / _| |                            (_) |
| |_| | __ _ _ __ _   _ _ __ ___    _| |_
|  _| |/ _` | '__| | | | '_ ` _ \  | | __|
| | | | (_| | |  | |_| | | | | | |_| | |_
|_| |_|\__,_|_|   \__,_|_| |_| |_(_)_|\__|
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

app.initializers.add('justoverclock/theaudiodb-api', () => {
  extend(DiscussionHero.prototype, ['oncreate'], function () {
    const isLoggedIn = app.session.user;
    const artistTitle = this.attrs.discussion.title().split(/\s+/).join('%20');
    const languageCode = app.forum.attribute('justoverclock-theaudiodb-api.langCode') || 'EN';

    // gestiamo gli errori nella risposta
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    if (isLoggedIn) {
      const artistApi = fetch('https://theaudiodb.com/api/v1/json/1/search.php?s=' + artistTitle)
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          m.redraw();
          const arrayElem = 'strBiography' + languageCode;
          if (data.artists[0][arrayElem] === null) {
            data.artists[0][arrayElem] =
              'Oops! Description is not available in your language unfortunately...You can contribute to TheAudioDB.com by adding information about this artists in your language.';
          }
          const descArt = (document.getElementById('descArtist').innerText = data.artists[0][arrayElem].substring(0, 400) + '...');
          const thumbArtists = (document.getElementById('imgArtists').src = data.artists[0].strArtistThumb);
          const genreArtist = (document.getElementById('genreArtist').innerText =
            app.translator.trans('justoverclock-theaudiodb-api.forum.genres') + ': ' + data.artists[0].strStyle);
          const yearBorn = (document.getElementById('yearBorn').innerText =
            app.translator.trans('justoverclock-theaudiodb-api.forum.intFormedYear') + ': ' + data.artists[0].intFormedYear);
          const countryArtist = (document.getElementById('strcountry').innerText =
            app.translator.trans('justoverclock-theaudiodb-api.forum.countryart') + ': ' + data.artists[0].strCountry);
        })
        .catch((error) => console.log('This Artist does not exist ;) =>', artistTitle));
    }

    extend(DiscussionHero.prototype, 'items', function (items) {
      items.add(
        'artistDetailMusic',
        <div class="artistWrapper">
          <div id="containerArtist">
            <div id="contentArtist">
              <p class="artistDesc" id="descArtist" />
              <div class="itemdescrip">
                <div class="genreArtist" id="genreArtist" />
                <div class="yearBorn" id="yearBorn" />
                <div class="strcountry" id="strcountry" />
              </div>
            </div>
          </div>
          <div id="sidebarImgArtist">
            <img className="imgArtist" id="imgArtists" src="" />
          </div>
        </div>
      );
    });
  });
});
