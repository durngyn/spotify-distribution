const dataHelpers = {
    parseItems: function (playlist_items) {
        console.log(playlist_items)
        const tracks = playlist_items
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
                songBatches.push(batch.substring(0, batch.length))
            } else {
                batch += ","
            }
        }

        return songBatches
    },
    parseArtists: function (playlist_items) {
        console.log(playlist_items)
        const tracks = playlist_items

        let artistIds = tracks.flatMap(item => {
            if (item.track.artists.length > 1) {
                let temp = []
                for (let i = 0; i < item.track.artists.length; i++) {
                    temp = [...temp, item.track.artists[i].id]
                }
                return temp
            }
            return item.track.artists[0].id
        })
        
        artistIds = [...new Set(artistIds)];
        console.log(artistIds)

        const artistBatches = []

        let batch = ""
        for (let i = 1; i <= artistIds.length; i++) {
            const currentArtist = artistIds[i - 1]
            if (!artistBatches.includes(currentArtist)){
                batch += artistIds[i - 1]
                batch += ","
            }
    
            if (i % 50 == 0) {
                artistBatches.push(batch.substring(0, batch.length - 1))
                batch = ""
                console.log("batch complete")
            } else if (i == artistIds.length) {
                artistBatches.push(batch.substring(0, batch.length - 1))
            }
        }

        return artistBatches
    }
}

export default dataHelpers;