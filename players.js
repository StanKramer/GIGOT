fetch("data/players/example_player.json")
  .then(r => r.json())
  .then(player => {
    const div = document.getElementById("players");
    let html = `<h2>${player.player}</h2><ul>`;
    player.inventory.forEach(i => {
      html += `<li>${i.item} : ${i.quantity}</li>`;
    });
    html += "</ul>";
    div.innerHTML = html;
  });
