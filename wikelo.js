const inventory =
  JSON.parse(localStorage.getItem("globalInventory") || "{}");

fetch("data/recipes/example_recipe.json")
  .then(r => r.json())
  .then(recipe => {
    const div = document.getElementById("wikelo");
    div.innerHTML = `<h2>${recipe.name}</h2>`;

    recipe.ingredients.forEach(i => {
      const have = inventory[i.item] || 0;
      const missing = Math.max(0, i.quantity - have);
      div.innerHTML += missing > 0
        ? `❌ ${i.item} : manque ${missing}<br>`
        : `✅ ${i.item}<br>`;
    });
  });
