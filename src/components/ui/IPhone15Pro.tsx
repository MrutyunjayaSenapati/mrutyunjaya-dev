import type { HTMLProps } from "react";

export interface IPhone15ProProps extends HTMLProps<HTMLDivElement> {
  src?: string;
  videoSrc?: string;
  children?: React.ReactNode;
}

export default function IPhone15Pro({
  src,
  videoSrc,
  children,
  className = "",
  ...props
}: IPhone15ProProps) {
  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      {...props}
    >
      {/* Phone Frame SVG */}
      <svg
        viewBox="0 0 433 882"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none relative z-20 h-full w-full"
      >
        {/* Outer Shadow & Titanium Bezel */}
        <rect
          x="4.5"
          y="4.5"
          width="424"
          height="873"
          rx="63.5"
          stroke="#383836"
          strokeWidth="9"
        />
        <rect
          x="9"
          y="9"
          width="415"
          height="864"
          rx="59"
          stroke="#1d1d1b"
          strokeWidth="6"
        />
        <rect
          x="14"
          y="14"
          width="405"
          height="854"
          rx="54"
          fill="none"
        />

        {/* Screen Bezel Inset Border */}
        <rect
          x="19"
          y="19"
          width="395"
          height="844"
          rx="49"
          stroke="#262624"
          strokeWidth="2"
        />

        {/* Dynamic Island */}
        <rect
          x="151"
          y="29"
          width="131"
          height="35"
          rx="17.5"
          fill="#000000"
        />
        {/* Camera sensor & lens reflections */}
        <circle cx="256" cy="46.5" r="5.5" fill="#121212" />
        <circle cx="256" cy="46.5" r="2.5" fill="#0b1b36" />
        <circle cx="176" cy="46.5" r="4.5" fill="#121212" />

        {/* Home Indicator Bar */}
        <rect
          x="147"
          y="852"
          width="139"
          height="5"
          rx="2.5"
          fill="#ffffff"
          fillOpacity="0.4"
        />
      </svg>

      {/* Screen Viewport Container */}
      <div
        className="absolute inset-[4.4%] z-10 overflow-hidden rounded-[46px] bg-[#0c0c0b]"
        style={{
          width: "91.2%",
          height: "95.6%",
          top: "2.2%",
          left: "4.4%",
        }}
      >
        {children ? (
          <div className="h-full w-full overflow-y-auto no-scrollbar">{children}</div>
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : src ? (
          <img
            src={src}
            alt="Mobile App Interface"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}
