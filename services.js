document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const tabId = button.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Province-city selection linkage
  const regionSelect = document.getElementById("region")
  const citySelect = document.getElementById("city")

  const cityData = {
    zhejiang: [
      "杭州市",
      "宁波市",
      "温州市",
      "嘉兴市",
      "湖州市",
      "绍兴市",
      "金华市",
      "衢州市",
      "舟山市",
      "台州市",
      "丽水市",
    ],
    fujian: ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"],
    jiangxi: [
      "南昌市",
      "景德镇市",
      "萍乡市",
      "九江市",
      "新余市",
      "鹰潭市",
      "赣州市",
      "吉安市",
      "宜春市",
      "抚州市",
      "上饶市",
    ],
    anhui: [
      "合肥市",
      "芜湖市",
      "蚌埠市",
      "淮南市",
      "马鞍山市",
      "淮北市",
      "铜陵市",
      "安庆市",
      "黄山市",
      "滁州市",
      "阜阳市",
      "宿州市",
      "六安市",
      "亳州市",
      "池州市",
      "宣城市",
    ],
  }

  if (regionSelect) {
    regionSelect.addEventListener("change", function () {
      const selectedProvince = this.value

      // Clear city selection
      citySelect.innerHTML = '<option value="" disabled selected>选择城市/县区</option>'

      if (selectedProvince) {
        citySelect.disabled = false

        // Add cities for the selected province
        cityData[selectedProvince].forEach((city) => {
          const option = document.createElement("option")
          option.value = city
          option.textContent = city
          citySelect.appendChild(option)
        })
      } else {
        citySelect.disabled = true
      }
    })
  }

  // Self-check form submission
  const selfCheckForm = document.getElementById("self-check-form")
  const resultContainer = document.getElementById("result-container")

  if (selfCheckForm) {
    selfCheckForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real application, this would send data to the server for processing
      // For demo purposes, we'll just show the result container
      resultContainer.style.display = "block"

      // Scroll to the result
      resultContainer.scrollIntoView({ behavior: "smooth" })
    })
  }

  // Report form submission
  const reportForm = document.getElementById("report-form")
  const reportSuccess = document.getElementById("report-success")

  if (reportForm) {
    reportForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, this would send data to the server for processing
      // For demo purposes, we'll just show the success message
      reportSuccess.style.display = "flex"

      // Reset the form
      this.reset()

      // Scroll to the success message
      reportSuccess.scrollIntoView({ behavior: "smooth" })

      // Hide the success message after 5 seconds
      setTimeout(() => {
        reportSuccess.style.display = "none"
      }, 5000)
    })
  }

  // Incident province selection for report form
  const incidentProvinceSelect = document.getElementById("incident-province")

  if (incidentProvinceSelect) {
    incidentProvinceSelect.addEventListener("change", () => {
      // In a real application, this might load cities for the selected province
      // or perform other related actions
    })
  }
})

