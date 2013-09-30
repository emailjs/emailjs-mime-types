// Copyright (c) 2013 Andris Reinman
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// AMD shim
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['./mimeTypeList', './extensionList'], factory);
    } else {
        root.mimeTypes = factory(root.mimeTypeList, root.extensionList);
    }
}(this, function(mimeTypeList, extensionList) {

    "use strict";

    var mimeTypes = {

        /**
         * Returns file extension for a content type string. If no suitable extensions
         * are found, 'bin' is used as the default extension
         *
         * @param {String} mimeType Content type to be checked for
         * @return {String} File extension
         */
        detectExtension: function(mimeType){
            mimeType = (mimeType || "").toString().toLowerCase().replace(/\s/g, "");
            if(!(mimeType in mimeTypeList)){
                return "bin";
            }

            if(typeof mimeTypeList[mimeType] == "string"){
                return mimeTypeList[mimeType];
            }

            var mimeParts = mimeType.split("/");

            // search for name match
            for(var i=0, len = mimeTypeList[mimeType].length; i < len; i++){
                if(mimeParts[1] == mimeTypeList[mimeType][i]){
                    return mimeTypeList[mimeType][i];
                }
            }

            // use the first one
            return mimeTypeList[mimeType][0];
        },

        /**
         * Returns content type for a file extension. If no suitable content types
         * are found, 'application/octet-stream' is used as the default content type
         *
         * @param {String} extension Extension to be checked for
         * @return {String} File extension
         */
        detectMimeType: function(extension){
            extension = (extension || "").toString().toLowerCase().replace(/\s/g, "").replace(/^\./g, "");

            if(!(extension in extensionList)){
                return "application/octet-stream";
            }

            if(typeof extensionList[extension] == "string"){
                return extensionList[extension];
            }

            var mimeParts;

            // search for name match
            for(var i=0, len = extensionList[extension].length; i < len; i++){
                mimeParts = extensionList[extension][i].split("/");
                if(mimeParts[1] == extension){
                    return extensionList[extension][i];
                }
            }

            // use the first one
            return extensionList[extension][0];
        }
    };

    return mimeTypes;
}));