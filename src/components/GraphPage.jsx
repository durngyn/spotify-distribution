import React, { useRef } from 'react'
import CountUp from 'react-countup'; import styles from './GraphPage.module.css'
import Songs from './Songs';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useAxios from './hooks/useAxios';
import dataHelpers from './helpers/dataHelpers';

export default function GraphPage({ handleMouseEnter, handleMouseExit, handleBar }) {
    const [showSongs, setShowSongs] = useState(false)
    const [playlists, setPlaylists] = useState(null)
    const [trackIds, setTrackIds] = useState(null)
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
    const [genres, setGenres] = useState(null)
    const [names, setNames] = useState(null)
    const [max, setMax] = useState(null)



    const [playlistData, requestPlaylistData] = useAxios()
    const [songsData, requestSongsData] = useAxios()
    const [artistsData, requestArtistsData] = useAxios()
    const graphRef = useRef(null)
    const songRef = useRef(null)

    const getImages = () => {
        const getImages = playlists.map((currentPlaylist) => {
            const plImage = currentPlaylist.images[0].url

            return plImage
        })
        console.log(getImages)

    }
    const getGenres = () => {
        const getGenres = artistsData.data.flatMap((currentArtists) => {
            return currentArtists.genres.flatMap((currentGenres) => {
                return currentGenres
            })
        })
        console.log(getGenres)

        let obj = {}

        for (let i = 0; i < getGenres.length; i++) {
            if (!obj[getGenres[i]]) {
                obj[getGenres[i]] = 1
            } else {
                obj[getGenres[i]] += 1
            }
        }
        return obj

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
        setSelectedPlaylist(id)
    }

    useEffect(() => {
        if (selectedPlaylist) {
            const options = {
                route: 'data/playlist-items',
                params: {
                    playlist_id: selectedPlaylist
                }
            }

            requestSongsData(options)
        }
    }, [selectedPlaylist])

    useEffect(() => {
        const options = {
            route: 'data/playlists'
        }

        if (!playlistData.data) {
            requestPlaylistData(options)
        } else {
            setPlaylists(playlistData.data)
        }
    }, [JSON.stringify(playlistData.data)])

    useEffect(() => {
        if (songsData.data) {
            console.log("success")
            setTrackIds(dataHelpers.parseArtists(songsData.data))
        }
    }, [JSON.stringify(songsData.data)])

    useEffect(() => {
        if (trackIds) {
            const options = {
                method: 'post',
                route: 'data/multiple-artists',
                data: {
                    batches: trackIds
                }
            }
            console.log(trackIds)
            requestArtistsData(options)
        }
    }, [JSON.stringify(trackIds)])

    useEffect(() => {
        if (artistsData.data) {
            console.log(artistsData.data)
            setGenres(getGenres())
        }
    }, [artistsData.data])

    useEffect(() => {
        if (genres) {
            console.log(genres)
            setNames(Object.keys(genres))
            let max = 0
            const keys = Object.keys(genres)

            console.log(genres)

            for (let i = 0; i < keys.length; i++) {
                max += genres[keys[i]]
            }

            console.log(max)
            setMax(max)
        }
    }, [genres])

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
                        {names && names.map((item, index) => {
                            return <span>{item}</span>
                        })}
                    </div>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} id="bar-graph" className={styles.bars}>
                        {/* <div onClick={() => handleClick(1)} onMouseEnter={() => handleBar(1)} className={styles.short}><CountUp duration={1} end={25} />%</div>
                        <div onClick={() => handleClick(2)} onMouseEnter={() => handleBar(2)} className={styles.medium}><CountUp duration={1.5} end={50} />%</div>
                        <div onClick={() => handleClick(3)} onMouseEnter={() => handleBar(3)} className={styles.long}>Not currently using actual data</div>
                        <div onClick={() => handleClick(4)} onMouseEnter={() => handleBar(4)} className={styles.short}><CountUp duration={1} end={25} />%</div> */}

                        {names && names.map((item, index) => {
                            return <div onClick={() => handleClick(index)} onMouseEnter={() => handleBar(index)} style={{ "width": `calc((${((genres[`${item}`] / max))} * 100%) + 150px)` }} className={styles.long}><CountUp duration={2} decimals={2} end={(genres[`${item}`] / max) * 100} />%</div>
                        })}
                    </div>
                </div>
                {showSongs && <Songs handleRef={handleRef} handleCancel={handleCancel} className={styles["songs-container"]} />}
            </div>


        </div >
    )
}
