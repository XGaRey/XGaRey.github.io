document.addEventListener("DOMContentLoaded", () => {
  // Feedback form submission
  const feedbackForm = document.getElementById("feedback-form")

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, this would send data to the server
      alert("感谢您的反馈！我们会认真阅读您的意见和建议。")

      // Reset the form
      this.reset()
    })
  }

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item")

  function checkScroll() {
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (itemTop < windowHeight * 0.8) {
        item.classList.add("animate")
      }
    })
  }

  // Add animation class
  document.head.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      .timeline-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .timeline-item.animate {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
  `,
  )

  // Check on load and scroll
  window.addEventListener("load", checkScroll)
  window.addEventListener("scroll", checkScroll)

  // Team member hover effect
  const teamMembers = document.querySelectorAll(".team-member")

  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    member.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

