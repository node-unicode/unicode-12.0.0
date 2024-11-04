module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64')))