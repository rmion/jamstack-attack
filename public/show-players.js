const pusher = new Pusher('a0a317b210ac3be6457d', {
    cluster: 'mt1',
    forceTLS: true,
    authEndpoint: "/pusher/auth"
  });
  if (!document.cookie.match('(^|;) ?user_id=([^;]*)(;|$)')) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
    let initial1 = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
    let initial2 = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
    document.cookie = 'user_id=' + initial1 + initial2;
  }
  const channel = pusher.subscribe('presence-quickstart');
  const hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  function addMemberToUserList(memberId) {
    userEl = document.createElement("li");
    userEl.id = "user_"+memberId;
    userEl.innerText = memberId;
    userEl.style.backgroundColor = 'hsl('+hashCode(memberId)%360+',70%,60%)';
    document.getElementById("user_list").appendChild(userEl);
    if (channel.members.count > 1) {
      document.getElementById('player-count-zero').style.display = "none"
      document.getElementById('player-count-zero').nextElementSibling.classList.remove('is-hidden')
    } else if (channel.members.count <= 1) {
      document.getElementById('player-count-zero').style.display = "block"
      document.getElementById('player-count-zero').nextElementSibling.classList.add('is-hidden')
    }
  }
  channel.bind('pusher:subscription_succeeded', () => 
    channel.members.each(member => addMemberToUserList(member.id)));
  channel.bind('pusher:member_added', member => addMemberToUserList(member.id));
  channel.bind('pusher:member_removed', member => {
    const userEl = document.getElementById("user_"+member.id);
    userEl.parentNode.removeChild(userEl);
    if (channel.members.count <= 1) {
      document.getElementById('player-count-zero').style.display = "block"
      document.getElementById('player-count-zero').nextElementSibling.classList.add('is-hidden')
    }
  });
  