import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projectsData, type Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import {
  FiSearch,
  FiMapPin,
  FiCalendar,
  FiArrowUpRight,
  FiLayers,
  FiList,
  FiGrid
} from "react-icons/fi";

const Projects = () => {
  const { t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { key: "All", label: t("جميع المشاريع", "All Projects") },
    { key: "Architectural", label: t("تصميم معماري", "Architectural Design") },
    { key: "Structural", label: t("هندسة إنشائية", "Structural Engineering") },
    { key: "Interior", label: t("تصميم داخلي وديكور", "Interior Design") },
    { key: "Urban", label: t("تخطيط عمراني", "Urban Master Planning") },
    { key: "Sustainable", label: t("مباني خضراء ومستدامة", "Sustainable Green Buildings") }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.titleAr.includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner */}
      <section className="banner-projects position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("معرض الأعمال", "OUR PORTFOLIO")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("سجل حافل بالمشاريع الهندسية والمعمارية المتميزة", "A Proven Track Record of Engineering Excellence")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ color: "white", lineHeight: "1.8" }}>
                {t(
                  "تصفح نماذج من المشاريع المعمارية والإنشائية والتخطيطية التي قمنا بإعداد تصاميمها والإشراف عليها.",
                  "Explore real case studies of architectural designs, structural calculations, and master plans delivered by Atlas."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter, Search & View Switcher Bar */}
      <section className="py-4 bg-light-slate border-bottom">
        <div className="container px-4 px-lg-5">
          <div className="row g-3 align-items-center justify-content-between">
            {/* Category Tabs */}
            <div className="col-lg-7">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`filter-btn ${selectedCategory === cat.key ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input & View Toggle */}
            <div className="col-lg-5">
              <div className="d-flex align-items-center gap-2">
                <div className="input-group flex-grow-1">
                  <span className="input-group-text bg-white border-end-0">
                    <FiSearch className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0 ps-0"
                    placeholder={t("بحث عن مشروع، موقع، أو عميل...", "Search by project, location, or client...")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* View Mode Toggle Buttons */}
                <div className="btn-group bg-white p-1 rounded border">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`btn btn-sm ${viewMode === "list" ? "btn-primary text-white" : "btn-light text-muted"}`}
                    title={t("عرض القائمة (List View)", "List View")}
                  >
                    <FiList size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`btn btn-sm ${viewMode === "grid" ? "btn-primary text-white" : "btn-light text-muted"}`}
                    title={t("عرض الشبكة (Grid View)", "Grid View")}
                  >
                    <FiGrid size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Container */}
      <section className="section-padding projects-section-bg">
        <div className="container px-4 px-lg-5">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="text-muted fw-bold mb-2">{t("لا توجد مشاريع تطابق البحث", "No projects match your search")}</h4>
              <p className="text-slate-400">{t("يرجى تجربة تغيير فئة التصفية أو البحث عن كلمة أخرى.", "Try selecting a different category or search term.")}</p>
              <button
                className="btn btn-outline-primary mt-2"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                {t("إعادة ضبط الفلاتر", "Reset Filters")}
              </button>
            </div>
          ) : viewMode === "list" ? (
            /* Architectural Portfolio List View (Matching Uploaded Image) */
            <div className="project-list-container">
              {filteredProjects.map((project, idx) => {
                const formattedNum = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={project.id}
                    className="project-list-row"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <div className="d-flex align-items-center gap-4">
                      <span className="project-list-num">{formattedNum}</span>
                      <h3 className="project-list-title">
                        {isRtl ? project.titleAr : project.title}
                      </h3>
                    </div>

                    <div className="d-flex align-items-center gap-4 gap-md-5">
                      <span className="project-list-category d-none d-md-inline">
                        {isRtl ? project.categoryAr : project.category}
                      </span>
                      <span className="project-list-year">{project.year}</span>
                      <FiArrowUpRight className="text-gold" size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Cards Grid View */
            <div className="row g-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div className="atlas-card">
                    <div className="atlas-card-img-wrapper">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="atlas-card-img"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <span className="atlas-card-badge">{isRtl ? project.categoryAr : project.category}</span>
                    </div>

                    <div className="atlas-card-body">
                      <h5 className="fw-bold mb-2 text-slate-900">{isRtl ? project.titleAr : project.title}</h5>
                      
                      <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: "1.6" }}>
                        {isRtl ? project.summaryAr : project.summary}
                      </p>

                      <div className="d-flex flex-column gap-2 mb-3 pt-3 border-top small text-muted">
                        <div className="d-flex align-items-center gap-2">
                          <FiMapPin className="text-gold flex-shrink-0" />
                          <span>{isRtl ? project.locationAr : project.location}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="d-flex align-items-center gap-2">
                            <FiCalendar className="text-gold flex-shrink-0" />
                            <span>{t(`عام ${project.year}`, `Year ${project.year}`)}</span>
                          </span>
                          <span className="d-flex align-items-center gap-2">
                            <FiLayers className="text-gold flex-shrink-0" />
                            <span>{isRtl ? project.areaAr : project.area}</span>
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="btn-atlas-primary w-100 justify-content-center mt-2"
                      >
                        {t("عرض كافة تفاصيل المشروع", "View Project Details")}
                        <FiArrowUpRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal Popup Component */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};

export default Projects;
