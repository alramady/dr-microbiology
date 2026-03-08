export interface SiteSettings {
  id: string;
  siteName: string;
  siteNameEn: string;
  doctorName: string;
  doctorNameEn: string;
  doctorTitle: string;
  doctorTitleEn: string;
  specialization: string;
  specializationEn: string;
  email: string;
  phone: string;
  address: string;
  aboutText: string;
  aboutTextEn: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  profileImage: string;
  twitterUrl: string;
  linkedinUrl: string;
  googleScholarUrl: string;
  researchGateUrl: string;
  orcidUrl: string;
  metaDescription: string;
  metaKeywords: string;
  updatedAt: string;
}

export interface Publication {
  id: string;
  title: string;
  titleEn: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  pages: string;
  doi: string;
  abstract: string;
  abstractEn: string;
  category: string;
  pdfUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Research {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  status: 'ongoing' | 'completed' | 'planned';
  startDate: string;
  endDate: string;
  fundingSource: string;
  collaborators: string;
  image: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  titleEn: string;
  code: string;
  description: string;
  descriptionEn: string;
  level: string;
  semester: string;
  year: string;
  syllabus: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  year: string;
  category: string;
  image: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  category: string;
  isPublished: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  isReplied: boolean;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isPublished: boolean;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  bio: string;
  bioEn: string;
  image: string;
  email: string;
  role: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
