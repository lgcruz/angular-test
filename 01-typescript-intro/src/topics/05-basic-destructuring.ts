interface Song {
  song: string;
  details: Detail;
  songDuration: number;
  songVolume: number;
}
interface Detail {
  author: string;
  year: number;
}

const anotherSong: Song = {
  song: "accidentally in love",
  details: {
    author: "Counting Crows",
    year: 2002,
  },
  songDuration: 90,
  songVolume: 50,
};

const { song, songDuration: duration, details } = anotherSong;
const { author } = details;

console.log(`Song: ${song} - Duration: ${duration} - Author: ${author}`);

const [, , trunks = "not found"]: string[] = ["Goku", "Vegeta", "Trunks"];

console.log(trunks);
