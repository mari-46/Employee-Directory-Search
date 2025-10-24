const employees = [
  { name: "Alice Johnson", department: "Engineering", role: "Frontend Developer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Bob Smith", department: "Engineering", role: "Backend Developer", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Clara Williams", department: "Design", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "David Brown", department: "Marketing", role: "Content Strategist", image: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Emily Davis", department: "HR", role: "Recruiter", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Frank Wilson", department: "Finance", role: "Accountant", image: "https://randomuser.me/api/portraits/men/21.jpg" },
  { name: "Grace Miller", department: "Sales", role: "Sales Executive", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Henry Thompson", department: "Support", role: "Customer Service Rep", image: "https://randomuser.me/api/portraits/men/55.jpg" },
{ name: "James Brown", department: "Human Resources", role: "HR Manager", image: "https://randomuser.me/api/portraits/men/15.jpg" },
{ name: "Emily Davis", department: "Marketing", role: "Content Strategist", image: "https://randomuser.me/api/portraits/women/23.jpg" },
{ name: "Daniel Wilson", department: "Engineering", role: "DevOps Engineer", image: "https://randomuser.me/api/portraits/men/47.jpg" },
{ name: "Olivia Taylor", department: "Sales", role: "Sales Executive", image: "https://randomuser.me/api/portraits/women/53.jpg" },
{ name: "William Anderson", department: "Finance", role: "Accountant", image: "https://randomuser.me/api/portraits/men/40.jpg" },
{ name: "Ava Martinez", department: "Customer Support", role: "Support Specialist", image: "https://randomuser.me/api/portraits/women/60.jpg" },
];

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");

// Render employees
function renderEmployees(filteredEmployees) {
  employeeList.innerHTML = "";

  if (filteredEmployees.length === 0) {
    employeeList.innerHTML = "<p style='text-align:center;'>No employees found.</p>";
    return;
  }

  filteredEmployees.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    card.innerHTML = `
      <img src="${emp.image}" alt="${emp.name}">
      <h3>${emp.name}</h3>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
    `;

    employeeList.appendChild(card);
  });
}

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query) ||
    emp.department.toLowerCase().includes(query) ||
    emp.role.toLowerCase().includes(query)
  );
  renderEmployees(filtered);
});

// Initial render
renderEmployees(employees);
