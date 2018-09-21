// Generated by purs bundle 0.12.0
var PS = {};
(function(exports) {
    "use strict";

  exports._setCookie = function _setCookie(cookie) {
      document.cookie = cookie;
  };

  exports._setCookie2 = function _setCookie2(cookie) {
      document.cookie = cookie;
  };

  exports._getCookies = function _getCookies() {
      return document.cookie;
  };
})(PS["Browser.Cookie"] = PS["Browser.Cookie"] || {});
(function(exports) {
    "use strict";

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
    "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];                 
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };                                                                                             
  var functorArray = new Functor($foreign.arrayMap);
  exports["Functor"] = Functor;
  exports["map"] = map;
  exports["functorArray"] = functorArray;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];                 
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  var lift2 = function (dictApply) {
      return function (f) {
          return function (a) {
              return function (b) {
                  return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
              };
          };
      };
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
  exports["lift2"] = lift2;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];                 
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["pure"] = pure;
  exports["liftA1"] = liftA1;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];                 
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
    "use strict";

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];                 
  var Monad = function (Applicative0, Bind1) {
      this.Applicative0 = Applicative0;
      this.Bind1 = Bind1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Data.Semigroup"];
  var Data_Symbol = PS["Data.Symbol"];
  var Data_Unit = PS["Data.Unit"];
  var Data_Void = PS["Data.Void"];
  var Record_Unsafe = PS["Record.Unsafe"];
  var Type_Data_RowList = PS["Type.Data.RowList"];                 
  var Semigroup = function (append) {
      this.append = append;
  }; 
  var semigroupUnit = new Semigroup(function (v) {
      return function (v1) {
          return Data_Unit.unit;
      };
  });
  var append = function (dict) {
      return dict.append;
  };
  exports["Semigroup"] = Semigroup;
  exports["append"] = append;
  exports["semigroupUnit"] = semigroupUnit;
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_EuclideanRing = PS["Data.EuclideanRing"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Symbol = PS["Data.Symbol"];
  var Data_Unit = PS["Data.Unit"];
  var Record_Unsafe = PS["Record.Unsafe"];
  var Type_Data_RowList = PS["Type.Data.RowList"];                 
  var Monoid = function (Semigroup0, mempty) {
      this.Semigroup0 = Semigroup0;
      this.mempty = mempty;
  };
  var monoidUnit = new Monoid(function () {
      return Data_Semigroup.semigroupUnit;
  }, Data_Unit.unit);
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["Monoid"] = Monoid;
  exports["mempty"] = mempty;
  exports["monoidUnit"] = monoidUnit;
})(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];                 
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Data.Foldable"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Endo = PS["Data.Monoid.Endo"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];                 
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var foldl = function (dict) {
      return dict.foldl;
  }; 
  var foldMapDefaultR = function (dictFoldable) {
      return function (dictMonoid) {
          return function (f) {
              return foldr(dictFoldable)(function (x) {
                  return function (acc) {
                      return Data_Semigroup.append(dictMonoid.Semigroup0())(f(x))(acc);
                  };
              })(Data_Monoid.mempty(dictMonoid));
          };
      };
  };
  var foldableArray = new Foldable(function (dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
  }, $foreign.foldlArray, $foreign.foldrArray);
  var foldMap = function (dict) {
      return dict.foldMap;
  };
  var findMap = function (dictFoldable) {
      return function (p) {
          var go = function (v) {
              return function (v1) {
                  if (v instanceof Data_Maybe.Nothing) {
                      return p(v1);
                  };
                  return v;
              };
          };
          return foldl(dictFoldable)(go)(Data_Maybe.Nothing.value);
      };
  };
  exports["Foldable"] = Foldable;
  exports["foldr"] = foldr;
  exports["foldl"] = foldl;
  exports["foldMap"] = foldMap;
  exports["foldMapDefaultR"] = foldMapDefaultR;
  exports["findMap"] = findMap;
  exports["foldableArray"] = foldableArray;
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
    "use strict";

  exports.split = function (sep) {
    return function (s) {
      return s.split(sep);
    };
  };

  exports.trim = function (s) {
    return s.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Data.String.Common"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_String_Pattern = PS["Data.String.Pattern"];
  var Prelude = PS["Prelude"];
  exports["split"] = $foreign.split;
  exports["trim"] = $foreign.trim;
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});
(function(exports) {
    "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Effect"] = PS["Effect"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Effect"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];                 
  var monadEffect = new Control_Monad.Monad(function () {
      return applicativeEffect;
  }, function () {
      return bindEffect;
  });
  var bindEffect = new Control_Bind.Bind(function () {
      return applyEffect;
  }, $foreign.bindE);
  var applyEffect = new Control_Apply.Apply(function () {
      return functorEffect;
  }, Control_Monad.ap(monadEffect));
  var applicativeEffect = new Control_Applicative.Applicative(function () {
      return applyEffect;
  }, $foreign.pureE);
  var functorEffect = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEffect));
  var semigroupEffect = function (dictSemigroup) {
      return new Data_Semigroup.Semigroup(Control_Apply.lift2(applyEffect)(Data_Semigroup.append(dictSemigroup)));
  };
  var monoidEffect = function (dictMonoid) {
      return new Data_Monoid.Monoid(function () {
          return semigroupEffect(dictMonoid.Semigroup0());
      }, $foreign.pureE(Data_Monoid.mempty(dictMonoid)));
  };
  exports["functorEffect"] = functorEffect;
  exports["applyEffect"] = applyEffect;
  exports["applicativeEffect"] = applicativeEffect;
  exports["bindEffect"] = bindEffect;
  exports["monadEffect"] = monadEffect;
  exports["semigroupEffect"] = semigroupEffect;
  exports["monoidEffect"] = monoidEffect;
})(PS["Effect"] = PS["Effect"] || {});
(function(exports) {
    "use strict";
  var $foreign = PS["Browser.Cookie"];
  var Browser_Cookies_Data = PS["Browser.Cookies.Data"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_JSDate = PS["Data.JSDate"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_String_Common = PS["Data.String.Common"];
  var Data_String_Pattern = PS["Data.String.Pattern"];
  var Debug_Trace = PS["Debug.Trace"];
  var Effect = PS["Effect"];
  var Prelude = PS["Prelude"];                 
  var setCookie2 = $foreign._setCookie2;

  // setCookie :: SetCookie -> Effect Unit
  // setCookie sc = _setCookie $ encode sc
  var setCookie = function (sc) {
      return $foreign._setCookie(sc);
  };
  var getCookies = function __do() {
      var v = $foreign._getCookies();
      return Data_Functor.map(Data_Functor.functorArray)(Data_String_Common.trim)(Data_String_Common.split(";")(v));
  };
  var getCookie = function (key) {
      var toKeyVal = Data_Functor.map(Data_Functor.functorArray)(Data_String_Common.split("="));
      var matchCookie = function (v) {
          return function (v1) {
              if (v1.length === 2 && v === v1[0]) {
                  return Data_Maybe.Just.create({
                      key: key,
                      value: v1[1]
                  });
              };
              return Data_Maybe.Nothing.value;
          };
      };
      var findCookie = function ($8) {
          return Data_Foldable.findMap(Data_Foldable.foldableArray)(matchCookie(key))(toKeyVal($8));
      };
      return Data_Functor.map(Effect.functorEffect)(findCookie)(getCookies);
  };
  exports["getCookies"] = getCookies;
  exports["getCookie"] = getCookie;
  exports["setCookie"] = setCookie;
  exports["setCookie2"] = setCookie2;
})(PS["Browser.Cookie"] = PS["Browser.Cookie"] || {});
(function(exports) {
    "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function(exports) {
  // Generated by purs version 0.12.0
  "use strict";
  var $foreign = PS["Effect.Console"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Effect = PS["Effect"];
  exports["log"] = $foreign.log;
})(PS["Effect.Console"] = PS["Effect.Console"] || {});
(function(exports) {
    "use strict";
  var Browser_Cookie = PS["Browser.Cookie"];
  var Browser_Cookies_Data = PS["Browser.Cookies.Data"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Traversable = PS["Data.Traversable"];
  var Effect = PS["Effect"];
  var Effect_Console = PS["Effect.Console"];
  var Prelude = PS["Prelude"];                 

  // log $ foldMap identity 
  var main = function __do() {
      var v = Browser_Cookie.getCookie("test_cookie")();
      Browser_Cookie.setCookie2("test_cookie=123123123");
      Browser_Cookie.setCookie("test_cookie=123123123")();
      var v1 = Browser_Cookie.getCookies();
      return Data_Foldable.foldMap(Data_Foldable.foldableArray)(Effect.monoidEffect(Data_Monoid.monoidUnit))(Effect_Console.log)(v1)();
  };

  // where
  // cook :: SetCookie
  // cook = SetCookie { cookie: Cookie { key: "key", value: "value" }, opts: Nothing }
  var cook = function (v) {
      if (v instanceof Data_Maybe.Just) {
          return {
              cookie: {
                  key: v.value0.key + "a",
                  value: v.value0.value + "b"
              },
              opts: Data_Maybe.Nothing.value
          };
      };
      if (v instanceof Data_Maybe.Nothing) {
          return {
              cookie: {
                  key: "",
                  value: ""
              },
              opts: Data_Maybe.Nothing.value
          };
      };
      throw new Error("Failed pattern match at Main line 27, column 1 - line 27, column 34: " + [ v.constructor.name ]);
  };
  exports["main"] = main;
  exports["cook"] = cook;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();