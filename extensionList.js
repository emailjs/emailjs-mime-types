// Extensions and mime types extracted from different sources

// AMD shim
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.extensionList = factory();
    }
}(this, function() {

    "use strict";

    return {
        "123": "application/vnd.lotus-1-2-3",
        "323": "text/h323",
        "evy": [
            "application/envoy",
            "application/x-envoy"
        ],
        "fif": [
            "application/fractals",
            "image/fif"
        ],
        "spl": [
            "application/futuresplash",
            "application/x-futuresplash"
        ],
        "hta": "application/hta",
        "acx": "application/internet-property-stream",
        "hqx": [
            "application/mac-binhex40",
            "application/binhex",
            "application/binhex4",
            "application/mac-binhex",
            "application/x-binhex40",
            "application/x-mac-binhex40"
        ],
        "doc": "application/msword",
        "dot": "application/msword",
        "*": "application/octet-stream",
        "bin": [
            "application/octet-stream",
            "application/mac-binary",
            "application/macbinary",
            "application/x-macbinary",
            "application/x-binary"
        ],
        "class": [
            "application/octet-stream",
            "application/java",
            "application/java-byte-code",
            "application/java-vm",
            "application/x-java-class"
        ],
        "dms": "application/octet-stream",
        "exe": [
            "application/octet-stream",
            "application/x-msdownload"
        ],
        "lha": [
            "application/octet-stream",
            "application/lha",
            "application/x-lha"
        ],
        "lzh": [
            "application/octet-stream",
            "application/x-lzh"
        ],
        "oda": "application/oda",
        "axs": "application/olescript",
        "pdf": "application/pdf",
        "prf": "application/pics-rules",
        "p10": [
            "application/pkcs10",
            "application/x-pkcs10"
        ],
        "crl": [
            "application/pkix-crl",
            "application/pkcs-crl"
        ],
        "ai": "application/postscript",
        "eps": "application/postscript",
        "ps": "application/postscript",
        "rtf": [
            "application/rtf",
            "text/richtext",
            "application/x-rtf"
        ],
        "setpay": "application/set-payment-initiation",
        "setreg": "application/set-registration-initiation",
        "xla": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-msexcel",
            "application/x-excel"
        ],
        "xlc": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-excel"
        ],
        "xlm": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-excel"
        ],
        "xls": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-msexcel",
            "application/x-excel"
        ],
        "xlt": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-excel"
        ],
        "xlw": [
            "application/vnd.ms-excel",
            "application/excel",
            "application/x-msexcel",
            "application/x-excel"
        ],
        "msg": "application/vnd.ms-outlook",
        "sst": [
            "application/vnd.ms-pkicertstore",
            "application/vnd.ms-pki.certstore"
        ],
        "cat": [
            "application/vnd.ms-pkiseccat",
            "application/vnd.ms-pki.seccat"
        ],
        "stl": [
            "application/vnd.ms-pkistl",
            "application/sla",
            "application/vnd.ms-pki.stl",
            "application/x-navistyle"
        ],
        "pot": [
            "application/vnd.ms-powerpoint",
            "application/mspowerpoint"
        ],
        "pps": [
            "application/vnd.ms-powerpoint",
            "application/mspowerpoint"
        ],
        "ppt": [
            "application/vnd.ms-powerpoint",
            "application/mspowerpoint",
            "application/powerpoint",
            "application/x-mspowerpoint"
        ],
        "mpp": "application/vnd.ms-project",
        "wcm": "application/vnd.ms-works",
        "wdb": "application/vnd.ms-works",
        "wks": "application/vnd.ms-works",
        "wps": "application/vnd.ms-works",
        "hlp": [
            "application/winhlp",
            "application/hlp",
            "application/x-helpfile",
            "application/x-winhelp"
        ],
        "bcpio": "application/x-bcpio",
        "cdf": [
            "application/cdf",
            "application/x-cdf",
            "application/x-netcdf"
        ],
        "z": [
            "application/x-compressed",
            "application/x-compress"
        ],
        "tgz": [
            "application/gnutar",
            "application/x-compressed"
        ],
        "cpio": "application/x-cpio",
        "csh": [
            "text/x-script.csh",
            "application/x-csh"
        ],
        "dcr": "application/x-director",
        "dir": "application/x-director",
        "dxr": "application/x-director",
        "dvi": "application/x-dvi",
        "gtar": "application/x-gtar",
        "gz": [
            "application/x-gzip",
            "application/x-compressed"
        ],
        "hdf": "application/x-hdf",
        "ins": [
            "application/x-internet-signup",
            "application/x-internett-signup"
        ],
        "isp": "application/x-internet-signup",
        "iii": "application/x-iphone",
        "js": [
            "application/javascript",
            "application/ecmascript",
            "text/javascript",
            "text/ecmascript",
            "application/x-javascript"
        ],
        "latex": "application/x-latex",
        "mdb": "application/x-msaccess",
        "crd": "application/x-mscardfile",
        "clp": "application/x-msclip",
        "dll": "application/x-msdownload",
        "m13": "application/x-msmediaview",
        "m14": "application/x-msmediaview",
        "mvb": "application/x-msmediaview",
        "wmf": [
            "windows/metafile",
            "application/x-msmetafile"
        ],
        "mny": "application/x-msmoney",
        "pub": "application/x-mspublisher",
        "scd": "application/x-msschedule",
        "trm": "application/x-msterminal",
        "wri": [
            "application/mswrite",
            "application/x-wri",
            "application/x-mswrite"
        ],
        "nc": "application/x-netcdf",
        "pma": "application/x-perfmon",
        "pmc": "application/x-perfmon",
        "pml": [
            "application/vnd.ctc-posml",
            "application/x-perfmon"
        ],
        "pmr": "application/x-perfmon",
        "pmw": "application/x-perfmon",
        "p12": [
            "application/pkcs-12",
            "application/x-pkcs12"
        ],
        "pfx": "application/x-pkcs12",
        "p7b": "application/x-pkcs7-certificates",
        "spc": [
            "text/x-speech",
            "application/x-pkcs7-certificates"
        ],
        "p7r": "application/x-pkcs7-certreqresp",
        "p7c": [
            "application/pkcs7-mime",
            "application/x-pkcs7-mime"
        ],
        "p7m": [
            "application/pkcs7-mime",
            "application/x-pkcs7-mime"
        ],
        "p7s": [
            "application/pkcs7-signature",
            "application/x-pkcs7-signature"
        ],
        "sh": [
            "application/x-shar",
            "application/x-bsh",
            "application/x-sh",
            "text/x-script.sh"
        ],
        "shar": [
            "application/x-bsh",
            "application/x-shar"
        ],
        "swf": "application/x-shockwave-flash",
        "sit": [
            "application/x-stuffit",
            "application/x-sit"
        ],
        "sv4cpio": "application/x-sv4cpio",
        "sv4crc": "application/x-sv4crc",
        "tar": "application/x-tar",
        "tcl": [
            "text/x-script.tcl",
            "application/x-tcl"
        ],
        "tex": "application/x-tex",
        "texi": "application/x-texinfo",
        "texinfo": "application/x-texinfo",
        "roff": "application/x-troff",
        "t": [
            "text/troff",
            "application/x-troff"
        ],
        "tr": "application/x-troff",
        "man": "application/x-troff-man",
        "me": "application/x-troff-me",
        "ms": "application/x-troff-ms",
        "ustar": [
            "application/x-ustar",
            "multipart/x-ustar"
        ],
        "src": "application/x-wais-source",
        "cer": [
            "application/pkix-cert",
            "application/x-x509-ca-cert"
        ],
        "crt": [
            "application/pkix-cert",
            "application/x-x509-user-cert",
            "application/x-x509-ca-cert"
        ],
        "der": "application/x-x509-ca-cert",
        "pko": [
            "application/ynd.ms-pkipko",
            "application/vnd.ms-pki.pko"
        ],
        "zip": [
            "application/zip",
            "multipart/x-zip",
            "application/x-zip-compressed",
            "application/x-compressed"
        ],
        "au": [
            "audio/basic",
            "audio/x-au"
        ],
        "snd": [
            "audio/basic",
            "audio/x-adpcm"
        ],
        "mid": [
            "audio/mid",
            "audio/midi",
            "music/crescendo",
            "x-music/x-midi",
            "audio/x-midi",
            "application/x-midi",
            "audio/x-mid"
        ],
        "rmi": "audio/mid",
        "mp3": [
            "audio/mpeg",
            "audio/mpeg3",
            "video/mpeg",
            "audio/x-mpeg-3",
            "video/x-mpeg"
        ],
        "aif": [
            "audio/aiff",
            "audio/x-aiff"
        ],
        "aifc": [
            "audio/aiff",
            "audio/x-aiff"
        ],
        "aiff": [
            "audio/aiff",
            "audio/x-aiff"
        ],
        "m3u": [
            "audio/x-mpegurl",
            "audio/x-mpequrl"
        ],
        "ra": [
            "audio/x-realaudio",
            "audio/x-pn-realaudio",
            "audio/x-pn-realaudio-plugin"
        ],
        "ram": "audio/x-pn-realaudio",
        "wav": [
            "audio/wav",
            "audio/x-wav"
        ],
        "bmp": [
            "image/bmp",
            "image/x-windows-bmp"
        ],
        "cod": [
            "image/cis-cod",
            "application/vnd.rim.cod"
        ],
        "gif": "image/gif",
        "ief": "image/ief",
        "jpe": [
            "image/jpeg",
            "image/pjpeg"
        ],
        "jpeg": [
            "image/jpeg",
            "image/pjpeg"
        ],
        "jpg": [
            "image/jpeg",
            "image/pjpeg"
        ],
        "jfif": [
            "image/pipeg",
            "image/jpeg",
            "image/pjpeg"
        ],
        "svg": "image/svg+xml",
        "tif": [
            "image/tiff",
            "image/x-tiff"
        ],
        "tiff": [
            "image/tiff",
            "image/x-tiff"
        ],
        "ras": [
            "image/cmu-raster",
            "application/x-cmu-raster",
            "image/x-cmu-raster"
        ],
        "cmx": "image/x-cmx",
        "ico": "image/x-icon",
        "pnm": [
            "application/x-portable-anymap",
            "image/x-portable-anymap"
        ],
        "pbm": "image/x-portable-bitmap",
        "pgm": [
            "image/x-portable-graymap",
            "image/x-portable-greymap"
        ],
        "ppm": "image/x-portable-pixmap",
        "rgb": "image/x-rgb",
        "xbm": [
            "image/xbm",
            "image/x-xbm",
            "image/x-xbitmap"
        ],
        "xpm": [
            "image/xpm",
            "image/x-xpixmap"
        ],
        "xwd": [
            "image/x-xwd",
            "image/x-xwindowdump"
        ],
        "mht": "message/rfc822",
        "mhtml": "message/rfc822",
        "nws": "message/rfc822",
        "css": [
            "text/css",
            "application/x-pointplus"
        ],
        "htm": "text/html",
        "html": "text/html",
        "stm": "text/html",
        "uls": "text/iuls",
        "bas": "text/plain",
        "c": [
            "text/plain",
            "text/x-c"
        ],
        "h": [
            "text/plain",
            "text/x-h"
        ],
        "txt": "text/plain",
        "rtx": [
            "text/richtext",
            "application/rtf"
        ],
        "sct": "text/scriptlet",
        "tsv": "text/tab-separated-values",
        "htt": "text/webviewhtml",
        "htc": "text/x-component",
        "etx": "text/x-setext",
        "vcf": "text/x-vcard",
        "mp2": [
            "video/mpeg",
            "audio/mpeg",
            "video/x-mpeg",
            "audio/x-mpeg",
            "video/x-mpeq2a"
        ],
        "mpa": [
            "video/mpeg",
            "audio/mpeg"
        ],
        "mpe": "video/mpeg",
        "mpeg": "video/mpeg",
        "mpg": [
            "video/mpeg",
            "audio/mpeg"
        ],
        "mpv2": "video/mpeg",
        "mov": "video/quicktime",
        "qt": "video/quicktime",
        "lsf": "video/x-la-asf",
        "lsx": [
            "video/x-la-asf",
            "text/x-la-asf"
        ],
        "asf": "video/x-ms-asf",
        "asr": "video/x-ms-asf",
        "asx": [
            "video/x-ms-asf",
            "application/x-mplayer2",
            "video/x-ms-asf-plugin"
        ],
        "avi": [
            "video/avi",
            "video/msvideo",
            "application/x-troff-msvideo",
            "video/x-msvideo"
        ],
        "movie": "video/x-sgi-movie",
        "flr": "x-world/x-vrml",
        "vrml": [
            "model/vrml",
            "x-world/x-vrml",
            "application/x-vrml"
        ],
        "wrl": [
            "model/vrml",
            "x-world/x-vrml",
            "application/x-world"
        ],
        "wrz": [
            "model/vrml",
            "x-world/x-vrml"
        ],
        "xaf": "x-world/x-vrml",
        "xof": "x-world/x-vrml",
        "3dm": "x-world/x-3dmf",
        "3dmf": "x-world/x-3dmf",
        "a": "application/octet-stream",
        "aab": "application/x-authorware-bin",
        "aam": "application/x-authorware-map",
        "aas": "application/x-authorware-seg",
        "abc": "text/vnd.abc",
        "acgi": "text/html",
        "afl": "video/animaflex",
        "aim": "application/x-aim",
        "aip": "text/x-audiosoft-intra",
        "ani": "application/x-navi-animation",
        "aos": "application/x-nokia-9000-communicator-add-on-software",
        "aps": "application/mime",
        "arc": "application/octet-stream",
        "arj": [
            "application/arj",
            "application/octet-stream"
        ],
        "art": "image/x-jg",
        "asm": "text/x-asm",
        "asp": "text/asp",
        "avs": "video/avs-video",
        "bm": "image/bmp",
        "boo": "application/book",
        "book": "application/book",
        "boz": "application/x-bzip2",
        "bsh": "application/x-bsh",
        "bz": "application/x-bzip",
        "bz2": "application/x-bzip2",
        "c++": "text/plain",
        "cc": [
            "text/plain",
            "text/x-c"
        ],
        "ccad": "application/clariscad",
        "cco": "application/x-cocoa",
        "cha": "application/x-chat",
        "chat": "application/x-chat",
        "com": [
            "application/octet-stream",
            "text/plain"
        ],
        "conf": "text/plain",
        "cpp": "text/x-c",
        "cpt": [
            "application/mac-compactpro",
            "application/x-compactpro",
            "application/x-cpt"
        ],
        "cxx": "text/plain",
        "deepv": "application/x-deepv",
        "def": "text/plain",
        "dif": "video/x-dv",
        "dl": [
            "video/dl",
            "video/x-dl"
        ],
        "dp": [
            "application/commonground",
            "application/vnd.osgi.dp"
        ],
        "drw": "application/drafting",
        "dump": "application/octet-stream",
        "dv": "video/x-dv",
        "dwf": [
            "model/vnd.dwf",
            "drawing/x-dwf"
        ],
        "dwg": [
            "application/acad",
            "image/vnd.dwg",
            "image/x-dwg"
        ],
        "dxf": [
            "application/dxf",
            "image/vnd.dwg",
            "image/vnd.dxf",
            "image/x-dwg"
        ],
        "el": "text/x-script.elisp",
        "elc": [
            "application/x-elc",
            "application/x-bytecode.elisp"
        ],
        "env": "application/x-envoy",
        "es": [
            "application/ecmascript",
            "application/x-esrehber"
        ],
        "f": [
            "text/plain",
            "text/x-fortran"
        ],
        "f77": "text/x-fortran",
        "f90": [
            "text/plain",
            "text/x-fortran"
        ],
        "fdf": "application/vnd.fdf",
        "fli": [
            "video/fli",
            "video/x-fli"
        ],
        "flo": [
            "image/florian",
            "application/vnd.micrografx.flo"
        ],
        "flx": "text/vnd.fmi.flexstor",
        "fmf": "video/x-atomic3d-feature",
        "for": [
            "text/plain",
            "text/x-fortran"
        ],
        "fpx": [
            "image/vnd.fpx",
            "image/vnd.net-fpx"
        ],
        "frl": "application/freeloader",
        "funk": "audio/make",
        "g": "text/plain",
        "g3": "image/g3fax",
        "gl": [
            "video/gl",
            "video/x-gl"
        ],
        "gsd": "audio/x-gsm",
        "gsm": "audio/x-gsm",
        "gsp": "application/x-gsp",
        "gss": "application/x-gss",
        "gzip": [
            "multipart/x-gzip",
            "application/x-gzip"
        ],
        "help": "application/x-helpfile",
        "hgl": "application/vnd.hp-hpgl",
        "hh": [
            "text/plain",
            "text/x-h"
        ],
        "hlb": "text/x-script",
        "hpg": "application/vnd.hp-hpgl",
        "hpgl": "application/vnd.hp-hpgl",
        "htmls": "text/html",
        "htx": "text/html",
        "ice": "x-conference/x-cooltalk",
        "idc": "text/plain",
        "iefs": "image/ief",
        "iges": [
            "application/iges",
            "model/iges"
        ],
        "igs": [
            "application/iges",
            "model/iges"
        ],
        "ima": "application/x-ima",
        "imap": "application/x-httpd-imap",
        "inf": "application/inf",
        "ip": "application/x-ip2",
        "isu": "video/x-isvideo",
        "it": "audio/it",
        "iv": "application/x-inventor",
        "ivr": "i-world/i-vrml",
        "ivy": "application/x-livescreen",
        "jam": [
            "application/vnd.jam",
            "audio/x-jam"
        ],
        "jav": [
            "text/plain",
            "text/x-java-source"
        ],
        "java": [
            "text/plain",
            "text/x-java-source,java",
            "text/x-java-source"
        ],
        "jcm": "application/x-java-commerce",
        "jfif-tbnl": "image/jpeg",
        "jps": "image/x-jps",
        "jut": "image/jutvision",
        "kar": [
            "audio/midi",
            "music/x-karaoke"
        ],
        "ksh": [
            "application/x-ksh",
            "text/x-script.ksh"
        ],
        "la": [
            "audio/nspaudio",
            "audio/x-nspaudio"
        ],
        "lam": "audio/x-liveaudio",
        "lhx": "application/octet-stream",
        "list": "text/plain",
        "lma": [
            "audio/nspaudio",
            "audio/x-nspaudio"
        ],
        "log": "text/plain",
        "lsp": [
            "application/x-lisp",
            "text/x-script.lisp"
        ],
        "lst": "text/plain",
        "ltx": "application/x-latex",
        "lzx": [
            "application/lzx",
            "application/octet-stream",
            "application/x-lzx"
        ],
        "m": [
            "text/plain",
            "text/x-m"
        ],
        "m1v": "video/mpeg",
        "m2a": "audio/mpeg",
        "m2v": "video/mpeg",
        "map": "application/x-navimap",
        "mar": "text/plain",
        "mbd": "application/mbedlet",
        "mc$": "application/x-magic-cap-package-1.0",
        "mcd": [
            "application/mcad",
            "application/vnd.mcd",
            "application/x-mathcad"
        ],
        "mcf": [
            "image/vasa",
            "text/mcf"
        ],
        "mcp": "application/netmc",
        "midi": [
            "audio/midi",
            "music/crescendo",
            "x-music/x-midi",
            "audio/x-midi",
            "application/x-midi",
            "audio/x-mid"
        ],
        "mif": [
            "application/vnd.mif",
            "application/x-mif",
            "application/x-frame"
        ],
        "mime": [
            "message/rfc822",
            "www/mime"
        ],
        "mjf": "audio/x-vnd.audioexplosion.mjuicemediafile",
        "mjpg": "video/x-motion-jpeg",
        "mm": [
            "application/base64",
            "application/x-meme"
        ],
        "mme": "application/base64",
        "mod": [
            "audio/mod",
            "audio/x-mod"
        ],
        "moov": "video/quicktime",
        "mpc": [
            "application/vnd.mophun.certificate",
            "application/x-project"
        ],
        "mpga": "audio/mpeg",
        "mpt": "application/x-project",
        "mpv": "application/x-project",
        "mpx": "application/x-project",
        "mrc": "application/marc",
        "mv": "video/x-sgi-movie",
        "my": "audio/make",
        "mzz": "application/x-vnd.audioexplosion.mzz",
        "nap": "image/naplps",
        "naplps": "image/naplps",
        "ncm": "application/vnd.nokia.configuration-message",
        "nif": "image/x-niff",
        "niff": "image/x-niff",
        "nix": "application/x-mix-transfer",
        "nsc": "application/x-conference",
        "nvd": "application/x-navidoc",
        "o": "application/octet-stream",
        "omc": "application/x-omc",
        "omcd": "application/x-omcdatamaker",
        "omcr": "application/x-omcregerator",
        "p": "text/x-pascal",
        "p7a": "application/x-pkcs7-signature",
        "part": "application/pro_eng",
        "pas": "text/pascal",
        "pcl": [
            "application/vnd.hp-pcl",
            "application/x-pcl"
        ],
        "pct": "image/x-pict",
        "pcx": "image/x-pcx",
        "pdb": [
            "application/vnd.palm",
            "chemical/x-pdb"
        ],
        "pfunk": [
            "audio/make",
            "audio/make.my.funk"
        ],
        "pic": [
            "image/pict",
            "image/x-pict"
        ],
        "pict": "image/pict",
        "pkg": "application/x-newton-compatible-pkg",
        "pl": [
            "text/plain",
            "text/x-script.perl"
        ],
        "plx": "application/x-pixclscript",
        "pm": [
            "text/x-script.perl-module",
            "image/x-xpixmap"
        ],
        "pm4": "application/x-pagemaker",
        "pm5": "application/x-pagemaker",
        "png": "image/png",
        "pov": "model/x-pov",
        "ppa": "application/vnd.ms-powerpoint",
        "ppz": "application/mspowerpoint",
        "pre": [
            "application/vnd.lotus-freelance",
            "application/x-freelance"
        ],
        "prt": "application/pro_eng",
        "psd": [
            "application/octet-stream",
            "image/vnd.adobe.photoshop"
        ],
        "pvu": "paleovu/x-pv",
        "pwz": "application/vnd.ms-powerpoint",
        "py": "text/x-script.phyton",
        "pyc": "applicaiton/x-bytecode.python",
        "qcp": "audio/vnd.qcelp",
        "qd3": "x-world/x-3dmf",
        "qd3d": "x-world/x-3dmf",
        "qif": "image/x-quicktime",
        "qtc": "video/x-qtc",
        "qti": "image/x-quicktime",
        "qtif": "image/x-quicktime",
        "rast": "image/cmu-raster",
        "rexx": "text/x-script.rexx",
        "rf": "image/vnd.rn-realflash",
        "rm": [
            "application/vnd.rn-realmedia",
            "audio/x-pn-realaudio"
        ],
        "rmm": "audio/x-pn-realaudio",
        "rmp": [
            "audio/x-pn-realaudio-plugin",
            "audio/x-pn-realaudio"
        ],
        "rng": [
            "application/ringing-tones",
            "application/vnd.nokia.ringing-tone"
        ],
        "rnx": "application/vnd.rn-realplayer",
        "rp": "image/vnd.rn-realpix",
        "rpm": "audio/x-pn-realaudio-plugin",
        "rt": [
            "text/richtext",
            "text/vnd.rn-realtext"
        ],
        "rv": "video/vnd.rn-realvideo",
        "s": "text/x-asm",
        "s3m": "audio/s3m",
        "saveme": "application/octet-stream",
        "sbk": "application/x-tbook",
        "scm": [
            "application/vnd.lotus-screencam",
            "video/x-scm",
            "text/x-script.guile",
            "application/x-lotusscreencam",
            "text/x-script.scheme"
        ],
        "sdml": "text/plain",
        "sdp": [
            "application/sdp",
            "application/x-sdp"
        ],
        "sdr": "application/sounder",
        "sea": [
            "application/sea",
            "application/x-sea"
        ],
        "set": "application/set",
        "sgm": [
            "text/sgml",
            "text/x-sgml"
        ],
        "sgml": [
            "text/sgml",
            "text/x-sgml"
        ],
        "shtml": [
            "text/html",
            "text/x-server-parsed-html"
        ],
        "sid": "audio/x-psid",
        "skd": "application/x-koan",
        "skm": "application/x-koan",
        "skp": [
            "application/vnd.koan",
            "application/x-koan"
        ],
        "skt": "application/x-koan",
        "sl": "application/x-seelogo",
        "smi": [
            "application/smil",
            "application/smil+xml"
        ],
        "smil": "application/smil",
        "sol": "application/solids",
        "spr": "application/x-sprite",
        "sprite": "application/x-sprite",
        "ssi": "text/x-server-parsed-html",
        "ssm": "application/streamingmedia",
        "step": "application/step",
        "stp": "application/step",
        "svf": [
            "image/vnd.dwg",
            "image/x-dwg"
        ],
        "svr": [
            "x-world/x-svr",
            "application/x-world"
        ],
        "talk": "text/x-speech",
        "tbk": [
            "application/toolbook",
            "application/x-tbook"
        ],
        "tcsh": "text/x-script.tcsh",
        "text": [
            "application/plain",
            "text/plain"
        ],
        "tsi": "audio/tsp-audio",
        "tsp": [
            "application/dsptype",
            "audio/tsplayer"
        ],
        "turbot": "image/florian",
        "uil": "text/x-uil",
        "uni": "text/uri-list",
        "unis": "text/uri-list",
        "unv": "application/i-deas",
        "uri": "text/uri-list",
        "uris": "text/uri-list",
        "uu": [
            "application/octet-stream",
            "text/x-uuencode"
        ],
        "uue": "text/x-uuencode",
        "vcd": "application/x-cdlink",
        "vcs": "text/x-vcalendar",
        "vda": "application/vda",
        "vdo": "video/vdo",
        "vew": "application/groupwise",
        "viv": [
            "video/vivo",
            "video/vnd.vivo"
        ],
        "vivo": [
            "video/vivo",
            "video/vnd.vivo"
        ],
        "vmd": "application/vocaltec-media-desc",
        "vmf": "application/vocaltec-media-file",
        "voc": [
            "audio/voc",
            "audio/x-voc"
        ],
        "vos": "video/vosaic",
        "vox": "audio/voxware",
        "vqe": "audio/x-twinvq-plugin",
        "vqf": "audio/x-twinvq",
        "vql": "audio/x-twinvq-plugin",
        "vrt": "x-world/x-vrt",
        "vsd": [
            "application/vnd.visio",
            "application/x-visio"
        ],
        "vst": "application/x-visio",
        "vsw": "application/x-visio",
        "w60": "application/wordperfect6.0",
        "w61": "application/wordperfect6.1",
        "w6w": "application/msword",
        "wb1": "application/x-qpro",
        "wbmp": "image/vnd.wap.wbmp",
        "web": "application/vnd.xara",
        "wiz": "application/msword",
        "wk1": "application/x-123",
        "wml": "text/vnd.wap.wml",
        "wmlc": "application/vnd.wap.wmlc",
        "wmls": "text/vnd.wap.wmlscript",
        "wmlsc": "application/vnd.wap.wmlscriptc",
        "word": "application/msword",
        "wp": "application/wordperfect",
        "wp5": [
            "application/wordperfect",
            "application/wordperfect6.0"
        ],
        "wp6": "application/wordperfect",
        "wpd": [
            "application/wordperfect",
            "application/vnd.wordperfect",
            "application/x-wpwin"
        ],
        "wq1": "application/x-lotus",
        "wsc": "text/scriplet",
        "wsrc": "application/x-wais-source",
        "wtk": "application/x-wintalk",
        "xdr": "video/x-amt-demorun",
        "xgz": "xgl/drawing",
        "xif": "image/vnd.xiff",
        "xl": "application/excel",
        "xlb": [
            "application/excel",
            "application/vnd.ms-excel",
            "application/x-excel"
        ],
        "xld": [
            "application/excel",
            "application/x-excel"
        ],
        "xlk": [
            "application/excel",
            "application/x-excel"
        ],
        "xll": [
            "application/excel",
            "application/vnd.ms-excel",
            "application/x-excel"
        ],
        "xlv": [
            "application/excel",
            "application/x-excel"
        ],
        "xm": "audio/xm",
        "xml": [
            "application/xml",
            "text/xml",
            "application/atom+xml",
            "application/rss+xml"
        ],
        "xmz": "xgl/movie",
        "xpix": "application/x-vnd.ls-xpix",
        "x-png": "image/png",
        "xsr": "video/x-amt-showrun",
        "xyz": [
            "chemical/x-xyz",
            "chemical/x-pdb"
        ],
        "zoo": "application/octet-stream",
        "zsh": "text/x-script.zsh",
        "x3d": "application/vnd.hzn-3d-crossword",
        "3gp": "video/3gpp",
        "3g2": "video/3gpp2",
        "mseq": "application/vnd.mseq",
        "pwn": "application/vnd.3m.post-it-notes",
        "plb": "application/vnd.3gpp.pic-bw-large",
        "psb": "application/vnd.3gpp.pic-bw-small",
        "pvb": "application/vnd.3gpp.pic-bw-var",
        "tcap": "application/vnd.3gpp2.tcap",
        "7z": "application/x-7z-compressed",
        "abw": "application/x-abiword",
        "ace": "application/x-ace-compressed",
        "acc": "application/vnd.americandynamics.acc",
        "acu": "application/vnd.acucobol",
        "atc": "application/vnd.acucorp",
        "adp": "audio/adpcm",
        "air": "application/vnd.adobe.air-application-installer-package+zip",
        "fxp": "application/vnd.adobe.fxp",
        "ppd": "application/vnd.cups-ppd",
        "xdp": "application/vnd.adobe.xdp+xml",
        "xfdf": "application/vnd.adobe.xfdf",
        "aac": "audio/x-aac",
        "ahead": "application/vnd.ahead.space",
        "azf": "application/vnd.airzip.filesecure.azf",
        "azs": "application/vnd.airzip.filesecure.azs",
        "azw": "application/vnd.amazon.ebook",
        "ami": "application/vnd.amiga.ami",
        "": [
            "application/andrew-inset",
            "application/pgp-encrypted"
        ],
        "apk": "application/vnd.android.package-archive",
        "cii": "application/vnd.anser-web-certificate-issue-initiation",
        "fti": "application/vnd.anser-web-funds-transfer-initiation",
        "atx": "application/vnd.antix.game-component",
        "mpkg": "application/vnd.apple.installer+xml",
        "aw": "application/applixware",
        "les": "application/vnd.hhe.lesson-player",
        "swi": "application/vnd.aristanetworks.swi",
        "atomcat": "application/atomcat+xml",
        "atomsvc": "application/atomsvc+xml",
        "ac": "application/pkix-attr-cert",
        "aep": "application/vnd.audiograph",
        "par": "text/plain-bas",
        "torrent": "application/x-bittorrent",
        "mpm": "application/vnd.blueice.multipass",
        "bmi": "application/vnd.bmi",
        "btif": "image/prs.btif",
        "rep": "application/vnd.businessobjects",
        "cdxml": "application/vnd.chemdraw+xml",
        "cdx": "chemical/x-cdx",
        "cml": "chemical/x-cml",
        "csml": "chemical/x-csml",
        "cdbcmsg": "application/vnd.contact.cmsg",
        "cla": "application/vnd.claymore",
        "c4g": "application/vnd.clonk.c4group",
        "sub": "image/vnd.dvb.subtitle",
        "cdmia": "application/cdmi-capability",
        "cdmic": "application/cdmi-container",
        "cdmid": "application/cdmi-domain",
        "cdmio": "application/cdmi-object",
        "cdmiq": "application/cdmi-queue",
        "c11amc": "application/vnd.cluetrust.cartomobile-config",
        "c11amz": "application/vnd.cluetrust.cartomobile-config-pkg",
        "dae": "model/vnd.collada+xml",
        "csv": "text/csv",
        "cgm": "image/cgm",
        "xar": "application/vnd.xara",
        "cmc": "application/vnd.cosmocaller",
        "clkx": "application/vnd.crick.clicker",
        "clkk": "application/vnd.crick.clicker.keyboard",
        "clkp": "application/vnd.crick.clicker.palette",
        "clkt": "application/vnd.crick.clicker.template",
        "clkw": "application/vnd.crick.clicker.wordbank",
        "wbs": "application/vnd.criticaltools.wbs+xml",
        "cryptonote": "application/vnd.rig.cryptonote",
        "cif": "chemical/x-cif",
        "cmdf": "chemical/x-cmdf",
        "cu": "application/cu-seeme",
        "cww": "application/prs.cww",
        "curl": "text/vnd.curl",
        "dcurl": "text/vnd.curl.dcurl",
        "mcurl": "text/vnd.curl.mcurl",
        "scurl": "text/vnd.curl.scurl",
        "car": "application/vnd.curl.car",
        "pcurl": "application/vnd.curl.pcurl",
        "cmp": "application/vnd.yellowriver-custom-menu",
        "dssc": "application/dssc+der",
        "xdssc": "application/dssc+xml",
        "deb": "application/x-debian-package",
        "uva": "audio/vnd.dece.audio",
        "uvi": "image/vnd.dece.graphic",
        "uvh": "video/vnd.dece.hd",
        "uvm": "video/vnd.dece.mobile",
        "uvu": "video/vnd.uvvu.mp4",
        "uvp": "video/vnd.dece.pd",
        "uvs": "video/vnd.dece.sd",
        "uvv": "video/vnd.dece.video",
        "seed": "application/vnd.fdsn.seed",
        "dtb": "application/x-dtbook+xml",
        "res": "application/x-dtbresource+xml",
        "ait": "application/vnd.dvb.ait",
        "svc": "application/vnd.dvb.service",
        "eol": "audio/vnd.digital-winds",
        "djvu": "image/vnd.djvu",
        "dtd": "application/xml-dtd",
        "mlp": "application/vnd.dolby.mlp",
        "wad": "application/x-doom",
        "dpg": "application/vnd.dpgraph",
        "dra": "audio/vnd.dra",
        "dfac": "application/vnd.dreamfactory",
        "dts": "audio/vnd.dts",
        "dtshd": "audio/vnd.dts.hd",
        "geo": "application/vnd.dynageo",
        "mag": "application/vnd.ecowin.chart",
        "mmr": "image/vnd.fujixerox.edmics-mmr",
        "rlc": "image/vnd.fujixerox.edmics-rlc",
        "exi": "application/exi",
        "mgz": "application/vnd.proteus.magazine",
        "epub": "application/epub+zip",
        "eml": "message/rfc822",
        "nml": "application/vnd.enliven",
        "xpr": "application/vnd.is-xpr",
        "xfdl": "application/vnd.xfdl",
        "emma": "application/emma+xml",
        "ez2": "application/vnd.ezpix-album",
        "ez3": "application/vnd.ezpix-package",
        "fst": "image/vnd.fst",
        "fvt": "video/vnd.fvt",
        "fbs": "image/vnd.fastbidsheet",
        "fe_launch": "application/vnd.denovo.fcselayout-link",
        "f4v": "video/x-f4v",
        "flv": "video/x-flv",
        "npx": "image/vnd.net-fpx",
        "ftc": "application/vnd.fluxtime.clip",
        "fm": "application/vnd.framemaker",
        "fh": "image/x-freehand",
        "fsc": "application/vnd.fsc.weblaunch",
        "fnc": "application/vnd.frogans.fnc",
        "ltf": "application/vnd.frogans.ltf",
        "ddd": "application/vnd.fujixerox.ddd",
        "xdw": "application/vnd.fujixerox.docuworks",
        "xbd": "application/vnd.fujixerox.docuworks.binder",
        "oas": "application/vnd.fujitsu.oasys",
        "oa2": "application/vnd.fujitsu.oasys2",
        "oa3": "application/vnd.fujitsu.oasys3",
        "fg5": "application/vnd.fujitsu.oasysgp",
        "bh2": "application/vnd.fujitsu.oasysprs",
        "fzs": "application/vnd.fuzzysheet",
        "gmx": "application/vnd.gmx",
        "gtw": "model/vnd.gtw",
        "txd": "application/vnd.genomatix.tuxedo",
        "ggb": "application/vnd.geogebra.file",
        "ggt": "application/vnd.geogebra.tool",
        "gdl": "model/vnd.gdl",
        "gex": "application/vnd.geometry-explorer",
        "gxt": "application/vnd.geonext",
        "g2w": "application/vnd.geoplan",
        "g3w": "application/vnd.geospace",
        "gsf": "application/x-font-ghostscript",
        "bdf": "application/x-font-bdf",
        "gnumeric": "application/x-gnumeric",
        "kml": "application/vnd.google-earth.kml+xml",
        "kmz": "application/vnd.google-earth.kmz",
        "gqf": "application/vnd.grafeq",
        "gv": "text/vnd.graphviz",
        "gac": "application/vnd.groove-account",
        "ghf": "application/vnd.groove-help",
        "gim": "application/vnd.groove-identity-message",
        "grv": "application/vnd.groove-injector",
        "gtm": "application/vnd.groove-tool-message",
        "tpl": "application/vnd.groove-tool-template",
        "vcg": "application/vnd.groove-vcard",
        "h261": "video/h261",
        "h263": "video/h263",
        "h264": "video/h264",
        "hpid": "application/vnd.hp-hpid",
        "hps": "application/vnd.hp-hps",
        "rip": "audio/vnd.rip",
        "hbci": "application/vnd.hbci",
        "jlt": "application/vnd.hp-jlyt",
        "hvs": "application/vnd.yamaha.hv-script",
        "hvd": "application/vnd.yamaha.hv-dic",
        "hvp": "application/vnd.yamaha.hv-voice",
        "sfd-hdstx": "application/vnd.hydrostatix.sof-data",
        "stk": "application/hyperstudio",
        "hal": "application/vnd.hal+xml",
        "irm": "application/vnd.ibm.rights-management",
        "sc": "application/vnd.ibm.secure-container",
        "ics": "text/calendar",
        "icc": "application/vnd.iccprofile",
        "igl": "application/vnd.igloader",
        "ivp": "application/vnd.immervision-ivp",
        "ivu": "application/vnd.immervision-ivu",
        "rif": "application/reginfo+xml",
        "3dml": "text/vnd.in3d.3dml",
        "spot": "text/vnd.in3d.spot",
        "i2g": "application/vnd.intergeo",
        "cdy": "application/vnd.cinderella",
        "xpw": "application/vnd.intercon.formnet",
        "fcs": "application/vnd.isac.fcs",
        "ipfix": "application/ipfix",
        "pki": "application/pkixcmp",
        "pkipath": "application/pkix-pkipath",
        "igm": "application/vnd.insors.igm",
        "rcprofile": "application/vnd.ipunplugged.rcprofile",
        "irp": "application/vnd.irepository.package+xml",
        "jad": "text/vnd.sun.j2me.app-descriptor",
        "jar": "application/java-archive",
        "jnlp": "application/x-java-jnlp-file",
        "ser": "application/java-serialized-object",
        "json": "application/json",
        "joda": "application/vnd.joost.joda-archive",
        "jpm": "video/jpm",
        "jpgv": "video/jpeg",
        "ktz": "application/vnd.kahootz",
        "mmd": "application/vnd.chipnuts.karaoke-mmd",
        "karbon": "application/vnd.kde.karbon",
        "chrt": "application/vnd.kde.kchart",
        "kfo": "application/vnd.kde.kformula",
        "flw": "application/vnd.kde.kivio",
        "kon": "application/vnd.kde.kontour",
        "kpr": "application/vnd.kde.kpresenter",
        "ksp": "application/vnd.kde.kspread",
        "kwd": "application/vnd.kde.kword",
        "htke": "application/vnd.kenameaapp",
        "kia": "application/vnd.kidspiration",
        "kne": "application/vnd.kinar",
        "sse": "application/vnd.kodak-descriptor",
        "lasxml": "application/vnd.las.las+xml",
        "lbd": "application/vnd.llamagraphics.life-balance.desktop",
        "lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
        "apr": "application/vnd.lotus-approach",
        "nsf": "application/vnd.lotus-notes",
        "org": "application/vnd.lotus-organizer",
        "lwp": "application/vnd.lotus-wordpro",
        "lvp": "audio/vnd.lucent.voice",
        "m4v": "video/x-m4v",
        "portpkg": "application/vnd.macports.portpkg",
        "mgp": "application/vnd.osgeo.mapguide.package",
        "mrcx": "application/marcxml+xml",
        "mxf": "application/mxf",
        "nbp": "application/vnd.wolfram.player",
        "ma": "application/mathematica",
        "mathml": "application/mathml+xml",
        "mbox": "application/mbox",
        "mc1": "application/vnd.medcalcdata",
        "mscml": "application/mediaservercontrol+xml",
        "cdkey": "application/vnd.mediastation.cdkey",
        "mwf": "application/vnd.mfer",
        "mfm": "application/vnd.mfmp",
        "msh": "model/mesh",
        "mads": "application/mads+xml",
        "mets": "application/mets+xml",
        "mods": "application/mods+xml",
        "meta4": "application/metalink4+xml",
        "potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
        "docm": "application/vnd.ms-word.document.macroenabled.12",
        "dotm": "application/vnd.ms-word.template.macroenabled.12",
        "igx": "application/vnd.micrografx.igx",
        "es3": "application/vnd.eszigno3+xml",
        "cil": "application/vnd.ms-artgalry",
        "cab": "application/vnd.ms-cab-compressed",
        "ims": "application/vnd.ms-ims",
        "application": "application/x-ms-application",
        "mdi": "image/vnd.ms-modi",
        "eot": "application/vnd.ms-fontobject",
        "xlam": "application/vnd.ms-excel.addin.macroenabled.12",
        "xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
        "xltm": "application/vnd.ms-excel.template.macroenabled.12",
        "xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
        "chm": "application/vnd.ms-htmlhelp",
        "lrm": "application/vnd.ms-lrm",
        "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
        "ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
        "potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
        "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        "obd": "application/x-msbinder",
        "thmx": "application/vnd.ms-officetheme",
        "onetoc": "application/onenote",
        "pya": "audio/vnd.ms-playready.media.pya",
        "pyv": "video/vnd.ms-playready.media.pyv",
        "ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
        "sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
        "pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
        "ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
        "xap": "application/x-silverlight-app",
        "wm": "video/x-ms-wm",
        "wma": "audio/x-ms-wma",
        "wax": "audio/x-ms-wax",
        "wmx": "video/x-ms-wmx",
        "wmd": "application/x-ms-wmd",
        "wpl": "application/vnd.ms-wpl",
        "wmz": "application/x-ms-wmz",
        "wmv": "video/x-ms-wmv",
        "wvx": "video/x-ms-wvx",
        "xbap": "application/x-ms-xbap",
        "xps": "application/vnd.ms-xpsdocument",
        "mpy": "application/vnd.ibm.minipay",
        "afp": "application/vnd.ibm.modcap",
        "rms": "application/vnd.jcp.javame.midlet-rms",
        "tmo": "application/vnd.tmobile-livetv",
        "prc": "application/x-mobipocket-ebook",
        "mbk": "application/vnd.mobius.mbk",
        "dis": "application/vnd.mobius.dis",
        "plc": "application/vnd.mobius.plc",
        "mqy": "application/vnd.mobius.mqy",
        "msl": "application/vnd.mobius.msl",
        "txf": "application/vnd.mobius.txf",
        "daf": "application/vnd.mobius.daf",
        "fly": "text/vnd.fly",
        "mpn": "application/vnd.mophun.application",
        "mj2": "video/mj2",
        "mxu": "video/vnd.mpegurl",
        "m21": "application/mp21",
        "mp4a": "audio/mp4",
        "mp4": [
            "video/mp4",
            "application/mp4"
        ],
        "m3u8": "application/vnd.apple.mpegurl",
        "mus": "application/vnd.musician",
        "msty": "application/vnd.muvee.style",
        "mxml": "application/xv+xml",
        "ngdat": "application/vnd.nokia.n-gage.data",
        "n-gage": "application/vnd.nokia.n-gage.symbian.install",
        "ncx": "application/x-dtbncx+xml",
        "nlu": "application/vnd.neurolanguage.nlu",
        "dna": "application/vnd.dna",
        "nnd": "application/vnd.noblenet-directory",
        "nns": "application/vnd.noblenet-sealer",
        "nnw": "application/vnd.noblenet-web",
        "rpst": "application/vnd.nokia.radio-preset",
        "rpss": "application/vnd.nokia.radio-presets",
        "n3": "text/n3",
        "edm": "application/vnd.novadigm.edm",
        "edx": "application/vnd.novadigm.edx",
        "ext": "application/vnd.novadigm.ext",
        "gph": "application/vnd.flographit",
        "ecelp4800": "audio/vnd.nuera.ecelp4800",
        "ecelp7470": "audio/vnd.nuera.ecelp7470",
        "ecelp9600": "audio/vnd.nuera.ecelp9600",
        "ogx": "application/ogg",
        "oga": "audio/ogg",
        "ogv": "video/ogg",
        "dd2": "application/vnd.oma.dd2+xml",
        "oth": "application/vnd.oasis.opendocument.text-web",
        "opf": "application/oebps-package+xml",
        "qbo": "application/vnd.intu.qbo",
        "oxt": "application/vnd.openofficeorg.extension",
        "osf": "application/vnd.yamaha.openscoreformat",
        "weba": "audio/webm",
        "webm": "video/webm",
        "odc": "application/vnd.oasis.opendocument.chart",
        "otc": "application/vnd.oasis.opendocument.chart-template",
        "odb": "application/vnd.oasis.opendocument.database",
        "odf": "application/vnd.oasis.opendocument.formula",
        "odft": "application/vnd.oasis.opendocument.formula-template",
        "odg": "application/vnd.oasis.opendocument.graphics",
        "otg": "application/vnd.oasis.opendocument.graphics-template",
        "odi": "application/vnd.oasis.opendocument.image",
        "oti": "application/vnd.oasis.opendocument.image-template",
        "odp": "application/vnd.oasis.opendocument.presentation",
        "otp": "application/vnd.oasis.opendocument.presentation-template",
        "ods": "application/vnd.oasis.opendocument.spreadsheet",
        "ots": "application/vnd.oasis.opendocument.spreadsheet-template",
        "odt": "application/vnd.oasis.opendocument.text",
        "odm": "application/vnd.oasis.opendocument.text-master",
        "ott": "application/vnd.oasis.opendocument.text-template",
        "ktx": "image/ktx",
        "sxc": "application/vnd.sun.xml.calc",
        "stc": "application/vnd.sun.xml.calc.template",
        "sxd": "application/vnd.sun.xml.draw",
        "std": "application/vnd.sun.xml.draw.template",
        "sxi": "application/vnd.sun.xml.impress",
        "sti": "application/vnd.sun.xml.impress.template",
        "sxm": "application/vnd.sun.xml.math",
        "sxw": "application/vnd.sun.xml.writer",
        "sxg": "application/vnd.sun.xml.writer.global",
        "stw": "application/vnd.sun.xml.writer.template",
        "otf": "application/x-font-otf",
        "osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
        "paw": "application/vnd.pawaafile",
        "pclxl": "application/vnd.hp-pclxl",
        "efif": "application/vnd.picsel",
        "p8": "application/pkcs8",
        "plf": "application/vnd.pocketlearn",
        "pcf": "application/x-font-pcf",
        "pfr": "application/font-tdpfr",
        "pgn": "application/x-chess-pgn",
        "pskcxml": "application/pskc+xml",
        "pfa": "application/x-font-type1",
        "pbd": "application/vnd.powerbuilder6",
        "pgp": "application/pgp-signature",
        "box": "application/vnd.previewsystems.box",
        "ptid": "application/vnd.pvi.ptid1",
        "pls": "application/pls+xml",
        "str": "application/vnd.pg.format",
        "ei6": "application/vnd.pg.osasli",
        "dsc": "text/prs.lines.tag",
        "psf": "application/x-font-linux-psf",
        "qps": "application/vnd.publishare-delta-tree",
        "wg": "application/vnd.pmi.widget",
        "qxd": "application/vnd.quark.quarkxpress",
        "esf": "application/vnd.epson.esf",
        "msf": "application/vnd.epson.msf",
        "ssf": "application/vnd.epson.ssf",
        "qam": "application/vnd.epson.quickanime",
        "qfx": "application/vnd.intu.qfx",
        "rar": "application/x-rar-compressed",
        "rsd": "application/rsd+xml",
        "bed": "application/vnd.realvnc.bed",
        "mxl": "application/vnd.recordare.musicxml",
        "musicxml": "application/vnd.recordare.musicxml+xml",
        "rnc": "application/relax-ng-compact-syntax",
        "rdz": "application/vnd.data-vision.rdz",
        "rdf": "application/rdf+xml",
        "rp9": "application/vnd.cloanto.rp9",
        "jisp": "application/vnd.jisp",
        "link66": "application/vnd.route66.link66+xml",
        "shf": "application/shf+xml",
        "st": "application/vnd.sailingtracker.track",
        "sus": "application/vnd.sus-calendar",
        "sru": "application/sru+xml",
        "sema": "application/vnd.sema",
        "semd": "application/vnd.semd",
        "semf": "application/vnd.semf",
        "see": "application/vnd.seemail",
        "snf": "application/x-font-snf",
        "spq": "application/scvp-vp-request",
        "spp": "application/scvp-vp-response",
        "scq": "application/scvp-cv-request",
        "scs": "application/scvp-cv-response",
        "ifm": "application/vnd.shana.informed.formdata",
        "itp": "application/vnd.shana.informed.formtemplate",
        "iif": "application/vnd.shana.informed.interchange",
        "ipk": "application/vnd.shana.informed.package",
        "tfi": "application/thraud+xml",
        "slt": "application/vnd.epson.salt",
        "aso": "application/vnd.accpac.simply.aso",
        "imp": "application/vnd.accpac.simply.imp",
        "twd": "application/vnd.simtech-mindmapper",
        "csp": "application/vnd.commonspace",
        "saf": "application/vnd.yamaha.smaf-audio",
        "mmf": "application/vnd.smaf",
        "spf": "application/vnd.yamaha.smaf-phrase",
        "teacher": "application/vnd.smart.teacher",
        "svd": "application/vnd.svd",
        "rq": "application/sparql-query",
        "srx": "application/sparql-results+xml",
        "gram": "application/srgs",
        "grxml": "application/srgs+xml",
        "ssml": "application/ssml+xml",
        "sdc": "application/vnd.stardivision.calc",
        "sda": "application/vnd.stardivision.draw",
        "sdd": "application/vnd.stardivision.impress",
        "smf": "application/vnd.stardivision.math",
        "sdw": "application/vnd.stardivision.writer",
        "sgl": "application/vnd.stardivision.writer-global",
        "sm": "application/vnd.stepmania.stepchart",
        "sitx": "application/x-stuffitx",
        "sdkm": "application/vnd.solent.sdkm+xml",
        "xo": "application/vnd.olpc-sugar",
        "wqd": "application/vnd.wqd",
        "sis": "application/vnd.symbian.install",
        "xsm": "application/vnd.syncml+xml",
        "bdm": "application/vnd.syncml.dm+wbxml",
        "xdm": "application/vnd.syncml.dm+xml",
        "sbml": "application/sbml+xml",
        "tao": "application/vnd.tao.intent-module-archive",
        "tfm": "application/x-tex-tfm",
        "tei": "application/tei+xml",
        "dxp": "application/vnd.spotfire.dxp",
        "sfs": "application/vnd.spotfire.sfs",
        "tsd": "application/timestamped-data",
        "tpt": "application/vnd.trid.tpt",
        "mxs": "application/vnd.triscape.mxs",
        "tra": "application/vnd.trueapp",
        "ttf": "application/x-font-ttf",
        "ttl": "text/turtle",
        "umj": "application/vnd.umajin",
        "uoml": "application/vnd.uoml+xml",
        "unityweb": "application/vnd.unity",
        "ufd": "application/vnd.ufdl",
        "utz": "application/vnd.uiq.theme",
        "vsf": "application/vnd.vsf",
        "vcx": "application/vnd.vcx",
        "mts": "model/vnd.mts",
        "vtu": "model/vnd.vtu",
        "vis": "application/vnd.visionary",
        "ccxml": "application/ccxml+xml,",
        "vxml": "application/voicexml+xml",
        "wbxml": "application/vnd.wap.wbxml",
        "davmount": "application/davmount+xml",
        "woff": "application/x-font-woff",
        "wspolicy": "application/wspolicy+xml",
        "webp": "image/webp",
        "wtb": "application/vnd.webturbo",
        "wgt": "application/widget",
        "stf": "application/vnd.wt.stf",
        "wsdl": "application/wsdl+xml",
        "fig": "application/x-xfig",
        "xhtml": "application/xhtml+xml",
        "xdf": "application/xcap-diff+xml",
        "xenc": "application/xenc+xml",
        "xer": "application/patch-ops-error+xml",
        "rl": "application/resource-lists+xml",
        "rs": "application/rls-services+xml",
        "rld": "application/resource-lists-diff+xml",
        "xslt": "application/xslt+xml",
        "xop": "application/xop+xml",
        "xpi": "application/x-xpinstall",
        "xspf": "application/xspf+xml",
        "xul": "application/vnd.mozilla.xul+xml",
        "yang": "application/yang",
        "yin": "application/yin+xml",
        "zir": "application/vnd.zul",
        "zmm": "application/vnd.handheld-entertainment+xml",
        "zaz": "application/vnd.zzazz.deck+xml"
    };

}));