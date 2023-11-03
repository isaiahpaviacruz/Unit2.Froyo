function countFlavors() {
  const input = document.getElementById("flavorsInput").value;
  const flavors = input.split(",").map(flavor => flavor.trim());

  const flavorCounts = {};

  flavors.forEach(flavor => {
      if (flavorCounts[flavor]) {
          flavorCounts[flavor]++;
      } else {
          flavorCounts[flavor] = 1;
      }
  });

  const flavorTable = document.getElementById("flavorTable");
  const tbody = flavorTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Clear the previous table data

  for (const flavor in flavorCounts) {
      const row = tbody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = flavor;
      cell2.textContent = flavorCounts[flavor];
  }
}
