window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCE1Wc53YSaL1omH2c3Vtrl6_c4qkGOLpxLxGNyzruJnT6lCCSayDYJAmu6eRECWmU8PIHRpYMfJ1YU36FjDsH26H3rd3fH7hhM2wjZgGq18w7iDShF7Ohogb-qt6B5KaBY782voVxk7mekqH5b0wes3uZNFMjeALm8HdDeV_TfDeiNmM9TgGrK7j8z14BHS9cGfHhjKtS9im1loXjXeYpiT88';

    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    })


    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function () {
        player.togglePlay();
    };

    player.connect();


}


