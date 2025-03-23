"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  spotlight?: boolean
  spotlightColor?: string
  borderColor?: string
  children?: React.ReactNode
}

const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      className,
      children,
      as: Component = "div",
      spotlight = true,
      spotlightColor = "rgba(120, 0, 255, 0.15)",
      borderColor = "rgba(120, 0, 255, 0.7)",
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const mousePositionRef = React.useRef({ x: 0, y: 0 })
    const [isFocused, setIsFocused] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = React.useState(0)

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      mousePositionRef.current = { x, y }
      setPosition({ x, y })
      setOpacity(1)
    }, [])

    const handleMouseLeave = React.useCallback(() => {
      setOpacity(0)
      setIsFocused(false)
    }, [])

    const handleMouseEnter = React.useCallback(() => {
      setIsFocused(true)
    }, [])

    return (
      <Component
        ref={containerRef}
        className={cn(
          "relative rounded-xl overflow-hidden border border-transparent transition-colors",
          isFocused ? "border-opacity-100" : "border-opacity-0",
          className,
        )}
        style={{
          borderColor: isFocused ? borderColor : "transparent",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {spotlight && (
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity"
            style={{
              opacity,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
            }}
          />
        )}
        {children}
      </Component>
    )
  },
)

MagicCard.displayName = "MagicCard"

export { MagicCard }

