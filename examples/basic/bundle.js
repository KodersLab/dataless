/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// should be replaced with import {DatabaseManager, DB} from 'dataless'
	"use strict";
	
	var _regeneratorRuntime = __webpack_require__(2)["default"];
	
	var _srcIndex = __webpack_require__(40);
	
	_srcIndex.DatabaseManager.addConnection("default", {
	    driver: "url",
	    database: "http://localhost:100/api/v1/"
	});
	
	function app() {
	    var profiles, profilesCount, latestProfiles, theProfile, activeProfiles;
	    return _regeneratorRuntime.async(function app$(context$1$0) {
	        while (1) switch (context$1$0.prev = context$1$0.next) {
	            case 0:
	                context$1$0.next = 2;
	                return _regeneratorRuntime.awrap(_srcIndex.DB.table("auth/profiles").get());
	
	            case 2:
	                profiles = context$1$0.sent;
	                context$1$0.next = 5;
	                return _regeneratorRuntime.awrap(_srcIndex.DB.table("auth/profiles").count());
	
	            case 5:
	                profilesCount = context$1$0.sent;
	                context$1$0.next = 8;
	                return _regeneratorRuntime.awrap(_srcIndex.DB.table("auth/profiles").orderBy("id", "DESC").get());
	
	            case 8:
	                latestProfiles = context$1$0.sent;
	                context$1$0.next = 11;
	                return _regeneratorRuntime.awrap(_srcIndex.DB.table("auth/profiles").find(1));
	
	            case 11:
	                theProfile = context$1$0.sent;
	                context$1$0.next = 14;
	                return _regeneratorRuntime.awrap(_srcIndex.DB.table("auth/profiles").where("active", "=", true).get());
	
	            case 14:
	                activeProfiles = context$1$0.sent;
	
	                console.log("There are " + profilesCount + " profiles:", profiles);
	                console.log("Sorted by latest", latestProfiles);
	                console.log("The profile #1 is ", theProfile);
	                console.log("Currently active profiles are", activeProfiles);
	
	            case 19:
	            case "end":
	                return context$1$0.stop();
	        }
	    }, null, this);
	}
	
	_srcIndex.DatabaseManager.connect().then(app, function (err) {
	    console.log(err);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	module.exports = __webpack_require__(42).core.Symbol;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(7);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  delete g.regeneratorRuntime;
	}
	
	module.exports = { "default": module.exports, __esModule: true };
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyNames = __webpack_require__(8)["default"];
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(9)["default"];
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	exports["default"] = function (obj, defaults) {
	  var keys = _Object$getOwnPropertyNames(defaults);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	
	    var value = _Object$getOwnPropertyDescriptor(defaults, key);
	
	    if (value && value.configurable && obj[key] === undefined) {
	      _Object$defineProperty(obj, key, value);
	    }
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequire = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	        value: true
	});
	
	var _grammar = __webpack_require__(16);
	
	exports.Grammar = _interopRequire(_grammar);
	
	var _processor = __webpack_require__(17);
	
	exports.Processor = _interopRequire(_processor);
	
	var _Connection = __webpack_require__(11);
	
	exports.Connection = _interopRequire(_Connection);
	
	var _Query = __webpack_require__(12);
	
	exports.Query = _interopRequire(_Query);
	
	var _DatabaseManager = __webpack_require__(13);
	
	exports.DatabaseManager = _interopRequire(_DatabaseManager);
	
	var _DB = __webpack_require__(14);
	
	exports.DB = _interopRequire(_DB);
	
	var _UrlConnection = __webpack_require__(15);
	
	exports.UrlConnection = _interopRequire(_UrlConnection);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	"use strict";
	
	var _Symbol = __webpack_require__(18)["default"];
	
	var _Symbol$iterator = __webpack_require__(19)["default"];
	
	var _Object$create = __webpack_require__(20)["default"];
	
	var _Promise = __webpack_require__(21)["default"];
	
	!(function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	
	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : result;
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      var enqueueResult =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });
	
	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator, and call generator.return() to
	      // allow the generator a chance to clean up.
	      previousPromise = enqueueResult["catch"](invokeReturn);
	
	      return enqueueResult;
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset();
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
	        this[tempName] = null;
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(22)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(25), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(26)['default'];
	
	var _get = __webpack_require__(27)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _regeneratorRuntime = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _utilsEventEmitter = __webpack_require__(31);
	
	var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);
	
	var _grammarGrammar = __webpack_require__(32);
	
	var _grammarGrammar2 = _interopRequireDefault(_grammarGrammar);
	
	var _processorProcessor = __webpack_require__(33);
	
	var _processorProcessor2 = _interopRequireDefault(_processorProcessor);
	
	var _Query = __webpack_require__(12);
	
	var _Query2 = _interopRequireDefault(_Query);
	
	var Connection = (function (_EventEmitter) {
	    function Connection(pdo) {
	        var database = arguments[1] === undefined ? '' : arguments[1];
	        var tablePrefix = arguments[2] === undefined ? '' : arguments[2];
	        var config = arguments[3] === undefined ? {} : arguments[3];
	
	        _classCallCheck(this, Connection);
	
	        _get(Object.getPrototypeOf(Connection.prototype), 'constructor', this).call(this);
	        this._pdo = null;
	        this._database = null;
	        this._tablePrefix = null;
	        this._config = null;
	        this._reconnector = null;
	        this._queryGrammar = null;
	        this._postProcessor = null;
	        this._pdo = pdo;
	        this._database = database;
	        this._tablePrefix = tablePrefix;
	        this._config = config;
	
	        this.useDefaultQueryGrammar();
	        this.useDefaultPostProcessor();
	    }
	
	    _inherits(Connection, _EventEmitter);
	
	    _createClass(Connection, [{
	        key: 'table',
	        value: function table(_table) {
	            var query = new _Query2['default'](this, this.getQueryGrammar(), this.getPostProcessor());
	            return query.from(_table);
	        }
	    }, {
	        key: 'select',
	        value: function select(query, useReadPdo) {
	            return _regeneratorRuntime.async(function select$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        context$2$0.next = 2;
	                        return _regeneratorRuntime.awrap(this.selectingStatement(query, useReadPdo));
	
	                    case 2:
	                        return context$2$0.abrupt('return', context$2$0.sent);
	
	                    case 3:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'setReconnector',
	        value: function setReconnector() {
	            var reconnector = arguments[0] === undefined ? null : arguments[0];
	
	            this._reconnector = reconnector;
	            return this;
	        }
	    }, {
	        key: 'getConfig',
	        value: function getConfig() {
	            var name = arguments[0] === undefined ? '' : arguments[0];
	
	            return typeof this._config[name] === 'undefined' ? null : this._config[name];
	        }
	    }, {
	        key: 'setConfig',
	        value: function setConfig(name, value) {
	            return this._config[name] = value;
	        }
	    }, {
	        key: 'useDefaultQueryGrammar',
	        value: function useDefaultQueryGrammar() {
	            return this._queryGrammar = new _grammarGrammar2['default']();
	        }
	    }, {
	        key: 'useDefaultPostProcessor',
	        value: function useDefaultPostProcessor() {
	            return this._postProcessor = new _processorProcessor2['default']();
	        }
	    }, {
	        key: 'getQueryGrammar',
	        value: function getQueryGrammar() {
	            return this._queryGrammar;
	        }
	    }, {
	        key: 'getPostProcessor',
	        value: function getPostProcessor() {
	            return this._postProcessor;
	        }
	    }, {
	        key: 'connect',
	        value: function connect() {
	            return _regeneratorRuntime.async(function connect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        throw 'This should be implemented by custom connection.';
	
	                    case 1:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            return _regeneratorRuntime.async(function disconnect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        throw 'This should be implemented by custom connection.';
	
	                    case 1:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'selectingStatement',
	        value: function selectingStatement(query) {
	            var useReadPdo = arguments[1] === undefined ? true : arguments[1];
	            return _regeneratorRuntime.async(function selectingStatement$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        throw 'This should be implemented by custom connection.';
	
	                    case 1:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }]);
	
	    return Connection;
	})(_utilsEventEmitter2['default']);
	
	exports['default'] = Connection;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(28)["default"];
	
	var _classCallCheck = __webpack_require__(29)["default"];
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	var _regeneratorRuntime = __webpack_require__(2)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Query = (function () {
	    function Query(connection, grammar, processor) {
	        _classCallCheck(this, Query);
	
	        this._columns = null;
	        this._aggregate = null;
	        this._from = null;
	        this._with = null;
	        this._filters = null;
	        this._orders = null;
	        this._limit = null;
	        this._offset = null;
	        this._connection = null;
	        this._grammar = null;
	        this._processor = null;
	
	        this._connection = connection;
	        this._grammar = grammar;
	        this._processor = processor;
	    }
	
	    _createClass(Query, [{
	        key: "getQueryGrammar",
	        value: function getQueryGrammar() {
	            return this._queryGrammar;
	        }
	    }, {
	        key: "getPostProcessor",
	        value: function getPostProcessor() {
	            return this._postProcessor;
	        }
	    }, {
	        key: "select",
	        value: function select() {
	            for (var _len = arguments.length, columns = Array(_len), _key = 0; _key < _len; _key++) {
	                columns[_key] = arguments[_key];
	            }
	
	            if (columns.length === 0) return this;
	
	            this._columns = Array.isArray(columns) ? columns : [columns];
	            return this;
	        }
	    }, {
	        key: "addSelect",
	        value: function addSelect() {
	            var columns = arguments[0] === undefined ? [] : arguments[0];
	
	            columns = Array.isArray(columns) ? columns : [columns];
	            this._columns = this._columns === null ? columns : this._columns.concat(columns);
	            return this;
	        }
	    }, {
	        key: "from",
	        value: function from() {
	            var _from2 = arguments[0] === undefined ? null : arguments[0];
	
	            this._from = _from2;
	            return this;
	        }
	    }, {
	        key: "with",
	        value: function _with() {
	            var relations = arguments[0] === undefined ? [] : arguments[0];
	
	            this._with = this._with === null ? relations : this._with.concat(Array.isArray(relations) ? relations : [relations]);
	            return this;
	        }
	    }, {
	        key: "scope",
	        value: function scope(name) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }
	
	            var scope = {
	                type: "scope",
	                name: name,
	                args: args
	            };
	            this._filters = this._filters === null ? [scope] : this._filters.concat([scope]);
	            return this;
	        }
	    }, {
	        key: "where",
	        value: function where(column, operation, value) {
	            var boolean = arguments[3] === undefined ? "and" : arguments[3];
	
	            var where = {
	                type: "where",
	                column: column,
	                operation: operation,
	                value: value,
	                boolean: boolean.toLowerCase()
	            };
	            this._filters = this._filters === null ? [where] : this._filters.concat([where]);
	            return this;
	        }
	    }, {
	        key: "orderBy",
	        value: function orderBy(name) {
	            var dir = arguments[1] === undefined ? "asc" : arguments[1];
	
	            this._orders = this._orders === null ? [[name, dir]] : this._orders.concat([[name, dir]]);
	            return this;
	        }
	    }, {
	        key: "limit",
	        value: function limit() {
	            var _limit2 = arguments[0] === undefined ? null : arguments[0];
	
	            this._limit = _limit2;
	            return this;
	        }
	    }, {
	        key: "offset",
	        value: function offset() {
	            var _offset2 = arguments[0] === undefined ? null : arguments[0];
	
	            this._offset = _offset2;
	            return this;
	        }
	    }, {
	        key: "forPage",
	        value: function forPage(page) {
	            var perPage = arguments[1] === undefined ? 15 : arguments[1];
	
	            return this.offset((page - 1) * perPage).limit(perPage);
	        }
	    }, {
	        key: "toSql",
	        value: function toSql() {
	            return this._grammar.compileSelect(this);
	        }
	    }, {
	        key: "get",
	        value: function get() {
	            var columns = arguments[0] === undefined ? null : arguments[0];
	            return _regeneratorRuntime.async(function get$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        this._columns = this._columns === null ? columns : this._columns;
	                        context$2$0.next = 3;
	                        return _regeneratorRuntime.awrap(this._connection.select(this.toSql()));
	
	                    case 3:
	                        context$2$0.t0 = context$2$0.sent;
	                        return context$2$0.abrupt("return", this._processor.processSelect(this, context$2$0.t0));
	
	                    case 5:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: "first",
	        value: function first() {
	            var columns = arguments[0] === undefined ? null : arguments[0];
	            var prev, result;
	            return _regeneratorRuntime.async(function first$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        prev = this._limit;
	                        result = this.limit(1).get();
	
	                        this._limit = prev;
	                        context$2$0.next = 5;
	                        return _regeneratorRuntime.awrap(result);
	
	                    case 5:
	                        result = context$2$0.sent;
	                        return context$2$0.abrupt("return", result.length === 0 ? null : result[0]);
	
	                    case 7:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: "find",
	        value: function find() {
	            var pks = arguments[0] === undefined ? [] : arguments[0];
	            var columns = arguments[1] === undefined ? null : arguments[1];
	            var filter, result;
	            return _regeneratorRuntime.async(function find$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        pks = Array.isArray(pks) ? pks : [pks];
	                        filter = {
	                            type: "pks",
	                            pks: pks
	                        };
	
	                        this._filters = this._filters === null ? [filter] : this._filters.concat([filter]);
	                        result = this.get(columns);
	
	                        this._filters.splice(this._filters.indexOf(filter), 1);
	                        context$2$0.next = 7;
	                        return _regeneratorRuntime.awrap(result);
	
	                    case 7:
	                        return context$2$0.abrupt("return", context$2$0.sent);
	
	                    case 8:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: "aggregate",
	        value: function aggregate(fn) {
	            var result;
	            return _regeneratorRuntime.async(function aggregate$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        this._aggregate = fn;
	                        result = this.get();
	
	                        this._aggregate = null;
	                        context$2$0.next = 5;
	                        return _regeneratorRuntime.awrap(result);
	
	                    case 5:
	                        result = context$2$0.sent;
	
	                        if (!(result.length > 0)) {
	                            context$2$0.next = 8;
	                            break;
	                        }
	
	                        return context$2$0.abrupt("return", result[0]["aggregate"]);
	
	                    case 8:
	                        throw "Aggregate result was invalid.";
	
	                    case 9:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: "count",
	        value: function count() {
	            return _regeneratorRuntime.async(function count$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        context$2$0.next = 2;
	                        return _regeneratorRuntime.awrap(this.aggregate("count"));
	
	                    case 2:
	                        return context$2$0.abrupt("return", context$2$0.sent);
	
	                    case 3:
	                    case "end":
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }]);
	
	    return Query;
	})();
	
	exports["default"] = Query;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _regeneratorRuntime = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Connection = __webpack_require__(11);
	
	var _Connection2 = _interopRequireDefault(_Connection);
	
	var _UrlConnection = __webpack_require__(15);
	
	var _UrlConnection2 = _interopRequireDefault(_UrlConnection);
	
	var DatabaseManager = (function () {
	    function DatabaseManager() {
	        _classCallCheck(this, DatabaseManager);
	
	        this._connections = {};
	        this._configs = {};
	        this._default = 'default';
	        this._adapters = {
	            url: function url(name, config) {
	                return new _UrlConnection2['default'](null, config['database'], config['prefix'] || '', config);
	            }
	        };
	    }
	
	    _createClass(DatabaseManager, [{
	        key: 'connect',
	        value: function connect() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	            var p, type, connection;
	            return _regeneratorRuntime.async(function connect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        name = name != null ? name : this.getDefaultConnection();
	
	                        p = this.parseConnectionName(name);
	
	                        name = p[0];
	                        type = p[1];
	
	                        if (!(typeof this._connections[name] === 'undefined')) {
	                            context$2$0.next = 10;
	                            break;
	                        }
	
	                        context$2$0.next = 7;
	                        return _regeneratorRuntime.awrap(this.makeConnection(name));
	
	                    case 7:
	                        connection = context$2$0.sent;
	
	                        this.setPdoForType(connection, type);
	                        this._connections[name] = this.prepare(connection);
	
	                    case 10:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	            return _regeneratorRuntime.async(function disconnect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        if (!(this.connection(name) != null)) {
	                            context$2$0.next = 3;
	                            break;
	                        }
	
	                        context$2$0.next = 3;
	                        return _regeneratorRuntime.awrap(this.connection(name).disconnect());
	
	                    case 3:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'reconnect',
	        value: function reconnect() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	            var name;
	            return _regeneratorRuntime.async(function reconnect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        name = name != null ? name : getDefaultConnection();
	
	                        this.disconnect(name);
	
	                        if (!(typeof this._connections[name] === 'undefined')) {
	                            context$2$0.next = 4;
	                            break;
	                        }
	
	                        return context$2$0.abrupt('return', this.connection(name));
	
	                    case 4:
	                        context$2$0.next = 6;
	                        return _regeneratorRuntime.awrap(this.refreshPdoConnections(name));
	
	                    case 6:
	                        return context$2$0.abrupt('return', context$2$0.sent);
	
	                    case 7:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'prepare',
	        value: function prepare(connection) {
	            var _this = this;
	
	            connection.setReconnector(function (c) {
	                return _this.reconnect(c.getName());
	            });
	            return connection;
	        }
	    }, {
	        key: 'makeConnection',
	        value: function makeConnection(name) {
	            var config, driver, instance;
	            return _regeneratorRuntime.async(function makeConnection$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        config = this.getConfig(name);
	                        driver = (config['driver'] || 'url').toLowerCase();
	                        instance = null;
	
	                        if (!(typeof this._adapters[driver] === 'undefined')) {
	                            context$2$0.next = 5;
	                            break;
	                        }
	
	                        throw 'Unknown driver type ' + driver;
	
	                    case 5:
	                        instance = this._adapters[driver](name, config);
	
	                        context$2$0.next = 8;
	                        return _regeneratorRuntime.awrap(instance.connect());
	
	                    case 8:
	                        return context$2$0.abrupt('return', instance);
	
	                    case 9:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'refreshPdoConnections',
	        value: function refreshPdoConnections(name) {
	            var fresh;
	            return _regeneratorRuntime.async(function refreshPdoConnections$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        context$2$0.next = 2;
	                        return _regeneratorRuntime.awrap(this.makeConnection(name));
	
	                    case 2:
	                        fresh = context$2$0.sent;
	                        return context$2$0.abrupt('return', _connections[name].setPdo(fresh.getPdo()).setReadPdo(fresh.getReadPdo()));
	
	                    case 4:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'connections',
	        value: function connections() {
	            var result = [];
	            for (var k in this._connections) {
	                if (this._connections.hasOwnProperty(k)) {
	                    result.push(this._connections[k]);
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'getDefaultConnection',
	        value: function getDefaultConnection() {
	            return this._default;
	        }
	    }, {
	        key: 'parseConnectionName',
	        value: function parseConnectionName() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	
	            name = name != null ? name : this.getDefaultConnection();
	            return name.indexOf('::read') === name.length - 6 || name.indexOf('::write') === name.length - 7 ? name.split('::') : [name, null];
	        }
	    }, {
	        key: 'setPdoForType',
	        value: function setPdoForType(connection) {
	            var type = arguments[1] === undefined ? null : arguments[1];
	
	            if (type == 'read') {
	                connection.setPdo(connection.getReadPdo());
	            } else if (type == 'write') {
	                connection.setReadPdo(connection.getPdo());
	            }
	            return connection;
	        }
	    }, {
	        key: 'connection',
	        value: function connection() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	
	            var p = this.parseConnectionName(name);
	            name = p[0];
	            var type = p[1];
	
	            if (typeof this._connections[name] === 'undefined') {
	                throw 'Connection ' + name + ' is not ready yet. Have you called DatabaseManager.connect(\'' + name + '\') before this query?';
	            }
	            if (name == null) {
	                return typeof this._connections[this.getDefaultConnection()] ? this._connections[this.getDefaultConnection()] : null;
	            } else if (typeof this._connections[name] === 'undefined') {
	                return null;
	            } else {
	                return this._connections[name];
	            }
	        }
	    }, {
	        key: 'addConnection',
	        value: function addConnection(name, config) {
	            this._configs[name] = config;
	        }
	    }, {
	        key: 'addAdapter',
	        value: function addAdapter(name, adapterFn) {
	            this._adapters[name] = adapterFn;
	        }
	    }, {
	        key: 'getConfig',
	        value: function getConfig() {
	            var name = arguments[0] === undefined ? null : arguments[0];
	
	            name = name != null ? name : this.getDefaultConnection();
	
	            if (typeof this._configs[name] === 'undefined') {
	                throw 'Database ' + name + ' not configured.';
	            }
	            return this._configs[name];
	        }
	    }]);
	
	    return DatabaseManager;
	})();
	
	exports['default'] = new DatabaseManager();
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _DatabaseManager = __webpack_require__(13);
	
	var _DatabaseManager2 = _interopRequireDefault(_DatabaseManager);
	
	var DB = (function () {
	    function DB() {
	        _classCallCheck(this, DB);
	    }
	
	    _createClass(DB, [{
	        key: 'table',
	        value: function table() {
	            var name = arguments[0] === undefined ? '' : arguments[0];
	
	            return _DatabaseManager2['default'].connection().table(name);
	        }
	    }]);
	
	    return DB;
	})();
	
	exports['default'] = new DB();
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(26)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _regeneratorRuntime = __webpack_require__(2)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _qs = __webpack_require__(41);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _grammarUrlGrammar = __webpack_require__(34);
	
	var _grammarUrlGrammar2 = _interopRequireDefault(_grammarUrlGrammar);
	
	var _processorUrlProcessor = __webpack_require__(35);
	
	var _processorUrlProcessor2 = _interopRequireDefault(_processorUrlProcessor);
	
	var _Connection2 = __webpack_require__(11);
	
	var _Connection3 = _interopRequireDefault(_Connection2);
	
	var _protocolHTTP = __webpack_require__(36);
	
	var _protocolHTTP2 = _interopRequireDefault(_protocolHTTP);
	
	var UrlConnection = (function (_Connection) {
	    function UrlConnection() {
	        _classCallCheck(this, UrlConnection);
	
	        if (_Connection != null) {
	            _Connection.apply(this, arguments);
	        }
	    }
	
	    _inherits(UrlConnection, _Connection);
	
	    _createClass(UrlConnection, [{
	        key: 'useDefaultQueryGrammar',
	        value: function useDefaultQueryGrammar() {
	            return this._queryGrammar = new _grammarUrlGrammar2['default']();
	        }
	    }, {
	        key: 'useDefaultPostProcessor',
	        value: function useDefaultPostProcessor() {
	            return this._postProcessor = new _processorUrlProcessor2['default']();
	        }
	    }, {
	        key: 'connect',
	        value: function connect() {
	            return _regeneratorRuntime.async(function connect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            return _regeneratorRuntime.async(function disconnect$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }, {
	        key: 'selectingStatement',
	        value: function selectingStatement(query) {
	            var useReadPdo = arguments[1] === undefined ? true : arguments[1];
	            var from, k, baseUrl;
	            return _regeneratorRuntime.async(function selectingStatement$(context$2$0) {
	                while (1) switch (context$2$0.prev = context$2$0.next) {
	                    case 0:
	                        from = query.from;
	
	                        delete query['from'];
	
	                        for (k in query) {
	                            if (query.hasOwnProperty(k)) {
	                                query['_' + k] = query[k];
	                                delete query[k];
	                            }
	                        }
	
	                        baseUrl = this._database + from;
	                        context$2$0.next = 6;
	                        return _regeneratorRuntime.awrap(_protocolHTTP2['default'].get(baseUrl + (baseUrl.indexOf('?') > -1 ? '&' : '?') + _qs2['default'].stringify(query)));
	
	                    case 6:
	                        return context$2$0.abrupt('return', context$2$0.sent);
	
	                    case 7:
	                    case 'end':
	                        return context$2$0.stop();
	                }
	            }, null, this);
	        }
	    }]);
	
	    return UrlConnection;
	})(_Connection3['default']);
	
	exports['default'] = UrlConnection;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequire = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Grammar = __webpack_require__(32);
	
	exports.Grammar = _interopRequire(_Grammar);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequire = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Processor = __webpack_require__(33);
	
	exports.Processor = _interopRequire(_Processor);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(1), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	__webpack_require__(43);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	__webpack_require__(43);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(20)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(9)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequire = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _eventemitter3 = __webpack_require__(50);
	
	exports['default'] = _interopRequire(_eventemitter3);
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(28)["default"];
	
	var _classCallCheck = __webpack_require__(29)["default"];
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Grammar = (function () {
	    function Grammar() {
	        _classCallCheck(this, Grammar);
	
	        this._toCompile = ["columns", "aggregate", "from", "with", "filters", "orders", "limit", "offset"];
	    }
	
	    _createClass(Grammar, [{
	        key: "compileSelect",
	        value: function compileSelect(query) {
	            return this.compileComponents(query);
	        }
	    }, {
	        key: "compileComponents",
	        value: function compileComponents(query) {
	            var name, ucname;
	            var result = {};
	
	            for (var i = 0; i < this._toCompile.length; i++) {
	                name = this._toCompile[i];
	                ucname = name.charAt(0).toUpperCase() + name.substring(1);
	                result[name] = this["compile" + ucname](query["_" + name]);
	            }
	            return result;
	        }
	    }, {
	        key: "compileColumns",
	        value: function compileColumns(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileAggregate",
	        value: function compileAggregate(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileFrom",
	        value: function compileFrom(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileWith",
	        value: function compileWith(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileFilters",
	        value: function compileFilters(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileOrders",
	        value: function compileOrders(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileLimit",
	        value: function compileLimit(value) {
	            return value === null ? undefined : value;
	        }
	    }, {
	        key: "compileOffset",
	        value: function compileOffset(value) {
	            return value === null ? undefined : value;
	        }
	    }]);
	
	    return Grammar;
	})();
	
	exports["default"] = Grammar;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(28)["default"];
	
	var _classCallCheck = __webpack_require__(29)["default"];
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var Processor = (function () {
	    function Processor() {
	        _classCallCheck(this, Processor);
	    }
	
	    _createClass(Processor, [{
	        key: "processSelect",
	        value: function processSelect(query, result) {
	            return result;
	        }
	    }]);
	
	    return Processor;
	})();
	
	exports["default"] = Processor;
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(26)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _Grammar2 = __webpack_require__(32);
	
	var _Grammar3 = _interopRequireDefault(_Grammar2);
	
	var UrlGrammar = (function (_Grammar) {
	    function UrlGrammar() {
	        _classCallCheck(this, UrlGrammar);
	
	        if (_Grammar != null) {
	            _Grammar.apply(this, arguments);
	        }
	    }
	
	    _inherits(UrlGrammar, _Grammar);
	
	    _createClass(UrlGrammar, [{
	        key: 'compileColumns',
	
	        // &columns=id,name,surname
	        value: function compileColumns(value) {
	            return value === null ? undefined : value.join(',');
	        }
	    }, {
	        key: 'compileOrders',
	
	        // &order=id,asc|time,desc
	        value: function compileOrders(value) {
	            return value === null ? undefined : value.map(function (item) {
	                return item.join(',');
	            }).join('|');
	        }
	    }]);
	
	    return UrlGrammar;
	})(_Grammar3['default']);
	
	exports['default'] = UrlGrammar;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(28)["default"];
	
	var _classCallCheck = __webpack_require__(29)["default"];
	
	var _Object$defineProperty = __webpack_require__(5)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var UrlProcessor = (function () {
	    function UrlProcessor() {
	        _classCallCheck(this, UrlProcessor);
	    }
	
	    _createClass(UrlProcessor, [{
	        key: "processSelect",
	        value: function processSelect(query, result) {
	            return result.value;
	        }
	    }]);
	
	    return UrlProcessor;
	})();
	
	exports["default"] = UrlProcessor;
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(26)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(29)['default'];
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _Promise = __webpack_require__(21)['default'];
	
	var _interopRequireDefault = __webpack_require__(30)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _qs = __webpack_require__(41);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _utilsEventEmitter = __webpack_require__(31);
	
	var _utilsEventEmitter2 = _interopRequireDefault(_utilsEventEmitter);
	
	var HTTP = (function (_EventEmitter) {
	    function HTTP() {
	        _classCallCheck(this, HTTP);
	
	        if (_EventEmitter != null) {
	            _EventEmitter.apply(this, arguments);
	        }
	
	        this._pending = 0;
	    }
	
	    _inherits(HTTP, _EventEmitter);
	
	    _createClass(HTTP, [{
	        key: 'ajax',
	        value: function ajax(method, url) {
	            var body = arguments[2] === undefined ? {} : arguments[2];
	
	            var _this = this;
	
	            var type = arguments[3] === undefined ? 'json' : arguments[3];
	            var options = arguments[4] === undefined ? {} : arguments[4];
	
	            method = method.toUpperCase();
	
	            return new _Promise(function (resolve, reject) {
	                var params = _qs2['default'].stringify(body);
	
	                url = url + (url.indexOf('?') > -1 ? '&' : '?') + '_randomCacheBuster=' + Math.random();
	
	                var xhr = null;
	                try {
	                    xhr = new XMLHttpRequest();
	                } catch (e) {}try {
	                    xhr = ActiveXObject('Msxml3.XMLHTTP');
	                } catch (e) {}try {
	                    xhr = ActiveXObject('Msxml2.XMLHTTP.6.0');
	                } catch (e) {}try {
	                    xhr = ActiveXObject('Msxml2.XMLHTTP.3.0');
	                } catch (e) {}try {
	                    xhr = ActiveXObject('Msxml2.XMLHTTP');
	                } catch (e) {}try {
	                    xhr = ActiveXObject('Microsoft.XMLHTTP');
	                } catch (e) {}
	
	                xhr.open(method, url, true);
	                if (method === 'POST') {
	                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	                }
	
	                _this[type + 'PreRequest'](xhr, method);
	
	                xhr.onreadystatechange = function () {
	                    if (xhr.readyState === 4) {
	                        if (xhr.status == 200) {
	                            resolve(_this[type + 'ParseData'](xhr.responseText));
	                        } else {
	                            reject(xhr);
	                        }
	                        _this._pending--;
	                        _this.emit('ajaxEnd', _this._pending);
	                        _this.emit('ajaxChanged', _this._pending);
	                    }
	                };
	
	                _this._pending++;
	                _this.emit('ajaxStart', _this._pending);
	                _this.emit('ajaxChanged', _this._pending);
	                if (method === 'POST') {
	                    xhr.send(params);
	                } else {
	                    xhr.send();
	                }
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(url) {
	            return this.ajax('GET', url);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(url) {
	            return this.ajax('DELETE', url);
	        }
	    }, {
	        key: 'post',
	        value: function post(url) {
	            var data = arguments[1] === undefined ? {} : arguments[1];
	
	            return this.ajax('POST', url, data);
	        }
	    }, {
	        key: 'jsonPreRequest',
	        value: function jsonPreRequest(xhr, method) {
	            xhr.setRequestHeader('Accept', 'application/json');
	        }
	    }, {
	        key: 'jsonParseData',
	        value: function jsonParseData(data) {
	            return JSON.parse(data);
	        }
	    }]);
	
	    return HTTP;
	})(_utilsEventEmitter2['default']);
	
	exports['default'] = new HTTP();
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	module.exports = __webpack_require__(42).core.Promise;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	__webpack_require__(46);
	module.exports = __webpack_require__(48)('iterator');

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(5)['default'];
	
	var _defaults = __webpack_require__(3)['default'];
	
	var _interopRequireWildcard = __webpack_require__(4)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _coreData = __webpack_require__(6);
	
	_defaults(exports, _interopRequireWildcard(_coreData));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(51);


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(52)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(42)
	  , $def     = __webpack_require__(53)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(54).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(55)
	  , tmp = {};
	tmp[__webpack_require__(48)('toStringTag')] = 'z';
	if(__webpack_require__(42).FW && cof(tmp) != 'z'){
	  __webpack_require__(56)(Object.prototype, 'toString', function toString(){
	    return '[object ' + cof.classof(this) + ']';
	  }, true);
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var set   = __webpack_require__(42).set
	  , $at   = __webpack_require__(57)(true)
	  , ITER  = __webpack_require__(58).safe('iter')
	  , $iter = __webpack_require__(59)
	  , step  = $iter.step;
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(60)(String, 'String', function(iterated){
	  set(this, ITER, {o: String(iterated), i: 0});
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , index = iter.i
	    , point;
	  if(index >= O.length)return step(1);
	  point = $at(O, index);
	  iter.i += point.length;
	  return step(0, point);
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	var $           = __webpack_require__(42)
	  , Iterators   = __webpack_require__(59).Iterators
	  , ITERATOR    = __webpack_require__(48)('iterator')
	  , ArrayValues = Iterators.Array
	  , NL          = $.g.NodeList
	  , HTC         = $.g.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype;
	if($.FW){
	  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
	  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
	}
	Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $        = __webpack_require__(42)
	  , ctx      = __webpack_require__(62)
	  , cof      = __webpack_require__(55)
	  , $def     = __webpack_require__(53)
	  , assert   = __webpack_require__(63)
	  , forOf    = __webpack_require__(64)
	  , setProto = __webpack_require__(65).set
	  , same     = __webpack_require__(61)
	  , species  = __webpack_require__(66)
	  , SPECIES  = __webpack_require__(48)('species')
	  , RECORD   = __webpack_require__(58).safe('record')
	  , PROMISE  = 'Promise'
	  , global   = $.g
	  , process  = global.process
	  , isNode   = cof(process) == 'process'
	  , asap     = process && process.nextTick || __webpack_require__(67).set
	  , P        = global[PROMISE]
	  , isFunction     = $.isFunction
	  , isObject       = $.isObject
	  , assertFunction = assert.fn
	  , assertObject   = assert.obj
	  , Wrapper;
	
	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = isFunction(P) && isFunction(P.resolve) && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && $.DESC){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(!$.FW && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = assertObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  if(isObject(it))then = it.then;
	  return isFunction(then) ? then : false;
	}
	function notify(record){
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  if(chain.length)asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this
	    , promise;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  setTimeout(function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    asap.call(global, function(){
	      if(isUnhandled(promise = record.p)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(global.console && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      }
	      record.a = undefined;
	    });
	  }, 1);
	  notify(record);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    assertFunction(executor);
	    var record = {
	      p: assert.inst(this, P, PROMISE),       // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false                                // <- handled rejection
	    };
	    $.hide(this, RECORD, record);
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(68)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = assertObject(assertObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   isFunction(onFulfilled) ? onFulfilled : true,
	        fail: isFunction(onRejected)  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = assertFunction(res);
	        react.rej = assertFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	cof.set(P, PROMISE);
	species(P);
	species(Wrapper = $.core[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new (getConstructor(this))(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(69)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(42).g
	  , store  = __webpack_require__(71)('wks');
	module.exports = function(name){
	  return store[name] || (store[name] =
	    global.Symbol && global.Symbol[name] || __webpack_require__(58).safe('Symbol.' + name));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $        = __webpack_require__(42)
	  , setTag   = __webpack_require__(55).set
	  , uid      = __webpack_require__(58)
	  , shared   = __webpack_require__(71)
	  , $def     = __webpack_require__(53)
	  , $redef   = __webpack_require__(56)
	  , keyOf    = __webpack_require__(72)
	  , enumKeys = __webpack_require__(73)
	  , assertObject = __webpack_require__(63).obj
	  , ObjectProto = Object.prototype
	  , DESC     = $.DESC
	  , has      = $.has
	  , $create  = $.create
	  , getDesc  = $.getDesc
	  , setDesc  = $.setDesc
	  , desc     = $.desc
	  , $names   = __webpack_require__(54)
	  , getNames = $names.get
	  , toObject = $.toObject
	  , $Symbol  = $.g.Symbol
	  , setter   = false
	  , TAG      = uid('tag')
	  , HIDDEN   = uid('hidden')
	  , _propertyIsEnumerable = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols = shared('symbols')
	  , useNative = $.isFunction($Symbol);
	
	var setSymbolDesc = DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;
	
	function wrap(tag){
	  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
	  DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, desc(1, value));
	    }
	  });
	  return sym;
	}
	
	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: desc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  assertObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = _propertyIsEnumerable.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this[TAG];
	  });
	
	  $.create     = create;
	  $.setDesc    = defineProperty;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;
	
	  if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = __webpack_require__(48)(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);
	
	setter = true;
	
	$def($def.G + $def.W, {Symbol: $Symbol});
	
	$def($def.S, 'Symbol', symbolStatics);
	
	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag($.g.JSON, 'JSON', true);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Stringify = __webpack_require__(74);
	var Parse = __webpack_require__(75);
	
	
	// Declare internals
	
	var internals = {};
	
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(42)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(42)
	  , toString = {}.toString
	  , getNames = $.getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(42)
	  , TAG      = __webpack_require__(48)('toStringTag')
	  , toString = {}.toString;
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	cof.classof = function(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
	};
	cof.set = function(it, tag, stat){
	  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
	};
	module.exports = cof;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(42).hide;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var $ = __webpack_require__(42);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String($.assertDefined(that))
	      , i = $.toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var sid = 0;
	function uid(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
	}
	uid.safe = __webpack_require__(42).g.Symbol || uid;
	module.exports = uid;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(42)
	  , cof               = __webpack_require__(55)
	  , classof           = cof.classof
	  , assert            = __webpack_require__(63)
	  , assertObject      = assert.obj
	  , SYMBOL_ITERATOR   = __webpack_require__(48)('iterator')
	  , FF_ITERATOR       = '@@iterator'
	  , Iterators         = __webpack_require__(71)('iterators')
	  , IteratorPrototype = {};
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, $.that);
	function setIterator(O, value){
	  $.hide(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
	}
	
	module.exports = {
	  // Safari has buggy iterators w/o `next`
	  BUGGY: 'keys' in [] && !('next' in [].keys()),
	  Iterators: Iterators,
	  step: function(done, value){
	    return {value: value, done: !!done};
	  },
	  is: function(it){
	    var O      = Object(it)
	      , Symbol = $.g.Symbol;
	    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
	      || SYMBOL_ITERATOR in O
	      || $.has(Iterators, classof(O));
	  },
	  get: function(it){
	    var Symbol = $.g.Symbol
	      , getIter;
	    if(it != undefined){
	      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
	        || it[SYMBOL_ITERATOR]
	        || Iterators[classof(it)];
	    }
	    assert($.isFunction(getIter), it, ' is not iterable!');
	    return assertObject(getIter.call(it));
	  },
	  set: setIterator,
	  create: function(Constructor, NAME, next, proto){
	    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
	    cof.set(Constructor, NAME + ' Iterator');
	  }
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var $def            = __webpack_require__(53)
	  , $redef          = __webpack_require__(56)
	  , $               = __webpack_require__(42)
	  , cof             = __webpack_require__(55)
	  , $iter           = __webpack_require__(59)
	  , SYMBOL_ITERATOR = __webpack_require__(48)('iterator')
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values'
	  , Iterators       = $iter.Iterators;
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iter.create(Constructor, NAME, next);
	  function createMethod(kind){
	    function $$(that){
	      return new Constructor(that, kind);
	    }
	    switch(kind){
	      case KEYS: return function keys(){ return $$(this); };
	      case VALUES: return function values(){ return $$(this); };
	    } return function entries(){ return $$(this); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = $.getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    cof.set(IteratorPrototype, TAG, true);
	    // FF fix
	    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
	  }
	  // Define iterator
	  if($.FW || FORCE)$iter.set(proto, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = $.that;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var assertFunction = __webpack_require__(63).fn;
	module.exports = function(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	assert.def = $.assertDefined;
	assert.fn = function(it){
	  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
	  return it;
	};
	assert.obj = function(it){
	  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};
	assert.inst = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};
	module.exports = assert;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var ctx  = __webpack_require__(62)
	  , get  = __webpack_require__(59).get
	  , call = __webpack_require__(76);
	module.exports = function(iterable, entries, fn, that){
	  var iterator = get(iterable)
	    , f        = ctx(fn, that, entries ? 2 : 1)
	    , step;
	  while(!(step = iterator.next()).done){
	    if(call(iterator, f, step.value, entries) === false){
	      return call.close(iterator);
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var $      = __webpack_require__(42)
	  , assert = __webpack_require__(63);
	function check(O, proto){
	  assert.obj(O);
	  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(62)(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(42)
	  , SPECIES = __webpack_require__(48)('species');
	module.exports = function(C){
	  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: $.that
	  });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $      = __webpack_require__(42)
	  , ctx    = __webpack_require__(62)
	  , cof    = __webpack_require__(55)
	  , invoke = __webpack_require__(77)
	  , cel    = __webpack_require__(78)
	  , global             = $.g
	  , isFunction         = $.isFunction
	  , html               = $.html
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if($.has(queue, id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!isFunction(setTask) || !isFunction(clearTask)){
	  setTask = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(cof(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(56);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(48)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(42)
	  , setUnscope = __webpack_require__(79)
	  , ITER       = __webpack_require__(58).safe('iter')
	  , $iter      = __webpack_require__(59)
	  , step       = $iter.step
	  , Iterators  = $iter.Iterators;
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(60)(Array, 'Array', function(iterated, kind){
	  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var iter  = this[ITER]
	    , O     = iter.o
	    , kind  = iter.k
	    , index = iter.i++;
	  if(!O || index >= O.length){
	    iter.o = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var $      = __webpack_require__(42)
	  , SHARED = '__core-js_shared__'
	  , store  = $.g[SHARED] || ($.g[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	module.exports = function(object, el){
	  var O      = $.toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(42);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(80);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	
	            return prefix;
	        }
	    },
	    strictNullHandling: false
	};
	
	
	internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {
	
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    }
	    else if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        if (strictNullHandling) {
	            return Utils.encode(prefix);
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {
	
	        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
	        }
	    }
	
	    return values;
	};
	
	
	module.exports = function (obj, options) {
	
	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    var objKeys;
	    var filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    }
	    else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	var Utils = __webpack_require__(80);
	
	
	// Declare internals
	
	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false
	};
	
	
	internals.parseValues = function (str, options) {
	
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	
	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));
	
	            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseObject = function (chain, val, options) {
	
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        obj = Object.create(null);
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays &&
	             index <= options.arrayLimit)) {
	
	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	
	internals.parseKeys = function (key, val, options) {
	
	    if (!key) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	
	    if (options.allowDots) {
	        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
	    }
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	
	        ++i;
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return internals.parseObject(keys, val, options);
	};
	
	
	module.exports = function (str, options) {
	
	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {
	
	        return Object.create(null);
	    }
	
	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = options.allowDots !== false;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	
	
	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = Object.create(null);
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var assertObject = __webpack_require__(63).obj;
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)assertObject(ret.call(iterator));
	}
	function call(iterator, fn, value, entries){
	  try {
	    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	}
	call.close = close;
	module.exports = call;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(42)
	  , document = $.g.document
	  , isObject = $.isObject
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules
	
	
	// Declare internals
	
	var internals = {};
	internals.hexTable = new Array(256);
	for (var i = 0; i < 256; ++i) {
	    internals.hexTable[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	}
	
	
	exports.arrayToObject = function (source) {
	
	    var obj = Object.create(null);
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {
	
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	
	exports.merge = function (target, source) {
	
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else if (typeof target === 'object') {
	            target[source] = true;
	        }
	        else {
	            target = [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }
	
	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {
	
	        target = exports.arrayToObject(target);
	    }
	
	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];
	
	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }
	
	    return target;
	};
	
	
	exports.decode = function (str) {
	
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    if (typeof str !== 'string') {
	        str = '' + str;
	    }
	
	    var out = '';
	    for (var i = 0, il = str.length; i < il; ++i) {
	        var c = str.charCodeAt(i);
	
	        if (c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A)) { // A-Z
	
	            out += str[i];
	            continue;
	        }
	
	        if (c < 0x80) {
	            out += internals.hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }
	
	        ++i;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
	        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, refs) {
	
	    if (typeof obj !== 'object' ||
	        obj === null) {
	
	        return obj;
	    }
	
	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	
	exports.isRegExp = function (obj) {
	
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	
	exports.isBuffer = function (obj) {
	
	    if (obj === null ||
	        typeof obj === 'undefined') {
	
	        return false;
	    }
	
	    return !!(obj.constructor &&
	              obj.constructor.isBuffer &&
	              obj.constructor.isBuffer(obj));
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.map