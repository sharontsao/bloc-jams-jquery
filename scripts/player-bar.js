{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function(){
    if(player.playState !== 'playing') {return;}

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);

    if (nextSongIndex >= album.songs.length) {return;}
  });

  $('button#previous').on('click', function () {
   if (player.playState !== 'playing') {return;}

   const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
   const previousSongIndex = currentSongIndex - 1;
   const previousSong = album.songs[previousSongIndex];
   player.playPause(previousSong);

   if (previousSongIndex <= album.songs.length) {return;}
 });
}
