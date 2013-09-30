
test("Exact match for an extension", function(){
    var extension = "doc",
        contentType = "application/msword";

    equal(mimetypes.detectMimeType(extension), contentType);
});

test("Exact match for a content type", function(){
    var extension = "doc",
        contentType = "application/msword";

    equal(mimetypes.detectExtension(contentType), extension);
});

test("Best match for an extension", function(){
    var extension = "js",
        contentType = "application/javascript";

    equal(mimetypes.detectMimeType(extension), contentType);
});

test("Best match for a content type", function(){
    var extension = "jpeg",
        contentType = "image/jpeg";

    equal(mimetypes.detectExtension(contentType), extension);
});