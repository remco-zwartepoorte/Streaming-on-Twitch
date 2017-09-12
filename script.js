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
    const channelUrl =
      'https://wind-bow.glitch.me/twitch-api/channels/' + channel;
    fetch(channelUrl)
      .then(blob => blob.json())
      .then(data => addToList(data));
  });
}

function addToList(data) {
  // ** first way of DOM manipulation: create new Text node, create new element node, add text to element node, append to selected element
  // let newText = document.createTextNode(data.name);
  // let newTd = document.createElement('td');
  // let newTr = document.createElement('tr');
  // newTd.appendChild(newText);
  // newTr.appendChild(newTd);
  // document.getElementById('list').appendChild(newTr);

  // ** other way of adding content to the DOM tree: innerHTML
  const channelList = document.getElementById('list');
  channelList.innerHTML =
    channelList.innerHTML +
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
// const streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/' + channel;
