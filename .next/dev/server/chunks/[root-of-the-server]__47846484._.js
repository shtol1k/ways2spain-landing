module.exports = [
"[project]/node_modules/streamsearch/lib/sbmh.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
*/ function memcmp(buf1, pos1, buf2, pos2, num) {
    for(let i = 0; i < num; ++i){
        if (buf1[pos1 + i] !== buf2[pos2 + i]) return false;
    }
    return true;
}
class SBMH {
    constructor(needle, cb){
        if (typeof cb !== 'function') throw new Error('Missing match callback');
        if (typeof needle === 'string') needle = Buffer.from(needle);
        else if (!Buffer.isBuffer(needle)) throw new Error(`Expected Buffer for needle, got ${typeof needle}`);
        const needleLen = needle.length;
        this.maxMatches = Infinity;
        this.matches = 0;
        this._cb = cb;
        this._lookbehindSize = 0;
        this._needle = needle;
        this._bufPos = 0;
        this._lookbehind = Buffer.allocUnsafe(needleLen);
        // Initialize occurrence table.
        this._occ = [
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen,
            needleLen
        ];
        // Populate occurrence table with analysis of the needle, ignoring the last
        // letter.
        if (needleLen > 1) {
            for(let i = 0; i < needleLen - 1; ++i)this._occ[needle[i]] = needleLen - 1 - i;
        }
    }
    reset() {
        this.matches = 0;
        this._lookbehindSize = 0;
        this._bufPos = 0;
    }
    push(chunk, pos) {
        let result;
        if (!Buffer.isBuffer(chunk)) chunk = Buffer.from(chunk, 'latin1');
        const chunkLen = chunk.length;
        this._bufPos = pos || 0;
        while(result !== chunkLen && this.matches < this.maxMatches)result = feed(this, chunk);
        return result;
    }
    destroy() {
        const lbSize = this._lookbehindSize;
        if (lbSize) this._cb(false, this._lookbehind, 0, lbSize, false);
        this.reset();
    }
}
function feed(self, data) {
    const len = data.length;
    const needle = self._needle;
    const needleLen = needle.length;
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehindSize - 2]
    let pos = -self._lookbehindSize;
    const lastNeedleCharPos = needleLen - 1;
    const lastNeedleChar = needle[lastNeedleCharPos];
    const end = len - needleLen;
    const occ = self._occ;
    const lookbehind = self._lookbehind;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= end){
            const nextPos = pos + lastNeedleCharPos;
            const ch = nextPos < 0 ? lookbehind[self._lookbehindSize + nextPos] : data[nextPos];
            if (ch === lastNeedleChar && matchNeedle(self, data, pos, lastNeedleCharPos)) {
                self._lookbehindSize = 0;
                ++self.matches;
                if (pos > -self._lookbehindSize) self._cb(true, lookbehind, 0, self._lookbehindSize + pos, false);
                else self._cb(true, undefined, 0, 0, true);
                return self._bufPos = pos + needleLen;
            }
            pos += occ[ch];
        }
        // No match.
        // There's too few data for Boyer-Moore-Horspool to run,
        // so let's use a different algorithm to skip as much as
        // we can.
        // Forward pos until
        //   the trailing part of lookbehind + data
        //   looks like the beginning of the needle
        // or until
        //   pos == 0
        while(pos < 0 && !matchNeedle(self, data, pos, len - pos))++pos;
        if (pos < 0) {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = self._lookbehindSize + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                self._cb(false, lookbehind, 0, bytesToCutOff, false);
            }
            self._lookbehindSize -= bytesToCutOff;
            lookbehind.copy(lookbehind, 0, bytesToCutOff, self._lookbehindSize);
            lookbehind.set(data, self._lookbehindSize);
            self._lookbehindSize += len;
            self._bufPos = len;
            return len;
        }
        // Discard lookbehind buffer.
        self._cb(false, lookbehind, 0, self._lookbehindSize, false);
        self._lookbehindSize = 0;
    }
    pos += self._bufPos;
    const firstNeedleChar = needle[0];
    // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
    // search with optimized character lookup code that only considers
    // the current round's haystack data.
    while(pos <= end){
        const ch = data[pos + lastNeedleCharPos];
        if (ch === lastNeedleChar && data[pos] === firstNeedleChar && memcmp(needle, 0, data, pos, lastNeedleCharPos)) {
            ++self.matches;
            if (pos > 0) self._cb(true, data, self._bufPos, pos, true);
            else self._cb(true, undefined, 0, 0, true);
            return self._bufPos = pos + needleLen;
        }
        pos += occ[ch];
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos < len){
        if (data[pos] !== firstNeedleChar || !memcmp(data, pos, needle, 0, len - pos)) {
            ++pos;
            continue;
        }
        data.copy(lookbehind, 0, pos, len);
        self._lookbehindSize = len - pos;
        break;
    }
    // Everything until `pos` is guaranteed not to contain needle data.
    if (pos > 0) self._cb(false, data, self._bufPos, pos < len ? pos : len, true);
    self._bufPos = len;
    return len;
}
function matchNeedle(self, data, pos, len) {
    const lb = self._lookbehind;
    const lbSize = self._lookbehindSize;
    const needle = self._needle;
    for(let i = 0; i < len; ++i, ++pos){
        const ch = pos < 0 ? lb[lbSize + pos] : data[pos];
        if (ch !== needle[i]) return false;
    }
    return true;
}
module.exports = SBMH;
}),
"[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function parseContentType(str) {
    if (str.length === 0) return;
    const params = Object.create(null);
    let i = 0;
    // Parse type
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            if (code !== 47 /* '/' */  || i === 0) return;
            break;
        }
    }
    // Check for type without subtype
    if (i === str.length) return;
    const type = str.slice(0, i).toLowerCase();
    // Parse subtype
    const subtypeStart = ++i;
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            // Make sure we have a subtype
            if (i === subtypeStart) return;
            if (parseContentTypeParams(str, i, params) === undefined) return;
            break;
        }
    }
    // Make sure we have a subtype
    if (i === subtypeStart) return;
    const subtype = str.slice(subtypeStart, i).toLowerCase();
    return {
        type,
        subtype,
        params
    };
}
function parseContentTypeParams(str, i, params) {
    while(i < str.length){
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace
        if (i === str.length) break;
        // Check for malformed parameter
        if (str.charCodeAt(i++) !== 59 /* ';' */ ) return;
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace (malformed)
        if (i === str.length) return;
        let name;
        const nameStart = i;
        // Parse parameter name
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (TOKEN[code] !== 1) {
                if (code !== 61 /* '=' */ ) return;
                break;
            }
        }
        // No value (malformed)
        if (i === str.length) return;
        name = str.slice(nameStart, i);
        ++i; // Skip over '='
        // No value (malformed)
        if (i === str.length) return;
        let value = '';
        let valueStart;
        if (str.charCodeAt(i) === 34 /* '"' */ ) {
            valueStart = ++i;
            let escaping = false;
            // Parse quoted value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (code === 92 /* '\\' */ ) {
                    if (escaping) {
                        valueStart = i;
                        escaping = false;
                    } else {
                        value += str.slice(valueStart, i);
                        escaping = true;
                    }
                    continue;
                }
                if (code === 34 /* '"' */ ) {
                    if (escaping) {
                        valueStart = i;
                        escaping = false;
                        continue;
                    }
                    value += str.slice(valueStart, i);
                    break;
                }
                if (escaping) {
                    valueStart = i - 1;
                    escaping = false;
                }
                // Invalid unescaped quoted character (malformed)
                if (QDTEXT[code] !== 1) return;
            }
            // No end quote (malformed)
            if (i === str.length) return;
            ++i; // Skip over double quote
        } else {
            valueStart = i;
            // Parse unquoted value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (TOKEN[code] !== 1) {
                    // No value (malformed)
                    if (i === valueStart) return;
                    break;
                }
            }
            value = str.slice(valueStart, i);
        }
        name = name.toLowerCase();
        if (params[name] === undefined) params[name] = value;
    }
    return params;
}
function parseDisposition(str, defDecoder) {
    if (str.length === 0) return;
    const params = Object.create(null);
    let i = 0;
    for(; i < str.length; ++i){
        const code = str.charCodeAt(i);
        if (TOKEN[code] !== 1) {
            if (parseDispositionParams(str, i, params, defDecoder) === undefined) return;
            break;
        }
    }
    const type = str.slice(0, i).toLowerCase();
    return {
        type,
        params
    };
}
function parseDispositionParams(str, i, params, defDecoder) {
    while(i < str.length){
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace
        if (i === str.length) break;
        // Check for malformed parameter
        if (str.charCodeAt(i++) !== 59 /* ';' */ ) return;
        // Consume whitespace
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) break;
        }
        // Ended on whitespace (malformed)
        if (i === str.length) return;
        let name;
        const nameStart = i;
        // Parse parameter name
        for(; i < str.length; ++i){
            const code = str.charCodeAt(i);
            if (TOKEN[code] !== 1) {
                if (code === 61 /* '=' */ ) break;
                return;
            }
        }
        // No value (malformed)
        if (i === str.length) return;
        let value = '';
        let valueStart;
        let charset;
        //~ let lang;
        name = str.slice(nameStart, i);
        if (name.charCodeAt(name.length - 1) === 42 /* '*' */ ) {
            // Extended value
            const charsetStart = ++i;
            // Parse charset name
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (CHARSET[code] !== 1) {
                    if (code !== 39 /* '\'' */ ) return;
                    break;
                }
            }
            // Incomplete charset (malformed)
            if (i === str.length) return;
            charset = str.slice(charsetStart, i);
            ++i; // Skip over the '\''
            //~ const langStart = ++i;
            // Parse language name
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (code === 39 /* '\'' */ ) break;
            }
            // Incomplete language (malformed)
            if (i === str.length) return;
            //~ lang = str.slice(langStart, i);
            ++i; // Skip over the '\''
            // No value (malformed)
            if (i === str.length) return;
            valueStart = i;
            let encode = 0;
            // Parse value
            for(; i < str.length; ++i){
                const code = str.charCodeAt(i);
                if (EXTENDED_VALUE[code] !== 1) {
                    if (code === 37 /* '%' */ ) {
                        let hexUpper;
                        let hexLower;
                        if (i + 2 < str.length && (hexUpper = HEX_VALUES[str.charCodeAt(i + 1)]) !== -1 && (hexLower = HEX_VALUES[str.charCodeAt(i + 2)]) !== -1) {
                            const byteVal = (hexUpper << 4) + hexLower;
                            value += str.slice(valueStart, i);
                            value += String.fromCharCode(byteVal);
                            i += 2;
                            valueStart = i + 1;
                            if (byteVal >= 128) encode = 2;
                            else if (encode === 0) encode = 1;
                            continue;
                        }
                        // '%' disallowed in non-percent encoded contexts (malformed)
                        return;
                    }
                    break;
                }
            }
            value += str.slice(valueStart, i);
            value = convertToUTF8(value, charset, encode);
            if (value === undefined) return;
        } else {
            // Non-extended value
            ++i; // Skip over '='
            // No value (malformed)
            if (i === str.length) return;
            if (str.charCodeAt(i) === 34 /* '"' */ ) {
                valueStart = ++i;
                let escaping = false;
                // Parse quoted value
                for(; i < str.length; ++i){
                    const code = str.charCodeAt(i);
                    if (code === 92 /* '\\' */ ) {
                        if (escaping) {
                            valueStart = i;
                            escaping = false;
                        } else {
                            value += str.slice(valueStart, i);
                            escaping = true;
                        }
                        continue;
                    }
                    if (code === 34 /* '"' */ ) {
                        if (escaping) {
                            valueStart = i;
                            escaping = false;
                            continue;
                        }
                        value += str.slice(valueStart, i);
                        break;
                    }
                    if (escaping) {
                        valueStart = i - 1;
                        escaping = false;
                    }
                    // Invalid unescaped quoted character (malformed)
                    if (QDTEXT[code] !== 1) return;
                }
                // No end quote (malformed)
                if (i === str.length) return;
                ++i; // Skip over double quote
            } else {
                valueStart = i;
                // Parse unquoted value
                for(; i < str.length; ++i){
                    const code = str.charCodeAt(i);
                    if (TOKEN[code] !== 1) {
                        // No value (malformed)
                        if (i === valueStart) return;
                        break;
                    }
                }
                value = str.slice(valueStart, i);
            }
            value = defDecoder(value, 2);
            if (value === undefined) return;
        }
        name = name.toLowerCase();
        if (params[name] === undefined) params[name] = value;
    }
    return params;
}
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') {
            // If `data` never had any percent-encoded bytes or never had any that
            // were outside of the ASCII range, then we can safely just return the
            // input since UTF-8 is ASCII compatible
            if (hint < 2) return data;
            data = Buffer.from(data, 'latin1');
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') return data;
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        return data.base64Slice(0, data.length);
    },
    other: (data, hint)=>{
        if (data.length === 0) return '';
        if (typeof data === 'string') data = Buffer.from(data, 'latin1');
        try {
            const decoder = new TextDecoder(/*TURBOPACK member replacement*/ __turbopack_context__.e);
            return decoder.decode(data);
        } catch  {}
    }
};
function convertToUTF8(data, charset, hint) {
    const decode = getDecoder(charset);
    if (decode) return decode(data, hint);
}
function basename(path) {
    if (typeof path !== 'string') return '';
    for(let i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
}
const TOKEN = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const QDTEXT = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
];
const CHARSET = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const EXTENDED_VALUE = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
/* eslint-disable no-multi-spaces */ const HEX_VALUES = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
];
/* eslint-enable no-multi-spaces */ module.exports = {
    basename,
    convertToUTF8,
    getDecoder,
    parseContentType,
    parseDisposition
};
}),
"[project]/node_modules/busboy/lib/types/multipart.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Readable, Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const StreamSearch = __turbopack_context__.r("[project]/node_modules/streamsearch/lib/sbmh.js [app-route] (ecmascript)");
const { basename, convertToUTF8, getDecoder, parseContentType, parseDisposition } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
const BUF_CRLF = Buffer.from('\r\n');
const BUF_CR = Buffer.from('\r');
const BUF_DASH = Buffer.from('-');
function noop() {}
const MAX_HEADER_PAIRS = 2000; // From node
const MAX_HEADER_SIZE = 16 * 1024; // From node (its default value)
const HPARSER_NAME = 0;
const HPARSER_PRE_OWS = 1;
const HPARSER_VALUE = 2;
class HeaderParser {
    constructor(cb){
        this.header = Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = '';
        this.value = '';
        this.crlf = 0;
        this.cb = cb;
    }
    reset() {
        this.header = Object.create(null);
        this.pairCount = 0;
        this.byteCount = 0;
        this.state = HPARSER_NAME;
        this.name = '';
        this.value = '';
        this.crlf = 0;
    }
    push(chunk, pos, end) {
        let start = pos;
        while(pos < end){
            switch(this.state){
                case HPARSER_NAME:
                    {
                        let done = false;
                        for(; pos < end; ++pos){
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            const code = chunk[pos];
                            if (TOKEN[code] !== 1) {
                                if (code !== 58 /* ':' */ ) return -1;
                                this.name += chunk.latin1Slice(start, pos);
                                if (this.name.length === 0) return -1;
                                ++pos;
                                done = true;
                                this.state = HPARSER_PRE_OWS;
                                break;
                            }
                        }
                        if (!done) {
                            this.name += chunk.latin1Slice(start, pos);
                            break;
                        }
                    // FALLTHROUGH
                    }
                case HPARSER_PRE_OWS:
                    {
                        // Skip optional whitespace
                        let done = false;
                        for(; pos < end; ++pos){
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            const code = chunk[pos];
                            if (code !== 32 /* ' ' */  && code !== 9 /* '\t' */ ) {
                                start = pos;
                                done = true;
                                this.state = HPARSER_VALUE;
                                break;
                            }
                        }
                        if (!done) break;
                    // FALLTHROUGH
                    }
                case HPARSER_VALUE:
                    switch(this.crlf){
                        case 0:
                            for(; pos < end; ++pos){
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                const code = chunk[pos];
                                if (FIELD_VCHAR[code] !== 1) {
                                    if (code !== 13 /* '\r' */ ) return -1;
                                    ++this.crlf;
                                    break;
                                }
                            }
                            this.value += chunk.latin1Slice(start, pos++);
                            break;
                        case 1:
                            if (this.byteCount === MAX_HEADER_SIZE) return -1;
                            ++this.byteCount;
                            if (chunk[pos++] !== 10 /* '\n' */ ) return -1;
                            ++this.crlf;
                            break;
                        case 2:
                            {
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                const code = chunk[pos];
                                if (code === 32 /* ' ' */  || code === 9 /* '\t' */ ) {
                                    // Folded value
                                    start = pos;
                                    this.crlf = 0;
                                } else {
                                    if (++this.pairCount < MAX_HEADER_PAIRS) {
                                        this.name = this.name.toLowerCase();
                                        if (this.header[this.name] === undefined) this.header[this.name] = [
                                            this.value
                                        ];
                                        else this.header[this.name].push(this.value);
                                    }
                                    if (code === 13 /* '\r' */ ) {
                                        ++this.crlf;
                                        ++pos;
                                    } else {
                                        // Assume start of next header field name
                                        start = pos;
                                        this.crlf = 0;
                                        this.state = HPARSER_NAME;
                                        this.name = '';
                                        this.value = '';
                                    }
                                }
                                break;
                            }
                        case 3:
                            {
                                if (this.byteCount === MAX_HEADER_SIZE) return -1;
                                ++this.byteCount;
                                if (chunk[pos++] !== 10 /* '\n' */ ) return -1;
                                // End of header
                                const header = this.header;
                                this.reset();
                                this.cb(header);
                                return pos;
                            }
                    }
                    break;
            }
        }
        return pos;
    }
}
class FileStream extends Readable {
    constructor(opts, owner){
        super(opts);
        this.truncated = false;
        this._readcb = null;
        this.once('end', ()=>{
            // We need to make sure that we call any outstanding _writecb() that is
            // associated with this file so that processing of the rest of the form
            // can continue. This may not happen if the file stream ends right after
            // backpressure kicks in, so we force it here.
            this._read();
            if (--owner._fileEndsLeft === 0 && owner._finalcb) {
                const cb = owner._finalcb;
                owner._finalcb = null;
                // Make sure other 'end' event handlers get a chance to be executed
                // before busboy's 'finish' event is emitted
                process.nextTick(cb);
            }
        });
    }
    _read(n) {
        const cb = this._readcb;
        if (cb) {
            this._readcb = null;
            cb();
        }
    }
}
const ignoreData = {
    push: (chunk, pos)=>{},
    destroy: ()=>{}
};
function callAndUnsetCb(self, err) {
    const cb = self._writecb;
    self._writecb = null;
    if (err) self.destroy(err);
    else if (cb) cb();
}
function nullDecoder(val, hint) {
    return val;
}
class Multipart extends Writable {
    constructor(cfg){
        const streamOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.highWaterMark === 'number' ? cfg.highWaterMark : undefined
        };
        super(streamOpts);
        if (!cfg.conType.params || typeof cfg.conType.params.boundary !== 'string') throw new Error('Multipart: Boundary not found');
        const boundary = cfg.conType.params.boundary;
        const paramDecoder = typeof cfg.defParamCharset === 'string' && cfg.defParamCharset ? getDecoder(cfg.defParamCharset) : nullDecoder;
        const defCharset = cfg.defCharset || 'utf8';
        const preservePath = cfg.preservePath;
        const fileOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.fileHwm === 'number' ? cfg.fileHwm : undefined
        };
        const limits = cfg.limits;
        const fieldSizeLimit = limits && typeof limits.fieldSize === 'number' ? limits.fieldSize : 1 * 1024 * 1024;
        const fileSizeLimit = limits && typeof limits.fileSize === 'number' ? limits.fileSize : Infinity;
        const filesLimit = limits && typeof limits.files === 'number' ? limits.files : Infinity;
        const fieldsLimit = limits && typeof limits.fields === 'number' ? limits.fields : Infinity;
        const partsLimit = limits && typeof limits.parts === 'number' ? limits.parts : Infinity;
        let parts = -1; // Account for initial boundary
        let fields = 0;
        let files = 0;
        let skipPart = false;
        this._fileEndsLeft = 0;
        this._fileStream = undefined;
        this._complete = false;
        let fileSize = 0;
        let field;
        let fieldSize = 0;
        let partCharset;
        let partEncoding;
        let partType;
        let partName;
        let partTruncated = false;
        let hitFilesLimit = false;
        let hitFieldsLimit = false;
        this._hparser = null;
        const hparser = new HeaderParser((header)=>{
            this._hparser = null;
            skipPart = false;
            partType = 'text/plain';
            partCharset = defCharset;
            partEncoding = '7bit';
            partName = undefined;
            partTruncated = false;
            let filename;
            if (!header['content-disposition']) {
                skipPart = true;
                return;
            }
            const disp = parseDisposition(header['content-disposition'][0], paramDecoder);
            if (!disp || disp.type !== 'form-data') {
                skipPart = true;
                return;
            }
            if (disp.params) {
                if (disp.params.name) partName = disp.params.name;
                if (disp.params['filename*']) filename = disp.params['filename*'];
                else if (disp.params.filename) filename = disp.params.filename;
                if (filename !== undefined && !preservePath) filename = basename(filename);
            }
            if (header['content-type']) {
                const conType = parseContentType(header['content-type'][0]);
                if (conType) {
                    partType = `${conType.type}/${conType.subtype}`;
                    if (conType.params && typeof conType.params.charset === 'string') partCharset = conType.params.charset.toLowerCase();
                }
            }
            if (header['content-transfer-encoding']) partEncoding = header['content-transfer-encoding'][0].toLowerCase();
            if (partType === 'application/octet-stream' || filename !== undefined) {
                // File
                if (files === filesLimit) {
                    if (!hitFilesLimit) {
                        hitFilesLimit = true;
                        this.emit('filesLimit');
                    }
                    skipPart = true;
                    return;
                }
                ++files;
                if (this.listenerCount('file') === 0) {
                    skipPart = true;
                    return;
                }
                fileSize = 0;
                this._fileStream = new FileStream(fileOpts, this);
                ++this._fileEndsLeft;
                this.emit('file', partName, this._fileStream, {
                    filename,
                    encoding: partEncoding,
                    mimeType: partType
                });
            } else {
                // Non-file
                if (fields === fieldsLimit) {
                    if (!hitFieldsLimit) {
                        hitFieldsLimit = true;
                        this.emit('fieldsLimit');
                    }
                    skipPart = true;
                    return;
                }
                ++fields;
                if (this.listenerCount('field') === 0) {
                    skipPart = true;
                    return;
                }
                field = [];
                fieldSize = 0;
            }
        });
        let matchPostBoundary = 0;
        const ssCb = (isMatch, data, start, end, isDataSafe)=>{
            retrydata: while(data){
                if (this._hparser !== null) {
                    const ret = this._hparser.push(data, start, end);
                    if (ret === -1) {
                        this._hparser = null;
                        hparser.reset();
                        this.emit('error', new Error('Malformed part header'));
                        break;
                    }
                    start = ret;
                }
                if (start === end) break;
                if (matchPostBoundary !== 0) {
                    if (matchPostBoundary === 1) {
                        switch(data[start]){
                            case 45:
                                // Try matching '--' after boundary
                                matchPostBoundary = 2;
                                ++start;
                                break;
                            case 13:
                                // Try matching CR LF before header
                                matchPostBoundary = 3;
                                ++start;
                                break;
                            default:
                                matchPostBoundary = 0;
                        }
                        if (start === end) return;
                    }
                    if (matchPostBoundary === 2) {
                        matchPostBoundary = 0;
                        if (data[start] === 45 /* '-' */ ) {
                            // End of multipart data
                            this._complete = true;
                            this._bparser = ignoreData;
                            return;
                        }
                        // We saw something other than '-', so put the dash we consumed
                        // "back"
                        const writecb = this._writecb;
                        this._writecb = noop;
                        ssCb(false, BUF_DASH, 0, 1, false);
                        this._writecb = writecb;
                    } else if (matchPostBoundary === 3) {
                        matchPostBoundary = 0;
                        if (data[start] === 10 /* '\n' */ ) {
                            ++start;
                            if (parts >= partsLimit) break;
                            // Prepare the header parser
                            this._hparser = hparser;
                            if (start === end) break;
                            continue retrydata;
                        } else {
                            // We saw something other than LF, so put the CR we consumed
                            // "back"
                            const writecb = this._writecb;
                            this._writecb = noop;
                            ssCb(false, BUF_CR, 0, 1, false);
                            this._writecb = writecb;
                        }
                    }
                }
                if (!skipPart) {
                    if (this._fileStream) {
                        let chunk;
                        const actualLen = Math.min(end - start, fileSizeLimit - fileSize);
                        if (!isDataSafe) {
                            chunk = Buffer.allocUnsafe(actualLen);
                            data.copy(chunk, 0, start, start + actualLen);
                        } else {
                            chunk = data.slice(start, start + actualLen);
                        }
                        fileSize += chunk.length;
                        if (fileSize === fileSizeLimit) {
                            if (chunk.length > 0) this._fileStream.push(chunk);
                            this._fileStream.emit('limit');
                            this._fileStream.truncated = true;
                            skipPart = true;
                        } else if (!this._fileStream.push(chunk)) {
                            if (this._writecb) this._fileStream._readcb = this._writecb;
                            this._writecb = null;
                        }
                    } else if (field !== undefined) {
                        let chunk;
                        const actualLen = Math.min(end - start, fieldSizeLimit - fieldSize);
                        if (!isDataSafe) {
                            chunk = Buffer.allocUnsafe(actualLen);
                            data.copy(chunk, 0, start, start + actualLen);
                        } else {
                            chunk = data.slice(start, start + actualLen);
                        }
                        fieldSize += actualLen;
                        field.push(chunk);
                        if (fieldSize === fieldSizeLimit) {
                            skipPart = true;
                            partTruncated = true;
                        }
                    }
                }
                break;
            }
            if (isMatch) {
                matchPostBoundary = 1;
                if (this._fileStream) {
                    // End the active file stream if the previous part was a file
                    this._fileStream.push(null);
                    this._fileStream = null;
                } else if (field !== undefined) {
                    let data;
                    switch(field.length){
                        case 0:
                            data = '';
                            break;
                        case 1:
                            data = convertToUTF8(field[0], partCharset, 0);
                            break;
                        default:
                            data = convertToUTF8(Buffer.concat(field, fieldSize), partCharset, 0);
                    }
                    field = undefined;
                    fieldSize = 0;
                    this.emit('field', partName, data, {
                        nameTruncated: false,
                        valueTruncated: partTruncated,
                        encoding: partEncoding,
                        mimeType: partType
                    });
                }
                if (++parts === partsLimit) this.emit('partsLimit');
            }
        };
        this._bparser = new StreamSearch(`\r\n--${boundary}`, ssCb);
        this._writecb = null;
        this._finalcb = null;
        // Just in case there is no preamble
        this.write(BUF_CRLF);
    }
    static detect(conType) {
        return conType.type === 'multipart' && conType.subtype === 'form-data';
    }
    _write(chunk, enc, cb) {
        this._writecb = cb;
        this._bparser.push(chunk, 0);
        if (this._writecb) callAndUnsetCb(this);
    }
    _destroy(err, cb) {
        this._hparser = null;
        this._bparser = ignoreData;
        if (!err) err = checkEndState(this);
        const fileStream = this._fileStream;
        if (fileStream) {
            this._fileStream = null;
            fileStream.destroy(err);
        }
        cb(err);
    }
    _final(cb) {
        this._bparser.destroy();
        if (!this._complete) return cb(new Error('Unexpected end of form'));
        if (this._fileEndsLeft) this._finalcb = finalcb.bind(null, this, cb);
        else finalcb(this, cb);
    }
}
function finalcb(self, cb, err) {
    if (err) return cb(err);
    err = checkEndState(self);
    cb(err);
}
function checkEndState(self) {
    if (self._hparser) return new Error('Malformed part header');
    const fileStream = self._fileStream;
    if (fileStream) {
        self._fileStream = null;
        fileStream.destroy(new Error('Unexpected end of file'));
    }
    if (!self._complete) return new Error('Unexpected end of form');
}
const TOKEN = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
const FIELD_VCHAR = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
];
module.exports = Multipart;
}),
"[project]/node_modules/busboy/lib/types/urlencoded.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
const { getDecoder } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
class URLEncoded extends Writable {
    constructor(cfg){
        const streamOpts = {
            autoDestroy: true,
            emitClose: true,
            highWaterMark: typeof cfg.highWaterMark === 'number' ? cfg.highWaterMark : undefined
        };
        super(streamOpts);
        let charset = cfg.defCharset || 'utf8';
        if (cfg.conType.params && typeof cfg.conType.params.charset === 'string') charset = cfg.conType.params.charset;
        this.charset = charset;
        const limits = cfg.limits;
        this.fieldSizeLimit = limits && typeof limits.fieldSize === 'number' ? limits.fieldSize : 1 * 1024 * 1024;
        this.fieldsLimit = limits && typeof limits.fields === 'number' ? limits.fields : Infinity;
        this.fieldNameSizeLimit = limits && typeof limits.fieldNameSize === 'number' ? limits.fieldNameSize : 100;
        this._inKey = true;
        this._keyTrunc = false;
        this._valTrunc = false;
        this._bytesKey = 0;
        this._bytesVal = 0;
        this._fields = 0;
        this._key = '';
        this._val = '';
        this._byte = -2;
        this._lastPos = 0;
        this._encode = 0;
        this._decoder = getDecoder(charset);
    }
    static detect(conType) {
        return conType.type === 'application' && conType.subtype === 'x-www-form-urlencoded';
    }
    _write(chunk, enc, cb) {
        if (this._fields >= this.fieldsLimit) return cb();
        let i = 0;
        const len = chunk.length;
        this._lastPos = 0;
        // Check if we last ended mid-percent-encoded byte
        if (this._byte !== -2) {
            i = readPctEnc(this, chunk, i, len);
            if (i === -1) return cb(new Error('Malformed urlencoded form'));
            if (i >= len) return cb();
            if (this._inKey) ++this._bytesKey;
            else ++this._bytesVal;
        }
        main: while(i < len){
            if (this._inKey) {
                // Parsing key
                i = skipKeyBytes(this, chunk, i, len);
                while(i < len){
                    switch(chunk[i]){
                        case 61:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._key = this._decoder(this._key, this._encode);
                            this._encode = 0;
                            this._inKey = false;
                            continue main;
                        case 38:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._key = this._decoder(this._key, this._encode);
                            this._encode = 0;
                            if (this._bytesKey > 0) {
                                this.emit('field', this._key, '', {
                                    nameTruncated: this._keyTrunc,
                                    valueTruncated: false,
                                    encoding: this.charset,
                                    mimeType: 'text/plain'
                                });
                            }
                            this._key = '';
                            this._val = '';
                            this._keyTrunc = false;
                            this._valTrunc = false;
                            this._bytesKey = 0;
                            this._bytesVal = 0;
                            if (++this._fields >= this.fieldsLimit) {
                                this.emit('fieldsLimit');
                                return cb();
                            }
                            continue;
                        case 43:
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._key += ' ';
                            this._lastPos = i + 1;
                            break;
                        case 37:
                            if (this._encode === 0) this._encode = 1;
                            if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = i + 1;
                            this._byte = -1;
                            i = readPctEnc(this, chunk, i + 1, len);
                            if (i === -1) return cb(new Error('Malformed urlencoded form'));
                            if (i >= len) return cb();
                            ++this._bytesKey;
                            i = skipKeyBytes(this, chunk, i, len);
                            continue;
                    }
                    ++i;
                    ++this._bytesKey;
                    i = skipKeyBytes(this, chunk, i, len);
                }
                if (this._lastPos < i) this._key += chunk.latin1Slice(this._lastPos, i);
            } else {
                // Parsing value
                i = skipValBytes(this, chunk, i, len);
                while(i < len){
                    switch(chunk[i]){
                        case 38:
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = ++i;
                            this._inKey = true;
                            this._val = this._decoder(this._val, this._encode);
                            this._encode = 0;
                            if (this._bytesKey > 0 || this._bytesVal > 0) {
                                this.emit('field', this._key, this._val, {
                                    nameTruncated: this._keyTrunc,
                                    valueTruncated: this._valTrunc,
                                    encoding: this.charset,
                                    mimeType: 'text/plain'
                                });
                            }
                            this._key = '';
                            this._val = '';
                            this._keyTrunc = false;
                            this._valTrunc = false;
                            this._bytesKey = 0;
                            this._bytesVal = 0;
                            if (++this._fields >= this.fieldsLimit) {
                                this.emit('fieldsLimit');
                                return cb();
                            }
                            continue main;
                        case 43:
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._val += ' ';
                            this._lastPos = i + 1;
                            break;
                        case 37:
                            if (this._encode === 0) this._encode = 1;
                            if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
                            this._lastPos = i + 1;
                            this._byte = -1;
                            i = readPctEnc(this, chunk, i + 1, len);
                            if (i === -1) return cb(new Error('Malformed urlencoded form'));
                            if (i >= len) return cb();
                            ++this._bytesVal;
                            i = skipValBytes(this, chunk, i, len);
                            continue;
                    }
                    ++i;
                    ++this._bytesVal;
                    i = skipValBytes(this, chunk, i, len);
                }
                if (this._lastPos < i) this._val += chunk.latin1Slice(this._lastPos, i);
            }
        }
        cb();
    }
    _final(cb) {
        if (this._byte !== -2) return cb(new Error('Malformed urlencoded form'));
        if (!this._inKey || this._bytesKey > 0 || this._bytesVal > 0) {
            if (this._inKey) this._key = this._decoder(this._key, this._encode);
            else this._val = this._decoder(this._val, this._encode);
            this.emit('field', this._key, this._val, {
                nameTruncated: this._keyTrunc,
                valueTruncated: this._valTrunc,
                encoding: this.charset,
                mimeType: 'text/plain'
            });
        }
        cb();
    }
}
function readPctEnc(self, chunk, pos, len) {
    if (pos >= len) return len;
    if (self._byte === -1) {
        // We saw a '%' but no hex characters yet
        const hexUpper = HEX_VALUES[chunk[pos++]];
        if (hexUpper === -1) return -1;
        if (hexUpper >= 8) self._encode = 2; // Indicate high bits detected
        if (pos < len) {
            // Both hex characters are in this chunk
            const hexLower = HEX_VALUES[chunk[pos++]];
            if (hexLower === -1) return -1;
            if (self._inKey) self._key += String.fromCharCode((hexUpper << 4) + hexLower);
            else self._val += String.fromCharCode((hexUpper << 4) + hexLower);
            self._byte = -2;
            self._lastPos = pos;
        } else {
            // Only one hex character was available in this chunk
            self._byte = hexUpper;
        }
    } else {
        // We saw only one hex character so far
        const hexLower = HEX_VALUES[chunk[pos++]];
        if (hexLower === -1) return -1;
        if (self._inKey) self._key += String.fromCharCode((self._byte << 4) + hexLower);
        else self._val += String.fromCharCode((self._byte << 4) + hexLower);
        self._byte = -2;
        self._lastPos = pos;
    }
    return pos;
}
function skipKeyBytes(self, chunk, pos, len) {
    // Skip bytes if we've truncated
    if (self._bytesKey > self.fieldNameSizeLimit) {
        if (!self._keyTrunc) {
            if (self._lastPos < pos) self._key += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._keyTrunc = true;
        for(; pos < len; ++pos){
            const code = chunk[pos];
            if (code === 61 /* '=' */  || code === 38 /* '&' */ ) break;
            ++self._bytesKey;
        }
        self._lastPos = pos;
    }
    return pos;
}
function skipValBytes(self, chunk, pos, len) {
    // Skip bytes if we've truncated
    if (self._bytesVal > self.fieldSizeLimit) {
        if (!self._valTrunc) {
            if (self._lastPos < pos) self._val += chunk.latin1Slice(self._lastPos, pos - 1);
        }
        self._valTrunc = true;
        for(; pos < len; ++pos){
            if (chunk[pos] === 38 /* '&' */ ) break;
            ++self._bytesVal;
        }
        self._lastPos = pos;
    }
    return pos;
}
/* eslint-disable no-multi-spaces */ const HEX_VALUES = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
];
/* eslint-enable no-multi-spaces */ module.exports = URLEncoded;
}),
"[project]/node_modules/busboy/lib/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { parseContentType } = __turbopack_context__.r("[project]/node_modules/busboy/lib/utils.js [app-route] (ecmascript)");
function getInstance(cfg) {
    const headers = cfg.headers;
    const conType = parseContentType(headers['content-type']);
    if (!conType) throw new Error('Malformed content type');
    for (const type of TYPES){
        const matched = type.detect(conType);
        if (!matched) continue;
        const instanceCfg = {
            limits: cfg.limits,
            headers,
            conType,
            highWaterMark: undefined,
            fileHwm: undefined,
            defCharset: undefined,
            defParamCharset: undefined,
            preservePath: false
        };
        if (cfg.highWaterMark) instanceCfg.highWaterMark = cfg.highWaterMark;
        if (cfg.fileHwm) instanceCfg.fileHwm = cfg.fileHwm;
        instanceCfg.defCharset = cfg.defCharset;
        instanceCfg.defParamCharset = cfg.defParamCharset;
        instanceCfg.preservePath = cfg.preservePath;
        return new type(instanceCfg);
    }
    throw new Error(`Unsupported content type: ${headers['content-type']}`);
}
// Note: types are explicitly listed here for easier bundling
// See: https://github.com/mscdex/busboy/issues/121
const TYPES = [
    __turbopack_context__.r("[project]/node_modules/busboy/lib/types/multipart.js [app-route] (ecmascript)"),
    __turbopack_context__.r("[project]/node_modules/busboy/lib/types/urlencoded.js [app-route] (ecmascript)")
].filter(function(typemod) {
    return typeof typemod.detect === 'function';
});
module.exports = (cfg)=>{
    if (typeof cfg !== 'object' || cfg === null) cfg = {};
    if (typeof cfg.headers !== 'object' || cfg.headers === null || typeof cfg.headers['content-type'] !== 'string') {
        throw new Error('Missing Content-Type');
    }
    return getInstance(cfg);
};
}),
"[project]/node_modules/jose/dist/node/esm/util/base64url.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/runtime/base64url.js [app-route] (ecmascript)");
;
const encode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"];
const decode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"];
}),
"[project]/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeJwt",
    ()=>decodeJwt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/base64url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/lib/is_object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/node/esm/util/errors.js [app-route] (ecmascript)");
;
;
;
;
function decodeJwt(jwt) {
    if (typeof jwt !== 'string') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs must use Compact JWS serialization, JWT must be a string');
    const { 1: payload, length } = jwt.split('.');
    if (length === 5) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Only JWTs using Compact JWS serialization can be decoded');
    if (length !== 3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Invalid JWT');
    if (!payload) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs must contain a payload');
    let decoded;
    try {
        decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(payload);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Failed to base64url decode the payload');
    }
    let result;
    try {
        result = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decoder"].decode(decoded));
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Failed to parse the decoded payload as JSON');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(result)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTInvalid"]('Invalid JWT Claims Set');
    return result;
}
}),
"[project]/node_modules/pluralize/pluralize.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* global define */ (function(root, pluralize) {
    /* istanbul ignore else */ if ("TURBOPACK compile-time truthy", 1) {
        // Node.
        module.exports = pluralize();
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    // Rule storage - pluralize and singularize need to be run sequentially,
    // while other rules can be optimized using an object for instant lookups.
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    /**
   * Sanitize a pluralization rule to a usable regular expression.
   *
   * @param  {(RegExp|string)} rule
   * @return {RegExp}
   */ function sanitizeRule(rule) {
        if (typeof rule === 'string') {
            return new RegExp('^' + rule + '$', 'i');
        }
        return rule;
    }
    /**
   * Pass in a word token to produce a function that can replicate the case on
   * another word.
   *
   * @param  {string}   word
   * @param  {string}   token
   * @return {Function}
   */ function restoreCase(word, token) {
        // Tokens are an exact match.
        if (word === token) return token;
        // Lower cased words. E.g. "hello".
        if (word === word.toLowerCase()) return token.toLowerCase();
        // Upper cased words. E.g. "WHISKY".
        if (word === word.toUpperCase()) return token.toUpperCase();
        // Title cased words. E.g. "Title".
        if (word[0] === word[0].toUpperCase()) {
            return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        // Lower cased words. E.g. "test".
        return token.toLowerCase();
    }
    /**
   * Interpolate a regexp string.
   *
   * @param  {string} str
   * @param  {Array}  args
   * @return {string}
   */ function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
            return args[index] || '';
        });
    }
    /**
   * Replace a word using a rule.
   *
   * @param  {string} word
   * @param  {Array}  rule
   * @return {string}
   */ function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
            var result = interpolate(rule[1], arguments);
            if (match === '') {
                return restoreCase(word[index - 1], result);
            }
            return restoreCase(match, result);
        });
    }
    /**
   * Sanitize a word by passing in the word and sanitization rules.
   *
   * @param  {string}   token
   * @param  {string}   word
   * @param  {Array}    rules
   * @return {string}
   */ function sanitizeWord(token, word, rules) {
        // Empty string or doesn't need fixing.
        if (!token.length || uncountables.hasOwnProperty(token)) {
            return word;
        }
        var len = rules.length;
        // Iterate over the sanitization rules and use the first one to match.
        while(len--){
            var rule = rules[len];
            if (rule[0].test(word)) return replace(word, rule);
        }
        return word;
    }
    /**
   * Replace a word with the updated word.
   *
   * @param  {Object}   replaceMap
   * @param  {Object}   keepMap
   * @param  {Array}    rules
   * @return {Function}
   */ function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
            // Get the correct token and case restoration functions.
            var token = word.toLowerCase();
            // Check against the keep object map.
            if (keepMap.hasOwnProperty(token)) {
                return restoreCase(word, token);
            }
            // Check against the replacement map for a direct word replacement.
            if (replaceMap.hasOwnProperty(token)) {
                return restoreCase(word, replaceMap[token]);
            }
            // Run all the rules against the word.
            return sanitizeWord(token, word, rules);
        };
    }
    /**
   * Check if a word is part of the map.
   */ function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
            var token = word.toLowerCase();
            if (keepMap.hasOwnProperty(token)) return true;
            if (replaceMap.hasOwnProperty(token)) return false;
            return sanitizeWord(token, token, rules) === token;
        };
    }
    /**
   * Pluralize or singularize a word based on the passed in count.
   *
   * @param  {string}  word      The word to pluralize
   * @param  {number}  count     How many of the word exist
   * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
   * @return {string}
   */ function pluralize(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
        return (inclusive ? count + ' ' : '') + pluralized;
    }
    /**
   * Pluralize a word.
   *
   * @type {Function}
   */ pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);
    /**
   * Check if a word is plural.
   *
   * @type {Function}
   */ pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);
    /**
   * Singularize a word.
   *
   * @type {Function}
   */ pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);
    /**
   * Check if a word is singular.
   *
   * @type {Function}
   */ pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);
    /**
   * Add a pluralization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */ pluralize.addPluralRule = function(rule, replacement) {
        pluralRules.push([
            sanitizeRule(rule),
            replacement
        ]);
    };
    /**
   * Add a singularization rule to the collection.
   *
   * @param {(string|RegExp)} rule
   * @param {string}          replacement
   */ pluralize.addSingularRule = function(rule, replacement) {
        singularRules.push([
            sanitizeRule(rule),
            replacement
        ]);
    };
    /**
   * Add an uncountable word rule.
   *
   * @param {(string|RegExp)} word
   */ pluralize.addUncountableRule = function(word) {
        if (typeof word === 'string') {
            uncountables[word.toLowerCase()] = true;
            return;
        }
        // Set singular and plural references for the word.
        pluralize.addPluralRule(word, '$0');
        pluralize.addSingularRule(word, '$0');
    };
    /**
   * Add an irregular word definition.
   *
   * @param {string} single
   * @param {string} plural
   */ pluralize.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
    };
    /**
   * Irregular rules.
   */ [
        // Pronouns.
        [
            'I',
            'we'
        ],
        [
            'me',
            'us'
        ],
        [
            'he',
            'they'
        ],
        [
            'she',
            'they'
        ],
        [
            'them',
            'them'
        ],
        [
            'myself',
            'ourselves'
        ],
        [
            'yourself',
            'yourselves'
        ],
        [
            'itself',
            'themselves'
        ],
        [
            'herself',
            'themselves'
        ],
        [
            'himself',
            'themselves'
        ],
        [
            'themself',
            'themselves'
        ],
        [
            'is',
            'are'
        ],
        [
            'was',
            'were'
        ],
        [
            'has',
            'have'
        ],
        [
            'this',
            'these'
        ],
        [
            'that',
            'those'
        ],
        // Words ending in with a consonant and `o`.
        [
            'echo',
            'echoes'
        ],
        [
            'dingo',
            'dingoes'
        ],
        [
            'volcano',
            'volcanoes'
        ],
        [
            'tornado',
            'tornadoes'
        ],
        [
            'torpedo',
            'torpedoes'
        ],
        // Ends with `us`.
        [
            'genus',
            'genera'
        ],
        [
            'viscus',
            'viscera'
        ],
        // Ends with `ma`.
        [
            'stigma',
            'stigmata'
        ],
        [
            'stoma',
            'stomata'
        ],
        [
            'dogma',
            'dogmata'
        ],
        [
            'lemma',
            'lemmata'
        ],
        [
            'schema',
            'schemata'
        ],
        [
            'anathema',
            'anathemata'
        ],
        // Other irregular rules.
        [
            'ox',
            'oxen'
        ],
        [
            'axe',
            'axes'
        ],
        [
            'die',
            'dice'
        ],
        [
            'yes',
            'yeses'
        ],
        [
            'foot',
            'feet'
        ],
        [
            'eave',
            'eaves'
        ],
        [
            'goose',
            'geese'
        ],
        [
            'tooth',
            'teeth'
        ],
        [
            'quiz',
            'quizzes'
        ],
        [
            'human',
            'humans'
        ],
        [
            'proof',
            'proofs'
        ],
        [
            'carve',
            'carves'
        ],
        [
            'valve',
            'valves'
        ],
        [
            'looey',
            'looies'
        ],
        [
            'thief',
            'thieves'
        ],
        [
            'groove',
            'grooves'
        ],
        [
            'pickaxe',
            'pickaxes'
        ],
        [
            'passerby',
            'passersby'
        ]
    ].forEach(function(rule) {
        return pluralize.addIrregularRule(rule[0], rule[1]);
    });
    /**
   * Pluralization rules.
   */ [
        [
            /s?$/i,
            's'
        ],
        [
            /[^\u0000-\u007F]$/i,
            '$0'
        ],
        [
            /([^aeiou]ese)$/i,
            '$1'
        ],
        [
            /(ax|test)is$/i,
            '$1es'
        ],
        [
            /(alias|[^aou]us|t[lm]as|gas|ris)$/i,
            '$1es'
        ],
        [
            /(e[mn]u)s?$/i,
            '$1s'
        ],
        [
            /([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,
            '$1'
        ],
        [
            /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            '$1i'
        ],
        [
            /(alumn|alg|vertebr)(?:a|ae)$/i,
            '$1ae'
        ],
        [
            /(seraph|cherub)(?:im)?$/i,
            '$1im'
        ],
        [
            /(her|at|gr)o$/i,
            '$1oes'
        ],
        [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
            '$1a'
        ],
        [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
            '$1a'
        ],
        [
            /sis$/i,
            'ses'
        ],
        [
            /(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,
            '$1$2ves'
        ],
        [
            /([^aeiouy]|qu)y$/i,
            '$1ies'
        ],
        [
            /([^ch][ieo][ln])ey$/i,
            '$1ies'
        ],
        [
            /(x|ch|ss|sh|zz)$/i,
            '$1es'
        ],
        [
            /(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,
            '$1ices'
        ],
        [
            /\b((?:tit)?m|l)(?:ice|ouse)$/i,
            '$1ice'
        ],
        [
            /(pe)(?:rson|ople)$/i,
            '$1ople'
        ],
        [
            /(child)(?:ren)?$/i,
            '$1ren'
        ],
        [
            /eaux$/i,
            '$0'
        ],
        [
            /m[ae]n$/i,
            'men'
        ],
        [
            'thou',
            'you'
        ]
    ].forEach(function(rule) {
        return pluralize.addPluralRule(rule[0], rule[1]);
    });
    /**
   * Singularization rules.
   */ [
        [
            /s$/i,
            ''
        ],
        [
            /(ss)$/i,
            '$1'
        ],
        [
            /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
            '$1fe'
        ],
        [
            /(ar|(?:wo|[ae])l|[eo][ao])ves$/i,
            '$1f'
        ],
        [
            /ies$/i,
            'y'
        ],
        [
            /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
            '$1ie'
        ],
        [
            /\b(mon|smil)ies$/i,
            '$1ey'
        ],
        [
            /\b((?:tit)?m|l)ice$/i,
            '$1ouse'
        ],
        [
            /(seraph|cherub)im$/i,
            '$1'
        ],
        [
            /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
            '$1'
        ],
        [
            /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
            '$1sis'
        ],
        [
            /(movie|twelve|abuse|e[mn]u)s$/i,
            '$1'
        ],
        [
            /(test)(?:is|es)$/i,
            '$1is'
        ],
        [
            /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
            '$1us'
        ],
        [
            /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
            '$1um'
        ],
        [
            /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
            '$1on'
        ],
        [
            /(alumn|alg|vertebr)ae$/i,
            '$1a'
        ],
        [
            /(cod|mur|sil|vert|ind)ices$/i,
            '$1ex'
        ],
        [
            /(matr|append)ices$/i,
            '$1ix'
        ],
        [
            /(pe)(rson|ople)$/i,
            '$1rson'
        ],
        [
            /(child)ren$/i,
            '$1'
        ],
        [
            /(eau)x?$/i,
            '$1'
        ],
        [
            /men$/i,
            'man'
        ]
    ].forEach(function(rule) {
        return pluralize.addSingularRule(rule[0], rule[1]);
    });
    /**
   * Uncountable rules.
   */ [
        // Singular words with no plurals.
        'adulthood',
        'advice',
        'agenda',
        'aid',
        'aircraft',
        'alcohol',
        'ammo',
        'analytics',
        'anime',
        'athletics',
        'audio',
        'bison',
        'blood',
        'bream',
        'buffalo',
        'butter',
        'carp',
        'cash',
        'chassis',
        'chess',
        'clothing',
        'cod',
        'commerce',
        'cooperation',
        'corps',
        'debris',
        'diabetes',
        'digestion',
        'elk',
        'energy',
        'equipment',
        'excretion',
        'expertise',
        'firmware',
        'flounder',
        'fun',
        'gallows',
        'garbage',
        'graffiti',
        'hardware',
        'headquarters',
        'health',
        'herpes',
        'highjinks',
        'homework',
        'housework',
        'information',
        'jeans',
        'justice',
        'kudos',
        'labour',
        'literature',
        'machinery',
        'mackerel',
        'mail',
        'media',
        'mews',
        'moose',
        'music',
        'mud',
        'manga',
        'news',
        'only',
        'personnel',
        'pike',
        'plankton',
        'pliers',
        'police',
        'pollution',
        'premises',
        'rain',
        'research',
        'rice',
        'salmon',
        'scissors',
        'series',
        'sewage',
        'shambles',
        'shrimp',
        'software',
        'species',
        'staff',
        'swine',
        'tennis',
        'traffic',
        'transportation',
        'trout',
        'tuna',
        'wealth',
        'welfare',
        'whiting',
        'wildebeest',
        'wildlife',
        'you',
        /pok[eé]mon$/i,
        // Regexes.
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i
    ].forEach(pluralize.addUncountableRule);
    return pluralize;
});
}),
"[project]/node_modules/range-parser/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module exports.
 * @public
 */ module.exports = rangeParser;
/**
 * Parse "Range" header `str` relative to the given file `size`.
 *
 * @param {Number} size
 * @param {String} str
 * @param {Object} [options]
 * @return {Array}
 * @public
 */ function rangeParser(size, str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var index = str.indexOf('=');
    if (index === -1) {
        return -2;
    }
    // split the range string
    var arr = str.slice(index + 1).split(',');
    var ranges = [];
    // add ranges type
    ranges.type = str.slice(0, index);
    // parse all ranges
    for(var i = 0; i < arr.length; i++){
        var range = arr[i].split('-');
        var start = parseInt(range[0], 10);
        var end = parseInt(range[1], 10);
        // -nnn
        if (isNaN(start)) {
            start = size - end;
            end = size - 1;
        // nnn-
        } else if (isNaN(end)) {
            end = size - 1;
        }
        // limit last-byte-pos to current length
        if (end > size - 1) {
            end = size - 1;
        }
        // invalid or unsatisifiable
        if (isNaN(start) || isNaN(end) || start > end || start < 0) {
            continue;
        }
        // add range
        ranges.push({
            start: start,
            end: end
        });
    }
    if (ranges.length < 1) {
        // unsatisifiable
        return -1;
    }
    return options && options.combine ? combineRanges(ranges) : ranges;
}
/**
 * Combine overlapping & adjacent ranges.
 * @private
 */ function combineRanges(ranges) {
    var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart);
    for(var j = 0, i = 1; i < ordered.length; i++){
        var range = ordered[i];
        var current = ordered[j];
        if (range.start > current.end + 1) {
            // next range
            ordered[++j] = range;
        } else if (range.end > current.end) {
            // extend range
            current.end = range.end;
            current.index = Math.min(current.index, range.index);
        }
    }
    // trim ordered array
    ordered.length = j + 1;
    // generate combined range
    var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);
    // copy ranges type
    combined.type = ranges.type;
    return combined;
}
/**
 * Map function to add index value to ranges.
 * @private
 */ function mapWithIndex(range, index) {
    return {
        start: range.start,
        end: range.end,
        index: index
    };
}
/**
 * Map function to remove index value from ranges.
 * @private
 */ function mapWithoutIndex(range) {
    return {
        start: range.start,
        end: range.end
    };
}
/**
 * Sort function to sort ranges by index.
 * @private
 */ function sortByRangeIndex(a, b) {
    return a.index - b.index;
}
/**
 * Sort function to sort ranges by start position.
 * @private
 */ function sortByRangeStart(a, b) {
    return a.start - b.start;
}
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID
};
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/stringify.js [app-route] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript)");
}),
"[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript) <export default as validate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-route] (ecmascript)");
}),
"[project]/node_modules/resolve-pkg-maps/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveExports",
    ()=>v,
    "resolveImports",
    ()=>T
]);
const A = (r)=>r !== null && typeof r == "object", a = (r, t)=>Object.assign(new Error(`[${r}]: ${t}`), {
        code: r
    }), _ = "ERR_INVALID_PACKAGE_CONFIG", E = "ERR_INVALID_PACKAGE_TARGET", I = "ERR_PACKAGE_PATH_NOT_EXPORTED", P = "ERR_PACKAGE_IMPORT_NOT_DEFINED", R = /^\d+$/, O = /^(\.{1,2}|node_modules)$/i, w = /\/|\\/;
var h = ((r)=>(r.Export = "exports", r.Import = "imports", r))(h || {});
const f = (r, t, e, o, c)=>{
    if (t == null) return [];
    if (typeof t == "string") {
        const [n, ...i] = t.split(w);
        if (n === ".." || i.some((l)=>O.test(l))) throw a(E, `Invalid "${r}" target "${t}" defined in the package config`);
        return [
            c ? t.replace(/\*/g, c) : t
        ];
    }
    if (Array.isArray(t)) return t.flatMap((n)=>f(r, n, e, o, c));
    if (A(t)) {
        for (const n of Object.keys(t)){
            if (R.test(n)) throw a(_, "Cannot contain numeric property keys");
            if (n === "default" || o.includes(n)) return f(r, t[n], e, o, c);
        }
        return [];
    }
    throw a(E, `Invalid "${r}" target "${t}"`);
}, s = "*", m = (r, t)=>{
    const e = r.indexOf(s), o = t.indexOf(s);
    return e === o ? t.length > r.length : o > e;
};
function d(r, t) {
    if (!t.includes(s) && r.hasOwnProperty(t)) return [
        t
    ];
    let e, o;
    for (const c of Object.keys(r))if (c.includes(s)) {
        const [n, i, l] = c.split(s);
        if (l === void 0 && t.startsWith(n) && t.endsWith(i)) {
            const g = t.slice(n.length, -i.length || void 0);
            g && (!e || m(e, c)) && (e = c, o = g);
        }
    }
    return [
        e,
        o
    ];
}
const p = (r)=>Object.keys(r).reduce((t, e)=>{
        const o = e === "" || e[0] !== ".";
        if (t === void 0 || t === o) return o;
        throw a(_, '"exports" cannot contain some keys starting with "." and some not');
    }, void 0), u = /^\w+:/, v = (r, t, e)=>{
    if (!r) throw new Error('"exports" is required');
    t = t === "" ? "." : `./${t}`, (typeof r == "string" || Array.isArray(r) || A(r) && p(r)) && (r = {
        ".": r
    });
    const [o, c] = d(r, t), n = f(h.Export, r[o], t, e, c);
    if (n.length === 0) throw a(I, t === "." ? 'No "exports" main defined' : `Package subpath '${t}' is not defined by "exports"`);
    for (const i of n)if (!i.startsWith("./") && !u.test(i)) throw a(E, `Invalid "exports" target "${i}" defined in the package config`);
    return n;
}, T = (r, t, e)=>{
    if (!r) throw new Error('"imports" is required');
    const [o, c] = d(r, t), n = f(h.Import, r[o], t, e, c);
    if (n.length === 0) throw a(P, `Package import specifier "${t}" is not defined in package`);
    return n;
};
;
}),
"[project]/node_modules/payload/node_modules/get-tsconfig/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFilesMatcher",
    ()=>He,
    "createPathsMatcher",
    ()=>Ie,
    "getTsconfig",
    ()=>De,
    "parseTsconfig",
    ()=>fe
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$module__$5b$external$5d$__$28$node$3a$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:module [external] (node:module, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resolve$2d$pkg$2d$maps$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resolve-pkg-maps/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var ve = Object.defineProperty;
var l = (e, t)=>ve(e, "name", {
        value: t,
        configurable: !0
    });
;
;
;
;
;
function B(e) {
    return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
l(B, "slash");
const R = l((e)=>{
    const t = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"][e];
    return (i, ...n)=>{
        const o = `${e}:${n.join(":")}`;
        let s = i == null ? void 0 : i.get(o);
        return s === void 0 && (s = Reflect.apply(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"], n), i == null || i.set(o, s)), s;
    };
}, "cacheFs"), F = R("existsSync"), je = R("readFileSync"), P = R("statSync"), ne = l((e, t, i)=>{
    for(;;){
        const n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix.join(e, t);
        if (F(i, n)) return n;
        const o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e);
        if (o === e) return;
        e = o;
    }
}, "findUp"), J = /^\.{1,2}(\/.*)?$/, M = l((e)=>{
    const t = B(e);
    return J.test(t) ? t : `./${t}`;
}, "normalizeRelativePath");
function _e(e, t = !1) {
    const i = e.length;
    let n = 0, o = "", s = 0, r = 16, f = 0, u = 0, p = 0, T = 0, w = 0;
    function O(c, m) {
        let g = 0, y = 0;
        for(; g < c || !m;){
            let j = e.charCodeAt(n);
            if (j >= 48 && j <= 57) y = y * 16 + j - 48;
            else if (j >= 65 && j <= 70) y = y * 16 + j - 65 + 10;
            else if (j >= 97 && j <= 102) y = y * 16 + j - 97 + 10;
            else break;
            n++, g++;
        }
        return g < c && (y = -1), y;
    }
    l(O, "scanHexDigits");
    function v(c) {
        n = c, o = "", s = 0, r = 16, w = 0;
    }
    l(v, "setPosition");
    function A() {
        let c = n;
        if (e.charCodeAt(n) === 48) n++;
        else for(n++; n < e.length && N(e.charCodeAt(n));)n++;
        if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && N(e.charCodeAt(n))) for(n++; n < e.length && N(e.charCodeAt(n));)n++;
        else return w = 3, e.substring(c, n);
        let m = n;
        if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && N(e.charCodeAt(n))) {
            for(n++; n < e.length && N(e.charCodeAt(n));)n++;
            m = n;
        } else w = 3;
        return e.substring(c, m);
    }
    l(A, "scanNumber");
    function b() {
        let c = "", m = n;
        for(;;){
            if (n >= i) {
                c += e.substring(m, n), w = 2;
                break;
            }
            const g = e.charCodeAt(n);
            if (g === 34) {
                c += e.substring(m, n), n++;
                break;
            }
            if (g === 92) {
                if (c += e.substring(m, n), n++, n >= i) {
                    w = 2;
                    break;
                }
                switch(e.charCodeAt(n++)){
                    case 34:
                        c += '"';
                        break;
                    case 92:
                        c += "\\";
                        break;
                    case 47:
                        c += "/";
                        break;
                    case 98:
                        c += "\b";
                        break;
                    case 102:
                        c += "\f";
                        break;
                    case 110:
                        c += `
`;
                        break;
                    case 114:
                        c += "\r";
                        break;
                    case 116:
                        c += "	";
                        break;
                    case 117:
                        const j = O(4, !0);
                        j >= 0 ? c += String.fromCharCode(j) : w = 4;
                        break;
                    default:
                        w = 5;
                }
                m = n;
                continue;
            }
            if (g >= 0 && g <= 31) if (h(g)) {
                c += e.substring(m, n), w = 2;
                break;
            } else w = 6;
            n++;
        }
        return c;
    }
    l(b, "scanString");
    function $() {
        if (o = "", w = 0, s = n, u = f, T = p, n >= i) return s = i, r = 17;
        let c = e.charCodeAt(n);
        if (G(c)) {
            do n++, o += String.fromCharCode(c), c = e.charCodeAt(n);
            while (G(c))
            return r = 15;
        }
        if (h(c)) return n++, o += String.fromCharCode(c), c === 13 && e.charCodeAt(n) === 10 && (n++, o += `
`), f++, p = n, r = 14;
        switch(c){
            case 123:
                return n++, r = 1;
            case 125:
                return n++, r = 2;
            case 91:
                return n++, r = 3;
            case 93:
                return n++, r = 4;
            case 58:
                return n++, r = 6;
            case 44:
                return n++, r = 5;
            case 34:
                return n++, o = b(), r = 10;
            case 47:
                const m = n - 1;
                if (e.charCodeAt(n + 1) === 47) {
                    for(n += 2; n < i && !h(e.charCodeAt(n));)n++;
                    return o = e.substring(m, n), r = 12;
                }
                if (e.charCodeAt(n + 1) === 42) {
                    n += 2;
                    const g = i - 1;
                    let y = !1;
                    for(; n < g;){
                        const j = e.charCodeAt(n);
                        if (j === 42 && e.charCodeAt(n + 1) === 47) {
                            n += 2, y = !0;
                            break;
                        }
                        n++, h(j) && (j === 13 && e.charCodeAt(n) === 10 && n++, f++, p = n);
                    }
                    return y || (n++, w = 1), o = e.substring(m, n), r = 13;
                }
                return o += String.fromCharCode(c), n++, r = 16;
            case 45:
                if (o += String.fromCharCode(c), n++, n === i || !N(e.charCodeAt(n))) return r = 16;
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                return o += A(), r = 11;
            default:
                for(; n < i && U(c);)n++, c = e.charCodeAt(n);
                if (s !== n) {
                    switch(o = e.substring(s, n), o){
                        case "true":
                            return r = 8;
                        case "false":
                            return r = 9;
                        case "null":
                            return r = 7;
                    }
                    return r = 16;
                }
                return o += String.fromCharCode(c), n++, r = 16;
        }
    }
    l($, "scanNext");
    function U(c) {
        if (G(c) || h(c)) return !1;
        switch(c){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return !1;
        }
        return !0;
    }
    l(U, "isUnknownContentCharacter");
    function E() {
        let c;
        do c = $();
        while (c >= 12 && c <= 15)
        return c;
    }
    return l(E, "scanNextNonTrivia"), {
        setPosition: v,
        getPosition: l(()=>n, "getPosition"),
        scan: t ? E : $,
        getToken: l(()=>r, "getToken"),
        getTokenValue: l(()=>o, "getTokenValue"),
        getTokenOffset: l(()=>s, "getTokenOffset"),
        getTokenLength: l(()=>n - s, "getTokenLength"),
        getTokenStartLine: l(()=>u, "getTokenStartLine"),
        getTokenStartCharacter: l(()=>s - T, "getTokenStartCharacter"),
        getTokenError: l(()=>w, "getTokenError")
    };
}
l(_e, "createScanner");
function G(e) {
    return e === 32 || e === 9;
}
l(G, "isWhiteSpace");
function h(e) {
    return e === 10 || e === 13;
}
l(h, "isLineBreak");
function N(e) {
    return e >= 48 && e <= 57;
}
l(N, "isDigit");
var te;
(function(e) {
    e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(te || (te = {})), new Array(20).fill(0).map((e, t)=>" ".repeat(t));
const D = 200;
new Array(D).fill(0).map((e, t)=>`
` + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>"\r" + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>`\r
` + " ".repeat(t)), new Array(D).fill(0).map((e, t)=>`
` + "	".repeat(t)), new Array(D).fill(0).map((e, t)=>"\r" + "	".repeat(t)), new Array(D).fill(0).map((e, t)=>`\r
` + "	".repeat(t));
var x;
(function(e) {
    e.DEFAULT = {
        allowTrailingComma: !1
    };
})(x || (x = {}));
function $e(e, t = [], i = x.DEFAULT) {
    let n = null, o = [];
    const s = [];
    function r(u) {
        Array.isArray(o) ? o.push(u) : n !== null && (o[n] = u);
    }
    return l(r, "onValue"), ye(e, {
        onObjectBegin: l(()=>{
            const u = {};
            r(u), s.push(o), o = u, n = null;
        }, "onObjectBegin"),
        onObjectProperty: l((u)=>{
            n = u;
        }, "onObjectProperty"),
        onObjectEnd: l(()=>{
            o = s.pop();
        }, "onObjectEnd"),
        onArrayBegin: l(()=>{
            const u = [];
            r(u), s.push(o), o = u, n = null;
        }, "onArrayBegin"),
        onArrayEnd: l(()=>{
            o = s.pop();
        }, "onArrayEnd"),
        onLiteralValue: r,
        onError: l((u, p, T)=>{
            t.push({
                error: u,
                offset: p,
                length: T
            });
        }, "onError")
    }, i), o[0];
}
l($e, "parse$1");
function ye(e, t, i = x.DEFAULT) {
    const n = _e(e, !1), o = [];
    function s(k) {
        return k ? ()=>k(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0;
    }
    l(s, "toNoArgVisit");
    function r(k) {
        return k ? ()=>k(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>o.slice()) : ()=>!0;
    }
    l(r, "toNoArgVisitWithPath");
    function f(k) {
        return k ? (_)=>k(_, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0;
    }
    l(f, "toOneArgVisit");
    function u(k) {
        return k ? (_)=>k(_, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>o.slice()) : ()=>!0;
    }
    l(u, "toOneArgVisitWithPath");
    const p = r(t.onObjectBegin), T = u(t.onObjectProperty), w = s(t.onObjectEnd), O = r(t.onArrayBegin), v = s(t.onArrayEnd), A = u(t.onLiteralValue), b = f(t.onSeparator), $ = s(t.onComment), U = f(t.onError), E = i && i.disallowComments, c = i && i.allowTrailingComma;
    function m() {
        for(;;){
            const k = n.scan();
            switch(n.getTokenError()){
                case 4:
                    g(14);
                    break;
                case 5:
                    g(15);
                    break;
                case 3:
                    g(13);
                    break;
                case 1:
                    E || g(11);
                    break;
                case 2:
                    g(12);
                    break;
                case 6:
                    g(16);
                    break;
            }
            switch(k){
                case 12:
                case 13:
                    E ? g(10) : $();
                    break;
                case 16:
                    g(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return k;
            }
        }
    }
    l(m, "scanNext");
    function g(k, _ = [], C = []) {
        if (U(k), _.length + C.length > 0) {
            let d = n.getToken();
            for(; d !== 17;){
                if (_.indexOf(d) !== -1) {
                    m();
                    break;
                } else if (C.indexOf(d) !== -1) break;
                d = m();
            }
        }
    }
    l(g, "handleError");
    function y(k) {
        const _ = n.getTokenValue();
        return k ? A(_) : (T(_), o.push(_)), m(), !0;
    }
    l(y, "parseString");
    function j() {
        switch(n.getToken()){
            case 11:
                const k = n.getTokenValue();
                let _ = Number(k);
                isNaN(_) && (g(2), _ = 0), A(_);
                break;
            case 7:
                A(null);
                break;
            case 8:
                A(!0);
                break;
            case 9:
                A(!1);
                break;
            default:
                return !1;
        }
        return m(), !0;
    }
    l(j, "parseLiteral");
    function ke() {
        return n.getToken() !== 10 ? (g(3, [], [
            2,
            5
        ]), !1) : (y(!1), n.getToken() === 6 ? (b(":"), m(), V() || g(4, [], [
            2,
            5
        ])) : g(5, [], [
            2,
            5
        ]), o.pop(), !0);
    }
    l(ke, "parseProperty");
    function be() {
        p(), m();
        let k = !1;
        for(; n.getToken() !== 2 && n.getToken() !== 17;){
            if (n.getToken() === 5) {
                if (k || g(4, [], []), b(","), m(), n.getToken() === 2 && c) break;
            } else k && g(6, [], []);
            ke() || g(4, [], [
                2,
                5
            ]), k = !0;
        }
        return w(), n.getToken() !== 2 ? g(7, [
            2
        ], []) : m(), !0;
    }
    l(be, "parseObject");
    function we() {
        O(), m();
        let k = !0, _ = !1;
        for(; n.getToken() !== 4 && n.getToken() !== 17;){
            if (n.getToken() === 5) {
                if (_ || g(4, [], []), b(","), m(), n.getToken() === 4 && c) break;
            } else _ && g(6, [], []);
            k ? (o.push(0), k = !1) : o[o.length - 1]++, V() || g(4, [], [
                4,
                5
            ]), _ = !0;
        }
        return v(), k || o.pop(), n.getToken() !== 4 ? g(8, [
            4
        ], []) : m(), !0;
    }
    l(we, "parseArray");
    function V() {
        switch(n.getToken()){
            case 3:
                return we();
            case 1:
                return be();
            case 10:
                return y(!0);
            default:
                return j();
        }
    }
    return l(V, "parseValue"), m(), n.getToken() === 17 ? i.allowEmptyContent ? !0 : (g(4, [], []), !1) : V() ? (n.getToken() !== 17 && g(9, [], []), !0) : (g(4, [], []), !1);
}
l(ye, "visit");
var ie;
(function(e) {
    e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(ie || (ie = {}));
var oe;
(function(e) {
    e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(oe || (oe = {}));
const Be = $e;
var se;
(function(e) {
    e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(se || (se = {}));
const le = l((e, t)=>Be(je(t, e, "utf8")), "readJsonc"), z = Symbol("implicitBaseUrl"), L = "${configDir}", Fe = l(()=>{
    const { findPnpApi: e } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$module__$5b$external$5d$__$28$node$3a$module$2c$__cjs$29$__["default"];
    return e && e(process.cwd());
}, "getPnpApi"), Q = l((e, t, i, n)=>{
    const o = `resolveFromPackageJsonPath:${e}:${t}:${i}`;
    if (n != null && n.has(o)) return n.get(o);
    const s = le(e, n);
    if (!s) return;
    let r = t || "tsconfig.json";
    if (!i && s.exports) try {
        const [f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resolve$2d$pkg$2d$maps$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveExports"])(s.exports, t, [
            "require",
            "types"
        ]);
        r = f;
    } catch  {
        return !1;
    }
    else !t && s.tsconfig && (r = s.tsconfig);
    return r = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(e, "..", r), n == null || n.set(o, r), r;
}, "resolveFromPackageJsonPath"), H = "package.json", X = "tsconfig.json", Le = l((e, t, i)=>{
    let n = e;
    if (e === ".." && (n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(n, X)), e[0] === "." && (n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(t, n)), __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(n)) {
        if (F(i, n)) {
            if (P(i, n).isFile()) return n;
        } else if (!n.endsWith(".json")) {
            const v = `${n}.json`;
            if (F(i, v)) return v;
        }
        return;
    }
    const [o, ...s] = e.split("/"), r = o[0] === "@" ? `${o}/${s.shift()}` : o, f = s.join("/"), u = Fe();
    if (u) {
        const { resolveRequest: v } = u;
        try {
            if (r === e) {
                const A = v(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(r, H), t);
                if (A) {
                    const b = Q(A, f, !1, i);
                    if (b && F(i, b)) return b;
                }
            } else {
                let A;
                try {
                    A = v(e, t, {
                        extensions: [
                            ".json"
                        ]
                    });
                } catch  {
                    A = v(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(e, X), t);
                }
                if (A) return A;
            }
        } catch  {}
    }
    const p = ne(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(t), __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join("node_modules", r), i);
    if (!p || !P(i, p).isDirectory()) return;
    const T = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(p, H);
    if (F(i, T)) {
        const v = Q(T, f, !1, i);
        if (v === !1) return;
        if (v && F(i, v) && P(i, v).isFile()) return v;
    }
    const w = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(p, f), O = w.endsWith(".json");
    if (!O) {
        const v = `${w}.json`;
        if (F(i, v)) return v;
    }
    if (F(i, w)) {
        if (P(i, w).isDirectory()) {
            const v = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(w, H);
            if (F(i, v)) {
                const b = Q(v, "", !0, i);
                if (b && F(i, b)) return b;
            }
            const A = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(w, X);
            if (F(i, A)) return A;
        } else if (O) return w;
    }
}, "resolveExtendsPath"), Y = l((e, t)=>M(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(e, t)), "pathRelative"), re = [
    "files",
    "include",
    "exclude"
], Ue = l((e, t, i, n)=>{
    const o = Le(e, t, n);
    if (!o) throw new Error(`File '${e}' not found.`);
    if (i.has(o)) throw new Error(`Circularity detected while resolving configuration: ${o}`);
    i.add(o);
    const s = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(o), r = ue(o, n, i);
    delete r.references;
    const { compilerOptions: f } = r;
    if (f) {
        const { baseUrl: u } = f;
        u && !u.startsWith(L) && (f.baseUrl = B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, u))) || "./");
        let { outDir: p } = f;
        p && (p.startsWith(L) || (p = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, p))), f.outDir = B(p) || "./");
    }
    for (const u of re){
        const p = r[u];
        p && (r[u] = p.map((T)=>T.startsWith(L) ? T : B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].relative(t, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, T)))));
    }
    return r;
}, "resolveExtends"), Ee = [
    "outDir",
    "declarationDir"
], ue = l((e, t, i = new Set)=>{
    let n;
    try {
        n = le(e, t) || {};
    } catch  {
        throw new Error(`Cannot resolve tsconfig at path: ${e}`);
    }
    if (typeof n != "object") throw new SyntaxError(`Failed to parse tsconfig at: ${e}`);
    const o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e);
    if (n.compilerOptions) {
        const { compilerOptions: s } = n;
        s.paths && !s.baseUrl && (s[z] = o);
    }
    if (n.extends) {
        const s = Array.isArray(n.extends) ? n.extends : [
            n.extends
        ];
        delete n.extends;
        for (const r of s.reverse()){
            const f = Ue(r, o, new Set(i), t), u = {
                ...f,
                ...n,
                compilerOptions: {
                    ...f.compilerOptions,
                    ...n.compilerOptions
                }
            };
            f.watchOptions && (u.watchOptions = {
                ...f.watchOptions,
                ...n.watchOptions
            }), n = u;
        }
    }
    if (n.compilerOptions) {
        const { compilerOptions: s } = n, r = [
            "baseUrl",
            "rootDir"
        ];
        for (const f of r){
            const u = s[f];
            if (u && !u.startsWith(L)) {
                const p = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(o, u), T = Y(o, p);
                s[f] = T;
            }
        }
        for (const f of Ee){
            let u = s[f];
            u && (Array.isArray(n.exclude) || (n.exclude = []), n.exclude.includes(u) || n.exclude.push(u), u.startsWith(L) || (u = M(u)), s[f] = u);
        }
    } else n.compilerOptions = {};
    if (n.include ? (n.include = n.include.map(B), n.files && delete n.files) : n.files && (n.files = n.files.map((s)=>s.startsWith(L) ? s : M(s))), n.watchOptions) {
        const { watchOptions: s } = n;
        s.excludeDirectories && (s.excludeDirectories = s.excludeDirectories.map((r)=>B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(o, r))));
    }
    return n;
}, "_parseTsconfig"), I = l((e, t)=>{
    if (e.startsWith(L)) return B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(t, e.slice(L.length)));
}, "interpolateConfigDir"), Ne = [
    "outDir",
    "declarationDir",
    "outFile",
    "rootDir",
    "baseUrl",
    "tsBuildInfoFile"
], fe = l((e, t = new Map)=>{
    const i = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(e), n = ue(i, t), o = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(i), { compilerOptions: s } = n;
    if (s) {
        for (const f of Ne){
            const u = s[f];
            if (u) {
                const p = I(u, o);
                s[f] = p ? Y(o, p) : u;
            }
        }
        for (const f of [
            "rootDirs",
            "typeRoots"
        ]){
            const u = s[f];
            u && (s[f] = u.map((p)=>{
                const T = I(p, o);
                return T ? Y(o, T) : p;
            }));
        }
        const { paths: r } = s;
        if (r) for (const f of Object.keys(r))r[f] = r[f].map((u)=>{
            var p;
            return (p = I(u, o)) != null ? p : u;
        });
    }
    for (const r of re){
        const f = n[r];
        f && (n[r] = f.map((u)=>{
            var p;
            return (p = I(u, o)) != null ? p : u;
        }));
    }
    return n;
}, "parseTsconfig"), De = l((e = process.cwd(), t = "tsconfig.json", i = new Map)=>{
    const n = ne(B(e), t, i);
    if (!n) return null;
    const o = fe(n, i);
    return {
        path: n,
        config: o
    };
}, "getTsconfig"), he = /\*/g, ce = l((e, t)=>{
    const i = e.match(he);
    if (i && i.length > 1) throw new Error(t);
}, "assertStarCount"), de = l((e)=>{
    if (e.includes("*")) {
        const [t, i] = e.split("*");
        return {
            prefix: t,
            suffix: i
        };
    }
    return e;
}, "parsePattern"), Pe = l(({ prefix: e, suffix: t }, i)=>i.startsWith(e) && i.endsWith(t), "isPatternMatch"), xe = l((e, t, i)=>Object.entries(e).map(([n, o])=>(ce(n, `Pattern '${n}' can have at most one '*' character.`), {
            pattern: de(n),
            substitutions: o.map((s)=>{
                if (ce(s, `Substitution '${s}' in pattern '${n}' can have at most one '*' character.`), !t && !J.test(s)) throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");
                return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(i, s);
            })
        })), "parsePaths"), Ie = l((e)=>{
    const { compilerOptions: t } = e.config;
    if (!t) return null;
    const { baseUrl: i, paths: n } = t;
    if (!i && !n) return null;
    const o = z in t && t[z], s = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(e.path), i || o || "."), r = n ? xe(n, i, s) : [];
    return (f)=>{
        if (J.test(f)) return [];
        const u = [];
        for (const O of r){
            if (O.pattern === f) return O.substitutions.map(B);
            typeof O.pattern != "string" && u.push(O);
        }
        let p, T = -1;
        for (const O of u)Pe(O.pattern, f) && O.pattern.prefix.length > T && (T = O.pattern.prefix.length, p = O);
        if (!p) return i ? [
            B(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(s, f))
        ] : [];
        const w = f.slice(p.pattern.prefix.length, f.length - p.pattern.suffix.length);
        return p.substitutions.map((O)=>B(O.replace("*", w)));
    };
}, "createPathsMatcher"), pe = l((e)=>{
    let t = "";
    for(let i = 0; i < e.length; i += 1){
        const n = e[i], o = n.toUpperCase();
        t += n === o ? n.toLowerCase() : o;
    }
    return t;
}, "s"), Se = 65, We = 97, Ve = l(()=>Math.floor(Math.random() * 26), "m"), Re = l((e)=>Array.from({
        length: e
    }, ()=>String.fromCodePoint(Ve() + (Math.random() > .5 ? Se : We))).join(""), "S"), Je = l((e = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"])=>{
    const t = process.execPath;
    if (e.existsSync(t)) return !e.existsSync(pe(t));
    const i = `/${Re(10)}`;
    e.writeFileSync(i, "");
    const n = !e.existsSync(pe(i));
    return e.unlinkSync(i), n;
}, "l"), { join: S } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].posix, Z = {
    ts: [
        ".ts",
        ".tsx",
        ".d.ts"
    ],
    cts: [
        ".cts",
        ".d.cts"
    ],
    mts: [
        ".mts",
        ".d.mts"
    ]
}, Me = l((e)=>{
    const t = [
        ...Z.ts
    ], i = [
        ...Z.cts
    ], n = [
        ...Z.mts
    ];
    return e != null && e.allowJs && (t.push(".js", ".jsx"), i.push(".cjs"), n.push(".mjs")), [
        ...t,
        ...i,
        ...n
    ];
}, "getSupportedExtensions"), Ge = l((e)=>{
    const t = [];
    if (!e) return t;
    const { outDir: i, declarationDir: n } = e;
    return i && t.push(i), n && t.push(n), t;
}, "getDefaultExcludeSpec"), ae = l((e)=>e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), "escapeForRegexp"), ze = [
    "node_modules",
    "bower_components",
    "jspm_packages"
], q = `(?!(${ze.join("|")})(/|$))`, Qe = /(?:^|\/)[^.*?]+$/, ge = "**/*", W = "[^/]", K = "[^./]", me = process.platform === "win32", He = l(({ config: e, path: t }, i = Je())=>{
    if ("extends" in e) throw new Error("tsconfig#extends must be resolved. Use getTsconfig or parseTsconfig to resolve it.");
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(t)) throw new Error("The tsconfig path must be absolute");
    me && (t = B(t));
    const n = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(t), { files: o, include: s, exclude: r, compilerOptions: f } = e, u = o == null ? void 0 : o.map((b)=>S(n, b)), p = Me(f), T = i ? "" : "i", O = (r || Ge(f)).map((b)=>{
        const $ = S(n, b), U = ae($).replaceAll(String.raw`\*\*/`, "(.+/)?").replaceAll(String.raw`\*`, `${W}*`).replaceAll(String.raw`\?`, W);
        return new RegExp(`^${U}($|/)`, T);
    }), v = o || s ? s : [
        ge
    ], A = v ? v.map((b)=>{
        let $ = S(n, b);
        Qe.test($) && ($ = S($, ge));
        const U = ae($).replaceAll(String.raw`/\*\*`, `(/${q}${K}${W}*)*?`).replaceAll(/(\/)?\\\*/g, (E, c)=>{
            const m = `(${K}|(\\.(?!min\\.js$))?)*`;
            return c ? `/${q}${K}${m}` : m;
        }).replaceAll(/(\/)?\\\?/g, (E, c)=>{
            const m = W;
            return c ? `/${q}${m}` : m;
        });
        return new RegExp(`^${U}$`, T);
    }) : void 0;
    return (b)=>{
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].isAbsolute(b)) throw new Error("filePath must be absolute");
        if (me && (b = B(b)), u != null && u.includes(b)) return e;
        if (!(!p.some(($)=>b.endsWith($)) || O.some(($)=>$.test(b))) && A && A.some(($)=>$.test(b))) return e;
    };
}, "createFilesMatcher");
;
}),
"[project]/node_modules/kleur/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
const $ = {
    enabled: !NODE_DISABLE_COLORS && TERM !== 'dumb' && FORCE_COLOR !== '0',
    // modifiers
    reset: init(0, 0),
    bold: init(1, 22),
    dim: init(2, 22),
    italic: init(3, 23),
    underline: init(4, 24),
    inverse: init(7, 27),
    hidden: init(8, 28),
    strikethrough: init(9, 29),
    // colors
    black: init(30, 39),
    red: init(31, 39),
    green: init(32, 39),
    yellow: init(33, 39),
    blue: init(34, 39),
    magenta: init(35, 39),
    cyan: init(36, 39),
    white: init(37, 39),
    gray: init(90, 39),
    grey: init(90, 39),
    // background colors
    bgBlack: init(40, 49),
    bgRed: init(41, 49),
    bgGreen: init(42, 49),
    bgYellow: init(43, 49),
    bgBlue: init(44, 49),
    bgMagenta: init(45, 49),
    bgCyan: init(46, 49),
    bgWhite: init(47, 49)
};
function run(arr, str) {
    let i = 0, tmp, beg = '', end = '';
    for(; i < arr.length; i++){
        tmp = arr[i];
        beg += tmp.open;
        end += tmp.close;
        if (str.includes(tmp.close)) {
            str = str.replace(tmp.rgx, tmp.close + tmp.open);
        }
    }
    return beg + str + end;
}
function chain(has, keys) {
    let ctx = {
        has,
        keys
    };
    ctx.reset = $.reset.bind(ctx);
    ctx.bold = $.bold.bind(ctx);
    ctx.dim = $.dim.bind(ctx);
    ctx.italic = $.italic.bind(ctx);
    ctx.underline = $.underline.bind(ctx);
    ctx.inverse = $.inverse.bind(ctx);
    ctx.hidden = $.hidden.bind(ctx);
    ctx.strikethrough = $.strikethrough.bind(ctx);
    ctx.black = $.black.bind(ctx);
    ctx.red = $.red.bind(ctx);
    ctx.green = $.green.bind(ctx);
    ctx.yellow = $.yellow.bind(ctx);
    ctx.blue = $.blue.bind(ctx);
    ctx.magenta = $.magenta.bind(ctx);
    ctx.cyan = $.cyan.bind(ctx);
    ctx.white = $.white.bind(ctx);
    ctx.gray = $.gray.bind(ctx);
    ctx.grey = $.grey.bind(ctx);
    ctx.bgBlack = $.bgBlack.bind(ctx);
    ctx.bgRed = $.bgRed.bind(ctx);
    ctx.bgGreen = $.bgGreen.bind(ctx);
    ctx.bgYellow = $.bgYellow.bind(ctx);
    ctx.bgBlue = $.bgBlue.bind(ctx);
    ctx.bgMagenta = $.bgMagenta.bind(ctx);
    ctx.bgCyan = $.bgCyan.bind(ctx);
    ctx.bgWhite = $.bgWhite.bind(ctx);
    return ctx;
}
function init(open, close) {
    let blk = {
        open: `\x1b[${open}m`,
        close: `\x1b[${close}m`,
        rgx: new RegExp(`\\x1b\\[${close}m`, 'g')
    };
    return function(txt) {
        if (this !== void 0 && this.has !== void 0) {
            this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
            return txt === void 0 ? this : $.enabled ? run(this.keys, txt + '') : txt + '';
        }
        return txt === void 0 ? chain([
            open
        ], [
            blk
        ]) : $.enabled ? run([
            blk
        ], txt + '') : txt + '';
    };
}
module.exports = $;
}),
"[project]/node_modules/sisteransi/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const ESC = '\x1B';
const CSI = `${ESC}[`;
const beep = '\u0007';
const cursor = {
    to (x, y) {
        if (!y) return `${CSI}${x + 1}G`;
        return `${CSI}${y + 1};${x + 1}H`;
    },
    move (x, y) {
        let ret = '';
        if (x < 0) ret += `${CSI}${-x}D`;
        else if (x > 0) ret += `${CSI}${x}C`;
        if (y < 0) ret += `${CSI}${-y}A`;
        else if (y > 0) ret += `${CSI}${y}B`;
        return ret;
    },
    up: (count = 1)=>`${CSI}${count}A`,
    down: (count = 1)=>`${CSI}${count}B`,
    forward: (count = 1)=>`${CSI}${count}C`,
    backward: (count = 1)=>`${CSI}${count}D`,
    nextLine: (count = 1)=>`${CSI}E`.repeat(count),
    prevLine: (count = 1)=>`${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
};
const scroll = {
    up: (count = 1)=>`${CSI}S`.repeat(count),
    down: (count = 1)=>`${CSI}T`.repeat(count)
};
const erase = {
    screen: `${CSI}2J`,
    up: (count = 1)=>`${CSI}1J`.repeat(count),
    down: (count = 1)=>`${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines (count) {
        let clear = '';
        for(let i = 0; i < count; i++)clear += this.line + (i < count - 1 ? cursor.up() : '');
        if (count) clear += cursor.left;
        return clear;
    }
};
module.exports = {
    cursor,
    scroll,
    erase,
    beep
};
}),
"[project]/node_modules/to-no-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Export.
 */ module.exports = toNoCase;
/**
 * Test whether a string is camel-case.
 */ var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */ function toNoCase(string) {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
}
/**
 * Separator splitter.
 */ var separatorSplitter = /[\W_]+(.|$)/g;
/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */ function unseparate(string) {
    return string.replace(separatorSplitter, function(m, next) {
        return next ? ' ' + next : '';
    });
}
/**
 * Camelcase splitter.
 */ var camelSplitter = /(.)([A-Z]+)/g;
/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */ function uncamelize(string) {
    return string.replace(camelSplitter, function(m, previous, uppers) {
        return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    });
}
}),
"[project]/node_modules/to-space-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var clean = __turbopack_context__.r("[project]/node_modules/to-no-case/index.js [app-route] (ecmascript)");
/**
 * Export.
 */ module.exports = toSpaceCase;
/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */ function toSpaceCase(string) {
    return clean(string).replace(/[\W_]+(.|$)/g, function(matches, match) {
        return match ? ' ' + match : '';
    }).trim();
}
}),
"[project]/node_modules/to-snake-case/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toSpace = __turbopack_context__.r("[project]/node_modules/to-space-case/index.js [app-route] (ecmascript)");
/**
 * Export.
 */ module.exports = toSnakeCase;
/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */ function toSnakeCase(string) {
    return toSpace(string).replace(/\s/g, '_');
}
}),
"[externals]/typescript [external] (typescript, cjs, [project]/node_modules/typescript)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("typescript-279735412610ef8d", () => require("typescript-279735412610ef8d"));

module.exports = mod;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_COLOR_MAP = void 0;
exports.DEFAULT_COLOR_MAP = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    white_bold: '\x1b[01m',
    reset: '\x1b[0m'
};
class ColoredConsoleLine {
    constructor(colorMap = exports.DEFAULT_COLOR_MAP){
        this.text = '';
        this.colorMap = colorMap;
    }
    addCharsWithColor(color, text) {
        const colorAnsi = this.colorMap[color];
        this.text += colorAnsi !== undefined ? `${colorAnsi}${text}${this.colorMap.reset}` : text;
    }
    renderConsole() {
        return this.text;
    }
}
exports.default = ColoredConsoleLine;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_HEADER_ALIGNMENT = exports.DEFAULT_ROW_ALIGNMENT = exports.DEFAULT_HEADER_FONT_COLOR = exports.DEFAULT_ROW_FONT_COLOR = exports.COLORS = exports.ALIGNMENTS = exports.DEFAULT_TABLE_STYLE = exports.DEFAULT_ROW_SEPARATOR = exports.DEFAULT_COLUMN_LEN = void 0;
exports.DEFAULT_COLUMN_LEN = 20;
exports.DEFAULT_ROW_SEPARATOR = false;
exports.DEFAULT_TABLE_STYLE = {
    /*
        Default Style
        ┌────────────┬─────┬──────┐
        │ foo        │ bar │ baz  │
        │ frobnicate │ bar │ quuz │
        └────────────┴─────┴──────┘
        */ headerTop: {
        left: '┌',
        mid: '┬',
        right: '┐',
        other: '─'
    },
    headerBottom: {
        left: '├',
        mid: '┼',
        right: '┤',
        other: '─'
    },
    tableBottom: {
        left: '└',
        mid: '┴',
        right: '┘',
        other: '─'
    },
    vertical: '│',
    rowSeparator: {
        left: '├',
        mid: '┼',
        right: '┤',
        other: '─'
    }
};
exports.ALIGNMENTS = [
    'right',
    'left',
    'center'
];
exports.COLORS = [
    'red',
    'green',
    'yellow',
    'white',
    'blue',
    'magenta',
    'cyan',
    'white_bold',
    'reset'
];
exports.DEFAULT_ROW_FONT_COLOR = 'white';
exports.DEFAULT_HEADER_FONT_COLOR = 'white_bold';
exports.DEFAULT_ROW_ALIGNMENT = 'right';
exports.DEFAULT_HEADER_ALIGNMENT = 'center';
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rawColumnToInternalColumn = exports.objIfExists = void 0;
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const objIfExists = (key, val)=>{
    if (!val) {
        return {};
    }
    return {
        [key]: val
    };
};
exports.objIfExists = objIfExists;
const rawColumnToInternalColumn = (column)=>{
    var _a;
    return Object.assign(Object.assign(Object.assign(Object.assign({
        name: column.name,
        title: (_a = column.title) !== null && _a !== void 0 ? _a : column.name
    }, (0, exports.objIfExists)('color', column.color)), (0, exports.objIfExists)('maxLen', column.maxLen)), (0, exports.objIfExists)('minLen', column.minLen)), {
        alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT
    });
};
exports.rawColumnToInternalColumn = rawColumnToInternalColumn;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findWidthInConsole = exports.stripAnsi = void 0;
const simple_wcswidth_1 = __turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/index.js [app-route] (ecmascript)");
/* eslint-disable no-control-regex */ const colorRegex = /\x1b\[\d{1,3}(;\d{1,3})*m/g; // \x1b[30m \x1b[305m \x1b[38;5m
const stripAnsi = (str)=>str.replace(colorRegex, '');
exports.stripAnsi = stripAnsi;
const findWidthInConsole = (str, charLength)=>{
    let strLen = 0;
    str = (0, exports.stripAnsi)(str);
    if (charLength) {
        Object.entries(charLength).forEach(([key, value])=>{
            // count appearance of the key in the string and remove from original string
            let regex = new RegExp(key, 'g');
            strLen += (str.match(regex) || []).length * value;
            str = str.replace(key, '');
        });
    }
    strLen += (0, simple_wcswidth_1.wcswidth)(str);
    return strLen;
};
exports.findWidthInConsole = findWidthInConsole;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.biggestWordInSentence = exports.textWithPadding = exports.splitTextIntoTextsOfMinLen = void 0;
const console_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)");
// ("How are you?",10) => ["How are ", "you?"]
const splitTextIntoTextsOfMinLen = (inpStr, width, charLength)=>{
    const ret = [];
    const lines = inpStr.split(/[\n\r]/);
    lines.forEach((line)=>{
        const spaceSeparatedStrings = line.split(' ');
        let now = [];
        let cnt = 0;
        spaceSeparatedStrings.forEach((strWithoutSpace)=>{
            const consoleWidth = (0, console_utils_1.findWidthInConsole)(strWithoutSpace, charLength);
            if (cnt + consoleWidth <= width) {
                cnt += consoleWidth + 1; // 1 for the space
                now.push(strWithoutSpace);
            } else {
                if (now.length > 0) ret.push(now.join(' '));
                now = [
                    strWithoutSpace
                ];
                cnt = consoleWidth + 1;
            }
        });
        ret.push(now.join(' '));
    });
    return ret;
};
exports.splitTextIntoTextsOfMinLen = splitTextIntoTextsOfMinLen;
// ("How are you?",center, 20) => "    How are you?    "
// ("How are you?",right, 20)  => "        How are you?"
// ("How are you?",center, 4)  => "How\nare\nyou?"
const textWithPadding = (text, alignment, columnLen, charLength)=>{
    const curTextSize = (0, console_utils_1.findWidthInConsole)(text, charLength);
    // alignments for center padding case
    const leftPadding = Math.floor((columnLen - curTextSize) / 2);
    const rightPadding = columnLen - leftPadding - curTextSize;
    // handle edge cases where the text size is larger than the column length
    if (columnLen < curTextSize) {
        const splittedLines = (0, exports.splitTextIntoTextsOfMinLen)(text, columnLen);
        if (splittedLines.length === 1) {
            return text;
        }
        return splittedLines.map((singleLine)=>(0, exports.textWithPadding)(singleLine, alignment, columnLen, charLength)).join('\n');
    }
    // console.log(text, columnLen, curTextSize);
    switch(alignment){
        case 'left':
            return text.concat(' '.repeat(columnLen - curTextSize));
        case 'center':
            return ' '.repeat(leftPadding).concat(text).concat(' '.repeat(rightPadding));
        case 'right':
        default:
            return ' '.repeat(columnLen - curTextSize).concat(text);
    }
};
exports.textWithPadding = textWithPadding;
// ("How are you?",10) => ["How are ", "you?"]
const biggestWordInSentence = (inpStr, charLength)=>inpStr.split(' ').reduce((a, b)=>Math.max(a, (0, console_utils_1.findWidthInConsole)(b, charLength)), 0);
exports.biggestWordInSentence = biggestWordInSentence;
}),
"[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getWidthLimitedColumnsArray = exports.createHeaderAsRow = exports.renderTableHorizontalBorders = exports.findLenOfColumn = exports.createRow = exports.createColumFromComputedColumn = exports.createColumFromOnlyName = exports.createTableHorizontalBorders = exports.convertRawRowOptionsToStandard = exports.cellText = void 0;
const input_converter_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)");
const console_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/console-utils.js [app-route] (ecmascript)");
const string_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const max = (a, b)=>Math.max(a, b);
// takes any input that is given by user and converts to string
const cellText = (text)=>text === undefined || text === null ? '' : `${text}`;
exports.cellText = cellText;
const convertRawRowOptionsToStandard = (options)=>{
    if (options) {
        return {
            color: options.color,
            separator: options.separator || table_constants_1.DEFAULT_ROW_SEPARATOR
        };
    }
    return undefined;
};
exports.convertRawRowOptionsToStandard = convertRawRowOptionsToStandard;
const createTableHorizontalBorders = ({ left, mid, right, other }, column_lengths)=>{
    // ╚
    let ret = left;
    // ╚═══════╩═══════════════════════════════════════╩════════╩
    column_lengths.forEach((len)=>{
        ret += other.repeat(len + 2);
        ret += mid;
    });
    // ╚═══════╩═══════════════════════════════════════╩════════
    ret = ret.slice(0, -mid.length);
    // ╚═══════╩═══════════════════════════════════════╩════════╝
    ret += right;
    return ret;
};
exports.createTableHorizontalBorders = createTableHorizontalBorders;
const createColumFromOnlyName = (name)=>({
        name,
        title: name
    });
exports.createColumFromOnlyName = createColumFromOnlyName;
const createColumFromComputedColumn = (column)=>{
    var _a;
    return Object.assign(Object.assign(Object.assign(Object.assign({
        name: column.name,
        title: (_a = column.title) !== null && _a !== void 0 ? _a : column.name
    }, (0, input_converter_1.objIfExists)('color', column.color)), (0, input_converter_1.objIfExists)('maxLen', column.maxLen)), (0, input_converter_1.objIfExists)('minLen', column.minLen)), {
        alignment: column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT
    });
};
exports.createColumFromComputedColumn = createColumFromComputedColumn;
const createRow = (color, text, separator)=>({
        color,
        separator,
        text
    });
exports.createRow = createRow;
const findLenOfColumn = (column, rows, charLength)=>{
    const columnId = column.name;
    const columnTitle = column.title;
    let length = max(0, (column === null || column === void 0 ? void 0 : column.minLen) || 0);
    if (column.maxLen) {
        // if customer input is mentioned a max width, lets see if all other can fit here
        // if others cant fit find the max word length so that at least the table can be printed
        length = max(length, max(column.maxLen, (0, string_utils_1.biggestWordInSentence)(columnTitle, charLength)));
        length = rows.reduce((acc, row)=>max(acc, (0, string_utils_1.biggestWordInSentence)((0, exports.cellText)(row.text[columnId]), charLength)), length);
        return length;
    }
    length = max(length, (0, console_utils_1.findWidthInConsole)(columnTitle, charLength));
    rows.forEach((row)=>{
        length = max(length, (0, console_utils_1.findWidthInConsole)((0, exports.cellText)(row.text[columnId]), charLength));
    });
    return length;
};
exports.findLenOfColumn = findLenOfColumn;
const renderTableHorizontalBorders = (style, column_lengths)=>{
    const str = (0, exports.createTableHorizontalBorders)(style, column_lengths);
    return str;
};
exports.renderTableHorizontalBorders = renderTableHorizontalBorders;
const createHeaderAsRow = (createRowFn, columns)=>{
    const headerColor = table_constants_1.DEFAULT_HEADER_FONT_COLOR;
    const row = createRowFn(headerColor, {}, false);
    columns.forEach((column)=>{
        row.text[column.name] = column.title;
    });
    return row;
};
exports.createHeaderAsRow = createHeaderAsRow;
// { col1: ['How', 'Is', 'Going'], col2: ['I am', 'Tom'],  }
const getWidthLimitedColumnsArray = (columns, row, charLength)=>{
    const ret = {};
    columns.forEach((column)=>{
        ret[column.name] = (0, string_utils_1.splitTextIntoTextsOfMinLen)((0, exports.cellText)(row.text[column.name]), column.length || table_constants_1.DEFAULT_COLUMN_LEN, charLength);
    });
    return ret;
};
exports.getWidthLimitedColumnsArray = getWidthLimitedColumnsArray;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preProcessRows = exports.preProcessColumns = void 0;
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const createComputedColumnsIfNecessary = (table)=>{
    if (table.computedColumns.length) {
        table.computedColumns.forEach((computedColumn)=>{
            table.addColumn(computedColumn);
            table.rows.forEach((row)=>{
                row.text[computedColumn.name] = computedColumn.function(row.text);
            });
        });
    }
};
const disableColumnsIfNecessary = (table)=>{
    if (table.enabledColumns.length) {
        table.columns = table.columns.filter((col)=>table.enabledColumns.includes(col.name));
    }
};
const enableColumnsIfNecessary = (table)=>{
    if (table.disabledColumns.length) {
        table.columns = table.columns.filter((col)=>!table.disabledColumns.includes(col.name));
    }
};
const findColumnWidth = (table)=>{
    table.columns.forEach((column)=>{
        column.length = (0, table_helpers_1.findLenOfColumn)(column, table.rows, table.charLength);
    });
};
const preProcessColumns = (table)=>{
    createComputedColumnsIfNecessary(table);
    enableColumnsIfNecessary(table);
    disableColumnsIfNecessary(table);
    findColumnWidth(table);
};
exports.preProcessColumns = preProcessColumns;
const preProcessRows = (table)=>{
    const newRows = table.rows.filter((r)=>table.filterFunction(r.text)).sort((r1, r2)=>table.sortFunction(r1.text, r2.text));
    table.rows = newRows;
};
exports.preProcessRows = preProcessRows;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printSimpleTable = exports.renderSimpleTable = exports.renderTable = void 0;
const colored_console_line_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)"));
const string_utils_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/string-utils.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const internal_table_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)"));
const table_pre_processors_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/table-pre-processors.js [app-route] (ecmascript)");
// ║ Index ║         ║        ║
const renderOneLine = (tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap, charLength)=>{
    const line = new colored_console_line_1.default(colorMap);
    line.addCharsWithColor('', tableStyle.vertical); // dont Color the Column borders
    columns.forEach((column)=>{
        const thisLineHasText = currentLineIndex < widthLimitedColumnsArray[column.name].length;
        const textForThisLine = thisLineHasText ? (0, table_helpers_1.cellText)(widthLimitedColumnsArray[column.name][currentLineIndex]) : '';
        line.addCharsWithColor(table_constants_1.DEFAULT_ROW_FONT_COLOR, ' ');
        line.addCharsWithColor(isHeader && table_constants_1.DEFAULT_HEADER_FONT_COLOR || column.color || row.color, (0, string_utils_1.textWithPadding)(textForThisLine, column.alignment || table_constants_1.DEFAULT_ROW_ALIGNMENT, column.length || table_constants_1.DEFAULT_COLUMN_LEN, charLength));
        line.addCharsWithColor('', ` ${tableStyle.vertical}`); // dont Color the Column borders
    });
    return line.renderConsole();
};
// ║ Bold  ║    text ║  value ║
// ║ Index ║         ║        ║
const renderWidthLimitedLines = (tableStyle, columns, row, colorMap, isHeader, charLength)=>{
    // { col1: ['How', 'Is', 'Going'], col2: ['I am', 'Tom'],  }
    const widthLimitedColumnsArray = (0, table_helpers_1.getWidthLimitedColumnsArray)(columns, row, charLength);
    const totalLines = Object.values(widthLimitedColumnsArray).reduce((a, b)=>Math.max(a, b.length), 0);
    const ret = [];
    for(let currentLineIndex = 0; currentLineIndex < totalLines; currentLineIndex += 1){
        const singleLine = renderOneLine(tableStyle, columns, currentLineIndex, widthLimitedColumnsArray, isHeader, row, colorMap, charLength);
        ret.push(singleLine);
    }
    return ret;
};
// ║ 1     ║     I would like some red wine please ║ 10.212 ║
const renderRow = (table, row)=>{
    let ret = [];
    ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap, undefined, table.charLength));
    return ret;
};
/*
                  The analysis Result
 ╔═══════╦═══════════════════════════════════════╦════════╗
*/ const renderTableTitle = (table)=>{
    const ret = [];
    if (table.title === undefined) {
        return ret;
    }
    const getTableWidth = ()=>{
        const reducer = (accumulator, currentValue)=>// ║ cell ║, 2 spaces + cellTextSize + one border on the left
            accumulator + currentValue + 2 + 1;
        return table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN).reduce(reducer, 1);
    };
    const titleWithPadding = (0, string_utils_1.textWithPadding)(table.title, table_constants_1.DEFAULT_HEADER_ALIGNMENT, getTableWidth());
    const styledText = new colored_console_line_1.default(table.colorMap);
    styledText.addCharsWithColor(table_constants_1.DEFAULT_HEADER_FONT_COLOR, titleWithPadding);
    //                  The analysis Result
    ret.push(styledText.renderConsole());
    return ret;
};
/*
 ╔═══════╦═══════════════════════════════════════╦════════╗
 ║ index ║                                  text ║  value ║
 ╟═══════╬═══════════════════════════════════════╬════════╢
*/ const renderTableHeaders = (table)=>{
    let ret = [];
    // ╔═══════╦═══════════════════════════════════════╦════════╗
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerTop, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    // ║ index ║                                  text ║  value ║
    const row = (0, table_helpers_1.createHeaderAsRow)(table_helpers_1.createRow, table.columns);
    ret = ret.concat(renderWidthLimitedLines(table.tableStyle, table.columns, row, table.colorMap, true));
    // ╟═══════╬═══════════════════════════════════════╬════════╢
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.headerBottom, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    return ret;
};
const renderTableEnding = (table)=>{
    const ret = [];
    // ╚═══════╩═══════════════════════════════════════╩════════╝
    ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.tableBottom, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    return ret;
};
const renderRowSeparator = (table, row)=>{
    const ret = [];
    const lastRowIndex = table.rows.length - 1;
    const currentRowIndex = table.rows.indexOf(row);
    if (currentRowIndex !== lastRowIndex && row.separator) {
        // ╟═══════╬═══════════════════════════════════════╬════════╢
        ret.push((0, table_helpers_1.renderTableHorizontalBorders)(table.tableStyle.rowSeparator, table.columns.map((m)=>m.length || table_constants_1.DEFAULT_COLUMN_LEN)));
    }
    return ret;
};
const renderTable = (table)=>{
    (0, table_pre_processors_1.preProcessColumns)(table); // enable / disable cols, find maxLn of each col/ computed Columns
    (0, table_pre_processors_1.preProcessRows)(table); // sort and filter
    const ret = [];
    renderTableTitle(table).forEach((row)=>ret.push(row));
    renderTableHeaders(table).forEach((row)=>ret.push(row));
    table.rows.forEach((row)=>{
        renderRow(table, row).forEach((row_)=>ret.push(row_));
        renderRowSeparator(table, row).forEach((row_)=>ret.push(row_));
    });
    renderTableEnding(table).forEach((row)=>ret.push(row));
    return ret.join('\n');
};
exports.renderTable = renderTable;
const renderSimpleTable = (rows)=>{
    const table = new internal_table_1.default();
    table.addRows(rows);
    return (0, exports.renderTable)(table);
};
exports.renderSimpleTable = renderSimpleTable;
const printSimpleTable = (rows)=>{
    console.log((0, exports.renderSimpleTable)(rows));
};
exports.printSimpleTable = printSimpleTable;
}),
"[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const colored_console_line_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/colored-console-line.js [app-route] (ecmascript)");
const table_constants_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-constants.js [app-route] (ecmascript)");
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
const input_converter_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/input-converter.js [app-route] (ecmascript)");
const internal_table_printer_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)");
const DEFAULT_ROW_SORT_FUNC = ()=>0;
const DEFAULT_ROW_FILTER_FUNC = ()=>true;
class TableInternal {
    initSimple(columns) {
        this.columns = columns.map((column)=>({
                name: column,
                title: column,
                alignment: table_constants_1.DEFAULT_ROW_ALIGNMENT
            }));
    }
    initDetailed(options) {
        var _a;
        this.title = (options === null || options === void 0 ? void 0 : options.title) || this.title;
        this.tableStyle = (options === null || options === void 0 ? void 0 : options.style) || this.tableStyle;
        this.sortFunction = (options === null || options === void 0 ? void 0 : options.sort) || this.sortFunction;
        this.filterFunction = (options === null || options === void 0 ? void 0 : options.filter) || this.filterFunction;
        this.enabledColumns = (options === null || options === void 0 ? void 0 : options.enabledColumns) || this.enabledColumns;
        this.disabledColumns = (options === null || options === void 0 ? void 0 : options.disabledColumns) || this.disabledColumns;
        this.computedColumns = (options === null || options === void 0 ? void 0 : options.computedColumns) || this.computedColumns;
        this.columns = ((_a = options === null || options === void 0 ? void 0 : options.columns) === null || _a === void 0 ? void 0 : _a.map(input_converter_1.rawColumnToInternalColumn)) || this.columns;
        this.rowSeparator = (options === null || options === void 0 ? void 0 : options.rowSeparator) || this.rowSeparator;
        this.charLength = (options === null || options === void 0 ? void 0 : options.charLength) || this.charLength;
        if (options === null || options === void 0 ? void 0 : options.shouldDisableColors) {
            this.colorMap = {};
        } else if (options === null || options === void 0 ? void 0 : options.colorMap) {
            this.colorMap = Object.assign(Object.assign({}, this.colorMap), options.colorMap);
        }
        if (options.rows !== undefined) {
            this.addRows(options.rows);
        }
    }
    constructor(options){
        // default construction
        this.rows = [];
        this.columns = [];
        this.title = undefined;
        this.tableStyle = table_constants_1.DEFAULT_TABLE_STYLE;
        this.filterFunction = DEFAULT_ROW_FILTER_FUNC;
        this.sortFunction = DEFAULT_ROW_SORT_FUNC;
        this.enabledColumns = [];
        this.disabledColumns = [];
        this.computedColumns = [];
        this.rowSeparator = table_constants_1.DEFAULT_ROW_SEPARATOR;
        this.colorMap = colored_console_line_1.DEFAULT_COLOR_MAP;
        this.charLength = {};
        if (options instanceof Array) {
            this.initSimple(options);
        } else if (typeof options === 'object') {
            this.initDetailed(options);
        }
    }
    createColumnFromRow(text) {
        const colNames = this.columns.map((col)=>col.name);
        Object.keys(text).forEach((key)=>{
            if (!colNames.includes(key)) {
                this.columns.push((0, table_helpers_1.createColumFromOnlyName)(key));
            }
        });
    }
    addColumn(textOrObj) {
        if (typeof textOrObj === 'string') {
            this.columns.push((0, table_helpers_1.createColumFromOnlyName)(textOrObj));
        } else {
            this.columns.push((0, table_helpers_1.createColumFromComputedColumn)(textOrObj));
        }
    }
    addColumns(toBeInsertedColumns) {
        toBeInsertedColumns.forEach((toBeInsertedColumn)=>{
            this.addColumn(toBeInsertedColumn);
        });
    }
    addRow(text, options) {
        this.createColumnFromRow(text);
        this.rows.push((0, table_helpers_1.createRow)((options === null || options === void 0 ? void 0 : options.color) || table_constants_1.DEFAULT_ROW_FONT_COLOR, text, (options === null || options === void 0 ? void 0 : options.separator) !== undefined ? options === null || options === void 0 ? void 0 : options.separator : this.rowSeparator));
    }
    addRows(toBeInsertedRows, options) {
        toBeInsertedRows.forEach((toBeInsertedRow)=>{
            this.addRow(toBeInsertedRow, options);
        });
    }
    renderTable() {
        return (0, internal_table_printer_1.renderTable)(this);
    }
}
exports.default = TableInternal;
}),
"[project]/node_modules/console-table-printer/dist/src/console-table-printer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const internal_table_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table.js [app-route] (ecmascript)"));
const table_helpers_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/utils/table-helpers.js [app-route] (ecmascript)");
class Table {
    constructor(options){
        this.table = new internal_table_1.default(options);
    }
    addColumn(column) {
        this.table.addColumn(column);
        return this;
    }
    addColumns(columns) {
        this.table.addColumns(columns);
        return this;
    }
    addRow(text, rowOptions) {
        this.table.addRow(text, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
    }
    addRows(toBeInsertedRows, rowOptions) {
        this.table.addRows(toBeInsertedRows, (0, table_helpers_1.convertRawRowOptionsToStandard)(rowOptions));
        return this;
    }
    printTable() {
        const tableRendered = this.table.renderTable();
        console.log(tableRendered);
    }
    render() {
        return this.table.renderTable();
    }
}
exports.default = Table;
}),
"[project]/node_modules/console-table-printer/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderTable = exports.printTable = exports.Table = void 0;
const console_table_printer_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/console-table-printer.js [app-route] (ecmascript)"));
exports.Table = console_table_printer_1.default;
const internal_table_printer_1 = __turbopack_context__.r("[project]/node_modules/console-table-printer/dist/src/internalTable/internal-table-printer.js [app-route] (ecmascript)");
Object.defineProperty(exports, "printTable", {
    enumerable: true,
    get: function() {
        return internal_table_printer_1.printSimpleTable;
    }
});
Object.defineProperty(exports, "renderTable", {
    enumerable: true,
    get: function() {
        return internal_table_printer_1.renderSimpleTable;
    }
});
}),
"[project]/node_modules/simple-wcswidth/dist/src/non-spacing-chars.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* sorted list of non-overlapping intervals of non-spacing characters */ /* generated by "uniset +cat=Me +cat=Mn +cat=Cf -00AD +1160-11FF +200B c" */ const combining = [
    {
        first: 0x0300,
        last: 0x036f
    },
    {
        first: 0x0483,
        last: 0x0486
    },
    {
        first: 0x0488,
        last: 0x0489
    },
    {
        first: 0x0591,
        last: 0x05bd
    },
    {
        first: 0x05bf,
        last: 0x05bf
    },
    {
        first: 0x05c1,
        last: 0x05c2
    },
    {
        first: 0x05c4,
        last: 0x05c5
    },
    {
        first: 0x05c7,
        last: 0x05c7
    },
    {
        first: 0x0600,
        last: 0x0603
    },
    {
        first: 0x0610,
        last: 0x0615
    },
    {
        first: 0x064b,
        last: 0x065e
    },
    {
        first: 0x0670,
        last: 0x0670
    },
    {
        first: 0x06d6,
        last: 0x06e4
    },
    {
        first: 0x06e7,
        last: 0x06e8
    },
    {
        first: 0x06ea,
        last: 0x06ed
    },
    {
        first: 0x070f,
        last: 0x070f
    },
    {
        first: 0x0711,
        last: 0x0711
    },
    {
        first: 0x0730,
        last: 0x074a
    },
    {
        first: 0x07a6,
        last: 0x07b0
    },
    {
        first: 0x07eb,
        last: 0x07f3
    },
    {
        first: 0x0901,
        last: 0x0902
    },
    {
        first: 0x093c,
        last: 0x093c
    },
    {
        first: 0x0941,
        last: 0x0948
    },
    {
        first: 0x094d,
        last: 0x094d
    },
    {
        first: 0x0951,
        last: 0x0954
    },
    {
        first: 0x0962,
        last: 0x0963
    },
    {
        first: 0x0981,
        last: 0x0981
    },
    {
        first: 0x09bc,
        last: 0x09bc
    },
    {
        first: 0x09c1,
        last: 0x09c4
    },
    {
        first: 0x09cd,
        last: 0x09cd
    },
    {
        first: 0x09e2,
        last: 0x09e3
    },
    {
        first: 0x0a01,
        last: 0x0a02
    },
    {
        first: 0x0a3c,
        last: 0x0a3c
    },
    {
        first: 0x0a41,
        last: 0x0a42
    },
    {
        first: 0x0a47,
        last: 0x0a48
    },
    {
        first: 0x0a4b,
        last: 0x0a4d
    },
    {
        first: 0x0a70,
        last: 0x0a71
    },
    {
        first: 0x0a81,
        last: 0x0a82
    },
    {
        first: 0x0abc,
        last: 0x0abc
    },
    {
        first: 0x0ac1,
        last: 0x0ac5
    },
    {
        first: 0x0ac7,
        last: 0x0ac8
    },
    {
        first: 0x0acd,
        last: 0x0acd
    },
    {
        first: 0x0ae2,
        last: 0x0ae3
    },
    {
        first: 0x0b01,
        last: 0x0b01
    },
    {
        first: 0x0b3c,
        last: 0x0b3c
    },
    {
        first: 0x0b3f,
        last: 0x0b3f
    },
    {
        first: 0x0b41,
        last: 0x0b43
    },
    {
        first: 0x0b4d,
        last: 0x0b4d
    },
    {
        first: 0x0b56,
        last: 0x0b56
    },
    {
        first: 0x0b82,
        last: 0x0b82
    },
    {
        first: 0x0bc0,
        last: 0x0bc0
    },
    {
        first: 0x0bcd,
        last: 0x0bcd
    },
    {
        first: 0x0c3e,
        last: 0x0c40
    },
    {
        first: 0x0c46,
        last: 0x0c48
    },
    {
        first: 0x0c4a,
        last: 0x0c4d
    },
    {
        first: 0x0c55,
        last: 0x0c56
    },
    {
        first: 0x0cbc,
        last: 0x0cbc
    },
    {
        first: 0x0cbf,
        last: 0x0cbf
    },
    {
        first: 0x0cc6,
        last: 0x0cc6
    },
    {
        first: 0x0ccc,
        last: 0x0ccd
    },
    {
        first: 0x0ce2,
        last: 0x0ce3
    },
    {
        first: 0x0d41,
        last: 0x0d43
    },
    {
        first: 0x0d4d,
        last: 0x0d4d
    },
    {
        first: 0x0dca,
        last: 0x0dca
    },
    {
        first: 0x0dd2,
        last: 0x0dd4
    },
    {
        first: 0x0dd6,
        last: 0x0dd6
    },
    {
        first: 0x0e31,
        last: 0x0e31
    },
    {
        first: 0x0e34,
        last: 0x0e3a
    },
    {
        first: 0x0e47,
        last: 0x0e4e
    },
    {
        first: 0x0eb1,
        last: 0x0eb1
    },
    {
        first: 0x0eb4,
        last: 0x0eb9
    },
    {
        first: 0x0ebb,
        last: 0x0ebc
    },
    {
        first: 0x0ec8,
        last: 0x0ecd
    },
    {
        first: 0x0f18,
        last: 0x0f19
    },
    {
        first: 0x0f35,
        last: 0x0f35
    },
    {
        first: 0x0f37,
        last: 0x0f37
    },
    {
        first: 0x0f39,
        last: 0x0f39
    },
    {
        first: 0x0f71,
        last: 0x0f7e
    },
    {
        first: 0x0f80,
        last: 0x0f84
    },
    {
        first: 0x0f86,
        last: 0x0f87
    },
    {
        first: 0x0f90,
        last: 0x0f97
    },
    {
        first: 0x0f99,
        last: 0x0fbc
    },
    {
        first: 0x0fc6,
        last: 0x0fc6
    },
    {
        first: 0x102d,
        last: 0x1030
    },
    {
        first: 0x1032,
        last: 0x1032
    },
    {
        first: 0x1036,
        last: 0x1037
    },
    {
        first: 0x1039,
        last: 0x1039
    },
    {
        first: 0x1058,
        last: 0x1059
    },
    {
        first: 0x1160,
        last: 0x11ff
    },
    {
        first: 0x135f,
        last: 0x135f
    },
    {
        first: 0x1712,
        last: 0x1714
    },
    {
        first: 0x1732,
        last: 0x1734
    },
    {
        first: 0x1752,
        last: 0x1753
    },
    {
        first: 0x1772,
        last: 0x1773
    },
    {
        first: 0x17b4,
        last: 0x17b5
    },
    {
        first: 0x17b7,
        last: 0x17bd
    },
    {
        first: 0x17c6,
        last: 0x17c6
    },
    {
        first: 0x17c9,
        last: 0x17d3
    },
    {
        first: 0x17dd,
        last: 0x17dd
    },
    {
        first: 0x180b,
        last: 0x180d
    },
    {
        first: 0x18a9,
        last: 0x18a9
    },
    {
        first: 0x1920,
        last: 0x1922
    },
    {
        first: 0x1927,
        last: 0x1928
    },
    {
        first: 0x1932,
        last: 0x1932
    },
    {
        first: 0x1939,
        last: 0x193b
    },
    {
        first: 0x1a17,
        last: 0x1a18
    },
    {
        first: 0x1b00,
        last: 0x1b03
    },
    {
        first: 0x1b34,
        last: 0x1b34
    },
    {
        first: 0x1b36,
        last: 0x1b3a
    },
    {
        first: 0x1b3c,
        last: 0x1b3c
    },
    {
        first: 0x1b42,
        last: 0x1b42
    },
    {
        first: 0x1b6b,
        last: 0x1b73
    },
    {
        first: 0x1dc0,
        last: 0x1dca
    },
    {
        first: 0x1dfe,
        last: 0x1dff
    },
    {
        first: 0x200b,
        last: 0x200f
    },
    {
        first: 0x202a,
        last: 0x202e
    },
    {
        first: 0x2060,
        last: 0x2063
    },
    {
        first: 0x206a,
        last: 0x206f
    },
    {
        first: 0x20d0,
        last: 0x20ef
    },
    {
        first: 0x302a,
        last: 0x302f
    },
    {
        first: 0x3099,
        last: 0x309a
    },
    {
        first: 0xa806,
        last: 0xa806
    },
    {
        first: 0xa80b,
        last: 0xa80b
    },
    {
        first: 0xa825,
        last: 0xa826
    },
    {
        first: 0xfb1e,
        last: 0xfb1e
    },
    {
        first: 0xfe00,
        last: 0xfe0f
    },
    {
        first: 0xfe20,
        last: 0xfe23
    },
    {
        first: 0xfeff,
        last: 0xfeff
    },
    {
        first: 0xfff9,
        last: 0xfffb
    },
    {
        first: 0x10a01,
        last: 0x10a03
    },
    {
        first: 0x10a05,
        last: 0x10a06
    },
    {
        first: 0x10a0c,
        last: 0x10a0f
    },
    {
        first: 0x10a38,
        last: 0x10a3a
    },
    {
        first: 0x10a3f,
        last: 0x10a3f
    },
    {
        first: 0x1d167,
        last: 0x1d169
    },
    {
        first: 0x1d173,
        last: 0x1d182
    },
    {
        first: 0x1d185,
        last: 0x1d18b
    },
    {
        first: 0x1d1aa,
        last: 0x1d1ad
    },
    {
        first: 0x1d242,
        last: 0x1d244
    },
    {
        first: 0xe0001,
        last: 0xe0001
    },
    {
        first: 0xe0020,
        last: 0xe007f
    },
    {
        first: 0xe0100,
        last: 0xe01ef
    }
];
exports.default = combining;
}),
"[project]/node_modules/simple-wcswidth/dist/src/binary-search.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* auxiliary function for binary search in interval table */ const bisearch = (ucs, table, tableSize)=>{
    let min = 0;
    let mid;
    let max = tableSize;
    if (ucs < table[0].first || ucs > table[max].last) return 0;
    while(max >= min){
        mid = Math.floor((min + max) / 2);
        if (ucs > table[mid].last) {
            min = mid + 1;
        } else if (ucs < table[mid].first) {
            max = mid - 1;
        } else {
            return 1;
        }
    }
    return 0;
};
exports.default = bisearch;
}),
"[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const non_spacing_chars_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/non-spacing-chars.js [app-route] (ecmascript)"));
const binary_search_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/binary-search.js [app-route] (ecmascript)"));
/* The following two functions define the column width of an ISO 10646
 * character as follows:
 *
 *    - The null character (U+0000) has a column width of 0.
 *
 *    - Other C0/C1 control characters and DEL will lead to a return
 *      value of -1.
 *
 *    - Non-spacing and enclosing combining characters (general
 *      category code Mn or Me in the Unicode database) have a
 *      column width of 0.
 *
 *    - SOFT HYPHEN (U+00AD) has a column width of 1.
 *
 *    - Other format characters (general category code Cf in the Unicode
 *      database) and ZERO WIDTH SPACE (U+200B) have a column width of 0.
 *
 *    - Hangul Jamo medial vowels and final consonants (U+1160-U+11FF)
 *      have a column width of 0.
 *
 *    - Spacing characters in the East Asian Wide (W) or East Asian
 *      Full-width (F) category as defined in Unicode Technical
 *      Report #11 have a column width of 2.
 *
 *    - All remaining characters (including all printable
 *      ISO 8859-1 and WGL4 characters, Unicode control characters,
 *      etc.) have a column width of 1.
 *
 * This implementation assumes that wchar_t characters are encoded
 * in ISO 10646.
 */ const mk_wcwidth = (ucs)=>{
    /* test for 8-bit control characters */ if (ucs === 0) {
        return 0;
    }
    if (ucs < 32 || ucs >= 0x7f && ucs < 0xa0) {
        return -1;
    }
    /* binary search in table of non-spacing characters */ if ((0, binary_search_1.default)(ucs, non_spacing_chars_1.default, non_spacing_chars_1.default.length - 1)) {
        return 0;
    }
    /* if we arrive here, ucs is not a combining or C0/C1 control character */ return 1 + Number(ucs >= 0x1100 && (ucs <= 0x115f /* Hangul Jamo init. consonants */  || ucs === 0x2329 || ucs === 0x232a || ucs >= 0x2e80 && ucs <= 0xa4cf && ucs !== 0x303f || ucs >= 0xac00 && ucs <= 0xd7a3 || ucs >= 0xf900 && ucs <= 0xfaff || ucs >= 0xfe10 && ucs <= 0xfe19 || ucs >= 0xfe30 && ucs <= 0xfe6f || ucs >= 0xff00 && ucs <= 0xff60 || ucs >= 0xffe0 && ucs <= 0xffe6 || ucs >= 0x20000 && ucs <= 0x2fffd || ucs >= 0x30000 && ucs <= 0x3fffd));
};
exports.default = mk_wcwidth;
}),
"[project]/node_modules/simple-wcswidth/dist/src/wcswidth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const wcwidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)"));
const mk_wcswidth = (pwcs)=>{
    let width = 0;
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < pwcs.length; i++){
        const charCode = pwcs.charCodeAt(i);
        const w = (0, wcwidth_1.default)(charCode);
        if (w < 0) {
            return -1;
        }
        width += w;
    }
    return width;
};
exports.default = mk_wcswidth;
}),
"[project]/node_modules/simple-wcswidth/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wcswidth = exports.wcwidth = void 0;
const wcswidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcswidth.js [app-route] (ecmascript)"));
exports.wcswidth = wcswidth_1.default;
const wcwidth_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/simple-wcswidth/dist/src/wcwidth.js [app-route] (ecmascript)"));
exports.wcwidth = wcwidth_1.default;
}),
"[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild'\n\nfailed to convert rope into string\n\nCaused by:\n- invalid utf-8 sequence of 1 bytes from index 0");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"@esbuild/darwin-arm64","version":"0.21.5","description":"The macOS ARM 64-bit binary for esbuild, a JavaScript bundler.","repository":{"type":"git","url":"git+https://github.com/evanw/esbuild.git"},"license":"MIT","preferUnplugged":true,"engines":{"node":">=12"},"os":["darwin"],"cpu":["arm64"]});}),
"[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// lib/npm/node.ts
var node_exports = {};
__export(node_exports, {
    analyzeMetafile: ()=>analyzeMetafile,
    analyzeMetafileSync: ()=>analyzeMetafileSync,
    build: ()=>build,
    buildSync: ()=>buildSync,
    context: ()=>context,
    default: ()=>node_default,
    formatMessages: ()=>formatMessages,
    formatMessagesSync: ()=>formatMessagesSync,
    initialize: ()=>initialize,
    stop: ()=>stop,
    transform: ()=>transform,
    transformSync: ()=>transformSync,
    version: ()=>version
});
module.exports = __toCommonJS(node_exports);
// lib/shared/stdio_protocol.ts
function encodePacket(packet) {
    let visit = (value)=>{
        if (value === null) {
            bb.write8(0);
        } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
        } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
        } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
        } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
        } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value){
                visit(item);
            }
        } else {
            let keys = Object.keys(value);
            bb.write8(6);
            bb.write32(keys.length);
            for (let key of keys){
                bb.write(encodeUTF8(key));
                visit(value[key]);
            }
        }
    };
    let bb = new ByteBuffer();
    bb.write32(0);
    bb.write32(packet.id << 1 | +!packet.isRequest);
    visit(packet.value);
    writeUInt32LE(bb.buf, bb.len - 4, 0);
    return bb.buf.subarray(0, bb.len);
}
function decodePacket(bytes) {
    let visit = ()=>{
        switch(bb.read8()){
            case 0:
                return null;
            case 1:
                return !!bb.read8();
            case 2:
                return bb.read32();
            case 3:
                return decodeUTF8(bb.read());
            case 4:
                return bb.read();
            case 5:
                {
                    let count = bb.read32();
                    let value2 = [];
                    for(let i = 0; i < count; i++){
                        value2.push(visit());
                    }
                    return value2;
                }
            case 6:
                {
                    let count = bb.read32();
                    let value2 = {};
                    for(let i = 0; i < count; i++){
                        value2[decodeUTF8(bb.read())] = visit();
                    }
                    return value2;
                }
            default:
                throw new Error("Invalid packet");
        }
    };
    let bb = new ByteBuffer(bytes);
    let id = bb.read32();
    let isRequest = (id & 1) === 0;
    id >>>= 1;
    let value = visit();
    if (bb.ptr !== bytes.length) {
        throw new Error("Invalid packet");
    }
    return {
        id,
        isRequest,
        value
    };
}
var ByteBuffer = class {
    constructor(buf = new Uint8Array(1024)){
        this.buf = buf;
        this.len = 0;
        this.ptr = 0;
    }
    _write(delta) {
        if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
        }
        this.len += delta;
        return this.len - delta;
    }
    write8(value) {
        let offset = this._write(1);
        this.buf[offset] = value;
    }
    write32(value) {
        let offset = this._write(4);
        writeUInt32LE(this.buf, value, offset);
    }
    write(bytes) {
        let offset = this._write(4 + bytes.length);
        writeUInt32LE(this.buf, bytes.length, offset);
        this.buf.set(bytes, offset + 4);
    }
    _read(delta) {
        if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
        }
        this.ptr += delta;
        return this.ptr - delta;
    }
    read8() {
        return this.buf[this._read(1)];
    }
    read32() {
        return readUInt32LE(this.buf, this._read(4));
    }
    read() {
        let length = this.read32();
        let bytes = new Uint8Array(length);
        let ptr = this._read(bytes.length);
        bytes.set(this.buf.subarray(ptr, ptr + length));
        return bytes;
    }
};
var encodeUTF8;
var decodeUTF8;
var encodeInvariant;
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
    let encoder = new TextEncoder();
    let decoder = new TextDecoder();
    encodeUTF8 = (text)=>encoder.encode(text);
    decodeUTF8 = (bytes)=>decoder.decode(bytes);
    encodeInvariant = 'new TextEncoder().encode("")';
} else if (typeof Buffer !== "undefined") {
    encodeUTF8 = (text)=>Buffer.from(text);
    decodeUTF8 = (bytes)=>{
        let { buffer, byteOffset, byteLength } = bytes;
        return Buffer.from(buffer, byteOffset, byteLength).toString();
    };
    encodeInvariant = 'Buffer.from("")';
} else {
    throw new Error("No UTF-8 codec found");
}
if (!(encodeUTF8("") instanceof Uint8Array)) throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
function readUInt32LE(buffer, offset) {
    return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
}
function writeUInt32LE(buffer, value, offset) {
    buffer[offset++] = value;
    buffer[offset++] = value >> 8;
    buffer[offset++] = value >> 16;
    buffer[offset++] = value >> 24;
}
// lib/shared/common.ts
var quote = JSON.stringify;
var buildLogLevelDefault = "warning";
var transformLogLevelDefault = "silent";
function validateTarget(target) {
    validateStringValue(target, "target");
    if (target.indexOf(",") >= 0) throw new Error(`Invalid target: ${target}`);
    return target;
}
var canBeAnything = ()=>null;
var mustBeBoolean = (value)=>typeof value === "boolean" ? null : "a boolean";
var mustBeString = (value)=>typeof value === "string" ? null : "a string";
var mustBeRegExp = (value)=>value instanceof RegExp ? null : "a RegExp object";
var mustBeInteger = (value)=>typeof value === "number" && value === (value | 0) ? null : "an integer";
var mustBeFunction = (value)=>typeof value === "function" ? null : "a function";
var mustBeArray = (value)=>Array.isArray(value) ? null : "an array";
var mustBeObject = (value)=>typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
var mustBeEntryPoints = (value)=>typeof value === "object" && value !== null ? null : "an array or an object";
var mustBeWebAssemblyModule = (value)=>value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
var mustBeObjectOrNull = (value)=>typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
var mustBeStringOrBoolean = (value)=>typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
var mustBeStringOrObject = (value)=>typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
var mustBeStringOrArray = (value)=>typeof value === "string" || Array.isArray(value) ? null : "a string or an array";
var mustBeStringOrUint8Array = (value)=>typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
var mustBeStringOrURL = (value)=>typeof value === "string" || value instanceof URL ? null : "a string or a URL";
function getFlag(object, keys, key, mustBeFn) {
    let value = object[key];
    keys[key + ""] = true;
    if (value === void 0) return void 0;
    let mustBe = mustBeFn(value);
    if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
    return value;
}
function checkForInvalidFlags(object, keys, where) {
    for(let key in object){
        if (!(key in keys)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
        }
    }
}
function validateInitializeOptions(options) {
    let keys = /* @__PURE__ */ Object.create(null);
    let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
    let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
    let worker = getFlag(options, keys, "worker", mustBeBoolean);
    checkForInvalidFlags(options, keys, "in initialize() call");
    return {
        wasmURL,
        wasmModule,
        worker
    };
}
function validateMangleCache(mangleCache) {
    let validated;
    if (mangleCache !== void 0) {
        validated = /* @__PURE__ */ Object.create(null);
        for(let key in mangleCache){
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
                validated[key] = value;
            } else {
                throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
        }
    }
    return validated;
}
function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let logLevel = getFlag(options, keys, "logLevel", mustBeString);
    let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
    if (color !== void 0) flags.push(`--color=${color}`);
    else if (isTTY2) flags.push(`--color=true`);
    flags.push(`--log-level=${logLevel || logLevelDefault}`);
    flags.push(`--log-limit=${logLimit || 0}`);
}
function validateStringValue(value, what, key) {
    if (typeof value !== "string") {
        throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
    }
    return value;
}
function pushCommonFlags(flags, options, keys) {
    let legalComments = getFlag(options, keys, "legalComments", mustBeString);
    let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
    let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
    let target = getFlag(options, keys, "target", mustBeStringOrArray);
    let format = getFlag(options, keys, "format", mustBeString);
    let globalName = getFlag(options, keys, "globalName", mustBeString);
    let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
    let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
    let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
    let minify = getFlag(options, keys, "minify", mustBeBoolean);
    let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
    let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
    let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
    let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
    let drop = getFlag(options, keys, "drop", mustBeArray);
    let dropLabels = getFlag(options, keys, "dropLabels", mustBeArray);
    let charset = getFlag(options, keys, "charset", mustBeString);
    let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
    let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
    let jsx = getFlag(options, keys, "jsx", mustBeString);
    let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
    let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
    let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
    let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
    let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
    let define = getFlag(options, keys, "define", mustBeObject);
    let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
    let supported = getFlag(options, keys, "supported", mustBeObject);
    let pure = getFlag(options, keys, "pure", mustBeArray);
    let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
    let platform = getFlag(options, keys, "platform", mustBeString);
    let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
    if (legalComments) flags.push(`--legal-comments=${legalComments}`);
    if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
    if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
    if (target) {
        if (Array.isArray(target)) flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
        else flags.push(`--target=${validateTarget(target)}`);
    }
    if (format) flags.push(`--format=${format}`);
    if (globalName) flags.push(`--global-name=${globalName}`);
    if (platform) flags.push(`--platform=${platform}`);
    if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
    if (minify) flags.push("--minify");
    if (minifySyntax) flags.push("--minify-syntax");
    if (minifyWhitespace) flags.push("--minify-whitespace");
    if (minifyIdentifiers) flags.push("--minify-identifiers");
    if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
    if (charset) flags.push(`--charset=${charset}`);
    if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
    if (ignoreAnnotations) flags.push(`--ignore-annotations`);
    if (drop) for (let what of drop)flags.push(`--drop:${validateStringValue(what, "drop")}`);
    if (dropLabels) flags.push(`--drop-labels=${Array.from(dropLabels).map((what)=>validateStringValue(what, "dropLabels")).join(",")}`);
    if (mangleProps) flags.push(`--mangle-props=${mangleProps.source}`);
    if (reserveProps) flags.push(`--reserve-props=${reserveProps.source}`);
    if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
    if (jsx) flags.push(`--jsx=${jsx}`);
    if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
    if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
    if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
    if (jsxDev) flags.push(`--jsx-dev`);
    if (jsxSideEffects) flags.push(`--jsx-side-effects`);
    if (define) {
        for(let key in define){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
        }
    }
    if (logOverride) {
        for(let key in logOverride){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
        }
    }
    if (supported) {
        for(let key in supported){
            if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
        }
    }
    if (pure) for (let fn of pure)flags.push(`--pure:${validateStringValue(fn, "pure")}`);
    if (keepNames) flags.push(`--keep-names`);
}
function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
    var _a2;
    let flags = [];
    let entries = [];
    let keys = /* @__PURE__ */ Object.create(null);
    let stdinContents = null;
    let stdinResolveDir = null;
    pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
    pushCommonFlags(flags, options, keys);
    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
    let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
    let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
    let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
    let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
    let outfile = getFlag(options, keys, "outfile", mustBeString);
    let outdir = getFlag(options, keys, "outdir", mustBeString);
    let outbase = getFlag(options, keys, "outbase", mustBeString);
    let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
    let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArray);
    let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArray);
    let mainFields = getFlag(options, keys, "mainFields", mustBeArray);
    let conditions = getFlag(options, keys, "conditions", mustBeArray);
    let external = getFlag(options, keys, "external", mustBeArray);
    let packages = getFlag(options, keys, "packages", mustBeString);
    let alias = getFlag(options, keys, "alias", mustBeObject);
    let loader = getFlag(options, keys, "loader", mustBeObject);
    let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
    let publicPath = getFlag(options, keys, "publicPath", mustBeString);
    let entryNames = getFlag(options, keys, "entryNames", mustBeString);
    let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
    let assetNames = getFlag(options, keys, "assetNames", mustBeString);
    let inject = getFlag(options, keys, "inject", mustBeArray);
    let banner = getFlag(options, keys, "banner", mustBeObject);
    let footer = getFlag(options, keys, "footer", mustBeObject);
    let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
    let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
    let stdin = getFlag(options, keys, "stdin", mustBeObject);
    let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
    let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
    keys.plugins = true;
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
    if (bundle) flags.push("--bundle");
    if (allowOverwrite) flags.push("--allow-overwrite");
    if (splitting) flags.push("--splitting");
    if (preserveSymlinks) flags.push("--preserve-symlinks");
    if (metafile) flags.push(`--metafile`);
    if (outfile) flags.push(`--outfile=${outfile}`);
    if (outdir) flags.push(`--outdir=${outdir}`);
    if (outbase) flags.push(`--outbase=${outbase}`);
    if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
    if (packages) flags.push(`--packages=${packages}`);
    if (resolveExtensions) {
        let values = [];
        for (let value of resolveExtensions){
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${value}`);
            values.push(value);
        }
        flags.push(`--resolve-extensions=${values.join(",")}`);
    }
    if (publicPath) flags.push(`--public-path=${publicPath}`);
    if (entryNames) flags.push(`--entry-names=${entryNames}`);
    if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
    if (assetNames) flags.push(`--asset-names=${assetNames}`);
    if (mainFields) {
        let values = [];
        for (let value of mainFields){
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid main field: ${value}`);
            values.push(value);
        }
        flags.push(`--main-fields=${values.join(",")}`);
    }
    if (conditions) {
        let values = [];
        for (let value of conditions){
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid condition: ${value}`);
            values.push(value);
        }
        flags.push(`--conditions=${values.join(",")}`);
    }
    if (external) for (let name of external)flags.push(`--external:${validateStringValue(name, "external")}`);
    if (alias) {
        for(let old in alias){
            if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
        }
    }
    if (banner) {
        for(let type in banner){
            if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
        }
    }
    if (footer) {
        for(let type in footer){
            if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
        }
    }
    if (inject) for (let path3 of inject)flags.push(`--inject:${validateStringValue(path3, "inject")}`);
    if (loader) {
        for(let ext in loader){
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
        }
    }
    if (outExtension) {
        for(let ext in outExtension){
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
        }
    }
    if (entryPoints) {
        if (Array.isArray(entryPoints)) {
            for(let i = 0, n = entryPoints.length; i < n; i++){
                let entryPoint = entryPoints[i];
                if (typeof entryPoint === "object" && entryPoint !== null) {
                    let entryPointKeys = /* @__PURE__ */ Object.create(null);
                    let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
                    let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
                    checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
                    if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
                    if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
                    entries.push([
                        output,
                        input
                    ]);
                } else {
                    entries.push([
                        "",
                        validateStringValue(entryPoint, "entry point at index " + i)
                    ]);
                }
            }
        } else {
            for(let key in entryPoints){
                entries.push([
                    key,
                    validateStringValue(entryPoints[key], "entry point", key)
                ]);
            }
        }
    }
    if (stdin) {
        let stdinKeys = /* @__PURE__ */ Object.create(null);
        let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
        let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
        let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
        let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
        checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
        if (loader2) flags.push(`--loader=${loader2}`);
        if (resolveDir) stdinResolveDir = resolveDir;
        if (typeof contents === "string") stdinContents = encodeUTF8(contents);
        else if (contents instanceof Uint8Array) stdinContents = contents;
    }
    let nodePaths = [];
    if (nodePathsInput) {
        for (let value of nodePathsInput){
            value += "";
            nodePaths.push(value);
        }
    }
    return {
        entries,
        flags,
        write,
        stdinContents,
        stdinResolveDir,
        absWorkingDir,
        nodePaths,
        mangleCache: validateMangleCache(mangleCache)
    };
}
function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
    let flags = [];
    let keys = /* @__PURE__ */ Object.create(null);
    pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
    pushCommonFlags(flags, options, keys);
    let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
    let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
    let loader = getFlag(options, keys, "loader", mustBeString);
    let banner = getFlag(options, keys, "banner", mustBeString);
    let footer = getFlag(options, keys, "footer", mustBeString);
    let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
    if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
    if (loader) flags.push(`--loader=${loader}`);
    if (banner) flags.push(`--banner=${banner}`);
    if (footer) flags.push(`--footer=${footer}`);
    return {
        flags,
        mangleCache: validateMangleCache(mangleCache)
    };
}
function createChannel(streamIn) {
    const requestCallbacksByKey = {};
    const closeData = {
        didClose: false,
        reason: ""
    };
    let responseCallbacks = {};
    let nextRequestID = 0;
    let nextBuildKey = 0;
    let stdout = new Uint8Array(16 * 1024);
    let stdoutUsed = 0;
    let readFromStdout = (chunk)=>{
        let limit = stdoutUsed + chunk.length;
        if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
        }
        stdout.set(chunk, stdoutUsed);
        stdoutUsed += chunk.length;
        let offset = 0;
        while(offset + 4 <= stdoutUsed){
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
                break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
        }
        if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
        }
    };
    let afterClose = (error)=>{
        closeData.didClose = true;
        if (error) closeData.reason = ": " + (error.message || error);
        const text = "The service was stopped" + closeData.reason;
        for(let id in responseCallbacks){
            responseCallbacks[id](text, null);
        }
        responseCallbacks = {};
    };
    let sendRequest = (refs, value, callback)=>{
        if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
        let id = nextRequestID++;
        responseCallbacks[id] = (error, response)=>{
            try {
                callback(error, response);
            } finally{
                if (refs) refs.unref();
            }
        };
        if (refs) refs.ref();
        streamIn.writeToStdin(encodePacket({
            id,
            isRequest: true,
            value
        }));
    };
    let sendResponse = (id, value)=>{
        if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
        streamIn.writeToStdin(encodePacket({
            id,
            isRequest: false,
            value
        }));
    };
    let handleRequest = async (id, request)=>{
        try {
            if (request.command === "ping") {
                sendResponse(id, {});
                return;
            }
            if (typeof request.key === "number") {
                const requestCallbacks = requestCallbacksByKey[request.key];
                if (!requestCallbacks) {
                    return;
                }
                const callback = requestCallbacks[request.command];
                if (callback) {
                    await callback(id, request);
                    return;
                }
            }
            throw new Error(`Invalid command: ` + request.command);
        } catch (e) {
            const errors = [
                extractErrorMessageV8(e, streamIn, null, void 0, "")
            ];
            try {
                sendResponse(id, {
                    errors
                });
            } catch  {}
        }
    };
    let isFirstPacket = true;
    let handleIncomingPacket = (bytes)=>{
        if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.21.5") {
                throw new Error(`Cannot start service: Host version "${"0.21.5"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
        }
        let packet = decodePacket(bytes);
        if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
        } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error) callback(packet.value.error, {});
            else callback(null, packet.value);
        }
    };
    let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback })=>{
        let refCount = 0;
        const buildKey = nextBuildKey++;
        const requestCallbacks = {};
        const buildRefs = {
            ref () {
                if (++refCount === 1) {
                    if (refs) refs.ref();
                }
            },
            unref () {
                if (--refCount === 0) {
                    delete requestCallbacksByKey[buildKey];
                    if (refs) refs.unref();
                }
            }
        };
        requestCallbacksByKey[buildKey] = requestCallbacks;
        buildRefs.ref();
        buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, buildRefs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, (err, res)=>{
            try {
                callback(err, res);
            } finally{
                buildRefs.unref();
            }
        });
    };
    let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback })=>{
        const details = createObjectStash();
        let start = (inputPath)=>{
            try {
                if (typeof input !== "string" && !(input instanceof Uint8Array)) throw new Error('The input to "transform" must be a string or a Uint8Array');
                let { flags, mangleCache } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
                let request = {
                    command: "transform",
                    flags,
                    inputFS: inputPath !== null,
                    input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
                };
                if (mangleCache) request.mangleCache = mangleCache;
                sendRequest(refs, request, (error, response)=>{
                    if (error) return callback(new Error(error), null);
                    let errors = replaceDetailsInMessages(response.errors, details);
                    let warnings = replaceDetailsInMessages(response.warnings, details);
                    let outstanding = 1;
                    let next = ()=>{
                        if (--outstanding === 0) {
                            let result = {
                                warnings,
                                code: response.code,
                                map: response.map,
                                mangleCache: void 0,
                                legalComments: void 0
                            };
                            if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                            if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                            callback(null, result);
                        }
                    };
                    if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                    if (response.codeFS) {
                        outstanding++;
                        fs3.readFile(response.code, (err, contents)=>{
                            if (err !== null) {
                                callback(err, null);
                            } else {
                                response.code = contents;
                                next();
                            }
                        });
                    }
                    if (response.mapFS) {
                        outstanding++;
                        fs3.readFile(response.map, (err, contents)=>{
                            if (err !== null) {
                                callback(err, null);
                            } else {
                                response.map = contents;
                                next();
                            }
                        });
                    }
                    next();
                });
            } catch (e) {
                let flags = [];
                try {
                    pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
                } catch  {}
                const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
                sendRequest(refs, {
                    command: "error",
                    flags,
                    error
                }, ()=>{
                    error.detail = details.load(error.detail);
                    callback(failureErrorWithLog("Transform failed", [
                        error
                    ], []), null);
                });
            }
        };
        if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = ()=>fs3.writeFile(input, next);
        }
        start(null);
    };
    let formatMessages2 = ({ callName, refs, messages, options, callback })=>{
        if (!options) throw new Error(`Missing second argument in ${callName}() call`);
        let keys = {};
        let kind = getFlag(options, keys, "kind", mustBeString);
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
        if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
        let request = {
            command: "format-msgs",
            messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
            isWarning: kind === "warning"
        };
        if (color !== void 0) request.color = color;
        if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            callback(null, response.messages);
        });
    };
    let analyzeMetafile2 = ({ callName, refs, metafile, options, callback })=>{
        if (options === void 0) options = {};
        let keys = {};
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        let request = {
            command: "analyze-metafile",
            metafile
        };
        if (color !== void 0) request.color = color;
        if (verbose !== void 0) request.verbose = verbose;
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            callback(null, response.result);
        });
    };
    return {
        readFromStdout,
        afterClose,
        service: {
            buildOrContext,
            transform: transform2,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
        }
    };
}
function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
    const details = createObjectStash();
    const isContext = callName === "context";
    const handleError = (e, pluginName)=>{
        const flags = [];
        try {
            pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
        } catch  {}
        const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
        sendRequest(refs, {
            command: "error",
            flags,
            error: message
        }, ()=>{
            message.detail = details.load(message.detail);
            callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [
                message
            ], []), null);
        });
    };
    let plugins;
    if (typeof options === "object") {
        const value = options.plugins;
        if (value !== void 0) {
            if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
            plugins = value;
        }
    }
    if (plugins && plugins.length > 0) {
        if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
        handlePlugins(buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, plugins, details).then((result)=>{
            if (!result.ok) return handleError(result.error, result.pluginName);
            try {
                buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
            } catch (e) {
                handleError(e, "");
            }
        }, (e)=>handleError(e, ""));
        return;
    }
    try {
        buildOrContextContinue(null, (result, done)=>done([], []), ()=>{});
    } catch (e) {
        handleError(e, "");
    }
    function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
        const writeDefault = streamIn.hasFS;
        const { entries, flags, write, stdinContents, stdinResolveDir, absWorkingDir, nodePaths, mangleCache } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
        if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
        const request = {
            command: "build",
            key: buildKey,
            entries,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD2,
            nodePaths,
            context: isContext
        };
        if (requestPlugins) request.plugins = requestPlugins;
        if (mangleCache) request.mangleCache = mangleCache;
        const buildResponseToResult = (response, callback2)=>{
            const result = {
                errors: replaceDetailsInMessages(response.errors, details),
                warnings: replaceDetailsInMessages(response.warnings, details),
                outputFiles: void 0,
                metafile: void 0,
                mangleCache: void 0
            };
            const originalErrors = result.errors.slice();
            const originalWarnings = result.warnings.slice();
            if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile) result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache) result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
            runOnEndCallbacks(result, (onEndErrors, onEndWarnings)=>{
                if (originalErrors.length > 0 || onEndErrors.length > 0) {
                    const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
                    return callback2(error, null, onEndErrors, onEndWarnings);
                }
                callback2(null, result, onEndErrors, onEndWarnings);
            });
        };
        let latestResultPromise;
        let provideLatestResult;
        if (isContext) requestCallbacks["on-end"] = (id, request2)=>new Promise((resolve)=>{
                buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings)=>{
                    const response = {
                        errors: onEndErrors,
                        warnings: onEndWarnings
                    };
                    if (provideLatestResult) provideLatestResult(err, result);
                    latestResultPromise = void 0;
                    provideLatestResult = void 0;
                    sendResponse(id, response);
                    resolve();
                });
            });
        sendRequest(refs, request, (error, response)=>{
            if (error) return callback(new Error(error), null);
            if (!isContext) {
                return buildResponseToResult(response, (err, res)=>{
                    scheduleOnDisposeCallbacks();
                    return callback(err, res);
                });
            }
            if (response.errors.length > 0) {
                return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
            }
            let didDispose = false;
            const result = {
                rebuild: ()=>{
                    if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject)=>{
                        let settlePromise;
                        provideLatestResult = (err, result2)=>{
                            if (!settlePromise) settlePromise = ()=>err ? reject(err) : resolve(result2);
                        };
                        const triggerAnotherBuild = ()=>{
                            const request2 = {
                                command: "rebuild",
                                key: buildKey
                            };
                            sendRequest(refs, request2, (error2, response2)=>{
                                if (error2) {
                                    reject(new Error(error2));
                                } else if (settlePromise) {
                                    settlePromise();
                                } else {
                                    triggerAnotherBuild();
                                }
                            });
                        };
                        triggerAnotherBuild();
                    });
                    return latestResultPromise;
                },
                watch: (options2 = {})=>new Promise((resolve, reject)=>{
                        if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
                        const keys = {};
                        checkForInvalidFlags(options2, keys, `in watch() call`);
                        const request2 = {
                            command: "watch",
                            key: buildKey
                        };
                        sendRequest(refs, request2, (error2)=>{
                            if (error2) reject(new Error(error2));
                            else resolve(void 0);
                        });
                    }),
                serve: (options2 = {})=>new Promise((resolve, reject)=>{
                        if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
                        const keys = {};
                        const port = getFlag(options2, keys, "port", mustBeInteger);
                        const host = getFlag(options2, keys, "host", mustBeString);
                        const servedir = getFlag(options2, keys, "servedir", mustBeString);
                        const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
                        const certfile = getFlag(options2, keys, "certfile", mustBeString);
                        const fallback = getFlag(options2, keys, "fallback", mustBeString);
                        const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
                        checkForInvalidFlags(options2, keys, `in serve() call`);
                        const request2 = {
                            command: "serve",
                            key: buildKey,
                            onRequest: !!onRequest
                        };
                        if (port !== void 0) request2.port = port;
                        if (host !== void 0) request2.host = host;
                        if (servedir !== void 0) request2.servedir = servedir;
                        if (keyfile !== void 0) request2.keyfile = keyfile;
                        if (certfile !== void 0) request2.certfile = certfile;
                        if (fallback !== void 0) request2.fallback = fallback;
                        sendRequest(refs, request2, (error2, response2)=>{
                            if (error2) return reject(new Error(error2));
                            if (onRequest) {
                                requestCallbacks["serve-request"] = (id, request3)=>{
                                    onRequest(request3.args);
                                    sendResponse(id, {});
                                };
                            }
                            resolve(response2);
                        });
                    }),
                cancel: ()=>new Promise((resolve)=>{
                        if (didDispose) return resolve();
                        const request2 = {
                            command: "cancel",
                            key: buildKey
                        };
                        sendRequest(refs, request2, ()=>{
                            resolve();
                        });
                    }),
                dispose: ()=>new Promise((resolve)=>{
                        if (didDispose) return resolve();
                        didDispose = true;
                        const request2 = {
                            command: "dispose",
                            key: buildKey
                        };
                        sendRequest(refs, request2, ()=>{
                            resolve();
                            scheduleOnDisposeCallbacks();
                            refs.unref();
                        });
                    })
            };
            refs.ref();
            callback(null, result);
        });
    }
}
var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details)=>{
    let onStartCallbacks = [];
    let onEndCallbacks = [];
    let onResolveCallbacks = {};
    let onLoadCallbacks = {};
    let onDisposeCallbacks = [];
    let nextCallbackID = 0;
    let i = 0;
    let requestPlugins = [];
    let isSetupDone = false;
    plugins = [
        ...plugins
    ];
    for (let item of plugins){
        let keys = {};
        if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
        const name = getFlag(item, keys, "name", mustBeString);
        if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
        try {
            let setup = getFlag(item, keys, "setup", mustBeFunction);
            if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
            let plugin = {
                name,
                onStart: false,
                onEnd: false,
                onResolve: [],
                onLoad: []
            };
            i++;
            let resolve = (path3, options = {})=>{
                if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
                if (typeof path3 !== "string") throw new Error(`The path to resolve must be a string`);
                let keys2 = /* @__PURE__ */ Object.create(null);
                let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
                let importer = getFlag(options, keys2, "importer", mustBeString);
                let namespace = getFlag(options, keys2, "namespace", mustBeString);
                let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
                let kind = getFlag(options, keys2, "kind", mustBeString);
                let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
                let importAttributes = getFlag(options, keys2, "with", mustBeObject);
                checkForInvalidFlags(options, keys2, "in resolve() call");
                return new Promise((resolve2, reject)=>{
                    const request = {
                        command: "resolve",
                        path: path3,
                        key: buildKey,
                        pluginName: name
                    };
                    if (pluginName != null) request.pluginName = pluginName;
                    if (importer != null) request.importer = importer;
                    if (namespace != null) request.namespace = namespace;
                    if (resolveDir != null) request.resolveDir = resolveDir;
                    if (kind != null) request.kind = kind;
                    else throw new Error(`Must specify "kind" when calling "resolve"`);
                    if (pluginData != null) request.pluginData = details.store(pluginData);
                    if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
                    sendRequest(refs, request, (error, response)=>{
                        if (error !== null) reject(new Error(error));
                        else resolve2({
                            errors: replaceDetailsInMessages(response.errors, details),
                            warnings: replaceDetailsInMessages(response.warnings, details),
                            path: response.path,
                            external: response.external,
                            sideEffects: response.sideEffects,
                            namespace: response.namespace,
                            suffix: response.suffix,
                            pluginData: details.load(response.pluginData)
                        });
                    });
                });
            };
            let promise = setup({
                initialOptions,
                resolve,
                onStart (callback) {
                    let registeredText = `This error came from the "onStart" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                    onStartCallbacks.push({
                        name,
                        callback,
                        note: registeredNote
                    });
                    plugin.onStart = true;
                },
                onEnd (callback) {
                    let registeredText = `This error came from the "onEnd" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                    onEndCallbacks.push({
                        name,
                        callback,
                        note: registeredNote
                    });
                    plugin.onEnd = true;
                },
                onResolve (options, callback) {
                    let registeredText = `This error came from the "onResolve" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                    let keys2 = {};
                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                    checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
                    if (filter == null) throw new Error(`onResolve() call is missing a filter`);
                    let id = nextCallbackID++;
                    onResolveCallbacks[id] = {
                        name,
                        callback,
                        note: registeredNote
                    };
                    plugin.onResolve.push({
                        id,
                        filter: filter.source,
                        namespace: namespace || ""
                    });
                },
                onLoad (options, callback) {
                    let registeredText = `This error came from the "onLoad" callback registered here:`;
                    let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                    let keys2 = {};
                    let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                    let namespace = getFlag(options, keys2, "namespace", mustBeString);
                    checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
                    if (filter == null) throw new Error(`onLoad() call is missing a filter`);
                    let id = nextCallbackID++;
                    onLoadCallbacks[id] = {
                        name,
                        callback,
                        note: registeredNote
                    };
                    plugin.onLoad.push({
                        id,
                        filter: filter.source,
                        namespace: namespace || ""
                    });
                },
                onDispose (callback) {
                    onDisposeCallbacks.push(callback);
                },
                esbuild: streamIn.esbuild
            });
            if (promise) await promise;
            requestPlugins.push(plugin);
        } catch (e) {
            return {
                ok: false,
                error: e,
                pluginName: name
            };
        }
    }
    requestCallbacks["on-start"] = async (id, request)=>{
        let response = {
            errors: [],
            warnings: []
        };
        await Promise.all(onStartCallbacks.map(async ({ name, callback, note })=>{
            try {
                let result = await callback();
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
                    if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
                    if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
                }
            } catch (e) {
                response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
        }));
        sendResponse(id, response);
    };
    requestCallbacks["on-resolve"] = async (id, request)=>{
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids){
            try {
                ({ name, callback, note } = onResolveCallbacks[id2]);
                let result = await callback({
                    path: request.path,
                    importer: request.importer,
                    namespace: request.namespace,
                    resolveDir: request.resolveDir,
                    kind: request.kind,
                    pluginData: details.load(request.pluginData),
                    with: request.with
                });
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                    let path3 = getFlag(result, keys, "path", mustBeString);
                    let namespace = getFlag(result, keys, "namespace", mustBeString);
                    let suffix = getFlag(result, keys, "suffix", mustBeString);
                    let external = getFlag(result, keys, "external", mustBeBoolean);
                    let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
                    response.id = id2;
                    if (pluginName != null) response.pluginName = pluginName;
                    if (path3 != null) response.path = path3;
                    if (namespace != null) response.namespace = namespace;
                    if (suffix != null) response.suffix = suffix;
                    if (external != null) response.external = external;
                    if (sideEffects != null) response.sideEffects = sideEffects;
                    if (pluginData != null) response.pluginData = details.store(pluginData);
                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                    break;
                }
            } catch (e) {
                response = {
                    id: id2,
                    errors: [
                        extractErrorMessageV8(e, streamIn, details, note && note(), name)
                    ]
                };
                break;
            }
        }
        sendResponse(id, response);
    };
    requestCallbacks["on-load"] = async (id, request)=>{
        let response = {}, name = "", callback, note;
        for (let id2 of request.ids){
            try {
                ({ name, callback, note } = onLoadCallbacks[id2]);
                let result = await callback({
                    path: request.path,
                    namespace: request.namespace,
                    suffix: request.suffix,
                    pluginData: details.load(request.pluginData),
                    with: request.with
                });
                if (result != null) {
                    if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                    let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
                    let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
                    let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                    let loader = getFlag(result, keys, "loader", mustBeString);
                    let errors = getFlag(result, keys, "errors", mustBeArray);
                    let warnings = getFlag(result, keys, "warnings", mustBeArray);
                    let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                    let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                    checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
                    response.id = id2;
                    if (pluginName != null) response.pluginName = pluginName;
                    if (contents instanceof Uint8Array) response.contents = contents;
                    else if (contents != null) response.contents = encodeUTF8(contents);
                    if (resolveDir != null) response.resolveDir = resolveDir;
                    if (pluginData != null) response.pluginData = details.store(pluginData);
                    if (loader != null) response.loader = loader;
                    if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                    if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                    if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                    if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                    break;
                }
            } catch (e) {
                response = {
                    id: id2,
                    errors: [
                        extractErrorMessageV8(e, streamIn, details, note && note(), name)
                    ]
                };
                break;
            }
        }
        sendResponse(id, response);
    };
    let runOnEndCallbacks = (result, done)=>done([], []);
    if (onEndCallbacks.length > 0) {
        runOnEndCallbacks = (result, done)=>{
            (async ()=>{
                const onEndErrors = [];
                const onEndWarnings = [];
                for (const { name, callback, note } of onEndCallbacks){
                    let newErrors;
                    let newWarnings;
                    try {
                        const value = await callback(result);
                        if (value != null) {
                            if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
                            let keys = {};
                            let errors = getFlag(value, keys, "errors", mustBeArray);
                            let warnings = getFlag(value, keys, "warnings", mustBeArray);
                            checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
                            if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                            if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                        }
                    } catch (e) {
                        newErrors = [
                            extractErrorMessageV8(e, streamIn, details, note && note(), name)
                        ];
                    }
                    if (newErrors) {
                        onEndErrors.push(...newErrors);
                        try {
                            result.errors.push(...newErrors);
                        } catch  {}
                    }
                    if (newWarnings) {
                        onEndWarnings.push(...newWarnings);
                        try {
                            result.warnings.push(...newWarnings);
                        } catch  {}
                    }
                }
                done(onEndErrors, onEndWarnings);
            })();
        };
    }
    let scheduleOnDisposeCallbacks = ()=>{
        for (const cb of onDisposeCallbacks){
            setTimeout(()=>cb(), 0);
        }
    };
    isSetupDone = true;
    return {
        ok: true,
        requestPlugins,
        runOnEndCallbacks,
        scheduleOnDisposeCallbacks
    };
};
function createObjectStash() {
    const map = /* @__PURE__ */ new Map();
    let nextID = 0;
    return {
        load (id) {
            return map.get(id);
        },
        store (value) {
            if (value === void 0) return -1;
            const id = nextID++;
            map.set(id, value);
            return id;
        }
    };
}
function extractCallerV8(e, streamIn, ident) {
    let note;
    let tried = false;
    return ()=>{
        if (tried) return note;
        tried = true;
        try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location = parseStackLinesV8(streamIn, lines, ident);
            if (location) {
                note = {
                    text: e.message,
                    location
                };
                return note;
            }
        } catch  {}
    };
}
function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
    let text = "Internal error";
    let location = null;
    try {
        text = (e && e.message || e) + "";
    } catch  {}
    try {
        location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
    } catch  {}
    return {
        id: "",
        pluginName,
        text,
        location,
        notes: note ? [
            note
        ] : [],
        detail: stash ? stash.store(e) : -1
    };
}
function parseStackLinesV8(streamIn, lines, ident) {
    let at = "    at ";
    if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
        for(let i = 1; i < lines.length; i++){
            let line = lines[i];
            if (!line.startsWith(at)) continue;
            line = line.slice(at.length);
            while(true){
                let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
                if (match) {
                    line = match[1];
                    continue;
                }
                match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
                if (match) {
                    line = match[1];
                    continue;
                }
                match = /^(\S+):(\d+):(\d+)$/.exec(line);
                if (match) {
                    let contents;
                    try {
                        contents = streamIn.readFileSync(match[1], "utf8");
                    } catch  {
                        break;
                    }
                    let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                    let column = +match[3] - 1;
                    let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                    return {
                        file: match[1],
                        namespace: "file",
                        line: +match[2],
                        column: encodeUTF8(lineText.slice(0, column)).length,
                        length: encodeUTF8(lineText.slice(column, column + length)).length,
                        lineText: lineText + "\n" + lines.slice(1).join("\n"),
                        suggestion: ""
                    };
                }
                break;
            }
        }
    }
    return null;
}
function failureErrorWithLog(text, errors, warnings) {
    let limit = 5;
    text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i)=>{
        if (i === limit) return "\n...";
        if (!e.location) return `
error: ${e.text}`;
        let { file, line, column } = e.location;
        let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
        return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
    }).join("");
    let error = new Error(text);
    for (const [key, value] of [
        [
            "errors",
            errors
        ],
        [
            "warnings",
            warnings
        ]
    ]){
        Object.defineProperty(error, key, {
            configurable: true,
            enumerable: true,
            get: ()=>value,
            set: (value2)=>Object.defineProperty(error, key, {
                    configurable: true,
                    enumerable: true,
                    value: value2
                })
        });
    }
    return error;
}
function replaceDetailsInMessages(messages, stash) {
    for (const message of messages){
        message.detail = stash.load(message.detail);
    }
    return messages;
}
function sanitizeLocation(location, where, terminalWidth) {
    if (location == null) return null;
    let keys = {};
    let file = getFlag(location, keys, "file", mustBeString);
    let namespace = getFlag(location, keys, "namespace", mustBeString);
    let line = getFlag(location, keys, "line", mustBeInteger);
    let column = getFlag(location, keys, "column", mustBeInteger);
    let length = getFlag(location, keys, "length", mustBeInteger);
    let lineText = getFlag(location, keys, "lineText", mustBeString);
    let suggestion = getFlag(location, keys, "suggestion", mustBeString);
    checkForInvalidFlags(location, keys, where);
    if (lineText) {
        const relevantASCII = lineText.slice(0, (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80));
        if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
            lineText = relevantASCII;
        }
    }
    return {
        file: file || "",
        namespace: namespace || "",
        line: line || 0,
        column: column || 0,
        length: length || 0,
        lineText: lineText || "",
        suggestion: suggestion || ""
    };
}
function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
    let messagesClone = [];
    let index = 0;
    for (const message of messages){
        let keys = {};
        let id = getFlag(message, keys, "id", mustBeString);
        let pluginName = getFlag(message, keys, "pluginName", mustBeString);
        let text = getFlag(message, keys, "text", mustBeString);
        let location = getFlag(message, keys, "location", mustBeObjectOrNull);
        let notes = getFlag(message, keys, "notes", mustBeArray);
        let detail = getFlag(message, keys, "detail", canBeAnything);
        let where = `in element ${index} of "${property}"`;
        checkForInvalidFlags(message, keys, where);
        let notesClone = [];
        if (notes) {
            for (const note of notes){
                let noteKeys = {};
                let noteText = getFlag(note, noteKeys, "text", mustBeString);
                let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
                checkForInvalidFlags(note, noteKeys, where);
                notesClone.push({
                    text: noteText || "",
                    location: sanitizeLocation(noteLocation, where, terminalWidth)
                });
            }
        }
        messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location, where, terminalWidth),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
        });
        index++;
    }
    return messagesClone;
}
function sanitizeStringArray(values, property) {
    const result = [];
    for (const value of values){
        if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
        result.push(value);
    }
    return result;
}
function sanitizeStringMap(map, property) {
    const result = /* @__PURE__ */ Object.create(null);
    for(const key in map){
        const value = map[key];
        if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
        result[key] = value;
    }
    return result;
}
function convertOutputFiles({ path: path3, contents, hash }) {
    let text = null;
    return {
        path: path3,
        contents,
        hash,
        get text () {
            const binary = this.contents;
            if (text === null || binary !== contents) {
                contents = binary;
                text = decodeUTF8(binary);
            }
            return text;
        }
    };
}
// lib/npm/node-platform.ts
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
var isValidBinaryPath = (x)=>!!x && x !== "/usr/bin/esbuild";
var packageDarwin_arm64 = "@esbuild/darwin-arm64";
var packageDarwin_x64 = "@esbuild/darwin-x64";
var knownWindowsPackages = {
    "win32 arm64 LE": "@esbuild/win32-arm64",
    "win32 ia32 LE": "@esbuild/win32-ia32",
    "win32 x64 LE": "@esbuild/win32-x64"
};
var knownUnixlikePackages = {
    "aix ppc64 BE": "@esbuild/aix-ppc64",
    "android arm64 LE": "@esbuild/android-arm64",
    "darwin arm64 LE": "@esbuild/darwin-arm64",
    "darwin x64 LE": "@esbuild/darwin-x64",
    "freebsd arm64 LE": "@esbuild/freebsd-arm64",
    "freebsd x64 LE": "@esbuild/freebsd-x64",
    "linux arm LE": "@esbuild/linux-arm",
    "linux arm64 LE": "@esbuild/linux-arm64",
    "linux ia32 LE": "@esbuild/linux-ia32",
    "linux mips64el LE": "@esbuild/linux-mips64el",
    "linux ppc64 LE": "@esbuild/linux-ppc64",
    "linux riscv64 LE": "@esbuild/linux-riscv64",
    "linux s390x BE": "@esbuild/linux-s390x",
    "linux x64 LE": "@esbuild/linux-x64",
    "linux loong64 LE": "@esbuild/linux-loong64",
    "netbsd x64 LE": "@esbuild/netbsd-x64",
    "openbsd x64 LE": "@esbuild/openbsd-x64",
    "sunos x64 LE": "@esbuild/sunos-x64"
};
var knownWebAssemblyFallbackPackages = {
    "android arm LE": "@esbuild/android-arm",
    "android x64 LE": "@esbuild/android-x64"
};
function pkgAndSubpathForCurrentPlatform() {
    let pkg;
    let subpath;
    let isWASM = false;
    let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
    if (platformKey in knownWindowsPackages) {
        pkg = knownWindowsPackages[platformKey];
        subpath = "esbuild.exe";
    } else if (platformKey in knownUnixlikePackages) {
        pkg = knownUnixlikePackages[platformKey];
        subpath = "bin/esbuild";
    } else if (platformKey in knownWebAssemblyFallbackPackages) {
        pkg = knownWebAssemblyFallbackPackages[platformKey];
        subpath = "bin/esbuild";
        isWASM = true;
    } else {
        throw new Error(`Unsupported platform: ${platformKey}`);
    }
    return {
        pkg,
        subpath,
        isWASM
    };
}
function pkgForSomeOtherPlatform() {
    const libMainJS = "[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)";
    const nodeModulesDirectory = path.dirname(path.dirname(path.dirname(libMainJS)));
    if (path.basename(nodeModulesDirectory) === "node_modules") {
        for(const unixKey in knownUnixlikePackages){
            try {
                const pkg = knownUnixlikePackages[unixKey];
                if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
            } catch  {}
        }
        for(const windowsKey in knownWindowsPackages){
            try {
                const pkg = knownWindowsPackages[windowsKey];
                if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
            } catch  {}
        }
    }
    return null;
}
function downloadedBinPath(pkg, subpath) {
    const esbuildLibDir = path.dirname("[project]/node_modules/esbuild/lib/main.js [app-route] (ecmascript)");
    return path.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path.basename(subpath)}`);
}
function generateBinPath() {
    if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
        if (!fs.existsSync(ESBUILD_BINARY_PATH)) {
            console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
        } else {
            return {
                binPath: ESBUILD_BINARY_PATH,
                isWASM: false
            };
        }
    }
    const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
    let binPath;
    try {
        binPath = __turbopack_context__.f({
            "@esbuild/darwin-arm64/README.md": {
                id: ()=>(()=>{
                        const e = new Error("Cannot find module 'unknown module type'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })(),
                module: ()=>(()=>{
                        const e = new Error("Cannot find module 'unknown module type'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })()
            },
            "@esbuild/darwin-arm64/bin/esbuild": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/bin/esbuild [app-route] (ecmascript)")
            },
            "@esbuild/darwin-arm64/package.json": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/package.json (json)")
            },
            "@esbuild/darwin-arm64/package": {
                id: ()=>"[project]/node_modules/@esbuild/darwin-arm64/package.json (json)",
                module: ()=>__turbopack_context__.r("[project]/node_modules/@esbuild/darwin-arm64/package.json (json)")
            }
        }).resolve(`${pkg}/${subpath}`);
    } catch (e1) {
        binPath = downloadedBinPath(pkg, subpath);
        if (!fs.existsSync(binPath)) {
            try {
                (()=>{
                    const e = new Error("Cannot find module 'unknown'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })();
            } catch  {
                const otherPkg = pkgForSomeOtherPlatform();
                if (otherPkg) {
                    let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
                    if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) {
                        suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
                    }
                    throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
                }
                throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
            }
            throw e1;
        }
    }
    if (/\.zip\//.test(binPath)) {
        let pnpapi;
        try {
            pnpapi = __turbopack_context__.r("[externals]/pnpapi [external] (pnpapi, cjs)");
        } catch (e) {}
        if (pnpapi) {
            const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
            const binTargetPath = path.join(root, "node_modules", ".cache", "esbuild", `pnpapi-${pkg.replace("/", "-")}-${"0.21.5"}-${path.basename(subpath)}`);
            if (!fs.existsSync(binTargetPath)) {
                fs.mkdirSync(path.dirname(binTargetPath), {
                    recursive: true
                });
                fs.copyFileSync(binPath, binTargetPath);
                fs.chmodSync(binTargetPath, 493);
            }
            return {
                binPath: binTargetPath,
                isWASM
            };
        }
    }
    return {
        binPath,
        isWASM
    };
}
// lib/npm/node.ts
var child_process = __turbopack_context__.r("[externals]/child_process [external] (child_process, cjs)");
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var path2 = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var fs2 = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var os2 = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
var tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
var worker_threads;
if (process.env.ESBUILD_WORKER_THREADS !== "0") {
    try {
        worker_threads = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
    } catch  {}
    let [major, minor] = process.versions.node.split(".");
    if (// <v12.17.0 does not work
    +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13) {
        worker_threads = void 0;
    }
}
var _a;
var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.21.5";
var esbuildCommandAndArgs = ()=>{
    if ((!ESBUILD_BINARY_PATH || false) && (path2.basename(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js")) !== "main.js" || path2.basename(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib")) !== "lib")) {
        throw new Error(`The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js")}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const { binPath, isWASM } = generateBinPath();
        if (isWASM) {
            return [
                "node",
                [
                    binPath
                ]
            ];
        } else {
            return [
                binPath,
                []
            ];
        }
    }
};
var isTTY = ()=>tty.isatty(2);
var fsSync = {
    readFile (tempFile, callback) {
        try {
            let contents = fs2.readFileSync(tempFile, "utf8");
            try {
                fs2.unlinkSync(tempFile);
            } catch  {}
            callback(null, contents);
        } catch (err) {
            callback(err, null);
        }
    },
    writeFile (contents, callback) {
        try {
            let tempFile = randomFileName();
            fs2.writeFileSync(tempFile, contents);
            callback(tempFile);
        } catch  {
            callback(null);
        }
    }
};
var fsAsync = {
    readFile (tempFile, callback) {
        try {
            fs2.readFile(tempFile, "utf8", (err, contents)=>{
                try {
                    fs2.unlink(tempFile, ()=>callback(err, contents));
                } catch  {
                    callback(err, contents);
                }
            });
        } catch (err) {
            callback(err, null);
        }
    },
    writeFile (contents, callback) {
        try {
            let tempFile = randomFileName();
            fs2.writeFile(tempFile, contents, (err)=>err !== null ? callback(null) : callback(tempFile));
        } catch  {
            callback(null);
        }
    }
};
var version = "0.21.5";
var build = (options)=>ensureServiceIsRunning().build(options);
var context = (buildOptions)=>ensureServiceIsRunning().context(buildOptions);
var transform = (input, options)=>ensureServiceIsRunning().transform(input, options);
var formatMessages = (messages, options)=>ensureServiceIsRunning().formatMessages(messages, options);
var analyzeMetafile = (messages, options)=>ensureServiceIsRunning().analyzeMetafile(messages, options);
var buildSync = (options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.buildSync(options);
    }
    let result;
    runServiceSync((service)=>service.buildOrContext({
            callName: "buildSync",
            refs: null,
            options,
            isTTY: isTTY(),
            defaultWD,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var transformSync = (input, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.transformSync(input, options);
    }
    let result;
    runServiceSync((service)=>service.transform({
            callName: "transformSync",
            refs: null,
            input,
            options: options || {},
            isTTY: isTTY(),
            fs: fsSync,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var formatMessagesSync = (messages, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.formatMessagesSync(messages, options);
    }
    let result;
    runServiceSync((service)=>service.formatMessages({
            callName: "formatMessagesSync",
            refs: null,
            messages,
            options,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var analyzeMetafileSync = (metafile, options)=>{
    if (worker_threads && !isInternalWorkerThread) {
        if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
        return workerThreadService.analyzeMetafileSync(metafile, options);
    }
    let result;
    runServiceSync((service)=>service.analyzeMetafile({
            callName: "analyzeMetafileSync",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: (err, res)=>{
                if (err) throw err;
                result = res;
            }
        }));
    return result;
};
var stop = ()=>{
    if (stopService) stopService();
    if (workerThreadService) workerThreadService.stop();
    return Promise.resolve();
};
var initializeWasCalled = false;
var initialize = (options)=>{
    options = validateInitializeOptions(options || {});
    if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
    if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
    if (options.worker) throw new Error(`The "worker" option only works in the browser`);
    if (initializeWasCalled) throw new Error('Cannot call "initialize" more than once');
    ensureServiceIsRunning();
    initializeWasCalled = true;
    return Promise.resolve();
};
var defaultWD = process.cwd();
var longLivedService;
var stopService;
var ensureServiceIsRunning = ()=>{
    if (longLivedService) return longLivedService;
    let [command, args] = esbuildCommandAndArgs();
    let child = child_process.spawn(command, args.concat(`--service=${"0.21.5"}`, "--ping"), {
        windowsHide: true,
        stdio: [
            "pipe",
            "pipe",
            "inherit"
        ],
        cwd: defaultWD
    });
    let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin (bytes) {
            child.stdin.write(bytes, (err)=>{
                if (err) afterClose(err);
            });
        },
        readFileSync: fs2.readFileSync,
        isSync: false,
        hasFS: true,
        esbuild: node_exports
    });
    child.stdin.on("error", afterClose);
    child.on("error", afterClose);
    const stdin = child.stdin;
    const stdout = child.stdout;
    stdout.on("data", readFromStdout);
    stdout.on("end", afterClose);
    stopService = ()=>{
        stdin.destroy();
        stdout.destroy();
        child.kill();
        initializeWasCalled = false;
        longLivedService = void 0;
        stopService = void 0;
    };
    let refCount = 0;
    child.unref();
    if (stdin.unref) {
        stdin.unref();
    }
    if (stdout.unref) {
        stdout.unref();
    }
    const refs = {
        ref () {
            if (++refCount === 1) child.ref();
        },
        unref () {
            if (--refCount === 0) child.unref();
        }
    };
    longLivedService = {
        build: (options)=>new Promise((resolve, reject)=>{
                service.buildOrContext({
                    callName: "build",
                    refs,
                    options,
                    isTTY: isTTY(),
                    defaultWD,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                });
            }),
        context: (options)=>new Promise((resolve, reject)=>service.buildOrContext({
                    callName: "context",
                    refs,
                    options,
                    isTTY: isTTY(),
                    defaultWD,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        transform: (input, options)=>new Promise((resolve, reject)=>service.transform({
                    callName: "transform",
                    refs,
                    input,
                    options: options || {},
                    isTTY: isTTY(),
                    fs: fsAsync,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        formatMessages: (messages, options)=>new Promise((resolve, reject)=>service.formatMessages({
                    callName: "formatMessages",
                    refs,
                    messages,
                    options,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                })),
        analyzeMetafile: (metafile, options)=>new Promise((resolve, reject)=>service.analyzeMetafile({
                    callName: "analyzeMetafile",
                    refs,
                    metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
                    options,
                    callback: (err, res)=>err ? reject(err) : resolve(res)
                }))
    };
    return longLivedService;
};
var runServiceSync = (callback)=>{
    let [command, args] = esbuildCommandAndArgs();
    let stdin = new Uint8Array();
    let { readFromStdout, afterClose, service } = createChannel({
        writeToStdin (bytes) {
            if (stdin.length !== 0) throw new Error("Must run at most one command");
            stdin = bytes;
        },
        isSync: true,
        hasFS: true,
        esbuild: node_exports
    });
    callback(service);
    let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.21.5"}`), {
        cwd: defaultWD,
        windowsHide: true,
        input: stdin,
        // We don't know how large the output could be. If it's too large, the
        // command will fail with ENOBUFS. Reserve 16mb for now since that feels
        // like it should be enough. Also allow overriding this with an environment
        // variable.
        maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
    });
    readFromStdout(stdout);
    afterClose(null);
};
var randomFileName = ()=>{
    return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
};
var workerThreadService = null;
var startWorkerThreadService = (worker_threads2)=>{
    let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
    let worker = new worker_threads2.Worker(("TURBOPACK compile-time value", "/ROOT/node_modules/esbuild/lib/main.js"), {
        workerData: {
            workerPort,
            defaultWD,
            esbuildVersion: "0.21.5"
        },
        transferList: [
            workerPort
        ],
        // From node's documentation: https://nodejs.org/api/worker_threads.html
        //
        //   Take care when launching worker threads from preload scripts (scripts loaded
        //   and run using the `-r` command line flag). Unless the `execArgv` option is
        //   explicitly set, new Worker threads automatically inherit the command line flags
        //   from the running process and will preload the same preload scripts as the main
        //   thread. If the preload script unconditionally launches a worker thread, every
        //   thread spawned will spawn another until the application crashes.
        //
        execArgv: []
    });
    let nextID = 0;
    let fakeBuildError = (text)=>{
        let error = new Error(`Build failed with 1 error:
error: ${text}`);
        let errors = [
            {
                id: "",
                pluginName: "",
                text,
                location: null,
                notes: [],
                detail: void 0
            }
        ];
        error.errors = errors;
        error.warnings = [];
        return error;
    };
    let validateBuildSyncOptions = (options)=>{
        if (!options) return;
        let plugins = options.plugins;
        if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
    };
    let applyProperties = (object, properties)=>{
        for(let key in properties){
            object[key] = properties[key];
        }
    };
    let runCallSync = (command, args)=>{
        let id = nextID++;
        let sharedBuffer = new SharedArrayBuffer(8);
        let sharedBufferView = new Int32Array(sharedBuffer);
        let msg = {
            sharedBuffer,
            id,
            command,
            args
        };
        worker.postMessage(msg);
        let status = Atomics.wait(sharedBufferView, 0, 0);
        if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
        let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
        if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
        if (reject) {
            applyProperties(reject, properties);
            throw reject;
        }
        return resolve;
    };
    worker.unref();
    return {
        buildSync (options) {
            validateBuildSyncOptions(options);
            return runCallSync("build", [
                options
            ]);
        },
        transformSync (input, options) {
            return runCallSync("transform", [
                input,
                options
            ]);
        },
        formatMessagesSync (messages, options) {
            return runCallSync("formatMessages", [
                messages,
                options
            ]);
        },
        analyzeMetafileSync (metafile, options) {
            return runCallSync("analyzeMetafile", [
                metafile,
                options
            ]);
        },
        stop () {
            worker.terminate();
            workerThreadService = null;
        }
    };
};
var startSyncServiceWorker = ()=>{
    let workerPort = worker_threads.workerData.workerPort;
    let parentPort = worker_threads.parentPort;
    let extractProperties = (object)=>{
        let properties = {};
        if (object && typeof object === "object") {
            for(let key in object){
                properties[key] = object[key];
            }
        }
        return properties;
    };
    try {
        let service = ensureServiceIsRunning();
        defaultWD = worker_threads.workerData.defaultWD;
        parentPort.on("message", (msg)=>{
            (async ()=>{
                let { sharedBuffer, id, command, args } = msg;
                let sharedBufferView = new Int32Array(sharedBuffer);
                try {
                    switch(command){
                        case "build":
                            workerPort.postMessage({
                                id,
                                resolve: await service.build(args[0])
                            });
                            break;
                        case "transform":
                            workerPort.postMessage({
                                id,
                                resolve: await service.transform(args[0], args[1])
                            });
                            break;
                        case "formatMessages":
                            workerPort.postMessage({
                                id,
                                resolve: await service.formatMessages(args[0], args[1])
                            });
                            break;
                        case "analyzeMetafile":
                            workerPort.postMessage({
                                id,
                                resolve: await service.analyzeMetafile(args[0], args[1])
                            });
                            break;
                        default:
                            throw new Error(`Invalid command: ${command}`);
                    }
                } catch (reject) {
                    workerPort.postMessage({
                        id,
                        reject,
                        properties: extractProperties(reject)
                    });
                }
                Atomics.add(sharedBufferView, 0, 1);
                Atomics.notify(sharedBufferView, 0, Infinity);
            })();
        });
    } catch (reject) {
        parentPort.on("message", (msg)=>{
            let { sharedBuffer, id } = msg;
            let sharedBufferView = new Int32Array(sharedBuffer);
            workerPort.postMessage({
                id,
                reject,
                properties: extractProperties(reject)
            });
            Atomics.add(sharedBufferView, 0, 1);
            Atomics.notify(sharedBufferView, 0, Infinity);
        });
    }
};
if (isInternalWorkerThread) {
    startSyncServiceWorker();
}
var node_default = node_exports;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    analyzeMetafile,
    analyzeMetafileSync,
    build,
    buildSync,
    context,
    formatMessages,
    formatMessagesSync,
    initialize,
    stop,
    transform,
    transformSync,
    version
});
}),
"[project]/node_modules/ms/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/debug/src/common.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-route] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
        const len = split.length;
        for(i = 0; i < len; i++){
            if (!split[i]) {
                continue;
            }
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
            } else {
                createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names.map(toNamespace),
            ...createDebug.skips.map(toNamespace).map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        if (name[name.length - 1] === '*') {
            return true;
        }
        let i;
        let len;
        for(i = 0, len = createDebug.skips.length; i < len; i++){
            if (createDebug.skips[i].test(name)) {
                return false;
            }
        }
        for(i = 0, len = createDebug.names.length; i < len; i++){
            if (createDebug.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/ function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/debug/src/node.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/node_modules/supports-color/index.js [app-route] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-route] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/debug/src/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/browser.js [app-route] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/node.js [app-route] (ecmascript)");
}
}),
"[project]/node_modules/has-flag/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/node_modules/supports-color/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/node_modules/has-flag/index.js [app-route] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/dequal/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dequal",
    ()=>dequal
]);
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === 'object') {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === 'object') {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
}),
"[project]/node_modules/@payloadcms/db-postgres/dist/connect.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "connect",
    ()=>connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$pushDevSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/pushDevSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectWithReconnect = async function({ adapter, pool, reconnect = false }) {
    let result;
    if (!reconnect) {
        result = await pool.connect();
    } else {
        try {
            result = await pool.connect();
        } catch (ignore) {
            setTimeout(()=>{
                adapter.payload.logger.info('Reconnecting to postgres');
                void connectWithReconnect({
                    adapter,
                    pool,
                    reconnect: true
                });
            }, 1000);
        }
    }
    if (!result) {
        return;
    }
    result.prependListener('error', (err)=>{
        try {
            if (err.code === 'ECONNRESET') {
                void connectWithReconnect({
                    adapter,
                    pool,
                    reconnect: true
                });
            }
        } catch (ignore) {
        // swallow error
        }
    });
};
const connect = async function connect(options = {
    hotReload: false
}) {
    const { hotReload } = options;
    try {
        if (!this.pool) {
            this.pool = new this.pg.Pool(this.poolOptions);
            await connectWithReconnect({
                adapter: this,
                pool: this.pool
            });
        }
        const logger = this.logger || false;
        this.drizzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])({
            client: this.pool,
            logger,
            schema: this.schema
        });
        if (this.readReplicaOptions) {
            const readReplicas = this.readReplicaOptions.map((connectionString)=>{
                const options = {
                    ...this.poolOptions,
                    connectionString
                };
                const pool = new this.pg.Pool(options);
                void connectWithReconnect({
                    adapter: this,
                    pool
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])({
                    client: pool,
                    logger,
                    schema: this.schema
                });
            });
            const myReplicas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withReplicas"])(this.drizzle, readReplicas);
            this.drizzle = myReplicas;
        }
        if (!hotReload) {
            if (process.env.PAYLOAD_DROP_DATABASE === 'true') {
                this.payload.logger.info(`---- DROPPING TABLES SCHEMA(${this.schemaName || 'public'}) ----`);
                await this.dropDatabase({
                    adapter: this
                });
                this.payload.logger.info('---- DROPPED TABLES ----');
            }
        }
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        if (err.message?.match(/database .* does not exist/i) && !this.disableCreateDatabase) {
            // capitalize first char of the err msg
            this.payload.logger.info(`${err.message.charAt(0).toUpperCase() + err.message.slice(1)}, creating...`);
            const isCreated = await this.createDatabase();
            if (isCreated && this.connect) {
                await this.connect(options);
                return;
            }
        } else {
            this.payload.logger.error({
                err,
                msg: `Error: cannot connect to Postgres. Details: ${err.message}`
            });
        }
        if (typeof this.rejectInitializing === 'function') {
            this.rejectInitializing();
        }
        throw new Error(`Error: cannot connect to Postgres: ${err.message}`);
    }
    await this.createExtensions();
    // Only push schema if not in production
    if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_MIGRATING !== 'true' && this.push !== false) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$pushDevSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pushDevSchema"])(this);
    }
    if (typeof this.resolveInitializing === 'function') {
        this.resolveInitializing();
    }
    if (("TURBOPACK compile-time value", "development") === 'production' && this.prodMigrations) //TURBOPACK unreachable
    ;
}; //# sourceMappingURL=connect.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@payloadcms/db-postgres/dist/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "postgresAdapter",
    ()=>postgresAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$beginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/beginTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildCreateMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/buildCreateMigration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/count.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/countGlobalVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/countVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$blocksToJsonMigrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/blocksToJsonMigrator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createGlobalVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createSchemaGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/utilities/createSchemaGenerator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/createVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteMany.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/deleteVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$destroy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/destroy.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/find.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findDistinct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findGlobalVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateDown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateFresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateFresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateRefresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateReset.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/migrateStatus.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$operatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/queries/operatorMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queryDrafts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/queryDrafts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$rollbackTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/transactions/rollbackTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateGlobal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateGlobalVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateJobs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateMany.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/updateVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/upsert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$columnToCodeConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/columnToCodeConverter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$countDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/countDistinct.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createDatabase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createExtensions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/defaultSnapshot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$deleteWhere$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/deleteWhere.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$dropDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/dropDatabase.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/execute.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/init.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/insert.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$requireDrizzleKit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/drizzle/dist/postgres/requireDrizzleKit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/columns/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/schema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$createDatabaseAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/createDatabaseAdapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultBeginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/defaultBeginTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$findMigrationDir$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/payload/dist/database/migrations/findMigrationDir.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@payloadcms/db-postgres/dist/connect.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/@payloadcms/db-postgres/dist/index.js")}`;
    }
};
;
;
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
function postgresAdapter(args) {
    const postgresIDType = args.idType || 'serial';
    const payloadIDType = postgresIDType === 'serial' ? 'number' : 'text';
    const allowIDOnCreate = args.allowIDOnCreate ?? false;
    function adapter({ payload }) {
        const migrationDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$findMigrationDir$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findMigrationDir"])(args.migrationDir);
        let resolveInitializing;
        let rejectInitializing;
        let adapterSchema;
        const initializing = new Promise((res, rej)=>{
            resolveInitializing = res;
            rejectInitializing = rej;
        });
        if (args.schemaName) {
            adapterSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgSchema"])(args.schemaName);
        } else {
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            adapterSchema = {
                enum: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgEnum"],
                table: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"]
            };
        }
        const extensions = (args.extensions ?? []).reduce((acc, name)=>{
            acc[name] = true;
            return acc;
        }, {});
        const sanitizeStatements = ({ sqlExecute, statements })=>{
            return `${sqlExecute}\n ${statements.join('\n')}\`)`;
        };
        const executeMethod = 'execute';
        const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$createDatabaseAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDatabaseAdapter"])({
            name: 'postgres',
            afterSchemaInit: args.afterSchemaInit ?? [],
            allowIDOnCreate,
            beforeSchemaInit: args.beforeSchemaInit ?? [],
            blocksAsJSON: args.blocksAsJSON ?? false,
            createDatabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDatabase"],
            createExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createExtensions"],
            createMigration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildCreateMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildCreateMigration"])({
                executeMethod,
                filename,
                sanitizeStatements
            }),
            defaultDrizzleSnapshot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultDrizzleSnapshot"],
            disableCreateDatabase: args.disableCreateDatabase ?? false,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            drizzle: undefined,
            enums: {},
            extensions,
            features: {
                json: true
            },
            fieldConstraints: {},
            findDistinct: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findDistinct"],
            generateSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createSchemaGenerator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSchemaGenerator"])({
                columnToCodeConverter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$columnToCodeConverter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["columnToCodeConverter"],
                corePackageSuffix: 'pg-core',
                defaultOutputFile: args.generateSchemaOutputFile,
                enumImport: 'pgEnum',
                schemaImport: 'pgSchema',
                tableImport: 'pgTable'
            }),
            idType: postgresIDType,
            initializing,
            localesSuffix: args.localesSuffix || '_locales',
            logger: args.logger,
            operators: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$operatorMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operatorMap"],
            pg: args.pg || __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"],
            pgSchema: adapterSchema,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            pool: undefined,
            poolOptions: args.pool,
            prodMigrations: args.prodMigrations,
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            push: args.push,
            readReplicaOptions: args.readReplicas,
            relations: {},
            relationshipsSuffix: args.relationshipsSuffix || '_rels',
            schema: {},
            schemaName: args.schemaName,
            sessions: {},
            tableNameMap: new Map(),
            tables: {},
            tablesFilter: args.tablesFilter,
            transactionOptions: args.transactionOptions || undefined,
            versionsSuffix: args.versionsSuffix || '_v',
            // DatabaseAdapter
            beginTransaction: args.transactionOptions === false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$defaultBeginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBeginTransaction"])() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$beginTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beginTransaction"],
            commitTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"],
            connect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$dist$2f$connect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"],
            count: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["count"],
            countDistinct: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$countDistinct$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countDistinct"],
            countGlobalVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countGlobalVersions"],
            countVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$countVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countVersions"],
            create: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["create"],
            createGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGlobal"],
            createGlobalVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createGlobalVersion"],
            createJSONQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createJSONQuery"],
            createVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createVersion"],
            defaultIDType: payloadIDType,
            deleteMany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteMany"],
            deleteOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOne"],
            deleteVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteVersions"],
            deleteWhere: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$deleteWhere$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteWhere"],
            destroy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$destroy$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["destroy"],
            dropDatabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$dropDatabase$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dropDatabase"],
            execute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$execute$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"],
            find: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["find"],
            findGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobal"],
            findGlobalVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobalVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findGlobalVersions"],
            findOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOne"],
            findVersions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersions"],
            foreignKeys: new Set(),
            indexes: new Set(),
            init: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["init"],
            insert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$insert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insert"],
            migrate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrate"],
            migrateDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateDown"],
            migrateFresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateFresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateFresh"],
            migrateRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateRefresh"],
            migrateReset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateReset"],
            migrateStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateStatus"],
            migrationDir,
            packageName: '@payloadcms/db-postgres',
            payload,
            queryDrafts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queryDrafts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["queryDrafts"],
            rawRelations: {},
            rawTables: {},
            updateJobs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateJobs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateJobs"],
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            rejectInitializing,
            requireDrizzleKit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$requireDrizzleKit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireDrizzleKit"],
            // @ts-expect-error - vestiges of when tsconfig was not strict. Feel free to improve
            resolveInitializing,
            rollbackTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$rollbackTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rollbackTransaction"],
            updateGlobal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGlobal"],
            updateGlobalVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobalVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateGlobalVersion"],
            updateMany: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateMany$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateMany"],
            updateOne: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateOne"],
            updateVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateVersion"],
            upsert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsert$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsert"]
        });
        adapter.blocksToJsonMigrator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$blocksToJsonMigrator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createBlocksToJsonMigrator"])({
            adapter: adapter,
            executeMethod,
            sanitizeStatements
        });
        return adapter;
    }
    return {
        name: 'postgres',
        allowIDOnCreate,
        defaultIDType: payloadIDType,
        init: adapter
    };
}
;
;
 //# sourceMappingURL=index.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__47846484._.js.map