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

  mimeType = mimeType.toString().toLowerCase().replace(/\s/g, '');
  if (!(mimeType in _listTypes.types)) {
    return 'bin';
  }

  if (typeof _listTypes.types[mimeType] === 'string') {
    return _listTypes.types[mimeType];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taW1ldHlwZXMuanMiXSwibmFtZXMiOlsiZGV0ZWN0RXh0ZW5zaW9uIiwiZGV0ZWN0TWltZVR5cGUiLCJtaW1lVHlwZSIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWltZVBhcnQiLCJzcGxpdCIsImkiLCJsZW4iLCJsZW5ndGgiLCJleHRlbnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxlLEdBQUFBLGU7UUE2QkFDLGMsR0FBQUEsYzs7QUF2Q2hCOztBQUNBOztBQUVBOzs7Ozs7O0FBT08sU0FBU0QsZUFBVCxHQUF5QztBQUFBLE1BQWZFLFFBQWUsdUVBQUosRUFBSTs7QUFDOUNBLGFBQVdBLFNBQVNDLFFBQVQsR0FBb0JDLFdBQXBCLEdBQWtDQyxPQUFsQyxDQUEwQyxLQUExQyxFQUFpRCxFQUFqRCxDQUFYO0FBQ0EsTUFBSSxFQUFFSCw0QkFBRixDQUFKLEVBQTBCO0FBQ3hCLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksT0FBTyxpQkFBTUEsUUFBTixDQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDLFdBQU8saUJBQU1BLFFBQU4sQ0FBUDtBQUNEOztBQUVEO0FBQ0EsTUFBTUksV0FBV0osU0FBU0ssS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBakI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNLGlCQUFNUCxRQUFOLEVBQWdCUSxNQUF0QyxFQUE4Q0YsSUFBSUMsR0FBbEQsRUFBdURELEdBQXZELEVBQTREO0FBQzFELFFBQUlGLGFBQWEsaUJBQU1KLFFBQU4sRUFBZ0JNLENBQWhCLENBQWpCLEVBQXFDO0FBQ25DLGFBQU8saUJBQU1OLFFBQU4sRUFBZ0JNLENBQWhCLENBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0EsU0FBTyxpQkFBTU4sUUFBTixFQUFnQixDQUFoQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTRCxjQUFULEdBQXlDO0FBQUEsTUFBaEJVLFNBQWdCLHVFQUFKLEVBQUk7O0FBQzlDQSxjQUFZQSxVQUFVUixRQUFWLEdBQXFCQyxXQUFyQixHQUFtQ0MsT0FBbkMsQ0FBMkMsS0FBM0MsRUFBa0QsRUFBbEQsRUFBc0RBLE9BQXRELENBQThELE1BQTlELEVBQXNFLEVBQXRFLENBQVo7O0FBRUEsTUFBSSxFQUFFTSx1Q0FBRixDQUFKLEVBQWdDO0FBQzlCLFdBQU8sMEJBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU8sMkJBQVdBLFNBQVgsQ0FBUCxLQUFpQyxRQUFyQyxFQUErQztBQUM3QyxXQUFPLDJCQUFXQSxTQUFYLENBQVA7QUFDRDs7QUFFRDtBQUNBLE9BQUssSUFBSUgsSUFBSSxDQUFSLEVBQVdDLE1BQU0sMkJBQVdFLFNBQVgsRUFBc0JELE1BQTVDLEVBQW9ERixJQUFJQyxHQUF4RCxFQUE2REQsR0FBN0QsRUFBa0U7QUFDaEUsUUFBTUYsV0FBVywyQkFBV0ssU0FBWCxFQUFzQkgsQ0FBdEIsRUFBeUJELEtBQXpCLENBQStCLEdBQS9CLEVBQW9DLENBQXBDLENBQWpCO0FBQ0EsUUFBSUQsYUFBYUssU0FBakIsRUFBNEI7QUFDMUIsYUFBTywyQkFBV0EsU0FBWCxFQUFzQkgsQ0FBdEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxTQUFPLDJCQUFXRyxTQUFYLEVBQXNCLENBQXRCLENBQVA7QUFDRCIsImZpbGUiOiJtaW1ldHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbnNpb25zIH0gZnJvbSAnLi9saXN0LWV4dGVuc2lvbnMnXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gJy4vbGlzdC10eXBlcydcblxuLyoqXG4gKiBSZXR1cm5zIGZpbGUgZXh0ZW5zaW9uIGZvciBhIGNvbnRlbnQgdHlwZSBzdHJpbmcuIElmIG5vIHN1aXRhYmxlIGV4dGVuc2lvbnNcbiAqIGFyZSBmb3VuZCwgJ2JpbicgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBleHRlbnNpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVR5cGUgQ29udGVudCB0eXBlIHRvIGJlIGNoZWNrZWQgZm9yXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEZpbGUgZXh0ZW5zaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RFeHRlbnNpb24gKG1pbWVUeXBlID0gJycpIHtcbiAgbWltZVR5cGUgPSBtaW1lVHlwZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKVxuICBpZiAoIShtaW1lVHlwZSBpbiB0eXBlcykpIHtcbiAgICByZXR1cm4gJ2JpbidcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZXNbbWltZVR5cGVdID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlc1ttaW1lVHlwZV1cbiAgfVxuXG4gIC8vIHNlYXJjaCBmb3IgbmFtZSBtYXRjaFxuICBjb25zdCBtaW1lUGFydCA9IG1pbWVUeXBlLnNwbGl0KCcvJylbMV1cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHR5cGVzW21pbWVUeXBlXS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChtaW1lUGFydCA9PT0gdHlwZXNbbWltZVR5cGVdW2ldKSB7XG4gICAgICByZXR1cm4gdHlwZXNbbWltZVR5cGVdW2ldXG4gICAgfVxuICB9XG5cbiAgLy8gdXNlIHRoZSBmaXJzdCBvbmVcbiAgcmV0dXJuIHR5cGVzW21pbWVUeXBlXVswXVxufVxuXG4vKipcbiAqIFJldHVybnMgY29udGVudCB0eXBlIGZvciBhIGZpbGUgZXh0ZW5zaW9uLiBJZiBubyBzdWl0YWJsZSBjb250ZW50IHR5cGVzXG4gKiBhcmUgZm91bmQsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQgY29udGVudCB0eXBlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4dGVuc2lvbiBFeHRlbnNpb24gdG8gYmUgY2hlY2tlZCBmb3JcbiAqIEByZXR1cm4ge1N0cmluZ30gRmlsZSBleHRlbnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdE1pbWVUeXBlIChleHRlbnNpb24gPSAnJykge1xuICBleHRlbnNpb24gPSBleHRlbnNpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJykucmVwbGFjZSgvXlxcLi9nLCAnJylcblxuICBpZiAoIShleHRlbnNpb24gaW4gZXh0ZW5zaW9ucykpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSdcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXh0ZW5zaW9uc1tleHRlbnNpb25dID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBleHRlbnNpb25zW2V4dGVuc2lvbl1cbiAgfVxuXG4gIC8vIHNlYXJjaCBmb3IgbmFtZSBtYXRjaFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXh0ZW5zaW9uc1tleHRlbnNpb25dLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgbWltZVBhcnQgPSBleHRlbnNpb25zW2V4dGVuc2lvbl1baV0uc3BsaXQoJy8nKVsxXVxuICAgIGlmIChtaW1lUGFydCA9PT0gZXh0ZW5zaW9uKSB7XG4gICAgICByZXR1cm4gZXh0ZW5zaW9uc1tleHRlbnNpb25dW2ldXG4gICAgfVxuICB9XG5cbiAgLy8gdXNlIHRoZSBmaXJzdCBvbmVcbiAgcmV0dXJuIGV4dGVuc2lvbnNbZXh0ZW5zaW9uXVswXVxufVxuIl19