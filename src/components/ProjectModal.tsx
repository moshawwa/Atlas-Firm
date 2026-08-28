import React, { useState, useEffect } from "react";
import type { Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import {
  FiX,
  FiCheckCircle,
  FiMapPin,
  FiCalendar,
  FiUser,
  FiMaximize2,
  FiChevronLeft,
  FiChevronRight,
  FiImage
} from "react-icons/fi";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isRtl } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsFullScreen(false);
  }, [project]);

  if (!project) return null;

  const currentGallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.mainImage];
  const activeImage = currentGallery[activeImageIndex] || project.mainImage;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="modal-backdrop-custom" onClick={onClose}>
        <div
          className="modal-content-custom"
          onClick={(e) => e.stopPropagation()}
          style={{ maxWidth: "1000px", width: "95%" }}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FiX />
          </button>

          {/* Modal Interactive Main Image Showcase */}
          <div style={{ position: "relative", height: "420px", backgroundColor: "#0f172a", overflow: "hidden" }}>
            <img
              src={activeImage}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "all 0.3s ease" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            {/* Navigation Arrows for Gallery */}
            {currentGallery.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="btn btn-dark rounded-circle p-2 position-absolute top-50 start-0 translate-middle-y ms-3 opacity-75 hover-opacity-100"
                  aria-label="Previous photo"
                  style={{ zIndex: 10 }}
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="btn btn-dark rounded-circle p-2 position-absolute top-50 end-0 translate-middle-y me-3 opacity-75 hover-opacity-100"
                  aria-label="Next photo"
                  style={{ zIndex: 10 }}
                >
                  <FiChevronRight size={24} />
                </button>
              </>
            )}

            {/* Fullscreen Expand Trigger */}
            <button
              onClick={() => setIsFullScreen(true)}
              className="btn btn-sm btn-dark rounded-pill px-3 py-1 position-absolute top-0 end-0 mt-3 me-5 opacity-85 hover-opacity-100 d-flex align-items-center gap-1"
              style={{ zIndex: 10, fontSize: "12px" }}
            >
              <FiMaximize2 size={14} />
              <span>{t("تكبير الصورة", "Expand Image")}</span>
            </button>

            {/* Title Overlay Banner */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(15,23,42,0.96), transparent)",
                padding: "24px 30px 18px 30px",
                zIndex: 5
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="atlas-card-badge mb-2 d-inline-block" style={{ position: "static" }}>
                    {isRtl ? project.categoryAr : project.category}
                  </span>
                  <h3 className="text-white fw-bold m-0">{isRtl ? project.titleAr : project.title}</h3>
                </div>
                <div className="text-end text-gold small d-none d-sm-block">
                  <FiImage className="me-1" />
                  <span>{activeImageIndex + 1} / {currentGallery.length} {t("صور", "Photos")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails Strip */}
          {currentGallery.length > 1 && (
            <div className="p-3 bg-slate-900 border-bottom overflow-x-auto d-flex gap-2">
              {currentGallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`border-0 p-0 rounded overflow-hidden flex-shrink-0 position-relative ${
                    activeImageIndex === idx ? "ring-2 ring-gold" : "opacity-60 hover-opacity-100"
                  }`}
                  style={{
                    width: "80px",
                    height: "55px",
                    cursor: "pointer",
                    outline: activeImageIndex === idx ? "2px solid #d97706" : "none"
                  }}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Modal Content Details */}
          <div className="p-4 p-lg-5">
            <div className="row g-4 mb-4">
              {/* Specs Box */}
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

              {/* Description & Key Specs */}
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

      {/* Lightbox Full Screen View */}
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setIsFullScreen(false)}
        >
          <button
            onClick={() => setIsFullScreen(false)}
            className="btn btn-light rounded-circle p-2 position-absolute top-0 end-0 mt-4 me-4"
          >
            <FiX size={24} />
          </button>
          <img
            src={activeImage}
            alt={project.title}
            style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
};

export default ProjectModal;
