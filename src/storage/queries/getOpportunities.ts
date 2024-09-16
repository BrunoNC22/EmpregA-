import { useQuery } from "@tanstack/vue-query"
import api from "../../axios"
import { ApiOpportunity, Opportunity } from "../../types/opportunitiesTypes"


const parseOpportunity = (apiOpportunity: ApiOpportunity): Opportunity => ({
  "companyId": apiOpportunity.companyId,
  "location": {
    "state": apiOpportunity.location.state,
    "city": apiOpportunity.location.city
  },
  "title": apiOpportunity.title,
  "type": apiOpportunity.type,
  "salary": apiOpportunity.salary,
  "benefits": apiOpportunity.benefits,
  "requirements": apiOpportunity.requirements,
  "description": apiOpportunity.description,
  "publicationDate": new Date(apiOpportunity.publicationDate),
  "applicationDeadline": new Date(apiOpportunity.applicationDeadline),
  "workSchedule": apiOpportunity.workSchedule,
  "workMode": apiOpportunity.workMode,
  "sector": apiOpportunity.sector,
  "level": apiOpportunity.level,
  "contact": {
    "email": apiOpportunity.contact.email,
    "phone": apiOpportunity.contact.phone
  },
  "desiredSkills": apiOpportunity.desiredSkills,
  "education": apiOpportunity.education,
  "experience": apiOpportunity.experience
})

const getOpportunitiesFetch = async ():  Promise<Opportunity[]> => {
  const {data} = await api.get<ApiOpportunity[]>('/job-opportunities')
  return data.map((opportunity) => {
    return parseOpportunity(opportunity)
  })
  // return Array(7).fill(parseOpportunity(data[0]))
}

const getOpportunitiesFetchMock = async (): Promise<Opportunity[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          companyId: "123456",
          location: {
            state: "SP",
            city: "São Paulo"
          },
          title: "Software Developer",
          type: "clt",
          salary: 5000,
          benefits: ["Health insurance", "Meal voucher", "Transportation allowance"],
          requirements: ["JavaScript", "Vue.js", "Node.js"],
          description: "We are looking for a Software Developer to work with our team.",
          publicationDate: new Date(),
          applicationDeadline: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          workSchedule: "full-time",
          workMode: "hybrid",
          sector: "Technology",
          level: "mid",
          contact: {
            email: "hr@company.com",
            phone: "+5511999999999"
          },
          desiredSkills: ["Problem-solving", "Teamwork", "Communication"],
          education: "Bachelor's degree in Computer Science",
          experience: "3+ years in software development"
        },
        {
          companyId: "789101",
          location: {
            state: "RJ",
            city: "Rio de Janeiro"
          },
          title: "Data Scientist Intern",
          type: "internship",
          salary: 2000,
          benefits: ["Meal voucher", "Transportation allowance"],
          requirements: ["Python", "Machine Learning", "Data Analysis"],
          description: "Join our data science team as an intern.",
          publicationDate: new Date(),
          applicationDeadline: new Date(new Date().setMonth(new Date().getMonth() + 2)),
          workSchedule: "part-time",
          workMode: "remote",
          sector: "Finance",
          level: "junior",
          contact: {
            email: "recruitment@company.com",
            phone: "+5521998888888"
          },
          desiredSkills: ["Critical thinking", "Data visualization", "Statistics"],
          education: "Currently pursuing a degree in Data Science",
          experience: "No experience required"
        }
      ])
    }, 1000 * 2) // 2 segundos
  })
}

export const useGetOpportunitiesQuery = () => {
  return useQuery({
    queryKey: ['getOpportunities'],
    queryFn: getOpportunitiesFetchMock
  })
}