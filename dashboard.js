import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // 省份选择联动
  const provinceSelect = document.getElementById("province")
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

  provinceSelect.addEventListener("change", function () {
    const selectedProvince = this.value

    // 清空城市选择
    citySelect.innerHTML = '<option value="all">全部</option>'

    if (selectedProvince !== "all") {
      citySelect.disabled = false

      // 添加对应省份的城市
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

  // 图表初始化
  // 彩礼均值分布图表
  const dowryAverageCtx = document.getElementById("dowryAverageChart").getContext("2d")
  const dowryAverageChart = new Chart(dowryAverageCtx, {
    type: "bar",
    data: {
      labels: ["浙江省", "福建省", "江西省", "安徽省"],
      datasets: [
        {
          label: "彩礼均值（万元）",
          data: [18.5, 16.2, 12.8, 9.5],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(16, 185, 129, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(239, 68, 68, 0.7)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 1)",
            "rgba(16, 185, 129, 1)",
            "rgba(245, 158, 11, 1)",
            "rgba(239, 68, 68, 1)",
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
          title: {
            display: true,
            text: "金额（万元）",
          },
        },
      },
    },
  })

  // 彩礼与收入比图表
  const dowryIncomeRatioCtx = document.getElementById("dowryIncomeRatioChart").getContext("2d")
  const dowryIncomeRatioChart = new Chart(dowryIncomeRatioCtx, {
    type: "radar",
    data: {
      labels: ["浙江省", "福建省", "江西省", "安徽省"],
      datasets: [
        {
          label: "彩礼与年收入比",
          data: [2.8, 3.2, 4.5, 3.8],
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(59, 130, 246, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(59, 130, 246, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
          suggestedMax: 5,
        },
      },
    },
  })

  // 高风险区域分布图表
  const riskAreaCtx = document.getElementById("riskAreaChart").getContext("2d")
  const riskAreaChart = new Chart(riskAreaCtx, {
    type: "pie",
    data: {
      labels: ["低风险", "中风险", "高风险", "极高风险"],
      datasets: [
        {
          data: [45, 30, 20, 5],
          backgroundColor: [
            "rgba(16, 185, 129, 0.7)",
            "rgba(245, 158, 11, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            "rgba(220, 38, 38, 0.7)",
          ],
          borderColor: [
            "rgba(16, 185, 129, 1)",
            "rgba(245, 158, 11, 1)",
            "rgba(239, 68, 68, 1)",
            "rgba(220, 38, 38, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
      },
    },
  })

  // 彩礼年度变化趋势图表
  const dowryTrendCtx = document.getElementById("dowryTrendChart").getContext("2d")
  const dowryTrendChart = new Chart(dowryTrendCtx, {
    type: "line",
    data: {
      labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "浙江省",
          data: [15.2, 16.1, 16.8, 17.5, 18.0, 18.5],
          borderColor: "rgba(59, 130, 246, 1)",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: "福建省",
          data: [13.5, 14.2, 14.8, 15.3, 15.8, 16.2],
          borderColor: "rgba(16, 185, 129, 1)",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: "江西省",
          data: [9.8, 10.5, 11.2, 11.8, 12.3, 12.8],
          borderColor: "rgba(245, 158, 11, 1)",
          backgroundColor: "rgba(245, 158, 11, 0.1)",
          tension: 0.3,
          fill: true,
        },
        {
          label: "安徽省",
          data: [7.2, 7.8, 8.3, 8.8, 9.2, 9.5],
          borderColor: "rgba(239, 68, 68, 1)",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "金额（万元）",
          },
        },
      },
    },
  })

  // 筛选按钮点击事件
  document.getElementById("filter-btn").addEventListener("click", () => {
    // 这里可以添加实际的筛选逻辑
    alert("筛选功能已应用，数据已更新！")

    // 模拟数据更新
    dowryAverageChart.data.datasets[0].data = [
      Math.random() * 10 + 15,
      Math.random() * 10 + 12,
      Math.random() * 10 + 8,
      Math.random() * 10 + 5,
    ]
    dowryAverageChart.update()

    dowryIncomeRatioChart.data.datasets[0].data = [
      Math.random() * 2 + 2,
      Math.random() * 2 + 2.5,
      Math.random() * 2 + 3.5,
      Math.random() * 2 + 3,
    ]
    dowryIncomeRatioChart.update()

    riskAreaChart.data.datasets[0].data = [
      Math.random() * 30 + 30,
      Math.random() * 20 + 20,
      Math.random() * 15 + 15,
      Math.random() * 5 + 3,
    ]
    riskAreaChart.update()
  })
})

