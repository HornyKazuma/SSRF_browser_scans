let ipBase = '10.';
let responsiveIps = [];
for (let i = 0; i <= 255; i++) {
    for (let j = 0; j <= 255; j++) {
        let ip = ipBase + i + '.' + j + '.1';
        fetch(`https://${ip}`, { mode: 'no-cors' })
            .then(response => {
                if (response.ok) {
                    responsiveIps.push(ip);
                    console.log(`Response from: ${ip}`);
                }
            })
            .catch(error => {
            });
    }
}

console.log('Responsive IPs:', responsiveIps);