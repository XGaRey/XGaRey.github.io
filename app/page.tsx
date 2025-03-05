"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart2, FileText, AlertTriangle, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"
import RegionMap from "@/components/region-map"
import MainStats from "@/components/main-stats"
import TrendChart from "@/components/trend-chart"
import FeatureSection from "@/components/feature-section"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  数智彩礼平台
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  运用大数据分析彩礼趋势，促进婚姻和谐，建设理性文明的婚嫁文化
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard" passHref>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
                    数据分析中心
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services" passHref>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    公共服务
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:w-full">{isClient && <RegionMap />}</div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">全国彩礼概况</h2>
          <MainStats />

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle>浙闽赣皖四省彩礼趋势 (2020-2024)</CardTitle>
                <CardDescription>近五年四省彩礼金额变化趋势分析</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">{isClient && <TrendChart />}</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">平台核心功能</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                利用大数据技术分析彩礼趋势，促进婚姻家庭和谐
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <FeatureSection
              icon={<BarChart2 className="h-10 w-10 text-blue-600" />}
              title="数据采集与整合"
              description="整合婚姻登记系统、社会调研、舆情监测等多源数据，构建全面的彩礼信息库"
              href="/collection"
            />
            <FeatureSection
              icon={<FileText className="h-10 w-10 text-blue-600" />}
              title="智能分析与风险评估"
              description="运用机器学习模型建立区域彩礼基准线，识别高风险案例"
              href="/analysis"
            />
            <FeatureSection
              icon={<AlertTriangle className="h-10 w-10 text-blue-600" />}
              title="分级预警与干预"
              description="对异常高彩礼提供个体级和区域级预警，推荐针对性干预措施"
              href="/warning"
            />
            <FeatureSection
              icon={<BookOpen className="h-10 w-10 text-blue-600" />}
              title="公共服务与教育"
              description="提供彩礼合规性自查、匿名举报通道和婚俗知识普及"
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg?height=300&width=400" alt="江西某县应用案例" className="w-full h-auto" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">应用案例：江西某县</h2>
              <p className="text-gray-700">
                平台监测到A村彩礼中位数达28万元（全省平均8万元），自动标记为红色预警。县政府据此组织村干部入户宣传，并推出"婚嫁新风积分制"，半年后该村彩礼降至12万元。
              </p>
              <div className="flex space-x-4 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">28万</p>
                  <p className="text-sm text-gray-500">干预前</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">12万</p>
                  <p className="text-sm text-gray-500">干预后</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">57%</p>
                  <p className="text-sm text-gray-500">降幅</p>
                </div>
              </div>
              <Link href="/cases" passHref>
                <Button className="mt-4">
                  查看更多案例
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

