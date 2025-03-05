"use client"

import { useEffect, useRef, useState } from "react"

const RegionMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  // Mock data for region statistics
  const regions = [
    { id: 1, name: "浙江省", avgDowry: "15.6万", x: 140, y: 100, radius: 25 },
    { id: 2, name: "福建省", avgDowry: "12.8万", x: 120, y: 180, radius: 25 },
    { id: 3, name: "江西省", avgDowry: "11.2万", x: 80, y: 140, radius: 25 },
    { id: 4, name: "安徽省", avgDowry: "9.5万", x: 40, y: 80, radius: 25 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 250

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw map
    regions.forEach((region) => {
      ctx.beginPath()
      ctx.arc(region.x, region.y, region.radius, 0, 2 * Math.PI)

      // Highlight hovered region
      if (hoveredRegion === region.name) {
        ctx.fillStyle = "#0284c7"
      } else {
        ctx.fillStyle = "#60a5fa"
      }

      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Add region name
      ctx.font = "10px Arial"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(region.name, region.x, region.y)
    })

    // Event listeners for hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if mouse is over any region
      let hoveredRegion = null
      for (const region of regions) {
        const dx = region.x - x
        const dy = region.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance <= region.radius) {
          hoveredRegion = region.name
          break
        }
      }

      setHoveredRegion(hoveredRegion)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [hoveredRegion])

  return (
    <div className="relative flex items-center justify-center">
      <canvas ref={canvasRef} className="border rounded-lg shadow-lg bg-blue-50" />
      {hoveredRegion && (
        <div className="absolute bottom-4 bg-white p-2 rounded shadow-md">
          <p className="font-bold">{hoveredRegion}</p>
          <p className="text-sm">平均彩礼: {regions.find((r) => r.name === hoveredRegion)?.avgDowry}</p>
        </div>
      )}
    </div>
  )
}

export default RegionMap

