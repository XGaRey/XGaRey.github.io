"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const TrendChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Mock data for the chart
    const years = ["2020", "2021", "2022", "2023", "2024"]

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "浙江省",
            data: [13.2, 14.1, 15.0, 15.4, 15.6],
            borderColor: "#0284c7",
            backgroundColor: "rgba(2, 132, 199, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "福建省",
            data: [10.5, 11.2, 12.0, 12.5, 12.8],
            borderColor: "#0891b2",
            backgroundColor: "rgba(8, 145, 178, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "江西省",
            data: [9.8, 10.3, 10.7, 11.0, 11.2],
            borderColor: "#059669",
            backgroundColor: "rgba(5, 150, 105, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "安徽省",
            data: [8.2, 8.7, 9.1, 9.3, 9.5],
            borderColor: "#7c3aed",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.raw}万元`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: "彩礼金额（万元）",
            },
          },
          x: {
            title: {
              display: true,
              text: "年份",
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full h-[400px]">
      <canvas ref={chartRef} />
    </div>
  )
}

export default TrendChart

