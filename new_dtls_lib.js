const dtls = require('@nodertc/dtls');

const socket = dtls.connect({
    type: 'udp4',
    remotePort: 2100,
    remoteAddress: '192.168.1.11',
    maxHandshakeRetransmissions: 4,
    pskIdentity: '<user>',
    pskSecret: Buffer.from('<clientkey>', 'hex'),
    cipherSuites: ['TLS_PSK_WITH_AES_128_GCM_SHA256'],
});

socket.setTimeout(10e3);

socket.on('error', err => {
    console.error(err);
});

socket.once('connect', () => {
    console.log('DTLS Handshake complete');
});
socket.once('timeout', () => {
    console.log('DTLS timeout');
    process.exit(-1);
});
