# MIME Types

`mimetypes` allows you to detect file extensions for content types and vice-versa.

## Usage

### Volo

Install with [volo](http://volojs.org/):

    volo add Kreata/mimetypes

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

