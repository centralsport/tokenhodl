(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("react"));
    else if (typeof define === 'function' && define.amd)
        define(["react"], factory);
    else {
        var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
        for (var i in a)(typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    /******/
                    configurable: false,
                    /******/
                    enumerable: true,
                    /******/
                    get: getter
                    /******/
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 0);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__(1);


            /***/
        }),
        /* 1 */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: true
            });
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__components_Animated_Number__ = __webpack_require__(2);
            /* harmony default export */
            __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_Animated_Number__["a" /* default */ ]);

            /***/
        }),
        /* 2 */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__anime__ = __webpack_require__(9);
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_2__anime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__anime__);
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var defaultFunction = function defaultFunction() {};
            var AnimatedNumber = function(_Component) {
                _inherits(AnimatedNumber, _Component);

                function AnimatedNumber() {
                    var _ref;
                    var _temp, _this, _ret;
                    _classCallCheck(this, AnimatedNumber);
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
                    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AnimatedNumber.__proto__ || Object.getPrototypeOf(AnimatedNumber)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                        animatedValue: 0
                    }, _this.componentDidMount = function() {
                        _this.animateValue();
                    }, _this.componentDidUpdate = function(prevProps) {
                        if (prevProps.value !== _this.props.value) _this.animateValue();
                    }, _this.componentWillUnmount = function() {
                        _this.stopAnimation();
                    }, _this.target = {
                        animatedValue: 0
                    }, _this.updateValue = function(anima) {
                        _this.props.update(anima);
                        var animatedValue = _this.target.animatedValue;
                        _this.setState({
                            animatedValue: animatedValue
                        });
                    }, _this.stopAnimation = function() {
                        if (!_this.instance) return;
                        _this.instance.pause();
                        _this.instance.reset();
                        delete _this.instance;
                    }, _this.animateValue = function() {
                        _this.stopAnimation();
                        var _this$props = _this.props,
                            duration = _this$props.duration,
                            begin = _this$props.begin,
                            easing = _this$props.easing,
                            complete = _this$props.complete,
                            run = _this$props.run,
                            delay = _this$props.delay,
                            value = _this$props.value;
                        _this.instance = __WEBPACK_IMPORTED_MODULE_2__anime___default()({
                            targets: _this.target,
                            animatedValue: value,
                            duration: duration,
                            update: _this.updateValue,
                            easing: easing,
                            begin: begin,
                            complete: complete,
                            run: run,
                            delay: delay
                        });
                    }, _temp), _possibleConstructorReturn(_this, _ret);
                }
                _createClass(AnimatedNumber, [{
                    key: 'render',
                    value: function render() {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
                            className: this.props.className
                        }, this.props.formatValue(Number(this.state.animatedValue)));
                    }
                }]);
                return AnimatedNumber;
            }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
            AnimatedNumber.propTypes = {
                value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired,
                duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
                delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
                formatValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
                begin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
                complete: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
                run: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
                update: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
                easing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
                className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
            };
            AnimatedNumber.defaultProps = {
                duration: 1000,
                formatValue: function formatValue(value) {
                    return value;
                },
                easing: 'linear',
                run: defaultFunction,
                complete: defaultFunction,
                update: defaultFunction,
                begin: defaultFunction,
                delay: 0,
                className: null
            }; /* harmony default export */
            __webpack_exports__["a"] = (AnimatedNumber);

            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports, __webpack_require__) {

            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */

            if (false) {
                var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
                        Symbol.for &&
                        Symbol.for('react.element')) ||
                    0xeac7;

                var isValidElement = function(object) {
                    return typeof object === 'object' &&
                        object !== null &&
                        object.$$typeof === REACT_ELEMENT_TYPE;
                };

                // By explicitly using `prop-types` you are opting into new development behavior.
                // http://fb.me/prop-types-in-prod
                var throwOnDirectAccess = true;
                module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
            } else {
                // By explicitly using `prop-types` you are opting into new production behavior.
                // http://fb.me/prop-types-in-prod
                module.exports = __webpack_require__(5)();
            }


            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */



            var emptyFunction = __webpack_require__(6);
            var invariant = __webpack_require__(7);
            var ReactPropTypesSecret = __webpack_require__(8);

            module.exports = function() {
                function shim(props, propName, componentName, location, propFullName, secret) {
                    if (secret === ReactPropTypesSecret) {
                        // It is still safe when called from React.
                        return;
                    }
                    invariant(
                        false,
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                        'Use PropTypes.checkPropTypes() to call them. ' +
                        'Read more at http://fb.me/use-check-prop-types'
                    );
                };
                shim.isRequired = shim;

                function getShim() {
                    return shim;
                };
                // Important!
                // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
                var ReactPropTypes = {
                    array: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,

                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim
                };

                ReactPropTypes.checkPropTypes = emptyFunction;
                ReactPropTypes.PropTypes = ReactPropTypes;

                return ReactPropTypes;
            };


            /***/
        }),
        /* 6 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             *
             * 
             */

            function makeEmptyFunction(arg) {
                return function() {
                    return arg;
                };
            }

            /**
             * This function accepts and discards inputs; it has no side effects. This is
             * primarily useful idiomatically for overridable function endpoints which
             * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
             */
            var emptyFunction = function emptyFunction() {};

            emptyFunction.thatReturns = makeEmptyFunction;
            emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
            emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
            emptyFunction.thatReturnsNull = makeEmptyFunction(null);
            emptyFunction.thatReturnsThis = function() {
                return this;
            };
            emptyFunction.thatReturnsArgument = function(arg) {
                return arg;
            };

            module.exports = emptyFunction;

            /***/
        }),
        /* 7 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             *
             */



            /**
             * Use invariant() to assert state which your program assumes to be true.
             *
             * Provide sprintf-style format (only %s is supported) and arguments
             * to provide information about what broke and what you were
             * expecting.
             *
             * The invariant message will be stripped in production, but the invariant
             * will remain to ensure logic does not differ in production.
             */

            var validateFormat = function validateFormat(format) {};

            if (false) {
                validateFormat = function validateFormat(format) {
                    if (format === undefined) {
                        throw new Error('invariant requires an error message argument');
                    }
                };
            }

            function invariant(condition, format, a, b, c, d, e, f) {
                validateFormat(format);

                if (!condition) {
                    var error;
                    if (format === undefined) {
                        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
                    } else {
                        var args = [a, b, c, d, e, f];
                        var argIndex = 0;
                        error = new Error(format.replace(/%s/g, function() {
                            return args[argIndex++];
                        }));
                        error.name = 'Invariant Violation';
                    }

                    error.framesToPop = 1; // we don't care about invariant's own frame
                    throw error;
                }
            }

            module.exports = invariant;

            /***/
        }),
        /* 8 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Copyright (c) 2013-present, Facebook, Inc.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */



            var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

            module.exports = ReactPropTypesSecret;


            /***/
        }),
        /* 9 */
        /***/
        (function(module, exports) {

            var _this = this; /* eslint-disable */
            (function(root, factory) {
                module.exports = factory();
            })(this, function() { // Defaults
                var defaultInstanceSettings = {
                    update: undefined,
                    begin: undefined,
                    run: undefined,
                    complete: undefined,
                    loop: 1,
                    direction: 'normal',
                    autoplay: true,
                    offset: 0
                };
                var defaultTweenSettings = {
                    duration: 1000,
                    delay: 0,
                    easing: 'easeOutElastic',
                    elasticity: 500,
                    round: 0
                }; // Utils
                var is = {
                    arr: function arr(a) {
                        return Array.isArray(a);
                    },
                    fnc: function fnc(a) {
                        return typeof a === 'function';
                    },
                    und: function und(a) {
                        return typeof a === 'undefined';
                    }
                }; // BezierEasing https://github.com/gre/bezier-easing
                var bezier = function() {
                    var kSplineTableSize = 11;
                    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

                    function A(aA1, aA2) {
                        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
                    }

                    function B(aA1, aA2) {
                        return 3.0 * aA2 - 6.0 * aA1;
                    }

                    function C(aA1) {
                        return 3.0 * aA1;
                    }

                    function calcBezier(aT, aA1, aA2) {
                        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
                    }

                    function bezier(mX1, mY1, mX2, mY2) {
                        if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) return;
                        var sampleValues = new Float32Array(kSplineTableSize);
                        if (mX1 !== mY1 || mX2 !== mY2) {
                            for (var i = 0; i < kSplineTableSize; i += 1) {
                                sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
                            }
                        }
                        return function(x) {
                            if (mX1 === mY1 && mX2 === mY2) return x;
                            if (x === 0) return 0;
                            if (x === 1) return 1;
                        };
                    }
                    return bezier;
                }();
                var easings = function() {
                    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic']; // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/
                    function elastic(t, p) {
                        return t === 0 || t === 1 ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2.0) * Math.asin(1)) * (Math.PI * 2) / p);
                    } // Approximated Penner equations http://matthewlein.com/ceaser/
                    var equations = {
                        In: [
                            [0.550, 0.085, 0.680, 0.530], /* InQuad */
                            [0.550, 0.055, 0.675, 0.190], /* InCubic */
                            [0.895, 0.030, 0.685, 0.220], /* InQuart */
                            [0.755, 0.050, 0.855, 0.060], /* InQuint */
                            [0.470, 0.000, 0.745, 0.715], /* InSine */
                            [0.950, 0.050, 0.795, 0.035], /* InExpo */
                            [0.600, 0.040, 0.980, 0.335], /* InCirc */
                            [0.600, -0.280, 0.735, 0.045], /* InBack */ elastic
                        ],
                        Out: [
                            [0.250, 0.460, 0.450, 0.940], /* OutQuad */
                            [0.215, 0.610, 0.355, 1.000], /* OutCubic */
                            [0.165, 0.840, 0.440, 1.000], /* OutQuart */
                            [0.230, 1.000, 0.320, 1.000], /* OutQuint */
                            [0.390, 0.575, 0.565, 1.000], /* OutSine */
                            [0.190, 1.000, 0.220, 1.000], /* OutExpo */
                            [0.075, 0.820, 0.165, 1.000], /* OutCirc */
                            [0.175, 0.885, 0.320, 1.275], /* OutBack */
                            function(t, f) {
                                return 1 - elastic(1 - t, f);
                            }
                        ],
                        InOut: [
                            [0.455, 0.030, 0.515, 0.955], /* InOutQuad */
                            [0.645, 0.045, 0.355, 1.000], /* InOutCubic */
                            [0.770, 0.000, 0.175, 1.000], /* InOutQuart */
                            [0.860, 0.000, 0.070, 1.000], /* InOutQuint */
                            [0.445, 0.050, 0.550, 0.950], /* InOutSine */
                            [1.000, 0.000, 0.000, 1.000], /* InOutExpo */
                            [0.785, 0.135, 0.150, 0.860], /* InOutCirc */
                            [0.680, -0.550, 0.265, 1.550], /* InOutBack */
                            function(t, f) {
                                return t < 0.5 ? elastic(t * 2, f) / 2 : 1 - elastic(t * -2 + 2, f) / 2;
                            }
                        ]
                    };
                    var functions = {
                        linear: bezier(0.250, 0.250, 0.750, 0.750)
                    };
                    Object.keys(equations).forEach(function(type) {
                        equations[type].forEach(function(f, i) {
                            functions['ease' + type + names[i]] = is.fnc(f) ? f : bezier.apply(_this, f);
                        });
                    });
                    return functions;
                }(); // Arrays
                function filterArray(arr, callback) {
                    var len = arr.length;
                    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
                    var result = [];
                    for (var i = 0; i < len; i += 1) {
                        if (i in arr) {
                            var val = arr[i];
                            if (callback.call(thisArg, val, i, arr)) {
                                result.push(val);
                            }
                        }
                    }
                    return result;
                }

                function flattenArray(arr) {
                    return arr.reduce(function(a, b) {
                        return a.concat(is.arr(b) ? flattenArray(b) : b);
                    }, []);
                }

                function toArray(o) {
                    return [o];
                } // Objects
                function cloneObject(o) {
                    var clone = {};
                    for (var p in o) {
                        clone[p] = o[p];
                    }
                    return clone;
                }

                function replaceObjectProps(o1, o2) {
                    var o = cloneObject(o1);
                    for (var p in o1) {
                        o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
                    }
                    return o;
                }

                function mergeObjects(o1, o2) {
                    var o = cloneObject(o1);
                    for (var p in o2) {
                        o[p] = is.und(o1[p]) ? o2[p] : o1[p];
                    }
                    return o;
                } // Values
                function minMaxValue(val, min, max) {
                    return Math.min(Math.max(val, min), max);
                }

                function getFunctionValue(val, animatable) {
                    if (!is.fnc(val)) return val;
                    return val(animatable.target, animatable.id, animatable.total);
                }

                function getAnimationType(el, prop) {
                    if (el[prop] != null) return 'object';
                }

                function getOriginalTargetValue(target, propName) {
                    return target[propName] || 0;
                }

                function getRelativeValue(to, from) {
                    return to;
                } // Decompose value
                function decomposeValue(val) {
                    var rgx = /-?\d*\.?\d+/g;
                    var value = '' + val;
                    return {
                        original: value,
                        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
                        strings: []
                    };
                }

                function getAnimatables(targets) {
                    var parsed = toArray(targets);
                    return parsed.map(function(t, i) {
                        return {
                            target: t,
                            id: i,
                            total: parsed.length
                        };
                    });
                } // Properties
                function normalizePropertyTweens(prop, tweenSettings) {
                    var settings = cloneObject(tweenSettings);
                    return toArray(prop).map(function(v, i) { // Default delay value should be applied only on the first tween
                        var delay = !i ? tweenSettings.delay : 0; // Use path object as a tween value
                        var obj = {
                            value: v
                        }; // Set default delay value
                        if (is.und(obj.delay)) obj.delay = delay;
                        return obj;
                    }).map(function(k) {
                        return mergeObjects(k, settings);
                    });
                }

                function getProperties(instanceSettings, tweenSettings, params) {
                    var properties = [];
                    var settings = mergeObjects(instanceSettings, tweenSettings);
                    Object.keys(params).forEach(function(p) {
                        if (!settings.hasOwnProperty(p) && p !== 'targets') {
                            properties.push({
                                name: p,
                                offset: settings.offset,
                                tweens: normalizePropertyTweens(params[p], tweenSettings)
                            });
                        }
                    });
                    return properties;
                } // Tweens
                function normalizeTweenValues(tween, animatable) {
                    var t = {};
                    Object.keys(tween).forEach(function(p) {
                        var value = getFunctionValue(tween[p], animatable);
                        if (is.arr(value)) {
                            value = value.map(function(v) {
                                return getFunctionValue(v, animatable);
                            });
                            if (value.length === 1) value = value[0];
                        }
                        t[p] = value;
                    });
                    t.duration = parseFloat(t.duration);
                    t.delay = parseFloat(t.delay);
                    return t;
                }

                function normalizeTweens(prop, animatable) {
                    var previousTween = void 0;
                    return prop.tweens.map(function(t) {
                        var tween = normalizeTweenValues(t, animatable);
                        var tweenValue = tween.value;
                        var originalValue = animatable.target[prop.name];
                        var previousValue = previousTween ? previousTween.to.original : originalValue;
                        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
                        var to = tweenValue;
                        tween.from = decomposeValue(from);
                        tween.to = decomposeValue(to);
                        tween.start = previousTween ? previousTween.end : prop.offset;
                        tween.end = tween.start + tween.delay + tween.duration;
                        tween.easing = easings[tween.easing];
                        tween.elasticity = (1000 - minMaxValue(tween.elasticity, 1, 999)) / 1000;
                        if (tween.isColor) tween.round = 1;
                        previousTween = tween;
                        return tween;
                    });
                } // Tween progress
                var setTweenProgress = {
                    css: function css(t, p, v) {
                        return t.style[p] = v;
                    },
                    attribute: function attribute(t, p, v) {
                        return t.setAttribute(p, v);
                    },
                    object: function object(t, p, v) {
                        return t[p] = v;
                    },
                    transform: function transform(t, p, v, transforms, id) {
                        if (!transforms[id]) transforms[id] = [];
                        transforms[id].push(p + '(' + v + ')');
                    }
                }; // Animations
                function createAnimation(animatable, prop) {
                    var animType = getAnimationType(animatable.target, prop.name);
                    if (animType) {
                        var tweens = normalizeTweens(prop, animatable);
                        return {
                            type: animType,
                            property: prop.name,
                            animatable: animatable,
                            tweens: tweens,
                            duration: tweens[tweens.length - 1].end,
                            delay: tweens[0].delay
                        };
                    }
                }

                function getAnimations(animatables, properties) {
                    return filterArray(flattenArray(animatables.map(function(animatable) {
                        return properties.map(function(prop) {
                            return createAnimation(animatable, prop);
                        });
                    })), function(a) {
                        return !is.und(a);
                    });
                } // Create Instance
                function getInstanceTimings(type, animations, instanceSettings, tweenSettings) {
                    var isDelay = type === 'delay';
                    if (animations.length) {
                        return (isDelay ? Math.min : Math.max).apply(Math, animations.map(function(anim) {
                            return anim[type];
                        }));
                    }
                    return isDelay ? tweenSettings.delay : instanceSettings.offset + tweenSettings.delay + tweenSettings.duration;
                }

                function createNewInstance(params) {
                    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
                    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
                    var animatables = getAnimatables(params.targets);
                    var properties = getProperties(instanceSettings, tweenSettings, params);
                    var animations = getAnimations(animatables, properties);
                    return mergeObjects(instanceSettings, {
                        children: [],
                        animatables: animatables,
                        animations: animations,
                        duration: getInstanceTimings('duration', animations, instanceSettings, tweenSettings),
                        delay: getInstanceTimings('delay', animations, instanceSettings, tweenSettings)
                    });
                } // Core
                var activeInstances = [];
                var raf = 0;
                var engine = function() {
                    function play() {
                        raf = requestAnimationFrame(step);
                    }

                    function step(t) {
                        var activeLength = activeInstances.length;
                        if (activeLength) {
                            var i = 0;
                            while (i < activeLength) {
                                if (activeInstances[i]) activeInstances[i].tick(t);
                                i += 1;
                            }
                            play();
                        } else {
                            cancelAnimationFrame(raf);
                            raf = 0;
                        }
                    }
                    return play;
                }(); // Public Instance
                function anime() {
                    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var now = void 0,
                        startTime = void 0,
                        lastTime = 0;
                    var resolve = null;

                    function makePromise() {
                        return window.Promise && new Promise(function(_resolve) {
                            return resolve = _resolve;
                        });
                    }
                    var promise = makePromise();
                    var instance = createNewInstance(params);

                    function toggleInstanceDirection() {
                        instance.reversed = !instance.reversed;
                    }

                    function adjustTime(time) {
                        return instance.reversed ? instance.duration - time : time;
                    }

                    function syncInstanceChildren(time) {
                        var children = instance.children;
                        var childrenLength = children.length;
                        if (time >= instance.currentTime) {
                            for (var i = 0; i < childrenLength; i += 1) {
                                children[i].seek(time);
                            }
                        } else {
                            for (var _i = childrenLength; _i--;) {
                                children[_i].seek(time);
                            }
                        }
                    }

                    function setAnimationsProgress(insTime) {
                        var i = 0;
                        var transforms = {};
                        var animations = instance.animations;
                        var animationsLength = animations.length;
                        while (i < animationsLength) {
                            var anim = animations[i];
                            var animatable = anim.animatable;
                            var tweens = anim.tweens;
                            var tweenLength = tweens.length - 1;
                            var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween
                            if (tweenLength) tween = filterArray(tweens, function(t) {
                                return insTime < t.end;
                            })[0] || tween;
                            var elapsed = minMaxValue(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
                            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed, tween.elasticity);
                            var numbers = [];
                            var progress = void 0;
                            var toNumbersLength = tween.to.numbers.length;
                            for (var n = 0; n < toNumbersLength; n += 1) {
                                var value = void 0;
                                var toNumber = tween.to.numbers[n];
                                var fromNumber = tween.from.numbers[n];
                                value = fromNumber + eased * (toNumber - fromNumber);
                                numbers.push(value);
                            } // Manual Array.reduce for better performances
                            progress = numbers[0];
                            setTweenProgress[anim.type](animatable.target, anim.property, progress, transforms, animatable.id);
                            anim.currentValue = progress;
                            i += 1;
                        }
                        instance.currentTime = insTime;
                        instance.progress = insTime / instance.duration * 100;
                    }

                    function setCallback(cb) {
                        if (instance[cb]) instance[cb](instance);
                    }

                    function countIteration() {
                        if (instance.remaining && instance.remaining !== true) {
                            instance.remaining -= 1;
                        }
                    }

                    function setInstanceProgress(engineTime) {
                        var insDuration = instance.duration;
                        var insOffset = instance.offset;
                        var insStart = insOffset + instance.delay;
                        var insCurrentTime = instance.currentTime;
                        var insReversed = instance.reversed;
                        var insTime = adjustTime(engineTime);
                        if (instance.children.length) syncInstanceChildren(insTime);
                        if (insTime >= insStart || !insDuration) {
                            if (!instance.began) {
                                instance.began = true;
                                setCallback('begin');
                            }
                            setCallback('run');
                        }
                        if (insTime > insOffset && insTime < insDuration) {
                            setAnimationsProgress(insTime);
                        } else {
                            if (insTime <= insOffset && insCurrentTime !== 0) {
                                setAnimationsProgress(0);
                                if (insReversed) countIteration();
                            }
                            if (insTime >= insDuration && insCurrentTime !== insDuration || !insDuration) {
                                setAnimationsProgress(insDuration);
                                if (!insReversed) countIteration();
                            }
                        }
                        setCallback('update');
                        if (engineTime >= insDuration) {
                            if (instance.remaining) {
                                startTime = now;
                                if (instance.direction === 'alternate') toggleInstanceDirection();
                            } else {
                                instance.pause();
                                if (!instance.completed) {
                                    instance.completed = true;
                                    setCallback('complete');
                                    if ('Promise' in window) {
                                        resolve();
                                        promise = makePromise();
                                    }
                                }
                            }
                            lastTime = 0;
                        }
                    }
                    instance.reset = function() {
                        var direction = instance.direction;
                        var loops = instance.loop;
                        instance.currentTime = 0;
                        instance.progress = 0;
                        instance.paused = true;
                        instance.began = false;
                        instance.completed = false;
                        instance.reversed = direction === 'reverse';
                        instance.remaining = direction === 'alternate' && loops === 1 ? 2 : loops;
                        setAnimationsProgress(0);
                        for (var i = instance.children.length; i--;) {
                            instance.children[i].reset();
                        }
                    };
                    instance.tick = function(t) {
                        now = t;
                        if (!startTime) startTime = now;
                        var engineTime = (lastTime + now - startTime) * anime.speed;
                        setInstanceProgress(engineTime);
                    };
                    instance.seek = function(time) {
                        setInstanceProgress(adjustTime(time));
                    };
                    instance.pause = function() {
                        var i = activeInstances.indexOf(instance);
                        if (i > -1) activeInstances.splice(i, 1);
                        instance.paused = true;
                    };
                    instance.play = function() {
                        if (!instance.paused) return;
                        instance.paused = false;
                        startTime = 0;
                        lastTime = adjustTime(instance.currentTime);
                        activeInstances.push(instance);
                        if (!raf) engine();
                    };
                    instance.reverse = function() {
                        toggleInstanceDirection();
                        startTime = 0;
                        lastTime = adjustTime(instance.currentTime);
                    };
                    instance.restart = function() {
                        instance.pause();
                        instance.reset();
                        instance.play();
                    };
                    instance.finished = promise;
                    instance.reset();
                    if (instance.autoplay) instance.play();
                    return instance;
                }
                anime.speed = 1;
                anime.running = activeInstances;
                anime.getValue = getOriginalTargetValue;
                anime.bezier = bezier;
                anime.easings = easings;
                return anime;
            });

            /***/
        })
        /******/
    ]);
});


// WEBPACK FOOTER //
// index.js