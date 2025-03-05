"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart2, Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">数智彩礼</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
            数据中心
          </Link>
          <Link href="/analysis" className="text-sm font-medium hover:text-primary">
            风险评估
          </Link>
          <Link href="/warning" className="text-sm font-medium hover:text-primary">
            预警干预
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            公共服务
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" passHref>
            <Button variant="outline">登录</Button>
          </Link>
          <Button>政府部门入口</Button>
        </div>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              数据中心
            </Link>
            <Link href="/analysis" className="text-sm font-medium hover:text-primary">
              风险评估
            </Link>
            <Link href="/warning" className="text-sm font-medium hover:text-primary">
              预警干预
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              公共服务
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/login" passHref>
                <Button variant="outline" className="w-full">
                  登录
                </Button>
              </Link>
              <Button className="w-full">政府部门入口</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

