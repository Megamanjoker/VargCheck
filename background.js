const callTwitch = () => {
    const myHeaders = new Headers();
    myHeaders.append("Client-ID", "r95n8u4ockwjxtm45c58anrms0qyl7");
    myHeaders.append("Authorization", "Bearer 0ojb3oz75mwnuk0vp7l7vzh92baibo");

    const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.twitch.tv/helix/streams?user_id=28219022", requestOptions)
    .then(response => response.json())
    .then(result => {
        if(result.data.length)
        {
            chrome.browserAction.setIcon({path:"live.png"});
        }
        else
        {
            chrome.browserAction.setIcon({path:"not-live.png"});
        }
        console.log(result)
    })
    .catch(error => console.log('error', error));
}
setInterval(callTwitch, 60000);