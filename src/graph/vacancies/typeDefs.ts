import { gql } from "apollo-server-express";

export const vancancy_type_defs = gql`
  type TEmployerQuestions {
    value: String
    keywords: [String]
  }
  type TJobDescription {
    value: String
    keywords: [String]
  }

  type TPositionAndResponsibilites {
    value: String
    keywords: [String]
  }

  type TSkillsAndQualifications {
    value: String
    keywords: [String]
  }

  type TSalary {
    to: Int
    from: Int
  }

  type VacanciesFound {
    employer_questions: TEmployerQuestions
    job_category: String!
    job_description: TJobDescription
    location: String
    position_and_responsibilities: TPositionAndResponsibilites
    position_type: String
    salary: TSalary
    skills_and_qualifications: TSkillsAndQualifications
    vacancy: String
    company_id: String
  }

  extend type Query {
    getVacancies(company_id: String): [VacanciesFound]
  }
`;
