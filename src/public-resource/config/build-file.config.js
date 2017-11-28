require('!!file-loader?name=index.html!../../index.html')
module.exports = {
    js: {
        //html5shiv: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/html5shiv.min.js'),
        //respond: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/ie-fix/respond.min.js'),
        //jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),
        //hotcss: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/hotcss.js'), //此文件直接输出头里,压缩后的
    },
    images: {
        //'favicon': require('!!url-loader?limit=1&name=static/img/[hash]_[name].[ext]!../imgs/favicon.ico'), //这个文件用地址好 大家都是用链接地址
        'logo': require('!!url-loader?limit=1&name=static/img/[hash]_[name].[ext]!../imgs/logo.png'),
    },
    dll: {
      js: require('!!file-loader?name=static/dll/[name].[ext]!../../dll/dll.js'),
      //css: require('!file-loader?name=static/dll/[name].[ext]!../../dll/dll.css'),
    },
}
