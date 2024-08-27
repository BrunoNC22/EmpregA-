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

export const useGetOpportunitiesQuery = () => {
  return useQuery({
    queryKey: ['getOpportunities'],
    queryFn: getOpportunitiesFetch
  })
}