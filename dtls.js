"use strict";

const node_dtls_client_1 = require("node-dtls-client");
const ip6addr_1 = require("ip6addr");

const user = "<username>"
const key = "<clientkey>"
const ip = "192.168.1.11"
const port = 2100

const addrInfo = ip6addr_1.parse(ip);


const opt = {
    type: addrInfo.kind() === 'ipv4' ? 'udp4' : 'udp6',
    port: port,
    address: ip,
    psk: {[user]: Buffer.from(key, 'hex')},
    ciphers: [
        'TLS_PSK_WITH_AES_128_GCM_SHA256',
    ],
    timeout: 3000,
}

const socket = node_dtls_client_1.dtls.createSocket(opt)
