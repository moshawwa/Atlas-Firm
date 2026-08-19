import React, { useState } from "react";
import SectionTitle from "../components/Sectiontitle";
import { useLanguage } from "../context/LanguageContext";
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiMessageSquare,
  FiHelpCircle
} from "react-icons/fi";

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Architectural Design",
    budget: "Standard",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        ticketId: "ATL-" + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toLocaleTimeString(),
        ...formData
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Architectural Design",
        budget: "Standard",
        message: ""
      });
    }, 600);
  };

  return (
    <div>
      {/* Header Banner */}
      <section className="bg-dark-slate py-5 position-relative overflow-hidden">
        <div className="hero-overlay-grid"></div>
        <div className="container px-4 px-lg-5 py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="section-badge mb-3">{t("تواصل معنا", "CONTACT US")}</span>
              <h1 className="display-4 fw-extrabold text-white mb-3">
                {t("يسعدنا استقبال استفساراتكم ومناقشة مشاريعكم", "We Welcome Your Inquiries & Project Consultation")}
              </h1>
              <p className="fs-5 text-slate-300 mb-0" style={{ lineHeight: "1.8" }}>
                {t(
                  "فريقنا الهندسي في مكاتب فلسطين ومصر جاهز للتواصل معك ومساعدتك في بلورة أفكار مشروعك.",
                  "Our engineering consultants in Palestine and Egypt offices are ready to assist you with your project."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container px-4 px-lg-5">
          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7">
              <div className="p-4 p-lg-5 bg-light rounded-4 border shadow-sm">
                <h3 className="fw-bold mb-2 text-slate-900">{t("أرسل استفسارك الهندسي", "Send Engineering Inquiry")}</h3>
                <p className="text-muted small mb-4">
                  {t("قم بتعبئة النموذج وسيقوم أحد مهندسينا بالتواصل معك خلال أقل من 24 ساعة.", "Fill out the form below and one of our senior engineers will contact you within 24 hours.")}
                </p>

                {submittedData && (
                  <div className="alert alert-success border-0 shadow-sm rounded-3 p-4 mb-4" role="alert">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <FiCheckCircle size={28} className="text-success" />
                      <div>
                        <h5 className="fw-bold text-success m-0">{t("تم استلام طلبك بنجاح!", "Inquiry Received Successfully!")}</h5>
                        <small className="text-muted">{t("رقم التذكرة المرجعي:", "Reference Ticket #:")} {submittedData.ticketId}</small>
                      </div>
                    </div>
                    <p className="small mb-2 text-dark">
                      {t(
                        `شكراً لك عزيزي ${submittedData.name}. تم تسجيل استفسارك الخاص بـ (${submittedData.projectType}) وسنقوم بالاتصال بك على رقم (${submittedData.phone}).`,
                        `Thank you ${submittedData.name}. Your inquiry for (${submittedData.projectType}) has been logged. We will reach out to (${submittedData.phone}).`
                      )}
                    </p>
                    <button
                      className="btn btn-sm btn-outline-success mt-2"
                      onClick={() => setSubmittedData(null)}
                    >
                      {t("إرسال طلب جديد", "Submit Another Request")}
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-slate-700">{t("الاسم الكامل *", "Full Name *")}</label>
                      <input
                        type="text"
                        className="form-control form-control-lg fs-6"
                        placeholder={t("أدخل اسمك الكريم", "Enter your full name")}
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-slate-700">{t("رقم الجوال / الهاتف *", "Phone Number *")}</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg fs-6"
                        placeholder="+970 / +20 XXXXXXXX"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-slate-700">{t("البريد الإلكتروني *", "Email Address *")}</label>
                      <input
                        type="email"
                        className="form-control form-control-lg fs-6"
                        placeholder="atlas.engineers20@gmail.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold small text-slate-700">{t("نوع الخدمة / المشروع", "Service / Project Type")}</label>
                      <select
                        className="form-select form-select-lg fs-6"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Architectural Design">{t("التصميم والتخطيط المعماري", "Architectural Design & Planning")}</option>
                        <option value="Structural Engineering">{t("الهندسة والتحليل الإنشائي", "Structural Engineering & Calculations")}</option>
                        <option value="Interior Architecture">{t("التصميم الداخلي والديكور", "Interior Architecture & Fit-out")}</option>
                        <option value="Project Management">{t("إدارة وتنفيد المشاريع", "Project Management & Site Supervision")}</option>
                        <option value="Sustainable Building">{t("المباني المستدامة والطاقة", "Sustainable Green Building")}</option>
                        <option value="Master Planning">{t("التخطيط العمراني وتطوير الأراضي", "Urban Master Planning")}</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold small text-slate-700">{t("تفاصيل المشروع أو الاستفسار *", "Project Details / Inquiry *")}</label>
                      <textarea
                        className="form-control form-control-lg fs-6"
                        rows={4}
                        placeholder={t("اكتب نبذة عن موقع المشروع، المساحة التقديرية، والمتطلبات الهندسية...", "Provide brief notes on project location, estimated floor area, and engineering scope...")}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-atlas-primary w-100 justify-content-center py-3 fs-6"
                      >
                        {isSubmitting ? t("جاري الإرسال...", "Sending...") : t("إرسال طلب الاستشارة", "Submit Consultation Request")}
                        <FiSend size={18} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Info & Offices Column */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                {/* Direct WhatsApp Button */}
                <a
                  href="https://wa.me/970599000000?text=مرحباً%20شركة%20أطلس%20للاستشارات%20الهندسية،%20أود%20الاستفسار%20عن%20استشارة%20هندسية"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-success text-white rounded-4 d-flex align-items-center justify-content-between text-decoration-none shadow-sm hover-lift"
                >
                  <div className="d-flex align-items-center gap-3">
                    <FiMessageSquare size={32} />
                    <div>
                      <h5 className="fw-bold mb-0">{t("تواصل سريع عبر واتساب", "Instant WhatsApp Support")}</h5>
                      <small className="text-white-50">{t("تحدث مباشرة مع المهندس المناظر", "Chat directly with a senior consultant")}</small>
                    </div>
                  </div>
                  <span className="btn btn-light btn-sm rounded-pill fw-bold text-success px-3">
                    {t("محادثة الآن", "Chat Now")}
                  </span>
                </a>

                {/* Office 1: Palestine Card */}
                <div className="p-4 bg-slate-900 text-white rounded-4 border-start border-4 border-warning">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold text-gold m-0">{t("1. المقر الرئيسي - فلسطين", "1. Head Office - Palestine")}</h5>
                    <span className="badge bg-gold text-dark fw-bold">Gaza</span>
                  </div>
                  <div className="d-flex flex-column gap-2 small text-slate-300">
                    <div className="d-flex align-items-start gap-2 text-black">
                      <FiMapPin className="text-gold mt-1 flex-shrink-0" size={16} />
                      <span>{t("شارع الأمم المتحدة 2/2013، حي الرمال، مدينة غزة، فلسطين", "2/2013 United Nation Street, Rimal, Gaza City, Palestine")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-black">
                      <FiMail className="text-gold flex-shrink-0" size={16} />
                      <a href="mailto:atlas.engineers20@gmail.com" className="text-black">atlas.engineers20@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-black">
                      <FiClock className="text-gold flex-shrink-0" size={16} />
                      <span>{t("الأحد - الخميس: 8:00 صباحاً - 4:00 مساءً", "Sun - Thu: 8:00 AM - 4:00 PM")}</span>
                    </div>
                  </div>
                </div>

                {/* Office 2: Egypt Card */}
                <div className="p-4 bg-slate-900 text-white rounded-4 border-start border-4 border-primary">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold text-primary m-0">{t("2. مكتب مصر - القاهرة", "2. Egypt Office - Cairo")}</h5>
                    <span className="badge bg-primary text-white fw-bold">Cairo</span>
                  </div>
                  <div className="d-flex flex-column gap-2 small text-slate-300">
                    <div className="d-flex align-items-start gap-2 text-black">
                      <FiMapPin className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>{t("  مبنى 111/49، B11 مدينتي، القاهرة الجديدة، مصر", " 111/49 Building , Madinaty B11, New Cairo, Egypt")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-black">
                      <FiMail className="text-primary flex-shrink-0" size={16} />
                      <a href="mailto:atlas.engineers20@gmail.com" className="text-black">atlas.engineers20@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-black">
                      <FiClock className="text-primary flex-shrink-0" size={16} />
                      <span>{t("الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً", "Sun - Thu: 9:00 AM - 5:00 PM")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light-slate">
        <div className="container px-4 px-lg-5">
          <SectionTitle
            badge={t("الأسئلة الشائعة", "FREQUENTLY ASKED QUESTIONS")}
            title={t("إجابات على أكثر الاستفسارات تكراراً", "Answers to Frequently Asked Questions")}
            subtitle={t(
              "نوفر لكم معلومات واضحة ومباشرة حول آلية التعامل والعقود وتراخيص البناء.",
              "Clear details regarding design timelines, municipal permits, and site supervision."
            )}
          />

          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bold text-slate-900"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      <FiHelpCircle className="me-2 text-primary" />
                      {t("كم تستغرق مرحلة التصميم المعماري والإنشائي؟", "How long does architectural & structural design take?")}
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted small leading-relaxed">
                      {t(
                        "تتفاوت المدة بحسب حجم ونوع المشروع. المشاريع السكنية والفيلات تستغرق عادة من 3 إلى 6 أسابيع، بينما المشاريع التجارية والأبراج قد تستغرق من 8 إلى 14 أسبوعاً تشمل كراسات المواصفات واعتمادات تراخيص البناء.",
                        "Timelines vary by project scope. Residential villas typically take 3 to 6 weeks, while commercial towers take 8 to 14 weeks including municipal permit filings."
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold text-slate-900"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      <FiHelpCircle className="me-2 text-primary" />
                      {t("هل تشمل خدماتكم استخراج التراخيص واعتمادات البلديات؟", "Does your service cover municipal permit approvals?")}
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted small leading-relaxed">
                      {t(
                        "نعم، كافة مخططاتنا المعمارية والإنشائية والكهرو ميكانيكية تصمم لتكون متوافقة 100% مع كود البناء وااشتراطات البلدية والدفاع المدني والجهات المختصة.",
                        "Yes, all our architectural, structural, and MEP engineering drawings are 100% compliant with local building codes and civil defense regulations."
                      )}
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-bold text-slate-900"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      <FiHelpCircle className="me-2 text-primary" />
                      {t("هل توفرون خيار الإشراف الموقعي المستمر على المقاول؟", "Do you offer continuous on-site construction supervision?")}
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted small leading-relaxed">
                      {t(
                        "بالتأكيد، نقدم عقود إشراف موقعي هندسي (زيارات دورية أو مهندس مقيم) للتأكد من مطابقة أعمال الصب والحديد والتشطيبات للمخططات المعتمدة.",
                        "Absolutely. We offer both resident engineering and periodic site audit contracts to ensure contractor adherence to structural blueprints."
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
