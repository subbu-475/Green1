const http = require('https');
http.get('https://worldsafety.org.in/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const fonts = data.match(/fonts\.googleapis\.com[^"']+/g) || [];
        console.log('Google Fonts loaded:', Array.from(new Set(fonts)));

        // Also look for inline CSS with font-family
        const families = data.match(/font-family:[^;\"']+/g) || [];
        console.log('Font families in HTML:', Array.from(new Set(families)));

        // Attempt to find main CSS
        const cssFiles = data.match(/href="([^"]+\.css[^"]*)"/g) || [];
        const uniqueCss = Array.from(new Set(cssFiles.map(c => c.replace('href="', '').replace('"', ''))));
        console.log('CSS files:', uniqueCss.slice(0, 10));
    });
});
