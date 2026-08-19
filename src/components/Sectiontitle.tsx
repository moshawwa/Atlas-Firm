import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  dark = false,
}) => {
  return (
    <div className={`mb-5 ${center ? "text-center mx-auto" : ""}`} style={{ maxWidth: center ? "750px" : "100%" }}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className={`fw-bold display-6 mb-3 ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`fs-5 ${dark ? "text-slate-400" : "text-muted"}`} style={{ lineHeight: "1.7" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
