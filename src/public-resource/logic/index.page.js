import 'pages/index/style.scss'
import config from 'configModule'
import '../libs/lib.prototype'
import _util_ from '../libs/libs.util'
import _AD_ from '../libs/ad.channel'
$(() => {
    let version = '1.0.5' //首页版本号
    console.log(version)
    let {HOST, HOST_DSP_LIST, ORDER_API} = config.API_URL
    let {DOMAIN} = config
    let _domain_ = DOMAIN
    let $swiperSlides = $('#mainSection').children('.swiper-wrapper').children('.swiper-slide') //外层swiper
    let $swiperSlidesNums = $swiperSlides.length
    //导航条元素
    let $body = $('body')
    let $header = $('header')
    let $headNav = $('#headNav')
    let $headNavLi = $headNav.find('.nav-new ul li')
    let $headNavNew = $headNav.find('.nav-new')
    let $pullDownLoadTips = $headNav.children('.pull-down-load-tips')
    $body.append(`<div class="popup" id="popup"></div>`)//加入弹窗
    let $popup = $('#popup')
    // 定义需要传入接口的值
    const _os_ = _util_.getOsType()
    const _recgid_ = _util_.getUid()
    let _qid_ = _util_.getPageQid()
    const _pixel_ = window.screen.width + '*' + window.screen.height
    _qid_ = _AD_['indexGg'][_qid_] ? _qid_ : 'null' //将qid过滤 如果广告中没有定义的就为null
})
