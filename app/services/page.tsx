"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Send, CheckCircle, FileText, BookOpen, AlertTriangle } from "lucide-react"

export default function ServicesPage() {
  const [submitted, setSubmitted] = useState(false)
  const [region, setRegion] = useState("")
  const [income, setIncome] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to the server
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">公共服务与教育</h1>
        <p className="text-gray-500">获取彩礼相关知识、建议和服务</p>
      </div>

      <Tabs defaultValue="self-check">
        <TabsList className="mb-6 w-full justify-start overflow-auto">
          <TabsTrigger value="self-check">彩礼合规性自查</TabsTrigger>
          <TabsTrigger value="report">匿名举报通道</TabsTrigger>
          <TabsTrigger value="education">婚俗知识普及</TabsTrigger>
        </TabsList>

        <TabsContent value="self-check" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>彩礼合规性自查工具</CardTitle>
              <CardDescription>根据您所在地区和经济状况，获取合理彩礼范围建议</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="region">所在地区</Label>
                    <Select value={region} onValueChange={setRegion} required>
                      <SelectTrigger id="region">
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
                    <Label htmlFor="city">城市/县区</Label>
                    <Select>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="选择城市/县区" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hangzhou">杭州市</SelectItem>
                        <SelectItem value="ningbo">宁波市</SelectItem>
                        <SelectItem value="wenzhou">温州市</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="income">年收入范围（万元）</Label>
                    <Select value={income} onValueChange={setIncome} required>
                      <SelectTrigger id="income">
                        <SelectValue placeholder="选择年收入范围" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under5">5万以下</SelectItem>
                        <SelectItem value="5to10">5-10万</SelectItem>
                        <SelectItem value="10to20">10-20万</SelectItem>
                        <SelectItem value="above20">20万以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="housing">是否有住房</Label>
                    <Select>
                      <SelectTrigger id="housing">
                        <SelectValue placeholder="选择住房情况" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="own">有自有住房</SelectItem>
                        <SelectItem value="mortgage">有按揭住房</SelectItem>
                        <SelectItem value="rent">租房</SelectItem>
                        <SelectItem value="none">无住房</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  获取建议
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    彩礼建议结果
                  </h3>
                  <p className="mb-2">
                    基于您提供的信息，建议的合理彩礼范围为：<span className="font-bold">8-12万元</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    该建议基于当地平均收入水平、房价、传统习俗等因素综合计算。仅供参考，实际情况应由双方家庭友好协商决定。
                  </p>
                  <div className="mt-4 p-3 bg-white rounded border border-gray-200">
                    <h4 className="font-medium mb-1">背景数据参考：</h4>
                    <ul className="text-sm space-y-1">
                      <li>当地平均彩礼：10.5万元</li>
                      <li>当地人均年收入：7.2万元</li>
                      <li>当地房价：均价约12000元/平方米</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  政策解读
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">了解最新的婚嫁政策法规和地方法规</p>
                <Button variant="outline" className="w-full">
                  查看政策文件
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  案例学习
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">查看彩礼纠纷调解和文明婚俗的典型案例</p>
                <Button variant="outline" className="w-full">
                  查看典型案例
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-blue-600" />
                  风险提示
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">了解高额彩礼带来的社会风险和法律风险</p>
                <Button variant="outline" className="w-full">
                  查看风险提示
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="report" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>匿名举报通道</CardTitle>
              <CardDescription>针对天价彩礼索要行为提供反馈入口，助力遏制高额彩礼</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="incident-location">事发地点</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select required>
                      <SelectTrigger id="incident-province">
                        <SelectValue placeholder="选择省份" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zhejiang">浙江省</SelectItem>
                        <SelectItem value="fujian">福建省</SelectItem>
                        <SelectItem value="jiangxi">江西省</SelectItem>
                        <SelectItem value="anhui">安徽省</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input id="incident-address" placeholder="详细地址（村/镇/街道）" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incident-amount">索要彩礼金额（万元）</Label>
                  <Input id="incident-amount" type="number" placeholder="例如：30" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incident-description">详细描述</Label>
                  <Textarea
                    id="incident-description"
                    placeholder="请描述事件详情，包括索要彩礼的方式、时间、涉及人员等信息"
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">联系方式（选填）</Label>
                  <Input id="contact" placeholder="电话或邮箱" />
                  <p className="text-xs text-gray-500">提供联系方式有助于我们跟进处理，我们将对您的信息严格保密</p>
                </div>

                <Button type="submit" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  提交举报
                </Button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg flex items-start">
                  <CheckCircle className="mt-0.5 mr-3 h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">举报已提交</h3>
                    <p className="text-sm text-gray-600">
                      感谢您的举报。我们将认真核实相关情况，并根据实际情况采取相应措施。
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>婚姻法规与政策解读</CardTitle>
                <CardDescription>了解婚姻相关法律法规和最新政策</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">《民法典》关于彩礼的规定</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      依据《民法典》第一千零四十二条，当事人可以约定婚姻关系存续期间所得财产以及婚前财产归各自所有、共同所有或部分各自所有、部分共同所有。
                    </p>
                    <Button variant="outline" size="sm">
                      查看详情
                    </Button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">彩礼返还的法律依据</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      《民法典》第一千零六十三条规定，因胁迫结婚的，受胁迫的一方可以向婚姻登记机关或人民法院请求撤销婚姻。
                    </p>
                    <Button variant="outline" size="sm">
                      查看详情
                    </Button>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">地方政府彩礼政策</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      各地方政府陆续出台规范彩礼的政策文件，倡导移风易俗，抵制天价彩礼。
                    </p>
                    <Button variant="outline" size="sm">
                      查看详情
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>文明婚俗宣传</CardTitle>
                <CardDescription>推广健康文明的婚俗观念</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">文明婚俗宣传视频</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <h3 className="font-medium mb-2">新时代婚俗倡议</h3>
                      <p className="text-sm">推行"婚事新办"，倡导婚事简办</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <h3 className="font-medium mb-2">集体婚礼</h3>
                      <p className="text-sm">政府组织的集体婚礼活动信息</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <h3 className="font-medium mb-2">先进典型</h3>
                      <p className="text-sm">抵制天价彩礼的模范人物和感人事迹</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <h3 className="font-medium mb-2">村规民约</h3>
                      <p className="text-sm">优秀的乡村彩礼限额村规民约示例</p>
                    </div>
                  </div>

                  <Button className="w-full">查看更多婚俗宣传内容</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>婚俗知识问答</CardTitle>
              <CardDescription>常见问题解答与互动交流</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">彩礼和嫁妆有什么区别？</h3>
                  <p className="text-sm text-gray-600">
                    彩礼是男方家庭给女方家庭的财物，而嫁妆是女方家庭给女儿的财物。两者在性质和归属上有明显区别，彩礼主要是婚前给付，嫁妆则是陪嫁物品。
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">法律上如何认定彩礼归属？</h3>
                  <p className="text-sm text-gray-600">
                    根据最高人民法院的司法解释，彩礼的归属应当根据当地风俗习惯、给付目的、数额大小以及双方经济状况等因素综合考虑。符合特定条件的情况下，彩礼可以要求返还。
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">什么情况下可以要求返还彩礼？</h3>
                  <p className="text-sm text-gray-600">
                    根据司法实践，以下情况一般可以要求返还彩礼：双方未办理结婚登记手续；办理结婚登记手续但确未共同生活；婚前给付并导致给付人生活困难。
                  </p>
                </div>

                <form className="pt-4">
                  <div className="flex gap-2">
                    <Input placeholder="输入您的婚俗相关问题..." className="flex-1" />
                    <Button type="submit">提问</Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

