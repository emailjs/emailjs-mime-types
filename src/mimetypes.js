import { extensions } from './list-extensions'
import { types } from './list-types'

/**
 * Returns file extension for a content type string. If no suitable extensions
 * are found, 'bin' is used as the default extension
 *
 * @param {String} mimeType Content type to be checked for
 * @return {String} File extension
 */
export function detectExtension (mimeType = '', favoredExtension = '') {
  mimeType = mimeType.toString().toLowerCase().replace(/\s/g, '')
  if (!(mimeType in types)) {
    return 'bin'
  }

  if (typeof types[mimeType] === 'string') {
    return types[mimeType]
  }

  favoredExtension = favoredExtension.toString().toLowerCase().replace(/\s/g, '')
  if (favoredExtension && types[mimeType].includes(favoredExtension)) {
    return favoredExtension
  }

  // search for name match
  const mimePart = mimeType.split('/')[1]
  for (let i = 0, len = types[mimeType].length; i < len; i++) {
    if (mimePart === types[mimeType][i]) {
      return types[mimeType][i]
    }
  }

  // use the first one
  return types[mimeType][0]
}

/**
 * Returns content type for a file extension. If no suitable content types
 * are found, 'application/octet-stream' is used as the default content type
 *
 * @param {String} extension Extension to be checked for
 * @return {String} File extension
 */
export function detectMimeType (extension = '') {
  extension = extension.toString().toLowerCase().replace(/\s/g, '').replace(/^\./g, '')

  if (!(extension in extensions)) {
    return 'application/octet-stream'
  }

  if (typeof extensions[extension] === 'string') {
    return extensions[extension]
  }

  // search for name match
  for (var i = 0, len = extensions[extension].length; i < len; i++) {
    const mimePart = extensions[extension][i].split('/')[1]
    if (mimePart === extension) {
      return extensions[extension][i]
    }
  }

  // use the first one
  return extensions[extension][0]
}
