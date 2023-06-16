const formData = JSON.parse(localStorage.getItem("formData"));
const adminTableHeading = document.getElementById("admin-table-heading");

adminTableHeading.textContent = `List of Admission reponses (${formData.length})`;

const adminTable = document.getElementById("admin-table");

const tableHeadings = [
  "Program",
  "Name",
  "Contact Number",
  "Email",
  "Gender",
  "DOB",
  "Nationality",
  "Class 10th %",
  "Class 12th %",
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headerRow = document.createElement("tr");

for (const key in tableHeadings) {
  const th = document.createElement("th");
  th.textContent = tableHeadings[key];
  headerRow.appendChild(th);
}

thead.appendChild(headerRow);

formData.forEach((element) => {
  const row = document.createElement("tr");
  for (const key in element) {
    if (key !== "profile-image") {
      const td = document.createElement("td");
      td.textContent = element[key];
      if (key === "f-name" || key === "nationality") {
        td.style.textTransform = "capitalize";
      }

      row.appendChild(td);
    }
  }

  tbody.appendChild(row);
});

adminTable.appendChild(thead);
adminTable.appendChild(tbody);

const exitAdmin = () => {
  window.location.href = "index.html";
};
