webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(123);

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(119);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(125);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var home = {
  initialize: function initialize() {
    this.showPublic();
  },
  showPublic: function showPublic() {
    document.getElementById('page-header').innerHTML = _header2.default.getContent();
    document.getElementById('page-footer').innerHTML = _footer2.default.getContent();
  }
};

(function () {
  home.initialize();
})();

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _header = __webpack_require__(122);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = {
  getContent: function getContent(option) {
    return (0, _header2.default)(option);
  }
};

exports.default = Header;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(116);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<nav>\n  <ul>\n    <li>\n      <a href="/home.html">主页</a>\n    </li>\n    <li>\n      <a href="/edit.html">编辑</a>\n    </li>\n  </ul>\n</nav>\n';
    return $$out;
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(124);
var runtime = Object.create(detectNode ? global : window);
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(117)))

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(117)))

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _footer = __webpack_require__(126);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = {
  getContent: function getContent(option) {
    var data = Object.assign({}, option, { date: '1998~' + (0, _moment2.default)().year() });
    return (0, _footer2.default)(data);
  }
};

exports.default = Footer;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(116);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<footer>\n  <p>copyright@</p>\n</footer>\n';
    return $$out;
};

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[118]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvY29tbW9uL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmFydCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RldGVjdC1ub2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9jb21tb24vZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvY29tbW9uL2Zvb3Rlci9mb290ZXIuYXJ0Iiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6WyJob21lIiwiaW5pdGlhbGl6ZSIsInNob3dQdWJsaWMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2V0Q29udGVudCIsIkhlYWRlciIsIm9wdGlvbiIsIkZvb3RlciIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRlIiwieWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsMEM7Ozs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTztBQUNYQyxZQURXLHdCQUNDO0FBQ1YsU0FBS0MsVUFBTDtBQUNELEdBSFU7QUFJWEEsWUFKVyx3QkFJQztBQUNWQyxhQUFTQyxjQUFULENBQXdCLGFBQXhCLEVBQ0dDLFNBREgsR0FDZSxpQkFBT0MsVUFBUCxFQURmO0FBRUFILGFBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFDR0MsU0FESCxHQUNlLGlCQUFPQyxVQUFQLEVBRGY7QUFFRDtBQVRVLENBQWI7O0FBWUEsQ0FBQyxZQUFVO0FBQ1ROLE9BQUtDLFVBQUw7QUFDRCxDQUZELEk7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1NLFNBQVM7QUFDYkQsWUFEYSxzQkFDRkUsTUFERSxFQUNNO0FBQ2pCLFdBQU8sc0JBQVVBLE1BQVYsQ0FBUDtBQUNEO0FBSFksQ0FBZjs7a0JBTWVELE07Ozs7Ozs7Ozs7O2FDVGQ7Ozs7Ozs7Ozs7OzhDQ0FEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpQkFBaUI7O0FBRS9EO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7OztBQ2xHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUUsU0FBUztBQUNiSCxZQURhLHNCQUNGRSxNQURFLEVBQ007QUFDakIsUUFBTUUsT0FBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLE1BQWxCLEVBQTBCLEVBQUNLLGdCQUFjLHdCQUFTQyxJQUFULEVBQWYsRUFBMUIsQ0FBYjtBQUNBLFdBQU8sc0JBQVVKLElBQVYsQ0FBUDtBQUNEO0FBSlksQ0FBZjs7a0JBT2VELE07Ozs7Ozs7Ozs7O2FDVmQ7Ozs7Ozs7Ozs7QUNBRCx5QyIsImZpbGUiOiJqcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcGlsZS9ydW50aW1lJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21tb24vaGVhZGVyL2hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbW1vbi9mb290ZXIvZm9vdGVyLmpzJztcbmltcG9ydCAnLi9ob21lLnNjc3MnO1xuXG5jb25zdCBob21lID0ge1xuICBpbml0aWFsaXplKCl7XG4gICAgdGhpcy5zaG93UHVibGljKCk7XG4gIH0sXG4gIHNob3dQdWJsaWMoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1oZWFkZXInKVxuICAgICAgLmlubmVySFRNTCA9IEhlYWRlci5nZXRDb250ZW50KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtZm9vdGVyJylcbiAgICAgIC5pbm5lckhUTUwgPSBGb290ZXIuZ2V0Q29udGVudCgpO1xuICB9XG59O1xuXG4oZnVuY3Rpb24oKXtcbiAgaG9tZS5pbml0aWFsaXplKCk7XG59KSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFnZXMvaG9tZS9ob21lLmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGhlYWRlclRwbCBmcm9tICcuL2hlYWRlci5hcnQnO1xuXG5jb25zdCBIZWFkZXIgPSB7XG4gIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgcmV0dXJuIGhlYWRlclRwbChvcHRpb24pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9jb21tb24vaGVhZGVyL2hlYWRlci5qcyIsIjxuYXY+XG4gIDx1bD5cbiAgICA8bGk+XG4gICAgICA8YSBocmVmPVwiL2hvbWUuaHRtbFwiPuS4u+mhtTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9XCIvZWRpdC5odG1sXCI+57yW6L6RPC9hPlxuICAgIDwvbGk+XG4gIDwvdWw+XG48L25hdj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9jb21tb24vaGVhZGVyL2hlYWRlci5hcnQiLCIndXNlIHN0cmljdCc7XG5cbi8qISBhcnQtdGVtcGxhdGVAcnVudGltZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG5cbnZhciBkZXRlY3ROb2RlID0gcmVxdWlyZSgnZGV0ZWN0LW5vZGUnKTtcbnZhciBydW50aW1lID0gT2JqZWN0LmNyZWF0ZShkZXRlY3ROb2RlID8gZ2xvYmFsIDogd2luZG93KTtcbnZhciBFU0NBUEVfUkVHID0gL1tcIiYnPD5dLztcblxuLyoqXG4gKiDnvJbnoIHmqKHmnb/ovpPlh7rnmoTlhoXlrrlcbiAqIEBwYXJhbSAge2FueX0gICAgICAgIGNvbnRlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucnVudGltZS4kZXNjYXBlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICByZXR1cm4geG1sRXNjYXBlKHRvU3RyaW5nKGNvbnRlbnQpKTtcbn07XG5cbi8qKlxuICog6L+t5Luj5Zmo77yM5pSv5oyB5pWw57uE5LiO5a+56LGhXG4gKiBAcGFyYW0ge2FycmF5fE9iamVjdH0gZGF0YSBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICBjYWxsYmFjayBcbiAqL1xucnVudGltZS4kZWFjaCA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbX2ldLCBfaSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyDlsIbnm67moIfovazmiJDlrZfnrKZcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhbHVlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLy8g57yW56CBIEhUTUwg5YaF5a65XG5mdW5jdGlvbiB4bWxFc2NhcGUoY29udGVudCkge1xuICAgIHZhciBodG1sID0gJycgKyBjb250ZW50O1xuICAgIHZhciByZWdleFJlc3VsdCA9IEVTQ0FQRV9SRUcuZXhlYyhodG1sKTtcbiAgICBpZiAoIXJlZ2V4UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgbGFzdEluZGV4ID0gdm9pZCAwLFxuICAgICAgICBjaGFyID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzNDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzg7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM5Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjI7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvY29tcGlsZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xudHJ5IHtcbiBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyBcbn0gY2F0Y2goZSkge31cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RldGVjdC1ub2RlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGZvb3RlclRwbCBmcm9tICcuL2Zvb3Rlci5hcnQnO1xuXG5jb25zdCBGb290ZXIgPSB7XG4gIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbiwge2RhdGU6IGAxOTk4fiR7bW9tZW50KCkueWVhcigpfWB9KTtcbiAgICByZXR1cm4gZm9vdGVyVHBsKGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9jb21tb24vZm9vdGVyL2Zvb3Rlci5qcyIsIjxmb290ZXI+XG4gIDxwPmNvcHlyaWdodEA8L3A+XG48L2Zvb3Rlcj5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9jb21tb24vZm9vdGVyL2Zvb3Rlci5hcnQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L3BhZ2VzL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==