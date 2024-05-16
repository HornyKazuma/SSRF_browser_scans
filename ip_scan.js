// Начальный IP-адрес
let ipBase = '10.';

// Массив для хранения IP-адресов, от которых получен ответ
let responsiveIps = [];

// Проходим через все возможные IP-адреса в сети
for (let i = 0; i <= 255; i++) {
    for (let j = 0; j <= 255; j++) {
        let ip = ipBase + i + '.' + j + '.1';

        // Отправляем запрос на каждый IP-адрес
        fetch(`https://${ip}`)
            .then(response => {
                // Если получен ответ, добавляем IP-адрес в массив и выводим его в консоль
                responsiveIps.push(ip);
                console.log(`Response from: ${ip}`);
            })
            .catch(error => {
                // Если есть ошибка (например, нет ответа), просто игнорируем ее
            });
    }
}

// Выводим массив IP-адресов, от которых получен ответ, в консоль
console.log('Responsive IPs:', responsiveIps);