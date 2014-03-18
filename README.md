# MIME Types

`mimetypes` allows you to detect file extensions for content types and vice-versa.

## Usage

### Volo

Install with [volo](http://volojs.org/):

    volo add Kreata/mimetypes/v0.1.0

### AMD

Require [mimetypes.js](mimetypes.js) as `mimetypes`

### Global context

Include files the folowing files

  * [mimeTypeList.js](mimeTypeList.js)
  * [extensionList.js](extensionList.js)
  * [mimetypes.js](mimetypes.js)

```html
<script src="mimeTypeList.js"></script>
<script src="extensionList.js"></script>
<script src="mimetypes.js"></script>
```

This exposes global variable `mimetypes`

## Methods

### detectExtension

 Returns file extension for a content type string. If no suitable extensions are found, 'bin' is used as the default extension.

    mimetypes.detectExtension(mimeType) -> String

  * **mimeType** - Content type to be checked for

For example:

    mimetypes.detectExtension("image/jpeg")

results in

    "jpeg"


### detectMimeType

Returns content type for a file extension. If no suitable content types are found, 'application/octet-stream' is used as the default content type

    mimetypes.detectMimeType(extension) -> String

  * **extension** Extension to be checked for

For example:

    mimetypes.detectExtension("jpeg")

results in

    "image/jpeg"

## Tests

Download `mimetypes` source and install dependencies

```bash
git clone git@github.com:Kreata/mimetypes.git
cd mimetypes
volo install
```

Tests are handled by QUnit. Open [testrunner.html](tests/testrunner.html) to run the tests.

## License

    Copyright (c) 2013 Andris Reinman

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.