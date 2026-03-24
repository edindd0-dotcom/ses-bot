const { Client } = require('discord.js-selfbot-v13');

// Tokenlarını buraya tırnak içinde, aralarına virgül koyarak ekle
const tokens = ['MTQ2MDY0ODg5OTA4OTAxMDc2OQ.GtcVXi.VTsUGBaC_dmocWv3yeDXdRZcct9G_EIYg2Rny0']; 
const channelId = '1482894399502418032'; 

tokens.forEach(token => {
    const client = new Client({ checkUpdate: false });
    client.on('ready', async () => {
        console.log(`${client.user.tag} Sese bağlanıyor...`);
        try {
            const channel = await client.channels.fetch(channelId);
            client.voice.joinChannel(channel, { selfDeaf: true, selfMute: true });
        } catch (err) {
            console.log("Kanal bulunamadı veya yetki yok: " + err);
        }
    });
    client.login(token);
});