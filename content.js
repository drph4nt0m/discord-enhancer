chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'toggle_channels') {
    localStorage.setItem('toggle_channels', request.value);

    if (document.querySelector("div[class*='sidebar']")) {
      document.querySelector("div[class*='sidebar']").classList.toggle('discord-ext-hide-me');
    }
  } else if (request.message === 'toggle_guilds') {
    localStorage.setItem('toggle_guilds', request.value);

    if (document.querySelector("nav[class*='guilds']")) {
      document.querySelector("nav[class*='guilds']").classList.toggle('discord-ext-hide-me');
    }

    if (document.querySelector("div[class*='base']")) {
      document.querySelectorAll("div[class*='base']").forEach(e => {
        e.classList.toggle('discord-ext-left-0');
      })
    }
  } else if (request.message === 'toggle_members') {
    localStorage.setItem('toggle_members', request.value);

    if (document.querySelector("div[class*='membersWrap']")) {
      document.querySelector("div[class*='membersWrap']").classList.toggle('discord-ext-hide-me');
    }

  } else if (request.message === 'get_values') {
    sendResponse({
      channels: localStorage.getItem('toggle_channels') === 'true' ? true : false,
      guilds: localStorage.getItem('toggle_guilds') === 'true' ? true : false,
      members: localStorage.getItem('toggle_members') === 'true' ? true : false
    });
  }
});