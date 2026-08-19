import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projectsData, type Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { FiSearch, FiMaximize2, FiMapPin, FiCalendar } from "react-icons/fi";

const Projects = () => {
  const { t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { key: "All", label: t("جميع المشاريع", "All Projects") },
    { key: "Architectural", label: t("معماري", "Architectural") },
    { key: "Structural", label: t("إنشائي", "Structural") },
    { key: "Interior", label: t("تصميم داخلي", "Interior Design") },
    { key: "Urban", label: t("تخطيط عمراني", "Urban Planning") },
    { key: "Sustainable", label: t("مستدام", "Sustainable") }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.titleAr.includes(searchQuery) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-dark-slate py-5 position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("معرض الأعمال", "PORTFOLIO")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("مشاريعنا الهندسية والمعمارية المتميزة", "Our Featured Architectural & Engineering Portfolio")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ lineHeight: "1.8" }}>
                {t(
                  "تصفح نماذج من المشاريع المعمارية والإنشائية والتخطيطية التي قمنا بإعداد تصاميمها والإشراف عليها.",
                  "Explore real case studies of architectural designs, structural calculations, and master plans delivered by Atlas."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-4 bg-light-slate border-bottom">
        <div className="container px-4 px-lg-5">
          <div className="row g-3 align-items-center justify-content-between">
            {/* Category Tabs */}
            <div className="col-lg-8">
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

            {/* Search Input */}
            <div className="col-lg-4">
              <div className="input-group">
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
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
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
          ) : (
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
                      <h5 className="fw-bold mb-1 text-slate-900">{isRtl ? project.titleAr : project.title}</h5>
                      <p className="text-muted small mb-3">{isRtl ? project.title : project.titleAr}</p>
                      
                      <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: "1.6" }}>
                        {project.summary}
                      </p>

                      <div className="d-flex flex-column gap-2 mb-3 pt-3 border-top small text-muted">
                        <div className="d-flex align-items-center gap-2">
                          <FiMapPin className="text-gold flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <FiCalendar className="text-gold flex-shrink-0" />
                          <span>{t("سنة التنفيذ:", "Year:")} {project.year}</span>
                        </div>
                      </div>

                      <button
                        className="btn-atlas-primary w-100 justify-content-center text-uppercase"
                        style={{ fontSize: "13px" }}
                        onClick={() => setActiveProject(project)}
                      >
                        {t("عرض تفاصيل المشروع كاملة", "View Full Project Details")}
                        <FiMaximize2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal Popup */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};

export default Projects;
