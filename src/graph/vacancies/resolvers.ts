import { Vacancies } from "../../utils";

export const vacancy_resolvers = {
  Query: {
    getVacancies: async (_: any, { company_id }: any, context: any) => {
      try {
        const result = await Vacancies.find({
          company_id,
        });
        //@ts-ignore
        console.log("VACANCIES FOUND:", result);
        return result;
      } catch (e) {
        console.log("NO VACANCY FOUND", e);
        return e;
      }
    },
  },
};
