const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click',()=>{
  toggleIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
});


// // document.addEventListener("DOMContentLoaded", function () {
// //   const ironMan = document.getElementById("iron-man");
// //   const contactBtn = document.getElementById("contact-btn");

// //   // Move Iron Man to the right when Contact Me button is clicked
// //   contactBtn.addEventListener("click", function () {
// //     ironMan.style.left = "calc(100% + 200px)"; // Move Iron Man off-screen to the right
// //     setTimeout(function () {
// //       window.location.href = "#contact"; // Scroll to the contact section
// //     }, 1000); // Wait for Iron Man animation to finish before scrolling
// //   });
// // });
// document.addEventListener("DOMContentLoaded", function () {
//   const projectsContainer = document.querySelector(".project-list");
//   const projects = [
//     {
//       title: "Project 1",
//       image: "project1.jpg",
//       description: "Lorem ipsum dolor sit amet.",
//     },
//     {
//       title: "Project 2",
//       image: "project2.jpg",
//       description: "Consectetur adipiscing elit.",
//     },
//     {
//       title: "Project 3",
//       image: "project3.jpg",
//       description: "Sed do eiusmod tempor incididunt.",
//     },
//     {
//       title: "Project 3",
//       image: "project3.jpg",
//       description: "Sed do eiusmod tempor incididunt.",
//     },
//     {
//       title: "Project 3",
//       image: "project3.jpg",
//       description: "Sed do eiusmod tempor incididunt.",
//     },
//     {
//       title: "Project 3",
//       image: "project3.jpg",
//       description: "Sed do eiusmod tempor incididunt.",
//     },
//     // Add more projects as needed
//   ];

//   projects.forEach((project) => {
//     const projectCard = document.createElement("div");
//     projectCard.classList.add("project-card");
//     projectCard.innerHTML = `
//       <img src="${project.image}" alt="${project.title}">
//       <h3>${project.title}</h3>
//       <p>${project.description}</p>
//     `;
//     projectsContainer.appendChild(projectCard);
//   });
// });
