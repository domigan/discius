import { STREAM_PROVIDER } from '../audius-api/api_v1'

export const get_stream_url = async (track_id) => {
    return `${STREAM_PROVIDER}/tracks/${track_id}/stream`
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const genres = [
    "Trending",
    "Electronic",
    "Rock",
    "Metal",
    "Alternative",
    "Hip-Hop/Rap",
    "Experimental",
    "Punk",
    "Folk",
    "Pop",
    "Ambient",
    "Soundtrack",
    "World",
    "Jazz",
    "Acoustic",
    "Funk",
    "R&B/Soul",
    "Devotional",
    "Classical",
    "Reggae",
    "Podcasts",
    "Country",
    "Spoken Word",
    "Comedy",
    "Blues",
    "Kids",
    "Audiobooks",
    "Latin",
    "Techno",
    "Trap",
    "House",
    "Tech House",
    "Deep House",
    "Disco",
    "Jungle",
    "Progressive House",
    "Hardstyle",
    "Glitch Hop",
    "Trance",
    "Future Bass",
    "Future House",
    "Tropical House",
    "Downtempo",
    "Drum & Bass",
    "Dubstep",
    "Jersey Club",
    "Vaporwave",
    "Moombahton",
]


export const random_genre = () => {
    const i = Math.floor(Math.random() * genres.length);
    return genres[i]
}
