interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("play music...");
  }
  pause(): void {
    console.log("music pause...");
  }
  stop(): void {
    console.log("stop music");
  }
}
const myPlayer = new MusicPlayer();
myPlayer.play();
//idea
abstract class NewMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
// implementation
class NewMusicPlayer extends NewMediaPlayer {
  play(): void {
    console.log("Play music...");
  }
  pause(): void {
    console.log("pause music...");
  }
  stop(): void {
    console.log("stop music...");
  }
}
const newPlayer = new NewMusicPlayer(); // instance
newPlayer.play();
