const channels = [
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'freecodecamp',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas'
];

function getStreamInfo() {
  channels.forEach(function(channel) {
    const streamUrl =
      'https://wind-bow.glitch.me/twitch-api/streams/' + channel;
    const channelUrl =
      'https://wind-bow.glitch.me/twitch-api/channels/' + channel;
    fetch(streamUrl)
      .then(blob => blob.json())
      .then(function(data) {
        if (data.stream !== null) {
          addToListOnline(data);
        } else {
          fetch(channelUrl)
            .then(blob => blob.json())
            .then(data => addToListOffline(data));
        }
      });
  });
}

function addToListOnline(data) {
  // ** first way of DOM manipulation: create new Text node, create new element node, add text to element node, append to selected element
  // let newText = document.createTextNode(data.name);
  // let newTd = document.createElement('td');
  // let newTr = document.createElement('tr');
  // newTd.appendChild(newText);
  // newTr.appendChild(newTd);
  // document.getElementById('list').appendChild(newTr);

  // ** other way of adding content to the DOM tree: innerHTML
  const channelList = document.getElementById('list');
  channelList.innerHTML += `
    <tr>
    <td>
    <img src="${data.stream.channel.logo}" height="75" width="75"><b>${data
    .stream.channel.name}</b>
    </td>
    <td>
    <a href='${data.stream.channel.url}'> online</a>
    </td>
    <td>
    ${data.stream.game}
    </td>
    </tr>`;
}

function addToListOffline(data) {
  const channelList = document.getElementById('list');
  channelList.innerHTML += `
    <tr>
    <td>
    <img src="${data.logo}" height="75" width="75"><b>${data.name}</b>
    </td>
    <td>
    <a href='${data.url}'> offline</a>
    </td>
    </tr>`;
}
getStreamInfo();
