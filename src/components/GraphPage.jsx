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
    const [playlistData, requestPlaylistData] = useAxios()
    const [songsData, requestSongsData] = useAxios()
    const graphRef = useRef(null)
    const songRef = useRef(null)

    const getImages = () => {
        const getImages = playlists.map((currentPlaylist) => {
            const plImage = currentPlaylist.images[0].url
            return plImage
        })
        console.log(getImages)
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
            console.log(dataHelpers.parseItems(songsData.data))
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
                        <span>Genre</span>
                        <span onClick={() => getImages()} >Genre</span>
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
