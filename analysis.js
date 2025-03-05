import { Chart } from "@/components/ui/chart"
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

  // Initialize charts
  // Factors analysis chart
  const factorsCtx = document.getElementById("factorsChart").getContext("2d")
  const factorsChart = new Chart(factorsCtx, {
    type: "bar",
    data: {
      labels: ["房价水平", "人均收入", "男女比例", "教育水平", "文化传统", "城镇化率"],
      datasets: [
        {
          label: "影响程度",
          data: [85, 72, 68, 55, 63, 48],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(59, 130, 246, 0.7)",
            "rgba(59, 130, 246, 0.7)",
            "rgba(59, 130, 246, 0.7)",
            "rgba(59, 130, 246, 0.7)",
            "rgba(59, 130, 246, 0.7)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(59, 130, 246, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "影响程度 (%)",
          },
        },
      },
    },
  })

  // Risk model chart
  const riskModelCtx = document.getElementById("riskModelChart").getContext("2d")
  const riskModelChart = new Chart(riskModelCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "低风险区域",
          data: Array.from({ length: 20 }, () => ({
            x: Math.random() * 30 + 5,
            y: Math.random() * 2 + 1,
          })),
          backgroundColor: "rgba(16, 185, 129, 0.7)",
          borderColor: "rgba(16, 185, 129, 1)",
          borderWidth: 1,
          pointRadius: 6,
        },
        {
          label: "中风险区域",
          data: Array.from({ length: 15 }, () => ({
            x: Math.random() * 20 + 40,
            y: Math.random() * 2 + 3,
          })),
          backgroundColor: "rgba(245, 158, 11, 0.7)",
          borderColor: "rgba(245, 158, 11, 1)",
          borderWidth: 1,
          pointRadius: 6,
        },
        {
          label: "高风险区域",
          data: Array.from({ length: 10 }, () => ({
            x: Math.random() * 20 + 60,
            y: Math.random() * 2 + 5,
          })),
          backgroundColor: "rgba(239, 68, 68, 0.7)",
          borderColor: "rgba(239, 68, 68, 1)",
          borderWidth: 1,
          pointRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "彩礼金额偏离度 (%)",
          },
        },
        y: {
          title: {
            display: true,
            text: "彩礼/年收入比",
          },
        },
      },
    },
  })

  // Housing correlation chart
  const housingCorrelationCtx = document.getElementById("housingCorrelationChart").getContext("2d")
  const housingCorrelationChart = new Chart(housingCorrelationCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "各地区数据点",
          data: Array.from({ length: 30 }, () => ({
            x: Math.random() * 15000 + 5000,
            y: Math.random() * 20 + 5,
          })),
          backgroundColor: "rgba(59, 130, 246, 0.7)",
          borderColor: "rgba(59, 130, 246, 1)",
          borderWidth: 1,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "房价 (元/㎡)",
          },
        },
        y: {
          title: {
            display: true,
            text: "彩礼金额 (万元)",
          },
        },
      },
    },
  })

  // Income correlation chart
  const incomeCorrelationCtx = document.getElementById("incomeCorrelationChart").getContext("2d")
  const incomeCorrelationChart = new Chart(incomeCorrelationCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "各地区数据点",
          data: Array.from({ length: 30 }, () => ({
            x: Math.random() * 8 + 2,
            y: Math.random() * 20 + 5,
          })),
          backgroundColor: "rgba(16, 185, 129, 0.7)",
          borderColor: "rgba(16, 185, 129, 1)",
          borderWidth: 1,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "人均年收入 (万元)",
          },
        },
        y: {
          title: {
            display: true,
            text: "彩礼金额 (万元)",
          },
        },
      },
    },
  })

  // Gender correlation chart
  const genderCorrelationCtx = document.getElementById("genderCorrelationChart").getContext("2d")
  const genderCorrelationChart = new Chart(genderCorrelationCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "各地区数据点",
          data: Array.from({ length: 30 }, () => ({
            x: Math.random() * 0.4 + 0.8,
            y: Math.random() * 20 + 5,
          })),
          backgroundColor: "rgba(245, 158, 11, 0.7)",
          borderColor: "rgba(245, 158, 11, 1)",
          borderWidth: 1,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "女性/男性比例",
          },
        },
        y: {
          title: {
            display: true,
            text: "彩礼金额 (万元)",
          },
        },
      },
    },
  })

  // Education correlation chart
  const educationCorrelationCtx = document.getElementById("educationCorrelationChart").getContext("2d")
  const educationCorrelationChart = new Chart(educationCorrelationCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "各地区数据点",
          data: Array.from({ length: 30 }, () => ({
            x: Math.random() * 60 + 20,
            y: Math.random() * 20 + 5,
          })),
          backgroundColor: "rgba(239, 68, 68, 0.7)",
          borderColor: "rgba(239, 68, 68, 1)",
          borderWidth: 1,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: "高等教育比例 (%)",
          },
        },
        y: {
          title: {
            display: true,
            text: "彩礼金额 (万元)",
          },
        },
      },
    },
  })

  // Prediction chart
  const predictionCtx = document.getElementById("predictionChart").getContext("2d")
  const predictionChart = new Chart(predictionCtx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"],
      datasets: [
        {
          label: "浙江省衢州市",
          data: [12.5, 13.2, 14.0, 14.8, 15.5, 17.8, 20.1, 22.3],
          borderColor: "rgba(59, 130, 246, 1)",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.3,
          fill: true,
          pointStyle: "circle",
          pointRadius: 4,
          pointBackgroundColor: "rgba(59, 130, 246, 1)",
        },
        {
          label: "福建省南平市",
          data: [10.2, 10.8, 11.5, 12.1, 12.8, 14.3, 16.2, 18.0],
          borderColor: "rgba(16, 185, 129, 1)",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.3,
          fill: true,
          pointStyle: "circle",
          pointRadius: 4,
          pointBackgroundColor: "rgba(16, 185, 129, 1)",
        },
        {
          label: "江西省上饶市",
          data: [9.5, 10.0, 10.5, 11.0, 11.5, 12.6, 13.8, 15.0],
          borderColor: "rgba(245, 158, 11, 1)",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.3,
          fill: true,
          pointStyle: "circle",
          pointRadius: 4,
          pointBackgroundColor: "rgba(245, 158, 11, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          title: {
            display: true,
            text: "彩礼金额 (万元)",
          },
        },
        x: {
          title: {
            display: true,
            text: "年份",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.raw}万元`,
          },
        },
      },
    },
  })

  // Factor selection change event
  document.getElementById("factor-select").addEventListener("change", function () {
    const selectedFactor = this.value
    let newData

    switch (selectedFactor) {
      case "economic":
        newData = [85, 72, 48, 55, 63, 42]
        break
      case "demographic":
        newData = [45, 52, 88, 65, 43, 58]
        break
      case "cultural":
        newData = [55, 42, 58, 75, 83, 38]
        break
      case "education":
        newData = [65, 82, 48, 85, 53, 68]
        break
      default:
        newData = [85, 72, 68, 55, 63, 48]
    }

    factorsChart.data.datasets[0].data = newData
    factorsChart.update()
  })
})

