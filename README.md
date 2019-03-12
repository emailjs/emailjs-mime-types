# MIME Types

[![Greenkeeper badge](https://badges.greenkeeper.io/emailjs/emailjs-mime-types.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/emailjs/emailjs-mime-types.png?branch=master)](https://travis-ci.org/emailjs/emailjs-mime-types) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  [![ES6+](https://camo.githubusercontent.com/567e52200713e0f0c05a5238d91e1d096292b338/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f65732d362b2d627269676874677265656e2e737667)](https://kangax.github.io/compat-table/es6/)

`emailjs-mime-types` allows you to detect file extensions for content types and vice-versa.

## Usage

```bash
npm install --save emailjs-mime-types
```

```javascript
import { detectExtension, detectMimeType } from 'emailjs-mime-types'
```

## Methods

### #detectExtension

 Returns file extension for a content type string. If no suitable extensions are found, 'bin' is used as the default extension.

    mimetypes.detectExtension(mimeType: String, [favoredExtension: String]) -> String

  * **mimeType** - Content type to be checked for
  * **favoredExtension** (optional) - If multiple extensions exist for type, then pick favoredExtension if available

For example:

    mimetypes.detectExtension('image/jpeg') // returns 'jpeg'
    mimetypes.detectExtension('image/jpeg', 'jpg') // returns 'jpg'
    mimetypes.detectExtension('image/jpeg', 'txt') // returns 'jpeg'

### #detectMimeType

Returns content type for a file extension. If no suitable content types are found, 'application/octet-stream' is used as the default content type

    mimetypes.detectMimeType(extension: String) -> String

  * **extension** Extension to be checked for

For example:

    mimetypes.detectExtension('jpeg') // returns 'image/jpeg'

## License

    Copyright (c) 2013 Andris Reinman

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
