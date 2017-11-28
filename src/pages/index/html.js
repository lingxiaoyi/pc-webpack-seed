const content = require('./content.ejs') // 调取存放本页面实际内容的模板文件
const layout = require('layout')
const pageTitle = '猫扑体育手机版_NBA新闻|中超联赛|足球比赛_最全猫扑体育吧'
const pageKeywords = '猫扑体育,体育吧,NBA新闻,中超联赛,足球比赛,体育新闻'
const pageDescription = '猫扑体育是猫扑网体育吧，猫扑体育手机版覆盖CBA|NBA新闻、西甲|英超|中超联赛、欧冠世界杯等足球比赛，集体育新闻、体育图片和体育视频为一体的最全体育吧。猫扑体育手机版包含海量NBA、CBA、中国足球、国际足球、乒乓球、羽毛球、网球、拳击等最新体育赛事抢先报道，还有姚明、孙杨、哈登、梅西等体育明星最新动态和最新比赛、花边新闻。了解最新体育赛程新闻、体育图片新闻，敬请关注猫扑体育吧，最有深度最全的体育新闻吧，期待您的关注！'
const hasLogo = false //判断有没有logo栏
module.exports = layout.init({
    pageTitle,
    pageKeywords,
    pageDescription,
    hasLogo,
}).run(content())
