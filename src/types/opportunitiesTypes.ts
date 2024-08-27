export type ApiOpportunity = {
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
  "publicationDate": string,
  "applicationDeadline": string,
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