module.exports = {
    contentBase: './build/',
    host: '172.18.30.40', //此配置为自己机子的ip 利于手机或者别人测试用
    port: 8181, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    watchContentBase: false
}
