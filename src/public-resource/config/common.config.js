const buildFileConfig = require('configDir/build-file.config')
const moduleExports = {
    DIRS: {
        BUILD_FILE: buildFileConfig
    },

    PAGE_ROOT_PATH: '../../',

    DOMAIN: 'mpsports_h5',

    VERSION: '1.0.3' //版本号  用来区分版本上线
}
console.log(moduleExports.VERSION)
/* 帮助确定ie下CORS的代理文件 */
moduleExports.DIRS.SERVER_API_URL = moduleExports.SERVER_API_URL

/* global isOnlinepro:true isTestpro:true*/ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
if (isOnlinepro) { //首页地址
    moduleExports.HOME_URL = 'http://msports.mop.com/'
} else if (isTestpro) {
    moduleExports.HOME_URL = 'http://gxjifen.dftoutiao.com/gx-ued-jser/wangzhijun/code/h5-code/msports.mop.com/build/html/'
} else {
    moduleExports.HOME_URL = '/'
}

if (isOnlinepro) { // 本项目所用的所有接口
    moduleExports.API_URL = {
        HOST: 'https://sportsh5listinterface.mop.com/mopsports_h5/',
        HOME_LUNBO_API: 'https://msports.mop.com/json/msports/home_lunbo.json',
        /*HOST_LIVE: 'https://dfsportslive.dftoutiao.com/dfsports/',
        HOST_DSP_LIST: 'https://dftyttd.dftoutiao.com/partner/list',
        HOST_DSP_DETAIL: 'https://dftyttd.dftoutiao.com/partner/detail',
        ORDER_API: 'https://dfty.dftoutiao.com/index.php/Home/WechatOrder/yuyue?system_id=9&machid=',
        VIDEO_LOG: 'https://dfsportsapplog.dftoutiao.com/dfsportsapplog/videoact',*/
        RZAPI: {
            active: 'https://wapsportslog.mop.com/mopsportsdatah5/active',
            onclick: 'https://wapsportslog.mop.com/mopsportsdatah5/onclick',
            online: 'https://wapsportslog.mop.com/mopsportsdatah5/online'
        }
    }
} else {
    moduleExports.API_URL = {
        HOST: 'http://172.18.254.42:8080/mopsports_h5/',
        HOME_LUNBO_API: 'http://msports.mop.com/json/msports/home_lunbo.json',
        /*HOST_LIVE: 'http://172.18.250.87:8381/dfsports/',
        HOST_DSP_LIST: 'http://106.75.98.65/partner/list',
        HOST_DSP_DETAIL: 'http://106.75.98.65/partner/detail',
        ORDER_API: 'http://dfty.dftoutiao.com/index.php/Home/WechatOrder/yuyue?system_id=9&machid=',
        VIDEO_LOG: 'http://172.18.250.87:8380/dfsportsapplog/videoact',*/
        RZAPI: {
            active: 'http://172.18.254.42:8080/mopsportsdatah5/active',
            onclick: 'http://172.18.254.42:8080/mopsportsdatah5/onclick',
            online: 'http://172.18.254.42:8080/mopsportsdatah5/online'
        }
    }
    /*moduleExports.API_URL = {
        HOST: 'https://sportsh5listinterface.mop.com/mopsports_h5/',
        HOME_LUNBO_API: 'https://msports.mop.com/json/msports/home_lunbo.json',
        /!*HOST_LIVE: 'https://dfsportslive.dftoutiao.com/dfsports/',
        HOST_DSP_LIST: 'https://dftyttd.dftoutiao.com/partner/list',
        HOST_DSP_DETAIL: 'https://dftyttd.dftoutiao.com/partner/detail',
        ORDER_API: 'https://dfty.dftoutiao.com/index.php/Home/WechatOrder/yuyue?system_id=9&machid=',
        VIDEO_LOG: 'https://dfsportsapplog.dftoutiao.com/dfsportsapplog/videoact',*!/
        RZAPI: {
            active: 'https://wapsportslog.mop.com/mopsportsdatah5/active',
            onclick: 'https://wapsportslog.mop.com/mopsportsdatah5/onclick',
            online: 'https://wapsportslog.mop.com/mopsportsdatah5/online'
        }
    }*/
}
module.exports = moduleExports
