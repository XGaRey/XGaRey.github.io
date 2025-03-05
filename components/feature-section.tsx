import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureSectionProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

const FeatureSection = ({ icon, title, description, href }: FeatureSectionProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="p-2 rounded-full bg-blue-50">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <Link href={href} passHref>
          <Button variant="ghost" className="mt-2">
            了解更多
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default FeatureSection

