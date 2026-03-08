import { readCollection, writeCollection } from './store';
import type { SiteSettings, Publication, Research, Course, Achievement, NewsItem } from './types';

export function seedSiteSettings(): SiteSettings {
  const existing = readCollection<SiteSettings>('settings');
  if (existing.length > 0) return existing[0];

  const settings: SiteSettings = {
    id: '1',
    siteName: 'د. [الاسم] - أخصائية الأحياء الدقيقة',
    siteNameEn: 'Dr. [Name] - Microbiology Specialist',
    doctorName: 'د. [الاسم الكامل]',
    doctorNameEn: 'Dr. [Full Name]',
    doctorTitle: 'أستاذ مشارك في الأحياء الدقيقة',
    doctorTitleEn: 'Associate Professor of Microbiology',
    specialization: 'الأحياء الدقيقة الطبية والتشخيصية',
    specializationEn: 'Medical and Diagnostic Microbiology',
    email: 'contact@drmicrobiology.com',
    phone: '+966 XX XXX XXXX',
    address: 'قسم الأحياء الدقيقة، كلية العلوم',
    aboutText: 'متخصصة في مجال الأحياء الدقيقة مع خبرة تمتد لأكثر من 15 عامًا في البحث العلمي والتدريس الأكاديمي. تركز أبحاثي على مقاومة المضادات الحيوية والتشخيص الجزيئي للأمراض المعدية.',
    aboutTextEn: 'Specialized in microbiology with over 15 years of experience in scientific research and academic teaching. My research focuses on antibiotic resistance and molecular diagnosis of infectious diseases.',
    heroTitle: 'البحث العلمي في خدمة صحة المجتمع',
    heroSubtitle: 'متخصصة في الأحياء الدقيقة | باحثة | أكاديمية',
    heroImage: '',
    profileImage: '',
    twitterUrl: '',
    linkedinUrl: '',
    googleScholarUrl: '',
    researchGateUrl: '',
    orcidUrl: '',
    metaDescription: 'الموقع الرسمي للدكتورة المتخصصة في الأحياء الدقيقة - أبحاث، منشورات علمية، مقررات دراسية',
    metaKeywords: 'أحياء دقيقة، ميكروبيولوجي، بكتيريا، فيروسات، مقاومة المضادات الحيوية',
    updatedAt: new Date().toISOString(),
  };

  writeCollection('settings', [settings]);
  return settings;
}

export function seedPublications(): void {
  const existing = readCollection<Publication>('publications');
  if (existing.length > 0) return;

  const publications: Publication[] = [
    {
      id: '1',
      title: 'دراسة أنماط مقاومة المضادات الحيوية في البكتيريا المعزولة من المستشفيات',
      titleEn: 'Study of Antibiotic Resistance Patterns in Hospital-Isolated Bacteria',
      authors: 'د. [الاسم] وآخرون',
      journal: 'المجلة السعودية للعلوم البيولوجية',
      year: '2024',
      volume: '31',
      pages: '45-58',
      doi: '',
      abstract: 'تهدف هذه الدراسة إلى تحليل أنماط مقاومة المضادات الحيوية في العزلات البكتيرية المأخوذة من بيئات المستشفيات.',
      abstractEn: 'This study aims to analyze antibiotic resistance patterns in bacterial isolates from hospital environments.',
      category: 'بحث أصيل',
      pdfUrl: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'التشخيص الجزيئي للعدوى الفطرية باستخدام تقنية PCR',
      titleEn: 'Molecular Diagnosis of Fungal Infections Using PCR Technology',
      authors: 'د. [الاسم] وآخرون',
      journal: 'مجلة الأحياء الدقيقة التطبيقية',
      year: '2023',
      volume: '28',
      pages: '112-125',
      doi: '',
      abstract: 'تقدم هذه الورقة منهجية جديدة للتشخيص السريع للعدوى الفطرية باستخدام تقنيات التفاعل المتسلسل للبوليميراز.',
      abstractEn: 'This paper presents a novel methodology for rapid diagnosis of fungal infections using PCR techniques.',
      category: 'بحث أصيل',
      pdfUrl: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  writeCollection('publications', publications);
}

export function seedResearch(): void {
  const existing = readCollection<Research>('research');
  if (existing.length > 0) return;

  const research: Research[] = [
    {
      id: '1',
      title: 'مقاومة المضادات الحيوية في البكتيريا المعوية',
      titleEn: 'Antibiotic Resistance in Enteric Bacteria',
      description: 'مشروع بحثي يهدف إلى دراسة آليات مقاومة المضادات الحيوية في البكتيريا المعوية وتطوير استراتيجيات جديدة لمكافحتها.',
      descriptionEn: 'Research project aimed at studying antibiotic resistance mechanisms in enteric bacteria and developing new strategies to combat them.',
      status: 'ongoing',
      startDate: '2023-01-01',
      endDate: '2025-12-31',
      fundingSource: 'صندوق البحث العلمي',
      collaborators: 'جامعة الملك سعود، مستشفى الملك فيصل التخصصي',
      image: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'التنوع الميكروبي في البيئات القاحلة',
      titleEn: 'Microbial Diversity in Arid Environments',
      description: 'استكشاف التنوع البيولوجي للكائنات الدقيقة في البيئات الصحراوية واكتشاف أنواع جديدة ذات تطبيقات صناعية.',
      descriptionEn: 'Exploring microbial biodiversity in desert environments and discovering new species with industrial applications.',
      status: 'completed',
      startDate: '2021-06-01',
      endDate: '2023-06-30',
      fundingSource: 'مدينة الملك عبدالعزيز للعلوم والتقنية',
      collaborators: 'جامعة الملك عبدالله للعلوم والتقنية',
      image: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  writeCollection('research', research);
}

export function seedCourses(): void {
  const existing = readCollection<Course>('courses');
  if (existing.length > 0) return;

  const courses: Course[] = [
    {
      id: '1',
      title: 'مقدمة في الأحياء الدقيقة',
      titleEn: 'Introduction to Microbiology',
      code: 'MICRO 101',
      description: 'مقرر تأسيسي يغطي المفاهيم الأساسية في علم الأحياء الدقيقة بما في ذلك البكتيريا والفيروسات والفطريات والطفيليات.',
      descriptionEn: 'Foundational course covering basic concepts in microbiology including bacteria, viruses, fungi, and parasites.',
      level: 'بكالوريوس',
      semester: 'الأول',
      year: '2024',
      syllabus: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'علم البكتيريا الطبية',
      titleEn: 'Medical Bacteriology',
      code: 'MICRO 301',
      description: 'دراسة متقدمة للبكتيريا المسببة للأمراض وآليات الإمراض والتشخيص المخبري والعلاج.',
      descriptionEn: 'Advanced study of pathogenic bacteria, pathogenesis mechanisms, laboratory diagnosis, and treatment.',
      level: 'بكالوريوس',
      semester: 'الثاني',
      year: '2024',
      syllabus: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'تقنيات البيولوجيا الجزيئية',
      titleEn: 'Molecular Biology Techniques',
      code: 'MICRO 501',
      description: 'مقرر للدراسات العليا يركز على التقنيات الجزيئية المستخدمة في تشخيص ودراسة الكائنات الدقيقة.',
      descriptionEn: 'Graduate course focusing on molecular techniques used in diagnosis and study of microorganisms.',
      level: 'ماجستير',
      semester: 'الأول',
      year: '2024',
      syllabus: '',
      isPublished: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  writeCollection('courses', courses);
}

export function seedAll(): void {
  seedSiteSettings();
  seedPublications();
  seedResearch();
  seedCourses();
}
