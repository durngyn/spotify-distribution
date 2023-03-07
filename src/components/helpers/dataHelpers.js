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
                songBatches.push(batch.substring(0, batch.length - 1))
            } else {
                batch += ","
            }
        }

        return songBatches
    }
}

export default dataHelpers;