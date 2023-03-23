const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTropology: TextTrackCueList
})

const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})