"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { BarChart2, TrendingUp, Home, Users, DownloadCloud } from "lucide-react"

export default function AnalysisPage() {
  const [selectedFactor, setSelectedFactor] = useState<string>("economic")

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">智能分析与风险评估</h1>
          <p className="text-gray-500">利用机器学习模型分析彩礼与各种因素的关联性</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <DownloadCloud className="h-4 w-4" />
          导出分析报告
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <CardTitle>影响因素分析</CardTitle>
                <CardDescription>分析各种因素对彩礼金额的影响程度</CardDescription>
              </div>
              <div>
                <Select value={selectedFactor} onValueChange={setSelectedFactor}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="选择影响因素" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economic">经济因素</SelectItem>
                    <SelectItem value="demographic">人口因素</SelectItem>
                    <SelectItem value="cultural">文化因素</SelectItem>
                    <SelectItem value="education">教育因素</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] flex items-center justify-center bg-gray-50 border rounded-lg">
              <p className="text-gray-500">影响因素分析图表内容</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>关键影响因素排名</CardTitle>
            <CardDescription>基于机器学习模型的特征重要性</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">房价水平</span>
                </div>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">人均收入</span>
                </div>
                <span className="text-sm font-medium">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "72%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">男女比例</span>
                </div>
                <span className="text-sm font-medium">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">婚嫁传统</span>
                </div>
                <span className="text-sm font-medium">63%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "63%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="risk-model">
        <TabsList className="mb-6">
          <TabsTrigger value="risk-model">风险评估模型</TabsTrigger>
          <TabsTrigger value="correlation">关联性分析</TabsTrigger>
          <TabsTrigger value="prediction">趋势预测</TabsTrigger>
          <TabsTrigger value="model-details">模型详情</TabsTrigger>
        </TabsList>

        <TabsContent value="risk-model" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>区域彩礼风险评估模型</CardTitle>
              <CardDescription>基于机器学习的彩礼风险评估系统</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg mb-6">
                <h3 className="font-medium mb-2">风险评估维度</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">金额偏离度</h4>
                    <p className="text-xs text-gray-600">彩礼金额与当地均值的偏离程度</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">增长速度</h4>
                    <p className="text-xs text-gray-600">近3年彩礼金额增长速度</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">收入占比</h4>
                    <p className="text-xs text-gray-600">彩礼金额占当地年收入倍数</p>
                  </div>
                </div>
              </div>

              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg mb-6">
                <p className="text-gray-500">风险评估模型可视化内容</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">模型精度与性能</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">准确率</p>
                    <p className="text-xl font-bold">92.7%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">召回率</p>
                    <p className="text-xl font-bold">88.4%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">F1分数</p>
                    <p className="text-xl font-bold">90.5%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">模型类型</p>
                    <p className="text-xl font-bold">随机森林</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="correlation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>彩礼与经济指标关联性分析</CardTitle>
              <CardDescription>分析彩礼金额与经济指标、文化因素的关联性</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-lg">
                  <p className="text-gray-500">彩礼与房价关系图表</p>
                </div>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-lg">
                  <p className="text-gray-500">彩礼与收入关系图表</p>
                </div>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-lg">
                  <p className="text-gray-500">彩礼与性别比例图表</p>
                </div>
                <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-lg">
                  <p className="text-gray-500">彩礼与教育水平图表</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">关键发现</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-sm">彩礼金额与当地房价呈现强相关性(r=0.83)，房价每上涨10%，彩礼平均上涨8.7%</li>
                  <li className="text-sm">彩礼金额与人均可支配收入呈中度相关(r=0.62)，但区域差异显著</li>
                  <li className="text-sm">男女性别比例失衡地区，彩礼金额明显高于性别比例平衡地区</li>
                  <li className="text-sm">文化传统浓厚地区，彩礼金额对经济因素的敏感性较低</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prediction" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>彩礼趋势预测</CardTitle>
              <CardDescription>预测未来可能出现的彩礼上涨区域</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-gray-50 border rounded-lg mb-6">
                <p className="text-gray-500">彩礼趋势预测图表内容</p>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg mb-6">
                <h3 className="font-medium mb-2 flex items-center text-orange-800">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  潜在上涨风险区域
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">浙江省衢州市</h4>
                    <p className="text-xs text-gray-600">预计上涨幅度：15%-20%</p>
                    <p className="text-xs text-gray-600">主要影响因素：房价上涨、人口流入</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">福建省南平市</h4>
                    <p className="text-xs text-gray-600">预计上涨幅度：12%-18%</p>
                    <p className="text-xs text-gray-600">主要影响因素：文化传统、男女比例</p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h4 className="font-medium mb-1">江西省上饶市</h4>
                    <p className="text-xs text-gray-600">预计上涨幅度：10%-15%</p>
                    <p className="text-xs text-gray-600">主要影响因素：周边地区带动</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">预测方法说明</h3>
                <p className="text-sm text-gray-600 mb-4">
                  趋势预测基于时间序列分析和多因素综合模型，考虑历史数据、区域关联性、经济发展趋势等因素，预测未来1-3年的彩礼变化趋势。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500">短期预测准确率</p>
                    <p className="text-xl font-bold">87.3%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">中期预测准确率</p>
                    <p className="text-xl font-bold">76.5%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">长期预测准确率</p>
                    <p className="text-xl font-bold">68.2%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="model-details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>模型架构与数据源</CardTitle>
              <CardDescription>了解智能分析与风险评估系统的技术细节</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-3">数据来源</h3>
                  <ul className="space-y-2">
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                      <span>婚姻登记系统彩礼申报数据（覆盖率：68%）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                      <span>社会调研数据（样本量：24,732家庭）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                      <span>社交媒体与婚恋平台舆情数据（文本量：82万条）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                      <span>历史案例数据（婚嫁案例：15,463例；纠纷案例：3,271例）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                      <span>经济指标数据（房价、收入、消费等）</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-3">算法模型</h3>
                  <ul className="space-y-2">
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                      <span>风险评估：随机森林分类器（特征数：42）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                      <span>聚类分析：K-means算法（用于识别高风险区域）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                      <span>自然语言处理：BERT模型（用于舆情情感分析）</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                      <span>时间序列预测：ARIMA与深度学习混合模型</span>
                    </li>
                    <li className="text-sm flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                      <span>关联性分析：多元回归与相关性分析</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-lg mb-6">
                <p className="text-gray-500">系统架构图内容</p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">模型优化与更新机制</h3>
                <p className="text-sm text-gray-600 mb-4">
                  系统采用增量学习机制，每季度基于新增数据更新模型参数，确保模型持续适应彩礼变化趋势。同时，系统会根据预测结果与实际情况对比，自动调整模型权重，提高预测准确性。
                </p>
                <Button variant="outline" className="w-full">
                  查看模型技术文档
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

