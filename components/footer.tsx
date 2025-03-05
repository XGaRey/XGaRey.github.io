import Link from "next/link"
import { BarChart2 } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">数智彩礼</span>
            </div>
            <p className="text-sm text-muted-foreground">
              运用大数据分析彩礼趋势，促进婚姻和谐，建设理性文明的婚嫁文化
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">平台功能</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/collection" className="text-muted-foreground hover:text-foreground">
                  数据采集与整合
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="text-muted-foreground hover:text-foreground">
                  智能分析与风险评估
                </Link>
              </li>
              <li>
                <Link href="/warning" className="text-muted-foreground hover:text-foreground">
                  分级预警与干预
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  公共服务与教育
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">资源链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cases" className="text-muted-foreground hover:text-foreground">
                  应用案例
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                  文明婚俗资源
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-muted-foreground hover:text-foreground">
                  政策解读
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">电话: 0791-88888888</li>
              <li className="text-muted-foreground">邮箱: service@dowry-data.gov.cn</li>
              <li className="text-muted-foreground">地址: 浙江省杭州市西湖区政务大楼B座</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2024 数智彩礼平台. 浙闽赣皖四省民政部门联合开发
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              使用条款
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              隐私政策
            </Link>
            <Link href="/feedback" className="text-xs text-muted-foreground hover:text-foreground">
              意见反馈
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

