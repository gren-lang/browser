/*

import Maybe exposing (Just, Nothing)
import WebStorage exposing (AccessError, NoValue, ReadBlocked, QuotaExceeded, WriteBlocked)
import Gren.Kernel.Scheduler exposing (binding, succeed, fail)

*/

var _WebStorage_length = function (useLocalStorage) {
  return __Scheduler_binding(function (callback) {
    try {
      var length = _WebStorage_getStore(useLocalStorage).length;
    } catch (e) {
      return callback(__Scheduler_fail(__WebStorage_AccessError));
    }

    return callback(__Scheduler_succeed(length));
  });
};

var _WebStorage_key = F2(function (useLocalStorage, index) {
  return __Scheduler_binding(function (callback) {
    try {
      var key = _WebStorage_getStore(useLocalStorage).key(index);

      if (key == null) {
        return callback(__Scheduler_fail(__WebStorage_NoValue));
      } else {
        return callback(__Scheduler_succeed(key));
      }
    } catch (e) {
      return callback(__Scheduler_fail(__WebStorage_ReadBlocked));
    }
  });
});

var _WebStorage_get = F2(function (useLocalStorage, key) {
  return __Scheduler_binding(function (callback) {
    try {
      var item = _WebStorage_getStore(useLocalStorage).getItem(key);

      if (item == null) {
        return callback(__Scheduler_fail(__WebStorage_NoValue));
      } else {
        return callback(__Scheduler_succeed(item));
      }
    } catch (e) {
      return callback(__Scheduler_fail(__WebStorage_ReadBlocked));
    }
  });
});

var _WebStorage_set = F3(function (useLocalStorage, key, value) {
  return __Scheduler_binding(function (callback) {
    try {
      _WebStorage_getStore(useLocalStorage).setItem(key, value);
    } catch (err) {
      if (err.name === "QuotaExceededError") {
        return callback(__Scheduler_fail(__WebStorage_QuotaExceeded));
      } else {
        return callback(__Scheduler_fail(__WebStorage_WriteBlocked));
      }
    }

    return callback(__Scheduler_succeed({}));
  });
});

var _WebStorage_remove = F2(function (useLocalStorage, key) {
  return __Scheduler_binding(function (callback) {
    try {
      _WebStorage_getStore(useLocalStorage).removeItem(key);
    } catch (err) {
      return callback(__Scheduler_fail(__WebStorage_AccessError));
    }

    return callback(__Scheduler_succeed({}));
  });
});

var _WebStorage_clear = function (useLocalStorage) {
  return __Scheduler_binding(function (callback) {
    try {
      _WebStorage_getStore(useLocalStorage).clear();
    } catch (err) {
      return callback(__Scheduler_fail(__WebStorage_AccessError));
    }

    return callback(__Scheduler_succeed({}));
  });
};

// Private functions

var _WebStorage_getStore = function (persist) {
  return persist ? window.localStorage : window.sessionStorage;
};
