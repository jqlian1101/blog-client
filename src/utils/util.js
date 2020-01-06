
export const getDomRect = (dom) => {
    if (!dom) return {};
    return dom.getBoundingClientRect();
}

export const isNumZhEn = (value) => {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
    return reg.test(value);
}
export const isNumber = (value) => {
    const reg = /^[0-9]+([.][0-9]+)?$/;
    return reg.test(value);
}


export const isNull = (value) => {
    if (!value && typeof (value) !== 'undefined' && value !== 0) return true;
    return false;
}

export const isUndefined = (value) => {
    if (typeof (value) === "undefined") return true;
    return false;
}


export const isNil = (value) => {
    if (isNull(value) || isUndefined(value)) return true;
    return false;
}

export const IEVersion = () => {
    var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; // 判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion === 7) {
            return 7;
        } else if (fIEVersion === 8) {
            return 8;
        } else if (fIEVersion === 9) {
            return 9;
        } else if (fIEVersion === 10) {
            return 10;
        } else {
            return 6;   // IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';  // edge
    } else if (isIE11) {
        return 11; // IE11
    } else {
        return -1;// 不是ie浏览器
    }
}



/**
 * 生成随机字符串
 * @param {str} id
 * @param {num} len
 */
export const randomString = (id, len = 5) => {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return `${id}${pwd}`;
}

export const arrSortAndUnique = (arr = []) => {
    arr = Array.from(new Set([...arr]));
    arr.sort((a, b) => a - b)
    return [...arr];
}

export default {
    isNumber,
    isNumZhEn,
    isNull,
    isUndefined,
    isNil,
    IEVersion,
    randomString,
    arrSortAndUnique
}


