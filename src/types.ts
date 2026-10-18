export type Language = 'en' | 'ja';

export type CaseStatus = 
  | 'request_received'
  | 'vehicle_search'
  | 'under_inspection'
  | 'proposal'
  | 'waiting_approval'
  | 'contract_signed'
  | 'bidding'
  | 'purchased'
  | 'payment_escrow'
  | 'transport'
  | 'delivered';

export interface WorkflowStage {
  step: string;
  nameEn: string;
  nameJa: string;
  descEn: string;
  descJa: string;
  badgeEn: string;
  badgeJa: string;
}

export interface CostItem {
  labelEn: string;
  labelJa: string;
  amount: number;
  noteEn?: string;
  noteJa?: string;
  isTotal?: boolean;
}

export interface InspectionDefect {
  id: string;
  locationEn: string;
  locationJa: string;
  severity: 'minor' | 'moderate' | 'clean';
  descEn: string;
  descJa: string;
  photoUrl?: string;
}

export interface InspectionPhoto {
  id: string;
  titleEn: string;
  titleJa: string;
  categoryEn: string;
  categoryJa: string;
  url: string;
  noteEn?: string;
  noteJa?: string;
}

export interface CaseMessage {
  id: string;
  sender: 'client' | 'staff' | 'system';
  authorEn: string;
  authorJa: string;
  roleEn: string;
  roleJa: string;
  contentEn: string;
  contentJa: string;
  timestamp: string;
}

export interface AuditEvent {
  id: string;
  timeEn: string;
  timeJa: string;
  eventEn: string;
  eventJa: string;
  actorEn?: string;
  actorJa?: string;
}

export interface TransactionCase {
  id: string;
  caseNumber: string;
  titleEn: string;
  titleJa: string;
  vin: string;
  targetAuctionDate: string;
  clientNameEn: string;
  clientNameJa: string;
  currentStageIndex: number; // 0 to 10
  status: CaseStatus;
  grade: string;
  mileageKm: number;
  engine: string;
  drive: string;
  exteriorColorEn: string;
  exteriorColorJa: string;
  riskRatingEn: string;
  riskRatingJa: string;
  maxRecBidJpy: number;
  imageUrl: string;
  inspectionSummaryEn: string[];
  inspectionSummaryJa: string[];
  inspectionDefects: InspectionDefect[];
  photos: InspectionPhoto[];
  costs: CostItem[];
  contractStatus: 'pending' | 'signed' | 'draft';
  contractSignedAt?: string;
  contractSigner?: string;
  contractSha256?: string;
  messages: CaseMessage[];
  auditLog: AuditEvent[];
}
