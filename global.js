fetch("data/players/example_player.json")
  .then(r => r.json())
  .then(player => {
    const globalInventory = {};
    player.inventory.forEach(i => {
      globalInventory[i.item] = (globalInventory[i.item] || 0) + i.quantity;
    });

    localStorage.setItem("globalInventory", JSON.stringify(globalInventory));

    const div = document.getElementById("global");
    Object.entries(globalInventory).forEach(([item, qty]) => {
      div.innerHTML += `<p>${item} : ${qty}</p>`;
    });
  });
