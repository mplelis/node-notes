if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://mihalis:1234@ds137530.mlab.com:37530/notes-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/notes-dev'
    }
}