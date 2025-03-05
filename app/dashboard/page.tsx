"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TrendChart from "@/components/trend-chart"
import { DownloadCloud, Filter } from "lucide-react"

export default function DashboardPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("2024")

  // Mock data for high-risk areas
  const highRiskAreas = [
    { region: "江西省", area: "萍乡市莲花县", avgDowry: "28.5万", provincialAvg: "11.2万", riskLevel: "高" },
    { region: "浙江省", area: "温州市泰顺县", avgDowry: "22.3万", provincialAvg: "15.6万", riskLevel: "中" },
    { region: "福建省", area: "龙岩市永定区", avgDowry: "21.6万", provincialAvg: "12.8万", riskLevel: "中" },
    { region: "安徽省", area: "阜阳市阜南县", avgDowry: "18.2万", provincialAvg: "9.5万", riskLevel: "中" },
    { region: "江西省", area: "吉安市遂川县", avgDowry: "24.7万", provincialAvg: "11.2万", riskLevel: "高" },
  ]

  // Filter high-risk areas based on selected region
  const filteredAreas =
    selectedRegion === "all" ? highRiskAreas : highRiskAreas.filter((area) => area.region === selectedRegion)

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">数据分析中心</h1>
          <p className="text-gray-500">彩礼数据可视化与分析工具</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <DownloadCloud className="h-4 w-4" />
            导出报告
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            筛选
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <CardTitle>彩礼趋势分析</CardTitle>
                <CardDescription>四省彩礼金额变化趋势</CardDescription>
              </div>
              <div className="flex gap-2">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="年份" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020年</SelectItem>
                    <SelectItem value="2021">2021年</SelectItem>
                    <SelectItem value="2022">2022年</SelectItem>
                    <SelectItem value="2023">2023年</SelectItem>
                    <SelectItem value="2024">2024年</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <TrendChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>高风险区域</CardTitle>
            <CardDescription>彩礼金额显著高于平均水平的区域</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="选择省份" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全部省份</SelectItem>
                  <SelectItem value="浙江省">浙江省</SelectItem>
                  <SelectItem value="福建省">福建省</SelectItem>
                  <SelectItem value="江西省">江西省</SelectItem>
                  <SelectItem value="安徽省">安徽省</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              {filteredAreas.map((area, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{area.area}</h4>
                      <p className="text-sm text-gray-500">{area.region}</p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        area.riskLevel === "高" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {area.riskLevel}风险
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">平均彩礼</p>
                      <p className="font-semibold">{area.avgDowry}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">全省平均</p>
                      <p className="font-semibold">{area.provincialAvg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="demographic">
        <TabsList className="mb-6">
          <TabsTrigger value="demographic">人口统计分析</TabsTrigger>
          <TabsTrigger value="economic">经济因素关联</TabsTrigger>
          <TabsTrigger value="cultural">文化因素分析</TabsTrigger>
          <TabsTrigger value="time">时间序列变化</TabsTrigger>
        </TabsList>
        <TabsContent value="demographic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>人口统计因素与彩礼关系</CardTitle>
              <CardDescription>分析不同人口统计因素对彩礼金额的影响</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg">
                <p className="text-gray-500">人口统计与彩礼分析图表内容</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="economic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>经济因素与彩礼关系</CardTitle>
              <CardDescription>分析地区经济发展水平、房价等因素与彩礼金额的关联</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg">
                <p className="text-gray-500">经济因素与彩礼分析图表内容</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cultural" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>文化因素与彩礼关系</CardTitle>
              <CardDescription>分析地区传统文化、价值观念等与彩礼金额的关联</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg">
                <p className="text-gray-500">文化因素与彩礼分析图表内容</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>彩礼金额的时间序列变化</CardTitle>
              <CardDescription>分析近年来彩礼金额的变化趋势与季节性波动</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg">
                <p className="text-gray-500">时间序列分析图表内容</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

