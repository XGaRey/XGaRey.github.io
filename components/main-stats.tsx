"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

const MainStats = () => {
  // Mock data for statistics
  const stats = [
    {
      title: "全国彩礼均值",
      value: "11.8万元",
      change: "+2.3%",
      trend: "up",
      description: "较2023年同期",
    },
    {
      title: "浙闽赣皖四省均值",
      value: "12.3万元",
      change: "-1.5%",
      trend: "down",
      description: "较2023年同期",
    },
    {
      title: "高风险区域",
      value: "42个",
      change: "+8",
      trend: "up",
      description: "较上季度",
      alert: true,
    },
    {
      title: "成功干预案例",
      value: "37个",
      change: "+14",
      trend: "up",
      description: "较上季度",
      success: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`stat-card ${stat.alert ? "border-orange-300" : stat.success ? "border-green-300" : ""}`}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex justify-between items-center">
              {stat.title}
              {stat.alert ? (
                <AlertCircle className="h-5 w-5 text-orange-500" />
              ) : stat.success ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : null}
            </CardTitle>
            <CardDescription>{stat.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-baseline">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className={`flex items-center ${stat.trend === "up" ? "text-rose-500" : "text-emerald-500"}`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MainStats

