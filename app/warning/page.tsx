"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, BarChart3, FileText, Activity, Filter } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function WarningPage() {
  const [selectedProvince, setSelectedProvince] = useState<string>("all")

  // Mock data for warnings
  const warnings = [
    {
      id: 1,
      region: "江西省萍乡市莲花县",
      level: "高",
      avgDowry: "28.5万",
      provincialAvg: "11.2万",
      diff: "154%",
      trend: "上升",
      status: "待处理",
    },
    {
      id: 2,
      region: "江西省吉安市遂川县",
      level: "高",
      avgDowry: "24.7万",
      provincialAvg: "11.2万",
      diff: "120%",
      trend: "上升",
      status: "处理中",
    },
    {
      id: 3,
      region: "浙江省温州市泰顺县",
      level: "中",
      avgDowry: "22.3万",
      provincialAvg: "15.6万",
      diff: "43%",
      trend: "稳定",
      status: "待处理",
    },
    {
      id: 4,
      region: "福建省龙岩市永定区",
      level: "中",
      avgDowry: "21.6万",
      provincialAvg: "12.8万",
      diff: "69%",
      trend: "上升",
      status: "已处理",
    },
    {
      id: 5,
      region: "安徽省阜阳市阜南县",
      level: "中",
      avgDowry: "18.2万",
      provincialAvg: "9.5万",
      diff: "92%",
      trend: "稳定",
      status: "处理中",
    },
  ]

  // Filter warnings based on selected province
  const filteredWarnings =
    selectedProvince === "all" ? warnings : warnings.filter((warning) => warning.region.includes(selectedProvince))

  // Function to get color based on risk level
  const getLevelColor = (level: string) => {
    switch (level) {
      case "高":
        return "bg-red-100 text-red-800"
      case "中":
        return "bg-yellow-100 text-yellow-800"
      case "低":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Function to get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "待处理":
        return "bg-gray-100 text-gray-800"
      case "处理中":
        return "bg-blue-100 text-blue-800"
      case "已处理":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Function to get progress value based on status
  const getProgressValue = (status: string) => {
    switch (status) {
      case "待处理":
        return 0
      case "处理中":
        return 50
      case "已处理":
        return 100
      default:
        return 0
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">分级预警与干预</h1>
          <p className="text-gray-500">识别异常高彩礼现象，提供干预建议</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger className="w-[150px]">
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
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            筛选
          </Button>
        </div>
      </div>

      <Tabs defaultValue="region">
        <TabsList className="mb-6">
          <TabsTrigger value="region">区域级预警</TabsTrigger>
          <TabsTrigger value="individual">个体级预警</TabsTrigger>
          <TabsTrigger value="intervention">干预建议</TabsTrigger>
        </TabsList>

        <TabsContent value="region" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                  高风险区域
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8个</div>
                <p className="text-sm text-gray-500">彩礼超出省均值100%以上的区域</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-yellow-500" />
                  中风险区域
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">34个</div>
                <p className="text-sm text-gray-500">彩礼超出省均值50%-100%的区域</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-500" />
                  干预进行中
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">15个</div>
                <p className="text-sm text-gray-500">正在实施干预措施的区域</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-green-500" />
                  效果跟踪
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">67%</div>
                <p className="text-sm text-gray-500">干预区域彩礼下降比例</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>区域级预警列表</CardTitle>
              <CardDescription>彩礼金额显著高于省级均值的区域</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredWarnings.map((warning) => (
                  <div key={warning.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                      <div>
                        <h3 className="font-medium">{warning.region}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded text-xs ${getLevelColor(warning.level)}`}>
                            {warning.level}风险
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(warning.status)}`}>
                            {warning.status}
                          </span>
                        </div>
                      </div>
                      <Button size="sm">查看详情</Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">平均彩礼</p>
                        <p className="font-semibold">{warning.avgDowry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">省级均值</p>
                        <p className="font-semibold">{warning.provincialAvg}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">超出比例</p>
                        <p className="font-semibold text-red-600">+{warning.diff}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">趋势</p>
                        <p className="font-semibold">{warning.trend}</p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">干预进度</p>
                      <Progress value={getProgressValue(warning.status)} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>高风险区域分布地图</CardTitle>
              <CardDescription>可视化展示高风险区域的地理分布</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg">
                <p className="text-gray-500">高风险区域分布地图内容</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>个体级预警系统</CardTitle>
              <CardDescription>识别单个婚姻登记中的异常高彩礼情况</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-500">本月预警案例</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">27</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-500">已介入调解</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">18</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-gray-500">成功调解率</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">72%</div>
                  </CardContent>
                </Card>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg mb-6">
                <h3 className="font-medium mb-2">个体预警标准</h3>
                <p className="text-sm text-gray-600 mb-4">
                  当婚姻登记中填报的彩礼金额超过当地平均水平的300%时，系统将自动触发个体级预警，提示民政部门介入调解。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500">常规水平</p>
                    <p className="font-medium">≤当地均值150%</p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500">关注水平</p>
                    <p className="font-medium">当地均值150%-300%</p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <p className="text-xs text-gray-500">预警水平</p>
                    <p className="font-medium">≥当地均值300%</p>
                    <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">模拟预警检测</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="region-check">所在地区</Label>
                    <Select>
                      <SelectTrigger id="region-check">
                        <SelectValue placeholder="选择省份" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zhejiang">浙江省</SelectItem>
                        <SelectItem value="fujian">福建省</SelectItem>
                        <SelectItem value="jiangxi">江西省</SelectItem>
                        <SelectItem value="anhui">安徽省</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city-check">城市/县区</Label>
                    <Select>
                      <SelectTrigger id="city-check">
                        <SelectValue placeholder="选择城市/县区" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="city1">城市1</SelectItem>
                        <SelectItem value="city2">城市2</SelectItem>
                        <SelectItem value="city3">城市3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dowry-amount">彩礼金额（万元）</Label>
                    <Input id="dowry-amount" type="number" placeholder="例如：20" />
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full">检测风险等级</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intervention" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>干预建议生成</CardTitle>
              <CardDescription>为高风险区域提供针对性的干预措施建议</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg mb-6">
                <h3 className="font-medium mb-2">干预措施类型</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">政策引导类</h4>
                    <p className="text-xs text-gray-600">通过政策文件、宣传引导等方式规范彩礼行为</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">示范带动类</h4>
                    <p className="text-xs text-gray-600">通过典型案例宣传、集体婚礼等示范活动</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">规则约束类</h4>
                    <p className="text-xs text-gray-600">通过村规民约、行业协议等形式约束彩礼行为</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-medium">干预建议生成器</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-region">目标区域</Label>
                    <Select>
                      <SelectTrigger id="target-region">
                        <SelectValue placeholder="选择区域" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="region1">江西省萍乡市莲花县</SelectItem>
                        <SelectItem value="region2">江西省吉安市遂川县</SelectItem>
                        <SelectItem value="region3">浙江省温州市泰顺县</SelectItem>
                        <SelectItem value="region4">福建省龙岩市永定区</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="risk-level">风险等级</Label>
                    <Select>
                      <SelectTrigger id="risk-level">
                        <SelectValue placeholder="选择风险等级" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">高风险</SelectItem>
                        <SelectItem value="medium">中风险</SelectItem>
                        <SelectItem value="low">低风险</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="local-factors">当地特殊因素（可选）</Label>
                    <Input id="local-factors" placeholder="例如：当地有特殊婚俗传统、经济因素等" />
                  </div>

                  <div className="md:col-span-2">
                    <Button className="w-full">生成干预建议</Button>
                  </div>
                </div>
              </div>

              <Card className="border-dashed">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">江西省萍乡市莲花县干预建议</CardTitle>
                  <CardDescription>基于当地彩礼数据和社会经济因素生成</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="font-medium mb-1 text-red-800">风险评估</h4>
                      <p className="text-sm">
                        该地区彩礼均值28.5万元，超出全省平均水平154%，呈持续上升趋势，已对当地青年婚恋和家庭经济造成较大压力。
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">建议干预措施：</h4>
                      <ol className="space-y-3 list-decimal pl-5">
                        <li className="text-sm">
                          <span className="font-medium">政策宣导：</span>
                          组织村干部入户宣传，解读省市县相关政策文件，普及高额彩礼的法律风险和社会危害。
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">典型示范：</span>
                          邀请本地青年参与"零彩礼"或"低彩礼"集体婚礼活动，树立新时代婚俗典范。
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">村规民约：</span>
                          协助村委会修订村规民约，将彩礼限额纳入其中，建议上限不超过15万元。
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">积分激励：</span>
                          推出"婚嫁新风积分制"，低彩礼家庭可获积分，用于兑换公共服务或政策优惠。
                        </li>
                        <li className="text-sm">
                          <span className="font-medium">曝光机制：</span>
                          设置举报渠道，对天价彩礼行为进行适当曝光，形成社会舆论压力。
                        </li>
                      </ol>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-1">预期效果</h4>
                      <p className="text-sm">
                        预计通过6个月的综合干预，该地区彩礼均值可下降至15-18万元区间，降幅约为35%-47%。
                      </p>
                    </div>

                    <Button className="w-full">生成完整报告</Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

