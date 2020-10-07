document.addEventListener('DOMContentLoaded', () => {

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
        message: "get_values"
      },
      (response) => {
        document.querySelector('#channelList').checked = response.channels;
        document.querySelector('#serverList').checked = response.guilds;
        document.querySelector('#membersList').checked = response.members;

        if (response.channels) {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
              message: "toggle_channels",
              value: document.querySelector('#channelList').checked
            })
          })
        }

        if (response.guilds) {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
              message: "toggle_guilds",
              value: document.querySelector('#serverList').checked
            })
          })
        }

        if (response.members) {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
              message: "toggle_members",
              value: document.querySelector('#membersList').checked
            })
          })
        }
      });
  })


  document.querySelector('#channelList').addEventListener('change', (ev) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        message: "toggle_channels",
        value: document.querySelector('#channelList').checked
      })
    })
  })

  document.querySelector('#serverList').addEventListener('change', (ev) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        message: "toggle_guilds",
        value: document.querySelector('#serverList').checked
      })
    })
  })

  document.querySelector('#membersList').addEventListener('change', (ev) => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        message: "toggle_members",
        value: document.querySelector('#membersList').checked
      })
    })
  })
})