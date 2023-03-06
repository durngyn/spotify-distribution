import React, { useRef } from 'react'
import CountUp from 'react-countup'; import styles from './GraphPage.module.css'
import Songs from './Songs';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useAxios from './hooks/useAxios';

export default function GraphPage({ handleMouseEnter, handleMouseExit, handleBar }) {
    const [showSongs, setShowSongs] = useState(false)
    const [playlists, setPlaylists] = useState(null)
    const [trackIds, setTrackIds] = useState(null)
    const [playlistData, requestPlaylistData] = useAxios()
    const [songsData, requestSongsData] = useAxios()
    const graphRef = useRef(null)
    const songRef = useRef(null)

    const playlist_items = {
        "data": {
            "href": "https://api.spotify.com/v1/playlists/3TYrgruM7pckSNfIzgG63a/tracks?offset=0&limit=100&market=US",
            "items": [
                {
                    "added_at": "2022-09-28T06:38:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2GKTroaa4ysyhEdvzpvUoM"
                            },
                            "href": "https://api.spotify.com/v1/albums/2GKTroaa4ysyhEdvzpvUoM",
                            "id": "2GKTroaa4ysyhEdvzpvUoM",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27340d7efd2594a2b6bda60ea18",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0240d7efd2594a2b6bda60ea18",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485140d7efd2594a2b6bda60ea18",
                                    "width": 64
                                }
                            ],
                            "name": "Summer Nights",
                            "release_date": "2018-07-09",
                            "release_date_precision": "day",
                            "total_tracks": 9,
                            "type": "album",
                            "uri": "spotify:album:2GKTroaa4ysyhEdvzpvUoM"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 208240,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1800038"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3zhbXKFjUDw40pTYyCgt1Y"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3zhbXKFjUDw40pTYyCgt1Y",
                        "id": "3zhbXKFjUDw40pTYyCgt1Y",
                        "is_local": false,
                        "is_playable": true,
                        "name": "What is Love",
                        "popularity": 73,
                        "preview_url": "https://p.scdn.co/mp3-preview/7cf97f0a388ecdc193e15ab7dd564d3e8e2e7706?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 4,
                        "type": "track",
                        "uri": "spotify:track:3zhbXKFjUDw40pTYyCgt1Y"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T06:38:47Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1VwDG9aBflQupaFNjUru9A"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1VwDG9aBflQupaFNjUru9A",
                                    "id": "1VwDG9aBflQupaFNjUru9A",
                                    "name": "NAYEON",
                                    "type": "artist",
                                    "uri": "spotify:artist:1VwDG9aBflQupaFNjUru9A"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0wqjfojWuTcbEvwaizvTMw"
                            },
                            "href": "https://api.spotify.com/v1/albums/0wqjfojWuTcbEvwaizvTMw",
                            "id": "0wqjfojWuTcbEvwaizvTMw",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735fb4a9cfbeb3b7beb337ed02",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025fb4a9cfbeb3b7beb337ed02",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515fb4a9cfbeb3b7beb337ed02",
                                    "width": 64
                                }
                            ],
                            "name": "IM NAYEON",
                            "release_date": "2022-06-24",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:0wqjfojWuTcbEvwaizvTMw"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1VwDG9aBflQupaFNjUru9A"
                                },
                                "href": "https://api.spotify.com/v1/artists/1VwDG9aBflQupaFNjUru9A",
                                "id": "1VwDG9aBflQupaFNjUru9A",
                                "name": "NAYEON",
                                "type": "artist",
                                "uri": "spotify:artist:1VwDG9aBflQupaFNjUru9A"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 168106,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200041"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3lOMJTQTd6J34faYwASc33"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3lOMJTQTd6J34faYwASc33",
                        "id": "3lOMJTQTd6J34faYwASc33",
                        "is_local": false,
                        "is_playable": true,
                        "name": "POP!",
                        "popularity": 75,
                        "preview_url": "https://p.scdn.co/mp3-preview/f862d766dbc445cd48f57a65312315272d54f5aa?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3lOMJTQTd6J34faYwASc33"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:13:16Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/2KC9Qb60EaY0kW4eH68vr3"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/2KC9Qb60EaY0kW4eH68vr3",
                                    "id": "2KC9Qb60EaY0kW4eH68vr3",
                                    "name": "ITZY",
                                    "type": "artist",
                                    "uri": "spotify:artist:2KC9Qb60EaY0kW4eH68vr3"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2gertXS08whDTzBWfmewPO"
                            },
                            "href": "https://api.spotify.com/v1/albums/2gertXS08whDTzBWfmewPO",
                            "id": "2gertXS08whDTzBWfmewPO",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27386e407289831b784b58d4c5f",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0286e407289831b784b58d4c5f",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485186e407289831b784b58d4c5f",
                                    "width": 64
                                }
                            ],
                            "name": "It'z Me",
                            "release_date": "2020-03-09",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:2gertXS08whDTzBWfmewPO"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2KC9Qb60EaY0kW4eH68vr3"
                                },
                                "href": "https://api.spotify.com/v1/artists/2KC9Qb60EaY0kW4eH68vr3",
                                "id": "2KC9Qb60EaY0kW4eH68vr3",
                                "name": "ITZY",
                                "type": "artist",
                                "uri": "spotify:artist:2KC9Qb60EaY0kW4eH68vr3"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 191242,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000006"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4pspYVQGFHLPEFgQPD1J7e"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4pspYVQGFHLPEFgQPD1J7e",
                        "id": "4pspYVQGFHLPEFgQPD1J7e",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/6tCssnvTUREcperDOUTqvA"
                            },
                            "href": "https://api.spotify.com/v1/tracks/6tCssnvTUREcperDOUTqvA",
                            "id": "6tCssnvTUREcperDOUTqvA",
                            "type": "track",
                            "uri": "spotify:track:6tCssnvTUREcperDOUTqvA"
                        },
                        "name": "WANNABE",
                        "popularity": 70,
                        "preview_url": "https://p.scdn.co/mp3-preview/07bfbae26a4d8450ef4af4f6ae87b3b8c2b82b79?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:4pspYVQGFHLPEFgQPD1J7e"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:15:01Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                    "id": "7zYj9S9SdIunYCfSm7vzAR",
                                    "name": "JEON SOMI",
                                    "type": "artist",
                                    "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/59iiiARciChm70cn85wxuH"
                            },
                            "href": "https://api.spotify.com/v1/albums/59iiiARciChm70cn85wxuH",
                            "id": "59iiiARciChm70cn85wxuH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2737dcc9db811ee9546bca6babe",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e027dcc9db811ee9546bca6babe",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048517dcc9db811ee9546bca6babe",
                                    "width": 64
                                }
                            ],
                            "name": "What You Waiting For",
                            "release_date": "2020-07-22",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:59iiiARciChm70cn85wxuH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                },
                                "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                "id": "7zYj9S9SdIunYCfSm7vzAR",
                                "name": "JEON SOMI",
                                "type": "artist",
                                "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 175327,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA402000126"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4CoxD8tetisleUQDA7vn1B"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4CoxD8tetisleUQDA7vn1B",
                        "id": "4CoxD8tetisleUQDA7vn1B",
                        "is_local": false,
                        "is_playable": true,
                        "name": "What You Waiting For",
                        "popularity": 48,
                        "preview_url": "https://p.scdn.co/mp3-preview/aa6bf13119c171984d3311147bf0f4ee9e11f899?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:4CoxD8tetisleUQDA7vn1B"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:16:39Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/47bxLQc3jt9EcpFXOECxVA"
                            },
                            "href": "https://api.spotify.com/v1/albums/47bxLQc3jt9EcpFXOECxVA",
                            "id": "47bxLQc3jt9EcpFXOECxVA",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736a1200e944003a293abb0b99",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026a1200e944003a293abb0b99",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516a1200e944003a293abb0b99",
                                    "width": 64
                                }
                            ],
                            "name": "Fanfare",
                            "release_date": "2020-06-19",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:47bxLQc3jt9EcpFXOECxVA"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 220240,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "JPWP02070475"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/49moLXpCwwantnF78yItWf"
                        },
                        "href": "https://api.spotify.com/v1/tracks/49moLXpCwwantnF78yItWf",
                        "id": "49moLXpCwwantnF78yItWf",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Fanfare",
                        "popularity": 49,
                        "preview_url": "https://p.scdn.co/mp3-preview/362a4e5566326f8a3a77cac9f1c32a1ac324489d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:49moLXpCwwantnF78yItWf"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:18:50Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
                                    "id": "2PSJ6YriU7JsFucxACpU7Y",
                                    "name": "CHUNG HA",
                                    "type": "artist",
                                    "uri": "spotify:artist:2PSJ6YriU7JsFucxACpU7Y"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7BYCvUqCaeIo2jgOl9iAGr"
                            },
                            "href": "https://api.spotify.com/v1/albums/7BYCvUqCaeIo2jgOl9iAGr",
                            "id": "7BYCvUqCaeIo2jgOl9iAGr",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2733de8d21c10a5beed844bba5b",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e023de8d21c10a5beed844bba5b",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048513de8d21c10a5beed844bba5b",
                                    "width": 64
                                }
                            ],
                            "name": "Gotta Go",
                            "release_date": "2019-01-02",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:7BYCvUqCaeIo2jgOl9iAGr"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y"
                                },
                                "href": "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
                                "id": "2PSJ6YriU7JsFucxACpU7Y",
                                "name": "CHUNG HA",
                                "type": "artist",
                                "uri": "spotify:artist:2PSJ6YriU7JsFucxACpU7Y"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 221813,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRMIM1815150"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1exnDFdC34GyBcaLt9ZJfX"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1exnDFdC34GyBcaLt9ZJfX",
                        "id": "1exnDFdC34GyBcaLt9ZJfX",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/0xq4ZTcmwBfkPGo4RRKmMe"
                            },
                            "href": "https://api.spotify.com/v1/tracks/0xq4ZTcmwBfkPGo4RRKmMe",
                            "id": "0xq4ZTcmwBfkPGo4RRKmMe",
                            "type": "track",
                            "uri": "spotify:track:0xq4ZTcmwBfkPGo4RRKmMe"
                        },
                        "name": "Gotta Go",
                        "popularity": 60,
                        "preview_url": "https://p.scdn.co/mp3-preview/45efed0bf4658d03ad78e8147c396d6db8daa040?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:1exnDFdC34GyBcaLt9ZJfX"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:21:31Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/33jypnU7WULxPaVrjj4RXH"
                            },
                            "href": "https://api.spotify.com/v1/albums/33jypnU7WULxPaVrjj4RXH",
                            "id": "33jypnU7WULxPaVrjj4RXH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736570fd05bcff5edcb16e617d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026570fd05bcff5edcb16e617d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516570fd05bcff5edcb16e617d",
                                    "width": 64
                                }
                            ],
                            "name": "Eyes Wide Open",
                            "release_date": "2020-10-26",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:33jypnU7WULxPaVrjj4RXH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 205493,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000134"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/37ZtpRBkHcaq6hHy0X98zn"
                        },
                        "href": "https://api.spotify.com/v1/tracks/37ZtpRBkHcaq6hHy0X98zn",
                        "id": "37ZtpRBkHcaq6hHy0X98zn",
                        "is_local": false,
                        "is_playable": true,
                        "name": "I CAN'T STOP ME",
                        "popularity": 72,
                        "preview_url": "https://p.scdn.co/mp3-preview/db4e054b580f49bade783c8bd13160eeba311e78?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:37ZtpRBkHcaq6hHy0X98zn"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:24:08Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f"
                            },
                            "href": "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f",
                            "id": "3NZ94nQbqimcu2i71qhc4f",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c3040848e6ef0e132c5c8340",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c3040848e6ef0e132c5c8340",
                                    "width": 64
                                }
                            ],
                            "name": "BETWEEN 1&2",
                            "release_date": "2022-08-26",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:3NZ94nQbqimcu2i71qhc4f"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 177466,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200073"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0RDqNCRBGrSegk16Avfzuq"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0RDqNCRBGrSegk16Avfzuq",
                        "id": "0RDqNCRBGrSegk16Avfzuq",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Talk that Talk",
                        "popularity": 77,
                        "preview_url": "https://p.scdn.co/mp3-preview/706c768ce6ae81c68fc557c326f4933b1c30f822?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0RDqNCRBGrSegk16Avfzuq"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:26:42Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3NQBPabmRm3LzVcmtkTLfo"
                            },
                            "href": "https://api.spotify.com/v1/albums/3NQBPabmRm3LzVcmtkTLfo",
                            "id": "3NQBPabmRm3LzVcmtkTLfo",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27349b81808fcdaeeb55bef59d1",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0249b81808fcdaeeb55bef59d1",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485149b81808fcdaeeb55bef59d1",
                                    "width": 64
                                }
                            ],
                            "name": "Feel Special",
                            "release_date": "2019-09-23",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:3NQBPabmRm3LzVcmtkTLfo"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 206866,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1900074"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3Hz3tTQwOdM6XkA0ALB2G9"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3Hz3tTQwOdM6XkA0ALB2G9",
                        "id": "3Hz3tTQwOdM6XkA0ALB2G9",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Feel Special",
                        "popularity": 69,
                        "preview_url": "https://p.scdn.co/mp3-preview/1cfa672555442755523456ac60cc2dc5ba2ad305?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3Hz3tTQwOdM6XkA0ALB2G9"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:27:40Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2GKTroaa4ysyhEdvzpvUoM"
                            },
                            "href": "https://api.spotify.com/v1/albums/2GKTroaa4ysyhEdvzpvUoM",
                            "id": "2GKTroaa4ysyhEdvzpvUoM",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27340d7efd2594a2b6bda60ea18",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0240d7efd2594a2b6bda60ea18",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485140d7efd2594a2b6bda60ea18",
                                    "width": 64
                                }
                            ],
                            "name": "Summer Nights",
                            "release_date": "2018-07-09",
                            "release_date_precision": "day",
                            "total_tracks": 9,
                            "type": "album",
                            "uri": "spotify:album:2GKTroaa4ysyhEdvzpvUoM"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 180800,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1800053"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4DYIDSMIB5y2UmZFv9fxeX"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4DYIDSMIB5y2UmZFv9fxeX",
                        "id": "4DYIDSMIB5y2UmZFv9fxeX",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Dance The Night Away",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/8e3fc4fc3cacef4388f7078922df953c9cb19447?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:4DYIDSMIB5y2UmZFv9fxeX"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:29:53Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                    "id": "6RHTUrRF63xao58xh9FXYJ",
                                    "name": "IVE",
                                    "type": "artist",
                                    "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1AFVTHHm7kKoQ6Rgb25x3p"
                            },
                            "href": "https://api.spotify.com/v1/albums/1AFVTHHm7kKoQ6Rgb25x3p",
                            "id": "1AFVTHHm7kKoQ6Rgb25x3p",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2739016f58cc49e6473e1207093",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e029016f58cc49e6473e1207093",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048519016f58cc49e6473e1207093",
                                    "width": 64
                                }
                            ],
                            "name": "LOVE DIVE",
                            "release_date": "2022-04-05",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:1AFVTHHm7kKoQ6Rgb25x3p"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                "id": "6RHTUrRF63xao58xh9FXYJ",
                                "name": "IVE",
                                "type": "artist",
                                "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 177186,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382204375"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0Q5VnK2DYzRyfqQRJuUtvi"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0Q5VnK2DYzRyfqQRJuUtvi",
                        "id": "0Q5VnK2DYzRyfqQRJuUtvi",
                        "is_local": false,
                        "is_playable": true,
                        "name": "LOVE DIVE",
                        "popularity": 78,
                        "preview_url": "https://p.scdn.co/mp3-preview/ffeda0e70f8e10861d42135e1cee1c4ea949e09b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0Q5VnK2DYzRyfqQRJuUtvi"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:34:22Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                    "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                    "name": "EVERGLOW",
                                    "type": "artist",
                                    "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1F2CtDmTEiyJRv2bCf6989"
                            },
                            "href": "https://api.spotify.com/v1/albums/1F2CtDmTEiyJRv2bCf6989",
                            "id": "1F2CtDmTEiyJRv2bCf6989",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273359024c678a5803e0677e684",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02359024c678a5803e0677e684",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851359024c678a5803e0677e684",
                                    "width": 64
                                }
                            ],
                            "name": "-77.82x-78.29",
                            "release_date": "2020-09-21",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:1F2CtDmTEiyJRv2bCf6989"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                "name": "EVERGLOW",
                                "type": "artist",
                                "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 216093,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRMIM2026014"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0hZs9kWnaewkXEufPYjbvf"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0hZs9kWnaewkXEufPYjbvf",
                        "id": "0hZs9kWnaewkXEufPYjbvf",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/2dj8zWm8Kexsi59SRFEN7n"
                            },
                            "href": "https://api.spotify.com/v1/tracks/2dj8zWm8Kexsi59SRFEN7n",
                            "id": "2dj8zWm8Kexsi59SRFEN7n",
                            "type": "track",
                            "uri": "spotify:track:2dj8zWm8Kexsi59SRFEN7n"
                        },
                        "name": "NO GOOD REASON",
                        "popularity": 40,
                        "preview_url": "https://p.scdn.co/mp3-preview/f03c2f68d89e423f650c7dad36fb8bcfcc1d9814?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 4,
                        "type": "track",
                        "uri": "spotify:track:0hZs9kWnaewkXEufPYjbvf"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:35:50Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/33jypnU7WULxPaVrjj4RXH"
                            },
                            "href": "https://api.spotify.com/v1/albums/33jypnU7WULxPaVrjj4RXH",
                            "id": "33jypnU7WULxPaVrjj4RXH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736570fd05bcff5edcb16e617d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026570fd05bcff5edcb16e617d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516570fd05bcff5edcb16e617d",
                                    "width": 64
                                }
                            ],
                            "name": "Eyes Wide Open",
                            "release_date": "2020-10-26",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:33jypnU7WULxPaVrjj4RXH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 209480,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000142"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5HSooivbDgCWBOv24vtYiB"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5HSooivbDgCWBOv24vtYiB",
                        "id": "5HSooivbDgCWBOv24vtYiB",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SHOT CLOCK",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/7ddaf267ad5047cf99386a5112309cf65a64c314?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 9,
                        "type": "track",
                        "uri": "spotify:track:5HSooivbDgCWBOv24vtYiB"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:37:29Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/33jypnU7WULxPaVrjj4RXH"
                            },
                            "href": "https://api.spotify.com/v1/albums/33jypnU7WULxPaVrjj4RXH",
                            "id": "33jypnU7WULxPaVrjj4RXH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736570fd05bcff5edcb16e617d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026570fd05bcff5edcb16e617d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516570fd05bcff5edcb16e617d",
                                    "width": 64
                                }
                            ],
                            "name": "Eyes Wide Open",
                            "release_date": "2020-10-26",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:33jypnU7WULxPaVrjj4RXH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 179586,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000137"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/54kGRAmn3I49RPAhdWG2sp"
                        },
                        "href": "https://api.spotify.com/v1/tracks/54kGRAmn3I49RPAhdWG2sp",
                        "id": "54kGRAmn3I49RPAhdWG2sp",
                        "is_local": false,
                        "is_playable": true,
                        "name": "DO WHAT WE LIKE",
                        "popularity": 49,
                        "preview_url": "https://p.scdn.co/mp3-preview/65ca13a95978ba9dca49576a9c27165323c5e5ce?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 4,
                        "type": "track",
                        "uri": "spotify:track:54kGRAmn3I49RPAhdWG2sp"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:39:11Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5KsduuDNWzt65TaHzmtciv"
                            },
                            "href": "https://api.spotify.com/v1/albums/5KsduuDNWzt65TaHzmtciv",
                            "id": "5KsduuDNWzt65TaHzmtciv",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27324869424ae632466b839a8a8",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0224869424ae632466b839a8a8",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485124869424ae632466b839a8a8",
                                    "width": 64
                                }
                            ],
                            "name": "MORE & MORE",
                            "release_date": "2020-06-01",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:5KsduuDNWzt65TaHzmtciv"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 225400,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000051"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/128rj96Z6tTEU3h3awSMdB"
                        },
                        "href": "https://api.spotify.com/v1/tracks/128rj96Z6tTEU3h3awSMdB",
                        "id": "128rj96Z6tTEU3h3awSMdB",
                        "is_local": false,
                        "is_playable": true,
                        "name": "OXYGEN",
                        "popularity": 48,
                        "preview_url": "https://p.scdn.co/mp3-preview/5732af797b931512c3545d0f1ac4c5164f417147?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:128rj96Z6tTEU3h3awSMdB"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:41:28Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5MmndGNrJgTLd5W7HNmVST"
                            },
                            "href": "https://api.spotify.com/v1/albums/5MmndGNrJgTLd5W7HNmVST",
                            "id": "5MmndGNrJgTLd5W7HNmVST",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735f390ece0daec72a5cbe422c",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025f390ece0daec72a5cbe422c",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515f390ece0daec72a5cbe422c",
                                    "width": 64
                                }
                            ],
                            "name": "Feel Special",
                            "release_date": "2019-09-23",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:5MmndGNrJgTLd5W7HNmVST"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 191226,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1900078"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1MdEg2lk4EakgWnCvFUGEZ"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1MdEg2lk4EakgWnCvFUGEZ",
                        "id": "1MdEg2lk4EakgWnCvFUGEZ",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/5ipJi9h2ghaThn6EUwO3B2"
                            },
                            "href": "https://api.spotify.com/v1/tracks/5ipJi9h2ghaThn6EUwO3B2",
                            "id": "5ipJi9h2ghaThn6EUwO3B2",
                            "type": "track",
                            "uri": "spotify:track:5ipJi9h2ghaThn6EUwO3B2"
                        },
                        "name": "LOVE FOOLISH",
                        "popularity": 55,
                        "preview_url": "https://p.scdn.co/mp3-preview/10c91d0c49aacc7c53fbcf5b435bc496394bf985?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:1MdEg2lk4EakgWnCvFUGEZ"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:46:08Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2aRAPmBCEdo9pWimsI5l87"
                            },
                            "href": "https://api.spotify.com/v1/albums/2aRAPmBCEdo9pWimsI5l87",
                            "id": "2aRAPmBCEdo9pWimsI5l87",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738ae9084b7cfa8281932d9cb9",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028ae9084b7cfa8281932d9cb9",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518ae9084b7cfa8281932d9cb9",
                                    "width": 64
                                }
                            ],
                            "name": "CRY FOR ME",
                            "release_date": "2020-12-18",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:2aRAPmBCEdo9pWimsI5l87"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 204167,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2000173"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2xtP8RNbo2BEMzLX7tK7aq"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2xtP8RNbo2BEMzLX7tK7aq",
                        "id": "2xtP8RNbo2BEMzLX7tK7aq",
                        "is_local": false,
                        "is_playable": true,
                        "name": "CRY FOR ME",
                        "popularity": 70,
                        "preview_url": "https://p.scdn.co/mp3-preview/342e0fe9756d455b425ded2e4683f96b4c3dd7db?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2xtP8RNbo2BEMzLX7tK7aq"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:47:55Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                    "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                    "name": "IU",
                                    "type": "artist",
                                    "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4ghBzVOTFoeKPPmyNKjVtI"
                            },
                            "href": "https://api.spotify.com/v1/albums/4ghBzVOTFoeKPPmyNKjVtI",
                            "id": "4ghBzVOTFoeKPPmyNKjVtI",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273a1d785640d9421ec17ea8fe6",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02a1d785640d9421ec17ea8fe6",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851a1d785640d9421ec17ea8fe6",
                                    "width": 64
                                }
                            ],
                            "name": "BBIBBI",
                            "release_date": "2018-10-10",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:4ghBzVOTFoeKPPmyNKjVtI"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                "name": "IU",
                                "type": "artist",
                                "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 194426,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA381801523"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4as4XEOR03oGm1STUKl6pa"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4as4XEOR03oGm1STUKl6pa",
                        "id": "4as4XEOR03oGm1STUKl6pa",
                        "is_local": false,
                        "is_playable": true,
                        "name": "BBIBBI",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/a3d6d43bcd92211fde4a4914264fb51d49a79b31?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:4as4XEOR03oGm1STUKl6pa"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:48:49Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                    "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                    "name": "IU",
                                    "type": "artist",
                                    "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2xEH7SRzJq7LgA0fCtTlxH"
                            },
                            "href": "https://api.spotify.com/v1/albums/2xEH7SRzJq7LgA0fCtTlxH",
                            "id": "2xEH7SRzJq7LgA0fCtTlxH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273b658276cd9884ef6fae69033",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02b658276cd9884ef6fae69033",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851b658276cd9884ef6fae69033",
                                    "width": 64
                                }
                            ],
                            "name": "Love poem",
                            "release_date": "2019-11-18",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:2xEH7SRzJq7LgA0fCtTlxH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                "name": "IU",
                                "type": "artist",
                                "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 217053,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA381904704"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4Dr2hJ3EnVh2Aaot6fRwDO"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4Dr2hJ3EnVh2Aaot6fRwDO",
                        "id": "4Dr2hJ3EnVh2Aaot6fRwDO",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Blueming",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/12ba2a0451726e0a4fe53d71c300db7ed728b8f1?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:4Dr2hJ3EnVh2Aaot6fRwDO"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:50:06Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/6YeZQkSgIVYCBefzTxwVdu"
                            },
                            "href": "https://api.spotify.com/v1/albums/6YeZQkSgIVYCBefzTxwVdu",
                            "id": "6YeZQkSgIVYCBefzTxwVdu",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273b6ab7be3b4eeb27e1af65cdb",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02b6ab7be3b4eeb27e1af65cdb",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851b6ab7be3b4eeb27e1af65cdb",
                                    "width": 64
                                }
                            ],
                            "name": "Chuu",
                            "release_date": "2017-12-28",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:6YeZQkSgIVYCBefzTxwVdu"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 194941,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRE081700034"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6SSC9KZQaxBdyipKRigrFC"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6SSC9KZQaxBdyipKRigrFC",
                        "id": "6SSC9KZQaxBdyipKRigrFC",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Heart Attack (츄)",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/c1ceece6cad67303a099b4493c855c04f90d2b75?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:6SSC9KZQaxBdyipKRigrFC"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:57:34Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/747FhjbZXy5H8frCZ90eDv"
                            },
                            "href": "https://api.spotify.com/v1/albums/747FhjbZXy5H8frCZ90eDv",
                            "id": "747FhjbZXy5H8frCZ90eDv",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273608cf05fbd3605c77444917f",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02608cf05fbd3605c77444917f",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851608cf05fbd3605c77444917f",
                                    "width": 64
                                }
                            ],
                            "name": "[&]",
                            "release_date": "2021-06-28",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:747FhjbZXy5H8frCZ90eDv"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 157760,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382152287"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7jVQ1WS5RqUxRaKQVRaokc"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7jVQ1WS5RqUxRaKQVRaokc",
                        "id": "7jVQ1WS5RqUxRaKQVRaokc",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Dance On My Own",
                        "popularity": 44,
                        "preview_url": "https://p.scdn.co/mp3-preview/2055df4b9796c63330b0c19dcf6c3f93af59fe3d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:7jVQ1WS5RqUxRaKQVRaokc"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T07:59:42Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/6bk3KlQjiXsRmGrzrNcS53"
                            },
                            "href": "https://api.spotify.com/v1/albums/6bk3KlQjiXsRmGrzrNcS53",
                            "id": "6bk3KlQjiXsRmGrzrNcS53",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273557395cc096cb7b22eff310e",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02557395cc096cb7b22eff310e",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851557395cc096cb7b22eff310e",
                                    "width": 64
                                }
                            ],
                            "name": "The Feels",
                            "release_date": "2021-10-01",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:6bk3KlQjiXsRmGrzrNcS53"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 198053,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2100080"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/308Ir17KlNdlrbVLHWhlLe"
                        },
                        "href": "https://api.spotify.com/v1/tracks/308Ir17KlNdlrbVLHWhlLe",
                        "id": "308Ir17KlNdlrbVLHWhlLe",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/1XyzcGhmO7iUamSS94XfqY"
                            },
                            "href": "https://api.spotify.com/v1/tracks/1XyzcGhmO7iUamSS94XfqY",
                            "id": "1XyzcGhmO7iUamSS94XfqY",
                            "type": "track",
                            "uri": "spotify:track:1XyzcGhmO7iUamSS94XfqY"
                        },
                        "name": "The Feels",
                        "popularity": 73,
                        "preview_url": "https://p.scdn.co/mp3-preview/ccdbc8a5005bdb8ab61b4435baaade4f710b1415?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 15,
                        "type": "track",
                        "uri": "spotify:track:308Ir17KlNdlrbVLHWhlLe"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T08:00:14Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7GQdWx1bMvrbVBOtCa829d"
                            },
                            "href": "https://api.spotify.com/v1/albums/7GQdWx1bMvrbVBOtCa829d",
                            "id": "7GQdWx1bMvrbVBOtCa829d",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c402125dd22757d0a4769b87",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c402125dd22757d0a4769b87",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c402125dd22757d0a4769b87",
                                    "width": 64
                                }
                            ],
                            "name": "HULA HOOP / StarSeed ~カクセイ~",
                            "release_date": "2021-09-14",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:7GQdWx1bMvrbVBOtCa829d"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 199986,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "JPPO02102688"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2YVzshKzFglQLBXPYNpGI8"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2YVzshKzFglQLBXPYNpGI8",
                        "id": "2YVzshKzFglQLBXPYNpGI8",
                        "is_local": false,
                        "is_playable": true,
                        "name": "HULA HOOP",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/686f6f4069dd825a360892ffeaf5a2502d5f3278?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2YVzshKzFglQLBXPYNpGI8"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T08:00:56Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                    "id": "7zYj9S9SdIunYCfSm7vzAR",
                                    "name": "JEON SOMI",
                                    "type": "artist",
                                    "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/63pvOn2B5pUUcUKUwIEg9m"
                            },
                            "href": "https://api.spotify.com/v1/albums/63pvOn2B5pUUcUKUwIEg9m",
                            "id": "63pvOn2B5pUUcUKUwIEg9m",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273350ecac91d0f0af55788c648",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02350ecac91d0f0af55788c648",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851350ecac91d0f0af55788c648",
                                    "width": 64
                                }
                            ],
                            "name": "XOXO",
                            "release_date": "2021-10-29",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:63pvOn2B5pUUcUKUwIEg9m"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                },
                                "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                "id": "7zYj9S9SdIunYCfSm7vzAR",
                                "name": "JEON SOMI",
                                "type": "artist",
                                "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 207650,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KSA002100900"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4r34Yi0eltsu1tp6z4lq3x"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4r34Yi0eltsu1tp6z4lq3x",
                        "id": "4r34Yi0eltsu1tp6z4lq3x",
                        "is_local": false,
                        "is_playable": true,
                        "name": "XOXO",
                        "popularity": 58,
                        "preview_url": "https://p.scdn.co/mp3-preview/05b5d208ec159750c296d8008e4f6725caf5418f?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:4r34Yi0eltsu1tp6z4lq3x"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T08:01:59Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                    "id": "7zYj9S9SdIunYCfSm7vzAR",
                                    "name": "JEON SOMI",
                                    "type": "artist",
                                    "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/63pvOn2B5pUUcUKUwIEg9m"
                            },
                            "href": "https://api.spotify.com/v1/albums/63pvOn2B5pUUcUKUwIEg9m",
                            "id": "63pvOn2B5pUUcUKUwIEg9m",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273350ecac91d0f0af55788c648",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02350ecac91d0f0af55788c648",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851350ecac91d0f0af55788c648",
                                    "width": 64
                                }
                            ],
                            "name": "XOXO",
                            "release_date": "2021-10-29",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:63pvOn2B5pUUcUKUwIEg9m"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                },
                                "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                "id": "7zYj9S9SdIunYCfSm7vzAR",
                                "name": "JEON SOMI",
                                "type": "artist",
                                "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 188161,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA401900044"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0NaccQM71LPaoSS8EZ0KhW"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0NaccQM71LPaoSS8EZ0KhW",
                        "id": "0NaccQM71LPaoSS8EZ0KhW",
                        "is_local": false,
                        "is_playable": true,
                        "linked_from": {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/track/7HE0d5NJ3twiJxh42oGF8m"
                            },
                            "href": "https://api.spotify.com/v1/tracks/7HE0d5NJ3twiJxh42oGF8m",
                            "id": "7HE0d5NJ3twiJxh42oGF8m",
                            "type": "track",
                            "uri": "spotify:track:7HE0d5NJ3twiJxh42oGF8m"
                        },
                        "name": "어질어질 (Outta My Head)",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/6f7c7d40c069ee656cb87b496f037ca395b5ca29?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0NaccQM71LPaoSS8EZ0KhW"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T08:11:44Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1VwDG9aBflQupaFNjUru9A"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1VwDG9aBflQupaFNjUru9A",
                                    "id": "1VwDG9aBflQupaFNjUru9A",
                                    "name": "NAYEON",
                                    "type": "artist",
                                    "uri": "spotify:artist:1VwDG9aBflQupaFNjUru9A"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0wqjfojWuTcbEvwaizvTMw"
                            },
                            "href": "https://api.spotify.com/v1/albums/0wqjfojWuTcbEvwaizvTMw",
                            "id": "0wqjfojWuTcbEvwaizvTMw",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735fb4a9cfbeb3b7beb337ed02",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025fb4a9cfbeb3b7beb337ed02",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515fb4a9cfbeb3b7beb337ed02",
                                    "width": 64
                                }
                            ],
                            "name": "IM NAYEON",
                            "release_date": "2022-06-24",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:0wqjfojWuTcbEvwaizvTMw"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1VwDG9aBflQupaFNjUru9A"
                                },
                                "href": "https://api.spotify.com/v1/artists/1VwDG9aBflQupaFNjUru9A",
                                "id": "1VwDG9aBflQupaFNjUru9A",
                                "name": "NAYEON",
                                "type": "artist",
                                "uri": "spotify:artist:1VwDG9aBflQupaFNjUru9A"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5o615XColiSVMPDWlslKSk"
                                },
                                "href": "https://api.spotify.com/v1/artists/5o615XColiSVMPDWlslKSk",
                                "id": "5o615XColiSVMPDWlslKSk",
                                "name": "Wonstein",
                                "type": "artist",
                                "uri": "spotify:artist:5o615XColiSVMPDWlslKSk"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 197613,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200043"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0GnydTKmczMoKOEl1D4URI"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0GnydTKmczMoKOEl1D4URI",
                        "id": "0GnydTKmczMoKOEl1D4URI",
                        "is_local": false,
                        "is_playable": true,
                        "name": "LOVE COUNTDOWN (Feat. Wonstein)",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/984895feb70a5267dacf0754129069b3f354bf95?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:0GnydTKmczMoKOEl1D4URI"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-22T10:19:24Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2xPdgNkM4yIQmP7axJ1T1o"
                            },
                            "href": "https://api.spotify.com/v1/albums/2xPdgNkM4yIQmP7axJ1T1o",
                            "id": "2xPdgNkM4yIQmP7axJ1T1o",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738ea860a3e6904b875629d672",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028ea860a3e6904b875629d672",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518ea860a3e6904b875629d672",
                                    "width": 64
                                }
                            ],
                            "name": "YOUNG-LUV.COM",
                            "release_date": "2022-02-21",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:2xPdgNkM4yIQmP7axJ1T1o"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 173733,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382203174"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4wqvBkHI3a75Fmlirlq3uD"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4wqvBkHI3a75Fmlirlq3uD",
                        "id": "4wqvBkHI3a75Fmlirlq3uD",
                        "is_local": false,
                        "is_playable": true,
                        "name": "I WANT U BABY",
                        "popularity": 51,
                        "preview_url": "https://p.scdn.co/mp3-preview/ec19748089581e85051a228f2c62950fb011046d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 6,
                        "type": "track",
                        "uri": "spotify:track:4wqvBkHI3a75Fmlirlq3uD"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-22T10:20:52Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6UbmqUEgjLA6jAcXwbM1Z9",
                                    "id": "6UbmqUEgjLA6jAcXwbM1Z9",
                                    "name": "BIBI",
                                    "type": "artist",
                                    "uri": "spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3iW45o3MaH1WmO9KpURWit"
                            },
                            "href": "https://api.spotify.com/v1/albums/3iW45o3MaH1WmO9KpURWit",
                            "id": "3iW45o3MaH1WmO9KpURWit",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2731d6160ffb77a53520e818c8d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e021d6160ffb77a53520e818c8d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048511d6160ffb77a53520e818c8d",
                                    "width": 64
                                }
                            ],
                            "name": "PADO",
                            "release_date": "2021-09-10",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:3iW45o3MaH1WmO9KpURWit"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6UbmqUEgjLA6jAcXwbM1Z9"
                                },
                                "href": "https://api.spotify.com/v1/artists/6UbmqUEgjLA6jAcXwbM1Z9",
                                "id": "6UbmqUEgjLA6jAcXwbM1Z9",
                                "name": "BIBI",
                                "type": "artist",
                                "uri": "spotify:artist:6UbmqUEgjLA6jAcXwbM1Z9"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 193132,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382161002"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1PSDpiTgnkxHc7GhKrHCaA"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1PSDpiTgnkxHc7GhKrHCaA",
                        "id": "1PSDpiTgnkxHc7GhKrHCaA",
                        "is_local": false,
                        "is_playable": true,
                        "name": "PADO",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/a56d0e9c6165abe95c50ea5956e3241db61d3d27?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:1PSDpiTgnkxHc7GhKrHCaA"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-28T22:47:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7e6TOKG4POoaQikpefQwbC"
                            },
                            "href": "https://api.spotify.com/v1/albums/7e6TOKG4POoaQikpefQwbC",
                            "id": "7e6TOKG4POoaQikpefQwbC",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735545c6ac0c2b24cda7b6ad50",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025545c6ac0c2b24cda7b6ad50",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515545c6ac0c2b24cda7b6ad50",
                                    "width": 64
                                }
                            ],
                            "name": "[+ +]",
                            "release_date": "2018-08-20",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:7e6TOKG4POoaQikpefQwbC"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 209111,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRE081800015"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0vA82YPx1q4JRWFISf1vIZ"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0vA82YPx1q4JRWFISf1vIZ",
                        "id": "0vA82YPx1q4JRWFISf1vIZ",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Stylish",
                        "popularity": 40,
                        "preview_url": "https://p.scdn.co/mp3-preview/f0f6fbd5b4b31fe094351b0660e54b7e847aef94?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 6,
                        "type": "track",
                        "uri": "spotify:track:0vA82YPx1q4JRWFISf1vIZ"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T01:29:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                    "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                    "name": "EVERGLOW",
                                    "type": "artist",
                                    "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7cGql7l8oRpjGmeDspBMZ2"
                            },
                            "href": "https://api.spotify.com/v1/albums/7cGql7l8oRpjGmeDspBMZ2",
                            "id": "7cGql7l8oRpjGmeDspBMZ2",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27391c1f72f6be65bf4cb27b4a4",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0291c1f72f6be65bf4cb27b4a4",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485191c1f72f6be65bf4cb27b4a4",
                                    "width": 64
                                }
                            ],
                            "name": "HUSH",
                            "release_date": "2019-08-19",
                            "release_date_precision": "day",
                            "total_tracks": 3,
                            "type": "album",
                            "uri": "spotify:album:7cGql7l8oRpjGmeDspBMZ2"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                "name": "EVERGLOW",
                                "type": "artist",
                                "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 164640,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRMIM1914432"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2rvpdbvSio3BsHCOnimivV"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2rvpdbvSio3BsHCOnimivV",
                        "id": "2rvpdbvSio3BsHCOnimivV",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Hush",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/4b41b7631cb114c300ca087d0d4df5326f9bb626?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2rvpdbvSio3BsHCOnimivV"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:06:48Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                    "id": "6RHTUrRF63xao58xh9FXYJ",
                                    "name": "IVE",
                                    "type": "artist",
                                    "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0nzRF7khA2UDSZa9T0B6Da"
                            },
                            "href": "https://api.spotify.com/v1/albums/0nzRF7khA2UDSZa9T0B6Da",
                            "id": "0nzRF7khA2UDSZa9T0B6Da",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27387f53da5fb4ab1171766b2d5",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0287f53da5fb4ab1171766b2d5",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485187f53da5fb4ab1171766b2d5",
                                    "width": 64
                                }
                            ],
                            "name": "After LIKE",
                            "release_date": "2022-08-22",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:0nzRF7khA2UDSZa9T0B6Da"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                "id": "6RHTUrRF63xao58xh9FXYJ",
                                "name": "IVE",
                                "type": "artist",
                                "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 176973,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "QMBZ92254957"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2gYj9lubBorOPIVWsTXugG"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2gYj9lubBorOPIVWsTXugG",
                        "id": "2gYj9lubBorOPIVWsTXugG",
                        "is_local": false,
                        "is_playable": true,
                        "name": "After LIKE",
                        "popularity": 80,
                        "preview_url": "https://p.scdn.co/mp3-preview/b353e87348785b712dba665c928488554e395315?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2gYj9lubBorOPIVWsTXugG"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:15:09Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7HGjNJBj1NQGNwCzFD2LHj"
                            },
                            "href": "https://api.spotify.com/v1/albums/7HGjNJBj1NQGNwCzFD2LHj",
                            "id": "7HGjNJBj1NQGNwCzFD2LHj",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735c1dca4c993850471d5d8f14",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025c1dca4c993850471d5d8f14",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515c1dca4c993850471d5d8f14",
                                    "width": 64
                                }
                            ],
                            "name": "STEREOTYPE",
                            "release_date": "2021-09-06",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:7HGjNJBj1NQGNwCzFD2LHj"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 191695,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382160813"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2bZIDMpzVooosmPHn0tHnd"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2bZIDMpzVooosmPHn0tHnd",
                        "id": "2bZIDMpzVooosmPHn0tHnd",
                        "is_local": false,
                        "is_playable": true,
                        "name": "STEREOTYPE",
                        "popularity": 66,
                        "preview_url": "https://p.scdn.co/mp3-preview/2ccc020e1158e9a82a5a7438676fa145cc58691b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2bZIDMpzVooosmPHn0tHnd"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:25:22Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/73B9bjqS2Z5KLXNGqXf64m"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/73B9bjqS2Z5KLXNGqXf64m",
                                    "id": "73B9bjqS2Z5KLXNGqXf64m",
                                    "name": "Weeekly",
                                    "type": "artist",
                                    "uri": "spotify:artist:73B9bjqS2Z5KLXNGqXf64m"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4kU6DFVgZKoDYQPZk1OZp9"
                            },
                            "href": "https://api.spotify.com/v1/albums/4kU6DFVgZKoDYQPZk1OZp9",
                            "id": "4kU6DFVgZKoDYQPZk1OZp9",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27318a15ed7d84a6c773126b12b",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0218a15ed7d84a6c773126b12b",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485118a15ed7d84a6c773126b12b",
                                    "width": 64
                                }
                            ],
                            "name": "We play",
                            "release_date": "2021-03-17",
                            "release_date_precision": "day",
                            "total_tracks": 5,
                            "type": "album",
                            "uri": "spotify:album:4kU6DFVgZKoDYQPZk1OZp9"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/73B9bjqS2Z5KLXNGqXf64m"
                                },
                                "href": "https://api.spotify.com/v1/artists/73B9bjqS2Z5KLXNGqXf64m",
                                "id": "73B9bjqS2Z5KLXNGqXf64m",
                                "name": "Weeekly",
                                "type": "artist",
                                "uri": "spotify:artist:73B9bjqS2Z5KLXNGqXf64m"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 205373,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382101559"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/52CBUrIdyf8tbZaUY9iawE"
                        },
                        "href": "https://api.spotify.com/v1/tracks/52CBUrIdyf8tbZaUY9iawE",
                        "id": "52CBUrIdyf8tbZaUY9iawE",
                        "is_local": false,
                        "is_playable": true,
                        "name": "After School",
                        "popularity": 67,
                        "preview_url": "https://p.scdn.co/mp3-preview/6afcf849347241dfafc1e7f3078d32144b6acc1f?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:52CBUrIdyf8tbZaUY9iawE"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:29:01Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/04EniWu488MF6louRYafKJ"
                            },
                            "href": "https://api.spotify.com/v1/albums/04EniWu488MF6louRYafKJ",
                            "id": "04EniWu488MF6louRYafKJ",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c76a0146e4c1804f22cab995",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c76a0146e4c1804f22cab995",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c76a0146e4c1804f22cab995",
                                    "width": 64
                                }
                            ],
                            "name": "WE NEED LOVE",
                            "release_date": "2022-07-19",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:04EniWu488MF6louRYafKJ"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 180000,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382206236"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/56s2s5e8WuBsWVKnmz6J9L"
                        },
                        "href": "https://api.spotify.com/v1/tracks/56s2s5e8WuBsWVKnmz6J9L",
                        "id": "56s2s5e8WuBsWVKnmz6J9L",
                        "is_local": false,
                        "is_playable": true,
                        "name": "BEAUTIFUL MONSTER",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/c185b149d3094136b006362b257f5218ff50900f?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:56s2s5e8WuBsWVKnmz6J9L"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:34:57Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3gfl9D7cMW3K87YiMbqsWK"
                            },
                            "href": "https://api.spotify.com/v1/albums/3gfl9D7cMW3K87YiMbqsWK",
                            "id": "3gfl9D7cMW3K87YiMbqsWK",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27348a03c11c71a265006e1b9e3",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0248a03c11c71a265006e1b9e3",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485148a03c11c71a265006e1b9e3",
                                    "width": 64
                                }
                            ],
                            "name": "One-reeler / Act IV",
                            "release_date": "2020-12-07",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:3gfl9D7cMW3K87YiMbqsWK"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 222853,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA492001345"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0CnpSTdL9l5vQM4YnzXtyo"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0CnpSTdL9l5vQM4YnzXtyo",
                        "id": "0CnpSTdL9l5vQM4YnzXtyo",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Panorama",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/c11483a51642d8b21f8afb233ae84ad73234281d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:0CnpSTdL9l5vQM4YnzXtyo"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:41:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4aihvbWq3RQ1TAR2awMsqi"
                            },
                            "href": "https://api.spotify.com/v1/albums/4aihvbWq3RQ1TAR2awMsqi",
                            "id": "4aihvbWq3RQ1TAR2awMsqi",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ee4292c1c835897178b658d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ee4292c1c835897178b658d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ee4292c1c835897178b658d",
                                    "width": 64
                                }
                            ],
                            "name": "JinSoul",
                            "release_date": "2017-06-26",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:4aihvbWq3RQ1TAR2awMsqi"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 211661,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRE081700017"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1uNTfm5WZVGdig95SAXajH"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1uNTfm5WZVGdig95SAXajH",
                        "id": "1uNTfm5WZVGdig95SAXajH",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Singing in the Rain",
                        "popularity": 42,
                        "preview_url": "https://p.scdn.co/mp3-preview/4a458388c69bf731ec7119eebb908faba30ff643?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:1uNTfm5WZVGdig95SAXajH"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:46:04Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7odJeHxR62PWP4Cms4GpwB"
                            },
                            "href": "https://api.spotify.com/v1/albums/7odJeHxR62PWP4Cms4GpwB",
                            "id": "7odJeHxR62PWP4Cms4GpwB",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735fe0013ebb4022adc0f042be",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025fe0013ebb4022adc0f042be",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515fe0013ebb4022adc0f042be",
                                    "width": 64
                                }
                            ],
                            "name": "Summer Special [Flip That]",
                            "release_date": "2022-06-20",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:7odJeHxR62PWP4Cms4GpwB"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 177373,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA252201148"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7cHXwaBnIBFUPuP376z07E"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7cHXwaBnIBFUPuP376z07E",
                        "id": "7cHXwaBnIBFUPuP376z07E",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Flip That",
                        "popularity": 56,
                        "preview_url": "https://p.scdn.co/mp3-preview/41ea9581f232ecf0b597cb39ce7db6feb169f5ff?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:7cHXwaBnIBFUPuP376z07E"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-09-29T07:51:33Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/25VunQEW0x2W6ALND2Mh4g"
                            },
                            "href": "https://api.spotify.com/v1/albums/25VunQEW0x2W6ALND2Mh4g",
                            "id": "25VunQEW0x2W6ALND2Mh4g",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273140ba24506e300382e08e6ec",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02140ba24506e300382e08e6ec",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851140ba24506e300382e08e6ec",
                                    "width": 64
                                }
                            ],
                            "name": "YES or YES",
                            "release_date": "2018-11-05",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:25VunQEW0x2W6ALND2Mh4g"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 237680,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1800109"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/26OVhEqFDQH0Ij77QtmGP9"
                        },
                        "href": "https://api.spotify.com/v1/tracks/26OVhEqFDQH0Ij77QtmGP9",
                        "id": "26OVhEqFDQH0Ij77QtmGP9",
                        "is_local": false,
                        "is_playable": true,
                        "name": "YES or YES",
                        "popularity": 66,
                        "preview_url": "https://p.scdn.co/mp3-preview/063d840078fc51aa552886db6b194c8fecbfe140?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:26OVhEqFDQH0Ij77QtmGP9"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-01T18:58:31Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5zQhaDNbiXHRqd8Y51I4vy"
                            },
                            "href": "https://api.spotify.com/v1/albums/5zQhaDNbiXHRqd8Y51I4vy",
                            "id": "5zQhaDNbiXHRqd8Y51I4vy",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02387444ab2fc1f08dfe7915ab",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851387444ab2fc1f08dfe7915ab",
                                    "width": 64
                                }
                            ],
                            "name": "Twicecoaster: Lane 1",
                            "release_date": "2016-10-24",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:5zQhaDNbiXHRqd8Y51I4vy"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 212986,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1600082"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/60jFaQV7Z4boGC4ob5B5c6"
                        },
                        "href": "https://api.spotify.com/v1/tracks/60jFaQV7Z4boGC4ob5B5c6",
                        "id": "60jFaQV7Z4boGC4ob5B5c6",
                        "is_local": false,
                        "is_playable": true,
                        "name": "TT",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/99eac3e40e01afb482d5076021b1721a28216ed1?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:60jFaQV7Z4boGC4ob5B5c6"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-01T22:03:14Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3obToaukLcPbCLPPmWFzQi"
                            },
                            "href": "https://api.spotify.com/v1/albums/3obToaukLcPbCLPPmWFzQi",
                            "id": "3obToaukLcPbCLPPmWFzQi",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273619b758232a962e9ddf45f97",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02619b758232a962e9ddf45f97",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851619b758232a962e9ddf45f97",
                                    "width": 64
                                }
                            ],
                            "name": "[12:00]",
                            "release_date": "2020-10-19",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:3obToaukLcPbCLPPmWFzQi"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 198186,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382005822"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4wGt2KmqMQ7LC5bqPi51sf"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4wGt2KmqMQ7LC5bqPi51sf",
                        "id": "4wGt2KmqMQ7LC5bqPi51sf",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Star",
                        "popularity": 46,
                        "preview_url": "https://p.scdn.co/mp3-preview/d4ed97b1c1eb5615a9a1842269b9512797dd198c?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 8,
                        "type": "track",
                        "uri": "spotify:track:4wGt2KmqMQ7LC5bqPi51sf"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-03T08:31:25Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                    "id": "7zYj9S9SdIunYCfSm7vzAR",
                                    "name": "JEON SOMI",
                                    "type": "artist",
                                    "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/63pvOn2B5pUUcUKUwIEg9m"
                            },
                            "href": "https://api.spotify.com/v1/albums/63pvOn2B5pUUcUKUwIEg9m",
                            "id": "63pvOn2B5pUUcUKUwIEg9m",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273350ecac91d0f0af55788c648",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02350ecac91d0f0af55788c648",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851350ecac91d0f0af55788c648",
                                    "width": 64
                                }
                            ],
                            "name": "XOXO",
                            "release_date": "2021-10-29",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:63pvOn2B5pUUcUKUwIEg9m"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7zYj9S9SdIunYCfSm7vzAR"
                                },
                                "href": "https://api.spotify.com/v1/artists/7zYj9S9SdIunYCfSm7vzAR",
                                "id": "7zYj9S9SdIunYCfSm7vzAR",
                                "name": "JEON SOMI",
                                "type": "artist",
                                "uri": "spotify:artist:7zYj9S9SdIunYCfSm7vzAR"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 182558,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KSA002100903"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1Hy0XSHNBojwZhkwCLGXQ1"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1Hy0XSHNBojwZhkwCLGXQ1",
                        "id": "1Hy0XSHNBojwZhkwCLGXQ1",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Watermelon",
                        "popularity": 41,
                        "preview_url": "https://p.scdn.co/mp3-preview/baf3e686fef8677db28ea974d5d6e161d194d731?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:1Hy0XSHNBojwZhkwCLGXQ1"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-05T21:04:45Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0l2Z13tBw1lq2IcnBpfJeC"
                            },
                            "href": "https://api.spotify.com/v1/albums/0l2Z13tBw1lq2IcnBpfJeC",
                            "id": "0l2Z13tBw1lq2IcnBpfJeC",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273bafcf81adedf7fa2c7c2e392",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02bafcf81adedf7fa2c7c2e392",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851bafcf81adedf7fa2c7c2e392",
                                    "width": 64
                                }
                            ],
                            "name": "Olivia Hye",
                            "release_date": "2018-03-30",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:0l2Z13tBw1lq2IcnBpfJeC"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 247381,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRE081800003"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5UUeEljsNQroCUNId8DIV6"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5UUeEljsNQroCUNId8DIV6",
                        "id": "5UUeEljsNQroCUNId8DIV6",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Egoist (Olivia Hye)",
                        "popularity": 44,
                        "preview_url": "https://p.scdn.co/mp3-preview/e57829dae34dd2eb37f56e4df77b71726cfb1904?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5UUeEljsNQroCUNId8DIV6"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-13T03:42:47Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5LWkv2hDbDwZL3zNwZYNPx"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5LWkv2hDbDwZL3zNwZYNPx",
                                    "id": "5LWkv2hDbDwZL3zNwZYNPx",
                                    "name": "Weki Meki",
                                    "type": "artist",
                                    "uri": "spotify:artist:5LWkv2hDbDwZL3zNwZYNPx"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5nm3lAFvYrzM5aYmPw7JyB"
                            },
                            "href": "https://api.spotify.com/v1/albums/5nm3lAFvYrzM5aYmPw7JyB",
                            "id": "5nm3lAFvYrzM5aYmPw7JyB",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273ee70c1aec22e90245f773329",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02ee70c1aec22e90245f773329",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851ee70c1aec22e90245f773329",
                                    "width": 64
                                }
                            ],
                            "name": "I AM ME.",
                            "release_date": "2021-11-18",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:5nm3lAFvYrzM5aYmPw7JyB"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5LWkv2hDbDwZL3zNwZYNPx"
                                },
                                "href": "https://api.spotify.com/v1/artists/5LWkv2hDbDwZL3zNwZYNPx",
                                "id": "5LWkv2hDbDwZL3zNwZYNPx",
                                "name": "Weki Meki",
                                "type": "artist",
                                "uri": "spotify:artist:5LWkv2hDbDwZL3zNwZYNPx"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 234893,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382163675"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0Lv8nIY6aeJfERMDVTBKHb"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0Lv8nIY6aeJfERMDVTBKHb",
                        "id": "0Lv8nIY6aeJfERMDVTBKHb",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Siesta",
                        "popularity": 44,
                        "preview_url": "https://p.scdn.co/mp3-preview/1dcea317fc8578874deba953a3a7908262b6f85c?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0Lv8nIY6aeJfERMDVTBKHb"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-16T01:40:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7e6TOKG4POoaQikpefQwbC"
                            },
                            "href": "https://api.spotify.com/v1/albums/7e6TOKG4POoaQikpefQwbC",
                            "id": "7e6TOKG4POoaQikpefQwbC",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735545c6ac0c2b24cda7b6ad50",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025545c6ac0c2b24cda7b6ad50",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515545c6ac0c2b24cda7b6ad50",
                                    "width": 64
                                }
                            ],
                            "name": "[+ +]",
                            "release_date": "2018-08-20",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:7e6TOKG4POoaQikpefQwbC"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 196863,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRE081800012"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0RqzUS7AkBhQDrBxcGFeDv"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0RqzUS7AkBhQDrBxcGFeDv",
                        "id": "0RqzUS7AkBhQDrBxcGFeDv",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Hi High",
                        "popularity": 52,
                        "preview_url": "https://p.scdn.co/mp3-preview/fe957e454090ffc3f40bcd86daa5062f14073372?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:0RqzUS7AkBhQDrBxcGFeDv"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-18T06:54:28Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                                    "id": "4SpbR6yFEvexJuaBpgAU5p",
                                    "name": "LE SSERAFIM",
                                    "type": "artist",
                                    "uri": "spotify:artist:4SpbR6yFEvexJuaBpgAU5p"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3u0ggfmK0vjuHMNdUbtaa9"
                            },
                            "href": "https://api.spotify.com/v1/albums/3u0ggfmK0vjuHMNdUbtaa9",
                            "id": "3u0ggfmK0vjuHMNdUbtaa9",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273a991995542d50a691b9ae5be",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851a991995542d50a691b9ae5be",
                                    "width": 64
                                }
                            ],
                            "name": "ANTIFRAGILE",
                            "release_date": "2022-10-17",
                            "release_date_precision": "day",
                            "total_tracks": 5,
                            "type": "album",
                            "uri": "spotify:album:3u0ggfmK0vjuHMNdUbtaa9"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
                                },
                                "href": "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                                "id": "4SpbR6yFEvexJuaBpgAU5p",
                                "name": "LE SSERAFIM",
                                "type": "artist",
                                "uri": "spotify:artist:4SpbR6yFEvexJuaBpgAU5p"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 184444,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2230329"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4fsQ0K37TOXa3hEQfjEic1"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4fsQ0K37TOXa3hEQfjEic1",
                        "id": "4fsQ0K37TOXa3hEQfjEic1",
                        "is_local": false,
                        "is_playable": true,
                        "name": "ANTIFRAGILE",
                        "popularity": 85,
                        "preview_url": "https://p.scdn.co/mp3-preview/97a1c7e470172e0993f8f65dc109ab9d017d7adc?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:4fsQ0K37TOXa3hEQfjEic1"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-21T01:02:31Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH",
                                    "id": "7nqOGRxlXj7N2JYbgNEjYH",
                                    "name": "SEVENTEEN",
                                    "type": "artist",
                                    "uri": "spotify:artist:7nqOGRxlXj7N2JYbgNEjYH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2PIReru2w5i4JXOzeZnamd"
                            },
                            "href": "https://api.spotify.com/v1/albums/2PIReru2w5i4JXOzeZnamd",
                            "id": "2PIReru2w5i4JXOzeZnamd",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ac2a400576ac7f35aa7428b",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ac2a400576ac7f35aa7428b",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ac2a400576ac7f35aa7428b",
                                    "width": 64
                                }
                            ],
                            "name": "SEVENTEEN 9th Mini Album 'Attacca'",
                            "release_date": "2021-10-22",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:2PIReru2w5i4JXOzeZnamd"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH"
                                },
                                "href": "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH",
                                "id": "7nqOGRxlXj7N2JYbgNEjYH",
                                "name": "SEVENTEEN",
                                "type": "artist",
                                "uri": "spotify:artist:7nqOGRxlXj7N2JYbgNEjYH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 180360,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2135688"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6LnEoRQKMcaFTR5UvaKuBy"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6LnEoRQKMcaFTR5UvaKuBy",
                        "id": "6LnEoRQKMcaFTR5UvaKuBy",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Rock with you",
                        "popularity": 70,
                        "preview_url": "https://p.scdn.co/mp3-preview/08e05433359d32fa2cdffcf2c631ac25ff02085f?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:6LnEoRQKMcaFTR5UvaKuBy"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-21T02:37:25Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3hJXmK5gWN9P6jtZL0Lr2y"
                            },
                            "href": "https://api.spotify.com/v1/albums/3hJXmK5gWN9P6jtZL0Lr2y",
                            "id": "3hJXmK5gWN9P6jtZL0Lr2y",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736034eda385497f614778f457",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026034eda385497f614778f457",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516034eda385497f614778f457",
                                    "width": 64
                                }
                            ],
                            "name": "Twicetagram",
                            "release_date": "2017-10-30",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:3hJXmK5gWN9P6jtZL0Lr2y"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 207813,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1700096"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0IEVKWduAaMcZepZQVr80T"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0IEVKWduAaMcZepZQVr80T",
                        "id": "0IEVKWduAaMcZepZQVr80T",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Likey",
                        "popularity": 65,
                        "preview_url": "https://p.scdn.co/mp3-preview/4d2607e06bb2917248feb7095cf1b70332f8d7d7?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0IEVKWduAaMcZepZQVr80T"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-21T09:41:32Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                                    "id": "4SpbR6yFEvexJuaBpgAU5p",
                                    "name": "LE SSERAFIM",
                                    "type": "artist",
                                    "uri": "spotify:artist:4SpbR6yFEvexJuaBpgAU5p"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4Mc7WwYH41hgUWeKX25Sot"
                            },
                            "href": "https://api.spotify.com/v1/albums/4Mc7WwYH41hgUWeKX25Sot",
                            "id": "4Mc7WwYH41hgUWeKX25Sot",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2739030184114911536d5f77555",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e029030184114911536d5f77555",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048519030184114911536d5f77555",
                                    "width": 64
                                }
                            ],
                            "name": "FEARLESS",
                            "release_date": "2022-05-02",
                            "release_date_precision": "day",
                            "total_tracks": 5,
                            "type": "album",
                            "uri": "spotify:album:4Mc7WwYH41hgUWeKX25Sot"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4SpbR6yFEvexJuaBpgAU5p"
                                },
                                "href": "https://api.spotify.com/v1/artists/4SpbR6yFEvexJuaBpgAU5p",
                                "id": "4SpbR6yFEvexJuaBpgAU5p",
                                "name": "LE SSERAFIM",
                                "type": "artist",
                                "uri": "spotify:artist:4SpbR6yFEvexJuaBpgAU5p"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 196540,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2219221"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6wBpO4Xc4YgShnENGSFA1M"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6wBpO4Xc4YgShnENGSFA1M",
                        "id": "6wBpO4Xc4YgShnENGSFA1M",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Sour Grapes",
                        "popularity": 73,
                        "preview_url": "https://p.scdn.co/mp3-preview/bff42cf0ce07b5a200bac0b0b7305d88b43d67a3?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:6wBpO4Xc4YgShnENGSFA1M"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-23T11:08:41Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1z4g3DjTBBZKhvAroFlhOM",
                                    "id": "1z4g3DjTBBZKhvAroFlhOM",
                                    "name": "Red Velvet",
                                    "type": "artist",
                                    "uri": "spotify:artist:1z4g3DjTBBZKhvAroFlhOM"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3rVtm00UfbuzWOewdm4iYM"
                            },
                            "href": "https://api.spotify.com/v1/albums/3rVtm00UfbuzWOewdm4iYM",
                            "id": "3rVtm00UfbuzWOewdm4iYM",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273df5022bdf1ac4bf52135c4be",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02df5022bdf1ac4bf52135c4be",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851df5022bdf1ac4bf52135c4be",
                                    "width": 64
                                }
                            ],
                            "name": "‘The ReVe Festival’ Finale",
                            "release_date": "2019-12-23",
                            "release_date_precision": "day",
                            "total_tracks": 16,
                            "type": "album",
                            "uri": "spotify:album:3rVtm00UfbuzWOewdm4iYM"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM"
                                },
                                "href": "https://api.spotify.com/v1/artists/1z4g3DjTBBZKhvAroFlhOM",
                                "id": "1z4g3DjTBBZKhvAroFlhOM",
                                "name": "Red Velvet",
                                "type": "artist",
                                "uri": "spotify:artist:1z4g3DjTBBZKhvAroFlhOM"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 210560,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA301900597"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3CYH422oy1cZNoo0GTG1TK",
                        "id": "3CYH422oy1cZNoo0GTG1TK",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Psycho",
                        "popularity": 74,
                        "preview_url": "https://p.scdn.co/mp3-preview/5b13d7f2a66a06c3d15e32dbc44efb174e660418?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3CYH422oy1cZNoo0GTG1TK"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-10-25T01:58:21Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/73B9bjqS2Z5KLXNGqXf64m"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/73B9bjqS2Z5KLXNGqXf64m",
                                    "id": "73B9bjqS2Z5KLXNGqXf64m",
                                    "name": "Weeekly",
                                    "type": "artist",
                                    "uri": "spotify:artist:73B9bjqS2Z5KLXNGqXf64m"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7gzRrGLrI5UmuX7gb7Eujq"
                            },
                            "href": "https://api.spotify.com/v1/albums/7gzRrGLrI5UmuX7gb7Eujq",
                            "id": "7gzRrGLrI5UmuX7gb7Eujq",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2732daddd51ebaf02d030c16402",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e022daddd51ebaf02d030c16402",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048512daddd51ebaf02d030c16402",
                                    "width": 64
                                }
                            ],
                            "name": "Wanna Be RYAN OST",
                            "release_date": "2020-09-25",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:7gzRrGLrI5UmuX7gb7Eujq"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/73B9bjqS2Z5KLXNGqXf64m"
                                },
                                "href": "https://api.spotify.com/v1/artists/73B9bjqS2Z5KLXNGqXf64m",
                                "id": "73B9bjqS2Z5KLXNGqXf64m",
                                "name": "Weeekly",
                                "type": "artist",
                                "uri": "spotify:artist:73B9bjqS2Z5KLXNGqXf64m"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 120293,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382005597"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2qxeLdC4vEFNT0FM0ZECEX"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2qxeLdC4vEFNT0FM0ZECEX",
                        "id": "2qxeLdC4vEFNT0FM0ZECEX",
                        "is_local": false,
                        "is_playable": true,
                        "name": "BOOM CHI KI",
                        "popularity": 27,
                        "preview_url": "https://p.scdn.co/mp3-preview/322e571ca8f0a70d69ac56bf18ce0dd29486b543?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2qxeLdC4vEFNT0FM0ZECEX"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-01T04:49:50Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                    "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                    "name": "IU",
                                    "type": "artist",
                                    "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/01dPJcwyht77brL4JQiR8R"
                            },
                            "href": "https://api.spotify.com/v1/albums/01dPJcwyht77brL4JQiR8R",
                            "id": "01dPJcwyht77brL4JQiR8R",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e024ed058b71650a6ca2c04adff",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
                                    "width": 64
                                }
                            ],
                            "name": "IU 5th Album 'LILAC'",
                            "release_date": "2021-03-25",
                            "release_date_precision": "day",
                            "total_tracks": 10,
                            "type": "album",
                            "uri": "spotify:album:01dPJcwyht77brL4JQiR8R"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                "name": "IU",
                                "type": "artist",
                                "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 214253,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382102077"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5xrtzzzikpG3BLbo4q1Yul"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5xrtzzzikpG3BLbo4q1Yul",
                        "id": "5xrtzzzikpG3BLbo4q1Yul",
                        "is_local": false,
                        "is_playable": true,
                        "name": "LILAC",
                        "popularity": 69,
                        "preview_url": "https://p.scdn.co/mp3-preview/ccd524ffc8fe8f2e2972bfe2641a8347966da478?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5xrtzzzikpG3BLbo4q1Yul"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-03T07:29:43Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                    "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                    "name": "IU",
                                    "type": "artist",
                                    "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/01dPJcwyht77brL4JQiR8R"
                            },
                            "href": "https://api.spotify.com/v1/albums/01dPJcwyht77brL4JQiR8R",
                            "id": "01dPJcwyht77brL4JQiR8R",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e024ed058b71650a6ca2c04adff",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048514ed058b71650a6ca2c04adff",
                                    "width": 64
                                }
                            ],
                            "name": "IU 5th Album 'LILAC'",
                            "release_date": "2021-03-25",
                            "release_date_precision": "day",
                            "total_tracks": 10,
                            "type": "album",
                            "uri": "spotify:album:01dPJcwyht77brL4JQiR8R"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU"
                                },
                                "href": "https://api.spotify.com/v1/artists/3HqSLMAZ3g3d5poNaI7GOU",
                                "id": "3HqSLMAZ3g3d5poNaI7GOU",
                                "name": "IU",
                                "type": "artist",
                                "uri": "spotify:artist:3HqSLMAZ3g3d5poNaI7GOU"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 195546,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382100464"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5nCwjUUsmBuNZKn9Xu10Os"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5nCwjUUsmBuNZKn9Xu10Os",
                        "id": "5nCwjUUsmBuNZKn9Xu10Os",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Celebrity",
                        "popularity": 63,
                        "preview_url": "https://p.scdn.co/mp3-preview/ab879698733f3b9ff65a70a4be0b60b92b94bb59?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:5nCwjUUsmBuNZKn9Xu10Os"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-03T16:36:52Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH",
                                    "id": "7nqOGRxlXj7N2JYbgNEjYH",
                                    "name": "SEVENTEEN",
                                    "type": "artist",
                                    "uri": "spotify:artist:7nqOGRxlXj7N2JYbgNEjYH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/15pRJdCJtDyzQaY9tGs750"
                            },
                            "href": "https://api.spotify.com/v1/albums/15pRJdCJtDyzQaY9tGs750",
                            "id": "15pRJdCJtDyzQaY9tGs750",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c31e3f3a15f96cfc4c8f7b7a",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c31e3f3a15f96cfc4c8f7b7a",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c31e3f3a15f96cfc4c8f7b7a",
                                    "width": 64
                                }
                            ],
                            "name": "SEVENTEEN 4th Album Repackage 'SECTOR 17'",
                            "release_date": "2022-07-18",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:15pRJdCJtDyzQaY9tGs750"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH"
                                },
                                "href": "https://api.spotify.com/v1/artists/7nqOGRxlXj7N2JYbgNEjYH",
                                "id": "7nqOGRxlXj7N2JYbgNEjYH",
                                "name": "SEVENTEEN",
                                "type": "artist",
                                "uri": "spotify:artist:7nqOGRxlXj7N2JYbgNEjYH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 178453,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2212522"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3QwiidVHfeE9y5jl4n2MTC"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3QwiidVHfeE9y5jl4n2MTC",
                        "id": "3QwiidVHfeE9y5jl4n2MTC",
                        "is_local": false,
                        "is_playable": true,
                        "name": "_WORLD",
                        "popularity": 70,
                        "preview_url": "https://p.scdn.co/mp3-preview/740b4182ddf76e4f2aa25b12a6a475d92879fb30?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:3QwiidVHfeE9y5jl4n2MTC"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-05T06:49:33Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                                    "id": "28ot3wh4oNmoFOdVajibBl",
                                    "name": "NMIXX",
                                    "type": "artist",
                                    "uri": "spotify:artist:28ot3wh4oNmoFOdVajibBl"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2WraNaeFiJAOFEozKoAtC6"
                            },
                            "href": "https://api.spotify.com/v1/albums/2WraNaeFiJAOFEozKoAtC6",
                            "id": "2WraNaeFiJAOFEozKoAtC6",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c8caa659d37a00d34cbd6359",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c8caa659d37a00d34cbd6359",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c8caa659d37a00d34cbd6359",
                                    "width": 64
                                }
                            ],
                            "name": "ENTWURF",
                            "release_date": "2022-09-19",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:2WraNaeFiJAOFEozKoAtC6"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
                                },
                                "href": "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                                "id": "28ot3wh4oNmoFOdVajibBl",
                                "name": "NMIXX",
                                "type": "artist",
                                "uri": "spotify:artist:28ot3wh4oNmoFOdVajibBl"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 170400,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200098"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6SYVnDzwzMmTGqW13DSiZA"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6SYVnDzwzMmTGqW13DSiZA",
                        "id": "6SYVnDzwzMmTGqW13DSiZA",
                        "is_local": false,
                        "is_playable": true,
                        "name": "COOL (Your rainbow)",
                        "popularity": 59,
                        "preview_url": "https://p.scdn.co/mp3-preview/0d8a384ee751437ca5074027cc0553026e9fec2b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:6SYVnDzwzMmTGqW13DSiZA"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-08T03:43:00Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5Pcx98OUnL52aGZRRQx5v8"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5Pcx98OUnL52aGZRRQx5v8",
                                    "id": "5Pcx98OUnL52aGZRRQx5v8",
                                    "name": "DIA",
                                    "type": "artist",
                                    "uri": "spotify:artist:5Pcx98OUnL52aGZRRQx5v8"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4xOy0xU9PRxZUKB8gvz4uc"
                            },
                            "href": "https://api.spotify.com/v1/albums/4xOy0xU9PRxZUKB8gvz4uc",
                            "id": "4xOy0xU9PRxZUKB8gvz4uc",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2737e980c29d0a8633ef2fcd454",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e027e980c29d0a8633ef2fcd454",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048517e980c29d0a8633ef2fcd454",
                                    "width": 64
                                }
                            ],
                            "name": "Summer Ade",
                            "release_date": "2018-08-09",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:4xOy0xU9PRxZUKB8gvz4uc"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5Pcx98OUnL52aGZRRQx5v8"
                                },
                                "href": "https://api.spotify.com/v1/artists/5Pcx98OUnL52aGZRRQx5v8",
                                "id": "5Pcx98OUnL52aGZRRQx5v8",
                                "name": "DIA",
                                "type": "artist",
                                "uri": "spotify:artist:5Pcx98OUnL52aGZRRQx5v8"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 201470,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA341766630"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3V0iuapewZEztAnnW2lP0r"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3V0iuapewZEztAnnW2lP0r",
                        "id": "3V0iuapewZEztAnnW2lP0r",
                        "is_local": false,
                        "is_playable": true,
                        "name": "WooWoo",
                        "popularity": 37,
                        "preview_url": "https://p.scdn.co/mp3-preview/66115b00e2b74605b0e880580dd2933ada147a9d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:3V0iuapewZEztAnnW2lP0r"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-10T06:06:12Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5Z71xE9prhpHrqL5thVMyK"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5Z71xE9prhpHrqL5thVMyK",
                                    "id": "5Z71xE9prhpHrqL5thVMyK",
                                    "name": "tripleS",
                                    "type": "artist",
                                    "uri": "spotify:artist:5Z71xE9prhpHrqL5thVMyK"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0EsUBCjxGF328J7VRAE48Y"
                            },
                            "href": "https://api.spotify.com/v1/albums/0EsUBCjxGF328J7VRAE48Y",
                            "id": "0EsUBCjxGF328J7VRAE48Y",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2731be910fd8122cd805d651a8d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e021be910fd8122cd805d651a8d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048511be910fd8122cd805d651a8d",
                                    "width": 64
                                }
                            ],
                            "name": "Acid Angel from Asia <ACCESS>",
                            "release_date": "2022-10-28",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:0EsUBCjxGF328J7VRAE48Y"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5Z71xE9prhpHrqL5thVMyK"
                                },
                                "href": "https://api.spotify.com/v1/artists/5Z71xE9prhpHrqL5thVMyK",
                                "id": "5Z71xE9prhpHrqL5thVMyK",
                                "name": "tripleS",
                                "type": "artist",
                                "uri": "spotify:artist:5Z71xE9prhpHrqL5thVMyK"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 164186,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382208119"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1RHTdr5QfviCYI70QPPDJN"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1RHTdr5QfviCYI70QPPDJN",
                        "id": "1RHTdr5QfviCYI70QPPDJN",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Generation",
                        "popularity": 68,
                        "preview_url": "https://p.scdn.co/mp3-preview/57c14e22422d487fa458321e00f15a9fe6532146?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:1RHTdr5QfviCYI70QPPDJN"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-14T21:36:54Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3LFFf4EpKn2krneZ9vozyz"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3LFFf4EpKn2krneZ9vozyz",
                                    "id": "3LFFf4EpKn2krneZ9vozyz",
                                    "name": "JO YURI",
                                    "type": "artist",
                                    "uri": "spotify:artist:3LFFf4EpKn2krneZ9vozyz"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1EAzLUzatSBIs8tA047f5f"
                            },
                            "href": "https://api.spotify.com/v1/albums/1EAzLUzatSBIs8tA047f5f",
                            "id": "1EAzLUzatSBIs8tA047f5f",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273e24e844f2650c498fa703c91",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02e24e844f2650c498fa703c91",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851e24e844f2650c498fa703c91",
                                    "width": 64
                                }
                            ],
                            "name": "Op.22 Y-Waltz : in Major",
                            "release_date": "2022-06-02",
                            "release_date_precision": "day",
                            "total_tracks": 5,
                            "type": "album",
                            "uri": "spotify:album:1EAzLUzatSBIs8tA047f5f"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3LFFf4EpKn2krneZ9vozyz"
                                },
                                "href": "https://api.spotify.com/v1/artists/3LFFf4EpKn2krneZ9vozyz",
                                "id": "3LFFf4EpKn2krneZ9vozyz",
                                "name": "JO YURI",
                                "type": "artist",
                                "uri": "spotify:artist:3LFFf4EpKn2krneZ9vozyz"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 199066,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA492200507"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/00vy9aiFjxMfnKniQAYzrC"
                        },
                        "href": "https://api.spotify.com/v1/tracks/00vy9aiFjxMfnKniQAYzrC",
                        "id": "00vy9aiFjxMfnKniQAYzrC",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Love Shhh!",
                        "popularity": 51,
                        "preview_url": "https://p.scdn.co/mp3-preview/0ef500e9e42dc95d43e38a363ce56429b0fe4c50?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:00vy9aiFjxMfnKniQAYzrC"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-17T07:41:00Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5V1qsQHdXNm4ZEZHWvFnqQ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5V1qsQHdXNm4ZEZHWvFnqQ",
                                    "id": "5V1qsQHdXNm4ZEZHWvFnqQ",
                                    "name": "Dreamcatcher",
                                    "type": "artist",
                                    "uri": "spotify:artist:5V1qsQHdXNm4ZEZHWvFnqQ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4Y5YucmQPgaCJOkmRshYGs"
                            },
                            "href": "https://api.spotify.com/v1/albums/4Y5YucmQPgaCJOkmRshYGs",
                            "id": "4Y5YucmQPgaCJOkmRshYGs",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273dd525e34b35a55ca3763e28d",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02dd525e34b35a55ca3763e28d",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851dd525e34b35a55ca3763e28d",
                                    "width": 64
                                }
                            ],
                            "name": "Raid of Dream",
                            "release_date": "2019-09-18",
                            "release_date_precision": "day",
                            "total_tracks": 5,
                            "type": "album",
                            "uri": "spotify:album:4Y5YucmQPgaCJOkmRshYGs"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5V1qsQHdXNm4ZEZHWvFnqQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/5V1qsQHdXNm4ZEZHWvFnqQ",
                                "id": "5V1qsQHdXNm4ZEZHWvFnqQ",
                                "name": "Dreamcatcher",
                                "type": "artist",
                                "uri": "spotify:artist:5V1qsQHdXNm4ZEZHWvFnqQ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 224760,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRB471901208"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7uvW1F97LfVbOF6bzHs3nO"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7uvW1F97LfVbOF6bzHs3nO",
                        "id": "7uvW1F97LfVbOF6bzHs3nO",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Deja Vu",
                        "popularity": 54,
                        "preview_url": "https://p.scdn.co/mp3-preview/23ead565228dc41b89f6a945a21c1bb527f870b7?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:7uvW1F97LfVbOF6bzHs3nO"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-18T21:12:10Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/71hjsg660uio3Z8bnbB6fS"
                            },
                            "href": "https://api.spotify.com/v1/albums/71hjsg660uio3Z8bnbB6fS",
                            "id": "71hjsg660uio3Z8bnbB6fS",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273af2fda9fb591d43c355c2ac3",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02af2fda9fb591d43c355c2ac3",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851af2fda9fb591d43c355c2ac3",
                                    "width": 64
                                }
                            ],
                            "name": "STAYDOM",
                            "release_date": "2021-04-08",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:71hjsg660uio3Z8bnbB6fS"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 194080,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382102364"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5BXr7hYZQOeRttkeWYTq5S"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5BXr7hYZQOeRttkeWYTq5S",
                        "id": "5BXr7hYZQOeRttkeWYTq5S",
                        "is_local": false,
                        "is_playable": true,
                        "name": "ASAP",
                        "popularity": 66,
                        "preview_url": "https://p.scdn.co/mp3-preview/f2642dbaab0bce8fa5f4e907db7389542dee87c7?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5BXr7hYZQOeRttkeWYTq5S"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-21T10:24:30Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f"
                            },
                            "href": "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f",
                            "id": "3NZ94nQbqimcu2i71qhc4f",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c3040848e6ef0e132c5c8340",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c3040848e6ef0e132c5c8340",
                                    "width": 64
                                }
                            ],
                            "name": "BETWEEN 1&2",
                            "release_date": "2022-08-26",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:3NZ94nQbqimcu2i71qhc4f"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 189346,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200079"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7uAKsykguOnXZSh0WpOW5z"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7uAKsykguOnXZSh0WpOW5z",
                        "id": "7uAKsykguOnXZSh0WpOW5z",
                        "is_local": false,
                        "is_playable": true,
                        "name": "When We Were Kids",
                        "popularity": 55,
                        "preview_url": "https://p.scdn.co/mp3-preview/e1a1be75d2711f63e16c0b9066e623c1099c56bc?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 7,
                        "type": "track",
                        "uri": "spotify:track:7uAKsykguOnXZSh0WpOW5z"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-21T10:26:45Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f"
                            },
                            "href": "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f",
                            "id": "3NZ94nQbqimcu2i71qhc4f",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c3040848e6ef0e132c5c8340",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c3040848e6ef0e132c5c8340",
                                    "width": 64
                                }
                            ],
                            "name": "BETWEEN 1&2",
                            "release_date": "2022-08-26",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:3NZ94nQbqimcu2i71qhc4f"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 176973,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200075"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/63mL1DdcSFfxVJ9XGnSRQz"
                        },
                        "href": "https://api.spotify.com/v1/tracks/63mL1DdcSFfxVJ9XGnSRQz",
                        "id": "63mL1DdcSFfxVJ9XGnSRQz",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Basics",
                        "popularity": 64,
                        "preview_url": "https://p.scdn.co/mp3-preview/4935517cc3348c11ed4bce3d6ffb65b3537e3d2b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:63mL1DdcSFfxVJ9XGnSRQz"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-21T15:03:19Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2GKTroaa4ysyhEdvzpvUoM"
                            },
                            "href": "https://api.spotify.com/v1/albums/2GKTroaa4ysyhEdvzpvUoM",
                            "id": "2GKTroaa4ysyhEdvzpvUoM",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27340d7efd2594a2b6bda60ea18",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0240d7efd2594a2b6bda60ea18",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485140d7efd2594a2b6bda60ea18",
                                    "width": 64
                                }
                            ],
                            "name": "Summer Nights",
                            "release_date": "2018-07-09",
                            "release_date_precision": "day",
                            "total_tracks": 9,
                            "type": "album",
                            "uri": "spotify:album:2GKTroaa4ysyhEdvzpvUoM"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 215400,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1800043"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3HSvFO7qyTaJXFTMeLhbkk"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3HSvFO7qyTaJXFTMeLhbkk",
                        "id": "3HSvFO7qyTaJXFTMeLhbkk",
                        "is_local": false,
                        "is_playable": true,
                        "name": "STUCK",
                        "popularity": 43,
                        "preview_url": "https://p.scdn.co/mp3-preview/5e7fe46573bfeb80eec2bd9f187ead493ce8e678?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 9,
                        "type": "track",
                        "uri": "spotify:track:3HSvFO7qyTaJXFTMeLhbkk"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-21T15:04:23Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/25VunQEW0x2W6ALND2Mh4g"
                            },
                            "href": "https://api.spotify.com/v1/albums/25VunQEW0x2W6ALND2Mh4g",
                            "id": "25VunQEW0x2W6ALND2Mh4g",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273140ba24506e300382e08e6ec",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02140ba24506e300382e08e6ec",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851140ba24506e300382e08e6ec",
                                    "width": 64
                                }
                            ],
                            "name": "YES or YES",
                            "release_date": "2018-11-05",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:25VunQEW0x2W6ALND2Mh4g"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 222546,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1800113"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5QBMMVGf7FahkNOVHgiFR8"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5QBMMVGf7FahkNOVHgiFR8",
                        "id": "5QBMMVGf7FahkNOVHgiFR8",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SUNSET",
                        "popularity": 42,
                        "preview_url": "https://p.scdn.co/mp3-preview/6b6ddfbd46adfdaf166a43a79b6720359fdaf657?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 5,
                        "type": "track",
                        "uri": "spotify:track:5QBMMVGf7FahkNOVHgiFR8"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-22T04:57:49Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                    "id": "6RHTUrRF63xao58xh9FXYJ",
                                    "name": "IVE",
                                    "type": "artist",
                                    "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1XMYvsHRt52sMi6wittWqI"
                            },
                            "href": "https://api.spotify.com/v1/albums/1XMYvsHRt52sMi6wittWqI",
                            "id": "1XMYvsHRt52sMi6wittWqI",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273da343b21617aac0c57e332bb",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02da343b21617aac0c57e332bb",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851da343b21617aac0c57e332bb",
                                    "width": 64
                                }
                            ],
                            "name": "ELEVEN",
                            "release_date": "2021-12-01",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:1XMYvsHRt52sMi6wittWqI"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                                "id": "6RHTUrRF63xao58xh9FXYJ",
                                "name": "IVE",
                                "type": "artist",
                                "uri": "spotify:artist:6RHTUrRF63xao58xh9FXYJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 178453,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382163861"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7n2FZQsaLb7ZRfRPfEeIvr"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7n2FZQsaLb7ZRfRPfEeIvr",
                        "id": "7n2FZQsaLb7ZRfRPfEeIvr",
                        "is_local": false,
                        "is_playable": true,
                        "name": "ELEVEN",
                        "popularity": 74,
                        "preview_url": "https://p.scdn.co/mp3-preview/a6e8ccc7ece8b0d69aac855584e153c8ab866a62?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:7n2FZQsaLb7ZRfRPfEeIvr"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-22T05:44:33Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                    "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                    "name": "EVERGLOW",
                                    "type": "artist",
                                    "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4kMID9cggWEko9mOb1zisI"
                            },
                            "href": "https://api.spotify.com/v1/albums/4kMID9cggWEko9mOb1zisI",
                            "id": "4kMID9cggWEko9mOb1zisI",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c32633331e11b4fe108237f8",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c32633331e11b4fe108237f8",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c32633331e11b4fe108237f8",
                                    "width": 64
                                }
                            ],
                            "name": "-77.82x-78.29",
                            "release_date": "2020-09-21",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:4kMID9cggWEko9mOb1zisI"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3ZZzT0naD25RhY2uZvIKkJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/3ZZzT0naD25RhY2uZvIKkJ",
                                "id": "3ZZzT0naD25RhY2uZvIKkJ",
                                "name": "EVERGLOW",
                                "type": "artist",
                                "uri": "spotify:artist:3ZZzT0naD25RhY2uZvIKkJ"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 210893,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRMIM2026011"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6mIjJONoUMvGPT9Kzrab3L"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6mIjJONoUMvGPT9Kzrab3L",
                        "id": "6mIjJONoUMvGPT9Kzrab3L",
                        "is_local": false,
                        "is_playable": true,
                        "name": "LA DI DA",
                        "popularity": 64,
                        "preview_url": "https://p.scdn.co/mp3-preview/bbdf22288edb56fabf6f65940b3c63c9b7e1c6a4?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:6mIjJONoUMvGPT9Kzrab3L"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-27T17:34:57Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5V1qsQHdXNm4ZEZHWvFnqQ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5V1qsQHdXNm4ZEZHWvFnqQ",
                                    "id": "5V1qsQHdXNm4ZEZHWvFnqQ",
                                    "name": "Dreamcatcher",
                                    "type": "artist",
                                    "uri": "spotify:artist:5V1qsQHdXNm4ZEZHWvFnqQ"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7no7EZnKgoRWBbGMjZo9gB"
                            },
                            "href": "https://api.spotify.com/v1/albums/7no7EZnKgoRWBbGMjZo9gB",
                            "id": "7no7EZnKgoRWBbGMjZo9gB",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27319224fae0aa53341020f5b12",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0219224fae0aa53341020f5b12",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485119224fae0aa53341020f5b12",
                                    "width": 64
                                }
                            ],
                            "name": "1st Album [Dystopia : The Tree of Language]",
                            "release_date": "2020-02-18",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:7no7EZnKgoRWBbGMjZo9gB"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5iKOmg1wFizVwajKeiyzvf"
                                },
                                "href": "https://api.spotify.com/v1/artists/5iKOmg1wFizVwajKeiyzvf",
                                "id": "5iKOmg1wFizVwajKeiyzvf",
                                "name": "SIYEON",
                                "type": "artist",
                                "uri": "spotify:artist:5iKOmg1wFizVwajKeiyzvf"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 243840,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382000100"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2zCUaUgenXGzhMQztjf9qd"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2zCUaUgenXGzhMQztjf9qd",
                        "id": "2zCUaUgenXGzhMQztjf9qd",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Paradise",
                        "popularity": 40,
                        "preview_url": "https://p.scdn.co/mp3-preview/6fabfa8517b62d4f39c753df246dbd0558846668?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 13,
                        "type": "track",
                        "uri": "spotify:track:2zCUaUgenXGzhMQztjf9qd"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-11-28T02:36:04Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5052Ip89wdW8EGdpjEpNeq"
                            },
                            "href": "https://api.spotify.com/v1/albums/5052Ip89wdW8EGdpjEpNeq",
                            "id": "5052Ip89wdW8EGdpjEpNeq",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273d1961ecb307c9e05ec8f7e82",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02d1961ecb307c9e05ec8f7e82",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851d1961ecb307c9e05ec8f7e82",
                                    "width": 64
                                }
                            ],
                            "name": "Formula of Love: O+T=<3",
                            "release_date": "2021-11-12",
                            "release_date_precision": "day",
                            "total_tracks": 16,
                            "type": "album",
                            "uri": "spotify:album:5052Ip89wdW8EGdpjEpNeq"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 194600,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2100098"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0BJMgVrnWIvgYsjq8KaPeh"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0BJMgVrnWIvgYsjq8KaPeh",
                        "id": "0BJMgVrnWIvgYsjq8KaPeh",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SCIENTIST",
                        "popularity": 66,
                        "preview_url": "https://p.scdn.co/mp3-preview/76310c96e127126cf000a43fcde3ab0b2ceeefbd?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:0BJMgVrnWIvgYsjq8KaPeh"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-07T22:41:34Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f"
                            },
                            "href": "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f",
                            "id": "3NZ94nQbqimcu2i71qhc4f",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c3040848e6ef0e132c5c8340",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c3040848e6ef0e132c5c8340",
                                    "width": 64
                                }
                            ],
                            "name": "BETWEEN 1&2",
                            "release_date": "2022-08-26",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:3NZ94nQbqimcu2i71qhc4f"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 195000,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2200078"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0tTotZHPsxyjW3jqNJ1td2"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0tTotZHPsxyjW3jqNJ1td2",
                        "id": "0tTotZHPsxyjW3jqNJ1td2",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Gone",
                        "popularity": 56,
                        "preview_url": "https://p.scdn.co/mp3-preview/917edd6b8f688090948c62d7d64eeb894c61d248?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 6,
                        "type": "track",
                        "uri": "spotify:track:0tTotZHPsxyjW3jqNJ1td2"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-09T16:29:22Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5052Ip89wdW8EGdpjEpNeq"
                            },
                            "href": "https://api.spotify.com/v1/albums/5052Ip89wdW8EGdpjEpNeq",
                            "id": "5052Ip89wdW8EGdpjEpNeq",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273d1961ecb307c9e05ec8f7e82",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02d1961ecb307c9e05ec8f7e82",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851d1961ecb307c9e05ec8f7e82",
                                    "width": 64
                                }
                            ],
                            "name": "Formula of Love: O+T=<3",
                            "release_date": "2021-11-12",
                            "release_date_precision": "day",
                            "total_tracks": 16,
                            "type": "album",
                            "uri": "spotify:album:5052Ip89wdW8EGdpjEpNeq"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 217213,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2100107"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5TYy2SgTQUv6YGWHbryUV8"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5TYy2SgTQUv6YGWHbryUV8",
                        "id": "5TYy2SgTQUv6YGWHbryUV8",
                        "is_local": false,
                        "is_playable": true,
                        "name": "CACTUS",
                        "popularity": 52,
                        "preview_url": "https://p.scdn.co/mp3-preview/ab8919c30442f425dd8f327da5152f7de81f0711?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 10,
                        "type": "track",
                        "uri": "spotify:track:5TYy2SgTQUv6YGWHbryUV8"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-15T08:26:21Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1m0fLOy3wFNcSpwKn75qJz"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1m0fLOy3wFNcSpwKn75qJz",
                                    "id": "1m0fLOy3wFNcSpwKn75qJz",
                                    "name": "DAZBEE",
                                    "type": "artist",
                                    "uri": "spotify:artist:1m0fLOy3wFNcSpwKn75qJz"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0zi3jrMTba0MvtIc99yjZq"
                            },
                            "href": "https://api.spotify.com/v1/albums/0zi3jrMTba0MvtIc99yjZq",
                            "id": "0zi3jrMTba0MvtIc99yjZq",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738042cadecfced8c614b81b84",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028042cadecfced8c614b81b84",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518042cadecfced8c614b81b84",
                                    "width": 64
                                }
                            ],
                            "name": "Bambi",
                            "release_date": "2022-10-11",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:0zi3jrMTba0MvtIc99yjZq"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1m0fLOy3wFNcSpwKn75qJz"
                                },
                                "href": "https://api.spotify.com/v1/artists/1m0fLOy3wFNcSpwKn75qJz",
                                "id": "1m0fLOy3wFNcSpwKn75qJz",
                                "name": "DAZBEE",
                                "type": "artist",
                                "uri": "spotify:artist:1m0fLOy3wFNcSpwKn75qJz"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 203053,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KSA012185534"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6eIUezhD3M6EAtxhQlbQ5i"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6eIUezhD3M6EAtxhQlbQ5i",
                        "id": "6eIUezhD3M6EAtxhQlbQ5i",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Bambi",
                        "popularity": 32,
                        "preview_url": "https://p.scdn.co/mp3-preview/3f41a29421ebb3eb1b20f895e30834731967a80d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:6eIUezhD3M6EAtxhQlbQ5i"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-17T08:16:01Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3hJXmK5gWN9P6jtZL0Lr2y"
                            },
                            "href": "https://api.spotify.com/v1/albums/3hJXmK5gWN9P6jtZL0Lr2y",
                            "id": "3hJXmK5gWN9P6jtZL0Lr2y",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2736034eda385497f614778f457",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e026034eda385497f614778f457",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048516034eda385497f614778f457",
                                    "width": 64
                                }
                            ],
                            "name": "Twicetagram",
                            "release_date": "2017-10-30",
                            "release_date_precision": "day",
                            "total_tracks": 13,
                            "type": "album",
                            "uri": "spotify:album:3hJXmK5gWN9P6jtZL0Lr2y"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 262960,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1700108"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1OFJ8o35oCIcaWjYq0bHOS"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1OFJ8o35oCIcaWjYq0bHOS",
                        "id": "1OFJ8o35oCIcaWjYq0bHOS",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Jaljayo Good Night",
                        "popularity": 44,
                        "preview_url": "https://p.scdn.co/mp3-preview/19514b5baa18ffe837961bf5579ab8aaddf09987?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 13,
                        "type": "track",
                        "uri": "spotify:track:1OFJ8o35oCIcaWjYq0bHOS"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-27T23:08:28Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3aLpWFejbsdyafODLXRqwF"
                            },
                            "href": "https://api.spotify.com/v1/albums/3aLpWFejbsdyafODLXRqwF",
                            "id": "3aLpWFejbsdyafODLXRqwF",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 64
                                }
                            ],
                            "name": "FANCY YOU",
                            "release_date": "2019-04-22",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:3aLpWFejbsdyafODLXRqwF"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 213880,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1900042"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2qQpFbqqkLOGySgNK8wBXt"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2qQpFbqqkLOGySgNK8wBXt",
                        "id": "2qQpFbqqkLOGySgNK8wBXt",
                        "is_local": false,
                        "is_playable": true,
                        "name": "FANCY",
                        "popularity": 73,
                        "preview_url": "https://p.scdn.co/mp3-preview/882cf5e6794767c924e0a084d3c5681468b9ede2?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:2qQpFbqqkLOGySgNK8wBXt"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2022-12-28T00:35:53Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3JWwlQso9kjpJ7q7aw8C2F"
                            },
                            "href": "https://api.spotify.com/v1/albums/3JWwlQso9kjpJ7q7aw8C2F",
                            "id": "3JWwlQso9kjpJ7q7aw8C2F",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273c5b34e22c26ee36af18aa30b",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02c5b34e22c26ee36af18aa30b",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851c5b34e22c26ee36af18aa30b",
                                    "width": 64
                                }
                            ],
                            "name": "Celebrate",
                            "release_date": "2022-07-15",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:3JWwlQso9kjpJ7q7aw8C2F"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 188433,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "JPWP02270839"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5ZwlnR8yGofZ0669mEh8Xm"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5ZwlnR8yGofZ0669mEh8Xm",
                        "id": "5ZwlnR8yGofZ0669mEh8Xm",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Celebrate",
                        "popularity": 63,
                        "preview_url": "https://p.scdn.co/mp3-preview/277823ab1cf2fe6b1a24bd7ebcdd97209f678680?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5ZwlnR8yGofZ0669mEh8Xm"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-05T08:11:32Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                                    "id": "28ot3wh4oNmoFOdVajibBl",
                                    "name": "NMIXX",
                                    "type": "artist",
                                    "uri": "spotify:artist:28ot3wh4oNmoFOdVajibBl"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3AUtpZi3kqsEYDyQ0CCNiH"
                            },
                            "href": "https://api.spotify.com/v1/albums/3AUtpZi3kqsEYDyQ0CCNiH",
                            "id": "3AUtpZi3kqsEYDyQ0CCNiH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738d64ee7e356e13a96062bd0b",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028d64ee7e356e13a96062bd0b",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518d64ee7e356e13a96062bd0b",
                                    "width": 64
                                }
                            ],
                            "name": "AD MARE",
                            "release_date": "2022-02-22",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:3AUtpZi3kqsEYDyQ0CCNiH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/28ot3wh4oNmoFOdVajibBl"
                                },
                                "href": "https://api.spotify.com/v1/artists/28ot3wh4oNmoFOdVajibBl",
                                "id": "28ot3wh4oNmoFOdVajibBl",
                                "name": "NMIXX",
                                "type": "artist",
                                "uri": "spotify:artist:28ot3wh4oNmoFOdVajibBl"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 172936,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA2100138"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3lrNsPdn98i6rxO142pLT6"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3lrNsPdn98i6rxO142pLT6",
                        "id": "3lrNsPdn98i6rxO142pLT6",
                        "is_local": false,
                        "is_playable": true,
                        "name": "O.O",
                        "popularity": 69,
                        "preview_url": "https://p.scdn.co/mp3-preview/9e8d4c80ab6fdd85c35d90b2c0f4175561e861b9?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:3lrNsPdn98i6rxO142pLT6"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-09T02:32:02Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5zQhaDNbiXHRqd8Y51I4vy"
                            },
                            "href": "https://api.spotify.com/v1/albums/5zQhaDNbiXHRqd8Y51I4vy",
                            "id": "5zQhaDNbiXHRqd8Y51I4vy",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273387444ab2fc1f08dfe7915ab",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02387444ab2fc1f08dfe7915ab",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851387444ab2fc1f08dfe7915ab",
                                    "width": 64
                                }
                            ],
                            "name": "Twicecoaster: Lane 1",
                            "release_date": "2016-10-24",
                            "release_date_precision": "day",
                            "total_tracks": 7,
                            "type": "album",
                            "uri": "spotify:album:5zQhaDNbiXHRqd8Y51I4vy"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 175306,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1600088"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6Nqp4bYrZgdVnAmWc9Ek39"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6Nqp4bYrZgdVnAmWc9Ek39",
                        "id": "6Nqp4bYrZgdVnAmWc9Ek39",
                        "is_local": false,
                        "is_playable": true,
                        "name": "One In A Million",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/08a300968753374f9d14130ca3114b464088b0aa?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 7,
                        "type": "track",
                        "uri": "spotify:track:6Nqp4bYrZgdVnAmWc9Ek39"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-09T06:36:19Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                    "id": "7n2Ycct7Beij7Dj7meI4X0",
                                    "name": "TWICE",
                                    "type": "artist",
                                    "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/3aLpWFejbsdyafODLXRqwF"
                            },
                            "href": "https://api.spotify.com/v1/albums/3aLpWFejbsdyafODLXRqwF",
                            "id": "3aLpWFejbsdyafODLXRqwF",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851ff7c2dfd0ed9b2cf6bf9c818",
                                    "width": 64
                                }
                            ],
                            "name": "FANCY YOU",
                            "release_date": "2019-04-22",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:3aLpWFejbsdyafODLXRqwF"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0"
                                },
                                "href": "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                                "id": "7n2Ycct7Beij7Dj7meI4X0",
                                "name": "TWICE",
                                "type": "artist",
                                "uri": "spotify:artist:7n2Ycct7Beij7Dj7meI4X0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 177826,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "US5TA1900045"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5Tfp6aW5UTGvul246N5aS0"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5Tfp6aW5UTGvul246N5aS0",
                        "id": "5Tfp6aW5UTGvul246N5aS0",
                        "is_local": false,
                        "is_playable": true,
                        "name": "HOT",
                        "popularity": 46,
                        "preview_url": "https://p.scdn.co/mp3-preview/fdc0ce1bf25b4502fad386aaccfa0ae5872b2bbd?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 4,
                        "type": "track",
                        "uri": "spotify:track:5Tfp6aW5UTGvul246N5aS0"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-09T06:45:21Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/7F1iAHRYxR3MY7yAEuFqgL"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/7F1iAHRYxR3MY7yAEuFqgL",
                                    "id": "7F1iAHRYxR3MY7yAEuFqgL",
                                    "name": "JIHYO",
                                    "type": "artist",
                                    "uri": "spotify:artist:7F1iAHRYxR3MY7yAEuFqgL"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/0eWeQtF47FUpI8kRLDEiCp"
                            },
                            "href": "https://api.spotify.com/v1/albums/0eWeQtF47FUpI8kRLDEiCp",
                            "id": "0eWeQtF47FUpI8kRLDEiCp",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27312c045008f82e4e833295598",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0212c045008f82e4e833295598",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485112c045008f82e4e833295598",
                                    "width": 64
                                }
                            ],
                            "name": "오늘의 웹툰 (Original Soundtrack) Pt. 1",
                            "release_date": "2022-07-29",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:0eWeQtF47FUpI8kRLDEiCp"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7F1iAHRYxR3MY7yAEuFqgL"
                                },
                                "href": "https://api.spotify.com/v1/artists/7F1iAHRYxR3MY7yAEuFqgL",
                                "id": "7F1iAHRYxR3MY7yAEuFqgL",
                                "name": "JIHYO",
                                "type": "artist",
                                "uri": "spotify:artist:7F1iAHRYxR3MY7yAEuFqgL"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 230597,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRMIM2243213"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3YW9BZAvwIvXF6C7D3cN6r"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3YW9BZAvwIvXF6C7D3cN6r",
                        "id": "3YW9BZAvwIvXF6C7D3cN6r",
                        "is_local": false,
                        "is_playable": true,
                        "name": "I FLY",
                        "popularity": 43,
                        "preview_url": "https://p.scdn.co/mp3-preview/655db686d8c507dc108752904d59e2a4b703028a?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3YW9BZAvwIvXF6C7D3cN6r"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-15T20:54:39Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                                    "id": "6HvZYsbFfjnjFrWF950C9d",
                                    "name": "NewJeans",
                                    "type": "artist",
                                    "uri": "spotify:artist:6HvZYsbFfjnjFrWF950C9d"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/45ozep8uHHnj5CCittuyXj"
                            },
                            "href": "https://api.spotify.com/v1/albums/45ozep8uHHnj5CCittuyXj",
                            "id": "45ozep8uHHnj5CCittuyXj",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851d70036292d54f29e8b68ec01",
                                    "width": 64
                                }
                            ],
                            "name": "NewJeans 'OMG'",
                            "release_date": "2023-01-02",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:45ozep8uHHnj5CCittuyXj"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                                },
                                "href": "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                                "id": "6HvZYsbFfjnjFrWF950C9d",
                                "name": "NewJeans",
                                "type": "artist",
                                "uri": "spotify:artist:6HvZYsbFfjnjFrWF950C9d"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 212253,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2251723"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/65FftemJ1DbbZ45DUfHJXE"
                        },
                        "href": "https://api.spotify.com/v1/tracks/65FftemJ1DbbZ45DUfHJXE",
                        "id": "65FftemJ1DbbZ45DUfHJXE",
                        "is_local": false,
                        "is_playable": true,
                        "name": "OMG",
                        "popularity": 91,
                        "preview_url": "https://p.scdn.co/mp3-preview/b9e344aa96afc45a56df77ca63c78786bdaa0047?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:65FftemJ1DbbZ45DUfHJXE"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-17T21:43:09Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                    "id": "52zMTJCKluDlFwMQWmccY7",
                                    "name": "LOONA",
                                    "type": "artist",
                                    "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/49CwarPH45v2tFRHhnjtPf"
                            },
                            "href": "https://api.spotify.com/v1/albums/49CwarPH45v2tFRHhnjtPf",
                            "id": "49CwarPH45v2tFRHhnjtPf",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27316caa9e546f536939373fb26",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0216caa9e546f536939373fb26",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485116caa9e546f536939373fb26",
                                    "width": 64
                                }
                            ],
                            "name": "[X X]",
                            "release_date": "2019-02-19",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:49CwarPH45v2tFRHhnjtPf"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/52zMTJCKluDlFwMQWmccY7"
                                },
                                "href": "https://api.spotify.com/v1/artists/52zMTJCKluDlFwMQWmccY7",
                                "id": "52zMTJCKluDlFwMQWmccY7",
                                "name": "LOONA",
                                "type": "artist",
                                "uri": "spotify:artist:52zMTJCKluDlFwMQWmccY7"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 237707,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA381900458"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6wNKKoUQfLPmch7cqSFytV"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6wNKKoUQfLPmch7cqSFytV",
                        "id": "6wNKKoUQfLPmch7cqSFytV",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Butterfly",
                        "popularity": 55,
                        "preview_url": "https://p.scdn.co/mp3-preview/ada27eb3dc61ba7f7a34618aa2d3242393af164b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:6wNKKoUQfLPmch7cqSFytV"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:00:17Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5dm3PMCHxTSOdDFZ1hlfMm"
                            },
                            "href": "https://api.spotify.com/v1/albums/5dm3PMCHxTSOdDFZ1hlfMm",
                            "id": "5dm3PMCHxTSOdDFZ1hlfMm",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ecba6eed6a9e14a7e9534b2",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ecba6eed6a9e14a7e9534b2",
                                    "width": 64
                                }
                            ],
                            "name": "BLOOM*IZ",
                            "release_date": "2020-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:5dm3PMCHxTSOdDFZ1hlfMm"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 197173,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900046"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3qhzRGLZajlHWlxzDyHK4B"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3qhzRGLZajlHWlxzDyHK4B",
                        "id": "3qhzRGLZajlHWlxzDyHK4B",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SOMEDAY",
                        "popularity": 42,
                        "preview_url": "https://p.scdn.co/mp3-preview/5c9e1e5e78ab553cc352cc649efbc1de97f1a300?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 11,
                        "type": "track",
                        "uri": "spotify:track:3qhzRGLZajlHWlxzDyHK4B"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:00:55Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5dm3PMCHxTSOdDFZ1hlfMm"
                            },
                            "href": "https://api.spotify.com/v1/albums/5dm3PMCHxTSOdDFZ1hlfMm",
                            "id": "5dm3PMCHxTSOdDFZ1hlfMm",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ecba6eed6a9e14a7e9534b2",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ecba6eed6a9e14a7e9534b2",
                                    "width": 64
                                }
                            ],
                            "name": "BLOOM*IZ",
                            "release_date": "2020-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:5dm3PMCHxTSOdDFZ1hlfMm"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 197972,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900047"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7g2h7EM7nKSUPDuA6ehm29"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7g2h7EM7nKSUPDuA6ehm29",
                        "id": "7g2h7EM7nKSUPDuA6ehm29",
                        "is_local": false,
                        "is_playable": true,
                        "name": "OPEN YOUR EYES",
                        "popularity": 37,
                        "preview_url": "https://p.scdn.co/mp3-preview/bfd287a7b7f8452da054249d961a86aa71a6c26d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 12,
                        "type": "track",
                        "uri": "spotify:track:7g2h7EM7nKSUPDuA6ehm29"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:01:16Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5dm3PMCHxTSOdDFZ1hlfMm"
                            },
                            "href": "https://api.spotify.com/v1/albums/5dm3PMCHxTSOdDFZ1hlfMm",
                            "id": "5dm3PMCHxTSOdDFZ1hlfMm",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ecba6eed6a9e14a7e9534b2",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ecba6eed6a9e14a7e9534b2",
                                    "width": 64
                                }
                            ],
                            "name": "BLOOM*IZ",
                            "release_date": "2020-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:5dm3PMCHxTSOdDFZ1hlfMm"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 203666,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900044"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/19vNcjcAM9KC7ykx9V6eBy"
                        },
                        "href": "https://api.spotify.com/v1/tracks/19vNcjcAM9KC7ykx9V6eBy",
                        "id": "19vNcjcAM9KC7ykx9V6eBy",
                        "is_local": false,
                        "is_playable": true,
                        "name": "DAYDREAM",
                        "popularity": 35,
                        "preview_url": "https://p.scdn.co/mp3-preview/37d8ac0adb1dbb3be32e7e28f5597d61164a1104?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 9,
                        "type": "track",
                        "uri": "spotify:track:19vNcjcAM9KC7ykx9V6eBy"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:01:35Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5dm3PMCHxTSOdDFZ1hlfMm"
                            },
                            "href": "https://api.spotify.com/v1/albums/5dm3PMCHxTSOdDFZ1hlfMm",
                            "id": "5dm3PMCHxTSOdDFZ1hlfMm",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ecba6eed6a9e14a7e9534b2",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ecba6eed6a9e14a7e9534b2",
                                    "width": 64
                                }
                            ],
                            "name": "BLOOM*IZ",
                            "release_date": "2020-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:5dm3PMCHxTSOdDFZ1hlfMm"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 204560,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900043"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0Dw0Vu2BVOA9YjGFOpdk62"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0Dw0Vu2BVOA9YjGFOpdk62",
                        "id": "0Dw0Vu2BVOA9YjGFOpdk62",
                        "is_local": false,
                        "is_playable": true,
                        "name": "YOU & I",
                        "popularity": 36,
                        "preview_url": "https://p.scdn.co/mp3-preview/388251bc53c42a236fb0bfe60c3f0ac100b12175?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 8,
                        "type": "track",
                        "uri": "spotify:track:0Dw0Vu2BVOA9YjGFOpdk62"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:03:08Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5dm3PMCHxTSOdDFZ1hlfMm"
                            },
                            "href": "https://api.spotify.com/v1/albums/5dm3PMCHxTSOdDFZ1hlfMm",
                            "id": "5dm3PMCHxTSOdDFZ1hlfMm",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025ecba6eed6a9e14a7e9534b2",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515ecba6eed6a9e14a7e9534b2",
                                    "width": 64
                                }
                            ],
                            "name": "BLOOM*IZ",
                            "release_date": "2020-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 12,
                            "type": "album",
                            "uri": "spotify:album:5dm3PMCHxTSOdDFZ1hlfMm"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 226786,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900038"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6d3pjHp69A5RABSAJ7zqJH"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6d3pjHp69A5RABSAJ7zqJH",
                        "id": "6d3pjHp69A5RABSAJ7zqJH",
                        "is_local": false,
                        "is_playable": true,
                        "name": "DREAMLIKE",
                        "popularity": 41,
                        "preview_url": "https://p.scdn.co/mp3-preview/b3e11afb85d6453ab13f550963b54c02f78b388b?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:6d3pjHp69A5RABSAJ7zqJH"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-23T09:03:36Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/548UwoyV9v9fTaoEfzoCBb"
                            },
                            "href": "https://api.spotify.com/v1/albums/548UwoyV9v9fTaoEfzoCBb",
                            "id": "548UwoyV9v9fTaoEfzoCBb",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273756af7c3a9d2a2c2ff37a11e",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02756af7c3a9d2a2c2ff37a11e",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851756af7c3a9d2a2c2ff37a11e",
                                    "width": 64
                                }
                            ],
                            "name": "HEART*IZ",
                            "release_date": "2019-04-01",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:548UwoyV9v9fTaoEfzoCBb"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 192851,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900007"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/70QXJyGkuTJDhfxqW2XGED"
                        },
                        "href": "https://api.spotify.com/v1/tracks/70QXJyGkuTJDhfxqW2XGED",
                        "id": "70QXJyGkuTJDhfxqW2XGED",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Up",
                        "popularity": 45,
                        "preview_url": "https://p.scdn.co/mp3-preview/e908e21e13f467f7f2b1c457c75c174c20a61c07?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 6,
                        "type": "track",
                        "uri": "spotify:track:70QXJyGkuTJDhfxqW2XGED"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-01-29T21:01:14Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/7HGjNJBj1NQGNwCzFD2LHj"
                            },
                            "href": "https://api.spotify.com/v1/albums/7HGjNJBj1NQGNwCzFD2LHj",
                            "id": "7HGjNJBj1NQGNwCzFD2LHj",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2735c1dca4c993850471d5d8f14",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e025c1dca4c993850471d5d8f14",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048515c1dca4c993850471d5d8f14",
                                    "width": 64
                                }
                            ],
                            "name": "STEREOTYPE",
                            "release_date": "2021-09-06",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:7HGjNJBj1NQGNwCzFD2LHj"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 190605,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382160815"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4SiwxGPQzlG2r4zatpEzLc"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4SiwxGPQzlG2r4zatpEzLc",
                        "id": "4SiwxGPQzlG2r4zatpEzLc",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SLOW DOWN",
                        "popularity": 50,
                        "preview_url": "https://p.scdn.co/mp3-preview/d2a788e2540402bf77c516e2d799bc820465c3c1?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 3,
                        "type": "track",
                        "uri": "spotify:track:4SiwxGPQzlG2r4zatpEzLc"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-06T02:29:50Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4PrRd0lIunUEiiE5rbZklR"
                            },
                            "href": "https://api.spotify.com/v1/albums/4PrRd0lIunUEiiE5rbZklR",
                            "id": "4PrRd0lIunUEiiE5rbZklR",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273bc125f40131dd5869b2ec36c",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02bc125f40131dd5869b2ec36c",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851bc125f40131dd5869b2ec36c",
                                    "width": 64
                                }
                            ],
                            "name": "Star To A Young Culture",
                            "release_date": "2020-11-12",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:4PrRd0lIunUEiiE5rbZklR"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 212264,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382006274"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/13KR2yNRDrbKwR3dOKCDl4"
                        },
                        "href": "https://api.spotify.com/v1/tracks/13KR2yNRDrbKwR3dOKCDl4",
                        "id": "13KR2yNRDrbKwR3dOKCDl4",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SO BAD",
                        "popularity": 62,
                        "preview_url": "https://p.scdn.co/mp3-preview/35ac1be565e9f11415028ae43dbfd03b9676b87e?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:13KR2yNRDrbKwR3dOKCDl4"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-06T02:30:04Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/2xPdgNkM4yIQmP7axJ1T1o"
                            },
                            "href": "https://api.spotify.com/v1/albums/2xPdgNkM4yIQmP7axJ1T1o",
                            "id": "2xPdgNkM4yIQmP7axJ1T1o",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738ea860a3e6904b875629d672",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028ea860a3e6904b875629d672",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518ea860a3e6904b875629d672",
                                    "width": 64
                                }
                            ],
                            "name": "YOUNG-LUV.COM",
                            "release_date": "2022-02-21",
                            "release_date_precision": "day",
                            "total_tracks": 6,
                            "type": "album",
                            "uri": "spotify:album:2xPdgNkM4yIQmP7axJ1T1o"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 213426,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382203169"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3gFcGnU4kTdMYLXDjH1TK8"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3gFcGnU4kTdMYLXDjH1TK8",
                        "id": "3gFcGnU4kTdMYLXDjH1TK8",
                        "is_local": false,
                        "is_playable": true,
                        "name": "RUN2U",
                        "popularity": 68,
                        "preview_url": "https://p.scdn.co/mp3-preview/48546ca3045fc6d8e079fb944240f1ae98637f3d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3gFcGnU4kTdMYLXDjH1TK8"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-10T10:03:28Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                                    "id": "6YVMFz59CuY7ngCxTxjpxE",
                                    "name": "aespa",
                                    "type": "artist",
                                    "uri": "spotify:artist:6YVMFz59CuY7ngCxTxjpxE"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4r815m6eq8OXYzfqtk3FST"
                            },
                            "href": "https://api.spotify.com/v1/albums/4r815m6eq8OXYzfqtk3FST",
                            "id": "4r815m6eq8OXYzfqtk3FST",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273bbcfc52e0e8f3cecfc91520f",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02bbcfc52e0e8f3cecfc91520f",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851bbcfc52e0e8f3cecfc91520f",
                                    "width": 64
                                }
                            ],
                            "name": "Illusion",
                            "release_date": "2022-06-01",
                            "release_date_precision": "day",
                            "total_tracks": 1,
                            "type": "album",
                            "uri": "spotify:album:4r815m6eq8OXYzfqtk3FST"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6YVMFz59CuY7ngCxTxjpxE"
                                },
                                "href": "https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE",
                                "id": "6YVMFz59CuY7ngCxTxjpxE",
                                "name": "aespa",
                                "type": "artist",
                                "uri": "spotify:artist:6YVMFz59CuY7ngCxTxjpxE"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 195053,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USWB12202133"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5uFqjHOo3Sh0bVPCKf3DdH"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5uFqjHOo3Sh0bVPCKf3DdH",
                        "id": "5uFqjHOo3Sh0bVPCKf3DdH",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Illusion",
                        "popularity": 68,
                        "preview_url": "https://p.scdn.co/mp3-preview/a26b8c1ee1e65d160b3784a0e2c85dafd720b8b7?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5uFqjHOo3Sh0bVPCKf3DdH"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-11T11:40:06Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                    "id": "5r1tUTxVSgvBHnoDuDODPH",
                                    "name": "IZ*ONE",
                                    "type": "artist",
                                    "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/548UwoyV9v9fTaoEfzoCBb"
                            },
                            "href": "https://api.spotify.com/v1/albums/548UwoyV9v9fTaoEfzoCBb",
                            "id": "548UwoyV9v9fTaoEfzoCBb",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273756af7c3a9d2a2c2ff37a11e",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02756af7c3a9d2a2c2ff37a11e",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851756af7c3a9d2a2c2ff37a11e",
                                    "width": 64
                                }
                            ],
                            "name": "HEART*IZ",
                            "release_date": "2019-04-01",
                            "release_date_precision": "day",
                            "total_tracks": 8,
                            "type": "album",
                            "uri": "spotify:album:548UwoyV9v9fTaoEfzoCBb"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5r1tUTxVSgvBHnoDuDODPH"
                                },
                                "href": "https://api.spotify.com/v1/artists/5r1tUTxVSgvBHnoDuDODPH",
                                "id": "5r1tUTxVSgvBHnoDuDODPH",
                                "name": "IZ*ONE",
                                "type": "artist",
                                "uri": "spotify:artist:5r1tUTxVSgvBHnoDuDODPH"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 190506,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA871900005"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/2IHokmA2Cm7IEieaxAMZLl"
                        },
                        "href": "https://api.spotify.com/v1/tracks/2IHokmA2Cm7IEieaxAMZLl",
                        "id": "2IHokmA2Cm7IEieaxAMZLl",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Really Like You",
                        "popularity": 40,
                        "preview_url": "https://p.scdn.co/mp3-preview/dc83005ea9f1de7116619272dfb40cfcee09e5de?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 4,
                        "type": "track",
                        "uri": "spotify:track:2IHokmA2Cm7IEieaxAMZLl"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-14T09:04:03Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                    "id": "01XYiBYaoMJcNhPokrg0l0",
                                    "name": "STAYC",
                                    "type": "artist",
                                    "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/325MEzmbNCQvjsP3oaJh4x"
                            },
                            "href": "https://api.spotify.com/v1/albums/325MEzmbNCQvjsP3oaJh4x",
                            "id": "325MEzmbNCQvjsP3oaJh4x",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273ebbb6b66adf9f2392bb86733",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02ebbb6b66adf9f2392bb86733",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851ebbb6b66adf9f2392bb86733",
                                    "width": 64
                                }
                            ],
                            "name": "Teddy Bear",
                            "release_date": "2023-02-14",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:325MEzmbNCQvjsP3oaJh4x"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0"
                                },
                                "href": "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                                "id": "01XYiBYaoMJcNhPokrg0l0",
                                "name": "STAYC",
                                "type": "artist",
                                "uri": "spotify:artist:01XYiBYaoMJcNhPokrg0l0"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 189773,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA382300511"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/4kSDi21MeOoSvpZs6MveI9"
                        },
                        "href": "https://api.spotify.com/v1/tracks/4kSDi21MeOoSvpZs6MveI9",
                        "id": "4kSDi21MeOoSvpZs6MveI9",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Teddy Bear",
                        "popularity": 70,
                        "preview_url": "https://p.scdn.co/mp3-preview/32f0104f2fd3689e5ea195e2d808a68b3de67013?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:4kSDi21MeOoSvpZs6MveI9"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-14T09:32:19Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/0LOK81e9H5lr61HlGGHqwA"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/0LOK81e9H5lr61HlGGHqwA",
                                    "id": "0LOK81e9H5lr61HlGGHqwA",
                                    "name": "XG",
                                    "type": "artist",
                                    "uri": "spotify:artist:0LOK81e9H5lr61HlGGHqwA"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1Gi6ij4Jxc4qE35i3I0gqS"
                            },
                            "href": "https://api.spotify.com/v1/albums/1Gi6ij4Jxc4qE35i3I0gqS",
                            "id": "1Gi6ij4Jxc4qE35i3I0gqS",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27353f126eb16bb3ab5720b0ba7",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0253f126eb16bb3ab5720b0ba7",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485153f126eb16bb3ab5720b0ba7",
                                    "width": 64
                                }
                            ],
                            "name": "SHOOTING STAR",
                            "release_date": "2023-01-25",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:1Gi6ij4Jxc4qE35i3I0gqS"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LOK81e9H5lr61HlGGHqwA"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LOK81e9H5lr61HlGGHqwA",
                                "id": "0LOK81e9H5lr61HlGGHqwA",
                                "name": "XG",
                                "type": "artist",
                                "uri": "spotify:artist:0LOK81e9H5lr61HlGGHqwA"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 203556,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "JPB602104597"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3IelG5zYpWWCZIH4cqWlPV"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3IelG5zYpWWCZIH4cqWlPV",
                        "id": "3IelG5zYpWWCZIH4cqWlPV",
                        "is_local": false,
                        "is_playable": true,
                        "name": "SHOOTING STAR",
                        "popularity": 80,
                        "preview_url": "https://p.scdn.co/mp3-preview/4f29587547fa7807f9536a11df061ade3237bc2d?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:3IelG5zYpWWCZIH4cqWlPV"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-02-17T11:31:39Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1mDDvUPSs2dSr4QKAQmOql"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1mDDvUPSs2dSr4QKAQmOql",
                                    "id": "1mDDvUPSs2dSr4QKAQmOql",
                                    "name": "LIMELIGHT",
                                    "type": "artist",
                                    "uri": "spotify:artist:1mDDvUPSs2dSr4QKAQmOql"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/6bGjdmkGl8QqTa1ElccP3C"
                            },
                            "href": "https://api.spotify.com/v1/albums/6bGjdmkGl8QqTa1ElccP3C",
                            "id": "6bGjdmkGl8QqTa1ElccP3C",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273b1dfa7d187cb7c67dd2e6d1c",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02b1dfa7d187cb7c67dd2e6d1c",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851b1dfa7d187cb7c67dd2e6d1c",
                                    "width": 64
                                }
                            ],
                            "name": "LIMELIGHT DEBUT EP 'LOVE & HAPPINESS'",
                            "release_date": "2023-02-17",
                            "release_date_precision": "day",
                            "total_tracks": 9,
                            "type": "album",
                            "uri": "spotify:album:6bGjdmkGl8QqTa1ElccP3C"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1mDDvUPSs2dSr4QKAQmOql"
                                },
                                "href": "https://api.spotify.com/v1/artists/1mDDvUPSs2dSr4QKAQmOql",
                                "id": "1mDDvUPSs2dSr4QKAQmOql",
                                "name": "LIMELIGHT",
                                "type": "artist",
                                "uri": "spotify:artist:1mDDvUPSs2dSr4QKAQmOql"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 189746,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "KRA492300195"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5HB8Olk0vxhv8ynsh1x04y"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5HB8Olk0vxhv8ynsh1x04y",
                        "id": "5HB8Olk0vxhv8ynsh1x04y",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Honestly",
                        "popularity": 47,
                        "preview_url": "https://p.scdn.co/mp3-preview/a0bd62c0b239d35f09d8a4c94f0bf9df09e017a0?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 1,
                        "type": "track",
                        "uri": "spotify:track:5HB8Olk0vxhv8ynsh1x04y"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-03-01T11:12:37Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                                    "id": "6HvZYsbFfjnjFrWF950C9d",
                                    "name": "NewJeans",
                                    "type": "artist",
                                    "uri": "spotify:artist:6HvZYsbFfjnjFrWF950C9d"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV"
                            },
                            "href": "https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV",
                            "id": "1HMLpmZAnNyl9pxvOnTovV",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209",
                                    "width": 64
                                }
                            ],
                            "name": "NewJeans 1st EP 'New Jeans'",
                            "release_date": "2022-08-01",
                            "release_date_precision": "day",
                            "total_tracks": 4,
                            "type": "album",
                            "uri": "spotify:album:1HMLpmZAnNyl9pxvOnTovV"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d"
                                },
                                "href": "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                                "id": "6HvZYsbFfjnjFrWF950C9d",
                                "name": "NewJeans",
                                "type": "artist",
                                "uri": "spotify:artist:6HvZYsbFfjnjFrWF950C9d"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 179026,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USA2P2230222"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0a4MMyCrzT0En247IhqZbD",
                        "id": "0a4MMyCrzT0En247IhqZbD",
                        "is_local": false,
                        "is_playable": true,
                        "name": "Hype Boy",
                        "popularity": 85,
                        "preview_url": "https://p.scdn.co/mp3-preview/7c55950057fc446dc2ce59671dff4fa6b3ef52a7?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:0a4MMyCrzT0En247IhqZbD"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                },
                {
                    "added_at": "2023-03-05T10:50:06Z",
                    "added_by": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/user/31p7w54s4ddz2pwupt4vtxz6dyhu"
                        },
                        "href": "https://api.spotify.com/v1/users/31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "id": "31p7w54s4ddz2pwupt4vtxz6dyhu",
                        "type": "user",
                        "uri": "spotify:user:31p7w54s4ddz2pwupt4vtxz6dyhu"
                    },
                    "is_local": false,
                    "primary_color": null,
                    "track": {
                        "album": {
                            "album_type": "single",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/0LOK81e9H5lr61HlGGHqwA"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/0LOK81e9H5lr61HlGGHqwA",
                                    "id": "0LOK81e9H5lr61HlGGHqwA",
                                    "name": "XG",
                                    "type": "artist",
                                    "uri": "spotify:artist:0LOK81e9H5lr61HlGGHqwA"
                                }
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/1Gi6ij4Jxc4qE35i3I0gqS"
                            },
                            "href": "https://api.spotify.com/v1/albums/1Gi6ij4Jxc4qE35i3I0gqS",
                            "id": "1Gi6ij4Jxc4qE35i3I0gqS",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b27353f126eb16bb3ab5720b0ba7",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e0253f126eb16bb3ab5720b0ba7",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d0000485153f126eb16bb3ab5720b0ba7",
                                    "width": 64
                                }
                            ],
                            "name": "SHOOTING STAR",
                            "release_date": "2023-01-25",
                            "release_date_precision": "day",
                            "total_tracks": 2,
                            "type": "album",
                            "uri": "spotify:album:1Gi6ij4Jxc4qE35i3I0gqS"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LOK81e9H5lr61HlGGHqwA"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LOK81e9H5lr61HlGGHqwA",
                                "id": "0LOK81e9H5lr61HlGGHqwA",
                                "name": "XG",
                                "type": "artist",
                                "uri": "spotify:artist:0LOK81e9H5lr61HlGGHqwA"
                            }
                        ],
                        "disc_number": 1,
                        "duration_ms": 208065,
                        "episode": false,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "JPB602300033"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3v5o91PrUtf0nmO6j8J7dZ"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3v5o91PrUtf0nmO6j8J7dZ",
                        "id": "3v5o91PrUtf0nmO6j8J7dZ",
                        "is_local": false,
                        "is_playable": true,
                        "name": "LEFT RIGHT",
                        "popularity": 75,
                        "preview_url": "https://p.scdn.co/mp3-preview/a821c8bbf4706683dd234bf9e3c394010bce5dcc?cid=06d1a3f9b0894111afd15a64d7a284af",
                        "track": true,
                        "track_number": 2,
                        "type": "track",
                        "uri": "spotify:track:3v5o91PrUtf0nmO6j8J7dZ"
                    },
                    "video_thumbnail": {
                        "url": null
                    }
                }
            ],
            "limit": 100,
            "next": null,
            "offset": 0,
            "previous": null,
            "total": 95
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "210035",
            "content-type": "application/json; charset=utf-8"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "adapter": [
                "xhr",
                "http"
            ],
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {},
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "http://localhost:8888/data/playlist-items",
            "withCredentials": true,
            "params": {
                "playlist_id": "3TYrgruM7pckSNfIzgG63a"
            }
        },
        "request": {}
    }

    const parse_items = () => {
        const tracks = playlist_items.data.items
        const songIds = tracks.map(item => item.track.id)

        const songBatches = []

        let batch = ""
        for (let i = 1; i <= songIds.length; i++) {
            batch += songIds[i - 1]
            if (i % 50 == 0) {
                songBatches.push(batch)
                batch = ""
                console.log("batch complete")
            } else if (i == songIds.length) {
                songBatches.push(batch.substring(0, batch.length - 1))
            } else {
                batch += ","
            }
        }

        
    }

    const handleRef = (ref) => {
        console.log(ref)
    }

    const handleClick = () => {
        setShowSongs(true)
    }

    const handleCancel = () => {
        setShowSongs(false)
    }

    const getSongs = (id) => {
        const options = {
            route: 'data/playlist-items',
            params: {
                playlist_id: id
            }
        }

        requestSongsData(options)
    }

    useEffect(() => {
        const options = {
            route: 'data/playlists'
        }
        
        if (!playlistData.data) {
            requestPlaylistData(options)
        } else {
            setPlaylists(playlistData.data)
        }
    }, [playlistData.data])

    useEffect(() => {
        if (songsData.data) {
            console.log("success")
            console.log(songsData.data)
        }
    }, [songsData.data])


    return (
        <div className={styles["page-container"]}>
            <div className={styles["playlist-container"]}>
                {playlists && playlists.map((item, index) => {
                    return <span onClick={() => getSongs(item.id)} className={styles.playlist}>{item.name}</span>
                })}
            </div>
            <div className={styles["content-container"]}>
                <div className={styles.graph}>
                    <div className={styles.genres}>
                        <span onClick={parse_items}>Genre</span>
                        <span>Genre</span>
                        <span>Genre</span>
                        <span>Genre</span>
                    </div>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} id="bar-graph" className={styles.bars}>
                        <div onClick={() => handleClick(1)} onMouseEnter={() => handleBar(1)} className={styles.short}><CountUp duration={1} end={25} />%</div>
                        <div onClick={() => handleClick(2)} onMouseEnter={() => handleBar(2)} className={styles.medium}><CountUp duration={1.5} end={50} />%</div>
                        <div onClick={() => handleClick(3)} onMouseEnter={() => handleBar(3)} className={styles.long}>Not currently using actual data</div>
                        <div onClick={() => handleClick(4)} onMouseEnter={() => handleBar(4)} className={styles.short}><CountUp duration={1} end={25} />%</div>
                    </div>
                </div>
                {showSongs && <Songs handleRef={handleRef} handleCancel={handleCancel} className={styles["songs-container"]} />}
            </div>


        </div >
    )
}
