const express = require('express');
require('dotenv').config();

const app = express();

app.get('/.well-known/assetlinks.json', (req, res) => {
    res.json([
        {
            "relation": ["delegate_permission/common.handle_all_urls"],
            "target": {
                "namespace": "android_app",
                "package_name": "com.example.appb",
                "sha256_cert_fingerprints": ["EC:2C:CA:DB:B7:91:72:F7:DC:67:AC:FA:7B:80:22:1C:84:2D:44:B8:8A:2B:2A:3A:AA:07:D9:2B:34:EE:E1:2F"]
            }
        }
    ]);
});

app.listen(process.env.PORT, () => {
    console.log(`app listening on PORT: ${process.env.PORT}`);
});