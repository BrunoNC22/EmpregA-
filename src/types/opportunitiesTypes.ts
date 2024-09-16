export type WorkScheduleEnum = {
  PART_TIME: 'part-time',
  FULL_TIME: 'full-time'
}

export type WorkModeEnum = {
  HYBRID: 'hybrid',
  ONSITE: 'onsite',
  REMOTE: 'remote'
}

export type OpportunityLevelEnum = {
  JUNIOR: 'junior',
  MID: 'mid',
  SENIOR: 'senior',
  MANAGERIAL: 'managerial'
}

export type OpportunityTypeEnum = {
  INTERNSHIP: 'internship',
  SCHOLARSHIP: 'scholarship',
  CLT: 'clt',
  PJ: 'pj'
}

export type ApiOpportunity = {
  "companyId": string,
  "location": {
    "state": string,
    "city": string
  },
  "title": string,
  "type": OpportunityTypeEnum['INTERNSHIP'] | OpportunityTypeEnum['SCHOLARSHIP'] | OpportunityTypeEnum['CLT'] | OpportunityTypeEnum['PJ'],
  "salary": number,
  "benefits": string[],
  "requirements": string[],
  "description": string,
  "publicationDate": string,
  "applicationDeadline": string,
  "workSchedule": WorkScheduleEnum["PART_TIME"] | WorkScheduleEnum["FULL_TIME"],
  "workMode": WorkModeEnum['HYBRID'] | WorkModeEnum['ONSITE'] | WorkModeEnum['REMOTE'],
  "sector": string,
  "level": OpportunityLevelEnum['JUNIOR'] | OpportunityLevelEnum['MID'] | OpportunityLevelEnum['SENIOR'] | OpportunityLevelEnum['MANAGERIAL'],
  "contact": {
    "email": string,
    "phone": string
  },
  "desiredSkills": string[],
  "education": string,
  "experience": string
}

export type Opportunity = {
  "companyId": string,
  "location": {
    "state": string,
    "city": string
  },
  "title": string,
  "type": 'internship' | 'scholarship' | 'clt' | 'pj' 
  "salary": number,
  "benefits": string[],
  "requirements": string[],
  "description": string,
  "publicationDate": Date,
  "applicationDeadline": Date,
  "workSchedule": 'part-time' | 'full-time',
  "workMode": "hybrid" | 'onsite' | 'remote',
  "sector": string,
  "level": 'junior' | 'mid' | 'senior' | 'managerial',
  "contact": {
    "email": string,
    "phone": string
  },
  "desiredSkills": string[],
  "education": string,
  "experience": string
}