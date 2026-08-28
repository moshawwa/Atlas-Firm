import React from "react";
import type { Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { FiX, FiCheckCircle, FiMapPin, FiCalendar, FiUser, FiMaximize2 } from "react-icons/fi";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isRtl } = useLanguage();

  if (!project) return null;

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        {/* Modal Header Image / Banner */}
        <div style={{ position: "relative", height: "340px", backgroundColor: "#0f172a" }}>
          <img
            src={project.mainImage}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(to top, rgba(15,23,42,0.95), transparent)",
              padding: "30px",
            }}
          >
            <span className="atlas-card-badge mb-2 d-inline-block" style={{ position: "static" }}>
              {isRtl ? project.categoryAr : project.category}
            </span>
            <h2 className="text-white fw-bold m-0">{isRtl ? project.titleAr : project.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 p-lg-5">
          <div className="row g-4 mb-4">
            {/* Left Column: Metadata Specs */}
            <div className="col-md-4">
              <div className="p-3 bg-light rounded-3 border">
                <h6 className="fw-bold mb-3 text-uppercase text-primary" style={{ letterSpacing: "1px" }}>
                  {t("تفاصيل المشروع", "Project Specifications")}
                </h6>
                <div className="d-flex flex-column gap-3 small">
                  <div className="d-flex align-items-center gap-2">
                    <FiUser className="text-gold flex-shrink-0" />
                    <div>
                      <strong className="d-block">{t("العميل:", "Client:")}</strong>
                      <span>{isRtl ? project.clientAr : project.client}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <FiMapPin className="text-gold flex-shrink-0" />
                    <div>
                      <strong className="d-block">{t("الموقع:", "Location:")}</strong>
                      <span>{isRtl ? project.locationAr : project.location}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <FiCalendar className="text-gold flex-shrink-0" />
                    <div>
                      <strong className="d-block">{t("سنة التنفيذ:", "Year:")}</strong>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <FiMaximize2 className="text-gold flex-shrink-0" />
                    <div>
                      <strong className="d-block">{t("المساحة الإجمالية:", "Total Area:")}</strong>
                      <span>{isRtl ? project.areaAr : project.area}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-top">
                    <span className="badge bg-primary px-3 py-2 fs-6">
                      {t("حالة المشروع:", "Status:")} {isRtl ? project.statusAr : project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Description & Key Specs */}
            <div className="col-md-8">
              <h5 className="fw-bold mb-3 text-slate-900">{t("نظرة عامة على المشروع", "Project Overview")}</h5>
              <p className="text-muted leading-relaxed mb-4">{isRtl ? project.fullDescriptionAr : project.fullDescription}</p>

              <h6 className="fw-bold mb-3 text-slate-900">{t("المواصفات الفنية والإنشائية الرئيسية", "Key Engineering & Technical Specs")}</h6>
              <div className="row g-2">
                {project.keySpecs.map((spec, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="d-flex align-items-start gap-2 p-2 bg-slate-50 rounded">
                      <FiCheckCircle className="text-success mt-1 flex-shrink-0" />
                      <div>
                        <strong className="d-block small text-dark">{isRtl ? spec.labelAr : spec.label}</strong>
                        <span className="small text-muted">{isRtl ? spec.valueAr : spec.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-end pt-3 border-top d-flex justify-content-end gap-2">
            <button className="btn btn-secondary px-4" onClick={onClose}>
              {t("إغلاق", "Close")}
            </button>
            <a href="/contact" className="btn btn-atlas-primary px-4">
              {t("استفسر عن مشروع مماثل", "Inquire About Similar Project")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
