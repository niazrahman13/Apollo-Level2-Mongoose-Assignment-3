import express from 'express';
import { CatRouter } from './category.routes';
import { CourseRouter } from './course.routes';
import { ReviewRoute } from './review.routes';
import { coursesRouter } from './courses.routes';

const router = express.Router()

const moduleRoutes = [

    {
        path:'/api/categories',
        route: CatRouter
    },
    {
        path:'/api/course',
        route: CourseRouter
    },
    {
        path:'/api/courses',
        route: coursesRouter
    },
    {
        path:'/api/reviews',
        route: ReviewRoute
    }
]

moduleRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})

export default router;