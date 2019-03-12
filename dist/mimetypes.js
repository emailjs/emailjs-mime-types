'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectExtension = detectExtension;
exports.detectMimeType = detectMimeType;

var _listExtensions = require('./list-extensions');

var _listTypes = require('./list-types');

/**
 * Returns file extension for a content type string. If no suitable extensions
 * are found, 'bin' is used as the default extension
 *
 * @param {String} mimeType Content type to be checked for
 * @return {String} File extension
 */
function detectExtension() {
  var mimeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var favoredExtension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  mimeType = mimeType.toString().toLowerCase().replace(/\s/g, '');
  if (!(mimeType in _listTypes.types)) {
    return 'bin';
  }

  if (typeof _listTypes.types[mimeType] === 'string') {
    return _listTypes.types[mimeType];
  }

  favoredExtension = favoredExtension.toString().toLowerCase().replace(/\s/g, '');
  if (favoredExtension && _listTypes.types[mimeType].includes(favoredExtension)) {
    return favoredExtension;
  }

  // search for name match
  var mimePart = mimeType.split('/')[1];
  for (var i = 0, len = _listTypes.types[mimeType].length; i < len; i++) {
    if (mimePart === _listTypes.types[mimeType][i]) {
      return _listTypes.types[mimeType][i];
    }
  }

  // use the first one
  return _listTypes.types[mimeType][0];
}

/**
 * Returns content type for a file extension. If no suitable content types
 * are found, 'application/octet-stream' is used as the default content type
 *
 * @param {String} extension Extension to be checked for
 * @return {String} File extension
 */
function detectMimeType() {
  var extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  extension = extension.toString().toLowerCase().replace(/\s/g, '').replace(/^\./g, '');

  if (!(extension in _listExtensions.extensions)) {
    return 'application/octet-stream';
  }

  if (typeof _listExtensions.extensions[extension] === 'string') {
    return _listExtensions.extensions[extension];
  }

  // search for name match
  for (var i = 0, len = _listExtensions.extensions[extension].length; i < len; i++) {
    var mimePart = _listExtensions.extensions[extension][i].split('/')[1];
    if (mimePart === extension) {
      return _listExtensions.extensions[extension][i];
    }
  }

  // use the first one
  return _listExtensions.extensions[extension][0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taW1ldHlwZXMuanMiXSwibmFtZXMiOlsiZGV0ZWN0RXh0ZW5zaW9uIiwiZGV0ZWN0TWltZVR5cGUiLCJtaW1lVHlwZSIsImZhdm9yZWRFeHRlbnNpb24iLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInR5cGVzIiwiaW5jbHVkZXMiLCJtaW1lUGFydCIsInNwbGl0IiwiaSIsImxlbiIsImxlbmd0aCIsImV4dGVuc2lvbiIsImV4dGVuc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxlLEdBQUFBLGU7UUFrQ0FDLGMsR0FBQUEsYzs7QUE1Q2hCOztBQUNBOztBQUVBOzs7Ozs7O0FBT08sU0FBU0QsZUFBVCxHQUFnRTtBQUFBLE1BQXRDRSxRQUFzQyx1RUFBM0IsRUFBMkI7QUFBQSxNQUF2QkMsZ0JBQXVCLHVFQUFKLEVBQUk7O0FBQ3JFRCxhQUFXQSxTQUFTRSxRQUFULEdBQW9CQyxXQUFwQixHQUFrQ0MsT0FBbEMsQ0FBMEMsS0FBMUMsRUFBaUQsRUFBakQsQ0FBWDtBQUNBLE1BQUksRUFBRUosWUFBWUssZ0JBQWQsQ0FBSixFQUEwQjtBQUN4QixXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9BLGlCQUFNTCxRQUFOLENBQVAsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkMsV0FBT0ssaUJBQU1MLFFBQU4sQ0FBUDtBQUNEOztBQUVEQyxxQkFBbUJBLGlCQUFpQkMsUUFBakIsR0FBNEJDLFdBQTVCLEdBQTBDQyxPQUExQyxDQUFrRCxLQUFsRCxFQUF5RCxFQUF6RCxDQUFuQjtBQUNBLE1BQUlILG9CQUFvQkksaUJBQU1MLFFBQU4sRUFBZ0JNLFFBQWhCLENBQXlCTCxnQkFBekIsQ0FBeEIsRUFBb0U7QUFDbEUsV0FBT0EsZ0JBQVA7QUFDRDs7QUFFRDtBQUNBLE1BQU1NLFdBQVdQLFNBQVNRLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQWpCO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTUwsaUJBQU1MLFFBQU4sRUFBZ0JXLE1BQXRDLEVBQThDRixJQUFJQyxHQUFsRCxFQUF1REQsR0FBdkQsRUFBNEQ7QUFDMUQsUUFBSUYsYUFBYUYsaUJBQU1MLFFBQU4sRUFBZ0JTLENBQWhCLENBQWpCLEVBQXFDO0FBQ25DLGFBQU9KLGlCQUFNTCxRQUFOLEVBQWdCUyxDQUFoQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLFNBQU9KLGlCQUFNTCxRQUFOLEVBQWdCLENBQWhCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNELGNBQVQsR0FBeUM7QUFBQSxNQUFoQmEsU0FBZ0IsdUVBQUosRUFBSTs7QUFDOUNBLGNBQVlBLFVBQVVWLFFBQVYsR0FBcUJDLFdBQXJCLEdBQW1DQyxPQUFuQyxDQUEyQyxLQUEzQyxFQUFrRCxFQUFsRCxFQUFzREEsT0FBdEQsQ0FBOEQsTUFBOUQsRUFBc0UsRUFBdEUsQ0FBWjs7QUFFQSxNQUFJLEVBQUVRLGFBQWFDLDBCQUFmLENBQUosRUFBZ0M7QUFDOUIsV0FBTywwQkFBUDtBQUNEOztBQUVELE1BQUksT0FBT0EsMkJBQVdELFNBQVgsQ0FBUCxLQUFpQyxRQUFyQyxFQUErQztBQUM3QyxXQUFPQywyQkFBV0QsU0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLLElBQUlILElBQUksQ0FBUixFQUFXQyxNQUFNRywyQkFBV0QsU0FBWCxFQUFzQkQsTUFBNUMsRUFBb0RGLElBQUlDLEdBQXhELEVBQTZERCxHQUE3RCxFQUFrRTtBQUNoRSxRQUFNRixXQUFXTSwyQkFBV0QsU0FBWCxFQUFzQkgsQ0FBdEIsRUFBeUJELEtBQXpCLENBQStCLEdBQS9CLEVBQW9DLENBQXBDLENBQWpCO0FBQ0EsUUFBSUQsYUFBYUssU0FBakIsRUFBNEI7QUFDMUIsYUFBT0MsMkJBQVdELFNBQVgsRUFBc0JILENBQXRCLENBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0EsU0FBT0ksMkJBQVdELFNBQVgsRUFBc0IsQ0FBdEIsQ0FBUDtBQUNEIiwiZmlsZSI6Im1pbWV0eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuc2lvbnMgfSBmcm9tICcuL2xpc3QtZXh0ZW5zaW9ucydcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSAnLi9saXN0LXR5cGVzJ1xuXG4vKipcbiAqIFJldHVybnMgZmlsZSBleHRlbnNpb24gZm9yIGEgY29udGVudCB0eXBlIHN0cmluZy4gSWYgbm8gc3VpdGFibGUgZXh0ZW5zaW9uc1xuICogYXJlIGZvdW5kLCAnYmluJyBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGV4dGVuc2lvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtaW1lVHlwZSBDb250ZW50IHR5cGUgdG8gYmUgY2hlY2tlZCBmb3JcbiAqIEByZXR1cm4ge1N0cmluZ30gRmlsZSBleHRlbnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdEV4dGVuc2lvbiAobWltZVR5cGUgPSAnJywgZmF2b3JlZEV4dGVuc2lvbiA9ICcnKSB7XG4gIG1pbWVUeXBlID0gbWltZVR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgaWYgKCEobWltZVR5cGUgaW4gdHlwZXMpKSB7XG4gICAgcmV0dXJuICdiaW4nXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGVzW21pbWVUeXBlXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZXNbbWltZVR5cGVdXG4gIH1cblxuICBmYXZvcmVkRXh0ZW5zaW9uID0gZmF2b3JlZEV4dGVuc2lvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKVxuICBpZiAoZmF2b3JlZEV4dGVuc2lvbiAmJiB0eXBlc1ttaW1lVHlwZV0uaW5jbHVkZXMoZmF2b3JlZEV4dGVuc2lvbikpIHtcbiAgICByZXR1cm4gZmF2b3JlZEV4dGVuc2lvblxuICB9XG5cbiAgLy8gc2VhcmNoIGZvciBuYW1lIG1hdGNoXG4gIGNvbnN0IG1pbWVQYXJ0ID0gbWltZVR5cGUuc3BsaXQoJy8nKVsxXVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdHlwZXNbbWltZVR5cGVdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKG1pbWVQYXJ0ID09PSB0eXBlc1ttaW1lVHlwZV1baV0pIHtcbiAgICAgIHJldHVybiB0eXBlc1ttaW1lVHlwZV1baV1cbiAgICB9XG4gIH1cblxuICAvLyB1c2UgdGhlIGZpcnN0IG9uZVxuICByZXR1cm4gdHlwZXNbbWltZVR5cGVdWzBdXG59XG5cbi8qKlxuICogUmV0dXJucyBjb250ZW50IHR5cGUgZm9yIGEgZmlsZSBleHRlbnNpb24uIElmIG5vIHN1aXRhYmxlIGNvbnRlbnQgdHlwZXNcbiAqIGFyZSBmb3VuZCwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXh0ZW5zaW9uIEV4dGVuc2lvbiB0byBiZSBjaGVja2VkIGZvclxuICogQHJldHVybiB7U3RyaW5nfSBGaWxlIGV4dGVuc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0TWltZVR5cGUgKGV4dGVuc2lvbiA9ICcnKSB7XG4gIGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKS5yZXBsYWNlKC9eXFwuL2csICcnKVxuXG4gIGlmICghKGV4dGVuc2lvbiBpbiBleHRlbnNpb25zKSkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHRlbnNpb25zW2V4dGVuc2lvbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNbZXh0ZW5zaW9uXVxuICB9XG5cbiAgLy8gc2VhcmNoIGZvciBuYW1lIG1hdGNoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHRlbnNpb25zW2V4dGVuc2lvbl0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBtaW1lUGFydCA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uXVtpXS5zcGxpdCgnLycpWzFdXG4gICAgaWYgKG1pbWVQYXJ0ID09PSBleHRlbnNpb24pIHtcbiAgICAgIHJldHVybiBleHRlbnNpb25zW2V4dGVuc2lvbl1baV1cbiAgICB9XG4gIH1cblxuICAvLyB1c2UgdGhlIGZpcnN0IG9uZVxuICByZXR1cm4gZXh0ZW5zaW9uc1tleHRlbnNpb25dWzBdXG59XG4iXX0=