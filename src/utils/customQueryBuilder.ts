import { CourseModel } from "../modules/course/courseModel";

const customQuery = async(query: any)=>{
    const { page = '1', limit = '10', sortBy, sortOrder, minPrice, maxPrice, tags, startDate, endDate, language, provider, durationInWeeks, level } = query;
  
    const filter: any = {};
    if (minPrice !== undefined) filter.price = { $gte: parseFloat(minPrice as string) };
    if (maxPrice !== undefined) filter.price = { ...filter.price, $lte: parseFloat(maxPrice as string) };
    if (tags !== undefined) filter['tags.name'] = tags;
    if (startDate !== undefined) filter.startDate = { $gte: startDate as string };
    if (endDate !== undefined) filter.endDate = { $lte: endDate as string };
    if (language !== undefined) filter.language = language as string;
    if (provider !== undefined) filter.provider = provider as string;
    if (durationInWeeks !== undefined) filter.durationInWeeks = parseInt(durationInWeeks as string, 10);
    if (level !== undefined) filter['details.level'] = level as string;

    const skip = (parseInt(page as any, 10) - 1) * parseInt(limit as any, 10);

    const courses = await CourseModel.find(filter)
      .sort({ [sortBy as string]: sortOrder === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(parseInt(limit as any, 10));

    const total = await CourseModel.countDocuments(filter);

    return{courses,total,page,limit}
}

export {customQuery}