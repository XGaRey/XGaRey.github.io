// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 导航栏滚动效果
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      // 向下滚动
      header.style.transform = "translateY(-100%)"
    } else {
      // 向上滚动
      header.style.transform = "translateY(0)"
    }

    // 当滚动到顶部时，始终显示导航栏
    if (scrollTop === 0) {
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // 数字增长动画
  const statNumbers = document.querySelectorAll(".stat-number")

  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)

      // 处理带有+号的数字
      if (element.textContent.includes("+")) {
        element.textContent = value + "+"
      } else {
        element.textContent = value
      }

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  // 检测元素是否在视口中
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // 滚动时检测并触发动画
  let animated = false
  window.addEventListener("scroll", () => {
    if (!animated && isInViewport(document.querySelector(".statistics"))) {
      statNumbers.forEach((statNumber) => {
        const finalValue = Number.parseInt(statNumber.textContent.replace(/\D/g, ""))
        animateValue(statNumber, 0, finalValue, 2000)
      })
      animated = true
    }
  })

  // 初始检查，如果统计部分在视口中，立即触发动画
  if (isInViewport(document.querySelector(".statistics"))) {
    statNumbers.forEach((statNumber) => {
      const finalValue = Number.parseInt(statNumber.textContent.replace(/\D/g, ""))
      animateValue(statNumber, 0, finalValue, 2000)
    })
    animated = true
  }
})

