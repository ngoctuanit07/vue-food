module.exports = {
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-food/' // Thay tên repository của các bạn vào đây nhé
        : '/'
  }
