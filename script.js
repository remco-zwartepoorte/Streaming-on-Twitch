const channels = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas'
];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL() {
      const endpoint = 'https://wind-bow.glitch.me/twitch-api/channels/';
      return endpoint + channel;
    }
    fetch(makeURL())
      .then(blob => blob.json())
      .then(data => addToList(data));
  });
}

function addToList(data) {
  const channelid = document.getElementById('channels');
  channelid.innerHTML =
    channelid.innerHTML +
    '<tr>' +
    '<td>' +
    '<img src="' +
    data.logo +
    '" height="75" width="75"</img>' +
    '<b>' +
    data.name +
    '</b></td>' +
    '<td><a ' +
    'href=' +
    data.url +
    '>' +
    'offline' +
    '</a></tr>';
}
getChannelInfo();
